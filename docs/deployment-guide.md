# Deployment Guide

## Production Target

- Platform: Vercel.
- Project: `aethera-chill-time-web`.
- Canonical URL: [https://aethera-chill-time-web.vercel.app](https://aethera-chill-time-web.vercel.app).
- Runtime environment variables: none.
- Detailed release record: [Production deployment](./deployment.md).

## Prerequisites

- Node.js 22.22 or newer.
- npm with the checked-in `package-lock.json`.
- Network access to Google Fonts and the configured CloudFront MP4 for the full Home experience.
- An authenticated Vercel CLI linked to the existing project for production deployment.

## Install and Run

```bash
npm ci
npm run dev
```

Use the local URL printed by Vite.

## Build and Verify

```bash
npm run lint
npm run test:coverage -- --pool=threads --maxWorkers=1 --no-file-parallelism
npm run build
npm audit --audit-level=high
npm run preview
```

Deploy `dist/`. Do not deploy `src/`, `docs/`, plans, or repository showcase media as application source.

The verified 2026-07-19 baseline is 35 passing tests across six files, with 97.11% statements, 88.43% branches, 100% functions, and 97.36% lines.

## SPA History Fallback

Every client route must return `index.html` so BrowserRouter can resolve the path.

### Vercel

`vercel.json` runs `npm run build`, publishes `dist`, and rewrites every request to `/index.html`.

```bash
vercel --prod
```

If the checkout is not linked, run `vercel link` and select `aethera-chill-time-web` first.

### Netlify

`public/_redirects` contains:

```text
/* /index.html 200
```

Vite copies this file to `dist/_redirects`.

### Other Static Hosts

Configure an equivalent catch-all fallback. Confirm direct HTTP 200 responses for:

```text
/studio
/about
/journal
/reach-us
```

An unknown path should also return the SPA shell; React then renders the branded not-found page.

## Release Smoke Check

After deployment:

1. Open Home and confirm normal cinematic playback.
2. Enable reduced motion and confirm the MP4 source is absent while the poster remains.
3. Open About and confirm origin, manifesto, working agreement, principles, process outputs, and fit signals.
4. Open Journal and confirm seven “Read reflection” controls, three reading paths, and four “Undated studio note” labels.
5. Follow a reading-path link and confirm the URL hash changes, the target disclosure opens, and the article scrolls into view.
6. Refresh a direct Journal hash and repeat the target check.
7. Confirm dated reflections expose a readable date and ISO `dateTime` value.
8. Submit an empty Reach Us form and confirm validation focuses the first invalid field.
9. Confirm mobile navigation focus containment, active-route marker, Escape handling, and trigger-focus restoration.
10. Check browser console errors and horizontal overflow at 375px, 768px, and 1440px.

## Repository Showcase

`assets/showcase/` contains nine PNGs and two GIFs for GitHub and repository documentation. These files are not imported by the SPA and are not included in `dist/`.

When captures change:

- recapture only from the verified canonical release;
- keep descriptive kebab-case names;
- preserve 1440 × 900 desktop and 375 × 812 mobile viewports;
- inspect both GIFs after optimization.

## Operational Checklist

- Confirm `hello@aethera.studio` is controlled and monitored, or update `src/lib/site-content.ts`.
- Confirm remote MP4 availability and bandwidth policy.
- Decide whether Google Fonts should remain remote or be self-hosted.
- Keep the canonical `vercel.app` origin documented even if a custom domain is added.

## Rollback

There are no database migrations. Promote a known-good deployment in Vercel, or run:

```bash
vercel rollback <deployment-id-or-url>
```

Repeat the direct-route and release smoke checks after rollback.

## Related Documentation

- [Production deployment](./deployment.md)
- [System architecture](./system-architecture.md)
- [Codebase summary](./codebase-summary.md)
- [Project roadmap](./project-roadmap.md)
