# Code Review Report — 2026-07-18 — Aethera Site

## Scope

- Reviewed the complete five-route implementation, Home video contract, shared navigation, route effects, contact flow, deployment fallbacks, tests, and build configuration.
- Verified exact user-selected hero copy, geometry, colors, typography, fade timing, and replay behavior were preserved.
- Review inputs: code inspection, 25 automated tests, coverage, production build, dependency audit, and browser evidence at 375/768/1440.

## Final Assessment

Release readiness: **PASS for local/build output**.

- Critical findings: 0 open.
- High findings: 0 open.
- Medium findings: 0 open.
- Known deployment configuration item: confirm the public contact mailbox before launch.

## Findings and Resolution

### Video fade timing — resolved

The original video element combined RAF opacity interpolation with a 500ms CSS transition. Repeated RAF updates could retarget the CSS transition and make the visible fade exceed 0.5 seconds.

Resolution:

- Removed the CSS opacity transition; RAF is the only interpolation source.
- Real-browser computed opacity: 0.5 at 0.25s, 1 at 0.5s, and 0.5 at 0.25s before the end.
- CSS transition duration now reports 0s.

### Reduced-motion video transfer — resolved

The remote MP4 is approximately 29 MiB and was previously mounted with `preload="auto"` before reduced-motion logic ran.

Resolution:

- Extracted a 171KB WebP poster from the supplied video.
- Reduced-motion renders the poster without a video `src`; browser network capture reports no MP4 request.
- Normal playback uses `preload="metadata"` and retains the exact supplied MP4 URL.

### Production deep links — resolved

BrowserRouter routes require the host to rewrite unknown paths to `index.html`.

Resolution:

- Added `vercel.json` rewrite configuration.
- Added Netlify-compatible `public/_redirects`.
- Production preview returned HTTP 200 and the SPA root for `/`, `/studio`, `/about`, `/journal`, `/reach-us`, and the not-found UI path.

### Route and focus edge cases — resolved

- Malformed URL hashes are now guarded instead of throwing `URIError`.
- Route changes focus the new main landmark and restore scroll position intentionally.
- Backdrop and Escape dismissals both return focus to the mobile trigger.
- Contact reset focuses the restored first field.

### Contact input boundaries — resolved

- Strengthened email validation to reject multiple `@` characters.
- Whitelisted project values.
- Bounded name, email, and message lengths before mailto serialization.
- Removed the unverified two-working-day response promise.
- The interface continues to state explicitly that the site sends and stores nothing.

## Verified Non-Issues

- Home video unmount clears playback, RAF, listeners, and pending replay timeout.
- No native `loop` attribute is present.
- Route-aware navigation exposes correct `aria-current` state and no active item on 404.
- Each route has one main landmark and one H1; interior routes do not retain the Home video.
- No secrets, authentication surface, storage, backend calls, unsafe HTML, or user-controlled redirect targets exist.
- Lint, strict TypeScript build, tests, coverage gates, and dependency audit pass.

## Unresolved Questions

- Confirm that `hello@aethera.studio` is the intended monitored public mailbox before production launch.
