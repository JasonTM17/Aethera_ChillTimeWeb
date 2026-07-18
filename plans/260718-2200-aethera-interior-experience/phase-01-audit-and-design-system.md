---
phase: 1
title: Audit and design system
status: completed
effort: ''
priority: P1
dependencies: []
---

# Phase 1: Audit and design system

## Overview

Prove the blank-fold cause, lock the visual direction, and document an honest
route architecture before implementation.

## Requirements

- Functional: audit all four interior routes, shared shell, content modules,
  tests, screenshot, and live production behavior.
- Non-functional: retain fixed palette and fonts; comply with current web
  interface, accessibility, responsive, and reduced-motion guidance.

## Architecture

The existing Home remains an independent route. Interior pages continue through
`SiteLayout`, but their shared intro becomes content-first. One Horizon Ledger
component carries the Home landscape into each route with different crops and
route-specific factual notes.

## Related Code Files

- Read: `src/components/editorial-page-intro.tsx`
- Read: `src/components/site-layout.tsx`
- Read: `src/pages/*-page.tsx`
- Read: `src/lib/*-content.ts`
- Read: `src/styles/theme.css`
- Modify: `docs/design-guidelines.md`
- Create: `plans/260718-2200-aethera-interior-experience/reports/`

## Implementation Steps

1. Inspect the user screenshot and reproduce the first-fold timing/spacing.
2. Map route composition, shared behavior, tests, and files near 200 lines.
3. Run UI/UX audit against the fixed Aethera identity.
4. Select Horizon Ledger over unrelated trend-based visual systems.
5. Record route architecture, anti-fabrication rules, responsive breakpoints,
   motion limits, and acceptance gates.

## Success Criteria

- [ ] Exact blank-fold cause documented with source references.
- [ ] Page-by-page information architecture approved by the existing request.
- [ ] Shared visual signature uses only verified local assets and brand tokens.
- [ ] Risks to Home, navigation, hash links, form behavior, and tests identified.

## Risk Assessment

Main risk: solving “empty” with decorative filler. Mitigation: prioritize useful
content, route-specific semantics, and honest evidence over extra effects.
