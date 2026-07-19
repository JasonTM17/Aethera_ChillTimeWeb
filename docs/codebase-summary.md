# Codebase Summary

Refreshed 2026-07-19 from a Repomix snapshot and direct source review. The source files, tests, build configuration, and production origin were checked separately before documenting behavior.

## Product Shape

Aethera is a static React single-page application with five public routes and a branded client-side not-found state.

| Route | Purpose |
|---|---|
| `/` | Cinematic Home hero with a manual video lifecycle |
| `/studio` | Concept explorations, capabilities, and working models |
| `/about` | Studio positioning, origin, manifesto, collaboration agreement, principles, process, and fit |
| `/journal` | Seven expandable reflections, three reading paths, and four field notes |
| `/reach-us` | Validated local email-draft flow and direct email fallback |
| `*` | Branded recovery inside the shared interior shell |

## Entry and Configuration

| Path | Responsibility |
|---|---|
| `index.html` | Document metadata and React mount point |
| `src/main.tsx` | StrictMode root render |
| `src/App.tsx` | BrowserRouter, route table, wildcard fallback, and testable `AppRoutes` |
| `vite.config.ts` | React and Tailwind Vite plugins |
| `vitest.config.ts` | jsdom setup, V8 coverage scope, and 80/70/80/80 thresholds |
| `eslint.config.js` | TypeScript, React Hooks, and Fast Refresh rules |
| `vercel.json` | `npm run build`, `dist/` output, and SPA rewrite |
| `public/_redirects` | Netlify SPA history fallback |

## Source Areas

| Directory | Current role |
|---|---|
| `src/components/` | 28 shared and route-specific React components |
| `src/pages/` | Five composition-focused route pages |
| `src/hooks/` | Home video lifecycle and live reduced-motion handling |
| `src/lib/` | Typed editorial content and pure contact-form helpers |
| `src/styles/` | Font imports, design tokens, motion, and global baseline |
| `src/test/` | Six Vitest files covering routes, interior semantics, Journal navigation, contact, and video behavior |
| `public/` | Landscape poster and Netlify fallback |
| `assets/showcase/` | Repository-only screenshots and GIFs; not imported into the SPA |

## Shared Runtime Structure

- Home renders `AetheraHero` and owns the only video element.
- Interior routes render through `SiteLayout` with `SiteHeader` and `SiteFooter`.
- `EditorialPageIntro` and `HorizonLedger` establish the common opening rhythm.
- `EditorialSectionHeading` and `ContactRail` are shared primitives; route bodies remain structurally distinct.
- `RouteEffects` owns titles, route focus, top reset for new routes, and Journal hash handling.

Editorial content stays outside page markup in `src/lib/studio-content.ts`, `about-content.ts`, `journal-content.ts`, and `reach-us-content.ts`. Shared route, navigation, CTA, and email values live in `src/lib/site-content.ts`.

## About Dossier

`AboutPage` composes this verified sequence:

```text
EditorialPageIntro
  -> HorizonLedger
  -> AboutPositioning
  -> AboutOrigin
  -> AboutManifesto
  -> AboutWorkingAgreement
  -> AboutPrinciples
  -> AboutProcess
  -> ContactRail
```

`src/lib/about-content.ts` provides:

- paired “Aethera is / is not” positioning;
- a three-chapter origin framed as tension, choice, and measure;
- a manifesto statement and supporting paragraphs;
- four working agreements;
- four principles with practical applications;
- four process stages and three fit signals.

The origin intentionally makes no founder, team-biography, or founding-date claim.

## Journal Archive

`src/lib/journal-content.ts` defines seven complete reflections, three thematic reading paths, and four undated field notes.

- `JournalIndex` sorts a copy of the entry collection by numbered folio and features `007`.
- Each `JournalEntry` is an `article` whose `id` is its stable slug.
- Published display dates use semantic `<time dateTime="YYYY-MM-DD">` values.
- Reflection bodies use native `details` and `summary`; no custom disclosure state is required.
- `JournalReadingPaths` uses route links to `/journal#<slug>`.
- `RouteEffects` safely decodes the hash, opens the target `[data-hash-expand]` disclosure, scrolls it into view, and focuses its labelled article. A new location key lets the same reading-path link reopen a manually closed current target; unresolved hashes on a route change fall back to the top.
- Malformed percent encoding is ignored without breaking the route.
- `JournalFieldNotes` is a non-interactive ordered list and labels every item “Undated studio note.”

## Other Interaction Boundaries

- Desktop and mobile navigation map the same typed route collection through NavLink and expose `aria-current="page"`.
- Reach Us normalizes and validates FormData, then creates a URL-encoded `mailto:` draft. The site has no API, database, or browser-storage step.
- `useCinematicVideoLoop` removes the remote MP4 source under reduced motion and restores it when the preference changes back.
- Horizon Ledger arrival motion collapses under `prefers-reduced-motion`.

## Verified Quality Snapshot

Verified locally on 2026-07-19:

| Check | Result |
|---|---|
| Vitest coverage run | 6 files passed; 38/38 tests passed |
| Statements | 97.14% (272/280) |
| Branches | 88.82% (159/179) |
| Functions | 100% (106/106) |
| Lines | 97.39% (262/269) |
| Lint | Passed |
| Production build | Passed; TypeScript and Vite completed |
| Dependency audit | 0 vulnerabilities |

## Production and Showcase

The canonical production origin is [https://aethera-chill-time-web.vercel.app](https://aethera-chill-time-web.vercel.app). On 2026-07-19 it returned HTTP 200 for Home, all four named interior routes, an unknown SPA path, and `/aethera-landscape-poster.webp`. The deployed JavaScript contained the enriched About origin and seven-reflection Journal content.

`assets/showcase/` contains nine PNG captures and two GIFs:

- `home-cinematic-loop.gif`;
- `interior-editorial-tour.gif`.

The showcase folder documents the repository. Vite does not copy it into `dist/` because the application does not import those files.

## Related Documentation

- [Project overview and PDR](./project-overview-pdr.md)
- [Design guidelines](./design-guidelines.md)
- [System architecture](./system-architecture.md)
- [Deployment guide](./deployment-guide.md)
- [Production deployment](./deployment.md)
- [Project roadmap](./project-roadmap.md)
