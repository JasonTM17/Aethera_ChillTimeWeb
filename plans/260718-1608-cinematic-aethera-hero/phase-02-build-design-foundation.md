---
phase: 2
title: Build design foundation
status: completed
priority: P2
effort: 1.5h
dependencies:
  - 1
---

# Phase 2: Build design foundation

## Overview

Establish the typography, color, spacing, motion, and content contract before any hero component work starts. End phase with reusable CSS tokens and one canonical content module.

Repo root: `D:\Aethera_ChillTimeWeb`

## Requirements

- Functional: add `src/styles/fonts.css` importing Instrument Serif and Inter; add `src/styles/theme.css` with the exact spec palette, responsive sizes, and motion tokens; add `src/lib/hero-content.ts` holding the approved logo label, nav labels, hero copy, CTA copy, and video URL from the user prompt.
- Non-functional: preserve the requested pure black, white, and `#6F6F6F`; define reduced-motion and focus-visible behavior globally; avoid repeated literals across components.

## Architecture

Data flow: `src/lib/hero-content.ts` exports the canonical copy, links, and video URL -> phase 3 components consume one source of truth. `fonts.css` loads typography -> `theme.css` maps CSS variables -> `src/index.css` imports both and applies page-wide resets.

Global UX rules live here, not inside components: `prefers-reduced-motion` disables non-essential animation, and `:focus-visible` provides the keyboard ring contract every interactive element must inherit.

Backward compatibility: still additive only. Keep tokens generic so later sections can reuse them without rewriting the hero.

## Related Code Files

- Modify: `src/index.css`
- Create: `src/styles/fonts.css`, `src/styles/theme.css`, `src/lib/hero-content.ts`

## Implementation Steps

1. Create `src/styles/fonts.css` with the required font imports and durable fallback stacks.
2. Create `src/styles/theme.css` with CSS variables for `#FFF`, `#000`, `#6F6F6F`, responsive type scales, spacing, the 800ms fade-rise animations with 0/200/400ms delays, and separate 500ms video fade timing.
3. Update `src/index.css` to import Tailwind, `fonts.css`, and `theme.css`, then apply base reset, white page background, black default text, selection styling, and `:focus-visible`.
4. Add `src/lib/hero-content.ts` with `Aethera`, the five specified nav labels, both `Begin Journey` labels, the exact headline/body copy, and the MP4 URL; do not scatter copy through JSX.
5. Run a static browser check to confirm the placeholder app picks up the tokens.
6. Commit `feat: add aethera visual system`.

## Success Criteria

- [x] `src/styles/fonts.css` and `src/styles/theme.css` are imported exactly once from `src/index.css`.
- [x] Requested palette and font families are expressed as reusable tokens, not repeated literals.
- [x] Reduced-motion and focus-visible behavior are globally defined before component work starts.
- [x] Copy and video URL live in one canonical module.

## Risk Assessment

- Medium (M x H): font CDN failure. Mitigation: keep sane fallback stacks and preserve one import surface for later local vendoring if needed.
- Medium (L x H): copy drift across components. Mitigation: one canonical content module.
- Low (L x M): exact copy drifts during JSX composition. Mitigation: keep every approved literal in the canonical content module and assert it in integration tests.

## Test and Validation

- `npm run build`
- Browser check for font fallback behavior, token application, and focus ring contrast

## Rollback

- Revert the phase commit.
- If uncommitted, remove the new files and restore `src/index.css`.
