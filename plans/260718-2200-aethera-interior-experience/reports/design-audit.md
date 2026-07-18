# Aethera Interior Design Audit

## Finding

The interior routes are not missing content. Their shared intro creates an
accidental empty first fold:

- The shared header is about 92px tall.
- `EditorialPageIntro` adds 80-112px above and 96-128px below the copy.
- The eyebrow, H1, and description begin at opacity zero, with the essential H1
  and description delayed by 200ms and 400ms.
- Route-specific content starts only after the oversized intro.

In a shallow capture, this can leave only the header visible. Repeated equal
grids, pale metadata, thin rules, and black rounded CTA panels then make the
remaining pages feel like copies of one sparse template.

## Audience and Job

- Primary audience: thoughtful founders and product/brand leaders looking for a
  close senior creative partner.
- Secondary audience: readers interested in calm, humane digital craft.
- User job: identify each route immediately, understand Aethera's point of view
  and offer, inspect honest evidence, then take one clear next step.

## Approved Direction

### Horizon Ledger

Each interior route receives one shallow panoramic crop of the existing Home
landscape poster. A hairline continues into a compact factual field note. Crop
and content change by route; the motif appears once per page.

This preserves the Home relationship without adding stock assets or repeating
the video. It also provides a visible first-fold anchor while essential intro
copy remains readable on first paint.

### Route identities

- Studio: explicitly labeled concept studies, hypotheses, abstract artifacts,
  methods, capabilities, working models, and fit.
- About: positioning, manifesto, staggered principles, process outputs, and fit.
- Journal: featured reflection plus a chronological, hash-addressable index with
  native expandable bodies.
- Reach Us: first-note guidance, transparent mailto form, direct email fallback,
  next steps, and native FAQs.

## Guardrails

- Keep `#FFFFFF`, `#000000`, `#6F6F6F`, Instrument Serif, and Inter.
- Preserve the Home headline, MP4 URL, video positioning, RAF fades, restart
  delay, poster fallback, and original animation tokens.
- Essential route copy stays visible at first paint.
- Horizon support motion: opacity/translate only, no more than 320ms and 12px.
- Reduced motion receives immediate static content.
- No fabricated clients, results, metrics, team biographies, response times, or
  newsletter behavior.
- No bento grids, custom cursors, perpetual decoration, or new motion package.
- Maintain semantic headings, native details, labeled fields, focus behavior,
  image dimensions, empty decorative alt text, 44px targets, and 320px reflow.

## Acceptance Viewports

| Width | Expected composition |
|---|---|
| 320-375px | 20-24px gutters, 48-56px H1, single column, 120-144px ledger |
| 768px | 32px gutters, 64-72px H1, balanced 5/7 or 6/6 splits |
| 1440px | max-width 1280px, asymmetric 12-column rhythm, 88-104px H1 |

At 1440x900, route-specific content or the Horizon Ledger must appear in the
first fold. No horizontal overflow is accepted at any target width.

## Unresolved Questions

None. Verified client proof, people, and measurable outcomes remain intentionally
excluded until the user supplies source material.
