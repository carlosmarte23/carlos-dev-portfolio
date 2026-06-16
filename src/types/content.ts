export interface NavItem {
  label: string;
  href: string;
  activePath?: string;
}

export type IconName = string;

export interface IconContent {
  icon: IconName;
  fallbackLabel?: string;
}

export interface Seo {
  title: string;
  description: string;
  ogImage?: string;
  ogImageAlt?: string;
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
  sections: {
    projects: {
      title: string;
    };
    techStack: {
      title: string;
    };
    aboutPreview: {
      title: string;
      linkLabel: string;
      linkHref: string;
    };
  };
  hero: {
    eyebrow: string;
    headline: {
      main: string;
      accent: string;
    };
    description: string;
    skills: string[];
    terminal: {
      comment: string;
      nameLabel: string;
      skillsLabel: string;
      statusLabel: string;
    };
    scroll: {
      label: string;
      ariaLabel: string;
      href: string;
    };
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
  profileImage: ImageAsset;
  sectionLabels: {
    storyEyebrow: string;
    storyReadMoreLabel: string;
    valuesEyebrow: string;
  };
  story: AboutStory;
  values: AboutValue[];
  focusAreas: AboutFocus;
  cta: Cta;
  seo: Seo;
}

export interface ContactPage {
  seo: Seo;
  labels: {
    contactMethodsTitle: string;
    primaryMethodBadge: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    badges: Array<{
      label: string;
      icon: IconName;
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
    icon: IconName;
    isExternal: boolean;
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

export interface Skill extends IconContent {
  id: string;
  name: string;
  level: SkillLevel;
  category: SkillCategory;
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
  | "language"
  | "styling"
  | "routing"
  | "state"
  | "testing"
  | "tooling"
  | "browser-api"
  | "data"
  | "backend"
  | "deployment";

export interface ProjectLink {
  label: string;
  href: string;
  type: ProjectLinkType;
  icon: IconName;
  isExternal: boolean;
}

export interface ProjectTech extends IconContent {
  name: string;
  category: ProjectTechCategory;
  featured?: boolean;
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
    | "testing"
    | "layout"
    | "route"
    | "fuel"
    | "chart"
    | "demo";
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

export interface ProjectDetailContent {
  backLabel: string;
  eyebrow: string;
  keyFeaturesTitle: string;
  caseStudySummary: {
    overviewTitle: string;
    problemTitle: string;
    solutionTitle: string;
  };
  caseStudyLabels: {
    challenges: string;
    learned: string;
    futureImprovements: string;
  };
  facts: {
    title: string;
    roleLabel: string;
    typeLabel: string;
    statusLabel: string;
    timelineLabel: string;
    focusLabel: string;
  };
  gallery: {
    title: string;
  };
  techStack: {
    title: string;
    groupLabels: Partial<Record<ProjectTechCategory, string>>;
    featuredCategoryLabels: Partial<Record<ProjectTechCategory, string>>;
  };
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
  publishedAt?: string;
  updatedAt?: string;
  stack: ProjectTech[];
  focus: string[];
  links: ProjectLink[];
  coverImage: ImageAsset;
  gallery: ImageAsset[];
  highlights: string[];
  caseStudy: ProjectCaseStudy;
  seo: Seo;
}

export type AboutThisSiteStackCategory =
  | "framework"
  | "language"
  | "styling"
  | "content";

export type AboutThisSiteLinkType = "primary" | "secondary";

export interface AboutThisSiteFact {
  label: string;
  value: string;
  icon: IconName;
}

export interface AboutThisSiteStackItem extends IconContent {
  name: string;
  category: AboutThisSiteStackCategory;
  description: string;
}

export interface AboutThisSiteLink {
  label: string;
  href: string;
  type: AboutThisSiteLinkType;
  icon: IconName;
  isExternal: boolean;
}

export interface AboutThisSiteListSection {
  title: string;
  items: string[];
}

export interface AboutThisSitePage {
  seo: Seo;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    badges: Array<{
      label: string;
      icon: IconName;
    }>;
  };
  overview: {
    title: string;
    eyebrow: string;
    description: string;
    highlights: string[];
  };
  projectFacts: {
    title: string;
    items: AboutThisSiteFact[];
  };
  media: {
    coverImage: ImageAsset;
  };
  stack: {
    title: string;
    description: string;
    items: AboutThisSiteStackItem[];
  };
  currentFeatures: AboutThisSiteListSection;
  lessonsLearned: AboutThisSiteListSection;
  futureImprovements: AboutThisSiteListSection;
  links: AboutThisSiteLink[];
  cta: Cta;
}
