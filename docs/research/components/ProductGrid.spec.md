# ProductGrid Specification

## Overview
- **Target file:** `src/components/ProductGrid.tsx`
- **Screenshot:** `docs/design-references/neighborhood-desktop-1440-full.png` (scroll to products section)
- **Interaction model:** Static grid + hover image swap

## DOM Structure
```
div#shopify-section-1581045703226
  [hr.medium-up--hide — hidden on desktop]
  div.collection-list (flex row, flex-wrap, 4 cards per row)
    div.collection-list-item.product.grid__item.medium-up--one-third.small--one-half (×N)
      a.product__image-wrapper (padding-top 141% for aspect ratio, relative)
        div.reveal (relative)
          img.product__image (primary, width:100%)
          img.product__image.hidden (secondary, position:absolute, hidden)
          div.overlay (position:absolute, bg:rgb(245,245,245), z-index:0)
        span.product-collaboration (optional, position:absolute, top-left area)
        span.product-label (optional, position:absolute bottom-right, e.g. "SOLD OUT")
      p.product-type (brand name, gray 11px)
      p.product-title (product name, 13px)
      p.product-price (price, flex row)
        span → price text + small currency
        span.product-label (if sold out / label)
  [pagination]
    div.pagination
      div.pagination-prev → span.prev.active "PREV"
      div.pagination-number → multiple page number links
      div.pagination-next → a "NEXT"
```

## Computed Styles (exact values from getComputedStyle)

### div.collection-list
- display: flex
- flex-direction: row
- flex-wrap: wrap
- width: 100%
- height: auto
- margin-bottom: -1px

### div.collection-list-item (each card)
- display: block
- width: 25%  (medium-up--one-third = 1/4 of flex container at desktop; 4 per row)
- min-height: 320px
- padding: 30px 30px 10px
- border-bottom: 1px solid rgb(221, 221, 221)
- border-right: 1px solid rgb(221, 221, 221)
- position: relative
- font-family: HelveticaLTWXX-BoldCond (same as body)
- font-size: 13px
- color: rgb(34, 34, 34)
- NOTE: Every 4th card has no right border (or the grid handles this via negative margin)

### a.product__image-wrapper
- display: block
- position: relative
- padding-top: 141.474% (aspect ratio 0.707:1 — approx 3:4)

### div.reveal
- position: relative
- margin-bottom: 12px

### img.product__image (primary)
- display: block (or inline)
- width: 100%
- height: auto
- position: static

### img.product__image.hidden (hover)
- display: block
- width: 100%
- height: auto
- position: absolute
- top: 0
- left: 0
- opacity: 0 (hidden by default)
- transition: opacity 0.3s ease on hover

### div.overlay
- position: absolute
- inset: 0
- background: rgb(245, 245, 245)
- z-index: 0
- (used as loading placeholder)

### span.product-collaboration (optional tag, e.g. "INFINITE ARCHIVES")
- display: block
- position: absolute
- left: 0  (or padding-left: 40px from card edge)
- font-size: 13px
- color: rgb(34, 34, 34)

### p.product-type (brand label e.g. "NEIGHBORHOOD")
- display: block
- font-size: 11px
- color: rgb(170, 170, 170)
- margin-bottom: 4px

### p.product-title
- display: block
- font-size: 13px
- color: rgb(34, 34, 34) if available, rgb(170, 170, 170) if sold out
- margin-bottom: 3px

### p.product-price
- display: flex
- flex-direction: row
- align-items: flex-end
- font-size: 13px
- color: rgb(34, 34, 34) if available, rgb(170, 170, 170) if sold out
- margin-bottom: 13px

### span.product-label "SOLD OUT" (absolute badge)
- display: block
- position: absolute
- right: 15px
- bottom: 24px
- font-size: 13px
- color: rgb(170, 170, 170)

## States & Behaviors

### Hover: image swap
- **Trigger:** hover on .collection-list-item
- **State A:** img.product__image visible, img.product__image.hidden opacity:0
- **State B:** img.product__image.hidden opacity:1 (or display swap)
- **Transition:** opacity 0.3s ease (or instant display swap)
- **Implementation:** CSS hover on the card toggles the hidden img visibility

### Scroll into view animation
- **Trigger:** intersection observer (element enters viewport)
- **Effect:** slide-up from bottom (translateY 20px → 0, opacity 0→1)
- **Duration:** 0.4s ease
- **Implementation:** useEffect with IntersectionObserver, or CSS animation class

