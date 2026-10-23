# 05 — Brand Reference (original site)

Sources: computed styles from 46 rendered pages (`data/typography-color-aggregate.json`), `style.css` (205 KB, captured 2026-10-23), screenshots, and font/logo files in `original-assets/`.
**Verified** = read from computed styles, CSS, or files. **Estimate** = judged visually or derived.

---

## 1. Typography

### 1.1 Font families in use (verified)

| Family | Source | Role on the original site | Usage share* |
|---|---|---|---|
| **Manrope** (variable, weights 200–800) | Self-hosted `assets/fonts/Manrope.woff2` | Body text, paragraphs, buttons, desktop nav links, dropdown links, form fields, footer text, sub-titles | ~72% of text elements |
| **"Melinda Evania"** (single file, weight 400; the browser synthesises 500–900) | Self-hosted `assets/fonts/MelindaEvania.woff2` | **All headings H1–H5**, eyebrow labels (H4/H5 uppercase), mobile-menu links, footer column titles, outlined inner-page H1 | ~27% |
| **"Lavishly Yours"** (script) | Self-hosted `assets/fonts/LavishlyYours.woff2` | Accent words only: the hero "Inner Calm", "Welcome To", and spa tab numbers ("01.") | <1% |
| Lexend | Not loaded (falls back) | A single rule: course-fee duration figure on TTC pages | trace |
| Poppins / DM Sans | Hostinger 404 template only | Not part of the site | — |

\*Share of visible text nodes across all crawled pages.

Font licensing: "Melinda Evania" and "Lavishly Yours" are decorative display/script faces; the licence status of "Melinda Evania" is **unknown** (Lavishly Yours is an OFL Google Font; Manrope is OFL). Because the browser synthesises bold weights from Melinda Evania's single file, headings look smeared or heavy at 700–900.

### 1.2 Typographic values (verified computed, 1440px unless noted)

| Element | Family | Size / line-height | Weight | Tracking / case | Colour |
|---|---|---|---|---|---|
| Body | Manrope | 16 / 24px | 400 | normal | `#181818` |
| Paragraph (most pages) | Manrope | 15 / 26.25px (home 20 / 34px) | 400 | normal | `#1f1f1f` |
| Home hero H1 | Melinda Evania + Lavishly Yours accent | 55 / 60.5px (accent `clamp(40px,5.5vw,75px)`) | 700 | none | `#ffffff`, accent `#eb9d0a` |
| Inner-page banner H1 | Melinda Evania | `clamp(30px,4.5vw,65px)` → 64.8px; 30px mobile | 500 | **9.72px letter-spacing**, capitalize | **transparent fill + 1.2px white 70% stroke** (outlined) |
| Section H2 | Melinda Evania | 24–55px (inconsistent; most often 24px or 32px) | 600 | none | `#181818` |
| H3 card titles | Melinda Evania | 24–25px | 600–800 | sometimes uppercase | `#ffffff` / `#eb9d0a` |
| Eyebrow / H4 labels | Melinda Evania | 13px | 700 | 2px, UPPERCASE | `#eb9d0a` |
| H5 / footer titles | Melinda Evania | 16px | 700 | 2.5px, UPPERCASE | `#eb9d0a` |
| `.sub-title` (eyebrow with rule) | Manrope | 18 / 28.8px | 600 | normal | `#181818` |
| Desktop nav link | Manrope | 15 / 24px | 400 | capitalize | white, 85% white inactive |
| Mega-menu link | Manrope | 14 / 22.4px | 400 | 0.5px | `#181818` |
| Mobile-menu link | Melinda Evania | 13px | 500 | 1.5px, UPPERCASE | `#181818` / active `#eb9d0a` |
| Buttons `.btn` | Manrope | 12 / 19.2px | 600 | **2px**, capitalize | white on `#eb9d0a` |
| Inputs | Manrope | 15–16px | 400 | — | `#212529` |
| Mobile body | Manrope | 14px (home 16px) | 400 | — | — |

