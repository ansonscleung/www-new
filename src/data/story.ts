export type StoryImageKey =
  | "cuhk"
  | "hkust"
  | "aalto"
  | "now"
  | "musiccompare"
  | "itinni"
  | "delivery"
  | "planner";
export interface StoryEntry {
  id: string;
  period?: string;
  start?: string;
  end?: string;
  title: string;
  paragraphs: readonly string[];
  image?: { key: StoryImageKey; caption?: string };
  links?: readonly { label: string; href: string }[];
  details?: {
    label: string;
    paragraphs: readonly string[];
    groups?: readonly { title: string; items: readonly string[] }[];
  };
  evidence?: readonly { label: string; href: string }[];
  milestone?: string;
  parts?: readonly StoryEntry[];
  compact?: boolean;
}

export const experience: readonly StoryEntry[] = [
  {
    id: "hkoi",
    period: "2014–2015",
    start: "2014",
    end: "2015",
    compact: true,
    title: "Hong Kong Olympiad in Informatics",
    paragraphs: [
      "Silver medal in the Junior Group of HKOI 2014; bronze medal in the Senior Group of HKOI 2014–2015.",
    ],
  },
  {
    id: "cuhk-study",
    period: "September 2016–July 2020",
    start: "2016-09",
    end: "2020-07",
    title: "Computer Science at CUHK",
    paragraphs: [
      "I studied Computer Science at The Chinese University of Hong Kong, with a concentration in Intelligence Science.",
      "For my final-year project, I worked on classifying lung cancer subtypes from histopathology images using deep neural networks. I completed my BSc in July 2020.",
    ],
    image: { key: "cuhk", caption: "CUHK graduation." },
    parts: [
      {
        id: "student-representation",
        period: "2017–2020",
        start: "2017",
        end: "2020",
        compact: true,
        title: "Student representation",
        paragraphs: [
          "I represented students through Morningside College and CUHK student councils.",
        ],
        details: {
          label: "Council appointments",
          paragraphs: [],
          groups: [
            {
              title: "CUHK Student Union Council",
              items: [
                "47th session (2017–2018): Elected member for Morningside College.",
                "48th session (2018–2019): Elected member for Morningside College; Deputy / Acting Council Chair.",
                "49th session (2019–2020): Appointed member for Morningside College.",
                "50th session (2020–2021): Appointed member for Morningside College, until 31 July 2020.",
              ],
            },
            {
              title: "University Committees with Student Representatives",
              items: [
                "Member of ITSC Student User Consultation Committee for CUHK Student Union, 2019–2020.",
              ],
            },
            {
              title: "Morningside College Student Union Representative Council",
              items: [
                "6th session (2017–2018): Elected Representative; Vice-Chairperson, April 2017–March 2018.",
                "7th session (2018–2019): Elected Representative.",
              ],
            },
          ],
        },
      },
      {
        id: "cuacs",
        period: "2019–2020",
        start: "2019",
        end: "2020",
        compact: true,
        title: "CU Animation & Comic Society",
        paragraphs: ["Publication Officer, 24th session."],
      },
      {
        id: "musiccompare",
        period: "Autumn 2019",
        title: "MusicCompare",
        paragraphs: [
          "Steven Wong and I built MusicCompare as a course project during my undergraduate studies. We brought music comparison into a browser interface.",
          "The project was included in the 2020 GitHub Archive Program.",
        ],
        image: { key: "musiccompare" },
        links: [
          {
            label: "Try MusicCompare",
            href: "https://ansonscleung.github.io/MusicCompare/",
          },
        ],
      },
      {
        id: "psm",
        period: "July 2020",
        start: "2020-07",
        compact: true,
        title: "Professional Scrum Master I",
        paragraphs: [],
        links: [
          {
            label: "PSM I certification",
            href: "https://www.scrum.org/certificates/558764",
          },
        ],
      },
    ],
  },
  {
    id: "itinni",
    period: "December 2019–December 2021",
    start: "2019-12",
    end: "2021-12",
    title: "Co-founding itinni",
    paragraphs: [
      "While studying at CUHK, I co-founded itinni, a travel technology startup. As the company’s first technical team member, I built the initial prototype and developed it into a working demo for pitches.",
      "As Co-Founder & Product Director, I then led a Scrum team of up to 10 developers and UX designers to refine the interface and add features. I continued to write code while leading the team, mainly on the front end. The products supported shared itinerary editing for groups of 6–12 travellers and reached about 100 daily users.",
    ],
    image: { key: "itinni" },
    details: {
      label: "More about the product and delivery work",
      paragraphs: [
        "I worked on our B2B and B2C products from research through launch, including user research and usability testing with three focus groups. I also took on backend tasks, including writing custom controllers in Strapi, which we used as our CMS.",
        "I also worked on AWS deployment workflows, connecting GitHub to Elastic Beanstalk and using S3 for application storage. Product demonstrations and pitches earned three awards across two startup competitions.",
      ],
    },
  },
  {
    id: "journey-hkust",
    period: "August 2021–June 2022",
    start: "2021-08",
    end: "2022-06",
    title: "Information Systems Management at HKUST",
    paragraphs: [
      "I returned to study for an MSc in Information Systems Management at The Hong Kong University of Science and Technology, concentrating in Technology & Innovation Management.",
      "Selected coursework included Information Strategy and Management, Technology Entrepreneurship, and AI and Future of Business.",
      "The first part of the programme overlapped with my work at itinni.",
    ],
    image: {
      key: "hkust",
      caption:
        "HKUST · A portrait taken during my studies by a photographer arranged by the department.",
    },
    parts: [
      {
        id: "journey-aalto",
        period: "April–June 2022",
        start: "2022-04",
        end: "2022-06",
        title: "An exchange in Finland",
        paragraphs: [
          "During the second half of the spring term, I studied at Aalto University in Espoo, Finland, as an exchange student.",
          "I took Managing Mergers and Acquisitions and Decision Making and Choice Behavior, and participated in entrepreneurship activities organised by Aaltoes.",
        ],
        image: { key: "aalto", caption: "Aalto University, Finland." },
      },
    ],
  },
  {
    id: "protiviti",
    period: "September 2022–February 2023",
    start: "2022-09",
    end: "2023-02",
    title: "Cloud and application consulting",
    paragraphs: [
      "At Protiviti Hong Kong, I worked as a Consultant in Cloud & Application Service.",
      "The work included cloud data migration and automation, Python-based data extraction, and a browser-based virtual-reality sourcing management platform built with HTML, CSS and JavaScript.",
    ],
  },
  {
    id: "shoalter",
    period: "February 2023–August 2026",
    start: "2023-02",
    end: "2026-08",
    title: "Product delivery at Shoalter",
    paragraphs: [
      "At Shoalter Technology, part of HKTV Group, I worked on e-commerce and delivery initiatives whose requirements crossed multiple systems and teams.",
      "My role covered functional specifications, user flows, acceptance criteria and UAT, followed by rollout and production support. I worked with Software Engineering, Site Reliability Engineering, Software QA, Operations, Customer Service, Marketing and external partners.",
    ],
    image: { key: "delivery" },
    milestone:
      "Joined as Product Specialist from February 2023. Promoted to Senior Product Specialist in October 2025; held the role until August 2026.",
    details: {
      label: "More about the systems and delivery work",
      paragraphs: [
        "I worked on integration planning for partner authentication and commerce flows, coordinating testing and investigating production sign-in issues.",
        "Other work included pickup-point recommendation rules, promotion eligibility and delivery workflows. The recurring task was to make system behaviour and dependencies clear enough for teams to build, test and release.",
        "I helped define how Unlimited Add-on would work and coordinated its phased rollout. HKTV reported that 278,000+ unique customers used the feature in 2024. I also helped integrate add-on ordering with 3-hour delivery. At launch, 3 Hr Mart offered approximately 70,000 product items, according to HKTV.",
      ],
    },
    evidence: [
      {
        label: "Unlimited Add-on — 2024 annual results",
        href: "https://www.hktv.com.hk/uploads/1743067192193-PR_20250327_E_W.pdf",
      },
      {
        label: "3 Hr Mart — 2025 annual results",
        href: "https://www.hktv.com.hk/uploads/1774859727851-EW01137-ann.pdf",
      },
    ],
  },
];

