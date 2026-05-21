import type { NavigationConfig } from "@content-types/content";

export const navigation: NavigationConfig = {
  main: [
    { href: "/", label: "Home" },
    { href: "/#projects", label: "Projects", activePath: "/projects" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About Me" },
    { href: "/about-this-site", label: "About This Site" },
  ],
  footer: [
    { href: "/#projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About Me" },
    { href: "/about-this-site", label: "About This Site" },
  ],
};
