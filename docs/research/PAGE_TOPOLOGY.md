# PAGE_TOPOLOGY.md — neighborhood.jp/en

## Overall Layout
- `html` bg: `rgb(255, 255, 255)`
- `body#neighborhood.template-index.light`
- `#app` wrapper div → contains all page content
- Page flow: Header (fixed overlay) → Hero → ProductGrid → Footer
- No scroll-snap on body
- No smooth scroll library detected (standard browser scroll)
- Back-to-top button (`.progress-wrap.light.active-progress`) fixed bottom right, SVG circle progress

---

## Section Map (top to bottom)

### 1. SiteHeader — `section.global-header` (FIXED OVERLAY)
- **Position**: `fixed`, `top: 0`, `z-index: 10`
- **Height**: 50px
- **Background**: white (`#fff`), `border-bottom: 1px solid #dddddd`
- **Layout**: `display: flex`, 3 main regions:
  - `h1` (logo): 192px wide, logo SVG `neighborhood-logo.svg`
  - `.global-header-search-form`: ~589px, search input + submit button
  - `nav`: ~644px, contains: hamburger (mobile), BRANDS dropdown, CATEGORIES dropdown, COLLECTION, LOOK, DEALERS, separator, LOGIN, CART(0)
- **Interaction**: dropdowns on BRANDS/CATEGORIES hover; hamburger on mobile

### 2. HeroSection — `#shopify-section-top-page.index-section`
- **Position**: static (pushed down by 50px header)
- **Height**: 779px (desktop)
- **Display**: CSS grid, `grid-template-columns: 712.5px 356.25px 356.25px`, `grid-template-rows: 389.5px 389.5px`
- **Sub-sections**:
  - `#movieArea.top-page__movie` — col 1, spans 2 rows, 712×779px
    - Auto-rotating slideshow (4 images, 1.3s CSS transition)
    - "NEW ARRIVALS" absolute title (right edge, white text, 62px, tight letter-spacing)
    - "VIEW MORE" bottom-right label
    - Caption bar bottom-left: "NEIGHBORHOOD | INFINITE ARCHIVES"
  - `.top-page__neighborhood` — col 2, spans 2 rows, 356×779px
    - Brand name "NEIGHBORHOOD" (33px, uppercase)
    - Description: "NEIGHBORHOOD founded in 1994 in Harajuku Tokyo. 'Craft with Pride'."
    - `.cover` overlay (white, opacity:0 → hover transition)
  - `.top-page__srl` — col 3 row 1, 356×390px
    - Brand name "SRL" (gray text, `color: rgb(204,204,204)`)
    - `.cover` overlay
  - `.top-page__one-third` — col 3 row 2, 356×390px
    - "ONE THIRD (kids)" brand name
    - `.cover` overlay
- **Borders**: `1px solid #dddddd` between columns/rows

### 3. ScrollIndicator — bottom fixed bar
- **Position**: fixed bottom
- **Height**: ~71px
- **Content**: repeating "SCROLL" text with vertical decorators
- **Background**: `url(scroll_bg_small.png)` tiled

### 4. ProductGrid — `#shopify-section-1581045703226`
- **Position**: static
- **Layout**: `.collection-list` flex row, flex-wrap
- **Section header**: "NEW ARRIVALS" label + hr divider
- **Cards**: 4 per row at desktop, 2 per row at mobile
  - Each card: padding 30px 30px 10px, border-bottom 1px #dddddd
  - Image wrapper: padding-top 141% (aspect ratio), primary + hover img
  - Labels: collaboration, brand (gray 11px), title (13px), price, sold-out badge
- **Pagination**: PREV / 1 2 3 ... N / NEXT

### 5. SiteFooter — `footer#footer.site-footer`
- **Position**: relative
- **Height**: ~208px
- **Layout**: 
  - `.footer-list` (flex row, border-top + border-bottom 1px #dddddd, padding 45px 30px 35px)
    - 6 columns of links: HOME/BRANDS, CATEGORIES, COLLECTION/LOOK/DEALERS, social icons, newsletter form
  - Copyright bar below

---

## Z-Index Layers
1. `SiteHeader`: z-index 10 (fixed, always on top)
2. `ScrollIndicator`: fixed bottom (z-index unknown, ~5)
3. `#movieArea .cover.main-cover`: z-index 4 (within hero)
4. `h2.top-page__movie--title`: z-index 3
5. All other content: static (z-index auto)

---

## Dependencies
- SiteHeader must be built first (used on every page)
- Hero section requires 4 slideshow images downloaded to public/
- Product grid requires product data (use mock data)
- Footer can be built independently
