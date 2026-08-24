export interface BilingualText {
  en: string;
  zhHant: string;
}

export type QuoteCategory =
  | "technology"
  | "learning"
  | "product"
  | "society"
  | "public-service";

export type QuoteWorkType =
  | "book"
  | "essay"
  | "article"
  | "speech"
  | "interview"
  | "other";

export interface Quote {
  id: string;
  text: BilingualText;
  author: {
    name: BilingualText;
  };
  work: {
    title: BilingualText;
    type: QuoteWorkType;
    date?: string;
  };
  category: QuoteCategory;
  source: {
    url: string;
    originalLanguage: "en" | "zhHant" | "other";
    provenance: "primary" | "reputable-secondary";
    translationNote?: string;
  };
}

export interface HeroSlideContent {
  id: string;
  stage: string;
  period: string;
  title: string;
  description: string;
  imageKey: string;
  mobileImagePosition?: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
}

export interface ImpactMetric {
  value: string;
  label: string;
  context: string;
}

export interface PublicEvidence {
  label: string;
  url: string;
}

export interface WorkSummary {
  id: string;
  title: string;
  role: string;
  problem: string;
  approach: string;
  outcome: string;
  technologies: string[];
  href?: string;
  publicEvidence?: readonly PublicEvidence[];
}

export interface ExperienceChapter {
  id: string;
  period: string;
  title: string;
  organisation: string;
  summary: string;
  highlights: string[];
}

export interface LabProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  href: string;
  linkLabel: string;
}
