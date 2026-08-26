import type { LabProject } from "../types/portfolio";

export const labProjects: LabProject[] = [
  {
    id: "musiccompare",
    title: "MusicCompare",
    description:
      "Steven Wong and I built MusicCompare to experiment with comparing two pieces of music directly in the browser. It later became part of the 2020 GitHub Archive Program.",
    technologies: ["JavaScript", "HTML", "CSS"],
    href: "https://ansonscleung.github.io/MusicCompare/",
    linkLabel: "Visit MusicCompare",
  },
  {
    id: "jyutpingify",
    title: "jyutpingify",
    description:
      "A small JavaScript library built to turn Chinese text into Jyutping, originally for uses such as romanised text and URL slugs.",
    technologies: ["JavaScript"],
    href: "https://github.com/ansonscleung/jyutpingify",
    linkLabel: "View jyutpingify on GitHub",
  },
  {
    id: "ict-sba",
    title: "ICT SBA — Football Match Scoring",
    description:
      "My secondary-school ICT project: a football scoring system written in Pascal. It stays here because it is where programming started to become something I took seriously.",
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
    note: "Where the software foundation came from.",
  },
  {
    id: "hkust",
    award: "MSc Information Systems Management",
    institution: "The Hong Kong University of Science and Technology",
    note: "A broader view of how technology works inside organisations.",
  },
  {
    id: "aalto",
    award: "Exchange studies",
    institution: "Aalto University",
    note: "One semester studying and living in Finland.",
  },
];
