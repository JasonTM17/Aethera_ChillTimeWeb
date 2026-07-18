# Production Deployment

## Platform

- Provider: Vercel.
- Project: `aethera-chill-time-web`.
- Scope: `nguyensonbmt06-6377s-projects`.
- Production URL: [https://aethera-chill-time-web.vercel.app](https://aethera-chill-time-web.vercel.app).
- First verified production deployment: 2026-07-18.

## Configuration

`vercel.json` defines the production contract:

- Build command: `npm run build`.
- Output directory: `dist`.
- Framework preset: explicit neutral configuration.
- SPA fallback: every route rewrites to `/index.html`.

No runtime or build-time environment variables are required. The Home experience depends on the configured Google Fonts import and CloudFront video URL being publicly reachable.

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

## Verification

After deployment, verify direct HTTP 200 responses for `/`, `/studio`, `/about`, `/journal`, `/reach-us`, and an unknown path. Browser QA must also confirm:

- only Home creates the video element;
- reduced-motion assigns no MP4 source;
- mobile navigation traps and restores focus;
- the contact form validates without sending or storing data;
- console and page errors remain empty.

The first production verification report is stored at [`../plans/260718-1608-cinematic-aethera-hero/reports/deployment-report.md`](../plans/260718-1608-cinematic-aethera-hero/reports/deployment-report.md).

## Custom Domain

No custom domain is configured. Add one in Vercel Project Settings, preserve the generated `vercel.app` alias as a fallback, and repeat route/browser verification after DNS becomes active.

## Rollback

There are no database migrations. In the Vercel dashboard, select a known-good deployment and promote it, or run:

```bash
vercel rollback <previous-deployment-url>
```

Confirm the public alias and all direct routes again after rollback.
