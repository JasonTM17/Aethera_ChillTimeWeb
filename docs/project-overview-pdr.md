# Project Overview and PDR

## Product

Aethera is a cinematic editorial concept site for an independent digital studio. It presents the studio’s point of view, conceptual explorations, collaboration model, process, Journal, and a low-friction contact path without a backend. The repository does not establish Aethera as an operating business or claim real clients, founders, or outcomes.

Production: [https://aethera-chill-time-web.vercel.app](https://aethera-chill-time-web.vercel.app)

## Audience

- Founders shaping a new digital product.
- Teams repositioning an existing product or brand.
- Thoughtful makers looking for a close creative partner.
- Repository visitors evaluating the product, implementation quality, and current visual state.

## User Goals

1. Understand Aethera’s tone and value within the first viewport.
2. Explore representative conceptual work and capabilities.
3. Learn why the studio exists, how it thinks, and how collaboration works.
4. Read substantive studio reflections in sequence or through a thematic path.
5. Share a direct Journal link that opens the intended reflection.
6. Prepare a clear first-contact email without surrendering data to the site.
7. Review current screenshots and motion evidence from the repository landing experience.

## Functional Requirements

### Site Foundation

- Five client-side routes plus a branded not-found state.
- Route-aware desktop and mobile navigation.
- Fullscreen Home hero with the established copy, geometry, manual video loop, and Home-only lifecycle cleanup.
- Shared interior shell, route titles, route focus, top scroll restoration, skip navigation, and responsive Horizon Ledger.

### About

- Preserve paired “Aethera is / is not” positioning.
- Explain the studio origin through three factual, non-biographical chapters.
- Present the manifesto as a working point of view.
- Define four collaboration agreements: shared question, visible unfinished work, named trade-offs, and care through reality.
- Preserve four principles, four process stages with outputs, and three fit signals.
- Make no unsupported founder, founding-date, staffing, client, award, or outcome claim.

### Journal

- Publish seven complete reflections from typed local content.
- Provide three thematic reading paths linked to stable entry slugs.
- Provide four clearly undated, non-interactive field notes.
- Use native `details`/`summary` for reflection bodies.
- Use semantic `time` elements with ISO `dateTime` values for dated reflections.
- On direct or same-page hash navigation, safely decode the slug, open the matching disclosure, scroll its labelled article into view, and move focus with it.
- Reopen a manually closed current-hash reflection when its reading path is selected again; malformed or missing targets remain safe and reset a new route to the top.

### Reach Us

- Validate name, email, project type, and bounded message input.
- Create a URL-encoded `mailto:` draft.
- State clearly that the website does not send, upload, or store contact values.
- Preserve a direct email fallback and accessible validation focus.

### Repository Showcase

- Store curated media under `assets/showcase/`.
- Include Home, Studio, About, Journal, Reach Us, and mobile navigation evidence.
- Include at least two optimized GIFs; the current set contains `home-cinematic-loop.gif` and `interior-editorial-tour.gif`.
- Keep screenshots and motion files out of the runtime application unless explicitly imported for a future product requirement.

## Non-Functional Requirements

- Responsive from 320px upward with no horizontal overflow.
- One H1 and one focusable main landmark per route.
- Keyboard-safe navigation and native Journal disclosure controls.
- Reduced motion must prevent Home MP4 download/playback and collapse non-essential animation.
- No native video looping, fake form submission, client persistence, analytics, authentication, database, or hidden backend.
- Strict TypeScript; small typed modules; consider splitting code files above 200 lines when a real concern boundary exists.
- Direct route loads must receive `index.html` from the static host.
- Lint, automated tests, coverage thresholds, production build, and dependency audit must pass before release.

## Acceptance Status

The current implementation satisfies the requirements above.

Verified locally on 2026-07-19:

| Measure | Result |
|---|---|
| Tests | 38/38 passing across six files |
| Statements | 97.14% |
| Branches | 88.82% |
| Functions | 100% |
| Lines | 97.39% |
| Lint | Passed |
| Production build | Passed |
| Dependency audit | 0 vulnerabilities |

The canonical Vercel origin returned HTTP 200 for all named routes, an unknown SPA path, and the landscape poster. Its deployed bundle contains the enriched About origin and seven-entry Journal content.

## Success Metrics

- All automated quality gates remain green.
- Journal count remains seven until copy changes intentionally.
- Every reading-path slug resolves to an existing entry.
- Direct, repeated, and same-page Journal hashes open and focus the correct native disclosure target.
- About retains origin, manifesto, working agreement, principles, process outputs, and fit signals together.
- Repository showcase retains nine PNGs and two GIFs with valid relative paths.

## Constraints and Dependencies

- React 19, React Router 8, Vite 8, Tailwind CSS 4, and TypeScript 6.
- Node.js 22.22 or newer, required by the installed React Router release.
- npm and the checked-in `package-lock.json`.
- Google Fonts and the configured CloudFront MP4 are external resources.
- Vercel and Netlify configurations provide static-host SPA fallbacks.

## Out of Scope

- Backend email delivery or lead storage.
- Authentication, CMS, analytics, payments, or database.
- Individual Journal article routes.
- Fabricated case studies, client work, team biographies, testimonials, awards, metrics, or publishing cadence.
- A custom domain commitment.

## Version History

| Date | Change |
|---|---|
| 2026-07-18 | Five-route interior experience, shared shell, Journal hash opening, Reach Us draft flow, and production deployment |
| 2026-07-19 | About origin and working agreement; seven-entry Journal with reading paths and field notes; repository showcase media and refreshed quality baseline |

## Related Documentation

- [Codebase summary](./codebase-summary.md)
- [Design guidelines](./design-guidelines.md)
- [System architecture](./system-architecture.md)
- [Deployment guide](./deployment-guide.md)
- [Project roadmap](./project-roadmap.md)
