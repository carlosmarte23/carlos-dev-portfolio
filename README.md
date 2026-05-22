# carlosmarte.dev

Astro portfolio site for `carlosmarte.dev`. The project is built as a static site with typed content modules, reusable Astro components, responsive layouts, light/dark themes, project case-study routes, and technical SEO support.

[Live site](https://carlosmarte.dev) | [Featured project: StageLink](https://stagelink.carlosmarte.dev/) | [About this site](https://carlosmarte.dev/about-this-site/) | [Contact](https://carlosmarte.dev/contact/)

## Status

Version: `1.0.0`

This is the first stable portfolio release. Version 1.0 includes the public pages, custom domain setup, responsive layout work, project case study content, theme support, motion polish, accessibility passes, SEO metadata, and a content structure that can later move from local TypeScript modules to JSON, an API, or a CMS.

## Screenshots

### Homepage

![Carlos Marte portfolio homepage](public/images/readme/home-desktop.png)

### StageLink case study

![StageLink case study page](public/images/readme/stagelink-case-study.png)

### Contact page on mobile

![Carlos Marte portfolio contact page on mobile](public/images/readme/contact-mobile.png)

## What is included

- Astro site deployed at `https://carlosmarte.dev`.
- Responsive homepage, about page, contact page, and project case study route.
- StageLink project case study with live demo, GitHub link, gallery, project facts, tech stack, and product narrative.
- About This Site page documenting the portfolio architecture, content model, technical SEO, and future direction.
- Shared site, navigation, page, project, skill, and contact data modules.
- Dark and light theme support.
- Image-based brand mark, simplified favicon, active navigation states, and mobile menu behavior.
- Page transitions, scroll reveal animations, smooth logo-to-top behavior, and reduced-motion handling.
- Accessibility-focused structure with semantic landmarks, heading order, alt text, named controls, labeled form fields, and stronger light-theme contrast.
- Canonical domain, sitemap integration, robots file, Open Graph metadata, Twitter metadata, and structured data.
- Local image assets for profile, social preview, project gallery, and README screenshots.

## Version 1.0 highlights

- Static Astro pages for Home, About, Contact, About This Site, and project details.
- StageLink case study route with project facts, gallery, feature breakdown, tech stack, and follow-up notes.
- About This Site route used as technical documentation for this portfolio build.
- Typed content layer under `src/data` and `src/types` so the data source can be swapped later.
- Responsive layout polish across desktop and mobile.
- Light/dark theme support with accessible contrast updates in the project tech stack.
- Motion layer with page transitions, scroll reveals, smooth scrolling, and reduced-motion handling.
- Technical SEO baseline with canonical URLs, sitemap generation, robots configuration, social previews, and structured data.

## Tech stack

- [Astro](https://astro.build/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [astro-icon](https://www.astroicon.dev/)
- [Fontsource](https://fontsource.org/)

## Featured project

StageLink is the first featured case study in the portfolio. It is a React and Vite concert ticketing MVP with event discovery, filtering and sorting, ticket selection, cart persistence, simulated checkout, and session-based digital tickets.

- [Live demo](https://stagelink.carlosmarte.dev/)
- [GitHub repo](https://github.com/carlosmarte23/stagelink)
- [Portfolio case study](https://carlosmarte.dev/projects/stagelink/)

## Portfolio showcase

The `About This Site` page documents how this portfolio is structured. It covers the Astro setup, typed content model, reusable components, SEO setup, responsive decisions, accessibility polish, and deployment direction.

- [About this site](https://carlosmarte.dev/about-this-site/)
- Focus: content architecture, technical SEO, responsive UI, accessibility polish, and public deployment.

## Project structure

```text
src/
  components/
    about/
    contact/
    home/
    layout/
    projects/
    shared/
    skills/
    ui/
  data/
    pages/
    contact.ts
    navigation.ts
    projects.ts
    site.ts
    skills.ts
    socialLinks.ts
  layouts/
    BaseLayout.astro
  pages/
    about.astro
    about-this-site.astro
    contact.astro
    index.astro
    projects/
      [slug].astro
  styles/
    global.css
  types/
    content.ts

public/
  images/
    og/
    profile/
    projects/
    readme/
  favicon.ico
  favicon.svg
  robots.txt
```

## Local development

Requirements:

- Node.js `>=22.12.0`
- pnpm `10.33.0`

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Run Astro and TypeScript checks:

```bash
pnpm check
```

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Version 1.0 validation

Done:

- Public custom domain configured.
- Portfolio brand, favicon, and shared navigation updated.
- Core pages created: home, about, contact, and project detail.
- StageLink case study published with live demo and gallery assets.
- About This Site completed as technical documentation for the portfolio build.
- Content data split into page/context modules with shared TypeScript types.
- SEO baseline added with canonical URLs, sitemap, robots, Open Graph, Twitter metadata, and structured data.
- Light and dark themes reviewed across public pages.
- Mobile menu, smooth logo-to-top behavior, and responsive navigation validated.
- Accessibility-oriented checks reviewed for landmarks, headings, image alt text, labeled form controls, named links/buttons, and contrast-sensitive UI.

Future improvements:

- Add more project case studies beyond StageLink.
- Connect content to a CMS or API when project volume grows.
- Add richer analytics or contact-flow tracking if needed.
- Continue expanding the portfolio as new production-quality projects are completed.

## Goal

Keep the codebase simple, typed, static-first, and easy to expand as more projects or content sources are added.
