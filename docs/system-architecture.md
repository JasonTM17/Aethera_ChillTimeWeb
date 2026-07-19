# System Architecture

## Runtime Shape

The application is a static client-side React SPA. It has no server runtime, API, database, authentication, analytics, or persistence layer.

```text
Browser request
  -> static index.html
  -> src/main.tsx
  -> BrowserRouter
      -> RouteEffects
      -> AppRoutes
          -> Home: AetheraHero + Home-only video lifecycle
          -> Interior: SiteLayout -> route page -> SiteFooter
          -> Unknown: NotFoundPage inside SiteLayout
```

Vercel and Netlify return `index.html` for direct client-route requests. React Router then resolves the route; an unknown path reaches the branded wildcard page.

## Routing and Shared Shell

`AppRoutes` defines Home, Studio, About, Journal, Reach Us, and the wildcard fallback. `SiteHeader` and `MobileNav` read the same typed navigation collection. NavLink provides active-route semantics, rendered as a desktop underline or a mobile dot and background.

`RouteEffects` centralizes:

- document titles;
- focus on `#main-content` after pathname changes;
- top scroll restoration when a new route has no hash;
- Journal direct-hash and same-page hash behavior.

## Interior Composition

```text
SiteLayout
  -> SiteHeader
  -> Outlet
      -> route main
          -> EditorialPageIntro
          -> HorizonLedger
          -> route-specific sections
          -> ContactRail or route-specific close
  -> SiteFooter
```

Only the shell, intro, Horizon Ledger, section-heading typography, and contact rail are shared. Route bodies remain deliberately different.

| Route | Verified component flow |
|---|---|
| Studio | `StudioProjectList -> StudioCapabilityLedger -> ContactRail` |
| About | `AboutPositioning -> AboutOrigin -> AboutManifesto -> AboutWorkingAgreement -> AboutPrinciples -> AboutProcess -> ContactRail` |
| Journal | `JournalReadingPaths -> JournalIndex -> JournalFieldNotes -> ContactRail` |
| Reach Us | `ReachUsContactSection -> ContactForm -> ReachUsNextSteps` |

Typed route content lives in matching `src/lib/*-content.ts` modules. Page files stay composition-focused.

## About Content Architecture

`src/lib/about-content.ts` is the source of truth for the About dossier:

```text
aboutPositioning
aboutOrigin
  -> 3 ordered chapters
aboutManifesto
workingAgreements
  -> 4 agreements
principles
  -> 4 principles + practical applications
processSteps
  -> 4 stages + named outputs
fitSignals
  -> 3 fit checks
```

The components map these immutable collections into semantic sections and ordered lists. No runtime fetch, CMS, founder record, or team model exists.

## Journal Content and Rendering

`src/lib/journal-content.ts` defines three compile-time collections:

| Collection | Count | Rendering |
|---|---:|---|
| `journalEntries` | 7 | Expandable articles |
| `journalReadingPaths` | 3 | Ordered groups of links to entry slugs |
| `journalFieldNotes` | 4 | Undated, non-interactive ordered notes |

`JournalIndex` clones and sorts entries by their zero-padded `number` in descending order. The highest number becomes the featured dark entry; the rest render as ledger rows.

Each `JournalEntry` renders:

- `article id={entry.slug}` as the stable link target;
- category, numbered folio, reading time, and a semantic `time` element;
- a native `details` element marked `data-hash-expand`;
- a `summary` that switches between “Read reflection” and “Close reflection” through native open state;
- three body paragraphs from typed content.

Field notes do not render `time` because the content explicitly describes them as undated.

## Journal Hash Flow

```text
direct URL or reading-path Link
  -> /journal#<slug>
  -> RouteEffects sees pathname/hash
  -> decodeURIComponent(hash.slice(1))
  -> document.getElementById(slug)
  -> open descendant [data-hash-expand]
  -> scroll article into view
```

The effect depends on both `pathname` and `hash`, so a reading-path link works without leaving the route. A decode failure returns `null`; the page remains usable. Native `details` remains keyboard-operable for manual expansion.

## Horizon Ledger and Motion

`HorizonLedger` uses `public/aethera-landscape-poster.webp` across all four interior routes. Each route supplies a field index, label, note, two facts, and crop position.

Only its image wrapper receives `horizon-arrive`: 320ms from 0.6 opacity and 12px offset to the resting state. `src/styles/theme.css` collapses animation and transition durations and disables smooth scrolling when reduced motion is requested. Essential intro copy remains visible independently.

## Home Video Lifecycle

`CinematicVideoLayer` owns the decorative media element. `useCinematicVideoLoop` owns playback, opacity, media-query, timer, and cleanup state.

1. Initial opacity is 0.
2. RAF maps the first 0.5 seconds to fade-in.
3. RAF maps the final 0.5 seconds to fade-out.
4. `ended` hides the video, waits 100ms, resets time, then calls `play()`.
5. Unmount removes listeners, pauses playback, and cancels RAF and timeout work.
6. A live media-query change removes the source under reduced motion and restores it when normal motion returns.

## Reach Us Data Flow

```text
Uncontrolled form fields
  -> FormData normalization
  -> pure validation and length bounds
  -> URL-encoded mailto draft
  -> user's email application
```

The website neither transmits nor stores form values. It focuses the first invalid field, focuses the prepared-draft confirmation after success, and offers direct email and start-over paths.

## Build, Deployment, and Repository Media

`npm run build` runs TypeScript project compilation and Vite, producing ignored `dist/` output. Vercel serves that directory and applies the rewrite in `vercel.json`.

`assets/showcase/` contains nine screenshots and two GIFs for the repository presentation. These files are not imported by source code and therefore are not included in the Vite output. They document the product; they are not a runtime dependency.

The canonical deployment is [https://aethera-chill-time-web.vercel.app](https://aethera-chill-time-web.vercel.app). Direct-route and enriched-content checks passed on 2026-07-19. See [Production deployment](./deployment.md) for the current gate results.

## Trust Boundaries

- The remote Home MP4 and Google Fonts are external read-only resources.
- Contact values remain local until the user chooses to send from an email client.
- Journal hashes select existing DOM IDs; malformed encoding is caught.
- No HTML injection, user-defined external route destination, secret, or privileged operation exists in the SPA.
- Repository showcase assets contain product captures only and are not part of application data flow.

## Related Documentation

- [Project overview and PDR](./project-overview-pdr.md)
- [Codebase summary](./codebase-summary.md)
- [Design guidelines](./design-guidelines.md)
- [Deployment guide](./deployment-guide.md)
- [Project roadmap](./project-roadmap.md)
