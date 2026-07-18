# Deployment Guide

## Production

- Platform: Vercel.
- Project: `aethera-chill-time-web`.
- Public URL: [https://aethera-chill-time-web.vercel.app](https://aethera-chill-time-web.vercel.app).
- Runtime environment variables: none.
- Operational record: [`deployment.md`](./deployment.md).

## Prerequisites

- Node.js 22.22 or newer.
- npm with the checked-in `package-lock.json`.
- Network access to Google Fonts and the supplied CloudFront MP4 for the full Home experience.

## Build and Verify

```bash
npm ci
npm run lint
npm run test:coverage -- --pool=threads --maxWorkers=1 --no-file-parallelism
npm run build
npm run preview
```

Deploy the generated `dist/` directory. Do not deploy `src/` directly.

## SPA History Fallback

Every unknown request must return `index.html`, allowing BrowserRouter to resolve the path.

### Vercel

`vercel.json` runs `npm run build`, publishes `dist`, and rewrites all paths to `/index.html`.

```bash
vercel --prod
```

### Netlify

`public/_redirects` contains:

```text
/* /index.html 200
```

Vite copies it to `dist/_redirects` during build.

### Other Static Hosts

Configure the equivalent fallback in the host or reverse proxy. Confirm direct HTTP 200 responses for:

```text
/studio
/about
/journal
/reach-us
```

## Launch Checklist

- Confirm `hello@aethera.studio` is controlled and monitored, or update `src/lib/site-content.ts`.
- Confirm the remote MP4 permits production access and expected bandwidth.
- Confirm Google Fonts are acceptable for the privacy/performance policy; vendor them if required.
- Test the reduced-motion poster and normal MP4 request behavior.
- Run the full quality commands from a clean checkout.
- Verify direct-route refresh, 404 UI, mobile menu, and email draft on the deployed origin.

## Rollback

The output is static and has no database migrations. Promote a previous known-good deployment from the Vercel dashboard or run:

```bash
vercel rollback <previous-deployment-url>
```

## Current Status

Production deployed and verified on 2026-07-18. All five routes and the branded not-found path return the SPA shell with HTTP 200; browser checks cover desktop, mobile navigation, reduced-motion media suppression, and contact validation.
