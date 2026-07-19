---
phase: 4
title: "Build repository showcase"
status: pending
effort: "4h"
---

# Phase 4: Build repository showcase

## Overview

Rewrite the repository landing experience as an accurate product showcase, supported by freshly captured desktop/mobile screenshots and optimized motion evidence.

## Requirements

- Run the code-focused automated gates and CK review first, commit and push the reviewed code release SHA, then deploy and verify that exact application state.
- Capture current Home, About, Journal, Studio, Reach Us, and mobile-navigation states only after the canonical alias serves the reviewed code release.
- Produce at least two optimized GIFs that demonstrate cinematic motion and interior navigation without becoming impractically large.
- Store curated repository media under `assets/showcase/` with descriptive kebab-case names.
- Rewrite README with a visual gallery, route/features table, motion contracts, architecture, setup, quality, deployment, and honest limitations.
- Update relevant evergreen docs only where behavior, evidence, commands, or architecture changed.

## Related Files

- Create: `assets/showcase/*.png`, `assets/showcase/*.gif`
- Modify: `README.md`
- Modify only on verified behavioral or evidence drift: `docs/codebase-summary.md`, `docs/design-guidelines.md`, `docs/project-overview-pdr.md`, `docs/project-roadmap.md`, `docs/system-architecture.md`, `docs/deployment.md`

## Implementation Steps

1. Pass focused/full code gates and required code review; create the small implementation/test commits.
2. Fetch and compare `origin/main`, push the reviewed code release SHA without force, then deploy and verify the canonical alias serves it.
3. Capture responsive production screenshots with stable viewport and scroll targets.
4. Record representative tours and convert them to optimized GIFs with deterministic dimensions/frame rate.
5. Inspect every media artifact visually and verify README-relative paths.
6. Replace the stale README with a concise, image-led, technically accurate showcase.
7. Synchronize evergreen docs only where code, evidence, commands, or deployment facts demonstrably changed.

## Success Criteria

- [ ] README renders multiple current images and at least two working GIFs on GitHub.
- [ ] Gallery includes Home, About, Journal, Studio, Reach Us, and mobile evidence.
- [ ] All commands, route claims, test counts, coverage figures, and deployment links are current.
- [ ] Captures correspond to the reviewed application code SHA; later commits contain docs, media, and plan material only.
- [ ] Media is useful, legible, reasonably sized, and committed without stale duplicates in the showcase folder.

## Risks

- GIFs can bloat clone size; crop, resize, lower frame rate, and inspect compression.
- Production capture can drift from code; deploy the exact reviewed commit before recording.
