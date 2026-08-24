import type { Capability, ExperienceChapter, ImpactMetric } from "../types/portfolio";

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
    eyebrow: "Make the problem legible",
    description: "Translate customer, business, and operational needs into products people can use.",
    details: "Requirements, user journeys, prioritisation, and acceptance criteria grounded in the real workflow.",
  },
  {
    id: "technical",
    title: "Technical",
    eyebrow: "Stay close to the system",
    description: "Bridge product intent and implementation with enough technical fluency to make good trade-offs.",
    details: "Web platforms, data flows, APIs, automation, and hands-on prototyping across product and solutions work.",
  },
  {
    id: "delivery",
    title: "Delivery",
    eyebrow: "Turn alignment into momentum",
    description: "Give cross-functional teams the clarity and rhythm to ship dependable improvements.",
    details: "UAT planning, release coordination, stakeholder communication, and iterative delivery across shared teams.",
  },
];

export const impactEvidence: ImpactEvidence[] = [
  { value: "10-person team", label: "Built together", context: "Led software developers and UX designers at itinni; historical startup experience." },
  { value: "100+ daily users", label: "In the loop", context: "Leisure-travel applications at itinni; historical usage, not a current-site metric." },
  { value: "3 awards", label: "Pitch recognition", context: "Awards across two startup competitions at itinni; historical recognition." },
  { value: "200 requests / 1,000 cases", label: "User signal", context: "OOCL internship analysis of user requests and cases; historical evidence." },
];

export const experienceEvidence: ExperienceEvidence[] = [
  {
    id: "shoalter",
    period: "2023–Present",
    title: "Product Specialist → Senior Product Specialist",
    organisation: "Shoalter Technology (member of HKTV Group)",
    summary: "Progressed from shaping product requirements to owning end-to-end journeys for high-volume commerce and delivery initiatives.",
    highlights: ["HKTVmall, Wet Market Express, and 3-hour delivery", "Cross-functional requirements, UAT, and release coordination"],
  },
  {
    id: "protiviti",
    period: "2022–2023",
    title: "Consultant, Cloud & Application Services",
    organisation: "Protiviti Hong Kong",
    summary: "Built practical bridges between business operations, automation, and cloud application delivery.",
    highlights: ["Python data extraction and cloud migration", "Virtual-reality sourcing management platform"],
  },
  {
    id: "itinni",
    period: "2019–2021",
    title: "Co-Founder & Product Director",
    organisation: "itinni",
    summary: "Led product direction for B2B and B2C travel technology from early concept through live customer use.",
    highlights: ["Scrum leadership for a 10-person software and UX team", "Itinerary planning for groups of 6–12 travellers"],
  },
  {
    id: "oocl",
    period: "Summer 2019",
    title: "Summer Intern",
    organisation: "OOCL",
    summary: "Turned frontline user feedback into actionable product and documentation improvements for logistics software.",
    highlights: ["Synthesised 200 requests and 1,000 user cases", "Designed a logistics-platform interface module"],
  },
];
