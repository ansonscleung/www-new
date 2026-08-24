import {
  Quote,
  QuoteCategory,
  QuoteWorkType,
} from "../types/portfolio";
import { validateQuotes } from "../utils/quote-of-day";

interface QuoteRecord {
  id: string;
  text: [en: string, zhHant: string];
  author: [en: string, zhHant: string];
  work: [en: string, zhHant: string];
  workType: QuoteWorkType;
  category: QuoteCategory;
  sourceUrl: string;
  originalLanguage?: Quote["source"]["originalLanguage"];
  translationNote?: string;
}

const records: readonly QuoteRecord[] = [
  {
    id: "shelley-change",
    text: [
      "Nothing is so painful to the human mind as a great and sudden change.",
      "對人心而言，沒有甚麼比巨大而突如其來的改變更痛苦。",
    ],
    author: ["Mary Shelley", "瑪麗．雪萊"],
    work: ["Frankenstein", "《科學怪人》"],
    workType: "book",
    category: "technology",
    sourceUrl: "https://www.gutenberg.org/files/84/84-h/84-h.htm",
  },
  {
    id: "dickens-times",
    text: [
      "It was the best of times, it was the worst of times.",
      "這是最好的時代，也是最壞的時代。",
    ],
    author: ["Charles Dickens", "查爾斯．狄更斯"],
    work: ["A Tale of Two Cities", "《雙城記》"],
    workType: "book",
    category: "society",
    sourceUrl: "https://www.gutenberg.org/files/98/98-h/98-h.htm",
  },
  {
    id: "austen-truth",
    text: [
      "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.",
      "這是舉世公認的真理：擁有一筆財富的單身男子，必定需要一位妻子。",
    ],
    author: ["Jane Austen", "珍．奧斯汀"],
    work: ["Pride and Prejudice", "《傲慢與偏見》"],
    workType: "book",
    category: "society",
    sourceUrl: "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm",
  },
  {
    id: "shakespeare-self",
    text: ["This above all: to thine own self be true.", "最重要的是：忠於你自己。"],
    author: ["William Shakespeare", "威廉．莎士比亞"],
    work: ["Hamlet", "《哈姆雷特》"],
    workType: "other",
    category: "learning",
    sourceUrl: "https://www.gutenberg.org/files/1524/1524-h/1524-h.htm",
  },
  {
    id: "bronte-free",
    text: [
      "I am no bird; and no net ensnares me; I am a free human being with an independent will.",
      "我不是鳥，沒有網能困住我；我是擁有獨立意志的自由人。",
    ],
    author: ["Charlotte Brontë", "夏洛蒂．勃朗特"],
    work: ["Jane Eyre", "《簡愛》"],
    workType: "book",
    category: "society",
    sourceUrl: "https://www.gutenberg.org/files/1260/1260-h/1260-h.htm",
  },
  {
    id: "carroll-begin",
    text: [
      "Begin at the beginning, and go on till you come to the end: then stop.",
      "從開頭開始，一直走到結尾，然後停下來。",
    ],
    author: ["Lewis Carroll", "路易斯．卡羅"],
    work: ["Alice's Adventures in Wonderland", "《愛麗絲夢遊仙境》"],
    workType: "book",
    category: "product",
    sourceUrl: "https://www.gutenberg.org/files/11/11-h/11-h.htm",
  },
  {
    id: "melville-ishmael",
    text: ["Call me Ishmael.", "叫我以實瑪利。"],
    author: ["Herman Melville", "赫爾曼．梅爾維爾"],
    work: ["Moby-Dick", "《白鯨記》"],
    workType: "book",
    category: "society",
    sourceUrl: "https://www.gutenberg.org/files/2701/2701-h/2701-h.htm",
  },
  {
    id: "stoker-lights",
    text: [
      "There are darknesses in life, and there are lights; you are one of the lights.",
      "生命中有黑暗，也有光明；你就是其中一道光。",
    ],
    author: ["Bram Stoker", "布拉姆．斯托克"],
    work: ["Dracula", "《德古拉》"],
    workType: "book",
    category: "society",
    sourceUrl: "https://www.gutenberg.org/files/345/345-h/345-h.htm",
  },
  {
    id: "thoreau-desperation",
    text: [
      "The mass of men lead lives of quiet desperation.",
      "大多數人過著靜默絕望的生活。",
    ],
    author: ["Henry David Thoreau", "亨利．大衛．梭羅"],
    work: ["Walden", "《湖濱散記》"],
    workType: "book",
    category: "society",
    sourceUrl: "https://www.gutenberg.org/files/205/205-h/205-h.htm",
  },
  {
    id: "machiavelli-feared",
    text: [
      "It is much safer to be feared than loved, when, of the two, either must be dispensed with.",
      "二者不可兼得時，被畏懼遠比被愛戴安全。",
    ],
    author: ["Niccolò Machiavelli", "尼可羅．馬基維利"],
    work: ["The Prince", "《君主論》"],
    workType: "book",
    category: "public-service",
    sourceUrl: "https://www.gutenberg.org/files/1232/1232-h/1232-h.htm",
  },
  {
    id: "whitman-celebrate",
    text: ["I celebrate myself, and sing myself.", "我歌頌自己，也吟唱自己。"],
    author: ["Walt Whitman", "華特．惠特曼"],
    work: ["Leaves of Grass", "《草葉集》"],
    workType: "book",
    category: "society",
    sourceUrl: "https://www.gutenberg.org/files/1322/1322-h/1322-h.htm",
  },
  {
    id: "barrie-grow",
    text: ["All children, except one, grow up.", "所有孩子，除了一個，都會長大。"],
    author: ["J. M. Barrie", "J．M．巴里"],
    work: ["Peter Pan", "《彼得潘》"],
    workType: "book",
    category: "learning",
    sourceUrl: "https://www.gutenberg.org/files/16/16-h/16-h.htm",
  },
  {
    id: "carroll-mad",
    text: ["We're all mad here.", "我們在這裡全都瘋了。"],
    author: ["Lewis Carroll", "路易斯．卡羅"],
    work: ["Alice's Adventures in Wonderland", "《愛麗絲夢遊仙境》"],
    workType: "book",
    category: "product",
    sourceUrl: "https://www.gutenberg.org/files/11/11-h/11-h.htm",
  },
  {
    id: "shelley-purpose",
    text: [
      "Nothing contributes so much to tranquillise the mind as a steady purpose.",
      "沒有甚麼比堅定目標更能安定心神。",
    ],
    author: ["Mary Shelley", "瑪麗．雪萊"],
    work: ["Frankenstein", "《科學怪人》"],
    workType: "book",
    category: "product",
    sourceUrl: "https://www.gutenberg.org/files/84/84-h/84-h.htm",
  },
  {
    id: "carroll-proof",
    text: ["It proves nothing of the sort!", "這完全證明不了甚麼！"],
    author: ["Lewis Carroll", "路易斯．卡羅"],
    work: ["Alice's Adventures in Wonderland", "《愛麗絲夢遊仙境》"],
    workType: "book",
    category: "product",
    sourceUrl: "https://www.gutenberg.org/files/11/11-h/11-h.htm",
  },
  {
    id: "sunzi-deception",
    text: ["All warfare is based on deception.", "兵者，詭道也。"],
    author: ["Sun Tzu", "孫子"],
    work: ["The Art of War", "《孫子兵法》"],
    workType: "book",
    category: "public-service",
    sourceUrl: "https://www.gutenberg.org/files/132/132-h/132-h.htm",
    originalLanguage: "zhHant",
    translationNote:
      "English follows Lionel Giles's translation; Traditional Chinese is the classical source text.",
  },
  {
    id: "plato-beginning",
    text: [
      "The beginning is the most important part of any work.",
      "任何工作，開端都是最重要的部分。",
    ],
    author: ["Plato", "柏拉圖"],
    work: ["The Republic", "《理想國》"],
    workType: "book",
    category: "learning",
    sourceUrl: "https://www.gutenberg.org/files/1497/1497-h/1497-h.htm",
  },
  {
    id: "austen-opinion",
    text: [
      "My good opinion once lost is lost for ever.",
      "我一旦失去對一個人的好感，就永遠失去了。",
    ],
    author: ["Jane Austen", "珍．奧斯汀"],
    work: ["Pride and Prejudice", "《傲慢與偏見》"],
    workType: "book",
    category: "society",
    sourceUrl: "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm",
  },
  {
    id: "bronte-animosity",
    text: [
      "Life appears to me too short to be spent in nursing animosity or registering wrongs.",
      "人生在我看來太短，不應花在滋養敵意或記錄過錯上。",
    ],
    author: ["Charlotte Brontë", "夏洛蒂．勃朗特"],
    work: ["Jane Eyre", "《簡愛》"],
    workType: "book",
    category: "society",
    sourceUrl: "https://www.gutenberg.org/files/1260/1260-h/1260-h.htm",
  },
  {
    id: "carroll-curiouser",
    text: ["Curiouser and curiouser!", "愈來愈奇怪了！"],
    author: ["Lewis Carroll", "路易斯．卡羅"],
    work: ["Alice's Adventures in Wonderland", "《愛麗絲夢遊仙境》"],
    workType: "book",
    category: "learning",
    sourceUrl: "https://www.gutenberg.org/files/11/11-h/11-h.htm",
  },
  {
    id: "melville-secret",
    text: [
      "It is the easiest thing in the world for a man to look as if he had a great secret in him.",
      "世上最容易的事，就是讓一個人看起來像藏著一個大秘密。",
    ],
    author: ["Herman Melville", "赫爾曼．梅爾維爾"],
    work: ["Moby-Dick", "《白鯨記》"],
    workType: "book",
    category: "product",
    sourceUrl: "https://www.gutenberg.org/files/2701/2701-h/2701-h.htm",
  },
  {
    id: "stoker-failure",
    text: ["We learn from failure, not from success!", "我們從失敗中學習，而不是從成功中！"],
    author: ["Bram Stoker", "布拉姆．斯托克"],
    work: ["Dracula", "《德古拉》"],
    workType: "book",
    category: "learning",
    sourceUrl: "https://www.gutenberg.org/files/345/345-h/345-h.htm",
  },
  {
    id: "thoreau-deliberately",
    text: [
      "I went to the woods because I wished to live deliberately.",
      "我走進森林，因為我希望有意識地生活。",
    ],
    author: ["Henry David Thoreau", "亨利．大衛．梭羅"],
    work: ["Walden", "《湖濱散記》"],
    workType: "book",
    category: "product",
    sourceUrl: "https://www.gutenberg.org/files/205/205-h/205-h.htm",
  },
  {
    id: "machiavelli-appearance",
    text: [
      "Every one sees what you appear to be, few really know what you are.",
      "人人都看見你的外在，真正了解你本質的人卻很少。",
    ],
    author: ["Niccolò Machiavelli", "尼可羅．馬基維利"],
    work: ["The Prince", "《君主論》"],
    workType: "book",
    category: "public-service",
    sourceUrl: "https://www.gutenberg.org/files/1232/1232-h/1232-h.htm",
  },
  {
    id: "whitman-multitudes",
    text: ["I am large, I contain multitudes.", "我廣大，我包含眾多。"],
    author: ["Walt Whitman", "華特．惠特曼"],
    work: ["Leaves of Grass", "《草葉集》"],
    workType: "book",
    category: "society",
    sourceUrl: "https://www.gutenberg.org/files/1322/1322-h/1322-h.htm",
  },
  {
    id: "barrie-adventure",
    text: ["To die will be an awfully big adventure.", "死亡將會是一場非常宏大的冒險。"],
    author: ["J. M. Barrie", "J．M．巴里"],
    work: ["Peter Pan", "《彼得潘》"],
    workType: "book",
    category: "learning",
    sourceUrl: "https://www.gutenberg.org/files/16/16-h/16-h.htm",
  },
  {
    id: "shelley-fearless",
    text: [
      "Beware, for I am fearless and therefore powerful.",
      "當心，因為我無所畏懼，所以強大。",
    ],
    author: ["Mary Shelley", "瑪麗．雪萊"],
    work: ["Frankenstein", "《科學怪人》"],
    workType: "book",
    category: "technology",
    sourceUrl: "https://www.gutenberg.org/files/84/84-h/84-h.htm",
  },
  {
    id: "dickens-mystery",
    text: [
      "A wonderful fact to reflect upon, that every human creature is constituted to be that profound secret and mystery to every other.",
      "值得深思的是，每一個人對另一個人而言，都是深邃的秘密與謎團。",
    ],
    author: ["Charles Dickens", "查爾斯．狄更斯"],
    work: ["A Tale of Two Cities", "《雙城記》"],
    workType: "book",
    category: "society",
    sourceUrl: "https://www.gutenberg.org/files/98/98-h/98-h.htm",
  },
  {
    id: "shakespeare-thinking",
    text: [
      "There is nothing either good or bad but thinking makes it so.",
      "事情本無好壞，是思想使然。",
    ],
    author: ["William Shakespeare", "威廉．莎士比亞"],
    work: ["Hamlet", "《哈姆雷特》"],
    workType: "other",
    category: "learning",
    sourceUrl: "https://www.gutenberg.org/files/1524/1524-h/1524-h.htm",
  },
  {
    id: "sunzi-resistance",
    text: [
      "Supreme excellence consists in breaking the enemy's resistance without fighting.",
      "不戰而屈人之兵，善之善者也。",
    ],
    author: ["Sun Tzu", "孫子"],
    work: ["The Art of War", "《孫子兵法》"],
    workType: "book",
    category: "public-service",
    sourceUrl: "https://www.gutenberg.org/files/132/132-h/132-h.htm",
    originalLanguage: "zhHant",
    translationNote:
      "English follows Lionel Giles's translation; Traditional Chinese is the classical source text.",
  },
];

const quoteRecords: Quote[] = records.map((record) => ({
  id: record.id,
  text: { en: record.text[0], zhHant: record.text[1] },
  author: { name: { en: record.author[0], zhHant: record.author[1] } },
  work: {
    title: { en: record.work[0], zhHant: record.work[1] },
    type: record.workType,
  },
  category: record.category,
  source: {
    url: record.sourceUrl,
    originalLanguage: record.originalLanguage ?? "en",
    provenance: "primary",
    translationNote:
      record.translationNote ?? "Editorial Traditional Chinese translation.",
  },
}));

export const quotes = validateQuotes(quoteRecords);
