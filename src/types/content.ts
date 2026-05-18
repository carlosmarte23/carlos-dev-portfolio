export interface NavItem {
  label: string;
  href: string;
}

export interface Seo {
  title: string;
  description: string;
  ogImage?: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  position?: "top" | "center" | "bottom";
}

export interface Cta {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export interface SiteConfig {
  name: string;
  brand: string;
  role: string;
  headline: string;
  location: string;
  availability: string;
  email: string;
  language: string;
  url: string;
  seo: Seo;
}

export interface NavigationConfig {
  main: NavItem[];
  footer: NavItem[];
}

export type SocialLinkIcon = "github" | "linkedin" | "mail";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialLinkIcon;
  isExternal: boolean;
}

export interface HomePage {
  seo: Seo;
  hero: {
    eyebrow: string;
    headline: {
      main: string;
      accent: string;
    };
    description: string;
    skills: string[];
    cta: {
      primary: NavItem;
      secondary: NavItem;
    };
  };
  profileSummary: {
    preview: string;
    positioning: string;
    currentStrength: string;
    professionalInterests: string[];
    currentGoal: string;
    openToWork: boolean;
  };
  contactCta: Cta;
}

export type AboutValueIcon = "target" | "network" | "rocket";

export interface AboutValue {
  title: string;
  description: string;
  icon: AboutValueIcon;
}

export type AboutFocusAreaIcon = "star" | "trending" | "flag";

export interface AboutFocusArea {
  title: string;
  description: string;
  items: string[];
  icon: AboutFocusAreaIcon;
}

export interface AboutFocus {
  title: string;
  description: string;
  items: AboutFocusArea[];
}

export interface AboutStory {
  title: string;
  summary: string;
  items: string[];
}

export interface AboutPage {
  eyebrow: string;
  title: string;
  intro: string;
  focus: string;
  story: AboutStory;
  values: AboutValue[];
  focusAreas: AboutFocus;
  cta: Cta;
  seo: Seo;
}

export interface ContactPage {
  seo: Seo;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    badges: Array<{
      label: string;
      icon: string;
    }>;
  };
  availability: {
    title: string;
    status: string;
    intro: string;
    items: string[];
    note: string;
  };
  contactMethods: Array<{
    label: string;
    value: string;
    linkLabel: string;
    href: string;
    description: string;
    icon: string;
    external: boolean;
    isPrimary: boolean;
  }>;
  openTo: {
    title: string;
    icon: "message";
    items: string[];
  };
  form: {
    title: string;
    description: string;
    provider: "formspree";
    isConfigured: boolean;
    action: string;
    subject: string;
    securityNote: string;
    fields: {
      name: ContactFormField;
      email: ContactFormField;
      messageType: ContactSelectField;
      message: ContactFormField;
    };
    hiddenFields: {
      subject: {
        name: string;
        value: string;
      };
      honeypot: {
        name: string;
        autocomplete: string;
        tabindex: string;
      };
    };
    submitLabel: string;
    fallback: {
      text: string;
      label: string;
      href: string;
    };
  };
  responseExpectation: {
    title: string;
    description: string;
    icon: "clock";
  };
  trustNotes: {
    title: string;
    icon: "shield";
    items: string[];
  };
  bottomCta: Cta;
}

export interface ContactFormField {
  name: string;
  label: string;
  placeholder?: string;
  autocomplete?: string;
  required: boolean;
}

export interface ContactSelectField extends ContactFormField {
  options: Array<{
    label: string;
    value: string;
  }>;
}

export type SkillLevel = "primary" | "learning" | "familiar";

export type SkillCategory =
  | "frontend"
  | "backend"
  | "data-cms"
  | "ui-styling"
  | "tools"
  | "testing-quality";

export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  icon: string;
  fallbackLabel?: string;
  url?: string;
  order: number;
}

export interface SkillGroup {
  id: SkillCategory;
  title: string;
  description: string;
  order: number;
}

export type ProjectStatus = "Planned" | "In progress" | "MVP" | "Completed";

export type ProjectLinkType =
  | "live"
  | "github"
  | "figma"
  | "video"
  | "case-study";

export type ProjectTechCategory =
  | "frontend"
  | "styling"
  | "routing"
  | "state"
  | "testing"
  | "tooling"
  | "browser-api"
  | "data"
  | "backend";

export interface ProjectLink {
  label: string;
  href: string;
  type: ProjectLinkType;
  icon: string;
  isExternal: boolean;
}

export interface ProjectTech {
  name: string;
  category: ProjectTechCategory;
  featured?: boolean;
  icon?: string;
  fallbackLabel?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon:
    | "ticket"
    | "timer"
    | "cart"
    | "checkout"
    | "wallet"
    | "responsive"
    | "testing";
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  features: ProjectFeature[];
  technicalDecisions: string[];
  challenges: string[];
  learned: string[];
  futureImprovements: string[];
}

export interface Project {
  slug: string;
  title: string;
  type: string;
  status: ProjectStatus;
  featured: boolean;
  order: number;
  summary: string;
  description: string;
  role: string;
  year: string;
  timeline: string;
  stack: ProjectTech[];
  focus: string[];
  links: ProjectLink[];
  coverImage: ImageAsset;
  gallery: ImageAsset[];
  highlights: string[];
  caseStudy: ProjectCaseStudy;
  seo: Seo;
}

export interface AboutThisSitePage {
  eyebrow: string;
  title: string;
  description: string;
  stack: Array<{
    name: string;
    description: string;
    icon: string;
  }>;
  decisions: Array<{
    title: string;
    description: string;
  }>;
  futureImprovements: string[];
  links: {
    github?: string;
  };
  seo: Seo;
}
