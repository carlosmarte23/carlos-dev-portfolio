export type SkillLevel = "primary" | "learning";

export type SkillCategory =
  | "frontend"
  | "ui-styling"
  | "tools"
  | "testing-quality";

export type SkillIcon =
  | {
      provider: "iconify";
      name: string;
    }
  | {
      provider: "none";
      fallback: string;
    };

export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  icon: SkillIcon;
  order: number;
}

export interface SkillGroup {
  id: SkillCategory;
  title: string;
  order: number;
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    order: 1,
  },
  {
    id: "ui-styling",
    title: "UI & Styling",
    order: 2,
  },
  {
    id: "tools",
    title: "Tools",
    order: 3,
  },
  {
    id: "testing-quality",
    title: "Testing & Quality",
    order: 4,
  },
];

export const skills: Skill[] = [
  {
    id: "react",
    name: "React",
    level: "primary",
    category: "frontend",
    icon: { provider: "iconify", name: "devicon:react" },
    order: 1,
  },
  {
    id: "javascript",
    name: "JavaScript",
    level: "primary",
    category: "frontend",
    icon: { provider: "iconify", name: "devicon:javascript" },
    order: 2,
  },
  {
    id: "typescript",
    name: "TypeScript",
    level: "learning",
    category: "frontend",
    icon: { provider: "iconify", name: "devicon:typescript" },
    order: 3,
  },
  {
    id: "astro",
    name: "Astro",
    level: "learning",
    category: "frontend",
    icon: { provider: "iconify", name: "devicon:astro" },
    order: 4,
  },
  {
    id: "css-modules",
    name: "CSS Modules",
    level: "primary",
    category: "ui-styling",
    icon: { provider: "iconify", name: "devicon:css3" },
    order: 1,
  },
  {
    id: "responsive-design",
    name: "Responsive Design",
    level: "primary",
    category: "ui-styling",
    icon: { provider: "none", fallback: "RD" },
    order: 2,
  },
  {
    id: "tailwind-css",
    name: "Tailwind CSS",
    level: "learning",
    category: "ui-styling",
    icon: { provider: "iconify", name: "devicon:tailwindcss" },
    order: 3,
  },
  {
    id: "accessibility",
    name: "Accessibility",
    level: "learning",
    category: "ui-styling",
    icon: { provider: "none", fallback: "A11Y" },
    order: 4,
  },
  {
    id: "git",
    name: "Git",
    level: "primary",
    category: "tools",
    icon: { provider: "iconify", name: "devicon:git" },
    order: 1,
  },
  {
    id: "github",
    name: "GitHub",
    level: "primary",
    category: "tools",
    icon: { provider: "iconify", name: "simple-icons:github" },
    order: 2,
  },
  {
    id: "vite",
    name: "Vite",
    level: "primary",
    category: "tools",
    icon: { provider: "iconify", name: "devicon:vitejs" },
    order: 3,
  },
  {
    id: "vs-code",
    name: "VS Code",
    level: "primary",
    category: "tools",
    icon: { provider: "iconify", name: "devicon:vscode" },
    order: 4,
  },
  {
    id: "figma",
    name: "Figma",
    level: "learning",
    category: "tools",
    icon: { provider: "iconify", name: "devicon:figma" },
    order: 5,
  },
  {
    id: "vitest",
    name: "Vitest",
    level: "learning",
    category: "testing-quality",
    icon: { provider: "iconify", name: "devicon:vitest" },
    order: 1,
  },
  {
    id: "testing-library",
    name: "Testing Library",
    level: "learning",
    category: "testing-quality",
    icon: { provider: "iconify", name: "simple-icons:testinglibrary" },
    order: 2,
  },
  {
    id: "eslint",
    name: "ESLint",
    level: "primary",
    category: "testing-quality",
    icon: { provider: "iconify", name: "devicon:eslint" },
    order: 3,
  },
  {
    id: "prettier",
    name: "Prettier",
    level: "primary",
    category: "testing-quality",
    icon: { provider: "iconify", name: "simple-icons:prettier" },
    order: 4,
  },
];

export const groupedSkillGroups = [...skillGroups]
  .sort((current, next) => current.order - next.order)
  .map((group) => ({
    ...group,
    skills: [...skills]
      .filter((skill) => skill.category === group.id)
      .sort((current, next) => current.order - next.order),
  }));
