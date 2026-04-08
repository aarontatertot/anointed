# SiteFooter Specification

## Overview
- **Target file:** `src/components/SiteFooter.tsx`
- **Screenshot:** `docs/design-references/neighborhood-desktop-1440-full.png` (scroll to bottom)
- **Interaction model:** Static

## DOM Structure
```
footer#footer.site-footer
  div.footer-list (flex row, border top+bottom)
    ul.footer-list-item.pc (× 5-6 columns)
      li.menu2_HOME → a "HOME"
      li.li-have-child.menu2_BRANDS
        div.have-child "BRANDS"
        ul.footer-list-item__child
          li → a "ALL BRANDS"
          li → a "NEIGHBORHOOD"
          li → a "SRL"
          li → a "ONE THIRD(KIDS)"
      li.li-have-child.menu2_CATEGORIES
        div.have-child "CATEGORIES"
        ul.footer-list-item__child
          li → a "JACKETS"
          li → a "SHIRTS"
          li → a "KNIT / CUT SEWN"
          li → a "T-SHIRTS"
          li → a "BOTTOMS"
          li → a "HEADWEAR / BAGS"
          li → a "ACCESSORIES"
      [other columns: COLLECTION, LOOK, DEALERS]
      [social column: NEIGHBORHOOD (instagram), SRL (instagram), NEIGHBORHOOD (facebook), Vimeo]
      [newsletter column: email input + subscribe button]
  div.footer-bottom (copyright)
    p "© 2025 NEIGHBORHOOD"
```

## Computed Styles (exact values from getComputedStyle)

### footer#footer.site-footer
- display: block
- width: 100%
- height: ~208px
- color: rgb(34, 34, 34)
- font-family: HelveticaLTWXX-BoldCond (same as body)
- font-size: 13px

### div.footer-list
- display: flex
- flex-direction: row
- width: 100%
- height: ~157px
- border-top: 1px solid rgb(221, 221, 221)
- border-bottom: 1px solid rgb(221, 221, 221)

### ul.footer-list-item (each column)
- display: block
- width: ~242px (1425/6 approximately)
- padding: 45px 30px 35px
- font-size: 13px
- color: rgb(34, 34, 34)

### li (footer nav item)
- display: list-item
- height: ~15px
- list-style: none

### a (footer link)
- display: inline
- color: rgb(34, 34, 34)
- font-size: 13px
- text-decoration: none

### div.have-child (parent category label)
- display: block
- font-size: 13px
- color: rgb(34, 34, 34)
- margin-bottom: 4px (approximately)

### ul.footer-list-item__child (sub-links)
- padding-left: 10px
- list-style: none

### Newsletter column
- Contains label text (e.g. "NEWSLETTER")
- input[type=email]: border-bottom: 1px solid #dddddd, no other border
- button "SUBSCRIBE" or "→"

### div.footer-bottom (copyright row)
- padding: 10px 30px
- font-size: 11px
- color: rgb(170, 170, 170)

## Text Content (verbatim)
- HOME
- BRANDS → ALL BRANDS / NEIGHBORHOOD / SRL / ONE THIRD(KIDS)
- CATEGORIES → JACKETS / SHIRTS / KNIT / CUT SEWN / T-SHIRTS / BOTTOMS / HEADWEAR / BAGS / ACCESSORIES
- COLLECTION → [links to collections]
- LOOK → [links to looks]
- DEALERS
- Social: NEIGHBORHOOD (Instagram), SRL (Instagram), NEIGHBORHOOD (Facebook), Vimeo
- Newsletter: label + email input + submit
- Copyright: "© 2025 NEIGHBORHOOD"

## Responsive Behavior
- **Desktop (1440px):** Flex row, ~6 columns side by side
- **Mobile (390px):** Stacks or collapses (`.pc` class hidden)
- **Breakpoint:** ~768px

## Implementation Notes
- Keep it simple — static flex row with 6 equal-width columns
- Links all point to "#" for the clone
- Newsletter form: non-functional (prevent default)
- Social links: use text labels, no icons needed (matches original)
