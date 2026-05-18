import { site } from "@data/site";

const emailLink = site.socialLinks.find((link) => link.type === "email");
const githubLink = site.socialLinks.find((link) => link.type === "github");
const linkedinLink = site.socialLinks.find((link) => link.type === "linkedin");

export const contactPage = {
  seo: {
    title: "Contact | Carlos Marte",
    description:
      "Get in touch with Carlos Marte for junior frontend opportunities, collaborations, and practical web projects.",
  },

  hero: {
    eyebrow: "Contact",
    title: "Let's build something amazing together.",
    description:
      "I'm open to junior frontend opportunities, collaborations, and practical projects where I can contribute and keep growing.",
    badges: [
      {
        label: site.availability.label,
        icon: "status-dot",
      },
      {
        label: site.location,
        icon: "map-pin",
      },
    ],
  },

  availability: {
    title: "Current availability",
    status: site.availability.label,
    intro: "Open to",
    items: [
      "Junior frontend opportunities",
      "Collaborations",
      "Practical web projects",
    ],
    note: "Let's create something great together.",
  },

  contactMethods: [
    {
      label: "Email",
      value: site.email,
      linkLabel: "Email me directly",
      href:
        emailLink?.href ?? `mailto:${site.email}?subject=Portfolio%20Contact`,
      description: "Best for direct messages and opportunities.",
      icon: "simple-icons:gmail",
      external: false,
      isPrimary: true,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/carlos-marte-4baa8138",
      linkLabel: "View LinkedIn profile",
      href: linkedinLink?.href ?? "",
      description: "Connect with me professionally.",
      icon: "simple-icons:linkedin",
      external: true,
      isPrimary: false,
    },
    {
      label: "GitHub",
      value: "github.com/carlosmarte23",
      linkLabel: "View GitHub profile",
      href: githubLink?.href ?? "",
      description: "Check out my code, projects, and progress.",
      icon: "simple-icons:github",
      external: true,
      isPrimary: false,
    },
  ],

  openTo: {
    title: "What you can contact me about",
    icon: "message",
    items: [
      "Junior frontend developer opportunities",
      "Portfolio or landing page projects",
      "Collaborations and practical web apps",
      "Feedback, networking, or project ideas",
    ],
  },

  form: {
    title: "Send me a message",
    description: "Use the form below or email me directly.",
    provider: "formspree",
    isConfigured: false,
    action: "https://formspree.io/f/mykvyebo",
    subject: "New message from Carlos Marte portfolio",
    securityNote: "Powered by Formspree. Your data is safe and secure.",

    fields: {
      name: {
        name: "name",
        label: "Name",
        placeholder: "Your name",
        autocomplete: "name",
        required: true,
      },
      email: {
        name: "email",
        label: "Email",
        placeholder: "your@email.com",
        autocomplete: "email",
        required: true,
      },
      messageType: {
        name: "messageType",
        label: "Message type",
        placeholder: "Select one",
        required: true,
        options: [
          { label: "Job opportunity", value: "job-opportunity" },
          { label: "Freelance project", value: "freelance-project" },
          { label: "Collaboration", value: "collaboration" },
          { label: "General message", value: "general-message" },
        ],
      },
      message: {
        name: "message",
        label: "Message",
        placeholder: "Tell me a little about what you have in mind...",
        required: true,
      },
    },

    hiddenFields: {
      subject: {
        name: "_subject",
        value: "New message from Carlos Marte portfolio",
      },
      honeypot: {
        name: "_gotcha",
        autocomplete: "off",
        tabindex: "-1",
      },
    },

    submitLabel: "Send message",

    fallback: {
      text: "Prefer email?",
      label: "Email me directly",
      href:
        emailLink?.href ?? `mailto:${site.email}?subject=Portfolio%20Contact`,
    },
  },

  responseExpectation: {
    title: "Response time",
    description:
      "I usually respond as soon as I can. Email is the best way to reach me directly.",
    icon: "clock",
  },

  trustNotes: {
    title: "A few notes",
    icon: "shield",
    items: [
      "No spam.",
      "No newsletter signup.",
      "Just a simple way to get in touch.",
    ],
  },

  bottomCta: {
    title: "Want to see what I've been building?",
    description:
      "Explore my projects and case studies to see how I approach frontend development.",
    primaryLabel: "View Projects",
    primaryHref: "/#projects",
    secondaryLabel: "About Me",
    secondaryHref: "/about",
  },
} as const;

export type ContactPage = typeof contactPage;
