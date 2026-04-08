# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/section-header.png` (hero is visible in this screenshot)
- **Interaction model:** Time-driven slideshow (auto-rotates) + click navigates to brand sections

## DOM Structure
```
div#shopify-section-top-page.index-section
  div.top-page (CSS grid 3 cols × 2 rows)
    div#movieArea.top-page__movie (col 1, spans 2 rows, 50% width)
      a (clickable, full area)
        div.cover.main-cover (position:absolute, z-index:4, black, opacity:0)
        h2.top-page__movie--title "NEW ARRIVALS" (position:absolute, top:20, right:20, white, 62px)
        ul.top_slideshow (4 li.slideli.image — each full size, background-size:cover)
        [bottom-left caption: "NEIGHBORHOOD | INFINITE ARCHIVES"]
        [bottom-right: "VIEW MORE" span]
    div.top-page__brands.top-page__neighborhood (col 2, spans 2 rows)
      a
        div.cover (white, opacity:0)
        h2.top-page__title "NEIGHBORHOOD" (33px uppercase)
        div.pc
          p.top-page__neighborhood--desc "NEIGHBORHOOD founded in 1994..."
        span.top-page__viewmore "VIEW MORE"
    div.top-page__brands.top-page__srl (col 3, row 1)
      a
        div.cover (white, opacity:0)
        h2.top-page__title "SRL" (gray rgb(204,204,204))
        span.top-page__viewmore "VIEW MORE"
    div.top-page__brands.top-page__one-third (col 3, row 2)
      a
        div.cover (white, opacity:0)
        h2.top-page__title "ONE THIRD <small>(kids)</small>"
        span.top-page__viewmore "VIEW MORE"
```

## Computed Styles (exact values from getComputedStyle)

### div.top-page (grid container)
- display: grid
- grid-template-columns: 712.5px 356.25px 356.25px  →  use `50% 25% 25%`
- grid-template-rows: 389.5px 389.5px  →  use `50vh 50vh` or fixed heights
- height: 779px  →  use `calc(100vh - 50px)` or fixed 779px
- position: relative
- At 1440px wide: columns are exactly 50/25/25

### #movieArea.top-page__movie
- grid-column: 1
- grid-row: 1 / span 2
- display: block
- width: 712.5px (50%)
- height: 779px
- background-color: rgb(0, 0, 0)
- position: relative
- overflow: hidden
- border-right: 1px solid rgb(221, 221, 221)

### div.cover.main-cover (inside movieArea)
- position: absolute
- inset: 0
- z-index: 4
- background-color: rgb(0, 0, 0)
- opacity: 0
- width: 100%
- height: 100%

### ul.top_slideshow
- position: relative
- width: 100%
- height: 100%
- background: rgb(255, 255, 255)
- list-style: none

### li.slideli.image (each slide)
- position: absolute
- inset: 0
- background-size: cover
- background-position: 50% 0%
- transition: all 1.3s ease-out
- opacity controlled by JS (active slide visible, others opacity:0 or z-index lower)

### Slide images (background-image URLs):
- Slide 1: `/images/hero-slide-01.jpg`
- Slide 2: `/images/hero-slide-02.jpg`
- Slide 3: `/images/hero-slide-03.jpg`

### h2.top-page__movie--title "NEW ARRIVALS"
- position: absolute
- top: 20px
- right: 20px
- z-index: 3
- color: rgb(255, 255, 255)
- font-family: HelveticaLTWXX-BoldCond (same body font)
- font-size: 62px
- font-weight: 400
- letter-spacing: -3.1px
- text-transform: uppercase
- width: ~71px (narrow container forces vertical text stacking)
- writing-mode: horizontal-tb (not vertical — just narrow column)
- line-height: 1

### Bottom caption (inside movieArea, position absolute bottom-left)
- position: absolute
- bottom: 17px
- left: 17px
- z-index: 3
- color: rgb(255, 255, 255)
- font-size: 13px
- text: "NEIGHBORHOOD | INFINITE ARCHIVES"

