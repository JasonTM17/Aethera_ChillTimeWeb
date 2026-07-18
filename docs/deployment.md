# Production Deployment

## Current Release

| Field | Value |
|---|---|
| Provider | Vercel |
| Project | `aethera-chill-time-web` |
| Scope | `nguyensonbmt06-6377s-projects` |
| Status | Ready |
| Deployment ID | `dpl_6vJKp1qNNGr91MRDz4ExnrUPme6A` |
| Canonical alias | [https://aethera-chill-time-web.vercel.app](https://aethera-chill-time-web.vercel.app) |
| Deployment URL | [https://aethera-chill-time-r33ib2qyf-nguyensonbmt06-6377s-projects.vercel.app](https://aethera-chill-time-r33ib2qyf-nguyensonbmt06-6377s-projects.vercel.app) |
| Created | 2026-07-18 23:03:45 +07:00 |

The canonical alias serves the completed interior redesign. No custom domain is configured.

## Configuration

`vercel.json` defines the production contract:

- Build command: `npm run build`.
- Output directory: `dist`.
- Framework preset: explicit neutral configuration.
- SPA fallback: every route rewrites to `/index.html`.

No runtime or build-time environment variables are required. The Home experience depends on the configured Google Fonts import and CloudFront video URL being publicly reachable.

## Verified Quality Gates

Verified before deployment on 2026-07-18:

| Check | Result |
|---|---|
| Lint | Passed |
| Vitest coverage run | 5 files passed; 34/34 tests passed |
| Statement coverage | 97.34% |
| Production build | TypeScript and Vite build passed |
| Dependency audit | 0 vulnerabilities |

## Deploy

The repository is linked locally through the ignored `.vercel/project.json` file. Run the quality gates before production deployment:

```bash
npm ci
npm run lint
npm run test:coverage
npm run build
npm audit --audit-level=high
vercel --prod
```

For a fresh checkout, link the existing project before deploying:

```bash
vercel link --yes --scope nguyensonbmt06-6377s-projects --project aethera-chill-time-web
vercel --prod --scope nguyensonbmt06-6377s-projects
```

## HTTP Verification

The canonical alias returned HTTP 200 for:

| Resource | Result |
|---|---|
| `/` | Home SPA shell |
| `/studio` | Direct interior route |
| `/about` | Direct interior route |
| `/journal` | Direct interior route |
| `/reach-us` | Direct interior route |
| Unknown path | Same SPA shell as `/`; React renders not-found recovery |
| `/aethera-landscape-poster.webp` | `image/webp` asset |

## Production Browser Verification

Production Chromium QA confirmed:

- no horizontal overflow at 1440px, 768px, or 375px;
- Home loads the exact CloudFront URL configured in `src/lib/hero-content.ts`, reports a 14.041995-second duration, keeps native `loop` false, and performs the manual opacity fade/reset;
- initial reduced motion has no `src` or `currentSrc`, and a live switch pauses playback and removes the source;
- `/journal#designing-for-the-quiet-mind` opens the targeted details element and scrolls it into view;
- an empty Reach Us submission renders four alerts and focuses `#name`;
- the mobile dialog shows the active-route marker and restores trigger focus after Escape;
- console and page errors remain empty.

## Performance Snapshot

One production Chromium navigation recorded:

| Metric | Value |
|---|---|
| TTFB | 48.3ms |
| FCP | 204ms |
| LCP | 204ms |
| CLS | 0 |

This is a point-in-time verification snapshot, not a sustained performance baseline or service-level objective.

## Evidence

- [Home cinematic loop](../plans/260718-2200-aethera-interior-experience/reports/home-cinematic-loop.gif)
- [Interior pages tour](../plans/260718-2200-aethera-interior-experience/reports/interior-pages-tour.gif)
- [Mobile navigation tour](../plans/260718-2200-aethera-interior-experience/reports/mobile-navigation-tour.gif)
- [Earlier production baseline report](../plans/260718-1608-cinematic-aethera-hero/reports/deployment-report.md)

## Custom Domain

No custom domain is configured. Add one in Vercel Project Settings, preserve the generated `vercel.app` alias as a fallback, and repeat route/browser verification after DNS becomes active.

## Rollback

There are no database migrations. In the Vercel dashboard, select a known-good deployment and promote it, or run:

```bash
vercel rollback <previous-deployment-url>
```

Confirm the public alias and all direct routes again after rollback.
