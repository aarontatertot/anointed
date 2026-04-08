# BEHAVIORS.md — neighborhood.jp/en

## Interaction Model Summary

| Section | Interaction Model |
|---------|------------------|
| Header | Scroll-triggered (bg/shadow change), hover dropdowns for BRANDS/CATEGORIES |
| Hero Slideshow | Time-driven (auto-rotates every few seconds via JS) |
| Hero Brand Panels | Static (click → scrollhere JS to product collection) |
| Scroll Indicator | Fixed at bottom of viewport, always visible |
| Product Grid | Hover image swap (secondary image revealed on hover) |
| Pagination | Click-driven |
| Footer | Static |

---

## Header Behaviors

### Fixed position
- `section.global-header` is `position: fixed`, `z-index: 10`, width: 100%
- Background: `rgb(255, 255, 255)` (white) always — no scroll-triggered color change observed
- Border bottom: `1px solid rgb(221, 221, 221)` always visible
- Height: 50px

### Nav Dropdowns (BRANDS, CATEGORIES)
- BRANDS and CATEGORIES have dropdown submenus (`.have-child` + `.footer-list-item__child` pattern in nav)
- Dropdown appears on hover — test confirms click/hover reveals child ul
- No transition animation observed (instant show/hide via display)

### Mobile hamburger
- `.sp-nav-button` with `<span>` bars triggers `.drawer` (display:none → block)
- Drawer covers full viewport

---

## Hero Section Behaviors

### Slideshow (time-driven)
- Left panel `#movieArea` contains `ul.top_slideshow` with 4 `li.slideli.image`
- Each `li` has `position: absolute`, `background-size: cover`, `transition: all 1.3s ease-out`
- Auto-rotates via custom JS — interval not extracted but visually ~4s per slide
- Slides: 4 images from Shopify CDN

### "NEW ARRIVALS" title
- `h2.top-page__movie--title` positioned absolute, `top: 20px`, `right: 20px` (left: 620px at 1440w)
- `font-size: 62px`, `letter-spacing: -3.1px`, `text-transform: uppercase`, `color: white`
- Width: 71px, height: 358px — the text renders vertically because the h2 is narrow and text wraps vertically
- Writing-mode appears to be default (horizontal-tb) but the container is narrow forcing vertical stacking

### "VIEW MORE" + bottom caption
- `span.top-page__viewmore` `position: absolute`, `bottom: 17px`, `right: 19px`, `font-size: 13px`
- Caption at bottom left: "NEIGHBORHOOD | INFINITE ARCHIVES" (overlay text from slideshow JS)

### Cover div (hover/click overlay)
- Each panel has `.cover` div with `position: absolute`, `z-index: 4`, `opacity: 0`
- On hover, `opacity` transitions to something visible — creates darkening effect
- Movie cover: black bg, brand covers: white bg

### Brand Panels
- All three panels are clickable links (`scrollhere()` JS to scroll to brand section)
- No background images — the visual appearance in the screenshot shows:
  - NEIGHBORHOOD panel: white bg, bold brand name + description text
  - SRL panel: white bg, gray text
  - ONE THIRD panel: white bg, bold black text

---

## Scroll Indicator (Bottom Fixed Bar)
- Fixed at bottom of viewport, full width
- Contains repeating "SCROLL" text with vertical lines on each side
- Background: `url(scroll_bg_small.png)` tiled
- Height: ~71px visible at bottom
- Always present while on hero section

---

## Product Grid Behaviors

### Image hover swap
- Each `.collection-list-item` contains two images:
  - `.product__image` (primary, visible)
  - `.product__image.hidden` (secondary, position:absolute, hidden by default)
- On hover: secondary image appears (via JS class toggle or CSS)
- `.overlay` div with `background: rgb(245,245,245)`, position:absolute for loading state

### Sold out styling
- When sold out: product type, title, price ALL use `color: rgb(170,170,170)` (muted gray)
- `span.product-label` (e.g. "SOLD OUT") positioned absolute `right: 15px`, `bottom: 24px`, `color: rgb(170,170,170)`
- Available products: use `color: rgb(34,34,34)` for title/price

### Animation on scroll
- Cards have class `slide-up-animation animated` — fade/slide up as they enter viewport
- Triggered by intersection observer or scroll listener

---

## Responsive Behavior

### Desktop (1440px)
- Header: full width, 4 nav items visible + login/cart
- Hero: 3-column grid (712px + 356px + 356px), 2 rows (390px each)
- Product grid: flex-wrap with ~4 cards per row (each card ~25% width minus padding)

### Mobile (390px)
- Header: logo on left, hamburger menu on right, search hidden
- Hero: hero image takes ~60% height, brand panels stack below
- Product grid: 2 columns (`.small--one-half` class)

### Breakpoint
- Major layout change around 768px (`.pc` class hides on mobile, `.sp` shows)
