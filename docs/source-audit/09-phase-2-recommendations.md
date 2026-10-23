# 09 — Phase 2 Recommendations & Mandatory Requirements

Status: **advisory. Nothing here is implemented.** Phase 2 starts only after explicit approval. Open business questions (08 §2) should be answered before the related content is built; where they are not, Phase 2 must present the published facts without inventing corrections, or mark them for review.

---

## 1. Target stack (as specified)

- **Next.js (App Router), JavaScript (no TypeScript), React.**
- **GSAP + ScrollTrigger** for purposeful motion only (section reveals, image parallax, pinned course overviews). Respect `prefers-reduced-motion`.
- Responsive build validated at 360, 390, 768, 1024, 1280, and 1440px, with no horizontal overflow at any width.
- Content stored as local data files (JSON/JS modules) generated from `data/content/*` and `data/content-structured.json`, so the course, retreat, and workshop templates are data-driven.

## 2. Mandatory design rules (must be followed in Phase 2)

### Typography
- **Exactly two font families across the entire website:** one for headings, one for body text, navigation, buttons, forms, cards, footer text, and all other UI.
- Both must be readable, professional, and not overly fancy. **No script/decorative faces.** Melinda Evania and Lavishly Yours are not to be carried over as a third or decorative face.
- The same heading and body sizes for equivalent components on every route.
- One controlled, fluid type scale (e.g. `clamp()`), with mobile body text ≥16px.
- Hierarchy comes from weight, size, line-height, and letter-spacing, never from extra families.
- No additional font family for any section, decorative heading, footer, or component.
- The final pair is chosen in Phase 2, after reviewing `05-brand-reference.md` §1. Manrope (already self-hosted, OFL, variable) is a natural body/UI candidate.

### Visual design
- A professional, human-designed appearance; intentional image/text alignment.
- Consistent content widths, margins, and spacing (a single container system and spacing scale).
- **No** unnecessary decorative numbering ("01.", "Teacher 1"), eyebrow text on every section, random symbols, floating badges, or ornamental elements.
- Avoid repetitive AI-looking and generic template layouts (e.g. identical icon-card grids on every page).
- Effects (blur, glass, parallax, outlines) only when they serve a clear purpose. Replace outlined/transparent headings with solid, high-contrast text.
- Preserve the brand: saffron amber `#eb9d0a`, antique gold `#e2ae4b`, ink `#181818`/`#1f1f1f`, cream `#fdf7eb`/`#fff8eb`, the logo, real studio photography, and the calm spiritual tone. Use deeper amber (≈`#a26c07` or darker) for text so it meets WCAG AA contrast.

### Content
- Keep pages concise and focused; consolidate repeated paragraphs (03 §3); avoid excessive length (current mobile pages run 12–18k px).
- Preserve meaningful facts and essential information exactly as published, or as later confirmed by the business.
- **Do not invent** claims, testimonials, reviews, FAQs, prices, dates, teacher bios, or blog posts.
- Do not reproduce third-party-school content (WPYS / World Peace Yoga School) without business confirmation.

### Footer
- Compact and content-driven: brand line, essential links, verified contact (email, WhatsApp, address), social links that actually exist, legal links only if those pages exist.
- No excessive padding, needless columns, duplicated content, or oversized layouts.
- The final content section must be fully visible above the footer, with a natural transition into it.
- No overlap, clipping, excessive blank space, or fixed-footer interference.

### Images & performance
- Prefer the original assets in `original-assets/` (341 files, 26.4 MB, 278 already WebP). Do not substitute stock, AI-generated, or unrelated imagery where suitable originals exist.
- Resize and compress locally where practical (many banners are 1920px / 250–630 KB, rendered at 1440×500). Serve modern formats; lazy-load below-the-fold images; set explicit width/height; use appropriate `sizes`.
- Several originals are too small for full-width use (e.g. `home/full-moon.webp` 800px, the 200-hour excursion images 800px). Use them at smaller sizes rather than upscaling.
- Avoid duplicate copies of assets in the repo; keep one optimised set under `public/`.
- **Next.js config:** avoid consuming the Vercel Image Optimization quota by **merging** `images: { unoptimized: true }` into the existing `next.config` (do not replace unrelated settings), and handle optimisation with pre-sized local files.
- Poster images and no mobile autoplay for `course-page-video.mp4` (1.48 MB); lazy YouTube facades (youtube-nocookie); lazy Google Map.

## 3. Proposed information architecture (for approval)

