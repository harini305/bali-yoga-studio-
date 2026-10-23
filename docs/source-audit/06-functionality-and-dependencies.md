# 06 — Functionality & Technical Dependencies

Audit date: 2026-10-23 · Source: https://baliyogastudio.org · Evidence: `data/interaction-tests.json`, `data/links-forms-embeds.json`, `data/pages/*.json`, `screenshots/interactions/`.

**Verification levels:** **Observed** = visible on the site · **Interaction tested** = the UI interaction was exercised in a headless browser · **Functionality verified** = intended behaviour confirmed end-to-end · **Partially verified** · **Unverified**.

> No form was submitted during the audit. All "Book Now", "Enroll", and enquiry flows were inspected without sending data, so the business's inboxes received nothing.

---

## 1. Platform & stack (verified from response headers and source)

| Item | Finding |
|---|---|
| Server | LiteSpeed on **Hostinger** (`platform: hostinger`, `panel: hpanel`), PHP 8.3 (`X-Powered-By`) |
| Site type | Hand-built **PHP pages** (`/page-name.php`). Not WordPress or another CMS, and no admin/CMS evidence was found. The blog under `/blog/` is also plain PHP (no `wp-json`, no feed, no sitemap) |
| CSS | Bootstrap 5 (`bootstrap.min.css`), `swiper.min.css`, a single 205 KB `style.css` (on the home page, `style.css`, `lightbox.css`, `fontawesome.min.css`, and `intlTelInput.css` are each linked twice in `<head>`) |
| JS | `bootstrap.bundle.min.js`, `swiper.min.js`, `custom.js?v=20052026` (17.8 KB), intl-tel-input 18.2.1 (cdnjs + jsdelivr utils). No jQuery, GSAP, or AOS |
| Caching | `Cache-Control: no-store, no-cache` on HTML; a PHP session cookie is set on every page |
| robots.txt | `User-agent: * / Disallow: /`, which **blocks all search engines from the whole site** (see 08) |
| Sitemap | None (`/sitemap.xml`, `/sitemap_index.xml`, and blog sitemaps all return 404) |
| Analytics | **None on real pages.** GA4 `G-9Q6H0QETRF` appears only on the Hostinger default 404 template |
| Structured data | Home only: `LocalBusiness` + `WebSite` JSON-LD (name, logo, email, phone `+628135904695`, address Jl. Bisma No.78, Ubud 80571, geo −8.5107036 / 115.2584491, sameAs Instagram + YouTube) |

## 2. Feature inventory