## Mock Product Data (verbatim from site)

```typescript
const products = [
  {
    id: '1', handle: '261aqian-shm01s',
    collaboration: 'INFINITE ARCHIVES',
    brand: 'NEIGHBORHOOD',
    title: 'NH X INFINITE ARCHIVES . SAVAGE HOMBRE CHECK SHIRT LS',
    price: '$362.00',
    image: '/images/products/252AQIAN-SHM01S_01.jpg',
    hoverImage: '/images/products/252AQIAN-SHM01S_02.jpg',
    soldOut: true,
    label: 'SOLD OUT',
  },
  {
    id: '2', handle: '252fpian-csm02s',
    brand: 'NEIGHBORHOOD',
    title: 'NEIGHBORHOOD . INFINITE ARCHIVES . CUT SEW LS',
    price: '$174.00',
    image: '/images/products/252FPIAN-CSM02S_01.jpg',
    hoverImage: '/images/products/252FPIAN-CSM02S_03.jpg',
    soldOut: false,
  },
  {
    id: '3', handle: '252fpian-csm01s',
    brand: 'NEIGHBORHOOD',
    title: 'NEIGHBORHOOD . INFINITE ARCHIVES . CUT SEW LS',
    price: '$158.00',
    image: '/images/products/252FPIAN-CSM01S_01.jpg',
    hoverImage: '/images/products/252FPIAN-CSM01S_03.jpg',
    soldOut: false,
  },
  {
    id: '4', handle: '252ygian-ht01s',
    brand: 'NEIGHBORHOOD',
    title: 'NEIGHBORHOOD . INFINITE ARCHIVES . CAP',
    price: '$46.00',
    image: '/images/products/252YGIAN-HT01S_01.jpg',
    hoverImage: '/images/products/252YGIAN-HT01S_02.jpg',
    soldOut: false,
  },
  {
    id: '5', handle: '261spnh-jkm06',
    brand: 'NEIGHBORHOOD',
    title: 'NEIGHBORHOOD . RIDER JKT',
    price: '$556.00',
    image: '/images/products/261SPNH-JKM06_01.jpg',
    hoverImage: '/images/products/261SPNH-JKM06_02.jpg',
    soldOut: false,
  },
  {
    id: '6', handle: '261pcnh-st18',
    brand: 'NEIGHBORHOOD',
    title: 'NEIGHBORHOOD . V-PULLOVER',
    price: '$174.00',
    image: '/images/products/261PCNH-ST18_01.jpg',
    hoverImage: '/images/products/261PCNH-ST18_02.jpg',
    soldOut: false,
  },
  {
    id: '7', handle: '261aqnh-ptm05',
    brand: 'NEIGHBORHOOD',
    title: 'NEIGHBORHOOD . EASY TROUSERS',
    price: '$174.00',
    image: '/images/products/261AQNH-PTM05_01.jpg',
    hoverImage: '/images/products/261AQNH-PTM05_02.jpg',
    soldOut: false,
  },
  {
    id: '8', handle: '261tsnh-shm01',
    brand: 'NEIGHBORHOOD',
    title: 'NEIGHBORHOOD . CHECK SHIRT SS',
    price: '$198.00',
    image: '/images/products/261TSNH-SHM01_01.jpg',
    soldOut: false,
  },
];
```

## Assets
- Product images in `/images/products/`

## Responsive Behavior
- **Desktop (1440px):** 4 cards per row (25% each via flex)
- **Mobile (390px):** 2 cards per row (`.small--one-half` = 50%)
- **Breakpoint:** ~768px

## Implementation Notes
- Use `'use client'` for hover state
- Use next/image `<Image>` for product images
- The padding-top aspect ratio trick: `<div style={{paddingTop:'141.5%', position:'relative'}}>` with absolute-positioned image inside
- Cards have border-right too — use `border-right: 1px solid #dddddd` then adjust for last in row
- Simplest approach: use CSS grid instead of flex to avoid border issues — `grid-template-columns: repeat(4, 1fr)` on desktop, `repeat(2, 1fr)` on mobile
- "NEW ARRIVALS" section heading above grid:
  - font-size: 13px, color: rgb(34,34,34), padding: 10px 30px
  - border-bottom: 1px solid rgb(221,221,221)
