---
phase: 5
title: "Verify capture and deploy"
status: pending
effort: ""
priority: P1
dependencies: [3, 4]
---

# Phase 5: Verify capture and deploy

## Overview

Prove the redesigned site across code, accessibility, responsive browsers,
motion captures, production deployment, and public URLs.

## Requirements

- Automated: lint, unit/integration tests, coverage, type/build, audit.
- Browser: 320/375, 768, and 1440 widths; overflow, focus, navigation, details,
  form, reduced motion, console/network, and first fold.
- Media: optimized GIF evidence for Home motion, interior route tour, and mobile.
- Deployment: production Vercel deploy and live route verification.

## Architecture

Use Vitest for behavior, agent-browser for real Chromium validation/recording,
and FFmpeg palette generation for compact GIFs. Keep temporary WebM sources out
of Git; store optimized evidence and reports in the plan report directory.

## Related Code Files

- Create/modify: `src/test/*`
- Modify: `docs/design-guidelines.md`
- Modify: `docs/deployment.md`
- Create: `plans/260718-2200-aethera-interior-experience/reports/*`

## Implementation Steps

1. Add focused tests for new route semantics and preserve regression suites.
2. Run lint, tests, coverage, build, and dependency audit; fix failures.
3. QA local routes at 320/375, 768, and 1440 plus reduced motion.
4. Record WebM walkthroughs and convert to optimized GIFs with FFmpeg.
5. Review screenshots/GIF frames and perform a focused code review.
6. Commit each coherent cluster with conventional messages.
7. Deploy to linked Vercel production and verify all public routes and assets.
8. Update deployment/report evidence with the final immutable deployment ID.

## Success Criteria

- [ ] Automated quality gates pass without suppressions.
- [ ] No route has horizontal overflow, first-fold dead space, or console errors.
- [ ] Reduced motion receives immediate static content and no decorative motion.
- [ ] GIFs are visually inspected and sized for practical review.
- [ ] Production deployment is Ready and every route returns expected content.

## Risk Assessment

Risks: remote video variability, GIF size, or deployment drift. Mitigate with the
local poster/reduced-motion fallback, constrained GIF dimensions/FPS/colors, and
post-deploy browser verification against the public domain.
