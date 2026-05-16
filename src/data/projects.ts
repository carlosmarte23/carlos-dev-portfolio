import type { SkillIcon } from "@data/skills";

export type ProjectStatus = "planned" | "in-progress" | "mvp" | "completed";

export type ProjectLinkType =
  | "live"
  | "repo"
  | "figma"
  | "video"
  | "case-study";

export type ProjectTechCategory =
  | "frontend"
  | "styling"
  | "routing"
  | "state"
  | "testing"
  | "tooling"
  | "browser-api"
  | "data"
  | "backend";

export interface ProjectImage {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  type: ProjectLinkType;
  external: boolean;
}

export interface ProjectTech {
  name: string;
  category: ProjectTechCategory;
  featured?: boolean;
  icon?: SkillIcon;
}

export interface ProjectCaseStudySection {
  title: string;
  content?: string;
  items?: string[] | ProjectFeature[];
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon:
    | "ticket"
    | "timer"
    | "cart"
    | "checkout"
    | "wallet"
    | "responsive"
    | "testing";
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  sections: ProjectCaseStudySection[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;

  role: string;
  type: string;
  timeline: string;
  status: ProjectStatus;
  isFeatured: boolean;
  order: number;

  image: ProjectImage;
  gallery?: ProjectImage[];

  techStack: ProjectTech[];
  focus: string[];
  links: ProjectLink[];

  caseStudy: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    slug: "stagelink",
    title: "StageLink",
    subtitle: "Concert ticketing frontend experience",

    summary:
      "Concert ticketing MVP with event discovery, ticket selection, cart persistence, simulated checkout, and session-based digital tickets.",

    description:
      "StageLink is a React and Vite application that simulates a complete ticket purchasing flow for live events. It focuses on event discovery, checkout UX, local persistence, and a smooth digital ticket experience without processing real payments.",

    role: "Frontend Developer",
    type: "Portfolio Project",
    status: "mvp",
    timeline: "May 2026",
    isFeatured: true,
    order: 1,

    image: {
      src: "/images/projects/stagelink/cover.webp",
      alt: "StageLink concert ticketing app preview",
    },

    gallery: [
      {
        src: "/images/projects/stagelink/events-discovery.webp",
        alt: "StageLink events listing with filters and sorting controls",
        title: "Event Discovery",
        caption:
          "Event discovery with filters, sorting, pagination, and featured event cards.",
      },
      {
        src: "/images/projects/stagelink/event-detail.webp",
        alt: "StageLink event detail page with ticket tier selection",
        title: "Event Detail",
        caption:
          "Event detail page with venue details, ticket quantity controls, and pricing summary.",
      },
      {
        src: "/images/projects/stagelink/checkout-review.webp",
        alt: "StageLink checkout review step with cart and order summary",
        title: "Checkout Review",
        caption:
          "Checkout review step with editable cart items, service fees, and total cost.",
      },
      {
        src: "/images/projects/stagelink/checkout-payment.webp",
        alt: "StageLink simulated payment step",
        title: "Checkout Payment",
        caption: "Simulated payment step inside the multi-step checkout flow.",
      },
      {
        src: "/images/projects/stagelink/tickets-wallet.webp",
        alt: "StageLink My Tickets page with generated digital ticket",
        title: "My Tickets Wallet",
        caption:
          "My Tickets wallet with a generated ticket, holder information, and QR code preview.",
      },
    ],

    techStack: [
      { name: "React", category: "frontend", featured: true },
      { name: "Vite", category: "tooling", featured: true },
      { name: "CSS Modules", category: "styling", featured: true },
      { name: "Testing Library", category: "testing", featured: true },
      { name: "React Router", category: "routing" },
      {
        name: "Custom Hooks",
        category: "state",
        icon: { provider: "none", fallback: "CH" },
      },
      {
        name: "localStorage",
        category: "browser-api",
        icon: { provider: "none", fallback: "LS" },
      },
      {
        name: "Mocked Local JSON",
        category: "data",
        icon: { provider: "none", fallback: "JSON" },
      },
    ],

    focus: [
      "Event discovery",
      "Filtering and sorting",
      "Ticket selection",
      "Cart persistence",
      "Multi-step checkout",
      "Digital tickets",
      "Responsive UI",
    ],

    links: [
      {
        label: "Live Demo",
        href: "https://stagelink-one.vercel.app/",
        type: "live",
        external: true,
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/carlosmarte23/stagelink",
        type: "repo",
        external: true,
      },
    ],

    caseStudy: {
      overview:
        "StageLink is a frontend-first concert ticketing MVP built to simulate the full purchase journey: browsing upcoming events, opening event detail pages, selecting ticket quantities, reviewing a cart, completing a simulated checkout, and viewing generated tickets.",

      problem:
        "Ticketing products need to make discovery, selection, cart management, and checkout feel predictable. Even in an MVP, users need clear pricing, editable quantities, visible progress, and confidence that their tickets will be available after purchase.",

      solution:
        "The MVP models the complete frontend flow with React Router pages, mocked event data, custom state hooks, localStorage persistence, a guided checkout progress UI, and a session-based ticket wallet. It keeps payments simulated while still presenting the product like a real ticketing experience.",

      sections: [
        {
          title: "Key features",
          items: [
            {
              title: "Event discovery",
              description:
                "Browse featured and upcoming events with filters and sorting.",
              icon: "ticket",
            },
            {
              title: "Ticket selection",
              description:
                "Select ticket types, choose quantity, and review pricing.",
              icon: "timer",
            },
            {
              title: "Persistent cart",
              description:
                "Cart items are saved in localStorage so users do not lose their order.",
              icon: "cart",
            },
            {
              title: "Multi-step checkout",
              description:
                "Guided flow with order review, guest details, and payment simulation.",
              icon: "checkout",
            },
            {
              title: "Ticket wallet",
              description: "View and manage purchased tickets in one place.",
              icon: "wallet",
            },
            {
              title: "Responsive design",
              description:
                "Fully responsive experience across desktop and mobile.",
              icon: "responsive",
            },
            {
              title: "Testing",
              description:
                "Component and integration tests using Testing Library and Playwright for important user flows.",
              icon: "testing",
            },
          ],
        },
        {
          title: "Technical decisions",
          items: [
            "Used React and Vite for a fast SPA development workflow.",
            "Used React Router for event, cart, and ticket routes.",
            "Kept event data mocked in local JSON to simulate a future API without blocking the MVP.",
            "Used custom hooks to keep cart, checkout, and persistence logic organized.",
            "Used localStorage for cart and ticket persistence inside the browser session.",
          ],
        },
        {
          title: "Challenges",
          items: [
            "Keeping cart state consistent across event detail, cart, checkout, and ticket views.",
            "Designing a checkout flow that feels complete without real payment processing.",
            "Making mocked backend behavior feel realistic enough for a portfolio project.",
            "Balancing event browsing features with a focused purchase journey.",
          ],
        },
        {
          title: "What I learned",
          items: [
            "Improved React state management and custom hook patterns.",
            "Practiced building a fuller e-commerce-style flow from discovery to confirmation.",
            "Learned how local persistence affects UX across multi-page flows.",
            "Focused on presenting frontend work as a product experience, not just isolated screens.",
          ],
        },
        {
          title: "Future improvements",
          items: [
            "Add a real API integration for events, carts, orders, and tickets.",
            "Move mocked local data to a backend service.",
            "Add safer payment-provider test mode integration.",
            "Improve empty, loading, and error states around async data.",
            "Expand test coverage for checkout and ticket generation flows.",
          ],
        },
      ],
    },
  },
];

export const getProjectHref = (slug: string) => `/projects/${slug}`;

export const getFeaturedProjects = () =>
  projects
    .filter((project) => project.isFeatured)
    .sort((first, second) => first.order - second.order);

export const getProjectLink = (project: Project, type: ProjectLinkType) =>
  project.links.find((link) => link.type === type);

export const getProjectStaticPaths = () =>
  projects.map((project) => ({
    params: { slug: project.slug },
    props: { project },
  }));
