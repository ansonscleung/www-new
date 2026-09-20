import type {
  Capability,
  ExperienceChapter,
  ImpactMetric,
} from "../types/portfolio";

export interface CapabilityEvidence extends Capability {
  eyebrow: string;
  description: string;
  details: string;
}

export type ImpactEvidence = ImpactMetric;

export type ExperienceEvidence = ExperienceChapter;

export const capabilities: CapabilityEvidence[] = [
  {
    id: "needs",
    title: "Product & analysis",
    eyebrow: "Understand the work",
    description:
      "Turn ambiguous business needs into clear product scope and implementation-ready requirements.",
    details:
      "Product management, business analysis, requirements analysis, product discovery, functional specifications, user journeys, acceptance criteria and UAT.",
  },
  {
    id: "build",
    title: "Solution & delivery",
    eyebrow: "Make constraints visible",
    description:
      "Align stakeholders and technical teams around system behaviour, dependencies, delivery constraints and practical decisions.",
    details:
      "Systems integration, API integration, solution analysis, cross-functional delivery, stakeholder management and Agile/Scrum.",
  },
  {
    id: "use",
    title: "Technical fluency",
    eyebrow: "Carry the work through",
    description:
      "Use hands-on technical understanding to make requirements more precise and collaborate effectively with engineering teams.",
    details:
      "REST APIs, Python, SQL, JavaScript/TypeScript, React/Next.js, data analysis, automation and cloud fundamentals.",
  },
];

export const impactEvidence: ImpactEvidence[] = [
  {
    value: "278,000+ unique customers",
    label: "Unlimited Add-on",
    context:
      "Company-reported usage for a product experience supported during my Shoalter tenure.",
    publicEvidence: [
      {
        label: "from HKTV 2024 annual results",
        url: "https://www.hktv.com.hk/uploads/1743067192193-PR_20250327_E_W.pdf",
      },
    ],
  },
  {
    value: "Approximately 70,000 product items",
    label: "3 Hr Mart",
    context: "Company-reported launch scale for a Shoalter initiative covered by my technical-product work.",
    publicEvidence: [
      {
        label: "from HKTV 2025 annual results",
        url: "https://www.hktv.com.hk/uploads/1774859727851-EW01137-ann.pdf",
      },
    ],
  },
  {
    value: "10-person team",
    label: "itinni product team",
    context:
      "Led software developers and UX designers at itinni; historical startup experience.",
  },
  {
    value: "3 awards",
    label: "Startup competition awards",
    context:
      "Awards across two startup competitions at itinni; historical recognition.",
  },
];

export const experienceEvidence: ExperienceEvidence[] = [
  {
    id: "greentomato",
    period: "September 2026–Present",
    title: "Senior Business Designer",
    organisation: "GreenTomato",
    location: "Hong Kong",
    summary:
      "Support business analysis and solution delivery for a large-scale client-facing digital transformation project.",
    highlights: [
      "Translate business requirements into user journeys, functional specifications, system flows, acceptance criteria and implementation-ready requirements",
      "Work across client stakeholders, UX/UI, solution architects and engineering teams to clarify requirements, technical dependencies and delivery constraints",
      "Analyse complex business rules and edge cases, aligning business expectations with feasible system behaviour",
    ],
  },
  {
    id: "shoalter",
    period: "February 2023–August 2026",
    title: "Product Specialist → Senior Product Specialist",
    organisation: "Shoalter Technology (member of HKTV Group)",
    summary:
      "Owned cross-system product requirements for large-scale e-commerce and delivery experiences, translating business needs into functional specifications, acceptance criteria, UAT plans and implementation scope.",
    roleProgression: [
      {
        title: "Product Specialist",
        period: "February 2023–September 2025",
      },
      {
        title: "Senior Product Specialist",
        period: "October 2025–August 2026",
        milestone: "Promoted October 2025",
      },
    ],
    highlights: [
      "Authored integration plans and technical decision artefacts for third-party commerce and authentication flows; coordinated UAT and investigated production integration issues",
      "Worked across Operations, Commercial, UX/UI, QA and Engineering throughout discovery, development, testing, rollout and production support",
    ],
  },
  {
    id: "protiviti",
    period: "September 2022–February 2023",
    title: "Cloud & Application Consultant",
    organisation: "Protiviti Hong Kong",
    summary:
      "Worked on client-facing technology consulting engagements across cloud and data migration automation, Python data extraction and application development.",
    highlights: [
      "Python data extraction and cloud migration",
      "Virtual-reality sourcing management platform",
    ],
  },
  {
    id: "itinni",
    period: "2019–December 2022",
    title: "Co-Founder & Product Director",
    organisation: "itinni",
    summary:
      "Co-founded the company and worked across product strategy, agile development and hands-on technical delivery to take B2B and B2C travel products from concept to launch.",
    highlights: [
      "Scrum leadership for a 10-person software and UX team",
      "Led developers and designers through product discovery, development and release",
    ],
  },
  {
    id: "oocl",
    period: "Summer 2019",
    title: "Summer Intern",
    organisation: "OOCL",
    summary:
      "Turned frontline user feedback into actionable product and documentation improvements for logistics software.",
    highlights: [
      "Synthesised 200 requests and 1,000 user cases",
      "Designed a logistics-platform interface module",
    ],
  },
];
