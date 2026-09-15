# Samuel Dičér — Portfolio

An animated, responsive frontend developer portfolio built with Nuxt 4, Vue 3 and TypeScript. English content is based on the supplied CV.

## Development

Requires Node.js 22 or newer (Node 24 recommended).

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Validate and build

```sh
npm run typecheck
npm run generate
```

The complete static site is generated in `.output/public`. It can be served by a static hosting provider. `npm run build` produces the server build if needed instead. The project is not deployed to a public website yet.

## Editing

- `app/data/profile.ts`: project descriptions, career history, skills and contact details.
- `app/components/`: hero, work, about and contact sections; editorial copy is kept with each section.
- `app/assets/css/main.css`: design tokens, responsive layouts and animation styles.
- `app/composables/useReveal.ts`: progressive scroll reveals with reduced-motion support.
- `public/Samuel_Dicer_CV.pdf`: downloadable original résumé.
- `public/samuel.jpg`: optimized portrait extracted from that résumé.
- `nuxt.config.ts`: page title and social metadata. Add canonical and social image URLs after selecting a real production domain.

Typography is self-hosted via Fontsource; no external font request or analytics is required. Decorative project previews are original interface illustrations, explicitly labelled as such, not product screenshots. Native disclosure controls expose contribution details without JavaScript. Email links open the visitor’s mail client; no backend or contact form is required.

## Accessibility

Semantic sections, keyboard focus indicators, a skip link, reduced-motion support and visible server-rendered content. Scroll animation is a progressive enhancement. Mobile layouts are designed from 360px upward.

## GitHub

Requested repository: `samueldicer/samueldicer`, private. Creating and pushing requires authentication to that account. No credentials are stored in this project.
