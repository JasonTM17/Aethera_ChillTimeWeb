# Test Report — 2026-07-18 — Complete Aethera Site

## Test Results Overview

- Total: 25 tests across 4 files.
- Passed: 25 | Failed: 0 | Skipped: 0.
- Coverage gates: statements 80%, branches 70%, functions 80%, lines 80%.

## Coverage Metrics

| Metric | Value | Threshold | Status |
|---|---:|---:|---|
| Statements | 96.86% | 80% | PASS |
| Branches | 88.96% | 70% | PASS |
| Functions | 100% | 80% | PASS |
| Lines | 96.75% | 80% | PASS |

## Automated Behavior

- Exact Home copy, two journey CTAs, requested typography hooks, and registered logo.
- Video geometry starts at 300px with the exact gradient overlay and no native `loop`.
- 0.5s video fade-in/fade-out calculations and 100ms ended replay sequence.
- Video animation frame, timer, listener, playback rejection, and unmount cleanup.
- Pending replay does not fire after navigation away from Home.
- Reduced-motion pauses at 0s with stable opacity and no animation frame loop.
- Direct rendering for Home, Studio, About, Journal, Reach Us, and unknown routes.
- Desktop active navigation, header CTA navigation, and 404 recovery.
- Mobile panel focus entry, Tab/Shift+Tab containment, route close, Escape close, and focus return.
- Reach Us required fields, focus on first invalid control, valid mailto draft, honest unsent state, and reset.
- Valid and malformed hash handling, route focus, and scroll restoration.
- Bounded contact values and rejection of malformed email/project input.
- Direct media error fallback and reduced-motion source suppression.

## Real Browser QA

### Responsive geometry

| Viewport | Routes checked | Horizontal overflow | Navigation | Status |
|---|---|---|---|---|
| 375×812 | all 5 + 404 | none | compact dialog | PASS |
| 768×1024 | all 5 | none | compact dialog | PASS |
| 1440×900 | all 5 + 404 | none | full navigation | PASS |

- Home remains exactly one viewport tall at all three widths.
- Home heading: 48px at 375px; 96px at 768px and 1440px.
- Interior page headings: 60px at 375px, 72px at 768px, 96px at 1440px.
- Only Home contains a video; every interior route reports zero video elements.
- Each known route exposes exactly one active desktop navigation destination; 404 exposes none.
- Document titles and H1 content match every route.

### Interaction and fallback checks

- Mobile menu focuses Home on open; Escape removes dialog and returns focus to the trigger.
- Empty contact submission reports four errors and focuses `#name`.
- Valid contact input produces a URL-encoded draft containing name, email, project type, and message.
- UI explicitly states that nothing has been sent or stored.
- Reduced-motion: video paused, `currentTime = 0`, opacity 1, heading animation 0.00001s.
- Reduced-motion uses the 171KB poster and triggers no MP4 network request.
- Computed video opacity: 0.5 at 0.25s, 1 at 0.5s, and 0.5 at 0.25s before the end; CSS transition duration is 0s.
- Production preview returns the SPA root with HTTP 200 for all five direct routes and 404 UI path.
- Browser console: development server and React DevTools messages only.
- Browser page errors: none.

## Screenshots

- Home: [375px](./hero-375.png), [768px](./hero-768.png), [1440px](./hero-1440.png).
- Studio: [375px](./site-studio-375.png), [1440px full page](./site-studio-1440.png).
- About: [1440px full page](./site-about-1440.png).
- Journal: [1440px full page](./site-journal-1440.png).
- Reach Us: [375px](./site-reach-us-375.png), [1440px full page](./site-reach-us-1440.png).

## Quality Gates

- `npm run lint`: PASS.
- `npm run test:coverage -- --pool=threads --maxWorkers=1 --no-file-parallelism`: PASS.
- `npm run build`: PASS.
- `npm audit`: PASS, 0 vulnerabilities.
- `ck plan validate --strict`: PASS, 0 errors and 0 warnings.

## Unresolved Questions

None.
