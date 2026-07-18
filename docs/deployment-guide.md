# Deployment Guide

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

`vercel.json` rewrites all paths to `/index.html`. Import the repository, keep Vite auto-detection, and use `npm run build` with `dist` output.

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

The output is static. Redeploy the previous known-good Git commit/build artifact. No database or migration rollback is required.

## Current Status

The repository contains deployment fallbacks, but no production deployment has been performed or claimed.
