import type {
  Cta,
  Project,
  ProjectDetailContent,
  ProjectLinkType,
} from "@content-types/content";

export const projectDetailCta: Cta = {
  title: "Interested in how this project was built?",
  description:
    "Check out the source code or let's talk about building something amazing together.",
  primaryLabel: "Contact me",
  primaryHref: "/contact",
  secondaryLabel: "View on GitHub",
};

export const projectDetailContent: ProjectDetailContent = {
  backLabel: "Back to projects",
  eyebrow: "Case study",
  keyFeaturesTitle: "Key features",
  caseStudySummary: {
    overviewTitle: "Overview",
    problemTitle: "Problem",
    solutionTitle: "Solution",
  },
  caseStudyLabels: {
    challenges: "Challenges",
    learned: "What I learned",
    futureImprovements: "Future improvements",
  },
  facts: {
    title: "Project facts",
    roleLabel: "Role",
    typeLabel: "Type",
    statusLabel: "Status",
    timelineLabel: "Timeline",
    focusLabel: "Focus",
  },
  gallery: {
    title: "Gallery",
  },
  techStack: {
    title: "Tech stack",
    groupLabels: {
      frontend: "Frontend",
      routing: "Frontend",
      state: "Frontend",
      language: "Language",
      tooling: "Tooling",
      data: "Data",
      backend: "Backend",
      styling: "Styling",
      testing: "Testing",
      "browser-api": "Browser APIs",
    },
    featuredCategoryLabels: {
      frontend: "Frontend",
      language: "Language",
      styling: "Styling",
      routing: "Routing",
      state: "State",
      testing: "Testing",
      tooling: "Build Tool",
      "browser-api": "Browser API",
      data: "Data",
      backend: "Backend",
    },
  },
};

