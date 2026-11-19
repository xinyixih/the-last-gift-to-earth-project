# Changelog

A record of changes to The Last Gift to Earth website. Newest changes go at the top.

**How to add an entry:** copy the template below, put it under this line, and fill it in. Write **Content** for text or info from the toolkit, **Design** for looks/layout, **Pages** for adding or removing pages, **Fix** for bugs. Mark big changes with ⭐.

```
## YYYY-MM-DD: Short title
**Who:** name
- **Content:** what changed (which page)
- **Design:** ...
- **Pages:** ...
- **Fix:** ...
```

---

## 2026-11-19: ⭐ First full version of the site (v1.0)
**Who:** Kristine, with Claude

- **Pages:** ⭐ Turned the single page into a multi-page site:
  - `index.html`: Home
  - `about.html`: About
  - `start-here.html`: Step 00
  - `facilitator-guide.html`: Step 01
  - `presentation.html`: Step 02
  - `activity.html`, `handouts.html`, `promotion-kit.html`, `evaluation.html`, `sources-credits.html`: Steps 03–07
- **Content:** ⭐ Filled the site with everything in Drive folders 00–02 as of Nov 19:
  - Home: hero, "why it matters", at a glance stats, cards for the 8 steps, how to get started, Drive call-to-action.
  - About: Welcome message, Why this project exists, Who it's for, What participants will gain, The problem (4 points), Greener options (natural burial plus 4 alternatives). Source: *Welcome & Overview* doc and *Facilitator Guide* script.
  - Step 00: welcome, at a glance, how to get started, toolkit folder table with status, links to the *Welcome & Overview* and *Toolkit Checklist* docs, interactive host checklist (5 steps, 26 items). Source: *Toolkit Checklist* doc.
  - Step 01: guide intro, document links, preparation timeline (1–2 weeks, 2–3 days, day of), 45-minute session plan with expandable script and key points, after the session, FAQ. Source: *Facilitator Guide* and *Facilitator FAQ* docs.
  - Step 02: placeholder ("New slides on the way") plus a table matching slides to session sections. The slides are being redone.
  - Steps 03–07: "Coming soon" placeholders listing what each step will include.
- **Content: placeholders still to fill:**
  - Step 01 → Activity part of the script ("coming soon")
  - Step 01 → "Talking About Death Gently" doc (not in Drive yet)
  - Step 01 → 12 of the 13 FAQ questions show "Answer coming soon" (only "What is green burial?" is answered)
  - Step 02 → embed the new slides (embed code is in a comment in `presentation.html`)
  - Steps 03–07 → all content
  - Folders 06 and 07 aren't in Drive yet, so their buttons link to the main toolkit folder (marked `TODO` in the code)
- **Design:** Added `style.css` (full design system from DESIGN.md), `script.js` (mobile menu, steps dropdown, saved checklist progress, fade-in on scroll, footer year), sticky header with "Toolkit Steps" dropdown and Google Drive button, 00–07 step buttons on each step page, previous/next links, footer with Drive and Instagram links.
- **Fix:** Made the Google Drive button in the header visible (it had no background); fixed spacing utilities being overridden; kept tag labels on one line.

## 2026-11-19: ⭐ Design system decided
**Who:** Kristine, with Claude

- **Design:** ⭐ Picked the look from the team's Canva poster: paper background `#F1EFEB`, olive headings `#3C4922`, leaf/sage greens, and pink, lavender and yellow flower accents. Fraunces (soft, retro) for headings, Open Sans for body text, 18px base size.
- **Pages:** Added `style-guide.html` (live style editor) and `DESIGN.md` (the design rules).
- **Design:** Added placeholder botanical images in `images/`, cropped from the poster screenshot. **Known issue:** they're low resolution and need replacing with high-res Canva exports.

## 2026-11-19: Project started
**Who:** Kristine, with Claude

- **Content:** First draft of `index.html` with all the toolkit text as plain, unstyled HTML, pulled from the shared Drive folder.
