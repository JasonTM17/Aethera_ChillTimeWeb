# Production Deployment

## Current Release

| Field | Value |
|---|---|
| Provider | Vercel |
| Project | `aethera-chill-time-web` |
| Canonical URL | [https://aethera-chill-time-web.vercel.app](https://aethera-chill-time-web.vercel.app) |
| Deployment ID | `dpl_D45UjosvZRU2G6fxLs4B2kjuBeUc` |
| Deployment URL | [aethera-chill-time-q17jdkj7i-nguyensonbmt06-6377s-projects.vercel.app](https://aethera-chill-time-q17jdkj7i-nguyensonbmt06-6377s-projects.vercel.app) |
| Deployment status | Ready |
| Created | 2026-07-19 09:38:56 +07:00 |
| Application shape | Static React SPA |
| Build output | `dist/` |
| Runtime environment variables | None |
| Current content check | About origin and seven-entry Journal present |

The canonical URL is the durable production reference. The deployment-specific fields above preserve the exact release inspected for this record and should be refreshed after a later production deployment.

## Configuration

`vercel.json` defines the production contract:

- build command: `npm run build`;
- output directory: `dist`;
- framework preset: neutral;
- rewrite: every request falls back to `/index.html`.

No runtime or build-time environment variables are required. The full Home experience depends on Google Fonts and the configured CloudFront MP4 remaining publicly reachable.

`public/_redirects` provides the equivalent `/* /index.html 200` rule for Netlify.

## Verified Quality Gates

Verified locally on 2026-07-19:

| Check | Result |
|---|---|
| Lint | Passed |
| Vitest coverage run | 6 files passed; 38/38 tests passed |
| Statement coverage | 97.14% (272/280) |
| Branch coverage | 88.82% (159/179) |
| Function coverage | 100% (106/106) |
| Line coverage | 97.39% (262/269) |
| Production build | TypeScript and Vite passed |
| Dependency audit | 0 vulnerabilities |

The configured coverage thresholds are 80% statements, 70% branches, 80% functions, and 80% lines.

## Release Workflow

Use Node.js 22.22 or newer and install from the checked-in lockfile. Before a production release, run:

```bash
npm run lint
npm run test:coverage -- --pool=threads --maxWorkers=1 --no-file-parallelism
npm run build
npm audit --audit-level=high
vercel --prod
```

The first four commands were rerun successfully for this documentation snapshot. `vercel --prod` requires an authenticated Vercel CLI and an existing project link. For a fresh checkout, run `vercel link` and select the existing `aethera-chill-time-web` project before deploying.

## HTTP Verification

Checked against the canonical origin on 2026-07-19:

| Resource | Result |
|---|---|
| `/` | HTTP 200, SPA shell |
| `/studio` | HTTP 200, direct client route |
| `/about` | HTTP 200, direct client route |
| `/journal` | HTTP 200, direct client route |
| `/reach-us` | HTTP 200, direct client route |
| `/beyond-the-map` | HTTP 200 shell; React renders branded recovery |
| `/aethera-landscape-poster.webp` | HTTP 200, `image/webp` |

The deployed JavaScript bundle contains the current About origin copy, the seven-reflection Journal description, the newest reflection, and the field-notes section. This confirms the enriched route content is present without tying documentation to a transient bundle filename.

## Repository Showcase Evidence

The current repository presentation uses files under `assets/showcase/`:

- [Home cinematic loop](../assets/showcase/home-cinematic-loop.gif)
- [Interior editorial tour](../assets/showcase/interior-editorial-tour.gif)
- [About dossier](../assets/showcase/about-dossier.png)
- [Journal desktop](../assets/showcase/journal-desktop.png)
- [Journal mobile](../assets/showcase/journal-mobile.png)
- [Mobile navigation](../assets/showcase/mobile-navigation.png)

The folder contains nine PNGs and two GIFs. It is repository evidence, not a production asset directory; Vite does not copy unimported root assets into `dist/`.

## Operational Checks

- Confirm `hello@aethera.studio` is controlled and monitored, or update `siteContent.email` in `src/lib/site-content.ts`.
- Confirm the remote MP4 permits production access and expected bandwidth.
- Review whether remote Google Fonts meet the project’s privacy and performance policy.
- Recheck direct routes, Journal hashes, mobile navigation, reduced motion, and the email-draft flow after every deployment.
- Treat a custom domain as a separate DNS and ownership decision; keep the `vercel.app` URL as the fallback.

## Rollback

The site has no database migrations. Roll back through the Vercel dashboard, or use a known-good deployment URL or ID:

```bash
vercel rollback <deployment-id-or-url>
```

After rollback, verify the canonical URL, every direct route, and the About/Journal content again.

## Related Documentation

- [Deployment guide](./deployment-guide.md)
- [System architecture](./system-architecture.md)
- [Codebase summary](./codebase-summary.md)
- [Project roadmap](./project-roadmap.md)
