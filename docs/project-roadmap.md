# Project Roadmap

## Current Release Status

The interior redesign is implemented, verified locally, and deployed to production. Vercel deployment `dpl_6vJKp1qNNGr91MRDz4ExnrUPme6A` became Ready on 2026-07-18 at 23:03:45 +07:00 and serves the canonical [production alias](https://aethera-chill-time-web.vercel.app).

## Complete

- Cinematic Home hero with deterministic manual looping.
- Five public routes plus branded not-found recovery.
- Shared site shell, route titles, focus restoration, top scroll behavior, and responsive navigation.
- Content-first interior intros with folio and route-purpose context visible on first paint.
- Shared Horizon Ledger using the local landscape poster and factual route metadata.
- Distinct Studio concept-study, capability, and working-model structure.
- Distinct About positioning, manifesto, principles, process, and fit structure.
- Distinct Journal featured reflection, chronological index, native expansion, and direct hash-opening behavior.
- Distinct Reach Us guidance, validated mailto-only draft flow, direct email fallback, next steps, and native FAQs.
- Desktop active underline and mobile active-dot navigation markers with `aria-current="page"`.
- 320ms supporting-image arrival motion and live reduced-motion switching for the Home video source.
- Vercel and Netlify SPA fallback configuration.
- Production deployment, route checks, responsive Chromium QA, motion captures, and public-origin verification.

## Verification

### Automated and Build

- 34/34 tests pass across five Vitest files.
- Statement coverage is 97.34%; configured coverage thresholds pass.
- TypeScript and the Vite production build pass.
- `npm audit` reports 0 vulnerabilities.

### Production

- HTTP 200 verified for `/`, `/studio`, `/about`, `/journal`, `/reach-us`, an unknown SPA path, and `/aethera-landscape-poster.webp`.
- No horizontal overflow at 1440px, 768px, or 375px.
- Home uses the configured CloudFront MP4, keeps native looping disabled, and preserves the manual fade/reset behavior.
- Initial and live reduced-motion checks remove the MP4 source and pause playback.
- Journal direct hashes open and scroll to the targeted reflection.
- Reach Us invalid submission exposes four alerts and focuses `#name`.
- Mobile navigation shows its active marker and restores trigger focus after Escape.
- Production console and page errors are empty.
- One production Chromium snapshot recorded TTFB 48.3ms, FCP 204ms, LCP 204ms, and CLS 0.

## Release Evidence

- [Home cinematic loop](../plans/260718-2200-aethera-interior-experience/reports/home-cinematic-loop.gif)
- [Interior pages tour](../plans/260718-2200-aethera-interior-experience/reports/interior-pages-tour.gif)
- [Mobile navigation tour](../plans/260718-2200-aethera-interior-experience/reports/mobile-navigation-tour.gif)
- [Production deployment record](./deployment.md)

## Before Public Promotion

- Confirm `hello@aethera.studio` is controlled and monitored.
- Validate the remote MP4 CDN bandwidth and cost policy.
- Decide whether Google Fonts should be self-hosted.
- Add a custom domain only after ownership and DNS decisions are complete; none is configured now.

## Optional Next Iterations

- Add real, approved case-study content and media.
- Introduce individual Journal routes or a CMS only when the publishing workflow requires them.
- Add consent-aware analytics only after metrics and privacy requirements are defined.
- Add a backend contact service only after delivery, spam prevention, retention, and privacy rules are agreed.
- Add sustained performance budgets and deployed monitoring; the current vitals are a single snapshot.

## Guardrails

- Do not present conceptual Studio work as client work.
- Do not turn Home into a long marketing page without a new design decision.
- Do not claim the Reach Us form sends or stores data; it only prepares a `mailto:` draft.
- Do not add persistence or third-party tracking silently.
- Preserve the Home video fade/restart contract, live reduced-motion handling, and the content-first interior intro contract.

## Related Documentation

- [Design guidelines](./design-guidelines.md)
- [Codebase summary](./codebase-summary.md)
- [System architecture](./system-architecture.md)
- [Production deployment](./deployment.md)