| # | Feature | Where | Status | Details / dependency | Phase 2 consideration |
|---|---|---|---|---|---|
| 1 | Desktop header + mega-menu | All pages, ≥1200px | **Interaction tested** | Fixed header, 121px tall and transparent over the hero; after scrolling it gains `.scrolled`, shrinks to 81px, and turns `#1f1f1f`. Hover dropdowns: **Courses** (3-column mega menu: Multi Style / Kundalini / Short Courses), **Retreats**, **Events**. Desktop top level: Home · Daily Classes · Courses · Retreats · Events · [Get Started] | About, Teachers, and Gallery are **missing from the desktop nav** (they appear only in the mobile menu and footer). Rebuild the IA |
| 2 | Mobile/tablet header + off-canvas menu | All pages, <1200px | **Interaction tested** | Fixed top bar (90px at 390, 97px at 576–1199) with logo + `.mobile-header-toggle` hamburger. Opens a 340px `.mobile-sidebar` with overlay; sub-menus expand as accordions (`.has-mobile-dropdown`); includes Get Started + Facebook/Instagram/YouTube icons; closes via ✕/overlay | The floating "Explore Cafe" tab overlaps the open menu (screenshot `interactions/mobile-menu-open.jpg`). Tablets (768–1199) also get the mobile menu |
| 3 | Hero slider | Home | **Interaction tested** | Swiper fade, 4 slides, autoplay, prev/next arrows, pagination bullets | Slide CTA targets are inconsistent (see 08) |
| 4 | Content sliders | Home (retreats, workshops, healing courses, testimonials), course pages (teachers, reviews) | **Observed** | Swiper; the custom `lazySwiper()` initialises on IntersectionObserver; loop + autoplay 2–5 s | GSAP/ScrollTrigger can replace these in Phase 2; avoid autoplay carousels for key information |
| 5 | Spa / wellness menu tabs | Home "Ayurveda Wellness Spa", `wellness.php` | **Observed** | Bootstrap pills: 4 categories (Massages / Therapy / Beauty / Retreats) × vertical sub-tabs, each with image, description, IDR + USD price, and duration | At 1440 the image panel rendered blank in the capture (see 08); verify |
| 6 | YouTube video modal | Home "Yoga Student Stories" (6 videos), course pages | **Functionality verified** (opens and plays) | `openVideoModal(id)` injects `youtube.com/embed/{id}?autoplay=1`; Escape closes it. IDs: `7VRTh7WXMLo`, `7O7wWhb5FN8`, `YUSfg5ZIQi8`, `zmDFEg6J6ig`, `-PzfniSEOwE`, `VrgioYH0mcM` | Use youtube-nocookie and lazy facades |
| 7 | YouTube embed | `about-us.php` | **Observed** | `youtube.com/embed/Ul4fpLB1lgo` | — |
| 8 | Self-hosted video | `daily-classes.php`, 50-hour short-course pages | **Observed** | `/assets/video/course-page-video.mp4` (1.48 MB) | Add a poster image and avoid autoplay on mobile |
| 9 | Empty video iframe | ~17 pages | **Observed** | A hidden modal iframe with empty `src` resolves to the homepage URL (the page loads itself inside a hidden iframe) | Remove in the rebuild |
| 10 | FAQ | `faqs.php` | **Interaction tested** | 8 category tabs (Location & Transportation, Food & Accommodation, Health & Security, About The Course, Certification, General Questions, Payment, Weather in Bali) + accordion of 17 Q&As | Keep as accordion; FAQPage schema opportunity |
| 11 | Curriculum accordion | Course pages | **Observed** | e.g. 200-hour TTC has 16 modules (Mantra … Evaluation & Certification) | Keep |
| 12 | Gallery filter + lightbox | `gallery.php` | **Interaction tested** | Filter buttons ALL / YOGA / FOOD / ACCOMMODATION (filter works: FOOD → 8 images); 23 images in `a.glightbox` links (the GLightbox library is not loaded), opened by the custom lightbox (`.clb-overlay`) in custom.js with prev/next/counter, confirmed opening (`screenshots/interactions/gallery-thumbnail-click.jpg`). Retreat/Wellness/Events filter groups are commented out in HTML | Keep filter + lightbox |
| 13 | Cafe image gallery | Home + course pages | **Observed** | 15 cafe images (`assets/img/cafe/cafe-1…15.webp`) in a lightbox grid | — |
| 14 | Google review widget | Home, course pages | **Observed** | Static rating cards (**Google 4.6, Facebook 4.5, TripAdvisor 4.5**). They are hardcoded, not live. Long review texts are truncated by JS to 24 words + "see more" → `https://share.google/dvgIimU3EQBnCNN6s` | Ratings need business confirmation before reuse |
| 15 | Instagram showcase | Home | **Observed** | **Static mock-up** of an Instagram profile ("250+ Posts · 15K Followers · 320 Following"), with no API feed. Links to `instagram.com/bali.yogastudio` | The figures are hardcoded and may be stale |
| 16 | Contact form (`#common-form`) | Home "Keep in Touch", `contact-us.php` | **Interaction tested (validation only); backend unverified** | Fields: name, email, phone (intl-tel-input), subject, message. **No HTML `required` attributes**: the empty form passes `checkValidity()`. JS `fetch` POSTs FormData to `phpmailer/contact-mail.php`; success = the response body contains "success" → reset + thank-you modal; otherwise the server HTML is injected into the form | Needs a server endpoint or email service in Phase 2 (Next.js route handler / third-party). Add validation + spam protection (none exists today: no reCAPTCHA or honeypot) |
| 17 | Course enquiry form (`#sidebar-enquiry-form`) | **200-hour Yoga TTC page only** | **Interaction tested (validation only); backend unverified** | Fields: name*, email*, phone, `course_interest` select (200/300/500-Hour Yoga TTC), message* (*HTML required). Posts to `phpmailer/contact-mail.php` | The other 16 course pages have no form, only "Enroll Now" → enrollment-form.php |
| 18 | Enrollment form (`#enrollment-form`) | `enrollment-form.php` (the target of every "Book Now" / "Get Started" / "Enroll Now") | **Interaction tested (validation only); backend unverified** | Includes `enroll_accommodation`, `enroll_month`, `enroll_coupon`, `enroll_heard`, `enroll_message` + contact fields; posts to `phpmailer/enroll-mail.php`; no required fields; thank-you modal "Namaste! Enrollment Received" | **This is the only "booking" mechanism**: there is no availability, payment, or confirmation system. Phase 2 must recreate the enquiry/enrollment capture or integrate a booking provider (business decision) |
| 19 | Phone input | All forms | **Observed** | intl-tel-input 18.2.1, **default country = India (+91)**, separate dial code | Probably should default to Indonesia or auto-detect (business decision) |
| 20 | Thank-you modal | All pages | **Observed** (not triggered) | Generic text says "Enrollment Received" even for contact messages | Use separate messages |
| 21 | Google Maps embed | Home contact, `contact-us.php` | **Observed** | Embed of the "Bali Yoga Studio" place; home and contact use different `pb` strings | Lazy-load it; consider a static map + link |
| 22 | WhatsApp | Present in the HTML of 46 pages; visible link on `contact-us.php` | **Observed** | `https://wa.me/628135904695` | Keep; confirm the number with the business |
| 23 | Floating "Explore Cafe" tab | All pages (right edge) | **Observed** | Vertical tab linking to the external cafe site `https://prasadamhealingcafe.com/` | It overlaps content and the mobile menu |
| 24 | Back-to-top button | All pages | **Observed** | Fixed button | Optional |
| 25 | Social links | Header (mobile), footer | **Observed** | Instagram `instagram.com/bali.yogastudio`, YouTube `youtube.com/@BaliYogaStudio-bali`. **Facebook icon = dead `#` link**; blog share icons (Twitter/Facebook/Pinterest/LinkedIn) are `#` | Ask for the Facebook URL |
| 26 | Footer legal links | All pages | **Observed** | "Privacy Policy" and "Terms of Service" are `#` (no pages exist). FAQ refers to "Terms and Conditions", which also does not exist | A business/legal decision is required |
| 27 | Blog | `/blog/`, `/blog/blog-details.php` | **Observed** | Static listing of 6 cards; **every "Read more" opens the same single page** `blog-details.php` (no slug/ID). Sidebar categories/recent posts are `#` links. Blog-page social icons use a broken relative path (`/blog/assets/img/svg/*.svg` → 404) | See 09: low priority, do not invent posts |
| 28 | Search, filtering, login, accounts, e-commerce, checkout, payments, translation | — | **Not present** | No evidence found anywhere | — |
| 29 | Booking/appointment platform | — | **Not present** | No third-party booking widget (no Fitssey, Mindbody, Momence, Calendly, etc.) | — |
| 30 | Sticky in-page section nav (`#stickyNav`) | `daily-classes`, `wellness`, 3 × 50-hour short courses | **Observed** (markup + JS only) | Anchor links with JS smooth-scroll | Useful pattern for long course pages |
| 31 | `index.php` | `/index.php` | **Observed** | A duplicate of the home page (linked from `teachers.php`) | Redirect to `/` |

