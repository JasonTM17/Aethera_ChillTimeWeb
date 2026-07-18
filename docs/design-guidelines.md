# Design Guidelines

## Direction

Refined editorial minimalism on a pure white canvas. Instrument Serif carries the emotional voice; Inter handles navigation, body copy, metadata, and controls. Motion should feel quiet and purposeful.

## Tokens

| Role | Value |
|---|---|
| Background / button text | `#FFFFFF` |
| Foreground / logo / CTA | `#000000` |
| Secondary text | `#6F6F6F` |
| Display font | Instrument Serif |
| Body font | Inter |

Theme variables and the three fade-rise animations live in `src/styles/theme.css`. Font imports live in `src/styles/fonts.css` and use `display=swap`.

## Home Contract

- Minimum height: `100dvh`.
- Video layer: `top: 300px; right: 0; bottom: 0; left: 0`.
- Gradient: white → transparent → white above the video.
- Headline: 48px mobile, 72px small screen, 96px medium and larger; line-height 0.95 and tracking -2.46px.
- Only “silence,” and “the eternal.” are italic gray.
- Header and hero CTAs both say “Begin Journey”.
- Do not add sections to the Home hero or move video playback into the shared interior layout.

## Interior Pages

- Use a restrained eyebrow, large Instrument Serif H1, gray italic emphasis, and a concise description.
- Keep content inside `max-w-7xl` with 24px mobile and 32px larger gutters.
- Use thin black-opacity rules and rounded black CTA panels for rhythm.
- Project artwork remains abstract and monochrome; do not imply conceptual entries are client case studies.
- Shared page CTAs route to Reach Us.

## Responsive Rules

- Compact modal navigation below the `lg` breakpoint; full navigation at `lg` and above.
- Pointer targets must be at least 44px.
- Grids collapse to a single readable column; never shrink editorial text into dense desktop layouts.
- Test 375×812, 768×1024, and 1440×900 with no horizontal overflow.

## Motion and Media

- RAF alone controls video opacity; do not add a competing CSS opacity transition.
- Preserve 0.5s fade-in, 0.5s fade-out, and 100ms restart delay.
- Reduced-motion receives the local poster without an MP4 source.
- Fade-rise animations use 0s, 0.2s, and 0.4s delays and collapse under reduced-motion.

## Accessibility

- Keep contrast on solid white behind gray copy.
- Preserve visible focus rings, semantic landmarks, heading order, skip navigation, and mobile focus containment.
- Decorative video remains muted, unfocusable, and hidden from assistive technology.
