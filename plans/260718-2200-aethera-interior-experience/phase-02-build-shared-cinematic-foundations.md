---
phase: 2
title: Build shared cinematic foundations
status: completed
effort: ''
priority: P1
dependencies:
  - 1
---

# Phase 2: Build shared cinematic foundations

## Overview

Build the content-first intro, Horizon Ledger, editorial section primitives, and
restrained contact rail without changing the Home cinematic contract.

## Requirements

- Functional: immediate essential copy, route folio/aside, responsive landscape
  band, factual field note, lightweight contact rail.
- Non-functional: explicit image dimensions, decorative empty alt, 320px reflow,
  reduced-motion safety, no scroll listener or animation library.

## Architecture

`EditorialPageIntro` owns only semantic introductory copy. `HorizonLedger` owns
the existing poster, crop, factual note, and one-time arrival motion.
`EditorialSectionHeading` and `ContactRail` remove repeated typography without
forcing semantically different route sections into a universal card abstraction.

## Related Code Files

- Modify: `src/components/editorial-page-intro.tsx`
- Create: `src/components/horizon-ledger.tsx`
- Create: `src/components/editorial-section-heading.tsx`
- Create: `src/components/contact-rail.tsx`
- Modify: `src/styles/theme.css`
- Delete after migration: `src/components/journey-cta.tsx`

## Implementation Steps

1. Reduce intro spacing and remove opacity-hidden essential content.
2. Add folio and route-purpose aside to the responsive intro grid.
3. Build Horizon Ledger with per-route crop and factual metadata.
4. Add a 320ms maximum supporting animation and reduced-motion collapse.
5. Add section-heading and hairline contact-rail primitives.
6. Verify semantics, dimensions, text measures, and no horizontal overflow.

## Success Criteria

- [x] Essential H1 and description are visible on first paint.
- [x] Shared signature clearly relates interior routes to Home.
- [x] No original Home fade/video token changes.
- [x] Shared components remain small, typed, and route-agnostic.

## Risk Assessment

Risk: a shared component makes routes feel identical. Mitigation: share only the
signature and typography contracts; keep route layouts page-specific.
