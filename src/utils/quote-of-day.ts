import { Quote, QuoteCategory, QuoteWorkType } from "../types/portfolio";

const categories: readonly QuoteCategory[] = ["technology", "learning", "product", "society", "public-service"];
const workTypes: readonly QuoteWorkType[] = ["book", "essay", "article", "speech", "interview", "other"];
const isRecord = (value: unknown): value is Record<string, unknown> => typeof value === "object" && value !== null && !Array.isArray(value);

const readText = (value: unknown, field: string, index: number): string => {
  if (typeof value !== "string" || !value.trim()) throw new Error(`Quote ${index + 1}: ${field} is required.`);
  return value;
};

const readBilingual = (value: unknown, field: string, index: number) => {
  const record = isRecord(value) ? value : {};
  return { en: readText(record.en, `${field}.en`, index), zhHant: readText(record.zhHant, `${field}.zhHant`, index) };
};

export const validateQuotes = (input: unknown): readonly Quote[] => {
  if (!Array.isArray(input)) throw new Error("Quotes must be an array.");
  const validated = input.map((item, index): Quote => {
    const record = isRecord(item) ? item : {};
    const author = isRecord(record.author) ? record.author : {};
    const work = isRecord(record.work) ? record.work : {};
    const source = isRecord(record.source) ? record.source : {};
    const text = readBilingual(record.text, "text", index);
    const authorName = readBilingual(author.name, "author.name", index);
    const workTitle = readBilingual(work.title, "work.title", index);
    const category = readText(record.category, "category", index) as QuoteCategory;
    const type = readText(work.type, "work.type", index) as QuoteWorkType;
    const originalLanguage = readText(source.originalLanguage, "source.originalLanguage", index);
    const provenance = readText(source.provenance, "source.provenance", index);
    const url = readText(source.url, "source.url", index);
    if (!categories.includes(category)) throw new Error(`Quote ${index + 1}: category is invalid.`);
    if (!workTypes.includes(type)) throw new Error(`Quote ${index + 1}: work.type is invalid.`);
    if (!["en", "zhHant", "other"].includes(originalLanguage)) throw new Error(`Quote ${index + 1}: source.originalLanguage is invalid.`);
    if (!["primary", "reputable-secondary"].includes(provenance)) throw new Error(`Quote ${index + 1}: source.provenance is invalid.`);
    try {
      if (!/^https?:$/.test(new URL(url).protocol)) throw new Error("unsupported protocol");
    } catch {
      throw new Error(`Quote ${index + 1}: source.url must be a valid HTTP(S) URL.`);
    }
    return {
      id: readText(record.id, "id", index),
      text,
      author: { name: authorName },
      work: { title: workTitle, type, ...(typeof work.date === "string" && work.date.trim() ? { date: work.date } : {}) },
      category,
      source: {
        url,
        originalLanguage: originalLanguage as Quote["source"]["originalLanguage"],
        provenance: provenance as Quote["source"]["provenance"],
        ...(typeof source.translationNote === "string" && source.translationNote.trim() ? { translationNote: source.translationNote } : {}),
      },
    };
  });
  if (validated.length !== 30) throw new Error(`Expected exactly 30 quotes; received ${validated.length}.`);
  return Object.freeze(validated);
};

export const getHongKongDateKey = (date: Date): string => {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Hong_Kong", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(date);
  const part = (type: Intl.DateTimeFormatPartTypes) => parts.find((item) => item.type === type)?.value;
  return `${part("year")}-${part("month")}-${part("day")}`;
};

export const quoteIndexForDate = (date: Date, count: number): number => {
  if (!Number.isInteger(count) || count < 1) throw new Error("Quote count must be a positive integer.");
  return [...getHongKongDateKey(date)].reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0, 0) % count;
};
