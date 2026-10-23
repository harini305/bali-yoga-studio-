# 01 — Audit Report: baliyogastudio.org

**Phase 1 (research only).** Audit date: 2026-10-23. Auditor: Claude Code, for the frontend rebuild.
Legend used across the docs: **Verified** (seen in captured evidence) · **Observed** (seen visually) · **Estimate** (derived or judged) · **Unknown**.

---

## 1. Website overview

Bali Yoga Studio is a yoga school and wellness studio in Ubud, Bali. Its offer:
- **Yoga teacher training:** multi-style and Kundalini at 50/100/200/300/500 hours, plus Yin, Aerial, Sound Healing, and Reiki courses, and three 50-hour specialty courses.
- **Daily drop-in classes:** Hatha, Pilates, Aerial, Meditation, Sound Healing.
- **Five retreats** and **eight workshops/events**.
- **An Ayurveda wellness spa menu** and a partner cafe (Prasadam Healing Café).

Lead capture is entirely by email-backed forms. There is no booking engine or payment flow.

**Technology (verified):** hand-coded PHP pages on Hostinger (LiteSpeed, PHP 8.3), Bootstrap 5, Swiper, intl-tel-input, a custom `custom.js`, and PHPMailer form endpoints. No CMS. The blog is static PHP.

## 2. Method

| Step | Tooling / output |
|---|---|
| Workspace inspection | `D:\baliyogastudio38` was **empty**: no project files, assets, or prior evidence |
| robots.txt / sitemap | robots.txt fetched (`Disallow: /`); sitemap URLs all 404 |
| Crawl | Headless Chromium (Playwright 1.63), sequential, ~1 page per few seconds plus pauses. BFS over every internal link (header, mega-menu, mobile menu, footer, in-page, blog) until exhausted. 48 URLs |
| Per page | Rendered-DOM extraction at 1440px (sections, headings, text, images with natural/rendered size, background images, links, forms, iframes, video, computed typography and colour tallies, fixed elements, console errors) → `data/pages/*.json` |
| Screenshots | Full-page at 1440 and 390; tablet 768 full-page for 17 template representatives and above-the-fold for the rest → `screenshots/` |
| Static HTML | Raw server HTML of every route → `data/html/`; converted to structured markdown including hidden tab/accordion/slider content → `data/content/` |
| Interactions | Desktop dropdown hover, sticky header on scroll, hero slider, button hover, video modal, mobile menu + submenu, FAQ accordion, gallery filter + lightbox, form validity checks (**no submission**), breakpoint probe 360–1440 → `data/interaction-tests.json`, `screenshots/interactions/` |
| Assets | Union of rendered images, CSS backgrounds, video, static-HTML and stylesheet references; HEAD-checked for status/size → `04-assets-manifest.csv`; **341 originals mirrored** to `original-assets/` (26.4 MB), keeping their site paths |
| Analysis | Route classification, near-duplicate detection, repeated-paragraph detection, typography/colour aggregation, responsive metrics; page-by-page inventories drafted in parallel and spot-checked (2 drafting errors found and corrected) |

## 3. Coverage

| Item | Result |
|---|---|
| Pages fully inspected | **46** (all live routes) |
| Pages partially inspected | `/blog/blog-details.php` is fully captured, but it is the only article; the five other blog cards have no content of their own |
| Discovered but inaccessible | None |
| Broken routes | `/teacher.php`, `/sinior-citizen-wellness-retreat.php` (404, linked from the mobile menu on every page) |
| Duplicate route | `/index.php` (= home) |
| Interactive states not verified | Form submission and mail delivery (intentionally not submitted); hover states other than the primary button and nav; slider timing; sticky in-page nav (5 pages, markup only); mobile hero entrance animation |
| Limitations | Headless Chromium only (no Safari/iOS or real devices); no access to the server, PHP source, mail endpoints, or analytics; no sitemap, so pages that nothing links to cannot be ruled out; content and prices are as of 2026-10-23 |

## 4. Summary of findings

### 4.1 Routes & structure (`02-page-inventory.md`)
46 live pages in 8 types. Course, retreat, and workshop pages are three repeated templates (17 / 5 / 8 pages), which suits a data-driven rebuild. The desktop nav omits About, Teachers, Gallery, FAQ, and Contact. Three short courses are reachable only from `courses.php`.

