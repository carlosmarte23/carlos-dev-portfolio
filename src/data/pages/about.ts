import type { AboutPage } from "@content-types/content";

export const aboutPage: AboutPage = {
  eyebrow: "About Me",
  title: "Web developer building toward full-stack applications.",
  focus: "building practical web applications",
  intro:
    "I'm Carlos Marte, a web developer based in Lancaster, Pennsylvania. My current strongest area is frontend development, and I'm growing toward building complete applications with frontend, backend, APIs, databases, and deployment.",
  story: {
    title: "Technical background meets web development.",
    summary:
      "My path combines engineering thinking with a passion for creating things on the web.",
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
          "The direction I want to grow toward and the impact I want to create.",
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
  cta: {
    title: "Let's build something amazing together.",
    description:
      "I'm open to junior web development opportunities, collaborations and practical projects where I can keep growing while contributing real value.",
    primaryLabel: "Contact me",
    primaryHref: "/contact",
    secondaryLabel: "View Projects",
    secondaryHref: "/#projects",
  },
  seo: {
    title: "About | Carlos Marte",
    description:
      "Learn more about Carlos Marte, a web developer focused on practical web projects.",
  },
};
