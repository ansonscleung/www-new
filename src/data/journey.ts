export interface JourneyChapter {
  id: "cuhk" | "aalto" | "hkust" | "now";
  label: string;
  title: string;
  paragraphs: readonly string[];
  imageKey: "cuhk" | "aalto" | "hkust" | "now";
  caption: string;
  imagePosition: string;
}

export const journeyChapters: readonly JourneyChapter[] = [
  {
    id: "cuhk", label: "CUHK", title: "Building a foundation",
    paragraphs: [
      "I studied Computer Science at The Chinese University of Hong Kong. Programming gave me a way to turn an idea into something I could build and test.",
      "Early projects, from a Pascal football scoring system to small browser tools, are still part of that hands-on practice.",
    ],
    imageKey: "cuhk", imagePosition: "80% 50%",
    caption: "CUHK · BSc Computer Science",
  },
  {
    id: "aalto", label: "Aalto", title: "Learning in another context",
    paragraphs: [
      "During my Computer Science studies, I spent an exchange semester at Aalto University in Finland.",
      "One semester of studying and living in Finland is another part of the background I bring to my work.",
    ],
    imageKey: "aalto", imagePosition: "50% 70%",
    caption: "Aalto University · Exchange studies",
  },
  {
    id: "hkust", label: "HKUST", title: "Technology inside organisations",
    paragraphs: [
      "I later studied Information Systems Management at The Hong Kong University of Science and Technology.",
      "Alongside experience in startups, consulting and e-commerce, this forms the background to my work across product requirements, technical systems and delivery.",
    ],
    imageKey: "hkust", imagePosition: "50% 14%",
    caption: "HKUST · MSc Information Systems Management. Portrait by a photographer arranged by the department during my studies.",
  },
  {
    id: "now", label: "Now", title: "Bringing it together",
    paragraphs: [
      "Today, I bring business analysis, product delivery and technical implementation together.",
      "I keep building alongside that work. Travel Planner is an ongoing personal prototype exploring structured, editable planning for family trips.",
    ],
    imageKey: "now", imagePosition: "58% 100%",
    caption: "Central, Hong Kong · A recent portrait",
  },
];
