# Design Guidelines

## Direction

Refined editorial minimalism on a pure white canvas. Instrument Serif carries the emotional voice; Inter handles navigation, body copy, metadata, and controls. Motion stays quiet, short, and subordinate to content.

## Tokens

| Role | Value |
|---|---|
| Background / button text | `#FFFFFF` |
| Foreground / logo / CTA | `#000000` |
| Secondary text | `#6F6F6F` |
| Landscape wash | `#E8EEE7` |
| Validation error | `#8A2E2E` |
| Display font | Instrument Serif |
| Body font | Inter |

Theme variables and animation definitions live in `src/styles/theme.css`. Font imports live in `src/styles/fonts.css` and use `display=swap`.

## Home Contract

- Minimum height: `100dvh`.
- Video layer: `top: 300px; right: 0; bottom: 0; left: 0`.
- Gradient: white to transparent to white above the video.
- Headline: 48px mobile, 72px small screen, 96px medium and larger; line-height 0.95 and tracking -2.46px.
- Only “silence,” and “the eternal.” are italic gray.
- Header and hero CTAs both say “Begin Journey”.
- Do not add sections to the Home hero or move video playback into the shared interior layout.

## Interior Page System

Every interior route begins with `EditorialPageIntro`, followed immediately by `HorizonLedger`.

- Intro eyebrow, H1, description, folio, and route-purpose aside are visible on first paint. Essential intro copy does not use the fade-rise animation.
- Content stays inside `max-w-7xl` with 24px mobile and 32px larger gutters.
- The Horizon Ledger reuses `public/aethera-landscape-poster.webp` with route-specific crop, field number, label, factual note, and metadata. Its image is decorative (`alt=""`) and declares `1920 × 1068` dimensions.
- Shared `EditorialSectionHeading` and `ContactRail` components establish typography and rhythm; they do not force route content into identical card grids.
- Thin black-opacity rules, monochrome surfaces, restrained landscape wash, and rounded black actions provide hierarchy.

Keep each route structurally distinct:

| Route | Editorial structure |
|---|---|
| Studio | Three explicitly labeled concept studies, alternating artwork, hypothesis/method details, capability ledger, and working models |
| About | “Aethera is / is not” positioning, manifesto, staggered principles, process outputs, and fit signals |
| Journal | One featured reflection followed by chronological rows; each native `details` body belongs to a stable article slug |
| Reach Us | Compact intro, first-note guidance, validated local form, direct email fallback, transparent next steps, and native FAQs |

Studio artwork remains abstract and monochrome. Never imply that a concept study is commissioned client work. Reach Us remains a `mailto:` draft flow: the site does not transmit or store form values.

## Responsive Navigation and Layout

- Below `lg`, use the modal mobile navigation; at `lg` and above, use the desktop navigation.
- The current route is exposed by `NavLink` as `aria-current="page"`. Its visible marker is an expanded underline on desktop and a dot plus subtle background in the mobile panel.
- Pointer targets are at least 44px.
- Editorial grids stack into one readable column before their desktop breakpoints.
- The document has a 320px minimum width. Verify 320/375, 768, and 1440 layouts without horizontal overflow or an empty first fold.

## Motion and Media

- RAF alone controls Home video opacity. Preserve the 0.5s fade-in, 0.5s fade-out, and 100ms restart delay.
- The only interior arrival motion is the supporting Horizon Ledger image band: `horizon-arrive` runs for 320ms from 0.6 to 1 opacity and 12px to 0 vertical offset.
- `prefers-reduced-motion: reduce` collapses animation and transition durations to 0.01ms and disables smooth scrolling.
- `useCinematicVideoLoop` subscribes to media-query changes while the page is open. Entering reduced motion pauses and resets playback, removes the MP4 source, and shows the local poster; leaving it restores the source and active loop.

## Accessibility

- Preserve visible focus rings, semantic landmarks, one H1 per route, heading order, skip navigation, and mobile focus containment.
- Decorative video remains muted, unfocusable, and hidden from assistive technology.
- Journal hashes target stable article IDs. `RouteEffects` opens the target's `data-hash-expand` details element before scrolling it into view; malformed hashes are ignored safely.
- Reach Us focuses the first invalid control, then focuses the draft confirmation after valid preparation. “Start Over” returns focus to the name field.

## Related Documentation

- [System architecture](./system-architecture.md)
- [Codebase summary](./codebase-summary.md)
- [Project roadmap](./project-roadmap.md)
