---
phase: 4
title: Verify review and document
status: completed
priority: P2
effort: 2h
dependencies:
  - 3
---

# Phase 4: Verify review and document

## Overview

Add focused automated coverage around the replay hook and hero rendering, run the final build checks, and leave behind the minimum local documentation needed to operate the app. End phase with validated behavior, one README, and separate test/documentation commits.

Repo root: `D:\Aethera_ChillTimeWeb`

## Requirements

- Functional: add Vitest plus React Testing Library coverage for replay timing, cleanup, restart, and fallback behavior; run build and test commands; document install, run, test, and motion-fallback behavior in a root `README.md`.
- Non-functional: keep the test stack light; prefer jsdom plus manual responsive checks over a heavy browser harness unless extra browser-mode wiring is clearly worth it.

## Architecture

Data flow: Vitest mounts the hero and hook in jsdom -> test doubles control `HTMLMediaElement`, `requestAnimationFrame`, and timers -> assertions prove fade and replay state transitions without hitting the network.

Documentation scope stays small: `README.md` covers commands, file map, video behavior, and local git expectations. This also closes the current gap where `README.md` is expected before future implementation work (`CLAUDE.md:20`).

Backward compatibility: still additive only. Keep test-only helpers out of production files unless a tiny seam is required for deterministic assertions.

## Related Code Files

- Modify: `package.json`
- Create: `vitest.config.ts`, `vitest.setup.ts`, `src/test/use-cinematic-video-loop.test.ts`, `src/test/aethera-hero.test.tsx`, `README.md`

## Implementation Steps

1. Install `vitest`, `jsdom`, `@testing-library/react`, `@testing-library/dom`, `@testing-library/jest-dom`, and `@testing-library/user-event` as dev dependencies.
2. Add `test` and `test:run` scripts to `package.json`; create `vitest.config.ts` and `vitest.setup.ts`.
3. Write tests for the replay hook covering fade timing, `ended` restart timing, cleanup of RAF and timers, reduced-motion bypass, and video-error fallback.
4. Write an integration test for hero render, CTA presence, and mobile menu keyboard interaction.
5. Run `npm run test:run` and `npm run build`.
6. Perform manual browser checks at 375px, 768px, and 1440px. If the setup stays cheap, optionally add a one-off browser-mode run, but do not block ship on that extra layer.
7. Commit automated coverage as `test: cover cinematic hero behavior`.
8. Create `README.md` with setup, commands, file map, and behavior notes; commit `docs: explain local hero workflow`.

## Success Criteria

- [x] Automated tests prove replay timing, cleanup, restart, and fallback behavior.
- [x] `npm run test:run` and `npm run build` pass cleanly.
- [x] Manual responsive checks complete at 375px, 768px, and 1440px.
- [x] `README.md` exists with validated install, run, and test commands plus motion and fallback notes.

## Test Matrix

- Unit: `use-cinematic-video-loop` guards duplicate replay, cleans up RAF and timers, and handles reduced-motion and media-error paths.
- Integration: hero renders the canonical copy, CTA controls are reachable, and the mobile menu opens and closes through keyboard input.
- Browser or manual: Chrome responsive checks at 375px, 768px, and 1440px; reduced-motion emulation; blocked or failed media playback fallback.

## Risk Assessment

- High (M x H): jsdom lacks full media primitives. Mitigation: stub `HTMLMediaElement.play`, `pause`, `duration`, `currentTime`, and RAF in test setup.
- Medium (L x H): browser-mode setup cost outweighs value. Mitigation: make the manual responsive checklist mandatory and browser mode optional.
- Low (L x M): stale docs. Mitigation: write `README.md` only after commands are re-run and confirmed.

## Rollback

- Revert the phase commit.
- If uncommitted, remove test files, `vitest.config.ts`, `vitest.setup.ts`, and `README.md`, then restore `package.json`.
