# Royal Radiance Brand Guide

> **Version 1.0 — July 30, 2025**

---

## 1. Purpose & Scope
This document codifies the visual language for the **Royal Radiance** identity. Share it with designers, developers, printers, and any AI tools to maintain consistency across digital and physical touchpoints (web, mobile, merch, signage, ads, etc.).

---

## 2. Core Color Palette
| Token | Name | HEX | RGB | CMYK | Usage |
|-------|------|-----|-----|------|-------|
| `--purple` | Royal Purple | #6A0DAD | 106 13 173 | 66 92 0 32 | Primary surfaces & large headers |
| `--blue` | Midnight Blue | #0B3C5D | 11 60 93 | 88 35 0 64 | Secondary buttons, nav bars, body text on light BG |
| `--gold` | Golden Sun | #FFC72C | 255 199 44 | 0 22 83 0 | Highlights, CTAs, rating stars |
| `--red` | Ember Red | #C72C41 | 199 44 65 | 0 78 67 22 | Warnings, sale tags |
| `--orange` | Sunset Orange | #FF6F3C | 255 111 60 | 0 57 76 0 | Secondary buttons, charts |

### 2.1 CSS / Tailwind Tokens
```css
:root {
  --color-purple: #6A0DAD;
  --color-blue:   #0B3C5D;
  --color-gold:   #FFC72C;
  --color-red:    #C72C41;
  --color-orange: #FF6F3C;
}
```

```js
// tailwind.config.js excerpt
module.exports = {
  theme: {
    extend: {
      colors: {
        purple:  '#6A0DAD',
        blue:    '#0B3C5D',
        gold:    '#FFC72C',
        red:     '#C72C41',
        orange:  '#FF6F3C',
      },
    },
  },
};
```

---

## 3. Gradients
| Name | Stops | Application |
|------|-------|-------------|
| **Royal Dusk** | `#6A0DAD → #0B3C5D` | Hero banners, splash screens |
| **Sunset Glow** | `#FFC72C → #FF6F3C → #C72C41` | Section dividers, progress bars |

---

## 4. Typography
| Hierarchy | Typeface | Weight | Color |
|-----------|----------|--------|-------|
| Display (H1-H2) | **Montserrat** / Poppins | 600-700 | `var(--color-purple)` or `var(--color-blue)` |
| Body | **Inter** / Nunito Sans | 400-500 | `var(--color-blue)` or #222 |
| Numerics / Accents | **Space Grotesk** | 500-700 | `var(--color-gold)` |

### 4.1 Web-Safe Fallbacks
```css
font-family: 'Montserrat', 'Poppins', 'Helvetica Neue', Arial, sans-serif;
```

---

## 5. Iconography
- **Style:** Minimal, 2 px stroke, slightly rounded corners.
- **Colors:** Outline in `var(--color-purple)`; solid fills in `var(--color-gold)` for emphasis.
- **Size Ratios:** 1×/1.5×/2× relative to body text for scalability.

---

## 6. UI Components
| Component | Default | Hover / Active |
|-----------|---------|----------------|
| Primary Btn | Fill: Purple · Text: White | Gradient Royal Dusk |
| Secondary Btn | Outline: Blue · Text: Blue | Fill Blue · Text White |
| Info Badge | BG Gold · Text Purple | — |
| Warning Badge | BG Red · Text White | — |
| Success Badge | Outline Orange · Text Orange | Fill Orange · Text White |

**Border Radius:** 8 px (mobile), 12 px (web).  
**Shadow:** `0 2px 4px rgba(0,0,0,0.08)` on hover.

---

## 7. Layout & Spacing
- **Grid:** 12-col / 80 px max gutter desktop; 4-col / 24 px gutter mobile.
- **Spacing Scale:** 4, 8, 12, 16, 24, 32, 48, 64 px.
- **Content Max-Width:** 1320 px.

---

## 8. Imagery & Photography
- Vibrant yet sophisticated; avoid oversaturation to let purple dominate.
- Apply 20 % purple overlay for brand consistency.
- Use golden highlights to draw focal attention.

---

## 9. Motion & Micro‑Interactions
- Hover color shifts +2° on hue wheel toward Sunset Orange.
- Button press: 95 % scale (0.1 s ease‑out).
- Fade‑in elements: 300 ms, 20 px slide‑up.

---

## 10. Accessibility
- Maintain WCAG 2.1 AA contrast (≥4.5 : 1 text vs background).
- **Purple/White** and **Blue/White** combos meet AA at font‑sizes ≥16 px.
- Provide focus outlines (`2 px dashed var(--color-gold)`).

---

## 11. Asset Management
| Asset | File | Notes |
|-------|------|-------|
| Logo (primary) | `logo-primary.svg` | Purple on transparent |
| Logo (light) | `logo-light.svg` | White on transparent |
| Icon Set | `icons/*.svg` | 24 px base grid |
| Gradient BGs | `bg-royal-dusk.png` | 1920 × 1080 |

Store in Git repo `brand-assets/` + Figma library “Royal Radiance UI”.

---

## 12. Change Log
| Date | Author | Change |
|------|--------|--------|
| 2025‑07‑30 | Initial AI spec | — |

---

> **Next Steps:**
> 1. Review palette in staging environments for perceptual accuracy.  
> 2. Supply final logo lockups (horizontal, stacked) by **2025‑08‑05**.  
> 3. Export Tailwind theme tokens using the config snippet above.