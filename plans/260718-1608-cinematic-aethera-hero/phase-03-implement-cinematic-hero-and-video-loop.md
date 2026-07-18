---
phase: 3
title: Implement cinematic hero and video loop
status: completed
priority: P2
effort: 3h
dependencies:
  - 2
---

# Phase 3: Implement cinematic hero and video loop

## Overview

Build the single-screen Aethera hero, its header and mobile navigation, and the custom video replay loop. End phase with the exact visual hierarchy running against the provided MP4 without using native looping.

Repo root: `D:\Aethera_ChillTimeWeb`

## Requirements

- Functional: render a fullscreen hero with navigation, logo, menu trigger, CTA area, centered headline and description, and the provided MP4 URL; position the video layer at `top: 300px; right: 0; bottom: 0; left: 0`; use `requestAnimationFrame` to monitor `currentTime` and `duration`; fade 0.5s out near the tail, then 0.5s in on replay; on `ended`, set opacity to 0, wait 100ms, set `currentTime = 0`, and call `play()` again; do not use the `loop` attribute.
- Non-functional: support reduced motion, focus-visible, a small-screen menu strategy, and a readable fallback when video playback fails or autoplay is blocked.

## Architecture

Data flow: `src/App.tsx` renders one `AetheraHero` tree -> `AetheraHero` consumes `hero-content.ts` and composes header, centered copy, CTA, and video shell -> `use-cinematic-video-loop` owns the media ref, animation frame ID, restart timeout, reduced-motion branch, and fallback state.

Video lifecycle: wait for playable metadata, run one guarded RAF loop, compute `remaining = duration - currentTime`, start fade-out once `remaining <= 0.5`, and let `ended` finalize the restart path. Guard replay with a ref so RAF and `ended` cannot schedule duplicate restarts.

Mobile nav strategy: inline nav and CTA at tablet and desktop; below that, a menu button opens a lightweight overlay panel with the same links and CTA order. Close on Escape, overlay click, and successful CTA navigation.

Backward compatibility: no server API or stored data exists. Keep the page as one component tree and one hook so future sections can mount beside it without rewriting the replay logic.

## Related Code Files

- Modify: `src/App.tsx`
- Create: `src/components/aethera-hero.tsx`, `src/components/site-header.tsx`, `src/components/mobile-nav.tsx`, `src/components/cinematic-video-layer.tsx`, `src/hooks/use-cinematic-video-loop.ts`

## Implementation Steps

1. Replace the placeholder `src/App.tsx` with a single-page composition that mounts only the hero.
2. Implement `src/components/site-header.tsx` for logo, desktop nav, and header CTA.
3. Implement `src/components/mobile-nav.tsx` with `aria-expanded`, `aria-controls`, Escape close, and overlay click close.
4. Implement `src/components/cinematic-video-layer.tsx` around a muted, autoplaying, `playsInline` video; omit `loop`; apply the requested inset and opacity transition styles.
5. Implement `src/hooks/use-cinematic-video-loop.ts` to manage the RAF loop, fade guards, replay timeout, reduced-motion bypass, playback error fallback, and cleanup of frames, timeouts, and listeners.
6. Implement `src/components/aethera-hero.tsx` to layer video, gradient, header, centered copy, and CTA content using phase 2 tokens.
7. Validate desktop, tablet, and mobile layouts; commit `feat: implement cinematic hero playback`.

## Success Criteria

- [x] The hero fills the viewport and preserves the requested visual hierarchy at 375px, 768px, and 1440px widths.
- [x] The video layer uses the exact inset values and never relies on native looping.
- [x] Fade-out begins in the final 0.5s and replay waits 100ms after `ended`.
- [x] Cleanup cancels RAF work, timeouts, and listeners on unmount.
- [x] Reduced-motion and video-failure fallback states keep the hero readable and usable.

## Risk Assessment

- High (M x H): autoplay blocked or `play()` promise rejected. Mitigation: use `muted` plus `playsInline`, catch the promise, and fall back to the static gradient state.
- High (M x H): duplicate replay scheduling from RAF plus `ended`. Mitigation: one replay guard ref and one timeout owner inside the hook.
- Medium (M x M): mobile overlay harms focus order. Mitigation: semantic button trigger, Escape close, and focus return to the trigger.

## Test and Validation

- Manual browser checks at 375px, 768px, and 1440px
- Keyboard-only navigation pass for header, menu, and CTA controls
- Reduced-motion emulation and simulated media failure check

## Rollback

- Revert the phase commit.
- If uncommitted, restore the placeholder `src/App.tsx` and remove the new component and hook files.
