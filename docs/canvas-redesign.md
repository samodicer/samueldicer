# Single-screen portfolio redesign

This supersedes the original scrolling portfolio design. User requested autonomous implementation of a specific new direction.

## Approved direction

- One screen, upper-body photograph, Samuel Dičér, project portfolio.
- Palette: #f87060, #cdd7d6, #b3a394, #ffffff. Dark neutral text provides readable contrast.
- Five dashed circles: Eramba platform, Eramba website/learning portal, Juno.one product, Juno website and Stellarex website.
- Dashed connections lead from the portrait toward the project circles.
- Hover and keyboard focus preview a central detail card; tap/click pins it. Content includes technologies and factual contributions from the CV.
- Desktop cursor and restrained transitions, with a motion toggle and system reduced-motion support.
- No page scrolling. Compact layouts support short landscape screens; detail cards may scroll internally when necessary.

## Implementation

`PortfolioCanvas.vue` owns the page and interactions, `projects.ts` contains project facts, and `portfolio.css` contains responsive geometry and visual styling. The original supplied photo is preserved as an asset; the visible crop is implemented with CSS object-fit/object-position.

## Browser verification

- 1280 × 720 desktop: document dimensions equal viewport dimensions.
- 390 × 844 mobile: document dimensions equal viewport dimensions.
- 360 × 640 mobile: document dimensions equal viewport dimensions.
- 667 × 375 landscape: document dimensions equal viewport dimensions.
- All five circles: independently checked expected project category and technology stack after opening.
- Pin A, then select B: B remains open and pinned.
- Close a card with keyboard: focus returns to its originating circle without reopening the card.
- Escape dismisses the card, including when a different circle sits under the overlay.
- Motion off sets the decorative animation to `none`.

## Regression checks for future changes

1. Click the Eramba platform circle; click the Eramba website circle. Confirm the card remains open with React / Next.js.
2. Activate the close button with Enter. Confirm focus returns to the website circle and its expanded state is false.
3. Open each of the five circles in turn, dismissing between selections. Check title, category, stack and contribution.
4. Disable Motion and inspect the spark and active connection; neither should animate.
5. Check desktop, mobile and short landscape: scrollWidth/scrollHeight must not exceed the viewport; all five buttons and footer actions must remain visible.

GitHub creation/push remains blocked by the unavailable GitHub login described in verification.md. This redesign changes the local project and preview only.
