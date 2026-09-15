# Samuel Dičér — Portfolio

A single-screen frontend developer portfolio built with Nuxt 4, Vue 3 and TypeScript. An upper-body portrait and name sit among five project circles connected by dashed lines. English project contributions are based on the supplied CV.

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

- `app/data/projects.ts`: project names, technology stacks, contributions and desktop circle positions.
- `app/components/PortfolioCanvas.vue`: single-screen layout, project selection, keyboard behavior and motion control.
- `app/assets/css/portfolio.css`: coral, mist, taupe and white palette, dashed connections, portrait crop, transitions and responsive layouts.
- `public/Samuel_Dicer_CV.pdf`: downloadable original résumé.
- `public/samuel-portrait.jpg`: user-supplied original photo, cropped to the upper body with CSS.
- `nuxt.config.ts`: page title and social metadata. Add canonical and social image URLs after selecting a real production domain.

Typography is self-hosted via Fontsource; no external font request or analytics is required. Hover or focus a circle to preview its details, click/tap to pin it, and press Escape or the close button to dismiss. The layout stays within the viewport; only an open detail card may scroll internally on a very short screen. Email links open the visitor’s mail client; no backend or contact form is required.

## Accessibility

Project circles are keyboard-accessible buttons with expanded state. Keyboard dismissal restores focus to the originating circle. Motion respects the system preference and can also be disabled with the footer toggle. Touch users open details by tapping. The custom cursor only applies to fine pointers. Project interaction requires JavaScript; the name, portrait, project names, résumé and contact links are server rendered.

## GitHub

Requested repository: `samueldicer/samueldicer`, private. Creating and pushing requires authentication to that account. No credentials are stored in this project.
