import type { WorkSummary } from "../types/portfolio";

export const selectedWork: readonly Readonly<WorkSummary>[] = Object.freeze([
  Object.freeze({
    id: "shoalter",
    title: "Shoalter",
    role: "Technical Product · Large-scale e-commerce & systems integration",
    problem: "E-commerce and delivery changes crossed checkout, address, mobile, search, promotion and partner systems, with dense business rules and delivery dependencies.",
    approach: "Owned cross-system requirements, functional specifications, acceptance criteria, UAT plans and implementation scope. Authored integration plans for third-party commerce and authentication flows, and worked across Operations, Commercial, UX/UI, QA and Engineering through rollout and production support.",
    outcome: "Specified a pickup-point recommendation workflow across six filtering dimensions and 10 acceptance scenarios, coordinating a 12-ticket implementation. Also defined promotion and eligibility logic across backend, search, checkout and mobile surfaces.",
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
    id: "travel-planner",
    title: "Travel Planner",
    role: "Product × Engineering case study",
    problem: "Family travel planning needs to account for pace, mobility, stairs, meals, elders and children.",
    approach: "Started by working out what makes family trips difficult to plan, then designed the data model and itinerary workflow before building a working MVP.",
    outcome: "The prototype generates a structured starting point, but keeps the itinerary editable instead of treating the AI's answer as final.",
    technologies: ["Family constraints", "Structured itineraries", "Validated MVP"],
    href: "/work/travel-planner/",
  }),
  Object.freeze({
    id: "itinni",
    title: "itinni",
    role: "Co-founder & Product Director",
    problem: "Groups of 6–12 travellers needed a shared way to shape plans that worked for everyone.",
    approach: "Led a team of 10 developers and designers through product strategy, agile development and hands-on technical delivery for B2B and B2C travel products.",
    outcome: "Took the products from concept through development and launch. At its peak, the product had roughly 100 daily users, and the team picked up three startup competition awards.",
    technologies: ["Team of 10", "~100 daily users", "3 awards"],
  }),
]);
