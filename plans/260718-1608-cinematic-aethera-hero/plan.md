---
title: Complete Aethera cinematic studio site
description: >-
  Ship a five-route Aethera studio website led by a cinematic hero with
  controlled video replay, editorial content, responsive navigation, and test coverage.
status: pending
priority: P2
effort: 16h
branch: ''
tags:
  - feature
  - frontend
blockedBy: []
blocks: []
created: 2026-07-18T00:00:00.000Z
createdBy: 'ck:plan'
source: skill
---

# Complete Aethera cinematic studio site

## Overview

Bootstrap a local Vite React TypeScript app in this non-empty repo, preserve the requested fullscreen Aethera hero, then extend its visual language across Home, Studio, About, Journal, and Reach Us. The finished site includes route-aware navigation, editorial content, an accessible contact flow, responsive states, accessibility fallbacks, and test coverage.

## Execution Strategy

- Sequential delivery. The approved Home hero remains the visual baseline; the shared shell lands before route content.
- Create the minimal Vite-equivalent scaffold with reviewed file patches because the repo already contains control files and plans.
- Keep Tailwind and routing integration minimal; use content modules and shared primitives only where they remove real duplication.

## Phases

| Phase | Name | Status |
|-------|------|--------|
| 1 | [Bootstrap Vite and Tailwind](./phase-01-bootstrap-vite-and-tailwind.md) | Pending |
| 2 | [Build design foundation](./phase-02-build-design-foundation.md) | Pending |
| 3 | [Implement cinematic hero and video loop](./phase-03-implement-cinematic-hero-and-video-loop.md) | Pending |
| 4 | [Verify review and document](./phase-04-verify-review-and-document.md) | Pending |
| 5 | [Build shared routing and site shell](./phase-05-build-shared-routing-and-site-shell.md) | Pending |
| 6 | [Create Studio and About pages](./phase-06-create-studio-and-about-pages.md) | Pending |
| 7 | [Create Journal and Reach Us pages](./phase-07-create-journal-and-reach-us-pages.md) | Pending |
| 8 | [Verify complete responsive site](./phase-08-verify-complete-responsive-site.md) | Pending |
| 9 | [Review document and finalize](./phase-09-review-document-and-finalize.md) | Pending |

## Dependencies

- External: Node 20.19+ for current Vite, npm, reachable MP4 URL, and font CDN unless fonts are later vendored.
- Internal: P2 depends on P1; P3 depends on P2; P4 verifies the hero milestone; P5 establishes routes; P6-P7 depend on P5; P8-P9 validate and finalize the complete site.

## Acceptance Criteria

- [ ] Fullscreen Home hero ships with requested palette, fonts, responsive sizing, overlay, copy, and visual hierarchy.
- [ ] Video layer uses `top: 300px; right: 0; bottom: 0; left: 0`, no native loop, 0.5s fade in/out, and 100ms restart delay after `ended`.
- [ ] Reduced-motion, focus-visible, mobile nav, and video-failure fallback work without changing hierarchy.
- [ ] Home, Studio, About, Journal, and Reach Us have real routes, route-aware navigation, responsive layouts, and cohesive editorial content.
- [ ] Reach Us validates required fields, reports submission state accessibly, and never pretends to send data to an unconfigured backend.
- [ ] `npm run build`, lint, Vitest + RTL coverage pass; browser/manual checks cover every route and 375/768/1440 breakpoints.
- [ ] Local git exists with small conventional commits and no remote push.

## Commit Boundaries

- `docs(plan): define cinematic hero delivery`
- `feat: bootstrap vite hero app`
- `feat: add aethera visual system`
- `feat: implement cinematic hero playback`
- `test: verify cinematic hero behavior`
- `docs(plan): expand Aethera into full site`
- `feat: add Aethera site routing`
- `feat: build Studio and About pages`
- `feat: build Journal and Reach Us pages`
- `test: verify complete Aethera site`
- `docs: document Aethera site workflow`
