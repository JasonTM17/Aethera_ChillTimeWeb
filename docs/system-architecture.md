# System Architecture

## Runtime Shape

The application is a static client-side React SPA. It has no server runtime, database, authentication, analytics, or persistence layer.

```text
Browser request
  -> static index.html
  -> src/main.tsx
  -> BrowserRouter / AppRoutes / RouteEffects
      -> Home: AetheraHero + Home-only video lifecycle
      -> Interior: SiteLayout -> route page -> SiteFooter
      -> Unknown: NotFoundPage inside SiteLayout
```

## Routing and Shared Shell

`AppRoutes` defines Home, Studio, About, Journal, Reach Us, and the wildcard fallback. `SiteHeader` and `MobileNav` read the same typed navigation collection. `NavLink` supplies the active-route semantics; desktop renders an active underline at `lg` and above, while the mobile dialog renders an active dot below `lg`.

`RouteEffects` centralizes document titles, new-route main focus, top scroll restoration, and Journal hash behavior. Vercel and Netlify fallback files route direct requests to `index.html`; other static hosts need the same history fallback.

## Interior Composition

```text
SiteLayout
  -> SiteHeader
  -> route main
      -> EditorialPageIntro (visible essential copy)
      -> HorizonLedger (shared poster + route facts)
      -> route-specific sections
  -> SiteFooter
```

Only the intro, Horizon Ledger, section-heading typography, contact rail, and site shell are shared. The route bodies remain deliberately different:

| Route | Components and content flow |
|---|---|
| Studio | `StudioProjectList` -> `StudioCapabilityLedger` -> `ContactRail` |
| About | `AboutPositioning` -> `AboutManifesto` -> `AboutPrinciples` -> `AboutProcess` -> `ContactRail` |
| Journal | `JournalIndex` -> featured `JournalEntry` -> chronological entries -> `ContactRail` |
| Reach Us | `ReachUsContactSection` -> `ContactForm` -> `ReachUsNextSteps` |

Typed route content lives in matching `src/lib/*-content.ts` modules. Page components stay composition-focused.

## Horizon Ledger and Motion

`HorizonLedger` uses the local `public/aethera-landscape-poster.webp` on all four interior routes. Each route supplies its field index, label, note, two facts, and crop position. The image is decorative, dimensioned, and decoded asynchronously.

Its supporting image wrapper alone receives `horizon-arrive`: a 320ms opacity/12px transform animation. `src/styles/theme.css` collapses animation and transition durations and disables smooth scrolling when reduced motion is requested. Essential intro copy remains visible independently of this effect.

## Home Video Lifecycle

`CinematicVideoLayer` owns the decorative media element. `useCinematicVideoLoop` owns playback, opacity, error, media-query, timer, and cleanup state.

1. Initial opacity is 0.
2. RAF maps `currentTime / 0.5` during fade-in.
3. RAF maps `(duration - currentTime) / 0.5` during fade-out.
4. `ended` hides the video, waits 100ms, resets, then calls `play()`.
5. Unmount removes listeners, pauses playback, and cancels RAF and timeout work.
6. A live `MediaQueryList` change updates the mode while Home remains mounted. Reduced motion pauses and resets playback, omits the MP4 source, and shows the local poster; returning to normal motion restores playback.

## Journal Hash Flow

```text
/journal#<slug>
  -> decode hash safely
  -> find article[id=<slug>]
  -> open descendant [data-hash-expand] details
  -> scroll article into view
```

Entries render synchronously, so direct hashes can resolve on the first route effect. Malformed percent encoding returns no target instead of breaking the route. Native `details` remains keyboard-operable for manual expansion.

## Reach Us Data Flow

```text
Uncontrolled form fields
  -> FormData normalization
  -> pure validation and length bounds
  -> URL-encoded mailto draft
  -> user's own email application
```

No form value is transmitted to a JavaScript service or stored by the site. The form focuses the first invalid field, focuses the prepared-draft confirmation after success, and offers both a direct email link and a start-over path.

## Production Runtime Verification

Vercel deployment `dpl_6vJKp1qNNGr91MRDz4ExnrUPme6A` is Ready and mapped to [https://aethera-chill-time-web.vercel.app](https://aethera-chill-time-web.vercel.app). Its deployment-specific URL is [https://aethera-chill-time-r33ib2qyf-nguyensonbmt06-6377s-projects.vercel.app](https://aethera-chill-time-r33ib2qyf-nguyensonbmt06-6377s-projects.vercel.app). It was created on 2026-07-18 at 23:03:45 +07:00.

The canonical origin returns HTTP 200 for Home, all four interior routes, an unknown SPA path, and the landscape WebP. Production Chromium also verified the runtime contracts described above: manual Home playback, initial and live reduced-motion source removal, Journal hash expansion, Reach validation focus, mobile active/focus behavior, responsive overflow safety at 1440/768/375, and no console or page errors.

A single production navigation recorded TTFB 48.3ms, FCP 204ms, LCP 204ms, and CLS 0. Treat these as a snapshot rather than monitoring data. See the [production deployment record](./deployment.md) for HTTP details and motion evidence.

## Trust Boundaries

- The remote Home MP4 and Google Fonts are external read-only resources.
- User contact values remain local until the user chooses to send from an email client.
- No HTML injection, user-defined route destination, secret, or privileged operation exists.
- The canonical Vercel alias is public and verified; no custom domain is configured.

## Related Documentation

- [Codebase summary](./codebase-summary.md)
- [Design guidelines](./design-guidelines.md)
- [Project roadmap](./project-roadmap.md)
- [Production deployment](./deployment.md)
