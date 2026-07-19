---
date: 2026-07-19 10:34 +07:00
session: aethera-about-journal-repository-showcase
severity: medium
component: About, Journal, repository showcase, and release pipeline
status: resolved
release: 23ce483d35c9b703b51cdf2f82c01f6311a10ec2
---

# Aethera Looked Finished Before It Was Finished

## What Happened

About and Journal existed but were thin: About lacked an origin and working agreement; Journal had four reflections, no reading paths, and no field notes. The README showed one stale Studio capture; GitHub About description, homepage, and topics were blank.

The release added a factual three-chapter origin, four working agreements, seven Journal reflections, three reading paths, four undated notes, and a production gallery. GitHub About now carries the description “A cinematic editorial studio experience built with React, Vite, Tailwind CSS, and TypeScript,” the canonical Vercel homepage, and nine focused topics.

## The Brutal Truth

We confused route presence with product depth and treated repository presentation as cleanup. That was maddeningly lazy. Worse, hash navigation scrolled while keyboard focus stayed behind. A link that strands focus is an accessibility defect.

## Technical Details

`RouteEffects` opened `[data-hash-expand]` and called `scrollIntoView()`, but articles were not focusable and the effect ignored React Router's location `key`. Commit `bfc3d7a` added `tabIndex={-1}`, `aria-labelledby`, missing-target top reset, target focus, and the `key` dependency. Tests in `f1405b0` cover direct and same-page hashes, reopening a manually closed current hash, malformed `%`, and missing targets.

Final gates: **38/38** tests; coverage **97.14% statements / 88.82% branches / 100% functions / 97.39% lines**; lint and build passed; audit **0 vulnerabilities**. Vercel deployment `dpl_D45UjosvZRU2G6fxLs4B2kjuBeUc` is Ready; canonical Home, About, Journal, and unknown paths returned HTTP 200. `origin/main` matched `23ce483`; README and sampled media resolved on GitHub.

## What We Tried

- Rejected a CMS, per-article routes, custom disclosures, and invented history. Typed static content plus native `details` met the actual need with less machinery.
- Rejected pre-deployment captures after final navigation/hash fixes changed the app. All nine PNGs and two GIFs were recaptured from the final canonical deployment in `cda095b`.
- Kept Reach Us honestly `mailto:`-only. No CMS, authentication, analytics, backend, database, or persistence was smuggled into the showcase narrative.

## Root Cause Analysis

The boundary stopped at “routes render.” No acceptance criterion tied content depth, focus, deployed media, README accuracy, and GitHub metadata to one SHA. Tests covered hash opening, not focus context or repeated-current-hash behavior.

## Lessons Learned

Release evidence must follow deployment. Test hash position, disclosure, and focus together. Repository metadata is product surface. Never fill a thin concept with fake clients, people, dates, or metrics.

## Next Steps

- Repository owner: confirm `hello@aethera.studio` is controlled and monitored before public promotion.
- Deployment owner: validate MP4 bandwidth/cost and Google Fonts privacy policy before the next release.
- Product owner: define publishing workflow, consent metrics, contact delivery, retention, and spam rules before authorizing CMS, analytics, or backend work.

## Unresolved Questions

- Is the configured mailbox monitored?
- Are the remote MP4 and Google Fonts acceptable long-term dependencies?
- Who owns the custom-domain and sustained-monitoring decisions?
