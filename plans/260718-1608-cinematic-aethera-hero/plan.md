---
title: "Cinematic Aethera hero page"
description: "Bootstrap a local Vite React app and ship a single-screen cinematic Aethera hero with controlled video replay and test coverage."
status: pending
priority: P2
effort: 8h
branch: ""
tags: [feature, frontend]
blockedBy: []
blocks: []
created: 2026-07-18
createdBy: "ck:plan"
source: skill
---

# Cinematic Aethera hero page

## Overview

Bootstrap a local Vite React TypeScript app in this non-empty repo, then ship one fullscreen Aethera hero with Tailwind, custom theme CSS, controlled video replay, accessibility fallbacks, and test coverage.
Frontmatter `branch` stays blank until phase 1 initializes local git.

## Execution Strategy

- Sequential only. `package.json`, `vite.config.ts`, and `src/` bootstrap are hard blockers; no safe parallel split.
- Create the minimal Vite-equivalent scaffold with reviewed file patches because the repo already contains control files and plans.
- Keep Tailwind integration minimal and current-official; do not add extra build layers unless the installed version requires them.

## Phases

| Phase | Name | Status |
|-------|------|--------|
| 1 | [Bootstrap Vite and Tailwind](./phase-01-bootstrap-vite-and-tailwind.md) | Pending |
| 2 | [Build design foundation](./phase-02-build-design-foundation.md) | Pending |
| 3 | [Implement cinematic hero and video loop](./phase-03-implement-cinematic-hero-and-video-loop.md) | Pending |
| 4 | [Verify review and document](./phase-04-verify-review-and-document.md) | Pending |

## Dependencies

- External: Node 20.19+ for current Vite, npm, reachable MP4 URL, and font CDN unless fonts are later vendored.
- Internal: P2 depends on P1 app shell; P3 depends on P2 tokens/content contract; P4 depends on P3 DOM hooks and video state contract.

## Acceptance Criteria

- [ ] Fullscreen single-page hero ships with requested palette, fonts, responsive sizing, overlay, and visual hierarchy.
- [ ] Video layer uses `top: 300px; right: 0; bottom: 0; left: 0`, no native loop, 0.5s fade in/out, and 100ms restart delay after `ended`.
- [ ] Reduced-motion, focus-visible, mobile nav, and video-failure fallback work without changing hierarchy.
- [ ] `npm run build` and Vitest + RTL coverage pass; browser/manual checks complete at 375/768/1440.
- [ ] Local git exists with small conventional commits and no remote push.

## Commit Boundaries

- `docs(plan): define cinematic hero delivery`
- `feat: bootstrap vite hero app`
- `feat: add aethera visual system`
- `feat: implement cinematic hero playback`
- `test: cover cinematic hero behavior`
- `docs: explain local hero workflow`
