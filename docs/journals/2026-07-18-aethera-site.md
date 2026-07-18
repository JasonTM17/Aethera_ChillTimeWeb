---
date: 2026-07-18
session: aethera-five-route-frontend
---

# Aethera Grew from One Hero into a Complete Site

**Date**: 2026-07-18 16:08
**Severity**: Medium
**Component**: React frontend, cinematic media, routing, contact
**Status**: Resolved; production deployment Ready

## What Happened

The Home hero grew into five routes plus branded recovery. Production is live on Vercel; GitHub was not pushed.

## The Brutal Truth

Calling this “just a hero” buried real accessibility risk. Polished visuals concealed wrong video timing and four integration defects. Fixing them before production was relief earned by measurement, not confidence.

## Technical Details

RAF owns the manual loop's 0.5s fades; `ended` hides, waits 100ms, seeks to zero, then replays. A 500ms CSS transition retargeted RAF updates and stretched the fade. Removing it restored opacity 0.5 at 0.25s and 1 at 0.5s. Reduced motion omits the roughly 29 MiB MP4 `src` for a 171KB poster; Reach Us creates a bounded `mailto:` draft and stores nothing.

Final gates passed: 34/34 tests across five files, 97.34% statements (257/264), lint, build, and a zero-vulnerability production audit.

## Interior Redesign and Production Launch

The sparse first fold was self-inflicted: a roughly 92px header plus 80–112px top and 96–128px bottom intro padding; essential copy began at opacity zero, with H1/description delayed 200/400ms. Shallow captures showed header and dead air. We rejected a spacing-only patch. Copy now paints immediately and one Horizon Ledger anchors each page. Studio uses labeled concepts/capabilities; About positioning/manifesto/principles/process; Journal a featured, hash-addressable native-details archive; Reach Us first-note guidance, honest `mailto:`/direct email, next steps, and FAQs.

Four defects survived: Journal hashes scrolled without opening nested `<details>` (`07bbfd4`); reduced motion was sampled only at mount (`2e9c1d6`); `outline-none` hid contact-confirmation focus (`6dae7c8`); active navigation was color-only (`c78864c`). We kept native semantics and fixed their seams instead of building custom widgets.

Vercel deployment `dpl_6vJKp1qNNGr91MRDz4ExnrUPme6A` is `Ready`. Production QA covered every route, SPA fallback, 375/768/1440px layouts, deep links, live reduced motion, mobile focus, validation, overflow, and an empty console. Three palette-optimized GIFs preserve Home loop (4.82MB), interior tour (1.32MB), and mobile navigation (0.79MB). GitHub still was not pushed.

## What We Tried: Decisions and Rejected Alternatives

- Kept manual replay and removed CSS interpolation instead of using native `loop` or more timing logic.
- Omitted the MP4 under reduced motion and kept honest `mailto:` behavior instead of load-then-pause or an invented backend.
- Added host rewrites and distinct routes with a shared Ledger instead of app-only deep links or a cosmetic spacing patch.

## Root Cause Analysis

We optimized one animated template before checking browser geometry and state transitions. That shortcut created dead air and let accessibility failures survive until focused QA.

## Lessons Learned

Visual plausibility and green component tests are not production correctness. Test deep-link disclosure, live preferences, focus visibility, non-color state, and direct production URLs.

## Next Steps

- Establish ownership and verify `hello@aethera.studio` monitoring before advertising email intake.
- Repository owner: review the completed commits, then push only when explicitly requested.

## Unresolved Questions

- Is `hello@aethera.studio` the final monitored public mailbox?
