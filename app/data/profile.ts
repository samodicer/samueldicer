export const profile = {
  name: "Samuel Dičér",
  email: "dicersamuel@gmail.com",
  github: "https://github.com/samueldicer",
  location: "Cabaj-Čápor, Slovakia",
  projects: [
    {
      id: "eramba",
      number: "01",
      name: "Eramba",
      category: "ENTERPRISE PLATFORM · PUBLIC WEBSITE",
      headline: "Complexity, made clear.",
      description:
        "Building interfaces for an enterprise governance, risk and compliance platform — and the website and learning portal around it.",
      contribution:
        "Reusable components, backend-driven forms, data tables, REST integrations and unit tests. Website development, shared state and SEO improvements.",
      tech: ["Vue 3", "TypeScript", "React", "Next.js", "Pinia"],
      company: "DeMi Studio",
      visual: "dashboard",
    },
    {
      id: "juno",
      number: "02",
      name: "Juno.one",
      category: "PRODUCT DEVELOPMENT · MARKETING WEBSITE",
      headline: "Better tools. Better workflows.",
      description:
        "Contributing to a software development management tool and its public-facing website.",
      contribution:
        "Product features, API integrations and code reviews. A responsive Nuxt website with Storyblok content management.",
      tech: ["Vue.js", "Nuxt", "TypeScript", "Storyblok", "Vuetify"],
      company: "Denevy",
      visual: "boards",
    },
    {
      id: "stellarex",
      number: "03",
      name: "Stellarex",
      category: "BUSINESS WEBSITE",
      headline: "A considered digital presence.",
      description:
        "Developing a business website with a modern Vue and Nuxt stack, bringing responsive interfaces to the web.",
      contribution:
        "Frontend website development using Nuxt, TypeScript, Tailwind CSS and Vite.",
      tech: ["Nuxt", "Vue.js", "TypeScript", "Tailwind CSS"],
      company: "Denevy",
      visual: "website",
    },
  ],
  experience: [
    {
      company: "DeMi Studio",
      period: "Oct 2024 — Present",
      role: "Frontend Developer",
      description:
        "Enterprise applications and public websites. From reusable Vue components and API integrations to React experiences, testing, code reviews and release preparation.",
      tags: ["Eramba platform", "Website & learning portal"],
    },
    {
      company: "Denevy",
      period: "Apr 2023 — Jul 2024",
      role: "Frontend Developer",
      description:
        "Product interfaces and business websites built with Vue, Nuxt and TypeScript. Feature development, REST integrations, content management and code reviews.",
      tags: ["Juno.one", "Juno website", "Stellarex"],
    },
  ],
  skills: [
    {
      title: "Interfaces",
      items: [
        "Vue 3",
        "Nuxt",
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS / SCSS",
      ],
    },
    {
      title: "Design to code",
      items: [
        "Tailwind CSS",
        "PrimeVue",
        "Vuetify",
        "Headless UI",
        "Storybook",
        "Figma",
      ],
    },
    {
      title: "Under the hood",
      items: ["Pinia", "Zustand", "REST APIs", "Axios", "Storyblok", "i18next"],
    },
    {
      title: "Shipping well",
      items: [
        "Git / Git Flow",
        "GitHub Actions",
        "Vitest",
        "Jest",
        "Docker",
        "Vite",
        "npm",
        "Postman",
      ],
    },
  ],
};
