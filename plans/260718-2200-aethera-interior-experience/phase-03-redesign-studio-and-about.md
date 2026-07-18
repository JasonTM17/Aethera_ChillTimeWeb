---
phase: 3
title: "Redesign Studio and About"
status: pending
effort: ""
priority: P1
dependencies: [2]
---

# Phase 3: Redesign Studio and About

## Overview

Turn Studio into an honest concept-study portfolio and About into a credible
positioning, manifesto, principles, process, and fit narrative.

## Requirements

- Studio: concept labels, hypotheses, artifacts, concrete methods, capability
  ledger, working models, and contact rail.
- About: what Aethera is/is not, manifesto, staggered principles, process with
  outputs, fit signals, and contact rail.
- Avoid equal-card SaaS grids and unverified claims.

## Architecture

Thin page components compose route-specific sections. Content modules own copy
and typed presentation variants so reordering cannot silently mismatch artwork.
Studio project art remains abstract and monochrome. About uses editorial rules
and staggered reading order instead of repeated cards.

## Related Code Files

- Modify: `src/pages/studio-page.tsx`
- Modify: `src/pages/about-page.tsx`
- Modify: `src/lib/studio-content.ts`
- Modify: `src/lib/about-content.ts`
- Create: `src/components/studio-project-list.tsx`
- Create: `src/components/studio-capability-ledger.tsx`
- Create: `src/components/about-positioning.tsx`
- Create: `src/components/about-manifesto.tsx`
- Create: `src/components/about-principles.tsx`
- Create: `src/components/about-process.tsx`

## Implementation Steps

1. Move all route copy and artwork variants into typed content modules.
2. Compose three explicit Studio concept-study chapters.
3. Build an asymmetric capabilities/deliverables ledger and working models.
4. Build About positioning, manifesto, staggered principles, and process output.
5. Add honest fit criteria and restrained contact rails.
6. Validate heading hierarchy, reading measure, mobile stacking, and terminology.

## Success Criteria

- [ ] Studio never implies conceptual projects are commissioned client work.
- [ ] About feels specific without invented people, dates, or results.
- [ ] Each route has a distinct visual and semantic rhythm.
- [ ] Page files remain composition-focused and below 200 lines.

## Risk Assessment

Risk: rich copy becomes philosophical filler. Mitigation: every section answers
a user question about offer, approach, deliverables, process, or fit.
