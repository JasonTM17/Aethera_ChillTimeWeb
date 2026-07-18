---
date: 2026-07-18
session: aethera-five-route-frontend
---

# Aethera Grew from One Hero into a Complete Site

**Date**: 2026-07-18 16:08
**Severity**: Medium
**Component**: React frontend, cinematic media, routing, contact
**Status**: Resolved locally; launch pending

## What Happened

The assignment grew from a cinematic Home hero into five production routes: `/`, `/studio`, `/about`, `/journal`, and `/reach-us`, plus branded not-found recovery. We kept the expansion reviewable through small local commits for route construction, accessibility, deterministic playback, contact hardening, tests, deployment fallbacks, review decisions, and documentation. Nothing was pushed.

## The Brutal Truth

Scope growth was manageable because it was acknowledged and split up; pretending this was still “just a hero” would have buried routing, accessibility, and deployment risk. The frustrating discovery was subtler: the video looked polished while its timing contract was technically wrong. The review caught it before launch, which was relief earned by measurement, not confidence.

## Technical Details

The manual loop deliberately has no native `loop`: `requestAnimationFrame` maps the first 0.5 seconds from opacity 0→1 and the final 0.5 seconds from 1→0. On `ended`, opacity becomes 0, a 100ms timeout runs, `currentTime` resets to 0, then playback restarts. Review found a 500ms CSS opacity transition was retargeting every RAF update, making the visible fade lag beyond 0.5 seconds. Removing that transition made RAF the sole interpolator; measured opacity reached 0.5 at 0.25 seconds and 1 at 0.5 seconds.

Reduced-motion previously risked preloading the approximately 29 MiB MP4 before JavaScript paused it. It now renders a 171KB WebP poster with no video `src`; normal motion uses `preload="metadata"`. Vercel and Netlify SPA fallbacks return `index.html` for direct deep links. Reach Us validates bounded input and produces a URL-encoded `mailto:` draft; it honestly says the site sends and stores nothing.

Tests grew to 25 passing cases across four files. Coverage reached 96.86% statements, 88.96% branches, 100% functions, and 96.75% lines.

## Decisions and Rejected Alternatives

- Kept manual replay instead of native `loop` to preserve the exact fade/100ms blank interval.
- Removed CSS opacity interpolation instead of compensating with more timing logic.
- Suppressed the MP4 source for reduced motion instead of loading then pausing it.
- Used `mailto:` instead of inventing an unrequested backend or pretending submission succeeded.
- Added host rewrites instead of accepting routes that work only through in-app navigation.

## Lessons Learned

Visual plausibility is not timing correctness. Measure computed styles and network requests. Treat reduced motion as a transfer-budget requirement, and test BrowserRouter URLs through the production host, not only the dev server.

## Next Steps

- Site owner: confirm `hello@aethera.studio` is monitored before launch.
- Release owner: deploy, then smoke-test all five direct URLs, 404 recovery, reduced-motion network behavior, mobile focus, and the real email-draft handoff.
- Repository owner: push only after those launch checks pass; no push occurred in this session.

## Unresolved Questions

- Is `hello@aethera.studio` the final monitored public mailbox?
