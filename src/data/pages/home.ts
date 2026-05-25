import type { HomePage } from "@content-types/content";

export const homePage: HomePage = {
  seo: {
    title: "Carlos Marte | Web Developer",
    description:
      "Web developer building clean, responsive applications while growing toward full-stack development.",
  },
  sections: {
    projects: {
      title: "Projects",
    },
    techStack: {
      title: "Tech Stack",
    },
    aboutPreview: {
      title: "About Me",
      linkLabel: "More About Me",
      linkHref: "/about",
    },
  },
  hero: {
    eyebrow: "Web Developer",
    headline: {
      main: "I build clean, responsive and practical",
      accent: "web applications.",
    },
    description:
      "I'm building real-world web projects with React, Astro, TypeScript, Tailwind CSS and modern tooling, while growing toward full-stack application development.",
    skills: ["Web Development", "React", "TypeScript", "Astro", "Tailwind CSS"],
    terminal: {
      comment: "Current profile",
      nameLabel: "name",
      skillsLabel: "skills",
      statusLabel: "status",
    },
    scroll: {
      label: "Scroll",
      ariaLabel: "Scroll to projects",
      href: "#projects",
    },
    cta: {
      primary: {
        label: "View Projects",
        href: "/#projects",
      },
      secondary: {
        label: "Contact Me",
        href: "/contact",
      },
    },
  },
  profileSummary: {
    preview:
      "I'm building practical web applications while growing toward full-stack development. I enjoy creating clean interfaces, understanding how data moves through an app, and turning ideas into usable products.",
    positioning: "Building toward full-stack web applications",
    currentStrength: "Frontend development",
    professionalInterests: [
      "User-friendly interfaces",
      "Application logic",
      "Clean project structure",
      "Problem solving",
    ],
    currentGoal:
      "Build complete, useful web applications from idea to deployment",
    openToWork: true,
  },
  contactCta: {
    title: "Have a project in mind?",
    description: "Let's build something amazing together.",
    primaryLabel: "Get in touch",
    primaryHref: "/contact",
    secondaryLabel: "About Me",
    secondaryHref: "/about",
  },
};