## 3. External dependencies to retain or replace

| Dependency | Used for | Retain? |
|---|---|---|
| PHPMailer endpoints `phpmailer/contact-mail.php`, `phpmailer/enroll-mail.php` (server-side, not inspected) | All lead capture | **Must be replaced or proxied** in a Next.js/Vercel build: decide on an email provider (e.g. Resend, SMTP via a route handler, Formspree) and the recipient address (presumably `info@baliyogastudio.org`, unverified) |
| YouTube | Testimonials, about video | Yes |
| Google Maps embed | Location | Yes |
| Instagram, YouTube, (missing) Facebook profiles | Social | Yes; get the Facebook URL |
| prasadamhealingcafe.com | Partner cafe | Yes, if the business confirms the relationship |
| Google review short link | Reviews | Yes |
| intl-tel-input (cdnjs/jsdelivr) | Phone field | Optional; can be replaced with a lighter component |
| Hostinger hosting / PHP | Current site | Phase 2 targets Next.js; deployment target is undecided (no deploy in Phase 1) |

## 4. Unknowns (could not be verified)

- Whether the PHPMailer endpoints currently deliver mail, to which address, and whether there is any server-side validation or spam filtering.
- Whether any JS-level validation exists beyond HTML `required` (not exercised, to avoid submitting).
- Whether the hardcoded ratings, Instagram stats, event dates, and "Active" batch statuses are maintained by anyone.
