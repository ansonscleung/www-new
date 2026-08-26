import type { LabProject } from "../types/portfolio";

export const labProjects: LabProject[] = [
  {
    id: "musiccompare",
    title: "MusicCompare",
    description:
      "A JavaScript-first audio comparison tool co-created with Steven Wong to estimate music similarity directly in the browser. Featured in the 2020 GitHub Archive Program.",
    technologies: ["JavaScript", "HTML", "CSS"],
    href: "https://ansonscleung.github.io/MusicCompare/",
    linkLabel: "Visit MusicCompare",
  },
  {
    id: "jyutpingify",
    title: "jyutpingify",
    description:
      "A JavaScript utility for converting Traditional Chinese text into Jyutping romanization for Cantonese-focused language tooling.",
    technologies: ["JavaScript"],
    href: "https://github.com/ansonscleung/jyutpingify",
    linkLabel: "View jyutpingify on GitHub",
  },
  {
    id: "ict-sba",
    title: "ICT SBA — Football Match Scoring",
    description:
      "A secondary-school project that built the foundation of my programming journey through a Pascal-based football scoring system.",
    technologies: ["Pascal"],
    href: "https://gitlab.com/ansonscleung/ict-sba",
    linkLabel: "View ICT SBA on GitLab",
  },
];

export interface EducationEntry {
  id: string;
  award: string;
  institution: string;
  note: string;
}

export const educationEntries: EducationEntry[] = [
  {
    id: "cuhk",
    award: "BSc Computer Science",
    institution: "The Chinese University of Hong Kong",
    note: "Computer science foundation and systems thinking.",
  },
  {
    id: "hkust",
    award: "MSc Information Systems Management",
    institution: "The Hong Kong University of Science and Technology",
    note: "Information systems, organisations, and technology in practice.",
  },
  {
    id: "aalto",
    award: "Exchange studies",
    institution: "Aalto University",
    note: "An international study chapter in Finland.",
  },
];
