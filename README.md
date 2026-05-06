# Carlos Marte Portfolio

Personal portfolio for Carlos Marte, built with Astro, Tailwind CSS v4, and React for focused interactive components.

The goal of this project is to create a clean, professional, fast, and maintainable portfolio that presents frontend work, technical skills, and project case studies clearly.

## Current Status

This project is currently in its initial setup and design-system phase.

It includes:

- Astro as the main framework.
- Tailwind CSS v4 configured with custom design tokens.
- React enabled for future interactive components.
- Light and dark theme variables.
- Font tokens for body text, headings, and terminal-style UI.
- A simple foundation for building the full portfolio experience.

## Tech Stack

- [Astro](https://astro.build/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fontsource](https://fontsource.org/)

## Design Direction

The visual direction is inspired by a modern developer workspace:

- Dark theme as the primary experience.
- Light theme as an alternate mode.
- Terminal-inspired green accent color.
- Clean cards with soft borders.
- Large project screenshots.
- Monospace details for terminal and code-inspired UI.
- Responsive layouts with a focus on clarity.

Main font roles:

- `Inter` for body text.
- `Space Grotesk` for headings and hero sections.
- `JetBrains Mono` for terminal cards and technical details.

## Scripts

Install dependencies:

```bash
pnpm install
```

Start the local development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Run Astro and TypeScript checks:

```bash
pnpm check
```

Preview the production build:

```bash
pnpm preview
```

## Planned Structure

```text
src/
  components/
    layout/
    home/
    projects/
    ui/
  data/
    site.js
    projects.js
    skills.js
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    about.astro
    about-this-site.astro
    contact.astro
    projects/
      index.astro
      [slug].astro
  styles/
    global.css
```

## Initial Roadmap

- Create the base layout.
- Add the first reusable UI components.
- Build the homepage.
- Add local data for projects, site content, and skills.
- Create the projects listing page.
- Create a StageLink case study page.
- Add About, About This Site, and Contact pages.
- Implement a dark/light theme toggle.
- Polish responsive behavior, accessibility, and basic SEO.
- Prepare the project for public deployment.

## Goal

The first version of this portfolio should clearly communicate:

- Who I am.
- What I do as a frontend developer.
- Which projects I have built.
- Which technologies I work with.
- How to contact me.

First, build a professional presence. Then improve the architecture.
