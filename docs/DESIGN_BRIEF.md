# DESIGN_BRIEF.md — Visual direction (rev. 3, DRAFT for approval)

## Canva PDF findings (10 pages, 1440×810) [VERIFIED]
Flat charcoal (#242424 sampled), off-white text, desaturated photography. Aileron (Bold/Regular). Huge tightly tracked headings with ~0.85 line-height; persistent top bar (white label box + links + date); hero/closing slides = full-bleed image with type bleeding off the edges; inner slides = giant heading + 3-column text row + asymmetric edge-to-edge images; project slides = 40/60 image vs. headline + caption.

## Keep / adapt
| Keep | Adapt |
|---|---|
| #242424 charcoal, off-white text | Add restrained teal (options below) |
| Aileron 400/700, oversized headings | `clamp()` sizing; bleed-off-edge only ≥1024px, decorative; all words fully visible on mobile |
| Label-box nav | Wordmark "Mariam Hegazy" in the label; date slot → static "Cairo, Egypt" |
| Edge-to-edge imagery, no frames | Project screenshots instead of fashion photography |
| 3-column text rows | Experience / skills groups |
| Justified body | Left-aligned body (readability) |
| Hero photo | Typography-led hero (no portrait required) |

## Palette options (contrast measured on #242424)
Fixed: bg `#242424` · surface `#2E2E2E` · text `#EAEAEA` (12.9:1) · muted `#A8A8A8` (6.5:1) · hairline `rgba(234,234,234,.14)`.
| Option | Accent | Contrast on bg | Character | Notes |
|---|---|---|---|---|
| A. Mint | `#5EEAD4` | 10.5:1 | Bright, techy | Most visible; risks feeling "neon" against a dark editorial look. Dark text on it is also 10.5:1 |
| B. Sea teal (recommended) | `#2DB8A6` | 6.3:1 | Balanced | Passes AA for text and focus rings; echoes the teal glasses/hat in the reference photos. Dark text on it 6.3:1 |
| C. Quiet teal | `#6FB3AA` | 6.4:1 | Muted, premium | Closest to monochrome; accent reads as a tint, may feel weak for focus/CTA |
| D. Deep teal (rejected for text) | `#1F8F84` | 3.9:1 | Rich | Fails 4.5:1 for small text; only usable for large graphics |
Where the accent appears (any option): focus ring, link hover/underline, active nav indicator, primary CTA hover, the scroll-progress line, one word in the hero. Never as a background wash. Mono-only fallback: remove the accent, use off-white underlines.
Decision needed: A, B, C or mono-only. I recommend B.

## Page structure
1. **Nav** (sticky label box + links + Contact CTA; keyboard menu on mobile)
2. **Hero** typography-led (below)
3. **About** (3-column text row, concise, real facts only)
4. **Selected Work**: 3 editorial split rows (40/60 image vs. giant title + caption), each linking to `/projects/[slug]` case study
5. **Landing Pages gallery** (below)
6. **More Projects** compact list: Blog App · HR Management System · AI Chat Assistant (title, stack, one line, links)
7. **Experience & Education** (3 columns like the Canva "Work Experience" slide)
8. **Skills** grouped, no bars
9. **Contact + footer**: closing slide echo ("Let's talk"), email, form, CV download (no phone)

## Landing Pages gallery layout (image-led)
- Giant "Landing Pages" heading, counter "01 / 0N".
- Desktop ≥1024px: left sticky index (01…0N with names only when approved), right a stack of full-bleed rows. Each row: one large desktop screenshot bleeding off the right edge (16:10 fixed ratio) plus a smaller mobile crop (9:19) overlapping its corner; below, a 4-field caption: *Purpose · Stack · My role · Link*. Scroll-linked: the active index number and a thin teal progress line follow the row in view (transform/opacity only).
- Tablet/mobile: no sticky; rows stack, desktop shot full width, mobile crop beneath it.
- Approved-name vs. withheld: caption shows "Client project — name withheld" when only screenshots are approved. Unapproved entries do not render. No placeholders.

## Hero composition and motion strategy
- **Layout:** the Canva cover, translated: two stacked giant lines "Frontend / Developer" in Aileron Bold, tracking −0.04em, line-height 0.85, bleeding slightly off the left/right edges on ≥1024px. Top: label-box nav. Bottom-right: a 2-line intro (real, short) + two CTAs: "View projects" and "Download CV". "Cairo, Egypt" in the date slot.
- **Background (no portrait):** three treatments, pick one:
  1. *Type only* on flat charcoal with a faint CSS grain. Cheapest, safest.
  2. *Masked type* (recommended signature): the word "Developer" is a text mask through which approved project screenshots slowly crossfade. Needs approved visuals; falls back to option 1 until then.
  3. *Spotlight*: a soft teal-tinted radial light following the pointer (fine pointers only; static on touch/reduced motion).
- **Motion:** headline words reveal with a masked slide-up (once, ~0.8 s total, content readable immediately); on scroll, the two lines drift apart horizontally while the next section rises (Motion `useScroll` + `useTransform`, transform only); section headings reveal once; project images unmask on entry; nav active indicator via IntersectionObserver; thin teal progress line. Sticky/pinned choreography only ≥1024px and ≥700px tall.
- **Reduced motion / low power:** no drift, no mask animation, instant states, no pointer light.
- **Performance guards:** no continuous blur, no large DOM animation, no scroll listeners that set React state each frame, images with fixed ratios, Aileron 400/700 only via `next/font/local`.

## Tokens
`clamp()` scale: display `clamp(3.5rem, 14vw, 13rem)`; H2 `clamp(2.5rem, 8vw, 7rem)`; body 1.0625–1.25rem, line-height 1.5, max 68ch. 12-column grid, 80px margins desktop / 20px mobile; breakpoints 640 / 1024 / 1440. Radius 0, no shadows, 1px hairlines only.

## Risks
320px screens vs. giant type; light-UI screenshots on charcoal with no frames (check legibility); Aileron licence file to be confirmed at download; masked-type hero depends on approved screenshots.
