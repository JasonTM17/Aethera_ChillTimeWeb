# Codebase Summary

## Entry and Configuration

| Path | Responsibility |
|---|---|
| `index.html` | Document metadata and React mount point |
| `src/main.tsx` | StrictMode root render |
| `src/App.tsx` | BrowserRouter, route table, and testable `AppRoutes` |
| `vite.config.ts` | React and Tailwind Vite plugins |
| `vitest.config.ts` | jsdom, coverage scope, and thresholds |
| `eslint.config.js` | TypeScript, React Hooks, and Fast Refresh lint rules |

## Source Areas

| Directory | Responsibility |
|---|---|
| `src/components/` | Shared navigation, layouts, CTA, contact form, video layer, and page intro |
| `src/pages/` | Route-level Home-adjacent and interior page compositions |
| `src/hooks/` | Manual cinematic video lifecycle |
| `src/lib/` | Typed editorial content and contact validation/draft helpers |
| `src/styles/` | Font imports, theme tokens, keyframes, reduced-motion rules |
| `src/test/` | Hero/video, route/navigation, and contact interaction coverage |
| `public/` | Reduced-motion poster and Netlify SPA fallback |

## Route Composition

- `/` renders `AetheraHero`, which owns the Home-only video and header.
- Interior routes render through `SiteLayout`, sharing `SiteHeader` and `SiteFooter`.
- `RouteEffects` synchronizes document titles, main focus, top scroll, and safe hash scrolling.
- Unknown paths render `NotFoundPage` inside the shared layout.

## Content Boundaries

Editorial copy is separated from page markup in `src/lib/*-content.ts`. Shared brand, route, CTA, and contact values live in `site-content.ts`. Contact validation is pure and independently testable in `contact-form.ts`.

## Generated Output

`npm run build` creates `dist/`, which is ignored by Git. Coverage output and dependencies are also ignored. Source screenshots and QA reports are intentionally stored under the active plan reports directory.