### 4.2 Content (`03-content-inventory.md`, `data/content/`)
About 50,000 words in total. The home and course pages are very long (mobile up to 18,700px). There is substantial verbatim repetition: a studio paragraph on 13 pages, teacher bios on 5 pages, retreat boilerplate on 5 pages, and excursion blocks on 13 pages. The critical facts to preserve are tabulated: offerings, prices, room tiers, timetable, spa menu, and contact details.

### 4.3 Content integrity (`08-issues-gaps-questions.md`)
These are the most serious findings:
- Text copied from another school ("World Peace Yoga School", "WPYS", Rishikesh references).
- Placeholder or reused prices (every retreat detail page shows the same two packages; every 50-hour course shows the same fee).
- Price conflicts between Home, the hubs, and detail pages (e.g. Sound Healing course $599 vs $349; Kundalini $350 vs $20).
- Self-contradicting durations (200-hour: 15 days / 20 days / a month).
- Contradictory inclusions (accommodation "extra" vs "included").
- Expired 2024 workshop dates and undated events.
- Unverifiable social-proof numbers and medical-procedure claims on the wellness page.

**15 questions for the business** are listed in 08 §2.

### 4.4 Assets (`04-assets-manifest.csv`, `original-assets/`)
- 350 asset references: 341 mirrored locally, 6 broken (blog icon paths), 2 external YouTube thumbnails, 1 host-template SVG.
- 278 of the files are already WebP. 9 files exceed 400 KB and 25 exceed 200 KB (mostly 1920px banners); the only video is 1.48 MB.
- 15 images are rendered larger than their natural size, so they are too small for full-bleed use. 57 have no alt text.
- No PDFs or brochures exist. The logo exists only as a raster WebP (1079×963), with no vector.

### 4.5 Brand (`05-brand-reference.md`)
- **Fonts:** Manrope (body/UI), "Melinda Evania" (all headings), Lavishly Yours (script accents), plus one stray Lexend rule.
- **Colours (verified):** primary saffron amber **`#eb9d0a`**, secondary antique gold **`#e2ae4b`**, ink `#181818`/`#1f1f1f`, cream tint ≈`#fdf7eb`, white.
- **Logo:** an olive-gold triangle containing an ouroboros serpent and a lotus figure (≈`#988008`).
- **Problems:** low-contrast amber text, outlined headings, inconsistent radii, and decorative clutter.

### 4.6 Functionality (`06-functionality-and-dependencies.md`)
- 31 features catalogued with verification levels.
- Three forms post via `fetch` to `phpmailer/contact-mail.php` / `enroll-mail.php`. Two of them accept empty input, none have spam protection, and the phone field defaults to India. These forms must be replaced in Next.js.
- There are no booking engines, payments, search, accounts, or translation.
- Integrations: YouTube, Google Maps, Instagram/YouTube links (the Facebook link is missing), WhatsApp, and the partner cafe site.
- No analytics run on real pages.

### 4.7 Responsive (`07-responsive-observations.md`)
- The desktop header shows at ≥1200px; the drawer menu is used below that.
- 24 pages scroll horizontally at 390px (Bootstrap `g-5` gutter overflow).
- Mobile body text is 14px, heading sizes are inconsistent, and the floating cafe tab overlaps content and menus.

### 4.8 SEO
- **robots.txt blocks the whole site.**
- There is no sitemap and no canonicals, 33 of 46 pages lack a meta description, and the retreat pages have 3 H1s each.
- JSON-LD exists on the home page only.

## 5. Recommendations
See `09-phase-2-recommendations.md`: the target stack, the mandatory design rules (including the **two-font rule**), the proposed IA and templates, functionality replacements, the SEO baseline, and risks.

## 6. Confirmation of scope
- No redesign or implementation was started. No project code, configuration, or packages were added or changed; the workspace contained no project to modify.
- Only `docs/source-audit/` was created (documentation, evidence, and a read-only mirror of the original public assets).
- No forms were submitted. There was **no GitHub push and no deployment.**
