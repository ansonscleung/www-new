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
    title: "What needs to change?",
    eyebrow: "Understand the work",
    description:
      "Understand the working process, the need behind a request, and the acceptance criteria that make a change useful.",
    details:
      "Requirements, user flows and priorities grounded in how the work actually happens.",
  },
  {
    id: "build",
    title: "What can we build?",
    eyebrow: "Make constraints visible",
    description:
      "Clarify data flows, system limits and technical options, then prototype when that is the fastest way to learn.",
    details:
      "Web applications, APIs, data flows, automation and prototypes that make a decision concrete.",
  },
  {
    id: "use",
    title: "How do we get it into use?",
    eyebrow: "Carry the work through",
    description:
      "Coordinate scope, development, UAT, rollout and follow-through so a useful idea makes it into everyday work.",
    details:
      "UAT, release planning and the decisions about what ships now and what needs more work.",
  },
];

export const impactEvidence: ImpactEvidence[] = [
  {
    value: "278,000+ unique customers",
    label: "Unlimited Add-on",
    context:
      "Company-reported usage for a product experience I owned and delivered at HKTVmall.",
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
    context: "Company-reported launch scale of 3 Hr Mart, a project I owned and delivered.",
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
    period: "Sep 2026–Present",
    title: "Senior Business Designer",
    organisation: "GreenTomato",
    summary:
      "Working across project management, business analysis and business development to help shape and deliver digital work.",
    highlights: [],
  },
  {
    id: "shoalter",
    period: "2023–Aug 2026",
    title: "Product Specialist → Senior Product Specialist",
    organisation: "Shoalter Technology (member of HKTV Group)",
    summary:
      "Worked with business and operations teams on e-commerce changes, then took them through requirements, user flows, development, UAT and release with engineering.",
    highlights: [
      "Checkout, promotions, fulfilment, accelerated delivery and partner-channel experiences",
      "Cross-functional product definition, UAT, rollout and production follow-through",
    ],
  },
  {
    id: "protiviti",
    period: "2022–2023",
    title: "Consultant, Cloud & Application Services",
    organisation: "Protiviti Hong Kong",
    summary:
      "Worked on client projects involving automation, cloud migration and web applications.",
    highlights: [
      "Python data extraction and cloud migration",
      "Virtual-reality sourcing management platform",
    ],
  },
  {
    id: "itinni",
    period: "2019–2021",
    title: "Co-Founder & Product Director",
    organisation: "itinni",
    summary:
      "Co-founded the company and worked across product, engineering and the less glamorous jobs needed to get two travel products off the ground.",
    highlights: [
      "Scrum leadership for a 10-person software and UX team",
      "Itinerary planning for groups of 6–12 travellers",
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
