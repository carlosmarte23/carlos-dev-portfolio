export const site = {
  name: "Carlos Marte",
  brand: "carlos.dev",
  role: "Junior Frontend Developer",
  location: "Lancaster, Pennsylvania",
  email: "carlosmartebloise@gmail.com",

  tagline: "I build clean, responsive and meaningful web experiences.",

  description:
    "Frontend developer focused on building modern interfaces with React, Astro, Tailwind CSS and performance in mind.",

  availability: {
    label: "Open to work",
    value: true,
  },

  nav: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
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
      href: "/projects",
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
