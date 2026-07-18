# Deployment Report — 2026-07-18

## Outcome

- Platform: Vercel.
- Project: `aethera-chill-time-web`.
- Target: production.
- Status: `Ready`.
- Public alias: [https://aethera-chill-time-web.vercel.app](https://aethera-chill-time-web.vercel.app).
- Deployment ID: `dpl_8QrwvFTFMnCsgGRNA9YneYdhRtUG`.
- Deployed configuration commit: `c553c11 fix(deploy): configure Vercel output`.

## Preflight

- Clean dependency install: PASS.
- ESLint: PASS.
- Vitest: 25/25 PASS.
- Coverage: 96.86% statements, 88.96% branches, 100% functions, 96.75% lines.
- TypeScript and Vite production build: PASS.
- npm audit at high severity: 0 vulnerabilities.
- Environment files detected: none.

## Deployment History

The initial upload compiled successfully but Vercel looked for a `build` directory. `vercel.json` was corrected to declare `npm run build` and `dist`, committed independently, and redeployed. The second deployment built and promoted successfully.

## Public-Origin Verification

- HTTP 200 and SPA root: `/`, `/studio`, `/about`, `/journal`, `/reach-us`, `/missing`.
- Static poster: HTTP 200, `image/webp`, 171,432 bytes.
- JavaScript bundle: HTTP 200 with JavaScript MIME type.
- Titles and H1 content: correct across all routes.
- Horizontal overflow: none at 1440×900 and 375×812.
- Video: Home only, exact CloudFront source, top 300px, no native loop, metadata preload.
- Reduced-motion: no `src`, empty `currentSrc`, paused, poster visible, zero MP4 requests.
- Mobile menu: focuses Home on open; Escape closes and restores trigger focus.
- Empty contact submission: four validation messages and focus moves to `#name`.
- Browser console and page errors: none.

## Observed Performance

One production browser run reported TTFB 48.1ms, FCP 196ms, and CLS 0. The video was the LCP element. These figures are diagnostic observations from one location and are not service-level guarantees.

## Evidence

- [Production Home screenshot at 1440px](./production-home-1440.png).
- Vercel inspector reported the deployment target as production and status as `Ready`.

## Launch Note

Confirm that `hello@aethera.studio` is controlled and monitored before directing real visitors to the contact flow.