Observations: heading scale is inconsistent between equivalent sections; the decorative heading face is used even for small uppercase labels, where legibility suffers; the outlined banner H1 has low contrast on photos.

### 1.3 Mandatory rule for the redesign (record only, no selection made)

The redesigned site must use **exactly two font families**: one for headings, one for everything else (body, nav, buttons, forms, cards, footer). Melinda Evania, Lavishly Yours, and Manrope are documented above for reference. **The final pair is not chosen in Phase 1.** Candidate considerations for Phase 2:
- Manrope is already self-hosted, OFL-licensed, highly legible, and variable. It is a strong candidate to keep for body/UI, which preserves continuity.
- The heading face should echo the original's refined, slightly geometric display character without being "fancy" or script. Do not carry over Lavishly Yours or Melinda Evania as a third/decorative face.

---

## 2. Colour

### 2.1 Brand palette (verified HEX from CSS/computed styles)

| Token (proposed name) | HEX | Where used | Status |
|---|---|---|---|
| **Primary: Saffron Amber** | **`#eb9d0a`** | Buttons, CTAs, eyebrow labels, active nav, icons, links, price highlights, borders (175 CSS uses) | Verified, core brand colour |
| Primary, hover/darker | `#d38d09` | Button/link hover tones | Verified (computed) |
| Primary, deep text | `#a26c07` | Amber text on light backgrounds (better contrast) | Verified (computed) |
| **Secondary: Antique Gold** | **`#e2ae4b`** | Gallery filter active, "see more" links, borders, secondary accents | Verified |
| Gold variants | `#d4a017`, `#e0b976`, `#c5973d`, `#d4af37`, `#8a6d1b` | Strokes, badges, borders | Verified in CSS (minor) |
| Logo olive gold | ≈ `#988008` / `#a08000` | Logo artwork only (not used in CSS) | Sampled from `logo.webp` (estimate ±8 per channel) |
| **Ink** | **`#181818`** | Body text, headings | Verified |
| Charcoal | `#1f1f1f` | Scrolled header, dark panels, paragraphs | Verified |
| Espresso | `#1a120c` | Dark warm panels (e.g. "Programs" card gradient) | Verified (minor) |
| White | `#ffffff` | Main background, text on dark | Verified |
| **Cream tint** | `#eb9d0a` at 8% on white ≈ **`#fdf7eb`** (CSS also has `#fff8eb`, `#fdfaf5`, `#fbf9f5`, `#fdfcf9`) | Alternating section backgrounds (`.bg`) | Verified token; flat HEX is derived |
| Light grey | `#f7f7f7`, `#f4f4f4`, `#f0f0f0` | Mega-menu panel, cards | Verified |
| Muted text | `#181818` at 60–70% opacity | Secondary text | Verified |

### 2.2 Incidental, not brand (verified, do not carry over)

| Colour | Origin |
|---|---|
| `#28a745`, `#dc3545`, `#2ed573` | Bootstrap/form success-error states, status dots ("Active") |
| `#962fbf`, `#d62976`, `#fa7e1e` | Instagram gradient on the Instagram mock-up |
| `#f1c40f`, `#ffb800` | Star ratings |
| `#aaaaaa` at 50% | Swiper pagination bullets |
| `#212529`, `#333` | Bootstrap defaults |

### 2.3 Colour behaviour

- Dark imagery + amber is the signature pairing (hero, footer, Programs card, schedule wrapper).
- The header is transparent over the hero and turns `#1f1f1f` on scroll.
- The footer is a dark photographic background (Buddha statue, `assets/img/bali-footer-bg.webp`) with amber titles and white text.
- Contrast risks (estimate): amber `#eb9d0a` text on white ≈ 2.2:1 and white text on amber buttons ≈ 2.2:1, both **failing WCAG AA** for normal text. `#a26c07` on white is ≈ 4.5:1 (borderline AA, computed 4.49). Phase 2 should use the deeper amber for text and keep `#eb9d0a` for large fills/accents, or darken button fills.

