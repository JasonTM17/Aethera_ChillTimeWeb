# Codebase Summary

## Entry and Configuration

| Path | Responsibility |
|---|---|
| `index.html` | Document metadata and React mount point |
| `src/main.tsx` | StrictMode root render |
| `src/App.tsx` | BrowserRouter, five-route table, wildcard fallback, and testable `AppRoutes` |
| `vite.config.ts` | React and Tailwind Vite plugins |
| `vitest.config.ts` | jsdom setup, V8 coverage scope, and 80/70/80/80 thresholds |
| `eslint.config.js` | TypeScript, React Hooks, and Fast Refresh lint rules |

## Source Areas

| Directory | Responsibility |
|---|---|
| `src/components/` | Shared shell, navigation, Horizon Ledger, editorial primitives, route sections, contact form, and Home video layer |
| `src/pages/` | Thin compositions for Studio, About, Journal, Reach Us, and not-found recovery |
| `src/hooks/` | Manual Home video lifecycle and live reduced-motion preference handling |
| `src/lib/` | Typed editorial content plus pure contact normalization, validation, and mailto-draft helpers |
| `src/styles/` | Font imports, palette, keyframes, 320px baseline, and reduced-motion rules |
| `src/test/` | Home/video, routes/navigation, interior semantics, Journal hash, and contact interaction coverage |
| `public/` | Local landscape poster and Netlify SPA fallback |

## Route Composition

- `/` renders `AetheraHero`, which owns `SiteHeader` and the Home-only cinematic video.
- Interior routes render through `SiteLayout`, sharing `SiteHeader` and `SiteFooter`.
- `/studio` composes the shared intro and Horizon Ledger with concept studies, capability/deliverable rows, working models, and a contact rail.
- `/about` composes the shared foundation with positioning, manifesto, staggered principles, process outputs, fit signals, and a contact rail.
- `/journal` composes the shared foundation with a featured reflection, chronological entry rows, native expandable bodies, and a contact rail.
- `/reach-us` composes a compact intro and Horizon Ledger with first-note guidance, local draft form, next steps, and native FAQs.
- Unknown paths render `NotFoundPage` inside the shared layout.

## Shared Interior Foundation

`EditorialPageIntro` renders essential copy immediately; it does not hide the H1 or description behind arrival motion. `HorizonLedger` then reuses `/aethera-landscape-poster.webp` with a distinct crop and factual ledger for each route. `EditorialSectionHeading` and `ContactRail` share typography and action patterns while route-specific components preserve different reading rhythms.

Content stays outside page markup in `src/lib/studio-content.ts`, `about-content.ts`, `journal-content.ts`, and `reach-us-content.ts`. Shared brand, route, CTA, and email values live in `src/lib/site-content.ts`.

## Interaction Boundaries

- Desktop and mobile navigation map the same typed collection through `NavLink`; active destinations receive `aria-current="page"`, a desktop underline, and a mobile dot marker.
- `RouteEffects` updates titles and route focus. For a valid Journal hash, it decodes the article ID, opens the nested `data-hash-expand` details element, and scrolls the article into view.
- Reach Us normalizes and validates `FormData`, then produces a URL-encoded `mailto:` link. There is no API request, backend, database, or browser-storage step.
- `useCinematicVideoLoop` listens for `prefers-reduced-motion` changes. Reduced motion removes the remote MP4 source and keeps the local poster; normal motion uses the manual fade/restart loop.
- The Horizon Ledger's supporting image wrapper uses the 320ms `horizon-arrive` motion, which collapses under reduced motion.

## Verified Local Quality Snapshot

Verified on 2026-07-18:

| Check | Result |
|---|---|
| Vitest coverage run | 5 files passed; 34/34 tests passed |
| Statements | 97.34% (257/264) |
| Branches | 88.88% (152/171) |
| Functions | 100% (96/96) |
| Lines | 97.25% (248/255) |
| Production build | Passed; TypeScript build and Vite production bundle completed |
| Dependency audit | 0 vulnerabilities across all severities |

## Production Release Snapshot

Vercel deployment `dpl_6vJKp1qNNGr91MRDz4ExnrUPme6A` is Ready at the canonical [production alias](https://aethera-chill-time-web.vercel.app). The deployment-specific URL is [https://aethera-chill-time-r33ib2qyf-nguyensonbmt06-6377s-projects.vercel.app](https://aethera-chill-time-r33ib2qyf-nguyensonbmt06-6377s-projects.vercel.app); creation time was 2026-07-18 23:03:45 +07:00.

- HTTP 200: `/`, `/studio`, `/about`, `/journal`, `/reach-us`, an unknown SPA path, and `/aethera-landscape-poster.webp`.
- Responsive Chromium: no horizontal overflow at 1440px, 768px, or 375px.
- Home media: exact configured CloudFront source, 14.041995-second duration, native loop disabled, and manual opacity fade/reset verified.
- Reduced motion: initial load has no `src` or `currentSrc`; a live preference switch pauses playback and removes the source.
- Interactions: Journal direct hash opens and scrolls; Reach invalid submit shows four alerts and focuses `#name`; mobile Escape restores trigger focus and the active marker remains visible.
- Errors: console and page errors empty.
- Vitals snapshot: TTFB 48.3ms, FCP 204ms, LCP 204ms, CLS 0.

Motion evidence: [Home cinematic loop](../plans/260718-2200-aethera-interior-experience/reports/home-cinematic-loop.gif), [interior pages tour](../plans/260718-2200-aethera-interior-experience/reports/interior-pages-tour.gif), and [mobile navigation tour](../plans/260718-2200-aethera-interior-experience/reports/mobile-navigation-tour.gif).

## Generated Output

`npm run build` creates ignored `dist/` output. Coverage output and dependencies are also ignored. Redesign QA evidence belongs under `plans/260718-2200-aethera-interior-experience/reports/`.

## Related Documentation

- [Design guidelines](./design-guidelines.md)
- [System architecture](./system-architecture.md)
- [Project roadmap](./project-roadmap.md)
- [Production deployment](./deployment.md)
