import type { WorkSummary } from "../types/portfolio";

export const selectedWork: readonly Readonly<WorkSummary>[] = Object.freeze([
  Object.freeze({
    id: "shoalter",
    title: "Shoalter",
    role: "Technical Product Management · Large-scale e-commerce",
    problem: "Complex commerce needs needed a clear technical product direction without exposing confidential business metrics.",
    approach: "Defined technical product requirements and user journeys, then aligned cross-functional teams around delivery.",
    outcome: "A delivery-ready product direction connecting user needs, technical detail and collaborative execution.",
    technologies: ["Technical requirements", "User journeys", "Cross-functional delivery"],
  }),
  Object.freeze({
    id: "itinni",
    title: "itinni",
    role: "Co-founder & Product Director",
    problem: "Groups of 6–12 travellers needed a shared way to shape plans that worked for everyone.",
    approach: "Co-led a team of 10 building collaborative, group itinerary editing for roughly 100 daily users.",
    outcome: "The product received three awards while supporting a collaborative planning experience.",
    technologies: ["Team of 10", "~100 daily users", "3 awards"],
  }),
  Object.freeze({
    id: "travel-planner",
    title: "Travel Planner",
    role: "Product × Engineering case study",
    problem: "Family travel planning needs to account for pace, mobility, stairs, meals, elders and children.",
    approach: "Moved from research and positioning through PRDs and domain architecture to a tested, editable MVP.",
    outcome: "An ongoing validation practice with structured itineraries that remain under traveller control.",
    technologies: ["Family constraints", "Structured itineraries", "Validated MVP"],
    href: "/work/travel-planner/",
  }),
]);
