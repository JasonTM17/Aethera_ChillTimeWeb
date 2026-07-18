# Production Deployment Report — Aethera Interior Experience

- **Deployed:** 2026-07-18 23:03:45 +07
- **Provider:** Vercel
- **Project:** `aethera-chill-time-web`
- **Scope:** `nguyensonbmt06-6377s-projects`
- **Status:** Ready

## Release identity

- Deployment ID: `dpl_6vJKp1qNNGr91MRDz4ExnrUPme6A`
- Canonical production alias:
  [aethera-chill-time-web.vercel.app](https://aethera-chill-time-web.vercel.app)
- Immutable deployment:
  [aethera-chill-time-r33ib2qyf-nguyensonbmt06-6377s-projects.vercel.app](https://aethera-chill-time-r33ib2qyf-nguyensonbmt06-6377s-projects.vercel.app)
- Vercel inspection returned target `production` and status `Ready`.
- No custom domain or environment variables are configured.

## Build contract

Vercel ran `npm run build` from the linked project using `vercel.json`, emitted
`dist`, and installed the SPA rewrite to `/index.html`. The server-side build
completed without TypeScript or Vite errors. `.vercelignore` excludes CK control
files, plans, docs, coverage, and logs from the upload without excluding runtime
source or public assets.

## Public HTTP verification

| URL | Status | Content type |
|---|---:|---|
| `/` | 200 | `text/html; charset=utf-8` |
| `/studio` | 200 | `text/html; charset=utf-8` |
| `/about` | 200 | `text/html; charset=utf-8` |
| `/journal` | 200 | `text/html; charset=utf-8` |
| `/reach-us` | 200 | `text/html; charset=utf-8` |
| `/unknown-route` | 200 | SPA fallback HTML |
| `/aethera-landscape-poster.webp` | 200 | `image/webp`, 171432 bytes |

## Public behavior verification

- Home loads the specified CloudFront video only under normal motion, uses no
  native loop, and completes the manual fade/reset/fade cycle.
- Initial reduced-motion rendering has no video `src` or `currentSrc`; a live
  preference change pauses the media, removes the attribute, and collapses
  animation duration to `1e-05s`.
- Studio, About, Journal, and Reach Us render distinct full journeys with one
  Horizon Ledger each and no horizontal overflow at tested widths.
- Direct `/journal#designing-for-the-quiet-mind` navigation opens the nested
  reflection and scrolls to it.
- Reach Us validates locally, focuses the first invalid field, and prepares only
  a `mailto:` draft; it sends and stores no form data.
- Mobile navigation opens as a modal, exposes a non-color active indicator, and
  restores trigger focus after Escape.
- Browser console and page-error streams were empty.

## Performance snapshot

Agent-browser Chromium vitals against the canonical production origin:

| Metric | Value |
|---|---:|
| TTFB | 48.3ms |
| FCP | 204ms |
| LCP | 204ms |
| CLS | 0 |

This is a single verification snapshot, not a field-performance guarantee.

## Evidence and rollback

- [Complete verification report](./verification-report.md)
- [Home loop GIF](./home-cinematic-loop.gif)
- [Interior route GIF](./interior-pages-tour.gif)
- [Mobile route GIF](./mobile-navigation-tour.gif)

There are no migrations or persisted application data. Roll back by promoting a
known-good Vercel deployment, then re-run the public route and browser matrix.
GitHub was not pushed as part of this deployment.

## Unresolved questions

- Confirm that `hello@aethera.studio` is monitored before treating inbound
  project mail as an operationally supported channel.
