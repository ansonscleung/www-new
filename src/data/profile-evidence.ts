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
    id: "product",
    title: "Product",
    eyebrow: "Figure out what needs building",
    description:
      "Turn requests and operational needs into clear requirements, user flows and priorities the team can work from.",
    details:
      "Requirements, user flows, priorities and acceptance criteria based on how the work actually happens.",
  },
  {
    id: "technical",
    title: "Technical",
    eyebrow: "Stay close to the system",
    description:
      "Work through APIs, data flows and technical trade-offs with engineers instead of treating implementation as a black box.",
    details:
      "Web applications, APIs, data flows, automation and prototypes when building one is the quickest way to test an idea.",
  },
  {
    id: "delivery",
    title: "Delivery",
    eyebrow: "Get it shipped",
    description:
      "Keep business, design, engineering and QA aligned from definition through UAT and release.",
    details:
      "UAT, release planning, follow-ups and the inevitable decisions about what ships now and what waits.",
  },
];

export const impactEvidence: ImpactEvidence[] = [
  {
    value: "278,000+ unique customers",
    label: "Unlimited Add-on",
    context:
      "Usage for a product experience I owned and delivered at HKTVmall.",
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
    context: "Launch scale of 3 Hr Mart, a project I owned and delivered.",
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
    id: "shoalter",
    period: "2023–Present",
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
