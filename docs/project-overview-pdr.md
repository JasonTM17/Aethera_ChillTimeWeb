# Project Overview and PDR

## Product

Aethera is a cinematic editorial website for an independent digital studio. It presents the studio's point of view, work explorations, process, journal, and a low-friction contact path without relying on a backend.

## Audience

- Founders shaping a new digital product.
- Teams repositioning an existing product or brand.
- Thoughtful makers looking for a close creative partner.

## User Goals

1. Understand Aethera's tone and value within the first viewport.
2. Explore representative work and capabilities.
3. Learn how the studio thinks and collaborates.
4. Read studio reflections without leaving the Journal page.
5. Prepare a clear first-contact email without surrendering data to the site.

## Functional Requirements

- Five client-side routes plus a branded not-found state.
- Route-aware desktop and mobile navigation.
- Fullscreen Home hero with exact supplied copy, fonts, colors, geometry, and manual video loop.
- Home-only video lifecycle that fully cleans up on navigation.
- Studio project explorations and capabilities.
- About manifesto, principles, and process.
- Journal entries with native expandable details.
- Reach Us validation and encoded mailto draft.
- Route titles, focus restoration, skip link, reduced-motion support, and keyboard-safe mobile navigation.

## Non-Functional Requirements

- Responsive from 320px upward with no horizontal overflow.
- One H1 and one main landmark per route.
- No native video looping, hidden errors, fake submission, or client-side persistence.
- Small typed modules; consider splitting code files above 200 lines.
- Lint, strict TypeScript build, automated tests, coverage thresholds, and dependency audit must pass.
- Direct route loads must receive the SPA root in production.

## Acceptance Status

All implementation requirements above are complete and verified locally. Browser QA covers 375×812, 768×1024, and 1440×900. The remaining launch decision is confirming the public contact mailbox and selecting a deployment host.

## Out of Scope

- Backend email delivery or lead storage.
- Authentication, CMS, analytics, payments, or database.
- Individual Journal article routes.
- Claims that the conceptual Studio explorations are real client work.
