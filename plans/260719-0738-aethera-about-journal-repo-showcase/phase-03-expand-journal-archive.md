---
phase: 3
title: Expand Journal archive
status: completed
effort: 4h
---

# Phase 3: Expand Journal archive

## Overview

Make Journal feel like a real studio archive: more substantive entries, curated reading paths, and compact desk notes, while keeping native details and stable hash navigation.

## Requirements

- Expand from four to at least seven complete, original reflections. Existing calendar dates remain the editorial filing dates already published by this concept site; new entries use the actual implementation filing date rather than implying an invented release history.
- Add thematic reading paths that point to stable entry hashes and provide multiple entry points into the archive.
- Add short desk notes as a visually distinct, non-interactive secondary reading layer.
- Preserve the existing `details` interaction, direct-hash auto-open behavior, and keyboard access.
- Keep open article bodies at a readable 16px minimum and strengthen dark-surface metadata contrast.

## Related Files

- Modify: `src/pages/journal-page.tsx`
- Modify: `src/lib/journal-content.ts`
- Modify: `src/components/journal-index.tsx`
- Modify: `src/components/journal-entry.tsx`
- Create: `src/components/journal-reading-paths.tsx`
- Create: `src/components/journal-field-notes.tsx`
- Modify: `src/test/interior-experience.test.tsx`
- Create: `src/test/journal-navigation.test.tsx`
- Verify as an unchanged touchpoint: `src/components/route-effects.tsx`

## Implementation Steps

1. Extend the typed entry collection with three finished reflections and unique slugs.
2. Define reading paths and field notes from the same factual studio themes.
3. Render paths as editorial routes, not equal promotional cards; use normal links with clear labels.
4. Render desk notes in an asymmetric bordered composition with semantic list structure.
5. Update counts/copy and test all seven expandable entries, a direct-load hash target, and a same-page reading-path hash transition.

## Success Criteria

- [x] Journal contains seven complete reflections, three reading paths, and at least four desk notes.
- [x] Every hash is unique and direct links still open and scroll to the correct reflection.
- [x] A reading-path link updates the URL, opens its target details element, and leaves hash behavior centralized in `RouteEffects`.
- [x] All summaries/details remain keyboard-operable and touch targets remain usable.
- [x] The route feels curated and dense without turning into a generic blog grid.

## Risks

- Anchor navigation can conflict with router effects; verify same-page and direct-load hashes in browser tests.
- More details increase DOM size; keep entries textual and avoid additional remote media.
