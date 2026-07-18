---
title: Elevate Aethera interior experience
description: >-
  Turn Aethera's four interior routes into distinct, content-rich editorial
  chapters while preserving the cinematic Home contract.
status: in-progress
priority: P2
branch: main
tags:
  - feature
  - frontend
  - design
  - motion
blockedBy: []
blocks: []
created: '2026-07-18T15:02:53.549Z'
createdBy: 'ck:plan'
source: skill
---

# Elevate Aethera interior experience

## Overview

Redesign Studio, About, Journal, and Reach Us around the established Aethera
identity: pure white, black, muted gray, Instrument Serif, Inter, and calm
purposeful motion. Remove the accidental blank first fold caused by oversized
intro spacing and delayed opacity. Give every route a distinct information
architecture, honest content, responsive detail, and a shared Horizon Ledger
made from the existing Home landscape poster.

## Execution Strategy

- Expansion scope requested: make the routes feel like a real studio website,
  not a minimal patch to spacing.
- Preserve the Home hero, video loop, shared navigation behavior, route focus,
  hash navigation, and contact-form contract.
- Keep essential intro copy visible on first paint. Animate only the supporting
  Horizon Ledger with transform/opacity and a reduced-motion fallback.
- Treat all portfolio examples as concept studies. Do not invent clients,
  outcomes, founders, response times, or metrics.
- Keep modules below 200 lines by composing route-specific sections from small
  components and content modules.

## Acceptance Criteria

- Route-specific content or the Horizon Ledger is visible within a 1440x900
  first fold; no header-only empty state at 375, 768, or 1440 widths.
- Studio, About, Journal, and Reach Us each have a distinct page rhythm and
  enough verified content to support a full user journey.
- Home cinematic behavior and the existing 25-test baseline remain intact.
- Keyboard, focus, hash links, native details, form validation, reduced motion,
  and 320px reflow continue to work.
- Lint, tests, coverage, production build, responsive browser QA, GIF capture,
  Vercel deployment, and public-route verification pass.

## Phases

| Phase | Name | Status |
|-------|------|--------|
| 1 | [Audit and design system](./phase-01-audit-and-design-system.md) | Completed |
| 2 | [Build shared cinematic foundations](./phase-02-build-shared-cinematic-foundations.md) | In Progress |
| 3 | [Redesign Studio and About](./phase-03-redesign-studio-and-about.md) | Pending |
| 4 | [Redesign Journal and Reach Us](./phase-04-redesign-journal-and-reach-us.md) | Pending |
| 5 | [Verify capture and deploy](./phase-05-verify-capture-and-deploy.md) | Pending |

## Dependencies

- Completed foundation: `../260718-1608-cinematic-aethera-hero/plan.md`.
- Existing local asset: `public/aethera-landscape-poster.webp`.
- Existing React, Vite, Tailwind CSS, TypeScript, Vitest, and agent-browser
  toolchain. No runtime dependency additions.

## Out of Scope

- Fabricated client case studies, team biographies, testimonials, or metrics.
- CMS, newsletter backend, database, authentication, or external form storage.
- Changes to the Home headline, video URL, fade timings, or video positioning.

## Unresolved Questions

None.
