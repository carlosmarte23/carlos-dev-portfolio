import type { AboutThisSitePage } from "@content-types/content";

export const aboutThisSitePage: AboutThisSitePage = {
  seo: {
    title: "About This Site | Carlos Marte",
    description:
      "Technical overview of Carlos Marte's portfolio built with Astro, TypeScript, Tailwind CSS, and local structured data.",
  },

  hero: {
    eyebrow: "About this site",
    title: "How this portfolio was built.",
    description:
      "A technical overview of the architecture, content model, tooling, and decisions behind carlosmarte.dev.",
    badges: [
      {
        label: "Astro-first portfolio",
        icon: "rocket",
      },
      {
        label: "Technical SEO",
        icon: "search",
      },
      {
        label: "Static generation",
        icon: "zap",
      },
      {
        label: "CMS-ready content",
        icon: "database",
      },
    ],
  },

  overview: {
    title: "Built like a real frontend project.",
    eyebrow: "Overview",
    description:
      "This portfolio is more than a personal landing page. It is structured as a maintainable Astro project with typed content, reusable components, static routes, SEO metadata, and a data layer that can later move from local TypeScript files to a CMS.",
    highlights: [
      "Page content is separated by context under local data modules.",
      "Shared TypeScript contracts define the shape components consume.",
      "The UI is composed from reusable Astro components instead of one-off page markup.",
      "SEO and social metadata are handled through the shared layout.",
    ],
  },

  projectFacts: {
    title: "Project facts",
    items: [
      {
        label: "Project type",
        value: "Personal portfolio and technical showcase",
        icon: "layout-template",
      },
      {
        label: "Role",
        value: "Design, frontend development, content modeling, and SEO setup",
        icon: "user-round-cog",
      },
      {
        label: "Rendering",
        value: "Static site generated with Astro",
        icon: "zap",
      },
      {
        label: "Content source",
        value: "Local typed data prepared for a future CMS",
        icon: "database",
      },
    ],
  },

  media: {
    coverImage: {
      src: "/images/readme/home-desktop.png",
      alt: "Carlos Marte portfolio homepage on desktop",
    },
  },

  stack: {
    title: "Tech stack",
    description: "The active stack used by this portfolio as an Astro project.",
    items: [
      {
        name: "Astro",
        category: "framework",
        description:
          "Generates the static pages and keeps the portfolio Astro-first.",
        icon: "devicon:astro",
      },
      {
        name: "TypeScript",
        category: "language",
        description:
          "Defines the shared content contracts used by page data and components.",
        icon: "devicon:typescript",
      },
      {
        name: "Tailwind CSS v4",
        category: "styling",
        description:
          "Provides utility-first styling, responsive layouts, and design tokens.",
        icon: "devicon:tailwindcss",
      },
      {
        name: "Local structured data",
        category: "content",
        description:
          "Keeps page copy, navigation, projects, skills, and contact content organized like CMS records.",
        icon: "code",
        fallbackLabel: "CMS",
      },
    ],
  },

  currentFeatures: {
    title: "Current features",
    items: [
      "Responsive homepage, about page, contact page, and project detail route.",
      "StageLink case study with structured project content and gallery assets.",
      "Dark and light theme support through shared layout components.",
      "Global SEO metadata, sitemap generation, robots file, and social preview support.",
      "CMS-ready local data split by page, project, skills, navigation, and social links.",
    ],
  },

  lessonsLearned: {
    title: "What I learned",
    items: [
      "A portfolio becomes easier to maintain when content is modeled before the UI is built.",
      "Shared page types make it easier to catch broken content shapes during Astro checks.",
      "A small static site can still benefit from project-level architecture and technical SEO.",
    ],
  },

  futureImprovements: {
    title: "Future improvements",
    items: [
      "Move local content into a CMS while keeping the same frontend contract.",
      "Add more project case studies with deeper technical notes and screenshots as I complete new projects.",
      "Expand image management for social previews, project galleries, and page-level assets.",
    ],
  },

  links: [
    {
      label: "GitHub repository",
      href: "https://github.com/carlosmarte23/carlos-dev-portfolio",
      type: "primary",
      icon: "simple-icons:github",
      isExternal: true,
    },
    {
      label: "View Projects",
      href: "/#projects",
      type: "secondary",
      icon: "arrow-right",
      isExternal: false,
    },
  ],

  cta: {
    title: "Want to see the rest of the work?",
    description:
      "Explore the featured project case study or get in touch about frontend opportunities and practical web projects.",
    primaryLabel: "View Projects",
    primaryHref: "/#projects",
    secondaryLabel: "Contact Me",
    secondaryHref: "/contact",
  },
};
