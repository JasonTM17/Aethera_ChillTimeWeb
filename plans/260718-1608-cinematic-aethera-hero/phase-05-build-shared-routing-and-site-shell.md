---
phase: 5
title: Build shared routing and site shell
status: completed
effort: 2h
---

# Phase 5: Build shared routing and site shell

## Overview

Introduce client-side routing and a shared layout without changing the approved Home hero composition.

## Implementation Steps

1. Add the current React Router package and define the five public routes.
2. Convert primary and mobile navigation to route-aware links with correct `aria-current` behavior.
3. Create shared page shell, footer, eyebrow, CTA, and route-scroll behavior.
4. Keep the Home video lifecycle isolated so it cleans up when users leave the route.

## Success Criteria

- [x] All five routes render through the shared application shell.
- [x] Desktop and mobile navigation highlight the active route and close correctly.
- [x] CTA links lead to Reach Us; Home retains exact requested hero layout and playback.
- [x] Unknown URLs render a useful not-found state with a path back Home.
