# Code Standards

## TypeScript and React

- Keep strict TypeScript enabled; do not add `any`, suppression comments, or unchecked external values.
- Prefer typed content collections and small functional components.
- Keep route lifecycle effects centralized in `RouteEffects`.
- Keep Home video behavior isolated so navigating away always unmounts it.
- Use semantic links for navigation and buttons for local actions.
- Split source files above 200 lines when a real concern boundary exists.

## Styling

- Use Tailwind utilities for component layout and state.
- Define global tokens and keyframes in `src/styles/theme.css`.
- Import fonts only through `src/styles/fonts.css`.
- Preserve the white, black, and `#6F6F6F` editorial palette unless a product decision changes it.
- Avoid dynamic Tailwind class fragments that the scanner cannot detect.

## Accessibility

- Provide one H1 and one focusable `#main-content` per route.
- Keep the skip link first in the header.
- Use `aria-current="page"` through `NavLink`; Home must use exact matching.
- Mobile modal navigation must trap focus, close on Escape/backdrop/route change, and return focus appropriately.
- Form labels and error descriptions must keep stable accessible names.
- Respect reduced motion without downloading or autoplaying the video.

## Testing

- Assert behavior and public contracts, not implementation trivia.
- Use MemoryRouter for direct route tests and BrowserRouter through `App` for integration smoke coverage.
- Keep video fade/replay tests deterministic with mocked timers and animation frames.
- Add real-browser QA when layout, media, focus, or computed styles change.

## Git

- Use focused conventional commits without AI attribution.
- Never commit secrets, local environment files, `dist/`, `coverage/`, or `node_modules/`.
- Do not stage project control directories unless the user explicitly requests them.
- Do not push unless explicitly authorized.

## Required Gates

```bash
npm run lint
npm run test:coverage -- --pool=threads --maxWorkers=1 --no-file-parallelism
npm run build
npm audit
```
