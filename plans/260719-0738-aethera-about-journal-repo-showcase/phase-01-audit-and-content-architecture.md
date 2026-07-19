---
phase: 1
title: Audit and content architecture
status: completed
effort: 2h
---

# Phase 1: Audit and content architecture

## Overview

Establish evidence for the user's emptiness concern, define honest content architecture, inventory reusable media, and lock the repository publishing contract before implementation.

## Context Links

- [Design guidelines](../../docs/design-guidelines.md)
- [Current codebase summary](../../docs/codebase-summary.md)
- [Prior interior redesign](../260718-2200-aethera-interior-experience/plan.md)

## Requirements

- Audit source and existing 768/375 production captures for density, repetition, and route distinction.
- Inspect GitHub description, homepage, topics, default branch, authentication, and remote state read-only.
- Preflight Vercel authentication, linked project identity, and the known canonical production alias before implementation.
- Run the UI/UX design-system search and a dedicated designer audit.
- Record exact output, acceptance, scope boundary, constraints, and touchpoints.

## Related Files

- Read: `src/pages/about-page.tsx`, `src/pages/journal-page.tsx`
- Read: `src/components/about-*.tsx`, `src/components/journal-*.tsx`
- Read: `src/lib/about-content.ts`, `src/lib/journal-content.ts`
- Read: `README.md`, `docs/*.md`, prior `plans/*/reports/*`
- Create/update: this plan directory and its phase files

## Implementation Steps

1. Confirm the framework, existing composition patterns, tests, docs, and route contracts.
2. Compare current page structure with production captures and identify repetitive or visually thin sections.
3. Define new About sections around origin and collaboration; define Journal reading paths, expanded entries, and desk notes.
4. Verify `gh` write readiness and Vercel project/alias linkage without changing either service.
5. Decide media destinations and GitHub About metadata while preserving factual claims.
6. Review the plan for scope, accessibility, performance, and rollback safety.

## Success Criteria

- [x] Evidence confirms concrete content and repository-profile gaps.
- [x] New structures are specific, honest, responsive, and distinct from generic card grids.
- [x] Files, contracts, tests, media, docs, commits, deploy, and GitHub mutations are explicitly planned.
- [x] GitHub and Vercel publication prerequisites are proven before code work begins.

## Risks

- More copy can become undifferentiated scroll length; mitigate with asymmetric composition and multiple reading depths.
- New claims can imply a real client history; keep all language studio-principle or concept-level only.
