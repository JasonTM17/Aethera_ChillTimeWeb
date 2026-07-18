# System Architecture

## Runtime Shape

The application is a static client-side React SPA. It has no server runtime, database, authentication, analytics, or persistence layer.

```text
Browser request
  → static index.html
  → src/main.tsx
  → BrowserRouter / AppRoutes
      → Home: AetheraHero + Home-only video lifecycle
      → Interior: SiteLayout → route page → SiteFooter
      → Unknown: NotFoundPage
```

## Routing

`AppRoutes` defines the five public routes and wildcard fallback. `SiteHeader` and `MobileNav` read the same typed navigation collection. Vercel and Netlify fallback files ensure direct requests reach `index.html`; other hosts need the same history fallback.

## Video Lifecycle

`CinematicVideoLayer` owns the decorative element. `useCinematicVideoLoop` owns playback, opacity, error, timer, and cleanup state.

1. Initial opacity is 0.
2. RAF maps `currentTime / 0.5` during fade-in.
3. RAF maps `(duration - currentTime) / 0.5` during fade-out.
4. `ended` hides, waits 100ms, resets, then calls `play()`.
5. Unmount removes listeners, pauses playback, and cancels RAF and timeout.
6. Reduced-motion omits the MP4 source and shows a local WebP poster.

## Contact Data Flow

```text
Uncontrolled form fields
  → FormData normalization
  → pure validation and length bounds
  → URL-encoded mailto draft
  → user's own email application
```

No form values are transmitted to JavaScript services or stored by the site. The direct email link remains available when form scripting is not used.

## Accessibility Flow

Route changes update the document title, focus the new main landmark, and restore scroll. Valid Journal hashes scroll to the entry; malformed encoding is ignored. Mobile navigation traps focus while open and restores it on dismissal. Reduced-motion CSS collapses non-essential animations.

## Trust Boundaries

- The remote MP4 and Google Fonts are external read-only resources.
- User contact values remain local until the user confirms sending through an email client.
- No HTML injection, user-defined route destination, secret, or privileged operation exists.
