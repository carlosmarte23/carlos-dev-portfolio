export type SocialLinkType = "github" | "linkedin" | "email";

export interface NavItem {
  href: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  type: SocialLinkType;
  external: boolean;
}

export interface SiteConfig {
  name: string;
  brand: string;
  role: string;
  location: string;
  email: string;
  availability: {
    label: string;
    value: boolean;
  };
  focus: string;
  passions: string[];
  currentGoal: string;
  hero: {
    eyebrow: string;
    headline: {
      main: string;
      accent: string;
    };
    description: string;
    skills: string[];
  };

  nav: NavItem[];
  socialLinks: SocialLink[];
  cta: {
    primary: NavItem;
    secondary: NavItem;
  };
  learning: string[];
}

export const site: SiteConfig = {
  name: "Carlos Marte",
  brand: "carlos.dev",
  role: "Frontend-Focused Web Developer",
  location: "Lancaster, Pennsylvania",
  email: "carlosmartebloise@gmail.com",
  availability: {
    label: "Open to work",
    value: true,
  },
  focus: "Frontend Development",
  passions: ["UI/UX", "Clean Code", "Learning", "Problem Solving"],
  currentGoal: "Build impactful web experiences",
  hero: {
    eyebrow: "Frontend-Focused Web Developer",
    headline: {
      main: "I build clean, responsive and meaningful",
      accent: "web experiences.",
    },
    description:
      "I'm building real-world frontend projects with React, Astro, Tailwind CSS and modern web tooling.",
    skills: [
      "Frontend Development",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Astro",
    ],
  },

  nav: [
    { href: "/", label: "Home" },
    { href: "/#projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/about-this-site", label: "About This Site" },
    { href: "/contact", label: "Contact" },
  ],

  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/carlosmarte23",
      type: "github",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/carlos-marte-4baa8138/",
      type: "linkedin",
      external: true,
    },
    {
      label: "Email",
      href: "mailto:carlosmartebloise@gmail.com?subject=Portfolio%20Contact",
      type: "email",
      external: false,
    },
  ],

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

  learning: [
    "TypeScript",
    "Astro",
    "Testing Library",
    "API integration",
    "Strapi CMS",
  ],
};