### "VIEW MORE" (inside movieArea, position absolute bottom-right)
- position: absolute
- bottom: 17px
- right: 19px
- z-index: 3
- color: rgb(255, 255, 255)
- font-size: 13px
- text: "VIEW MORE"

### .top-page__brands.top-page__neighborhood (NEIGHBORHOOD panel)
- grid-column: 2
- grid-row: 1 / span 2
- display: block
- width: 356px (25%)
- height: 779px
- background: rgb(255, 255, 255)
- position: relative
- border-right: 1px solid rgb(221, 221, 221)
- overflow: hidden

### h2.top-page__title (NEIGHBORHOOD)
- font-size: 33px
- font-weight: 400
- letter-spacing: -1.65px
- text-transform: uppercase
- color: rgb(34, 34, 34)
- padding: 21px 21px 0px

### p.top-page__neighborhood--desc
- font-size: 13px
- color: rgb(170, 170, 170)
- padding: 0px 35px 0px 20px

### .top-page__brands.top-page__srl
- grid-column: 3
- grid-row: 1
- display: block
- width: 356px (25%)
- height: 389.5px (50% of total)
- background: rgb(255, 255, 255)
- border-bottom: 1px solid rgb(221, 221, 221)
- position: relative

### h2.top-page__title (SRL)
- Same sizing as above
- color: rgb(204, 204, 204)  ← NOTE: gray, not dark

### .top-page__brands.top-page__one-third
- grid-column: 3
- grid-row: 2
- display: block
- width: 356px (25%)
- height: 389.5px
- background: rgb(255, 255, 255)
- position: relative

### h2.top-page__title (ONE THIRD)
- font-size: 33px
- color: rgb(34, 34, 34)
- small tag: font-size ~16px, same color

### span.top-page__viewmore
- display: block
- position: absolute
- bottom: 17px
- right: 19px
- font-size: 13px
- color: rgb(34, 34, 34)
- text: "VIEW MORE"

### div.cover (brand panel hover overlay)
- position: absolute
- inset: 0
- background: rgb(255, 255, 255)
- opacity: 0
- z-index: 4
- transition: opacity 0.3s ease
- On hover → opacity: 0.15 (slight white flash)

## States & Behaviors

### Slideshow auto-rotation
- **Trigger:** time-driven, every ~4 seconds
- **Mechanism:** JS cycles z-index or opacity of li.slideli elements
- **Transition:** all 1.3s ease-out on each li
- **Implementation:** useEffect with setInterval, cycle through slides 0→1→2→3→0

### Cover hover on brand panels
- **Trigger:** hover on .top-page__brands
- **State A:** .cover opacity: 0
- **State B:** .cover opacity: 0.15
- **Transition:** opacity 0.3s ease

### Click behavior
- All panels link to their respective collections (use # for clone)

## Assets
- `/images/hero-slide-01.jpg` — main hero photo
- `/images/hero-slide-02.jpg`
- `/images/hero-slide-03.jpg`

## Text Content (verbatim)
- "NEW ARRIVALS" (rotated/stacked title)
- "NEIGHBORHOOD | INFINITE ARCHIVES" (bottom left)
- "VIEW MORE" (bottom right)
- "NEIGHBORHOOD" (brand panel heading)
- "NEIGHBORHOOD founded in 1994 in Harajuku Tokyo. \"Craft with Pride\"." (description)
- "SRL" (gray)
- "ONE THIRD" + "(kids)" in small tag

## Responsive Behavior
- **Desktop (1440px):** 3-column CSS grid, full 779px height
- **Mobile (390px):** Single column stack — slideshow takes full width, brand panels stack below
- **Breakpoint:** ~768px — grid collapses to column layout

## Implementation Notes
- Use `'use client'` directive for the slideshow (requires useState + useEffect)
- Import Image from next/image for slide images (use fill + objectFit cover)
- The "NEW ARRIVALS" title uses a narrow fixed-width container so the text naturally wraps vertically — no writing-mode needed
- Grid: `grid-template-columns: 50% 25% 25%` at desktop, stack at mobile via responsive classes
