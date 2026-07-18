# Aethera Cinematic Hero — UI/UX Implementation Brief

## Direction & Scope

Refined editorial/luxury minimalism on a pure white canvas. Keep the page to the supplied navigation, one centered hero, and the video field—no eyebrow, extra sections, decorative copy, or added actions. Use Instrument Serif for the headline and Inter for navigation, body, and CTAs. Required palette: `#FFFFFF` surface, `#000000` primary text/action, `#6F6F6F` secondary/emphasized text.

Glass treatment stays subordinate: if needed, limit translucent white plus a light hairline and modest backdrop blur to the compact navigation/action surface. Never blur the full viewport, animate blur, or soften the black CTA.

## Exact Content & Composition

- Header: logo `Aethera` with `®` set as a true superscript; links `Home`, `Studio`, `About`, `Journal`, `Reach Us`; CTA `Begin Journey`.
- Hero headline: `Beyond silence, we build the eternal.` Set `silence,` and `the eternal.` in italic Instrument Serif and `#6F6F6F`; all other words regular Instrument Serif in `#000000`.
- Body: `Building platforms for brilliant minds, fearless makers, and thoughtful souls. Through the noise, we craft digital havens for deep work and pure flows.`
- Hero CTA: `Begin Journey`. Both CTAs use the same destination and label; the header instance is compact, while the hero instance is the dominant action.

Use a `100dvh` minimum hero. Keep header above the centered content, then center the headline/body/CTA as one narrow vertical stack with deliberate negative space. Keep the body measure near 60–70 characters on desktop and comfortably narrower on mobile. Do not force decorative line breaks; use balanced wrapping and verify the intended italic phrases remain coherent.

The video layer starts exactly `300px` from the viewport top, spans the remaining hero, and sits behind content. Reserve its geometry before load to prevent layout shift. Use `object-fit: cover` with a stable focal point; never stretch footage.

## Responsive Behavior

| Viewport | Layout guidance |
|---|---|
| 375px | 20px side gutters. Logo left; a 44×44px menu trigger followed by compact `Begin Journey` in the right action cluster. Keep the second CTA in the hero. Collapse the five links into the menu; do not hide either CTA. Headline about 48–60px with tight but readable leading; body at least 16px. Video still begins at 300px and the gradient protects any text/video overlap. |
| 768px | 32px gutters. Retain compact navigation if five links plus CTA would crowd; otherwise expose links only when every item fits without compression. Center content within roughly 680–720px. Headline about 72–84px; increase vertical breathing room without shifting the 300px video origin. |
| 1440px | 48–64px gutters. Show full horizontal navigation with CTA at the far right. Center content within roughly 900–960px. Headline about 96–112px; keep body within roughly 640–700px so the composition remains editorial rather than banner-like. |

Use fluid type/spacing between these checks, safe-area insets for the header, and no horizontal overflow. On short mobile landscapes, allow vertical page scroll instead of clipping content.

## Video, Gradient & Loop

Place a white-to-transparent vertical gradient above the video and below the content. Its upper region must read as the white hero surface, then dissolve gradually into footage; avoid a visible seam at 300px. Test the brightest and darkest frames: black body/navigation text must remain at least 4.5:1, and large headline/UI boundaries at least 3:1. `#6F6F6F` is acceptable on solid white but can fail over footage; raise the white overlay opacity behind those words rather than adding shadows or changing the mandated color.

Manual loop behavior:

1. Start muted and inline; keep opacity at 0 until media can play.
2. On playback, fade opacity in over 0.5s using opacity only.
3. When about 0.5s remains, fade opacity out over 0.5s while the final frames complete.
4. After the end, keep opacity at 0, wait 100ms, seek to the start, restart playback, then fade in over 0.5s.
5. Do not use the native `loop` attribute. Prevent overlapping timers/listeners and clean them up when the hero unmounts.

For `prefers-reduced-motion: reduce`, do not autoplay or repeat fades; show the poster/still frame with the same gradient and fully functional CTAs. Video is decorative: keep it muted and out of the accessibility tree.

If the video cannot load or autoplay is rejected, retain the reserved media area and gradient, display the defined poster/still, and keep all copy/actions usable. Do not expose a broken-media icon or shift the layout. An opaque white fallback is acceptable when no poster asset exists.

## Interaction & Accessibility

- Use semantic links for destinations and a semantic button for the menu. DOM/tab order must follow logo → nav/menu → header CTA → hero content → hero CTA.
- Menu trigger exposes an accessible name plus expanded state. Escape closes the menu and returns focus to its trigger; keep focus contained if the menu is modal.
- All pointer targets are at least 44×44px with at least 8px separation. Provide hover, pressed, and keyboard-focus states without layout movement.
- Use a visible `:focus-visible` treatment. On the black CTA, use a white inner separation plus black outer ring so focus remains visible against both white and video.
- Preserve browser zoom and a single semantic H1. Decorative video has no competing announcement. The logo superscript must remain readable without affecting line height.
- Load only required Instrument Serif/Inter variants with `font-display: swap`; reserve compatible metrics and verify Vietnamese diacritics render without missing glyphs.

## Visual QA Checklist

- [x] At 375px, logo, compact header CTA, and 44×44px menu trigger fit without overlap; hero CTA remains visible.
- [x] At 768px, nav changes only when space permits; centered hierarchy and line wrapping stay intentional.
- [x] At 1440px, all five nav links and header CTA align cleanly; hero does not become too wide.
- [x] Copy matches exactly, with no eyebrow/additional text; `silence,` and `the eternal.` alone are italic gray.
- [x] `Aethera®` uses a correctly aligned superscript and does not jump during font load.
- [x] Video begins at 300px at all three widths, covers without distortion, and causes no layout shift.
- [x] Gradient has no hard seam; contrast passes on representative darkest, brightest, and highest-detail frames.
- [x] Manual loop visibly performs 0.5s in, 0.5s out, and 100ms restart delay with no flash or duplicate playback.
- [x] Reduced-motion shows a stable still with no autoplay/fade loop; video failure leaves a polished usable hero.
- [x] Keyboard traversal, Escape/return-focus, hover/pressed states, focus visibility, 44px targets, and touch spacing pass.
- [x] Mobile portrait/landscape use safe areas, allow zoom, and show no clipped text or horizontal scroll.

## Unresolved Questions

None.
