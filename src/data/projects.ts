export type ProjectStatus = "completed" | "in-progress";

export interface Project {
  slug: string;
  title: string;
  isFeatured: boolean;
  status: ProjectStatus;
  summary: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  techStack: string[];
  links: {
    live: string;
    repo: string;
  };
  caseStudy: {
    overview: string;
    problem: string;
    features: string[];
    challenges: string[];
    learnings: string[];
    futureImprovements: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "stagelink",
    title: "StageLink",
    isFeatured: true,
    status: "completed",

    summary:
      "Concert ticketing web app MVP with event discovery, cart persistence, simulated checkout, and digital tickets.",

    description:
      "StageLink is a React and Vite application that simulates a complete e-commerce flow for live events. It focuses on clean frontend architecture, state management, local persistence, and a smooth ticket purchasing experience.",

    image: {
      src: "/images/projects/stagelink/cover.webp",
      alt: "StageLink concert ticketing app preview",
    },

    techStack: ["React", "Vite", "React Router", "LocalStorage", "CSS"],

    links: {
      live: "https://stagelink-one.vercel.app/",
      repo: "https://github.com/carlosmarte23/stagelink",
    },

    caseStudy: {
      overview:
        "StageLink is a frontend-first concert ticketing MVP built to simulate browsing events, selecting tickets, managing a cart, completing checkout, and viewing purchased tickets.",

      problem:
        "Ticketing flows require clear event discovery, predictable cart behavior, and a checkout experience that feels trustworthy and easy to complete.",

      features: [
        "Event discovery and filtering",
        "Ticket type and quantity selection",
        "Persistent cart using localStorage",
        "Simulated checkout flow",
        "Generated ticket IDs",
        "My Tickets wallet-style view",
      ],

      challenges: [
        "Managing cart state across the purchase flow",
        "Keeping checkout interactions predictable",
        "Simulating backend behavior with local data",
        "Designing a complete user journey without real payments",
      ],

      learnings: [
        "Improved React state management patterns",
        "Built a fuller e-commerce-style frontend flow",
        "Practiced local persistence with browser storage",
        "Focused on UX consistency across multiple screens",
      ],

      futureImprovements: [
        "Add real API integration",
        "Move mocked data to a backend",
        "Improve event search and filtering",
        "Add payment-provider integration in a safe test mode",
      ],
    },
  },
];
