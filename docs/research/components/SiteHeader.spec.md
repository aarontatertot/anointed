# SiteHeader Specification

## Overview
- **Target file:** `src/components/SiteHeader.tsx`
- **Screenshot:** `docs/design-references/section-header.png`
- **Interaction model:** Static layout + hover dropdown for BRANDS/CATEGORIES + mobile drawer

## DOM Structure
```
section.global-header (fixed, full width, z-index 10)
  header (flex row, 50px tall)
    h1 (logo wrapper, 192px wide, flex center)
      a.logo-image → img (neighborhood-logo.svg, 172px × 26px)
    div.global-header-search-form (flex row center, ~589px, padding 0 20px)
      form.header-search-form (flex row, 40px tall)
        button[type=submit] → img (search-icon.svg, 11×14)
        input#HeaderSearch (full width, no border)
    nav (flex row, ~644px, right-aligned)
      [DESKTOP LINKS: BRANDS (dropdown), CATEGORIES (dropdown), COLLECTION, LOOK, DEALERS | LOGIN | CART(0)]
      [MOBILE: hamburger #spNavTrigger]
```

## Computed Styles (exact values from getComputedStyle)

### section.global-header
- display: block
- position: fixed
- top: 0
- width: 100%
- height: 50px
- background-color: rgb(255, 255, 255)
- border-bottom: 1px solid rgb(221, 221, 221)
- z-index: 10

### header (flex container inside)
- display: flex
- flex-direction: row
- align-items: stretch
- width: 100%
- height: 49px

### h1 (logo)
- display: flex
- align-items: center
- width: 192px
- height: 49px
- padding: 6px 10px 0px
- font-family: Helvetica, Arial, sans-serif
- font-size: 26px
- font-weight: 700

### a.logo-image
- display: block
- width: 172px
- height: 32px

### img (logo SVG)
- width: 172px
- height: ~26px

### div.global-header-search-form
- display: flex
- flex-direction: row
- align-items: center
- flex: 1
- padding: 0px 20px
- height: 49px

### form.header-search-form
- display: flex
- flex-direction: row
- align-items: center
- width: 100%
- height: 40px

### search button
- display: block
- width: 11px
- height: 40px
- padding: 3px 0 0

### input#HeaderSearch
- display: block
- flex: 1
- height: 40px
- padding: 0 6px
- background: rgb(255, 255, 255)
- color: rgb(34, 34, 34)
- font-family: same as body
- font-size: 13px
- border: none
- outline: none

### nav (desktop links)
- display: flex
- flex-direction: row
- align-items: center
- height: 49px
- font-size: 13px

### Nav links (BRANDS, CATEGORIES, COLLECTION, LOOK, DEALERS)
- display: inline-block
- padding: 0 15px (approximately)
- height: 49px
- line-height: 49px
- color: rgb(34, 34, 34)
- font-size: 13px
- text-transform: none
- cursor: pointer

### Separator between DEALERS and LOGIN
- `|` character or border-left: 1px solid rgb(221, 221, 221)
- margin: 0 10px

### LOGIN, CART(0)
- Same as nav links
- padding: 0 10px

### Dropdown (BRANDS / CATEGORIES)
- position: absolute
- top: 50px (below header)
- background: white
- border: 1px solid rgb(221, 221, 221)
- padding: 10px 0
- z-index: 20
- visibility: hidden by default → visible on hover
- min-width: 160px

### Dropdown items
- display: block
- padding: 5px 20px
- font-size: 13px
- color: rgb(34, 34, 34)
- white-space: nowrap

## States & Behaviors

### Default state
- White background, 50px tall, fixed at top
- Logo SVG on left, search bar in middle, nav links on right

### Dropdown hover (BRANDS, CATEGORIES)
- **Trigger:** hover on BRANDS or CATEGORIES nav item
- **State A:** dropdown hidden (display:none or visibility:hidden)
- **State B:** dropdown visible
- **Transition:** instant (no animation observed)
- **BRANDS children:** ALL BRANDS, NEIGHBORHOOD, SRL, ONE THIRD(KIDS)
- **CATEGORIES children:** JACKETS, SHIRTS, KNIT / CUT SEWN, T-SHIRTS, BOTTOMS, HEADWEAR / BAGS, ACCESSORIES

### Mobile (< 768px)
- Hide all desktop nav links
- Show hamburger icon (#spNavTrigger, 3 bars)
- Hamburger click opens .drawer (full-screen overlay)

## Assets
- Logo: `/images/neighborhood-logo.svg`
- Search icon: `/images/search-icon.svg`
- Cart icon: `/images/cart.svg`
- Menu close: `/images/menu-close.svg`

## Text Content (verbatim)
Nav items: BRANDS | CATEGORIES | COLLECTION | LOOK | DEALERS | LOGIN | CART(0)
BRANDS dropdown: ALL BRANDS, NEIGHBORHOOD, SRL, ONE THIRD(KIDS)
CATEGORIES dropdown: JACKETS, SHIRTS, KNIT / CUT SEWN, T-SHIRTS, BOTTOMS, HEADWEAR / BAGS, ACCESSORIES

## Responsive Behavior
- **Desktop (1440px):** Full layout — logo + search + nav links
- **Mobile (390px):** Logo + hamburger only, search hidden; drawer slides in on hamburger click
- **Breakpoint:** ~768px (`.pc` class = desktop only, `.sp` class = mobile only)

## Implementation Notes
- Use `<Image>` from next/image for logo and icons
- Wrap nav links in `position: relative` container for dropdown positioning
- The search form action="/en/search" — for clone purposes, make it non-functional (or link to "#")
- Cart shows "(0)" count — static for clone
- Use `next/link` `<Link>` for all nav links