| Primary nav | Content | Replaces |
|---|---|---|
| Home | Concise overview: hero, intro, offerings, schedule snapshot, featured TTCs, reviews, contact strip | `/`, `/index.php` |
| Teacher Training | Hub with filters/groups (Multi-Style, Kundalini, Specialty/Short) → course detail template | `courses.php` + 17 course pages |
| Daily Classes | Timetable, pass prices, class styles | `daily-classes.php` |
| Retreats | Hub → retreat template | `retreat.php` + 5 pages |
| Workshops & Events | Hub with dated entries (past ones hidden) → workshop template | `events-and-workshop.php` + 8 pages |
| Wellness | Spa/Ayurveda menu | `wellness.php` + home spa tabs |
| About | Story, founder, teachers, reviews, gallery highlights | `about-us.php`, `teachers.php`, `testimonials.php` (gallery can stay separate) |
| Contact / Enrol | Contact details, map, enquiry + enrollment form | `contact-us.php`, `enrollment-form.php` |
| Secondary (footer) | Gallery, FAQ, Blog (if kept), legal pages (if provided) | — |

- Every legacy `.php` URL gets a 301 to its new route (map in `02-page-inventory.md` §2). Fix the two broken links (`teacher.php`, `sinior-…`).
- Put About/Teachers in the **desktop** nav (they are currently missing).
- Do not create pages for content that doesn't exist (Detox Retreat card, the 5 blog posts without bodies, legal pages without text).

## 4. Templates to build

1. **Course detail** (2 variants: full TTC / short course): hero, at-a-glance facts (duration, dates, price, certification), overview, curriculum accordion, daily schedule, fees + accommodation table, inclusions/what-to-bring, teachers (from a shared dataset), FAQ accordion, enquiry CTA. Sticky in-page nav for long pages.
2. **Retreat detail:** hero, at-a-glance, itinerary, packages, inclusions, enquiry.
3. **Workshop/event detail:** date/time/price card, description, what to bring, booking CTA.
4. **Hub/listing** pages with consistent cards.
5. Shared: header (desktop ≥1200 + tablet/mobile drawer), footer, CTA band, reviews, FAQ accordion, gallery grid + lightbox, map, forms.

## 5. Functionality to recreate (see 06)

| Feature | Recommendation |
|---|---|
| Contact / enquiry / enrollment forms | Next.js route handler or form service sending to the business inbox (to be confirmed). Add client + server validation, required fields, a honeypot/turnstile, a consent line, and distinct success messages. Pre-select the program via query string from "Book Now" CTAs. Phone default: business decision (currently India). |
| Booking/payment | Not present today. Do not build checkout unless the business requests it. |
| Gallery filter + lightbox | Keep (accessible lightbox, keyboard support). |
| FAQ / curriculum accordions | Keep; add FAQPage structured data. |
| Video testimonials | YouTube facades, modal or inline. |
| Sliders | Use sparingly; prefer static grids for essential info. |
| Floating cafe tab | Replace with a normal link/section. |
| Analytics | None today. Business to decide (GA4 ID `G-9Q6H0QETRF` exists on the host 404 template; confirm ownership). |

## 6. SEO baseline for Phase 2

- **Do not ship `Disallow: /`** unless the business confirms the site should stay hidden.
- Unique title + meta description per page, self-referencing canonicals, one H1 per page, `sitemap.xml`, OG/Twitter images, LocalBusiness JSON-LD (verified fields only), Course/Event/FAQ schema where facts are confirmed.
- Descriptive alt text (57 assets currently lack it).

## 7. Risks to manage

- **Unresolved facts** (prices, durations, dates, inclusions, certification) could make the new site look authoritative while still being wrong. Gate these sections on business confirmation, or flag them in a review build.
- **Form backend**: moving off the PHP host removes the PHPMailer endpoints; leads will be lost unless a replacement is configured before launch.
- **Font licensing**: confirm licences for any font chosen (and note that Melinda Evania's licence is unknown).
- **Image authenticity/rights**: confirm the hero/stock-looking images and third-party logos (Yoga Alliance, review platforms).
- **Blog**: keep the scope minimal (≤10 images in its initial presentation); do not invent posts.

## 8. Confirmation

- The two-font rule and every mandatory design, content, footer, image, and performance rule above are documented for Phase 2.
- Phase 1 made **no code changes, no redesign, no package installs, no configuration changes, no GitHub push, and no deployment.**
