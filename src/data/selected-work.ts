import type { WorkSummary } from "../types/portfolio";

export const selectedWork: readonly Readonly<WorkSummary>[] = Object.freeze([
  Object.freeze({
    id: "shoalter",
    title: "Shoalter",
    role: "Technical Product Management · Large-scale e-commerce",
    problem: "High-volume e-commerce journeys need clear product rules across checkout, promotions, fulfilment and partner channels.",
    approach: "Translate business and operational needs into engineering-ready requirements, customer journeys, acceptance criteria, UAT and coordinated releases.",
    outcome: "Contributed to product delivery for publicly launched HKTVmall experiences including Unlimited Add-on and 3 Hr Mart.",
    technologies: [
      "278,000+ unique customers used Unlimited Add-on in 2024",
      "Approximately 70,000 product items at 3 Hr Mart launch",
      "Company-reported scale",
    ],
    publicEvidence: [
      {
        label: "Unlimited Add-on — 2024 annual results",
        url: "https://www.hktv.com.hk/uploads/1743067192193-PR_20250327_E_W.pdf",
      },
      {
        label: "3 Hr Mart — 2025 annual results",
        url: "https://www.hktv.com.hk/uploads/1774859727851-EW01137-ann.pdf",
      },
    ],
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
