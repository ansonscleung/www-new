import type { WorkSummary } from "../types/portfolio";

export const selectedWork: readonly Readonly<WorkSummary>[] = Object.freeze([
  Object.freeze({
    id: "shoalter",
    title: "Shoalter",
    role: "Technical Product Management · Large-scale e-commerce",
    problem: "Changes to checkout or fulfilment rarely stay in one place. A single request can affect promotions, operations, customer flows and several systems at once.",
    approach: "Worked with business and operations teams to understand the request, map the edge cases and user flows, then take it through specification, development, UAT and release.",
    outcome: "That work included products such as Unlimited Add-on and 3 Hr Mart, both of which later reached substantial scale on HKTVmall.",
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
    approach: "We grew the team to 10 developers and designers and built shared itinerary planning for groups travelling together. At its peak, the product had roughly 100 daily users.",
    outcome: "Along the way, we pitched it at startup competitions and picked up three awards.",
    technologies: ["Team of 10", "~100 daily users", "3 awards"],
  }),
  Object.freeze({
    id: "travel-planner",
    title: "Travel Planner",
    role: "Product × Engineering case study",
    problem: "Family travel planning needs to account for pace, mobility, stairs, meals, elders and children.",
    approach: "Started by working out what makes family trips difficult to plan, then designed the data model and itinerary workflow before building a working MVP.",
    outcome: "The prototype generates a structured starting point, but keeps the itinerary editable instead of treating the AI's answer as final.",
    technologies: ["Family constraints", "Structured itineraries", "Validated MVP"],
    href: "/work/travel-planner/",
  }),
]);
