export default defineNuxtConfig({
  compatibilityDate: "2026-09-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Samuel Dičér — Frontend Developer",
      meta: [
        {
          name: "description",
          content:
            "Frontend developer crafting thoughtful digital experiences with Vue, Nuxt, React and TypeScript. Explore the work and experience of Samuel Dičér.",
        },
        { name: "theme-color", content: "#111210" },
        { property: "og:title", content: "Samuel Dičér — Frontend Developer" },
        {
          property: "og:description",
          content:
            "Thoughtful interfaces. Solid foundations. Vue, Nuxt, React & TypeScript.",
        },
        { property: "og:type", content: "website" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
