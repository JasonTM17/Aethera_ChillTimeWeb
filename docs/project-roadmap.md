# Project Roadmap

## Current Release Status

The About and Journal enrichment is implemented, the repository showcase media is complete, and the canonical Vercel origin serves the enriched content:

[https://aethera-chill-time-web.vercel.app](https://aethera-chill-time-web.vercel.app)

## Complete

### Product Experience

- Cinematic Home hero with deterministic manual looping and live reduced-motion source removal.
- Five public routes plus branded not-found recovery.
- Shared site shell, route titles, route focus, top scroll behavior, and responsive navigation.
- Content-first interior intros and a factual Horizon Ledger on each interior route.
- Studio concept studies, capability ledger, and working models.
- Reach Us guidance, validated mailto-only draft flow, direct email fallback, next steps, and native FAQs.

### About Dossier

- Paired “Aethera is / is not” positioning.
- Three-chapter origin without fabricated founders or dates.
- Manifesto retained as the central point of view.
- Four working agreements with explicit collaboration practices.
- Four principles with practical applications.
- Four process stages, named outputs, and three fit signals.

### Journal Archive

- Seven complete reflections with stable article slugs.
- Human-readable filing dates paired with semantic ISO `dateTime` values.
- Three thematic reading paths using shareable `/journal#<slug>` links.
- Direct-load and same-page hash behavior that opens the target native `details` element.
- Four clearly undated field notes in a separate non-interactive layer.
- Safe handling for malformed percent-encoded hashes.

### Repository and Deployment

- Nine PNG captures under `assets/showcase/` spanning Home, Studio, About, Journal, Reach Us, and mobile navigation.
- Two optimized GIFs demonstrating the cinematic Home and interior editorial flow.
- Vercel and Netlify SPA fallback configuration.
- Canonical production origin and direct-route HTTP verification.

## Verification

Verified on 2026-07-19:

| Check | Result |
|---|---|
| Tests | 35/35 passed across six Vitest files |
| Statements | 97.11% |
| Branches | 88.43% |
| Functions | 100% |
| Lines | 97.36% |
| Lint | Passed |
| Production build | Passed |
| Dependency audit | 0 vulnerabilities |

Production returned HTTP 200 for `/`, `/studio`, `/about`, `/journal`, `/reach-us`, an unknown SPA path, and `/aethera-landscape-poster.webp`. The deployed JavaScript includes the new About origin and seven-reflection Journal content.

## Release Evidence

- [Home desktop](../assets/showcase/home-desktop.png)
- [About dossier](../assets/showcase/about-dossier.png)
- [Journal desktop](../assets/showcase/journal-desktop.png)
- [Journal mobile](../assets/showcase/journal-mobile.png)
- [Studio desktop](../assets/showcase/studio-desktop.png)
- [Reach Us desktop](../assets/showcase/reach-us-desktop.png)
- [Mobile navigation](../assets/showcase/mobile-navigation.png)
- [Home cinematic loop](../assets/showcase/home-cinematic-loop.gif)
- [Interior editorial tour](../assets/showcase/interior-editorial-tour.gif)

## Operational Follow-ups

- Confirm `hello@aethera.studio` is controlled and monitored before advertising email intake.
- Validate the remote MP4 CDN bandwidth and cost policy.
- Decide whether Google Fonts should remain remote or be self-hosted.
- Add a custom domain only after ownership and DNS decisions are complete.
- Establish sustained performance monitoring only after a budget and measurement owner are defined.

## Optional Product Iterations

- Add real, approved case-study content and media.
- Introduce individual Journal routes or a CMS only when the publishing workflow requires them.
- Add consent-aware analytics only after metrics and privacy requirements are defined.
- Add a backend contact service only after delivery, spam prevention, retention, and privacy rules are agreed.

## Guardrails

- Do not present conceptual Studio work as commissioned client work.
- Do not invent About history, founders, collaborators, or outcomes.
- Do not claim field notes have publication dates.
- Do not break Journal slugs, native disclosures, semantic dates, or centralized hash handling.
- Do not claim Reach Us sends or stores data; it only prepares a `mailto:` draft.
- Do not add persistence or third-party tracking silently.
- Preserve the Home fade/restart contract and reduced-motion source suppression.
- Keep `assets/showcase/` repository-focused unless the application intentionally adopts the media.

## Related Documentation

- [Project overview and PDR](./project-overview-pdr.md)
- [Design guidelines](./design-guidelines.md)
- [Codebase summary](./codebase-summary.md)
- [System architecture](./system-architecture.md)
- [Production deployment](./deployment.md)
