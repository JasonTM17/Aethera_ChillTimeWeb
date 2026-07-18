---
phase: 8
title: "Verify complete responsive site"
status: pending
effort: "2h"
---

# Phase 8: Verify complete responsive site

## Overview

Expand automated coverage from the hero to routing, navigation, page content, and contact validation.

## Implementation Steps

1. Add integration tests for every route, active navigation, 404 recovery, and CTA destinations.
2. Add user-event tests for mobile navigation and contact validation/submission state.
3. Run lint, typecheck/build, coverage, and dependency audit.
4. Inspect every route in a real browser; check 375px, 768px, and 1440px layouts for overflow and console errors.

## Success Criteria

- [ ] Route and form behavior have meaningful assertions.
- [ ] Lint, tests, coverage, build, and audit pass without suppression.
- [ ] Browser QA records no horizontal overflow or application console errors.
- [ ] Final screenshots and test evidence are stored under the plan reports directory.
