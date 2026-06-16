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
      "A delivery profitability dashboard that helps independent drivers understand real earnings after miles, fuel, time, and expenses.",

    description:
      "DriveMargin is a Next.js public demo for multi-app delivery workers. The current demo milestone includes sample data, editable demo records, dashboard metrics, report period navigation, charts, a guided walkthrough, and temporary browser-based persistence.",

    role: "Frontend Developer & Product Designer",
    year: "2026",
    timeline: "May - June 2026",
    publishedAt: "2026-05-25",
    updatedAt: "2026-06-16",

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
        name: "Recharts",
        category: "data",
        icon: "code",
        fallbackLabel: "CH",
      },
      {
        name: "Zod",
        category: "data",
        icon: "code",
        fallbackLabel: "Z",
      },
      {
        name: "Vitest",
        category: "testing",
        icon: "devicon:vitest",
      },
      {
        name: "Vercel",
        category: "deployment",
        icon: "devicon:vercel",
      },
    ],

    focus: [
      "Profitability tracking",
      "Multi-app work sessions",
      "Fuel cost estimation",
      "Expense tracking",
      "Demo CRUD flows",
      "Dashboard metrics",
      "Guided product tour",
      "Responsive SaaS UI",
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
    ],

    coverImage: {
      src: "/images/projects/drivemargin/cover.webp",
      alt: "DriveMargin public demo dashboard preview",
      position: "top",
    },

    gallery: [
      {
        src: "/images/projects/drivemargin/01-landing.webp",
        alt: "DriveMargin landing page with dashboard preview and profitability messaging",
        title: "Landing Page",
        caption:
          "Public landing page explaining how DriveMargin helps delivery drivers understand real profit after miles, fuel, and expenses.",
        position: "top",
      },
      {
        src: "/images/projects/drivemargin/02-demo-dashboard.webp",
        alt: "DriveMargin demo dashboard showing earnings, hours, miles, fuel cost, expenses, charts, and recent sessions",
        title: "Demo Dashboard",
        caption:
          "Interactive demo dashboard summarizing net earnings, gross earnings, hours, miles, estimated fuel costs, expenses, mileage deduction, trends, and recent sessions.",
        position: "top",
      },
      {
        src: "/images/projects/drivemargin/03-demo-sessions.webp",
        alt: "DriveMargin sessions table showing delivery shifts with apps, vehicle, miles, hours, gross earnings, and actions",
        title: "Sessions Table",
        caption:
          "Session management view where demo users can review multi-app delivery shifts, compare miles and hours, and access record actions.",
        position: "top",
      },
      {
        src: "/images/projects/drivemargin/04-demo-fuel.webp",
        alt: "DriveMargin fuel purchases table showing paid amount, gallons, price per gallon, station, vehicle, odometer, notes, and actions",
        title: "Fuel Purchases",
        caption:
          "Fuel tracking view for recording gas purchases and keeping fuel cost data connected to vehicle and profitability calculations.",
        position: "top",
      },
      {
        src: "/images/projects/drivemargin/05-demo-expenses.webp",
        alt: "DriveMargin expenses table showing non-fuel delivery costs by date, category, description, amount, and actions",
        title: "Expenses",
        caption:
          "Expense tracking view for logging non-fuel costs like supplies, tolls, phone expenses, parking, maintenance, and car washes.",
        position: "top",
      },
      {
        src: "/images/projects/drivemargin/06-demo-settings.webp",
        alt: "DriveMargin settings page with editable vehicle, target profit goals, IRS mileage rate, and theme preference",
        title: "Demo Settings",
        caption:
          "Editable demo settings where users can adjust the default vehicle, profit goals, mileage deduction rate, and theme preference.",
        position: "top",
      },
    ],

    highlights: [
      "Public demo workspace with generated sample data",
      "Editable demo records for sessions, fuel purchases, expenses, and settings",
      "Dashboard metrics for earnings, hours, miles, fuel cost, expenses, net per hour, and net per mile",
      "Report period navigation with bounded demo data ranges",
      "Guided walkthrough with replay from settings",
      "Temporary sessionStorage persistence for demo edits",
      "Calculation logic covered with Vitest tests",
    ],

    caseStudy: {
      overview:
        "DriveMargin is a public demo for a profitability dashboard aimed at multi-app delivery workers. It helps users model a delivery shift as one work session, split earnings by platform, estimate fuel cost, track non-fuel expenses, and review real margin through dashboard metrics and charts.",

      problem:
        "Delivery drivers often see gross app payouts without a clear picture of real profitability. A shift can look strong before accounting for miles, fuel, time, tolls, supplies, parking, and other work-related costs. Drivers working across multiple apps also need a single place to understand the full shift instead of treating each platform separately.",

      solution:
        "DriveMargin uses a work-session model where one shift can include multiple app earnings, miles driven, hours worked, estimated fuel cost, and related expenses. The public demo uses generated sample data and temporary browser storage so visitors can explore dashboards, edit records, reset demo data, and follow a guided walkthrough without creating an account.",

      features: [
        {
          title: "Public demo workspace",
          description:
            "Explore DriveMargin with generated sample data and temporary browser-based persistence.",
          icon: "demo",
        },
        {
          title: "Multi-app sessions",
          description:
            "Track a full delivery shift with earnings from multiple apps in one session.",
          icon: "route",
        },
        {
          title: "Profitability dashboard",
          description:
            "Review earnings, hours, miles, estimated fuel cost, expenses, net per hour, and net per mile.",
          icon: "chart",
        },
        {
          title: "Fuel and expense tracking",
          description:
            "Separate fuel purchases from non-fuel expenses while using estimated fuel cost for profit calculations.",
          icon: "fuel",
        },
        {
          title: "Report period navigation",
          description:
            "Move through demo reporting periods and quick ranges bounded by available sample records.",
          icon: "timer",
        },
        {
          title: "Guided tour",
          description:
            "Walk through the demo workspace and replay the tour from settings.",
          icon: "demo",
        },
        {
          title: "Tested calculations",
          description:
            "Keep financial and demo calculations in pure, testable utility functions.",
          icon: "testing",
        },
      ],

      technicalDecisions: [
        "Used Next.js App Router with TypeScript for a typed frontend demo architecture.",
        "Used Tailwind CSS and shadcn/ui to build a restrained SaaS-style dashboard interface.",
        "Modeled the core unit as a work session so one shift can include multiple app earnings.",
        "Used generated sample data and sessionStorage so visitors can safely edit and reset demo records.",
        "Kept profitability calculations in pure utility functions instead of calculating financial metrics inside UI components.",
        "Separated fuel purchases from estimated fuel cost to avoid double-counting fuel in profit calculations.",
        "Used Recharts and lightweight dashboard components for visual reporting.",
        "Added Vitest coverage around demo data, mutations, storage, period presets, and calculations.",
      ],

      challenges: [
        "Defining a data model that treats one delivery shift as the core unit while still supporting multiple apps.",
        "Keeping fuel purchases separate from estimated fuel cost so profit calculations stay clear.",
        "Making the demo feel interactive without requiring authentication or a real database.",
        "Balancing portfolio polish with honest MVP boundaries around backend and persistence.",
        "Reducing dashboard complexity so the app stays readable on both desktop and mobile.",
      ],

      learned: [
        "Improved how to structure a product demo around realistic sample data instead of static mockups.",
        "Practiced separating financial calculations, demo mutations, and UI rendering into clearer layers.",
        "Learned how report periods and sample datasets affect dashboard UX.",
        "Refined accessibility, SEO, responsive layout, and guided-tour behavior for a public demo release.",
        "Strengthened release discipline by separating current frontend capabilities from planned backend work.",
      ],

      futureImprovements: [
        "Record a polished product demo video for the landing page.",
        "Add Supabase Auth and protected user accounts.",
        "Move from temporary browser storage to Supabase Postgres persistence.",
        "Add Drizzle schema, migrations, and Row Level Security.",
        "Build onboarding for real driver settings, vehicles, work apps, and default rates.",
        "Expand reporting with richer historical trends and production user data.",
      ],
    },

    seo: {
      title: "DriveMargin Case Study | Carlos Marte",
      description:
        "A case study of DriveMargin, a public demo for a delivery profitability dashboard built with Next.js, TypeScript, Tailwind CSS, Recharts, and Vitest.",
      ogImage: "/images/projects/drivemargin/cover.webp",
      ogImageAlt: "DriveMargin public demo dashboard case study preview.",
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
