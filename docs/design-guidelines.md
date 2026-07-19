# Design Guidelines

## Direction

Aethera uses refined editorial minimalism on a white canvas. Instrument Serif carries the emotional voice; Inter handles navigation, body copy, metadata, and controls. Motion stays quiet, short, and subordinate to content.

## Tokens

| Role | Value |
|---|---|
| Background / button text | `#FFFFFF` |
| Foreground / logo / CTA | `#000000` |
| Secondary text | `#6F6F6F` |
| Landscape wash | `#E8EEE7` |
| Validation error | `#8A2E2E` |
| Display font | Instrument Serif with Georgia fallback |
| Body font | Inter with system sans-serif fallback |

Theme variables and keyframes live in `src/styles/theme.css`. Google Font imports live in `src/styles/fonts.css` and use `display=swap`.

## Home Contract

- Minimum height: `100dvh`.
- Video layer: `top: 300px; right: 0; bottom: 0; left: 0`.
- Headline: 48px mobile, 72px small screen, 96px medium and larger; line-height 0.95 and tracking -2.46px.
- Only “silence,” and “the eternal.” are italic gray.
- Header and hero actions both say “Begin Journey.”
- Keep the video lifecycle on Home; do not move it into the shared interior layout.

## Shared Interior Foundation

Every interior route starts with `EditorialPageIntro` followed by `HorizonLedger`.

- Essential intro copy is visible on first paint and does not use arrival animation.
- Content stays within `max-w-7xl` with 24px mobile and 32px larger gutters.
- Horizon Ledger reuses `public/aethera-landscape-poster.webp` with route-specific crop, field number, label, factual note, and metadata.
- The Ledger image is decorative, declares `1920 × 1068` dimensions, and decodes asynchronously.
- `EditorialSectionHeading` and `ContactRail` share typography and action rhythm without forcing route bodies into one card pattern.
- Use thin black-opacity rules, monochrome surfaces, one restrained landscape wash, and rounded black actions for hierarchy.

## About Dossier

About must read as one studio portrait in this order:

```text
positioning -> origin -> manifesto -> working agreement -> principles -> process and fit
```

| Section | Visual and semantic contract |
|---|---|
| Positioning | Dark/light paired columns from the medium breakpoint; preserve “Aethera is / is not” contrast |
| Origin | One black field with three ordered chapters; white metadata and body copy remain legible |
| Manifesto | Wide editorial statement with two supporting paragraphs |
| Working agreement | Landscape-wash field with four ordered agreements and paired contribution columns |
| Principles | Four staggered rows; each principle includes an “In practice” application |
| Process | Two columns at medium, four stages at large, followed by the existing fit-signal list |

Do not invent founders, biographies, dates, client metrics, or a fixed staffing claim. The origin explains a recurring design tension and the studio’s response, not unsupported history.

## Journal Archive

Journal is a curated archive, not a generic post grid.

- Render three reading paths before the archive. Each path is an ordered editorial row containing normal links to stable article hashes.
- Render seven reflections: one dark featured entry followed by six numbered ledger rows.
- Use each slug as the `article` ID and render the visible filing date with `<time dateTime="YYYY-MM-DD">`.
- Keep native `details` and `summary` for every reflection. Open body copy remains at least 16px with generous line height.
- Render four field notes as a separate, non-interactive ordered list on landscape wash.
- Field notes are explicitly undated. Do not add `time` elements or imply publication history.
- Hash links must use `/journal#<slug>` and remain shareable.

The current content counts—seven reflections, three paths, and four field notes—are part of the verified editorial contract.

## Responsive Navigation and Layout

- Below `lg`, use the modal mobile navigation; at `lg` and above, use desktop navigation.
- NavLink exposes the current destination through `aria-current="page"`.
- Use an expanded underline on desktop and a dot plus subtle background in the mobile panel.
- Pointer targets are at least 44px.
- Editorial grids collapse into semantic source order before their desktop breakpoints.
- Maintain the 320px document minimum. Verify 375px, 768px, and 1440px layouts without horizontal overflow or an empty first fold.

## Motion and Media

- RAF alone controls Home video opacity: 0.5s fade-in, 0.5s fade-out, and 100ms restart delay.
- The only shared interior arrival motion is `horizon-arrive`: 320ms from 0.6 to 1 opacity and 12px to 0 vertical offset.
- `prefers-reduced-motion: reduce` collapses animation and transition durations to 0.01ms and disables smooth scrolling.
- Entering reduced motion pauses and resets Home playback, removes the MP4 source, and leaves the local poster. Leaving it restores the source and loop.
- Journal expansion and hash navigation use native disclosure and scrolling behavior; do not add decorative entrance sequences.

## Accessibility

- Preserve one H1, one focusable `#main-content`, heading order, skip navigation, visible focus rings, and mobile focus containment on every route.
- Decorative video and Ledger images remain hidden from assistive technology.
- Journal hash handling must open `[data-hash-expand]` before scrolling, then focus the labelled article so keyboard and visual position stay aligned. Malformed or missing targets must remain safe and route changes fall back to the top.
- Semantic dates require a human-readable label and machine-readable ISO `dateTime`.
- Reach Us focuses the first invalid control and never claims to submit or store user data.

## Repository Showcase

Curated repository media belongs in `assets/showcase/`.

- Desktop captures use 1440 × 900; mobile captures use 375 × 812.
- `home-cinematic-loop.gif` is 720 × 450.
- `interior-editorial-tour.gif` is 900 × 563.
- Keep filenames descriptive and kebab-case.
- Treat showcase files as repository documentation. Do not import them into the production SPA unless a product requirement changes.

## Related Documentation

- [Project overview and PDR](./project-overview-pdr.md)
- [Codebase summary](./codebase-summary.md)
- [System architecture](./system-architecture.md)
- [Project roadmap](./project-roadmap.md)
