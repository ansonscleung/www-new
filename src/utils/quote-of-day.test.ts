import { describe, expect, it } from "vitest";
import { quotes } from "../data/quotes";
import { Quote } from "../types/portfolio";
import { getHongKongDateKey, quoteIndexForDate, validateQuotes } from "./quote-of-day";

const validQuote: Quote = {
  id: "test",
  text: { en: "Test", zhHant: "測試" },
  author: { name: { en: "Author", zhHant: "作者" } },
  work: { title: { en: "Work", zhHant: "作品" }, type: "book" },
  category: "technology",
  source: {
    url: "https://example.org/source",
    originalLanguage: "en",
    provenance: "primary",
    translationNote: "Editorial Traditional Chinese translation.",
  },
};

describe("quote-of-day", () => {
  it("ships exactly 100 valid bilingual entries in the approved category split", () => {
    expect(quotes).toHaveLength(100);
    expect(Object.groupBy(quotes, (quote) => quote.category)).toMatchObject({
      technology: expect.arrayContaining([expect.anything()]),
      learning: expect.arrayContaining([expect.anything()]),
      society: expect.arrayContaining([expect.anything()]),
      product: expect.arrayContaining([expect.anything()]),
      "public-service": expect.arrayContaining([expect.anything()]),
    });
    expect(quotes.filter((quote) => quote.category === "technology")).toHaveLength(30);
    expect(quotes.filter((quote) => quote.category === "learning")).toHaveLength(25);
    expect(quotes.filter((quote) => quote.category === "society")).toHaveLength(20);
    expect(quotes.filter((quote) => quote.category === "product")).toHaveLength(15);
    expect(quotes.filter((quote) => quote.category === "public-service")).toHaveLength(10);
    expect(new Set(quotes.map((quote) => quote.id)).size).toBe(100);
    expect(new Set(quotes.map((quote) => quote.source.provenance))).toEqual(
      new Set(["primary", "reputable-secondary"])
    );
    expect(quotes[0].id).toBe("turing-short-distance");
    expect(quotes.at(-1)?.id).toBe("pascal-heart-reasons");
    expect(quotes.every((quote) =>
      [quote.text.en, quote.text.zhHant, quote.author.name.en, quote.author.name.zhHant,
        quote.work.title.en, quote.work.title.zhHant, quote.source.url].every((value) => value.trim())
    )).toBe(true);
    expect(validateQuotes(quotes)).toEqual(quotes);
  });

  it("records the original language for translated Traditional Chinese sources", () => {
    const translatedChineseQuotes = quotes.filter(
      (quote) => quote.source.originalLanguage === "zhHant"
    );

    expect(translatedChineseQuotes.length).toBeGreaterThan(0);
    expect(translatedChineseQuotes.every((quote) => quote.source.originalLanguage === "zhHant")).toBe(true);
  });
  it("uses the Hong Kong calendar date at its UTC boundary", () => {
    expect(getHongKongDateKey(new Date("2026-08-25T15:59:59.000Z"))).toBe("2026-08-25");
    expect(getHongKongDateKey(new Date("2026-08-25T16:00:00.000Z"))).toBe("2026-08-26");
  });

  it("selects a deterministic index for the same Hong Kong date", () => {
    expect(quoteIndexForDate(new Date("2026-08-25T01:00:00.000Z"), 100)).toBe(
      quoteIndexForDate(new Date("2026-08-25T14:00:00.000Z"), 100)
    );
  });

  it("rejects missing nested objects and bilingual fields cleanly", () => {
    expect(() => validateQuotes([{ ...validQuote, text: undefined }])).toThrow("text.en");
    expect(() => validateQuotes([{ ...validQuote, author: undefined }])).toThrow("author.name.en");
    expect(() => validateQuotes([{ ...validQuote, work: undefined }])).toThrow("work.title.en");
    expect(() => validateQuotes([{ ...validQuote, text: { en: "", zhHant: "測試" } }])).toThrow(
      "text.en"
    );
  });

  it("rejects missing work type, invalid enums, and unsupported source protocols", () => {
    expect(() => validateQuotes([{ ...validQuote, work: { ...validQuote.work, type: undefined } }])).toThrow(
      "work.type"
    );
    expect(() => validateQuotes([{ ...validQuote, category: "wrong" }])).toThrow("category");
    expect(() => validateQuotes([{ ...validQuote, source: { ...validQuote.source, provenance: "wrong" } }])).toThrow(
      "source.provenance"
    );
    expect(() => validateQuotes([{ ...validQuote, source: { ...validQuote.source, provenance: undefined } }])).toThrow(
      "source.provenance"
    );
    expect(() => validateQuotes([{ ...validQuote, source: { ...validQuote.source, originalLanguage: undefined } }])).toThrow(
      "source.originalLanguage"
    );
    expect(() => validateQuotes([{ ...validQuote, source: { ...validQuote.source, url: "not-a-url" } }])).toThrow(
      "source.url"
    );
    expect(() => validateQuotes([{ ...validQuote, source: { ...validQuote.source, url: "ftp://example.org" } }])).toThrow(
      "source.url"
    );
  });
});
