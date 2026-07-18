# Test Report — 2026-07-18 — Aethera Cinematic Hero

## Test Results Overview

- Total: 8 tests
- Passed: 8 | Failed: 0 | Skipped: 0
- Vitest duration: 13.81s

## Coverage Metrics

| Metric | Value | Threshold | Status |
|---|---:|---:|---|
| Statements | 90.10% | 80% | PASS |
| Branches | 80.39% | 70% | PASS |
| Functions | 87.50% | 80% | PASS |
| Lines | 90.90% | 80% | PASS |

## Validated Behavior

- 0.5s video fade-in and fade-out calculations.
- `ended` sets opacity 0, waits 100ms, resets time, then replays.
- Animation frame, timeout, listener, and playback cleanup on unmount.
- Reduced-motion pauses at 0s with stable opacity 1.
- Playback rejection preserves white fallback and usable content.
- No native `loop` attribute; video geometry starts at 300px.
- Exact hero copy, two CTAs, mobile menu, Escape close, focus return.

## Browser QA

| Viewport | Overflow | Video top | Heading | Navigation | Status |
|---|---:|---:|---:|---|---|
| 375×812 | none | 300px | 48px | compact menu | PASS |
| 768×1024 | none | 300px | 96px | compact menu | PASS |
| 1440×900 | none | 300px | 96px | full menu | PASS |

- CTA text: `rgb(255, 255, 255)`.
- Secondary navigation: `rgb(111, 111, 111)`; Home: `rgb(0, 0, 0)`.
- Browser console: Vite/React development messages only; page errors: none.
- Screenshots: [375px](./hero-375.png), [768px](./hero-768.png), [1440px](./hero-1440.png).

## Build Status

- `npm run lint`: PASS.
- `npm run test:coverage`: PASS.
- `npm run build`: PASS.
- `npm audit`: 0 vulnerabilities.

## Unresolved Questions

None.