export const currentPractice: StoryEntry = {
  id: "now",
  title: "Still making things",
  paragraphs: [
    "I bring product and business analysis experience to hands-on technical work. I continue to build personal software projects and use coding assistants as part of that practice.",
  ],
  image: { key: "now", caption: "Central, Hong Kong." },
  parts: [
    {
      id: "travel-planner",
      period: "Ongoing private prototype",
      title: "Travel Planner",
      paragraphs: [
        "Travel Planner is an ongoing personal prototype for family trips. It explores constraints such as pace, mobility and meals, with a structured itinerary that stays editable.",
        "I am working across the product question, data model and implementation. It is in private development.",
      ],
      image: { key: "planner", caption: "Concept sketch." },
      links: [
        {
          label: "Read the Travel Planner case study",
          href: "/work/travel-planner/",
        },
      ],
    },
    {
      id: "stem-teaching",
      title: "Teaching & mentoring",
      paragraphs: [
        "I started teaching STEM part-time at Progressive Education in 2016 and have since returned to teach occasional classes. I teach coding, robotics and engineering fundamentals mainly to kindergarten and primary school pupils, and have also taught VR and AR courses in secondary schools.",
        "I’ve also served as a Business Advisor across several editions of the JA Company Programme, supporting student teams as they developed their own ventures.",
      ],
    },
  ],
};
