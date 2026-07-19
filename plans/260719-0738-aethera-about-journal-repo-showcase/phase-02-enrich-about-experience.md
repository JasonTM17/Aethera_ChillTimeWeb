---
phase: 2
title: Enrich About experience
status: completed
effort: 4h
---

# Phase 2: Enrich About experience

## Overview

Turn About into a complete studio portrait with an origin narrative and concrete collaboration agreement, while retaining the strongest existing manifesto, principles, and process sections.

## Requirements

- Add an editorial origin section that explains why the studio exists without inventing founders or dates.
- Add a working-agreement section describing what Aethera brings, what the partner brings, and what both protect together.
- Retain the existing fit-signal contract rendered inside `AboutProcess`; prove it remains visible after composition changes.
- Vary light/dark, narrow/wide, and chronological/systemic reading rhythms without decorative filler.
- Keep one H1, semantic section headings, mobile source order, and reduced-motion-safe behavior.
- Present paired positioning columns from the tablet breakpoint and process steps as 2×2 at tablet, four stages at desktop.
- Use black copy on landscape wash and stronger white opacity on dark fields to maintain readable contrast.

## Related Files

- Modify: `src/pages/about-page.tsx`
- Modify: `src/lib/about-content.ts`
- Create: `src/components/about-origin.tsx`
- Create: `src/components/about-working-agreement.tsx`
- Modify: `src/components/about-positioning.tsx`
- Modify: `src/components/about-principles.tsx`
- Modify: `src/components/about-process.tsx`
- Modify: `src/test/interior-experience.test.tsx`

## Implementation Steps

1. Add typed origin chapters and collaboration commitments to the content module.
2. Build a dark, chapter-led studio-rationale composition with semantic reading order; make no founder, date, or historical claim that the repo cannot support.
3. Build an asymmetric working agreement with explicit shared outcomes and no fake metrics.
4. Place the new sections between positioning, manifesto, principles, and process to create a deliberate narrative arc.
5. Extend route tests for the new visible content, landmark headings, process outputs, and all existing fit signals.

## Success Criteria

- [x] About reads as a specific studio profile rather than a short brand statement.
- [x] New components stay under 200 lines and reuse existing typography/tokens.
- [x] Desktop and mobile layouts have no clipping, awkward empty bands, or inaccessible reading order.
- [x] Tests prove origin, collaboration, and existing process content render together.

## Risks

- Dark sections can overpower the page; use one anchored field and preserve white editorial breathing room.
- Dense copy can reduce scanability; supply labels, chapters, and short statements before paragraphs.
