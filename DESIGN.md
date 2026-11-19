# The Last Gift to Earth: Design System

Design reference for the toolkit website. All values come from `style-guide.html` and match the team's Canva poster (vintage botanical, off-white paper, deep olive type).

**Mood:** calm, warm, natural, respectful. The topic is death, so the design should feel gentle and hopeful, never clinical or dark.

---

## 1. Color Palette

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#F1EFEB` | Page background (paper) |
| `--color-surface` | `#FAF9F6` | Cards, tables, stat boxes |
| `--color-heading` | `#3C4922` | Headings, primary buttons, table headers, CTA band |
| `--color-text` | `#3A3F33` | Body text |
| `--color-muted` | `#6F7464` | Captions, small text, secondary info |
| `--color-leaf` | `#6B8A3E` | Links, eyebrow labels, card numbers, timeline dots, checkboxes |
| `--color-sage` | `#C9D2B4` | Borders, dividers, default tags, timeline line |
| `--color-blossom` | `#C98A9A` | Accent: quote border, "Optional" tag |
| `--color-lavender` | `#9C8FC4` | Accent: tags only |
| `--color-sun` | `#E3C44E` | Accent: tags only |

**Rules**
- Olive (`--color-heading`) is the main brand color. Use leaf green for interactive and secondary accents.
- Pink, lavender and yellow are small accents only (tags, a quote border). Never use them for large areas or body text.
- Accent tags use the color mixed 35–40% with white: `color-mix(in srgb, var(--color-blossom) 35%, white)`.
- On olive backgrounds (CTA band, primary button), text uses `--color-bg`.

---

## 2. Typography

### Fonts
| Role | Font | Source |
|---|---|---|
| Headings, display numbers | **Fraunces**, fallback Georgia, serif | Google Fonts |
| Body, UI, labels | **Open Sans**, fallback system-ui, sans-serif | Google Fonts |

Google Fonts link (only the families the final site needs):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,300..900,0..100,0..1&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Fraunces settings (what gives the soft retro look)
- Weight: **800**
- `font-variation-settings: "SOFT" 100, "WONK" 1;` (rounded terminals plus quirky letterforms)
- Line height **1.1**, letter spacing **0.01em**

### Type scale
Base **18px**, ratio **1.333** (perfect fourth).

| Style | Size | Font | Notes |
|---|---|---|---|
| H1 | ~57px (`--fs-h1`) | Fraunces 800 | Hero title only |
| H2 | ~43px (`--fs-h2`) | Fraunces 800 | Section titles; stat numbers |
| H3 | ~32px (`--fs-h3`) | Fraunces 800 | Sub-sections; card numbers |
| H4 | 24px (`--fs-h4`) | Fraunces 800 | Card titles |
| Body | 18px (`--fs-body`) | Open Sans 400 | Line height 1.6, max width 65ch |
| Hero lead | ~21px (body × 1.15) | Open Sans 400 | Paragraph under the hero title |
| Small | ~14px (`--fs-small`) | Open Sans 400 | Captions, card descriptions, table cells; color muted |
| Eyebrow | ~14px | Open Sans 700 | UPPERCASE, letter spacing 0.14em, leaf green |
| Button | 18px | Open Sans 600 | |

Links: leaf green, underlined, `text-underline-offset: 3px`.

---

## 3. Shape & Spacing

| Token | Value |
|---|---|
| `--radius` | `14px` (cards, swatches, table, quote) |
| Pill radius | `999px` (buttons, tags) |
| CTA band radius | `--radius × 1.5` (21px) |
| Section padding | `56px 64px` desktop, `40px 24px` mobile |
| Card padding | `24px` |
| Grid gap | `20px` (cards, stats) |
| Card hover shadow | `0 10px 30px rgba(60,73,34,.12)` |

Section dividers: `1px dashed var(--color-sage)`.

---

## 4. Components

**Buttons** (pill, 2px olive border, padding `0.8em 1.5em`, lifts 2px on hover)
- Primary: olive fill, paper text. For the main action, "Open the toolkit ↗".
- Secondary: transparent, olive text and border.
- On the olive CTA band, the primary button inverts (paper fill, olive text).

**Tags:** pill, `4px 12px`, small 600 weight. Default sage background with olive text; pink, purple or yellow variants for labels like Optional, Print, New.

**Toolkit cards:** surface background, sage border, radius 14px. Content top to bottom: folder number (Fraunces, H3 size, leaf green), title (H4), description (small), link at the bottom ("Open folder ↗"). Hover: lift 3px plus shadow. Grid: `repeat(auto-fill, minmax(260px, 1fr))`.

**Stats:** three boxes, centered, big Fraunces number (H2 size) with a small caption underneath.

**Timeline (session plan):** 3px sage line on the left with leaf-green dots (15px, paper-colored ring). Two columns: time (110px, bold olive) and title (H4-ish, body × 1.15) with a small description.

**Checklist:** 20px checkbox in leaf green (`accent-color`), sage divider between rows. Checked items are struck through and muted. Saves progress in the browser.

**Table:** olive header row with paper text, small text, sage row borders, surface background.

**Quote:** 4px blossom-pink left border, surface background, italic, body × 1.1.

**FAQ (details/summary):** sage bottom border, olive 600 question, "+" / "–" indicator on the right.

**CTA band:** olive background, paper text, centered, 48px padding.

---

## 5. Imagery

- Vintage botanical illustrations (leaves, wildflowers) frame the hero: one strip along the top edge and a larger cluster along the bottom.
- PNGs with transparent backgrounds, full width, decorative only (`alt=""`).
- **To do:** the current `images/botanical-*.png` files were cropped from a screenshot and are low resolution. Replace them with high-res transparent PNG exports from Canva (at least 2400px wide), keeping the same file names.

---

## 6. CSS Tokens (copy into `style.css`)

```css
:root {
  /* Colors */
  --color-bg:       #F1EFEB;
  --color-surface:  #FAF9F6;
  --color-heading:  #3C4922;
  --color-text:     #3A3F33;
  --color-muted:    #6F7464;
  --color-leaf:     #6B8A3E;
  --color-sage:     #C9D2B4;
  --color-blossom:  #C98A9A;
  --color-lavender: #9C8FC4;
  --color-sun:      #E3C44E;

  /* Fonts */
  --font-heading: "Fraunces", Georgia, serif;
  --font-body:    "Open Sans", system-ui, sans-serif;
  --heading-soft: 100;
  --heading-wonk: 1;
  --heading-weight: 800;

  /* Type scale */
  --base-size: 18px;
  --ratio: 1.333;
  --fs-small: calc(var(--base-size) / var(--ratio));
  --fs-body:  var(--base-size);
  --fs-h4:    calc(var(--base-size) * var(--ratio));
  --fs-h3:    calc(var(--fs-h4) * var(--ratio));
  --fs-h2:    calc(var(--fs-h3) * var(--ratio));
  --fs-h1:    calc(var(--fs-h2) * var(--ratio));

  /* Shape */
  --radius: 14px;
  --line-height: 1.6;
}
```

---

## 7. Accessibility

- Body text `#3A3F33` on `#F1EFEB` and olive `#3C4922` on `#F1EFEB` both pass WCAG AA contrast.
- Don't use leaf green, sage or the accent colors for long body text.
- Every link that opens Google Drive uses `target="_blank" rel="noopener"` and the ↗ symbol.
- Keep a visible focus outline on buttons and links for keyboard users.
