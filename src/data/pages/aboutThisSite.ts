import type { AboutThisSitePage } from "@content-types/content";

export const aboutThisSitePage: AboutThisSitePage = {
  eyebrow: "About this site",
  title: "How this portfolio was built.",
  description:
    "This portfolio was built with Astro, TypeScript, Tailwind CSS v4, and local structured data.",
  stack: [
    {
      name: "Astro",
      description: "Used for the static site structure and page generation.",
      icon: "astro",
    },
    {
      name: "Tailwind CSS v4",
      description: "Used for utility-first styling and design tokens.",
      icon: "tailwind",
    },
    {
      name: "TypeScript",
      description: "Used to keep local data and components safer.",
      icon: "typescript",
    },
  ],
  decisions: [
    {
      title: "Local data first",
      description:
        "The first version uses local data files to keep the project simple and easy to publish.",
    },
    {
      title: "CMS-ready structure",
      description:
        "The data shape is designed so it can later move to a CMS like Strapi.",
    },
  ],
  futureImprovements: [
    "Move project content to Strapi",
    "Add more case studies",
    "Improve image management",
  ],
  links: {
    github: "https://github.com/carlosmarte23/carlos-dev-portfolio",
  },
  seo: {
    title: "About This Site | Carlos Marte",
    description:
      "Technical overview of Carlos Marte's portfolio built with Astro, TypeScript, and Tailwind CSS.",
  },
};