---

## 3. Logo & marks

| Asset | Path | Notes |
|---|---|---|
| Primary logo | `assets/img/logo.webp`: 1079×963 RGBA, 92 KB, raster only (also the JSON-LD logo) | A thin olive-gold line **triangle** enclosing a textured **ouroboros serpent ring** (a Kundalini motif, gold → amber gradient) around a small lotus/meditating-figure glyph. Wordmark: **"BALI"** in thin geometric capitals inside the triangle base, with **"YOGA STUDIO"** in very widely tracked thin capitals below, where both "O"s are drawn as filled moon-phase circles. Sampled logo gold: **≈ `#988008` / `#a08000`** (olive gold, darker and greener than the UI amber `#eb9d0a`); serpent highlights ≈ `#ab9717`. Transparent background, designed for dark grounds |
| Favicons | `assets/img/favicon/favicon.svg`, `favicon.ico`, `favicon-96x96.png`, `apple-touch-icon.png` (180px), `site.webmanifest` | Same mark |
| Yoga Alliance badges | `assets/img/multi-style/yoga-allience/{200,300,500}-rys-logo.webp`, `yoga-alliance-logo.webp` | Third-party certification marks; use only if the business confirms current registration |
| Review platform logos | `assets/img/reviews/{google,facebook,tripadvisor}-logo.webp` | Third-party |

Placement: top-left in a circular dark badge with a soft glow (desktop ~80px; mobile ~64px). The thin gold strokes **become illegible at small sizes** and on dark photography; the wordmark is unreadable in the header. No horizontal/lockup or monochrome variant was found. Phase 2 needs a legible header treatment (ask the business for vector source files).

## 4. Shape, depth, imagery

| Aspect | Original treatment (verified CSS / observed) |
|---|---|
| Border radius | Inconsistent: 0 (primary buttons, gallery filters), 4, 8 (most `.btn`), 12, 14, 16, 20, 30, 50px pills, 50% circles. Cards often 16–20px |
| Shadows | Mostly soft and low (`0 10px 30px rgba(24,24,24,.04)`, `0 4px 15px rgba(0,0,0,.1)`); some glassmorphism (`backdrop-filter: blur(6px)` on dark translucent panels) |
| Borders | 1px amber or gold outlines on chips ("Benefits" tags), image frames (gold offset frame on home "Benefits" image), date badges |
| Icons | Line/outline icons in amber (PNG/WebP in `assets/img/svg/`, `daily-classes/icons/`), Font Awesome 6 for UI |
| Decorative motifs | Lotus section divider (`assets/img/section-divider.webp`), paisley/mandala wall art in photos, a short amber rule before eyebrows, large outlined background numbers on curriculum cards, "Spacial" schedule cards |
| Photography | Real studio photography: classes in a white/terracotta shala, aerial silks, sound bowls, Balinese temples, food/cafe, rooms. Mostly warm-toned. Some images (e.g. hero 1, Bali temple) look AI-generated or stock; **confirm with the business** which are authentic |
| Overlays | Dark gradients (`rgba(0,0,0,.34–.5)`) over hero and banners |
| Tone & personality | Warm, spiritual, "sanctuary" language; saffron and gold evoke Indian/yogic tradition blended with Balinese setting; aims for premium wellness but currently cluttered (many eyebrows, numbered labels, badges, floating tabs) |

## 5. What to preserve vs. leave behind

**Preserve:** saffron amber `#eb9d0a` + antique gold `#e2ae4b` on ink/charcoal and cream; the logo mark; real studio photography; the warm, calm, spiritual tone; Manrope's legibility.

**Leave behind:** three decorative faces; outlined (stroke-only) headings; synthetic bold display text; inconsistent radii; decorative numbering ("01.", "Teacher 1"), excess eyebrows and badges; the floating cafe tab; glassmorphism panels; low-contrast amber text.