export const projects: Project[] = [
  {
    slug: "stagelink",
    title: "StageLink",
    type: "Portfolio Project",
    status: "MVP",
    featured: true,
    order: 1,

    summary:
      "Concert ticketing MVP with event discovery, ticket selection, cart persistence, simulated checkout, and session-based digital tickets.",

    description:
      "StageLink is a React and Vite application that simulates a complete ticket purchasing flow for live events. It focuses on event discovery, checkout UX, local persistence, and a smooth digital ticket experience without processing real payments.",

    role: "Frontend Developer",
    year: "2026",
    timeline: "May 2026",
    publishedAt: "2026-05-05",
    updatedAt: "2026-05-05",

    stack: [
      {
        name: "React",
        category: "frontend",
        featured: true,
        icon: "devicon:react",
      },
      {
        name: "Vite",
        category: "tooling",
        featured: true,
        icon: "devicon:vitejs",
      },
      {
        name: "CSS Modules",
        category: "styling",
        featured: true,
        icon: "devicon:css3",
      },
      {
        name: "Testing Library",
        category: "testing",
        featured: true,
        icon: "simple-icons:testinglibrary",
      },
      {
        name: "React Router",
        category: "routing",
        icon: "devicon:reactrouter",
      },
      {
        name: "Custom Hooks",
        category: "state",
        icon: "code",
        fallbackLabel: "CH",
      },
      {
        name: "localStorage",
        category: "browser-api",
        icon: "code",
        fallbackLabel: "LS",
      },
      {
        name: "Mocked Local JSON",
        category: "data",
        icon: "code",
        fallbackLabel: "JSON",
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
        href: "https://stagelink.carlosmarte.dev/",
        type: "live",
        icon: "external-link",
        isExternal: true,
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/carlosmarte23/stagelink",
        type: "github",
        icon: "github",
        isExternal: true,
      },
      {
        label: "Case Study",
        href: "/projects/stagelink",
        type: "case-study",
        icon: "case-study",
        isExternal: false,
      },
    ],

    coverImage: {
      src: "/images/projects/stagelink/cover.webp",
      alt: "StageLink concert ticketing app preview",
      position: "top",
    },

    gallery: [
      {
        src: "/images/projects/stagelink/events-discovery.webp",
        alt: "StageLink events listing with filters and sorting controls",
        title: "Event Discovery",
        caption:
          "Event discovery with filters, sorting, pagination, and featured event cards.",
        position: "top",
      },
      {
        src: "/images/projects/stagelink/event-detail.webp",
        alt: "StageLink event detail page with ticket tier selection",
        title: "Event Detail",
        caption:
          "Event detail page with venue details, ticket quantity controls, and pricing summary.",
        position: "top",
      },
      {
        src: "/images/projects/stagelink/checkout-review.webp",
        alt: "StageLink checkout review step with cart and order summary",
        title: "Checkout Review",
        caption:
          "Checkout review step with editable cart items, service fees, and total cost.",
        position: "top",
      },
      {
        src: "/images/projects/stagelink/checkout-payment.webp",
        alt: "StageLink simulated payment step",
        title: "Checkout Payment",
        caption: "Simulated payment step inside the multi-step checkout flow.",
        position: "top",
      },
      {
        src: "/images/projects/stagelink/tickets-wallet.webp",
        alt: "StageLink My Tickets page with generated digital ticket",
        title: "My Tickets Wallet",
        caption:
          "My Tickets wallet with a generated ticket, holder information, and QR code preview.",
        position: "top",
      },
    ],

    highlights: [
      "Responsive event discovery pages",
      "Persistent cart with localStorage",
      "Multi-step checkout flow",
      "Session-based ticket wallet",
      "Automated testing with Testing Library and Playwright",
    ],

    caseStudy: {
      overview:
        "StageLink is a frontend-first concert ticketing MVP built to simulate the full purchase journey: browsing upcoming events, opening event detail pages, selecting ticket quantities, reviewing a cart, completing a simulated checkout, and viewing generated tickets.",

      problem:
        "Ticketing products need to make discovery, selection, cart management, and checkout feel predictable. Even in an MVP, users need clear pricing, editable quantities, visible progress, and confidence that their tickets will be available after purchase.",

      solution:
        "The MVP models the complete frontend flow with React Router pages, mocked event data, custom state hooks, localStorage persistence, a guided checkout progress UI, and a session-based ticket wallet. It keeps payments simulated while still presenting the product like a real ticketing experience.",

      features: [
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
          description: "Fully responsive experience across desktop and mobile.",
          icon: "responsive",
        },
        {
          title: "Testing",
          description:
            "Component and integration tests using Testing Library and Playwright for important user flows.",
          icon: "testing",
        },
      ],
      technicalDecisions: [
        "Used React and Vite for a fast SPA development workflow.",
        "Used React Router for event, cart, and ticket routes.",
        "Kept event data mocked in local JSON to simulate a future API without blocking the MVP.",
        "Used custom hooks to keep cart, checkout, and persistence logic organized.",
        "Used localStorage for cart and ticket persistence inside the browser session.",
      ],
      challenges: [
        "Keeping cart state consistent across event detail, cart, checkout, and ticket views.",
        "Designing a checkout flow that feels complete without real payment processing.",
        "Making mocked backend behavior feel realistic enough for a portfolio project.",
        "Balancing event browsing features with a focused purchase journey.",
      ],
      learned: [
        "Improved React state management and custom hook patterns.",
        "Practiced building a fuller e-commerce-style flow from discovery to confirmation.",
        "Learned how local persistence affects UX across multi-page flows.",
        "Focused on presenting frontend work as a product experience, not just isolated screens.",
      ],
      futureImprovements: [
        "Add a real API integration for events, carts, orders, and tickets.",
        "Move mocked local data to a backend service.",
        "Add safer payment-provider test mode integration.",
        "Improve empty, loading, and error states around async data.",
        "Expand test coverage for checkout and ticket generation flows.",
      ],
    },

    seo: {
      title: "StageLink Case Study | Carlos Marte",
      description:
        "A case study of StageLink, a frontend-first concert ticketing portfolio project built with React.",
      ogImage: "/images/projects/stagelink/cover.webp",
      ogImageAlt: "StageLink concert ticketing app case study preview.",
    },
  },
  {
    slug: "drivemargin",
    title: "DriveMargin",
    type: "Portfolio Project",
    status: "In progress",
    featured: true,
    order: 2,

    summary:
      "Profitability dashboard for multi-app delivery workers, focused on real earnings after miles, fuel, time, and expenses.",

    description:
      "DriveMargin is a fullstack Next.js dashboard in active development. The current release includes a polished landing page and product foundation, while the MVP roadmap includes demo data, profitability calculations, Supabase auth, Postgres persistence, and protected user dashboards.",

    role: "Fullstack Developer",
    year: "2026",
    timeline: "May 2026",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",

    stack: [
      {
        name: "Next.js",
        category: "frontend",
        featured: true,
        icon: "devicon:nextjs",
      },
      {
        name: "React",
        category: "frontend",
        featured: true,
        icon: "devicon:react",
      },
      {
        name: "TypeScript",
        category: "language",
        featured: true,
        icon: "devicon:typescript",
      },
      {
        name: "Tailwind CSS",
        category: "styling",
        featured: true,
        icon: "devicon:tailwindcss",
      },
      {
        name: "shadcn/ui",
        category: "styling",
        featured: true,
        icon: "code",
        fallbackLabel: "UI",
      },
      {
        name: "Supabase",
        category: "backend",
        featured: true,
        icon: "devicon:supabase",
      },
      {
        name: "Drizzle ORM",
        category: "data",
        icon: "code",
        fallbackLabel: "ORM",
      },
      {
        name: "Recharts",
        category: "data",
        icon: "code",
        fallbackLabel: "CH",
      },
      {
        name: "Vitest",
        category: "testing",
        icon: "devicon:vitest",
      },
    ],

    focus: [
      "Profitability tracking",
      "Multi-app work sessions",
      "Fuel cost estimation",
      "Expense tracking",
      "Dashboard metrics",
      "Responsive SaaS UI",
      "Fullstack MVP planning",
    ],

    links: [
      {
        label: "Live Demo",
        href: "https://drivemargin.carlosmarte.dev/",
        type: "live",
        icon: "external-link",
        isExternal: true,
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/carlosmarte23/drivemargin",
        type: "github",
        icon: "github",
        isExternal: true,
      },
      {
        label: "Case Study",
        href: "/projects/drivemargin",
        type: "case-study",
        icon: "case-study",
        isExternal: false,
      },
    ],

    coverImage: {
      src: "/images/projects/drivemargin/cover.webp",
      alt: "DriveMargin profitability dashboard landing page preview",
      position: "top",
    },

    gallery: [
      {
        src: "/images/projects/drivemargin/landing.webp",
        alt: "DriveMargin landing page with dashboard preview and profitability messaging",
        title: "Landing Page",
        caption:
          "Marketing landing page presenting DriveMargin as a profitability dashboard for multi-app delivery workers.",
        position: "top",
      },
    ],

    highlights: [
      "Live deployed landing page",
      "Modern SaaS dashboard visual direction",
      "Cyan and amber fintech-inspired design system",
      "Planned demo mode with sample data",
      "Planned calculation engine separated from UI",
    ],

    caseStudy: {
      overview:
        "DriveMargin is a dashboard product for delivery and gig workers who need to understand what they actually earn after mileage, fuel, time, and non-fuel expenses. The current portfolio-ready milestone is the deployed landing page and product foundation.",

      problem:
        "Gross payout alone does not explain whether a delivery shift was profitable. Drivers working across multiple apps need a clearer way to compare earnings, miles, fuel impact, expenses, and real net performance.",

      solution:
        "DriveMargin is being structured as a fullstack dashboard with work sessions as the core unit. Each session can include multiple app earnings, miles driven, estimated fuel cost, and related profitability metrics. The MVP roadmap separates calculations from UI and keeps demo data distinct from real authenticated data.",

      features: [
        {
          title: "Landing page",
          description:
            "Public landing page explaining the product, audience, and profitability-focused value proposition.",
          icon: "layout",
        },
        {
          title: "Multi-app sessions",
          description:
            "Planned work-session model that can track earnings from multiple delivery apps in one shift.",
          icon: "route",
        },
        {
          title: "Fuel cost estimation",
          description:
            "Planned calculations using miles, estimated MPG, and fuel price to estimate session fuel cost.",
          icon: "fuel",
        },
        {
          title: "Profitability dashboard",
          description:
            "Planned dashboard metrics for gross earnings, net earnings, hours, miles, net per hour, and net per mile.",
          icon: "chart",
        },
        {
          title: "Demo mode",
          description:
            "Planned public demo with sample data so portfolio visitors can explore the product without login.",
          icon: "demo",
        },
      ],

      technicalDecisions: [
        "Used Next.js App Router as the foundation for a fullstack dashboard product.",
        "Used TypeScript, Tailwind CSS, and shadcn/ui for a typed, component-driven UI system.",
        "Planned Supabase Auth and Supabase Postgres for real authentication and persistence.",
        "Planned Drizzle ORM for typed schema definitions, queries, and migrations.",
        "Kept financial calculations planned as pure functions under a calculation layer instead of inside UI components.",
      ],

      challenges: [
        "Defining a data model that treats a work session as the core unit instead of one session per delivery app.",
        "Avoiding double-counting fuel by separating fuel purchases from estimated fuel cost used in profit calculations.",
        "Keeping the MVP focused while still showing enough product depth for a portfolio case study.",
        "Designing a dashboard identity that feels data-first and distinct from StageLink and the personal portfolio.",
      ],

      learned: [
        "Improved product planning around fullstack dashboard architecture.",
        "Practiced separating demo data, UI, and calculation logic before building persistent features.",
        "Refined how to present an in-progress product honestly in a portfolio.",
        "Defined stronger MVP boundaries for auth, CRUD, reporting, and future enhancements.",
      ],

      futureImprovements: [
        "Build the interactive public demo with sample data.",
        "Add the profitability calculation engine with unit tests.",
        "Connect Supabase Auth, Postgres, Drizzle schema, and Row Level Security.",
        "Implement real CRUD for sessions, fuel purchases, expenses, settings, and onboarding.",
        "Expand the dashboard with real report-period metrics and charts.",
      ],
    },

    seo: {
      title: "DriveMargin Case Study | Carlos Marte",
      description:
        "A case study of DriveMargin, a profitability dashboard for multi-app delivery workers built with Next.js.",
      ogImage: "/images/projects/drivemargin/cover.webp",
      ogImageAlt: "DriveMargin profitability dashboard landing page preview.",
    },
  },
];

export const getProjectHref = (slug: string) => `/projects/${slug}`;

export const getFeaturedProjects = () =>
  projects
    .filter((project) => project.featured)
    .sort((first, second) => first.order - second.order);

export const getProjectLink = (project: Project, type: ProjectLinkType) =>
  project.links.find((link) => link.type === type);

export const getProjectStaticPaths = () =>
  projects.map((project) => ({
    params: { slug: project.slug },
    props: { project },
  }));
