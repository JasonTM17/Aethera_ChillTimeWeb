---
phase: 4
title: "Redesign Journal and Reach Us"
status: pending
effort: ""
priority: P1
dependencies: [2]
---

# Phase 4: Redesign Journal and Reach Us

## Overview

Build a useful chronological Journal and a complete, transparent Reach Us flow
whose form begins within the first desktop viewport.

## Requirements

- Journal: featured reflection, chronological index, stable hash IDs, native
  expandable bodies, metadata, and conversation rail.
- Reach Us: contact context, mailto form, first-note guidance, privacy truth,
  next steps, direct email fallback, and native FAQs.
- Preserve form validation, invalid-field focus, draft confirmation focus, and
  start-over behavior.

## Architecture

Journal entries use a dedicated semantic component but remain synchronous so
route hash focusing continues to work. Reach Us content lives in its own module.
The current 200-line form is split into controller, fields, and confirmation
without changing its public behavior or accessible names.

## Related Code Files

- Modify: `src/pages/journal-page.tsx`
- Modify: `src/pages/reach-us-page.tsx`
- Modify: `src/lib/journal-content.ts`
- Create: `src/lib/reach-us-content.ts`
- Create: `src/components/journal-entry.tsx`
- Create: `src/components/journal-index.tsx`
- Modify: `src/components/contact-form.tsx`
- Create: `src/components/contact-form-fields.tsx`
- Create: `src/components/contact-form-confirmation.tsx`
- Create: `src/components/reach-us-contact-section.tsx`
- Create: `src/components/reach-us-next-steps.tsx`

## Implementation Steps

1. Extract Journal entry rendering and preserve slug IDs.
2. Replace equal cards with featured plus full-width chronological rows.
3. Add Journal context and conversation rail without a fake newsletter.
4. Extract Reach Us content and split form presentation from controller state.
5. Add first-note guidance, transparent next-step sequence, and FAQs.
6. Run focused Journal hash and contact-form behavior tests.

## Success Criteria

- [ ] Direct Journal hashes scroll to the correct synchronous article.
- [ ] Native details remain keyboard-accessible and readable.
- [ ] Form still creates but never sends or stores an email draft.
- [ ] Reach Us contains no duplicate journey CTA or unverified response promise.

## Risk Assessment

Risk: form refactor regresses focus or validation. Mitigation: preserve IDs and
accessible names, then run existing contact tests before broad validation.
