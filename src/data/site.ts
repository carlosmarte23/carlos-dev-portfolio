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

export type AboutValueIcon = "target" | "network" | "rocket";

export interface AboutValue {
  title: string;
  description: string;
  icon: AboutValueIcon;
}

export interface AboutFocus {
  title: string;
  description: string;
  items: AboutFocusArea[];
}

export type AboutFocusAreaIcon = "star" | "trending" | "flag";

export interface AboutFocusArea {
  title: string;
  description: string;
  items: string[];
  icon: AboutFocusAreaIcon;
}

export interface AboutSection {
  eyebrow: string;
  title: string;
  preview: string;
  focus: string;
  intro: string;
  story: AboutStory;
  values: AboutValue[];
  focusAreas: AboutFocus;
  cta: {
    title: string;
    description: string;
  };
}

export interface ProjectSection {
  cta: {
    title: string;
    description: string;
  };
}

export interface AboutStory {
  title: string;
  summary: string;
  items: string[];
}

export interface SiteConfig {
  name: string;
  brand: string;
  url: string;
  role: string;
  location: string;
  email: string;
  availability: {
    label: string;
    value: boolean;
  };
  positioning: string;
  currentStrength: string;
  professionalInterests: string[];
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
  about: AboutSection;
  projects: ProjectSection;
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
  brand: "Carlos Marte",
  url: "https://carlosmarte.dev",
  role: "Web Developer",
  location: "Lancaster, Pennsylvania",
  email: "carlosmartebloise@gmail.com",
  availability: {
    label: "Open to work",
    value: true,
  },
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
  hero: {
    eyebrow: "Web Developer",
    headline: {
      main: "I build clean, responsive and practical",
      accent: "web applications.",
    },
    description:
      "I'm building real-world web projects with React, Astro, TypeScript, Tailwind CSS and modern tooling, while growing toward full-stack application development.",
    skills: ["Web Development", "React", "TypeScript", "Astro", "Tailwind CSS"],
  },
  about: {
    eyebrow: "About Me",
    title: "Web developer building toward full-stack applications.",
    focus: "building practical web applications",
    preview:
      "I'm building practical web applications while growing toward full-stack development. I enjoy creating clean interfaces, understanding how data moves through an app, and turning ideas into usable products.",
    intro:
      "I'm Carlos Marte, a web developer based in Lancaster, Pennsylvania. My current strongest area is frontend development, and I'm growing toward building complete applications with frontend, backend, APIs, databases, and deployment.",
    story: {
      title: "Technical background meets web development.",
      summary:
        "My path combines engineering thinking with a passsion for creatings things on the web.",
      items: [
        "Before focusing on web development, I studied electronic engineering with a concentration in telecommunications. That technical background helped me develop a structured way of thinking: understanding systems, breaking problems down, and building solutions step by step.",
        "Today, I apply that mindset to web development. I enjoy building interfaces that are clear and responsive, but I also want to understand the full application flow: how data is stored, how APIs connect the frontend and backend, and how a project moves from idea to deployment.",
        "I'm currently building projects that feel closer to real products than simple practice exercises. My goal is to keep improving through practical work, write cleaner code, and create useful applications that are easy to maintain.",
      ],
    },
    values: [
      {
        title: "Build with purpose",
        description:
          "I like working on projects that solve a clear problem and feel useful beyond the code.",
        icon: "target",
      },

      {
        title: "Think in systems",
        description:
          "I care about how the UI, data, state, APIs, and project structure work together.",
        icon: "network",
      },
      {
        title: "Learn by shipping",
        description:
          "I improve by building close to real life projects, documenting decisions, and polishing them enough to share.",
        icon: "rocket",
      },
    ],
    cta: {
      title: "Let's build something amazing together.",
      description:
        "I'm open to junior web development oportunities, collaborations and practical projects where I can keep growing while contributing real value.",
    },
    focusAreas: {
      title: "Focus areas",
      description: "The main areas I'm focused on learning and working on.",
      items: [
        {
          title: "Strongest right now",
          description:
            "The tools I use the most and feel most confident building with.",
          items: [
            "React",
            "Astro",
            "JavaScript",
            "TypeScript",
            "Tailwind CSS",
            "Responsive UI",
          ],
          icon: "star",
        },
        {
          title: "Actively improving",
          description:
            "Areas I'm focused on learning and practicing through real projects.",
          items: [
            "Backend fundamentals",
            "APIs",
            "Databases",
            "Authentication",
            "Testing",
            "Deployment",
          ],
          icon: "trending",
        },
        {
          title: "Long-term direction",
          description:
            "The direction I want to grow toward and the impact i want to create.",
          items: [
            "Full-stack applications",
            "Product thinking",
            "CMS-driven content",
            "Real-world workflows",
          ],
          icon: "flag",
        },
      ],
    },
  },

  projects: {
    cta: {
      title: "Interested in how this project was built?",
      description:
        "Check out the source code or let's talk about building something amazing together.",
    },
  },

  nav: [
    { href: "/", label: "Home" },
    { href: "/#projects", label: "Projects" },
    { href: "/about", label: "About" },
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
    "Backend fundamentals",
    "Databases",
    "Strapi CMS",
  ],
};
