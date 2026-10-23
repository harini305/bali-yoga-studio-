# 02 — Page & Route Inventory

Audit date: 2026-10-23. **48 URLs were crawled: 46 live (HTTP 200) and 2 broken (404).** Discovery used header and mega-menu links, the mobile menu, footer links, in-page links, and blog cards, followed recursively until no new internal URL appeared. There is **no sitemap**, and robots.txt disallows everything, so link discovery was the only method. Hidden or orphan pages that nothing links to cannot be ruled out.

Evidence per route: `data/content/<slug>.md` (full text, including hidden tabs and accordions), `data/pages/<slug>.json` (rendered DOM), `data/html/<slug>.html` (raw server HTML), `screenshots/{desktop-1440,tablet-768,mobile-390}/<slug>.jpg`. Slug = path without `.php`, with `/` replaced by `_` (home = `home`).

## 1. Coverage

| Category | Result |
|---|---|
| Fully inspected (content + DOM + 3 viewports) | 46 pages |
| Partially inspected | `/blog/blog-details.php`: one static article. The 6 cards on `/blog/` all point to it, so the other 5 "posts" have no content |
| Discovered but inaccessible | None other than the two 404s |
| Broken routes | `/teacher.php` (mobile-menu "Teachers" on every page) · `/sinior-citizen-wellness-retreat.php` (mobile-menu "Senior citizen wellness retreat" on every page). Both return Hostinger's default "This Page Does Not Exist" page |
| Duplicate routes | `/index.php` = `/` (100% identical text; linked from `teachers.php`) |
| Not linked from any menu | `/50-hours-art-of-vinyasa.php`, `/50-hours-bio-mechanics.php`, `/50-hours-hands-on-adjustment.php` (reachable only via cards on `courses.php`) |
| Dead (`#` / `javascript:void(0)`) links | Privacy Policy, Terms of Service, Facebook icon (all pages); blog sidebar categories, recent posts, and share icons |
| Interactive states not verified | Form submission and mail delivery (deliberately not submitted); hover states beyond the primary button and nav dropdowns; slider autoplay timing; sticky in-page nav on 5 pages |

## 2. Route table

Types: Home · Listing / section landing (hub) · Course detail · Short course ("Other") · Retreat detail · Workshop/Event detail · Information · Contact/enrollment · Blog. The "Recommendation" column is advisory for Phase 2.

| # | Route | Status | Type | H1 (as served) | Linked from | Recommendation |
|---|---|---|---|---|---|---|
| 1 | `/blog/` | 200 | Blog listing | Our Blogs | Footer | Low priority; implement only if business wants it — 1 real article |
| 2 | `/blog/blog-details.php` | 200 | Blog post | Blog Details / Relax & Receive: Is Sound Healing the Future of Wellnes | Blog listing (all 6 cards) | Low priority; the single article could be kept under /blog/<slug> |
| 3 | `/contact-us.php` | 200 | Contact / enquiry / enrollment | KEEP IN TOUCH | Footer | Implement |
| 4 | `/enrollment-form.php` | 200 | Contact / enquiry / enrollment | Enroll Now | Header CTA "Get Started" | Implement (core conversion); business to confirm flow |
| 5 | `/100-hour-kundalini-yoga-teacher-training.php` | 200 | Course detail (TTC/certification) | 100 Hrs Kundalini Yoga Teacher Training | Courses/Retreats/Events dropdowns | Implement via shared course template (data-driven) |
| 6 | `/100-hour-yoga-teacher-training.php` | 200 | Course detail (TTC/certification) | 100 Hrs Yoga Teacher Training Course | Courses/Retreats/Events dropdowns | Implement via shared course template (data-driven) |
| 7 | `/200-hour-kundalini-yoga-teacher-training.php` | 200 | Course detail (TTC/certification) | 200 Hrs Kundalini Yoga Teacher Training | Courses/Retreats/Events dropdowns | Implement via shared course template (data-driven) |
| 8 | `/200-hour-yoga-teacher-training.php` | 200 | Course detail (TTC/certification) | Join The Most Authentic | Courses/Retreats/Events dropdowns | Implement via shared course template (data-driven) |
| 9 | `/300-hour-kundalini-yoga-teacher-training.php` | 200 | Course detail (TTC/certification) | 300 Hrs Kundalini Yoga Teacher Training Course | Courses/Retreats/Events dropdowns | Implement via shared course template (data-driven) |
| 10 | `/300-hour-yoga-teacher-training.php` | 200 | Course detail (TTC/certification) | 300 Hours Yoga Teacher Training Course | Courses/Retreats/Events dropdowns | Implement via shared course template (data-driven) |
| 11 | `/50-hour-aerial-yoga-teacher-training-course.php` | 200 | Course detail (TTC/certification) | 50 Hrs Aerial Yoga Teacher Training | Courses/Retreats/Events dropdowns | Implement via shared course template (data-driven) |
| 12 | `/50-hour-kundalini-yoga-teacher-training.php` | 200 | Course detail (TTC/certification) | 50 Hrs Kundalini Yoga Teacher Training | Courses/Retreats/Events dropdowns | Implement via shared course template (data-driven) |
| 13 | `/50-hour-reiki-healing-course.php` | 200 | Course detail (TTC/certification) | Reiki Healing Course Level 1 & 2 | Courses/Retreats/Events dropdowns | Implement via shared course template (data-driven) |
| 14 | `/50-hour-sound-healing-course.php` | 200 | Course detail (TTC/certification) | Sound Healing Course Level 1 & 2 | Courses/Retreats/Events dropdowns | Implement via shared course template (data-driven) |
| 15 | `/50-hour-yin-yoga-teacher-training.php` | 200 | Course detail (TTC/certification) | 50 Hours Yin Yoga Teacher Training Course | Courses/Retreats/Events dropdowns | Implement via shared course template (data-driven) |
| 16 | `/50-hour-yoga-teacher-training.php` | 200 | Course detail (TTC/certification) | 50 Hours Yoga Teacher Training Course | Courses/Retreats/Events dropdowns | Implement via shared course template (data-driven) |
| 17 | `/500-hour-kundalini-yoga-teacher-training.php` | 200 | Course detail (TTC/certification) | 500 Hrs Kundalini Yoga Teacher Training Course | Courses/Retreats/Events dropdowns | Implement via shared course template (data-driven) |
| 18 | `/500-hour-yoga-teacher-training.php` | 200 | Course detail (TTC/certification) | 500 Hours Yoga Teacher Training Course | Courses/Retreats/Events dropdowns | Implement via shared course template (data-driven) |
| 19 | `/` | 200 | Home | Find Your Inner Calm | Header, mobile, footer | Implement (Home) |
| 20 | `/about-us.php` | 200 | Information | About Us | Mobile, footer | Implement; consider merging Teachers + video |
| 21 | `/faqs.php` | 200 | Information | Common Questions | Footer | Implement |
| 22 | `/teacher.php` | 404 | Information | This Page Does Not Exist | Courses/Retreats/Events dropdowns | Broken (404): fix link → Teachers; 301 → /teachers |
| 23 | `/courses.php` | 200 | Listing / section landing | Our Courses | Header "Courses" parent link | Implement as Teacher Training hub |
| 24 | `/daily-classes.php` | 200 | Listing / section landing | Daily Classes | Header, mobile, footer | Implement |
| 25 | `/events-and-workshop.php` | 200 | Listing / section landing | Workshop And Events | Header "Events" parent link | Implement as Workshops & Events hub |
| 26 | `/gallery.php` | 200 | Listing / section landing | Gallery | Mobile, footer | Implement (simple) |
| 27 | `/retreat.php` | 200 | Listing / section landing | Our Retreats | Header "Retreats" parent link | Implement as Retreats hub |
| 28 | `/teachers.php` | 200 | Listing / section landing | Our Teachers | Footer (mobile links /teacher.php) | Implement (or merge into About) |
| 29 | `/testimonials.php` | 200 | Listing / section landing | Guest Stories | Footer | Consolidate into Home/About reviews section (keep route as redirect) |
| 30 | `/wellness.php` | 200 | Listing / section landing | Wellness | Footer | Implement (spa/wellness menu); review medical claims |
| 31 | `/50-hours-art-of-vinyasa.php` | 200 | Other | 50 Hours Art Of Vinyasa | courses.php cards | Implement via shared short-course template (not in menus; linked from courses.php only) |
| 32 | `/50-hours-bio-mechanics.php` | 200 | Other | 50 Hours Bio Mechanics Yoga | courses.php cards | Implement via shared short-course template (not in menus; linked from courses.php only) |
| 33 | `/50-hours-hands-on-adjustment.php` | 200 | Other | 50 Hours Hands-On Adjustment | courses.php cards | Implement via shared short-course template (not in menus; linked from courses.php only) |
| 34 | `/index.php` | 200 | Other | Find Your Inner Calm | courses.php cards | Legacy: 301 → / |
| 35 | `/half-day-yoga-massage-and-healing-retreat.php` | 200 | Retreat detail | Half-Day Yoga, Massage & Healing / The Ultimate Quick Recovery / A Per | Courses/Retreats/Events dropdowns | Implement via shared retreat template; prices need business confirmation |
| 36 | `/one-day-yoga-and-wellness-retreat.php` | 200 | Retreat detail | One Day Yoga & Wellness Retreat / Your One-Day Sanctuary of Peace / Is | Courses/Retreats/Events dropdowns | Implement via shared retreat template; prices need business confirmation |
| 37 | `/panchakarma-detox-retreat.php` | 200 | Retreat detail | Panchakarma Detox Retreat / Deep internal Cleansing of Body & Soul / I | Courses/Retreats/Events dropdowns | Implement via shared retreat template; prices need business confirmation |
| 38 | `/senior-citizen-wellness-retreat.php` | 200 | Retreat detail | Senior Citizen Wellness / Rejuvenate Your Spirit in Your Golden Years  | Courses/Retreats/Events dropdowns | Implement via shared retreat template; prices need business confirmation |
| 39 | `/sinior-citizen-wellness-retreat.php` | 404 | Retreat detail | This Page Does Not Exist | Courses/Retreats/Events dropdowns | Broken (404, typo): 301 → senior retreat page |
| 40 | `/women-wellness-retreat.php` | 200 | Retreat detail | Women Wellness Retreat / Reconnect with Your Inner Goddess in Bali / A | Courses/Retreats/Events dropdowns | Implement via shared retreat template; prices need business confirmation |
| 41 | `/ayurveda-workshop.php` | 200 | Workshop/Event detail | Ayurveda Workshop | Courses/Retreats/Events dropdowns | Implement via shared workshop template, or fold into one events page; dates are expired (2024) |
| 42 | `/breathwork-and-pranayama-workshop.php` | 200 | Workshop/Event detail | Breathwork & Pranayama | Courses/Retreats/Events dropdowns | Implement via shared workshop template, or fold into one events page; dates are expired (2024) |
| 43 | `/international-yoga-day-program.php` | 200 | Workshop/Event detail | International Yoga Day | Courses/Retreats/Events dropdowns | Implement via shared workshop template, or fold into one events page; dates are expired (2024) |
| 44 | `/kirtan-evening.php` | 200 | Workshop/Event detail | Kirtan Evening | Courses/Retreats/Events dropdowns | Implement via shared workshop template, or fold into one events page; dates are expired (2024) |
| 45 | `/kundalini-yoga-workshop.php` | 200 | Workshop/Event detail | Kundalini Yoga | Courses/Retreats/Events dropdowns | Implement via shared workshop template, or fold into one events page; dates are expired (2024) |
| 46 | `/sound-healing-workshop.php` | 200 | Workshop/Event detail | Sound Healing Workshop | Courses/Retreats/Events dropdowns | Implement via shared workshop template, or fold into one events page; dates are expired (2024) |
| 47 | `/yin-yoga-and-deep-relaxation-workshop.php` | 200 | Workshop/Event detail | Yin Yoga & Relaxation | Courses/Retreats/Events dropdowns | Implement via shared workshop template, or fold into one events page; dates are expired (2024) |
| 48 | `/yoga-teacher-training-introduction-workshop.php` | 200 | Workshop/Event detail | Yoga Teacher Training Intro | Courses/Retreats/Events dropdowns | Implement via shared workshop template, or fold into one events page; dates are expired (2024) |
### Proposed URL consolidation (advisory)

- Use clean routes (`/teacher-training/200-hour-yoga`, etc.) with **301 redirects from every legacy `.php` URL**. The site currently has no search visibility because of robots.txt, so the SEO risk is low, but redirects protect shared links and bookmarks.
- 17 course pages → 1 data-driven course template (2 variants). 5 retreats → 1 template. 8 workshops → 1 template or a single events page with entries.
- `testimonials.php` → a reviews section; `index.php` → `/`; the 2 broken routes are fixed at the link level.

## 3. Shared site structure (current)

- **Desktop header (≥1200px):** Home · Daily Classes · Courses ▾ (mega menu: *Multi Style* 50/100/200/300/500 · *Kundalini* 50/100/200/300/500 · *Short Courses* Yin, Aerial, Sound Healing L1&2, Reiki L1&2) · Retreats ▾ (5) · Events ▾ (8) · [Get Started → enrollment]. **No About, Teachers, Gallery, FAQ, or Contact.**
- **Mobile menu (<1200px):** Home · Daily Classes · About ▾ (About Us, Teachers→404, Gallery) · Courses ▾ · Retreats ▾ · Workshops & Events ▾ · Gallery · Get Started · social icons.
- **Footer:** brand line · Navigation (Home, About Us, Wellness, Daily Classes, Contact) · Quick Links (Our Teachers, Gallery, Testimonials, FAQs, Blog) · Contact (info@baliyogastudio.org, Ubud, Gianyar, Bali, Indonesia) · Follow Us (Facebook `#`, Instagram, YouTube) · © 2026 · Privacy Policy `#` · Terms of Service `#`.
- **Global overlays:** floating "Explore Cafe" tab → prasadamhealingcafe.com, back-to-top, thank-you modal, video modal.

---

# Part A — Core & information pages


Phase 1, read-only. Evidence: `data/content/*.md`, `data/pages/*.json`, `data/routes.json`, `data/responsive-metrics.json`, `data/interaction-tests.json`, `data/links-forms-embeds.json`, `data/html/*.html` (server HTML), screenshots. Capture date 2026-10-23.
Legend: **[V]** = verified in captured evidence; **[I]** = inferred (not directly proven by evidence); **[V: custom.js]** = stated in the audit brief, not re-verifiable from local files.

Common to every page below (not repeated per page) **[V]**:
- No `<link rel=canonical>`, no `og:*` tags, no `robots` meta (routes.json: canonical/ogTitle/ogImage/robots = null for all).
- JSON-LD on every 200 page: `LocalBusiness` (name "Bali Yoga Studio", email info@baliyogastudio.org, telephone "+628135904695", address "Jl. Bisma No.78", Ubud, Bali 80571, ID; geo -8.5107036, 115.2584491; sameAs Instagram + YouTube only) + `WebSite`. Inner pages add `BreadcrumbList`; FAQs adds `FAQPage`.
- Scripts: bootstrap.bundle, swiper, custom.js?v=20052026, intl-tel-input 18.2.1 (cdnjs + utils via jsdelivr), Google Analytics (gtag G-9Q6H0QETRF + legacy analytics.js).
- Image counts in pages/*.json include ~19 chrome images (header 4, mobile header 1, sidebar 9, footer 4, cafe tab 1).
- No horizontal overflow at 1440 / 768 / 390 on any captured page (responsive-metrics `horizOverflow:false`).
- Desktop `main-header` is hidden ≤1199px (CSS `@media (max-width:1199px){.main-header{display:none}.mobile-top-header{display:block}}`), so tablet & mobile use the mobile header + sidebar.

---

## Shared components

### Desktop header — `header.main-header` [V]
- Fixed. Height 121px at top; after scroll gains `.scrolled` → 81px, background `rgba(31,31,31,1)`.
- Logo `assets/img/logo.webp` (alt **"WPY Studio"**) → `https://baliyogastudio.org/`.
- Top-level items (interaction-tests `desktop.header`; 4 dropdowns): **Home, Daily Classes, Courses ▾, Retreats ▾, Events ▾**, + CTA **"Get Started" → /enrollment-form.php**.
- **Not in desktop nav:** About Us, Teachers, Gallery, Testimonials, FAQs, Blog, Contact, Wellness (reachable only from footer).

Desktop menu tree (labels from home.json nav links; screenshot `interactions/desktop-dropdown-2.jpg`):
- Home → `/`
- Daily Classes → `daily-classes.php`
- Courses → `/courses.php` — mega-menu, 3 columns:
  - **MULTI STYLE**: 50 Hours Yoga Foundation TTC → `/50-hour-yoga-teacher-training.php`; 100 Hours Yogic Living TTC → `/100-hour-yoga-teacher-training.php`; 200 Hours Transformative Yoga Flow TTC → `/200-hour-yoga-teacher-training.php`; 300 Hours Yoga Mastery TTC → `/300-hour-yoga-teacher-training.php`; 500 Hours Expansion Yoga TTC → `/500-hour-yoga-teacher-training.php`
  - **KUNDALINI**: 50 Hours Sacred Seeds of Kundalini TTC → `/50-hour-kundalini-yoga-teacher-training.php`; 100 Hours Kundalini Immersion TTC → `/100-hour-kundalini-…`; 200 Hours Alchemy of Kundalini Kriya TTC → `/200-hour-kundalini-…`; 300 Hours Mystic Kundalini Kriya TTC → `/300-hour-kundalini-…`; 500 Hours Mastering Kundalini Kriya TTC → `/500-hour-kundalini-…`
  - **SHORT COURSES**: Yin Yoga TTC → `/50-hour-yin-yoga-teacher-training.php`; Aerial Yoga TTC → `/50-hour-aerial-yoga-teacher-training-course.php`; Sound Healing Course (Level 1 & 2) → `/50-hour-sound-healing-course.php`; Reiki Healing Course (Level 1 & 2) → `/50-hour-reiki-healing-course.php`
- Retreats → `retreat.php`: One day yoga and wellness retreat → `/one-day-yoga-and-wellness-retreat.php`; Half Day Yoga Massage & healing Retreat → `/half-day-yoga-massage-and-healing-retreat.php`; Panchakarma detox retreat → `/panchakarma-detox-retreat.php`; Senior citizen wellness retreat → `/senior-citizen-wellness-retreat.php` (correct spelling on desktop); Women wellness retreat → `/women-wellness-retreat.php`
- Events → `/events-and-workshop.php`: Kirtan Evening; Yoga teacher training introduction workshop; International Yoga Day program; Yin yoga and deep relaxation workshop; Ayurveda workshop; Kundalini yoga workshop; Breathwork and pranayama workshop; Sound healing workshop (each → matching `/<slug>.php`)
- Get Started → `/enrollment-form.php`
- Not in any menu: 50-Hour Hands-On Adjustment, 50-Hour Art of Vinyasa, 50-Hour Bio Mechanics pages (they appear only as enrollment-form options) [V for nav absence].

### Mobile header + sidebar — `header.mobile-top-header`, `div.mobile-sidebar` [V]
- Mobile top header: logo + hamburger (screenshot `interactions/mobile-home-above-fold.jpg`; CSS defines a centred `.mobile-top-header__cta` but no CTA is visible in the screenshot [I]).
- Sidebar: fixed, slides from right, width `min(340px,85vw)` (340 at 390px), overlay `div.sidebar-overlay`, close icon.
- Mobile menu tree (interaction-tests `mobile.menu.links`):
  - HOME → `/`
  - DAILY CLASSES → `/daily-classes.php`
  - ABOUT → `javascript:void(0)` (toggle): About Us → `/about-us.php`; **Teachers → `/teacher.php` (404)**; Gallery → `/gallery.php`
  - COURSES → `/courses.php`: MULTI STYLE / KUNDALINI / SHORT COURSES lists identical to desktop
  - RETREATS → `retreat.php`: same 5 items, but **Senior citizen wellness retreat → `/sinior-citizen-wellness-retreat.php` (404)**
  - WORKSHOPS & EVENTS → `/events-and-workshop.php`: same 8 items
  - GALLERY → `/gallery.php` (duplicate of About ▸ Gallery)
  - Get Started → `/enrollment-form.php`
  - Social: Facebook → **`#` (dead)**, Instagram → `https://www.instagram.com/bali.yogastudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`, YouTube → `https://www.youtube.com/@BaliYogaStudio-bali`
- Not in mobile menu: Contact, Wellness, Blog, Testimonials, FAQs.

### Footer — `footer.wpy-studio-footer` [V] (476px tall)
- Brand: logo (alt "WPY Studio") → `/`; "Your sanctuary for authentic yoga and holistic healing in the heart of Ubud, Bali."
- **NAVIGATION**: Home → `/`; About Us → `/about-us.php`; Wellness → `/wellness.php`; Daily Classes → `/daily-classes.php`; Contact → `/contact-us.php`
- **QUICK LINKS**: Our Teachers → `/teachers.php` (correct URL — differs from mobile menu); Gallery → `/gallery.php`; Testimonials → `/testimonials.php`; FAQs → `/faqs.php`; Blog → `/blog/`
- **CONTACT**: info@baliyogastudio.org → `mailto:`; "Ubud, Gianyar, Bali, Indonesia" (plain text, no map link). **No phone/WhatsApp in footer.**
- **FOLLOW US**: Facebook icon → **`https://baliyogastudio.org/#` (dead)**; Instagram → IG URL above; YouTube → YT URL above.
- "© 2026 Bali Yoga Studio. All rights reserved."
- **Privacy Policy → `/#` (dead)**; **Terms of Service → `/#` (dead)** — confirmed in `links-forms-embeds.dead_anchor_links` (46 pages each; "(icon)" dead link count 93 = FB icons in sidebar+footer on every page + contact page).

### Thank-you modal — `div#thankYouModal.thank-you-modal` [V]
- "×" and "Done" → `closeThankyouModal()`. Heading "Namaste! Enrollment Received"; body "Thank you for choosing Bali Yoga Studio. We've received your application and will contact you shortly via email with the next steps."
- Present on every page (incl. pages with only the contact form) → contact-form success would show "Enrollment Received" wording [I].

### Video modal — `div#videoModal.video-popup-modal` [V]
- On home, teachers, testimonials. Iframe empty until `openVideoModal('<id>')`; opened state src `https://www.youtube.com/embed/7VRTh7WXMLo?autoplay=1&rel=0`; close "×" → `closeVideoModal()`. Triggers: `7VRTh7WXMLo`, `7O7wWhb5FN8`, `YUSfg5ZIQi8`, `zmDFEg6J6ig`, `-PzfniSEOwE`, `VrgioYH0mcM`. Screenshot `interactions/home-video-modal.jpg`.

### Floating cafe tab — `div#floatingCafeWrapper.floating-cafe-wrapper` [V]
- Fixed right-edge vertical tab, cup icon `assets/img/icons/cup-icon.webp`, text "Explore / Cafe" → `https://prasadamhealingcafe.com/` (external). On every page; overlaps hero at 390px (mobile screenshot).

### Back-to-top — `button#backToTop.back-to-top` [V]
- Fixed "↑" button.

---

## Pages

### Home
- **URL / status:** `https://baliyogastudio.org/` — 200 [V]
- **Type / purpose:** Landing page; overview of every offer + contact form.
- **SEO:** title "Bali Yoga Studio | Best Yoga Classes & Meditation in Bali"; meta description "Discover peace at Bali Yoga Studio. Join our expert-led yoga classes, meditation, and wellness sessions for a balanced life. Start your journey today!"; H1 "Find Your Inner Calm" (count 1; slides 2–4 headlines are H2); JSON-LD: LocalBusiness + WebSite. 1,281 words. 18 H2s.
- **Sections (original order):**
  1. `banner-section` — 4-slide fade hero slider (Swiper)
  2. `wellcome-section spacing` — "Welcome To / Discover the Path to Inner Peace & Holistic Healing" + 9-item Programs list
  3. `premium-schedule-wrapper spacing` — "Weekly Class Schedule" (5 drop-in classes)
  4. `about-section spacing` — "Benefits of Practicing with Us" + 8 bullets
  5. `retreats-slider-section spacing bg` — "Transformative Retreats", 6 cards (no links)
  6. `workshop-event-section spacing` — "Upcoming Workshops & Events" slider, 4 events
  7. `blog-section spacing bg` — "Fresh From Our Blog", 3 posts
  8. `wellness-spa-section spacing` — "Ayurveda Wellness Spa", 4 category tabs × treatment pills
  9. `lotus-divider` — decorative image
  10. `instagram-wrapper spacing` — "Moments From Our Sanctuary", mock IG profile card
  11. `healing-classes-wrapper bg spacing` — "Teacher Training Courses" (200/300/500)
  12. `video-review-section spacing` — "Yoga Student Stories", 6 video cards
  13. `video-popup-modal` (#videoModal)
  14. `healing-classes-wrapper bg spacing` — "Healing Classes & Courses" slider, 4 cards
  15. `cafe-wrapper spacing` — "Healing Herbs Cafe Spacial", 15-image slider
  16. `review-wrapper bg spacing` — "Reviews & Experience with Bali Yoga Studio", 3 ratings + 3 testimonial slider
  17. `contact-wrap spacing` — "Keep in Touch with Us", Google Map + contact form
- **Key facts to retain [V, verbatim]:**
  - Hero slides: (1) eyebrow "Your Sanctuary for Yoga & Meditation", H1 "Find Your Inner Calm", "In the middle of life’s chaos, we offer you a quiet corner to breathe, move, and just be." CTA "Explore Courses" → `/200-hour-yoga-teacher-training.php`. (2) "Rejuvenate & Heal" / "Experience True Holistic Wellness" / "Expert-led retreats, sound healing, and personalized private classes designed to nourish your mind, body, and soul." CTA "Book a Retreat" → `/enrollment-form.php`. (3) "Master the Art" / "Become a Certified Yoga Teacher" / "Embark on a life-changing journey with our master Guruji Vishnu Panigrahi." CTA "Join Training" → `/daily-classes.php` (mismatch). (4) "Mindfulness & Balance" / "A Way of Living" / "We don’t focus on how flexible your body is, but on how open your heart becomes." CTA "Explore Daily Class" → `/daily-classes.php`.
  - Programs list: "Join daily yoga Classes", "Prayanama Meditaion & Yoga", "Reiki, Sound Healing", "Retreat 1hr to 1 month", "Workshops & Events", "Ecstatic Dance", "Massage & Wellness", "Panchakarma", "Pure Vegan Cafe" (icons only, no links).
  - Weekly schedule ("Bali Yoga Studio presents Drop-in Classes"; all 60 min): Hatha Flow 8:00 AM Everyday; Pilates 9:30 AM Every Monday; Aerial Yoga 10:00 AM Every Sunday; Meditation 5:00 PM Friday & Saturday; Sound Healing 7:00 PM Everyday. CTA "Explore Daily Classes" → `/daily-classes.php`. (Matches daily_classes.md.)
  - Benefits: Physical Strength & Posture; Mental Peace & Clarity; Reduced Anxiety & Stress; Better Sleep & Immunity; Emotional Healing; Lifestyle Transformation; Authentic Yoga Philosophy; Mindful Living Habits.
  - Retreat cards (tag / title): Yoga & Meditation / Yoga Retreat; Mind-Body Healing / Yoga Wellness Retreats; Ayurvedic Detox / Panchakarma Retreat; Gentle Care / Senior Citizen Retreat; Sisterhood Circles / Women Retreat; Rejuvenation / Detox Retreat ("organic juice fasting, cold-pressed raw nutrition, colon hydrotherapy…"). No CTAs/links.
  - Events (no year): Sound Healing — 15 Oct — "Full Moon Sound Bath & Cacao"; Yoga Workshop — 22 Oct — "Inversions Masterclass"; Breathwork — 05 Nov — "Pranayama Deep Dive"; Community — 12 Nov — "Ecstatic Dance Bali". All "Book Now" → `/enrollment-form.php`.
  - Blog teasers: 04/02/2026 "Relax & Receive: Is Sound Healing the Future of Wellness?"; 20/11/2025 "How I Build Magic in Every Class: The 5 S-Words of Teaching Yoga"; 29/09/2025 "Ahimsa in Action: Yoga, Justice & Activism (Part 3/3)". All "Read More" → `/blog/` (listing, not posts). "SEE ALL BLOGS" → `blog/`.
  - Spa menu (tab → treatment — price — duration; all "Book Now" → `enrollment-form.php`):
    - Massages: Abhyanga Massage IDR 903,000 ($50) / 60 mins; Deep Tissue Massage IDR 1,174,000 ($65) / 90 mins; Balinese Massage IDR 813,000 ($45) / 60 mins; Thai Massage IDR 994,000 ($55) / 90 mins
    - Therapy: Sound Healing Therapy IDR 723,000 ($40) / 45 mins; Reiki Energy Healing IDR 1,084,000 ($60) / 60 mins
    - Beauty: Ayurvedic Facial IDR 632,000 ($35) / 45 mins
    - Retreats: Panchakarma Detox Retreat IDR 17,161,000 ($950) / 7 Days
  - Instagram card: "@bali.yogastudio", "🧘 Authentic Yoga & Wellness in Ubud, Bali Daily Classes · Teacher Trainings · Retreats", "250+ Posts", "15K Followers", "320 Following" (hard-coded HTML).
  - TTC: "200-Hour Yoga Teacher Training" IDR 16,240,000 ($899) → 200-hour page; "300-Hour Advanced Yoga TTC" IDR 23,465,000 ($1,299) → 300-hour page; "500-Hour Yoga Master TTC" IDR 36,110,000 ($1,999) → 500-hour page ("…for complete mastery and Yoga Alliance certification"). Match course-page headline fees.
  - Healing classes: "Sound Healing Therapy Course" badge "Over 100+ Hr" IDR 10,820,000 ($599) → `/50-hour-sound-healing-course.php`; "Reiki Energy Healing Certification" "Level 1 & 2" IDR 8,129,000 ($450) → `/50-hour-reiki-healing-course.php`; "Ayurvedic Therapist Training" "Diploma" IDR 21,677,000 ($1,200) → `/ayurveda-workshop.php`; "Kundalini Yoga Workshop" "5 Days" IDR 6,322,000 ($350) → `/kundalini-yoga-workshop.php`.
  - All USD↔IDR pairs imply a fixed rate ≈ 18,060–18,075 IDR/USD [I].
  - Cafe: heading "Healing Herbs Cafe Spacial"; body names "our Sattva Cafe"; 15 images `assets/img/cafe/cafe-1..15.webp`.
  - Ratings: Google 4.6 "Based on verified student reviews"; Facebook 4.5 "Student recommendations & feedback"; TripAdvisor 4.5 "Reviews from retreat participants" (no links to sources).
  - Testimonials: Jenny Morris — Canada — "I had a fantastic experience at WPYS, the teachers are so welcoming…" (mentions "Guru Vishnu"); Sherry Saifullah — New Zealand — "I attended the opening day ceremony and it was soooo wholesome! Felt like I was transported to India…"; Sofia Schneider — Germany — "A wonderful studio with very experienced and amazing teachers…".
  - Video stories: "Student Review" 2:00 (7VRTh7WXMLo); "Student Review" 2:00 (7O7wWhb5FN8); Shella Eve Simaro 1:45; Kirsty Wallace 2:10; Refika Ji 3:20; Remi Butler 1:15.
  - Contact block: map (place "Bali Yoga Studio", place-id 0x8c1377c1c5267974) + form; no address/phone/email text in this block.
- **Assets:** hero `assets/img/home/bali-banner-1..4.webp`; `home/why-to-attend.webp`; retreat imgs `home/yoga-retreat.webp`, `wellness-img.jpg`, `home/panchakarma.webp`, `home/senior-citizen-retreat.webp`, `private-class.webp`, `home/detox-retreat.webp`; events `home/full-moon.webp`, `home/inversions-masterclass.webp`, `home/pranayama.webp`, `home/esthetic-dance.webp`; blog `blog/relax-and-receive.webp`, `blog/teaching-yoga.webp`, `blog/ashima-blog.webp`; spa `home/*-massage-img.webp`, `sound-healing2.webp`, `home/reiki-healing-img.webp`, `home/ayurvedic-facial-img.webp`; TTC `home/200|300|500-hr-ttc.webp`; `home/ayurvedic-therapist.webp`, `home/chakra-balancing.webp`; testimonials `testimonial/dewar-canada.webp`, `flower-canada.webp`, `nicola-finland.webp`; review logos `reviews/*.webp`; program icons `svg/*.png`; video thumbs `thumbnail/thumb-1..4.webp` + img.youtube.com. **104 `<img>` (33 without alt, 77 lazy) + 247 CSS bg images** [V].
- **Interactive elements:** Swipers — hero (4, fade, arrows+dots), workshops (4), healing-courses (4), cafe (15), testimonials (3) [V]; Bootstrap pill tabs in spa (4 categories, nested pills); video modal (6 triggers); hover button anim; contact form `common-form` (form_id "home-contact"): name, email, phone (intl-tel-input, default India), subject, message — **no required attributes; checkValidity() true when empty** [V]; Google Maps iframe.
- **Responsive notes:** height 12,654 (1440) → 15,858 (768) → 18,512 (390). H1 55px → 34.56px → 30px; body p 20px desktop / 16px. No overflow. Mobile above-fold screenshot shows hero eyebrow but H1/sub/CTA not visible at capture time (possibly animation) [I]; cafe tab overlaps hero.
- **Dependencies:** common-form → phpmailer/contact-mail.php, success when response text contains "success" [V: custom.js]; intl-tel-input (India default) [V]; Google Maps embed [V]; YouTube (thumbnails + modal) [V]; Instagram profile link [V]; prasadamhealingcafe.com (cafe tab) [V]; GA4 [V].
- **Issues / risks:** see issues-core.md — "WPYS" + "Felt like I was transported to India" in reviews; "Prayanama Meditaion"; "Healing Herbs Cafe Spacial" + three different cafe names; slide-3 "Become a Certified Yoga Teacher / Join Training" → daily-classes; events without year, two already past at capture (15 & 22 Oct; capture 23 Oct 2026); blog date 04/02/2026 vs "Oct 15, 2025" on blog pages; all "Read More" → listing; hard-coded IG counts; ratings unlinked/unsourced; healing-course prices conflict with linked pages (Sound $599 vs $349, Reiki $450 vs $349, Kundalini $350 vs $20, Ayurvedic Therapist Diploma $1,200 → Ayurveda workshop $35); "Over 100+ Hr" sound course links to a 50-hour page; Panchakarma $950/7 Days vs panchakarma page $149/$249; retreat cards not linked; Detox Retreat claims "colon hydrotherapy" (no dedicated page) ; testimonial image filenames name other people/countries; 33 imgs without alt; no canonical (duplicate at /index.php).
- **Redesign recommendation:** Keep the section narrative but cut to ~10 sections: hero (single clear value prop + 2 CTAs), pillars (Classes / Teacher Training / Retreats / Wellness / Cafe) each linking to real pages, schedule, featured TTCs with prices from a single data source, real reviews with source links, events driven by dated data (auto-hide past), contact strip with phone/WhatsApp/address. Make all prices/ratings/IG counts data-driven; fix CTA targets; one H1.

### Index (index.php — duplicate of Home)
- **URL / status:** `https://baliyogastudio.org/index.php` — 200, no redirect (final URL unchanged) [V]
- **Type / purpose:** Duplicate of home (content.md identical except URL line).
- **SEO:** identical title/description/H1/JSON-LD to home; no canonical on either → duplicate-content risk.
- **Sections:** identical to Home (rendered capture additionally lists `lotus-divider` as a block; same 17 content sections).
- **Key facts:** same as Home.
- **Assets:** same (104 img).
- **Interactive:** same; form_id "home-contact".
- **Responsive notes:** 12,725 / 15,926 / 18,562 px (≈ home).
- **Dependencies:** same.
- **Issues / risks:** linked internally from Teachers breadcrumb "HOME" → `/index.php` (routes.json `from_: teachers`) [V].
- **Redesign recommendation:** 301 `/index.php` → `/`; set canonical `/`; fix Teachers breadcrumb.

### About Us
- **URL / status:** `/about-us.php` — 200 [V]
- **Type / purpose:** Brand story / philosophy.
- **SEO:** title "About Us | Bali Yoga Studio - Our Story & Philosophy"; meta "Learn about Bali Yoga Studio, our philosophy of mindfulness, and why our Bali sanctuary is the perfect place for your yoga and meditation journey."; H1 "About us" (count 1); JSON-LD LocalBusiness, WebSite, BreadcrumbList. 404 words.
- **Sections:**
  1. `inner-banner` — H1 "About us", breadcrumb Home › About us
  2. `about-us spacing` — "10 + year" badge, "Our Story / A Decade of Spiritual Growth in Bali", 2 paragraphs, Bhagavad Gita quote
  3. `sister-science bg spacing` — eyebrow "Interested In The" / "Experience the Power of Yoga", 3 paragraphs + YouTube embed
  4. `why-choose-us spacing` — "Our Philosophy / Why Choose Our Bali Sanctuary", 4 features
- **Key facts [V]:** "10 + year"; "A Decade of Spiritual Growth in Bali"; "our studio is designed to be your "second home""; "We believe that Mindfulness is not a luxury; it’s a way of living."; "Our teachings are deeply rooted in traditional wisdom, enriched by the sacred energy of the "Island of the Gods"."; "We are more than just a school; we are a family dedicated to spreading peace, one soul at a time."; quote "Yoga is the journey of the self, through the self, to the self." — Bhagavad Gita. Features: Authentic Guidance; Inclusive Environment; Holistic Approach; Premium Sanctuary. **No founder name, founding year, team, address or history facts** on the page.
- **Assets:** `about-us/about-banner.webp`, `about-us/about-img1.webp`, `about-us/about-img2.webp`, icons `svg/quote|tree|pin|meditation|world.svg`; YouTube `Ul4fpLB1lgo`. 28 img (20 no alt).
- **Interactive:** YouTube iframe only.
- **Responsive notes:** 3,802 / 4,634 / 4,334 px; H1 64.8 → 34.56 → 30px; H2 24px desktop (small vs H1). No overflow.
- **Dependencies:** YouTube embed.
- **Issues / risks:** "10 + year"/"A Decade" unsupported by any date on site (teacher bios say Hari Dharma "began teaching in 2022") — needs confirmation; eyebrow "Interested In The" is a dangling fragment; class `sister-science` (template residue, invisible); paragraph 1 largely duplicates Home welcome text; 3-col image alt "Our Classes Banner" on About images; Guruji Vishnu Panigrahi (named on Home/courses as "master") absent here.
- **Redesign recommendation:** Rebuild as a real story page: founder/lineage (Vishnu Panigrahi if confirmed), founding year, location in Ubud, values, team teaser → Teachers, video, CTA to classes/TTC. Needs business input.

### Teachers
- **URL / status:** `/teachers.php` — 200 [V]
- **Type / purpose:** Teacher profiles + video testimonials.
- **SEO:** title "Our Masters & Instructors | Bali Yoga Studio"; meta "Meet the heart of Bali Yoga Studio. Our experienced masters, Guruji Vishnu and Hari Dharma Ji, guide you with wisdom and compassion on your yoga journey."; H1 "Our Teachers" (1); each teacher name is H2; JSON-LD LocalBusiness, WebSite, BreadcrumbList. 1,309 words.
- **Sections:**
  1. `inner-banner` — H1 "Our Teachers", breadcrumb "Home" (→ `/index.php`) › "our teachers"
  2. `teacher-section spacing` — 9 teacher cards (photo, name, role, bio)
  3. `lotus-divider`
  4. `video-review-section spacing` — same 6 video stories as Home
  5. `video-popup-modal`
- **Key facts — every teacher (name / role / experience as written) [V]:**
  1. Yogi Ashutosh Mishra — "Hatha Yoga & Therapeutic Yoga Teacher" — Rishikesh-born; Bachelor’s in yogic science (University of Patanjali, 3 yrs); master’s in yoga therapy (Uttarakhand Sanskrit University); no years-of-experience figure. Img alt "Guruji Bali".
  2. Yogi Naveen — "Hatha, Ashtanga & Prenatal Yoga Teacher Trainer" — "teaching Yoga Teacher Training since 2015"; "trained over 1000 teachers"; "currently works with one of India's leading Prenatal - Postnatal Yoga school in Rishikesh, India." Img alt "Haripriya Ji".
  3. Hari Dharma — "Meditation & Healing" — born Tabanan, Bali, June 6, 1989; Ashram Parama Dhama 2007–2014; "began teaching in 2022"; "For the last three years, he has been teaching philosophy and meditation at World Peace Yoga School in Bali."
  4. Yogi Akshant Ji — "Hatha Yoga & Vinyasa Flow Guru" — "over 5 years of teaching experience across Bali and Rishikesh"; 200h + 300h YTT, Aerial Yoga, Anatomy, Sports Therapy certs (bio written in first person).
  5. Yogi Sunil — "Hatha Yoga, Pranayama & Meditation Teacher" — "about 15 years of long experience of teaching" (stated twice); Garhwal University MA English; Kriya Yoga Ashram, Sivananda, Kaivalyadham. Img alt "Yogi Akshant Ji".
  6. Mandeep Bhatt — "Pranayama, Mantra & Kundalini Yoga Teacher" — "ardent student of Vedic Study since last 20 years… teaching… at World Peace Yoga School Rishikesh India."
  7. Yogi Rohit Kumar — "Yoga Theory & Philosophy Teacher" — M.A. English, L.L.B.; "Yoga practitioner for many years".
  8. Umakanta Sahoo (Guna) — "Marma Therapist & Mallakhamb (Pole Yoga) Trainer" — born Puri, Odisha "05.06.1991"; Mallakhamb "before 10 year ago".
  9. Sujata Ray (Mili) — "Naturopathy, Acupressure & Yoga Teacher" — born 1993; "Right now she is 23years old"; "14 times gymnastic national player", "ten time mallakhamb national players".
  - **Not listed:** Guruji Vishnu Panigrahi (named in this page's own meta description and on Home/course pages).
- **Assets:** `common-banner-img.webp`; `teacher/yogi-ashutosh-mishra.webp`, `yogi-naveen.webp`, `teacher-img-hari-dharma.webp`, `teacher-img-akshat.webp`, `yogi-sunil.webp`, `mandeep-bhatt.webp`, `yogi-rohit-kumar.webp`, `guna-ji.webp`, `sujata-ray.webp`. 36 img (15 no alt).
- **Interactive:** video thumbnails → video modal.
- **Responsive notes:** 5,133 / 8,464 / 10,699 px (mobile ~2× desktop: long bios unbroken). H2 22 → 18px.
- **Dependencies:** YouTube.
- **Issues / risks:** Bios copied from World Peace Yoga School/Rishikesh context (explicit "World Peace Yoga School" twice); many grammar errors (Guna, Sujata bios largely unreadable: "Guna bornas…", "he quire many western and indian people", "marbolious treatment", first/third person mixed "cured me"); stale age "23years old"; wrong image alts; meta mentions teacher not on page; it is unknown which teachers actually teach in Bali — business decision; breadcrumb → index.php; mobile menu links to `/teacher.php` (404) instead of this page.
- **Redesign recommendation:** Card grid with short bios (≤80 words, edited), role, specialities, years; "Read full bio" expand; lead with the lead teacher; verify roster with business; correct alts.

### Teacher (404)
- **URL / status:** `/teacher.php` — **404** [V]
- **Type / purpose:** Broken link target; host default error page ("This Page Does Not Exist", meta "Oops, looks like the page is lost.", image `/htdocs_error/page_not_found.svg`), no site header/footer, 3 console 404 errors.
- **Linked from:** mobile sidebar ABOUT ▸ "Teachers" on every page (home.json nav link `Teachers → /teacher.php`; links-forms-embeds `internal_link_targets_not_200`) [V].
- **Redesign recommendation:** Fix menu link to `/teachers.php` (or new route) and 301 `/teacher.php`; add branded 404 page with nav.

### Testimonials
- **URL / status:** `/testimonials.php` — 200 [V]
- **Type / purpose:** Written guest testimonials + video stories.
- **SEO:** title "Guest Testimonials - Bali Yoga Studio"; meta description **missing**; H1 "Guest Stories" (1); JSON-LD LocalBusiness, WebSite, BreadcrumbList. 330 words.
- **Sections:**
  1. `inner-banner` — H1 "Guest Stories"
  2. `testimonial-page-section spacing` — "Voices of Peace / What Our Guests Say", `testimonial-marquee-container` (cards duplicated for loop)
  3. `lotus-divider`
  4. `video-review-section spacing` — same 6 videos as Home
  5. `video-popup-modal`
- **Key facts — every name / descriptor [V]:** Sarah Jenkins — Yoga Teacher, USA — "Bali Yoga Studio transformed my practice…"; Michael Chen — Wellness Blogger, Singapore — "A life-changing retreat…"; Emma Thompson — Artist, UK — "The perfect escape from my busy life. I came for a 1-day retreat and stayed for a week…"; David Rodriguez — Professional Athlete, Australia — "Never realized how much my body needed this…"; Anjali Rao — Corporate Executive, India — "A perfect digital detox…"; Sven Lindberg — Digital Nomad, Sweden — "Great wifi, better yoga…". (6 unique; each rendered twice for the marquee.) Videos: Student Review ×2, Shella Eve Simaro, Kirsty Wallace, Refika Ji, Remi Butler.
- **Assets:** `testimonial-page-banner.webp`; avatars reuse `testimonial/dewar-canada.webp` (alt "Sarah J."), `flower-canada.webp` (alt "Michael C."), `nicola-finland.webp` (alt "Emma T."); other 3 have no photo. 39 img.
- **Interactive:** CSS marquee; video modal.
- **Responsive notes:** 3,052 / 3,647 / **9,355** px (mobile 3× desktop — marquee cards stack).
- **Dependencies:** YouTube.
- **Issues / risks:** Written testimonials look generic/placeholder (stock-like names, no dates, no source) and do not overlap with Home's three reviewers (Jenny Morris, Sherry Saifullah, Sofia Schneider) — authenticity must be confirmed (consumer-protection risk); photos reused from files named for other people; missing meta description.
- **Redesign recommendation:** Use only verified reviews (ideally pulled/linked from Google), with name, country, programme, date; merge with Home reviews into one data source; keep video stories with real names.

### Gallery
- **URL / status:** `/gallery.php` — 200 [V]
- **Type / purpose:** Filterable photo gallery.
- **SEO:** title "Gallery | Bali Yoga Studio"; meta description **missing**; H1 "Gallery" (1); no H2; 7 words of text; JSON-LD LocalBusiness, WebSite, BreadcrumbList.
- **Sections:**
  1. `inner-banner` — H1 "Gallery" (banner reuses `home/bali-banner-2.webp`)
  2. `gallery-nav-wrap` — filter buttons
  3. `gallery-container` — grouped images
- **Key facts [V]:** Visible filters: All, Yoga, Food, Accommodation. **Retreat, Wellness, Events buttons are HTML-commented out** (html/gallery.html lines 518–522), and their groups "Sacred Retreats", "Wellness Sanctuary", "Sangha Events" are empty/commented. Groups present: "Yoga Spirit" 6 imgs (`gallery/y1..y6.webp`), "Sattva Nourishment" 8 (`food/food1..8.jpg`), "Peaceful Stay" 9 (`rooms/room1..9.webp`) = 23 gallery images (24 incl. banner).
- **Assets:** above; 43 img total, 23 lazy.
- **Interactive:** filter tabs (`data-filter`); images wrapped in `<a class="glightbox">` (GLightbox JS is not loaded), but the site's own lightbox in custom.js (`.clb-overlay`) handles them. **Re-tested by the lead auditor: clicking a thumbnail opens the custom lightbox overlay; the filters work (FOOD → 8 visible images)** [V] (`screenshots/interactions/gallery-thumbnail-click.jpg`).
- **Responsive notes:** 4,073 / 4,944 / 8,279 px. No overflow.
- **Dependencies:** none external.
- **Issues / risks:** disabled categories; all alts generic ("Yoga Spirit" etc.); "Peaceful Stay" rooms imply accommodation, and no accommodation page exists (the enrollment Accommodation select is filled by inline JS with only "Private Room" / "Shared Room", without prices) — business decision.
- **Redesign recommendation:** Masonry grid with working lightbox, real categories only, descriptive alts, optional Instagram feed.

### FAQs
- **URL / status:** `/faqs.php` — 200 [V]
- **Type / purpose:** Tabbed FAQ by category.
- **SEO:** title "Frequently Asked Questions - Bali Yoga Studio"; meta description **missing**; H1 "Common Questions" (1); each question rendered as H2 (17); JSON-LD LocalBusiness, WebSite, BreadcrumbList, **FAQPage (17 Questions, matches visible)** [V].
- **Sections:**
  1. `inner-banner` — H1 "Common Questions"
  2. `faq-section spacing` — "Got Questions? / Everything You Need to Know"; 8 category tabs + accordions
- **Key facts [V]:** Categories & questions (answers: `data/content/faqs.md`):
  - Location & Transportation: Which airport should I fly to? · Do you provide airport transfers? · Is it safe to travel alone to Ubud?
  - Food & Accommodation: What kind of food is served? · Can you accommodate specific dietary requirements? · What are the rooms like?
  - Health & Security: Do I need special vaccinations for Bali? · Is medical assistance available nearby? · Is the tap water safe to drink?
  - About The Course: Do I need previous yoga experience? · What style of yoga do you teach?
  - Certification: Will I get a certificate after the retreat?
  - General Questions: What should I pack? · Do I need a visa for Indonesia?
  - Payment: What is your refund policy? · Can I pay with a credit card at the studio?
  - Weather in Bali: When is the best time to visit Bali?
  - Notable claims needing confirmation: private airport pickup; "private deluxe suites" and "shared twin rooms"; Hatha/Vinyasa mornings + "Yin or Restorative yoga in the evenings"; deposits non-refundable, transferable with 30 days' notice, "Full details are available in our Terms and Conditions."; credit cards accepted; "30-day Visa on Arrival".
- **Assets:** `faqs-banner-img.webp`. 20 img.
- **Interactive:** category tabs + accordion (17 triggers; test recorded `faq.openState: 11`); screenshot `interactions/faq-accordion-open.jpg`.
- **Responsive notes:** 1,819 / 2,382 / 2,410 px.
- **Dependencies:** none.
- **Issues / risks:** "Terms and Conditions" referenced but footer Terms link is `#`; FAQ class styles contradict schedule (no Vinyasa/Yin/Restorative on schedule); room types + airport transfer not offered anywhere else; panel heading "Location And Transportation" vs tab "Location & Transportation"; questions as H2 (heavy heading outline).
- **Redesign recommendation:** Keep categories; single accordion list with category chips + search; keep FAQPage schema; link answers to Terms/pricing pages; verify every policy.

### Contact Us
- **URL / status:** `/contact-us.php` — 200 [V]
- **Type / purpose:** Contact details, map, form.
- **SEO:** title "Contact Us - Bali Yoga Studio"; meta description **missing**; H1 "KEEP IN TOUCH" (1); **no H2** (H4/H5 only); JSON-LD LocalBusiness, WebSite, BreadcrumbList.
- **Sections:**
  1. `inner-banner` — H1 "KEEP IN TOUCH"
  2. `our-location-wrapper spacing` — "Our Locations / Experience Peace Across the Globe", "Our Main Center / Ubud Sanctuary, Bali", address, "Studio Concierge" card (socials, quote), Google Map
  3. `contact-wrap bg spacing` — "Contact us / Keep in Touch with Us": address, phone, email + form
- **Key facts [V, verbatim]:**
  - Address (sec. 2): "Jl. Bisma No.78, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia"; (sec. 3): "Jl. Bisma No.78, Ubud Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia".
  - Phone: "+628135904695" — **visible only here**, linked to `https://wa.me/628135904695` (WhatsApp; no `tel:` link). Same number as JSON-LD `telephone`.
  - Email: info@baliyogastudio.org (mailto).
  - Socials in concierge: IG (alt "IG") → Instagram; FB (alt "FB") → `#` (dead); YT → YouTube.
  - Map: embed place "Bali Yoga Studio" (-8.5107036, 115.2584491; matches JSON-LD geo). Home uses a different embed URL for the same place.
  - No opening hours, no studio hours for office/reception.
- **Assets:** `common-banner-img.webp`, `svg/pin|phone|gmail|instagram|facebook|youtube.svg`. 27 img.
- **Interactive:** form `common-form` (form_id "contact-page"): name (text), email, phone (tel, intl-tel-input default "India (भारत)"), subject, message, "Send Message" — **no required fields; checkValidity() true when empty**, no reCAPTCHA, no consent [V]; map iframe.
- **Responsive notes:** 2,734 / 3,341 / 3,938 px.
- **Dependencies:** common-form → phpmailer/contact-mail.php, "success" text check [V: custom.js]; Google Maps; WhatsApp; intl-tel-input.
- **Issues / risks:** "Our Locations" / "Experience Peace Across the Globe" imply multiple centres (only one); inconsistent address punctuation; phone only shown as raw string without spaces and only on this page; dead FB; phone defaults to India for an Indonesian studio; empty form submittable.
- **Redesign recommendation:** One clear contact block (address, WhatsApp, email, hours, directions link), map, validated form with required name/email/message + consent, Indonesia/auto country default; footer should repeat phone/WhatsApp.

### Enrollment Form
- **URL / status:** `/enrollment-form.php` — 200 [V]
- **Type / purpose:** Universal booking/enrolment form; target of every "Get Started", "Book Now" CTA.
- **SEO:** title "Enroll Now - Bali Yoga Studio"; meta description **missing**; H1 "Enroll Now" (1); H2 "Enrollment Form"; JSON-LD LocalBusiness, WebSite, BreadcrumbList.
- **Sections:**
  1. `inner-banner` — H1 "Enroll Now" (`enrollment-banner.webp`)
  2. `section.spacing#apply` — intro + form `#enrollment-form`
- **Key facts — intro [V]:** "…to begin this transformative and healing journey into the ancient wisdom of Ayurveda. Please fill out this form to complete your enrolment at Bali Yoga Studio and take the first step toward holistic wellness and deeper understanding of Ayurvedic science." (Ayurveda-specific copy on a general form.)
- **Fields (in order; none `required`) [V]:**
  - Personal Information: Name `enroll_name`; Email Id `enroll_email`; "Mobile Number with country code" `phone` (intl-tel-input, default India); Country of Residence `enroll_country`; hidden honeypot `honeypot`; Gender `enroll_gender` [Select Your Gender / Male / Female / Other]
  - Course Information: "Coupon (Only For 3 months)" `enroll_coupon` (placeholder "Coupon(If Any)"); "Course location" `enroll_location` (text, empty, pin icon alt "Bali Icon"); Program Type `program_type` [Select Program Type / Daily Classes / Retreats / Multi Style YTTC / Kundalini TTC / Wellness / Events and workshops / Specialised Short Courses / Other Course]
  - Conditional selects [I: shown per program type]: Multi Style YTTC `enroll_multistyle_yttc` [50/100/200/300/500 Hours Yoga Teacher Training Course]; Kundalini TTC `enroll_kundalini_ttc` [same 5 generic labels "… Yoga Teacher Training Course"]; "Specify Other Course" `enroll_other_course`; Wellness `enroll_wellness_service` [01. Abhyanga Massage / 02. Deep Tissue / 03. Balinese Massage / 04. Thai Massage / 01. Sound Healing / 02. Reiki Therapy / 01. Ayurvedic Facial]; Class plan `enroll_class_plan` [Single Drop-In / Students (Age 10-20) / KITAS / Indonesian / 3-Class Card / 5-Class Card / 10-Class Card / 20-Class Card / 30-Day Unlimited]; Retreat `enroll_retreat_program` [5 retreats as in menu]; Events `enroll_event_workshop` [8 events as in menu]; Short course `enroll_short_course` [Yin Yoga TTC / Areal Yoga TTC / Sound Healing Course (Level 1 & 2) / Reiki Healing Course (Level 1 & 2) / 50-Hour Hands-On Adjustment / 50-Hour Art of Vinyasa / 50-Hour Bio Mechanics]
  - Accommodation Type `enroll_accommodation`: empty in static HTML; **inline JS shows the field only after a program is selected and fills it with "Private Room" / "Shared Room"** [V, lead-auditor correction]
  - Course Month `enroll_month` [January … "Febuary" … December] (no year/date)
  - How did you hear about us? `enroll_heard` [Google / Youtube / Social Media / Existing Student / Reference]
  - Queries If Any `enroll_message` (textarea, placeholder "Your Answer")
  - Submit "Submit Message" (`#enroll-submit-bot`)
- **Assets:** `enrollment-banner.webp`, `svg/pin.svg`. 21 img.
- **Interactive:** conditional selects; intl-tel-input; honeypot; thank-you modal on success [I].
- **Responsive notes:** 2,761 / 3,256 / 3,395 px.
- **Dependencies:** enrollment-form → phpmailer/enroll-mail.php, "success" text check [V: custom.js]; intl-tel-input.
- **Issues / risks:** checkValidity() true when completely empty — no required fields [V]; no consent/privacy checkbox (privacy page doesn't exist); no payment/deposit step; Accommodation options are generic (Private/Shared) and don't match the TTC room tiers (6/4/2-shared/private); Kundalini options mislabelled; spa services missing Panchakarma; Retreats lacks Detox Retreat shown on Home; typos "Areal", "Febuary"; inconsistent numbering in wellness list; Ayurveda-only intro; "Course location" field purpose unclear; no date picker / start dates; generic CTAs land here without pre-selecting the clicked offer.
- **Redesign recommendation:** Multi-step booking: pick offer (pre-filled via query string from CTA) → dates/session → personal details (required + validation) → accommodation/notes → consent → submit, with confirmation copy appropriate to the request type.

### Blog (listing)
- **URL / status:** `/blog/` — 200 [V]
- **Type / purpose:** Blog index (static).
- **SEO:** title "Blog Page - Bali Yoga Studio"; meta description **missing**; H1 "our Blogs" (lowercase) (1); no H2 (post titles H4); JSON-LD incl. BreadcrumbList (item `https://baliyogastudio.org/blog`). 79 words.
- **Sections:**
  1. `inner-banner` — H1 "our Blogs" (`wpy-studio-banner.webp`)
  2. `blog-page-section spacing` — 6 cards
- **Key facts — posts (category / title / author / date) [V]:**
  1. Yoga — "Relax & Receive: Is Sound Healing the Future of Wellness?" — admin — Oct 15, 2025 (img `100hr-rishikesh.webp`)
  2. Meditation — "How I Build Magic in Every Class: The 5 S-Words" — admin — Nov 20, 2025
  3. Retreats — "Ahimsa in Action: Yoga, Justice & Activism" — admin — Sep 29, 2025
  4. Wellness — "The Ultimate Guide to Ayurvedic Detox (Panchakarma)" — admin — Aug 12, 2025 (no image)
  5. Yoga — "Mastering Inversions: A Step-by-Step Approach" — admin — Jul 05, 2025
  6. Healing — "Healing the Inner Child Through Yoga" — admin — Jun 18, 2025
  - **All 6 cards link to the same URL `/blog/blog-details.php`** (no distinct posts) [V]. Only one post body exists (Relax & Receive).
- **Assets:** `100hr-rishikesh.webp`, `wpy-studio-banner.webp`, `wellness-img.jpg`, `special-img2.webp`, `sound-healing2.webp`; author avatar `private-class.webp`. 42 img (24 no alt).
- **Interactive:** none.
- **Responsive notes:** 2,040 / 2,940 / 4,074 px.
- **Dependencies:** none.
- **Issues / risks:** 5 of 6 posts have no content; dates conflict with Home (Relax & Receive "04/02/2026" on Home); categories conflict with detail page; images unrelated (Rishikesh course image); generic "admin" author.
- **Redesign recommendation:** Real CMS/MDX blog with slugs, per-post pages, authors (teachers), categories, dates, Article schema; or hide blog until content exists — business decision.

### Blog Details
- **URL / status:** `/blog/blog-details.php` — 200 [V]
- **Type / purpose:** Single (only) blog post template.
- **SEO:** title "Blog Details - Bali Yoga Studio" (generic, not the post title); meta description **missing**; **two H1s**: "Blog Details" (banner) + "Relax & Receive: Is Sound Healing the Future of Wellness?"; JSON-LD BreadcrumbList item points to `https://baliyogastudio.org/blog-details.php` (wrong path, missing `/blog/`) [V]; no Article schema. 452 words.
- **Sections:**
  1. `inner-banner` — "Blog Details", breadcrumb Home › Blog › Blog Details
  2. `blog-details-section` — article + sidebar (social, category, tabs widget)
- **Key facts [V]:** Category "Wellness"; author "Admin Post" (avatar = `wpy-studio-banner.webp`); "Oct 15, 2025"; "5 min read"; featured img `100hr-rishikesh.webp`; H2 "The Science Behind Sound Healing", H4 "What to Expect in a Sound Bath Session" (4 bullets); Deepak Chopra quote. Sidebar: Social Networks — Instagram ✓, YouTube ✓, **Twitter / Facebook / Pinterest / Linkedin → `#`**; Category "Uncategorized" → `#`; tabs POPULAR/RECENT/LATEST with posts "The Power of Yin Yoga & Stillness Sessions at Manasthala" (Feb 6, 2026), "Ahimsa in Action: Yoga & Justice" (Sep 29, 2025), "Guide to Ayurvedic Detox" (Aug 12, 2025), "The 5 S-Words of Teaching Yoga" (Nov 20, 2025) — **all → `#`**. (Strings like "End article-wrapper", "Blog Item 1", "Brand Section" in the content files are HTML comments, not visible text [V].)
- **Assets:** `wellness-img.jpg` (banner), `100hr-rishikesh.webp`, `private-class.webp`, `wpy-studio-banner.webp`. 27 img.
- **Interactive:** Bootstrap tabs (sidebar).
- **Responsive notes:** 3,218 / 4,459 / 4,808 px.
- **Dependencies:** Instagram, YouTube links.
- **Issues / risks:** duplicate H1; dead social/category/related links; "Manasthala" post title references another venue name [I]; category mismatch (Yoga vs Wellness vs Uncategorized); date conflict with Home; health claims ("Research suggests…") without citations.
- **Redesign recommendation:** Article template: one H1 = post title, author/teacher byline, date, reading time, real related posts, share links only for active networks, Article + Breadcrumb schema with correct URLs.

---

# Part B — Teacher-training & course pages


Scope: 17 slugs. Evidence: `data/content/<slug>.md` (server HTML text), `data/pages/<slug>.json` (rendered DOM @1440), `data/responsive-metrics.json`, one desktop screenshot crop (50-hr fee block) used to confirm badge placement. Nothing fetched live.
Convention: **V** = verified in captured text/DOM; **I** = inferred. Quotes are verbatim, including typos.
Sitewide notes that apply to every page below (not repeated): canonical = none; header/mobile sidebar/footer/thank-you modal ("Namaste! Enrollment Received") and fixed `floating-cafe-wrapper` ("EXPLORE CAFE" → `https://prasadamhealingcafe.com/`) and `back-to-top` button are shared chrome; header logo alt = "WPY Studio" and footer class = `wpy-studio-footer` (legacy branding, V); JSON-LD on every page = LocalBusiness + WebSite + BreadcrumbList + `Course` whose description reads "… authentic, Yoga Alliance-style training led by certified teachers in Bali." (V, identical wording on every course incl. Sound/Reiki); no console errors captured on any page.

---

## Course detail template (shared)

Two templates exist.

### Template A — "TTC / 50-hr specialty" (14 pages: all multi-style YTT, all Kundalini, Yin, Aerial, Sound, Reiki)
DOM order (lotus dividers `lotus-divider` sprinkled between sections; exact placement varies per page):

1. `inner-banner` — full-width banner image, H1 (`h1`, 64.8px desktop / 30px mobile, "Melinda Evania" script font), breadcrumb "Home › …".
2. `expect-bar-section` — 4 stat tiles (h3 + caption), e.g. "50 Hours / COURSE DURATION", "4 Days / INTENSIVE TRAINING".
3. `trust-section spacing` — "Course Overview" eyebrow, H2, 1–3 paragraphs, overview image + Yoga Alliance logo + "Registered Yoga School".
4. 1–3 × `ttc-content-section spacing` (sometimes `… bg`) — "What will you learn" / "What is X" / "Benefits" (bullets + image).
5. `why-choose-split bg` — image + bullet lists ("Why choose us", "Who should join", "Eligibility").
6. `spacial-daily-schedule spacing` `#schedule` — 14-row timetable with `time.svg` icons. Two variants:
   - **SCHED-A** ("Spacial Daily Schedule"; identical hash on 11 pages): 05:45 Ashtanga(Bablu) · 07:00 "Ashtanga Mastry(Self Mastery)" · 07:30 Pranayama & meditation(Hari Dharma) · 08:45 Fruits & Tea · 09:30 Anatomy & Alignment(Hannah) · 10:45 Brunch · 12:00 Self study · 13:00 Teaching Methodology (mon, wed and Fri) · 14:30 Philosophy(Hari dharma) · 16:00 Hatha yoga · 17:15 Hatha Mastery(Self Practice) · 17:45 "Yoga Sadhna (Mon-Wed)(Maa Haripriya)" · 18:00–19:00 Dinner (Thur, sat) · 18:30–19:30 Dinner (Mon - Wed). Note: "The timing of teaching and modules may vary dependant on seasons."
   - **SCHED-B** ("Special Daily Schedule"; 100/300/500 YTT only): same times but "Ashtanga Mastery(Self Practice)", "Advanced Pranayama & Meditation(Hari Dharma)", "Advance Anatomy & Alignment(Hannah)", "Yoga Philosophy & Ayurveda(Hari Dharma)", "Advanced Hatha Yoga".
   - Schedule names staff "Bablu", "Hari Dharma", "Hannah", "Maa Haripriya" (V). Only Hari Dharma appears in the teacher slider elsewhere.
7. `dates-fees-section spacing` — "Join Our Next Batch / Dates & Fee"; "Limited Seats available for November and December"; **Course Fee** card (Duration N Days, IDR + USD "Total Tuition Fee", "Note: Accommodation takes extra charges.", Food card "Menu of Prasadam Healing Café . Students buy whatever they want to eat." carrying a "15% Discount" badge — badge attaches to the café card, confirmed in screenshot); **Course Schedule** card ("Starts Every Month", 1–2 sessions with "Active" pills, `Enroll Now` → `enrollment-form.php`); **Accommodation Add-ons** — 4 cards with promo ribbons: 6 Shared Room "Free for first 6 students" (+ "Free" tag), 4 Shared Room "Free for first 4 students", 2 Shared Room "50% off for first 2 students", Private Room "50% off for first 1 student".
   - Price tiers (V, reused verbatim across courses of the same hour-count):

     | Tier | Tuition | 6 Shared | 4 Shared | 2 Shared | Private |
     |---|---|---|---|---|---|
     | 50-hr | IDR 6,304,000 ($349) | IDR 723,000 ($40) | IDR 813,000 ($45) | IDR 1,806,000 ($100) | IDR 3,252,000 ($180) |
     | 100-hr | IDR 10,820,000 ($599) | IDR 1,445,000 ($80) | IDR 1,626,000 ($90) | IDR 3,432,000 ($190) | IDR 6,322,000 ($350) |
     | 200-hr | IDR 16,240,000 ($899) | IDR 2,890,000 ($160) | IDR 3,161,000 ($175) | IDR 6,322,000 ($350) | IDR 10,838,000 ($600) |
     | 300-hr | IDR 23,465,000 ($1,299) | IDR 3,595,000 ($199) | IDR 4,155,000 ($230) | IDR 8,309,000 ($460) | IDR 14,451,000 ($800) |
     | 500-hr | IDR 36,110,000 ($1,999) | IDR 6,304,000 ($349) | IDR 6,684,000 ($370) | IDR 13,367,000 ($740) | IDR 25,290,000 ($1,400) |
   - Implied FX ≈ IDR 18,060–18,075 per USD everywhere (I, computed) — consistent.
8. `trust-section spacing` (optional, YTT pages only) — "Why Choose/Should You Choose Bali Yoga Studio?" numbered list.
9. `excursion-section spacing` — **EXC** (identical on 13 pages): "Bali Excursions / Activities & Spiritual Experiences At Bali Yoga Studio", 6 bullets (beach yoga, "temple and monastery visits", meditate in nature, "hikes and treks", "kirtan, satsang and Om chanting", "Ayurvedic treatments and massages are also a part of the itinerary"), Swiper of 4 cards reusing `assets/img/multi-style/200-yttc/{monkey-forest,tirta-empul-temple,beach-yoga,uluwatu-temple}.webp`.
10. `workshop-faq-section spacing` — image + accordion FAQ (3–5 Q&As; headings are h2 per question in DOM).

No enquiry form, iframe or video on Template A pages except the 200-hr YTT (see entry). Sticky/fixed: main header, back-to-top, floating café (sitewide). Mobile (390): every Template A page has scrollWidth 402 > 390 → **horizontal overflow** (V); `overflowNonSidebar` is empty so the offending element was not isolated (I: one of the shared Template A sections, since Template B pages do not overflow).

### Template B — "Specialised short course" (3 pages: Art of Vinyasa, Bio Mechanics, Hands-on Adjustment)
1. `inner-banner` (H1 + breadcrumb) · 2. `sticky-nav-wrapper#stickyNav` (sticky; anchors "Schedule" `#schedule`, "Price" `#price`) · 3. `overview-wrapper spacing` (eyebrow + "The Journey Within" + 3 paragraphs) · 4. `overview-wrapper bg spacing section-video-bg#what-we-teach` ("Daily Practice / What We Teach", autoplay muted looped background video `assets/video/course-page-video.mp4`, 5 topic buttons; buttons presumably open `#yogaModal` whose content is the placeholder "Yoga Style / Description goes here." — I) · 5. `spacial-daily-schedule` 8-row simplified schedule (07:00 → 07:00 PM) + "The schedule is subject to change." · 6. `pricing-section bg spacing#price` ("Choose Your Plan / Course Packages": two tiers **IDR 2,692,000 ($149) / PERSON** and "Best Value" **IDR 4,498,000 ($249) / PERSON**, identical on all 3 pages; one CTA → `enrollment-form.php`) · 7. `inclusions-section` (What's Included / Not Included / What to Bring, 6 each) · 8. `teacher-slider-section#teachers` (**TEACH**: shared 9-card Swiper, see below) · `yoga-modal` · 9. `video-review-section` (2 YouTube thumbs `7VRTh7WXMLo`, `7O7wWhb5FN8` + 4 local thumbs "Shella Eve Simaro", "Kirsty Wallace", "Refika Ji", "Remi Butler") · `video-popup-modal` (iframe src captured as `https://baliyogastudio.org/` — empty/placeholder until clicked, I).
- No duration-in-days, no batch dates, no accommodation add-ons, no FAQ, no meta of course length beyond "50 Hours".
- Not linked from the header mega-menu (V: no nav link; only discovered from `courses.php`). `courses.php` lists all three at **"IDR 4,516,000 ($250)"** — conflicts with the $149/$249 packages on the detail pages.
- Mobile: no horizontal overflow (scrollWidth 390).

**TEACH (shared teacher slider, also on 200-hr YTT):** "Teacher 1" Yogi Ashutosh Mishra · "Teacher 2" Yogi Naveen ("training over 1000 teachers in India and abroad") · *(no Teacher 3)* · Teacher 4 Hari Dharma · 5 Yogi Akshant Ji ("over 5 years of teaching experience across Bali and Rishikesh") · 6 Yogi Sunil · 7 Mandeep Bhatt · 8 Yogi Rohit Kumar · 9 Umakanta Sahoo (Guna) · 10 Sujata Ray (Mili). Every card shows "10+ Year Of Experience" (incl. Akshant "over 5 years"). Each "SEE MORE" → `teachers.php`. Images `assets/img/teacher/*.webp`.

---

### 50 Hours Yoga Teacher Training
- **URL / status:** https://baliyogastudio.org/50-hour-yoga-teacher-training.php — 200
- **Type / purpose:** Template A; entry-level multi-style (Hatha + intro Ashtanga-Vinyasa) taster TTC.
- **SEO:** title "50 Hours Yoga Teacher Training In Bali | Bali Yoga Studio"; meta description **missing**; canonical none; H1 "50 Hours Yoga Teacher Training Course" (1).
- **Sections (original order):**
  1. `inner-banner` — H1 + breadcrumb "50 Hour Yoga Teacher Training In Bali".
  2. `expect-bar-section` — "50 Hours / 4 Days / Beginner / Certificate".
  3. `trust-section` — "Course Overview": jumpstart course, "4-day yoga course", Hatha basics + "soft introduction into Ashtanga- Vinyasa".
  4. `ttc-content-section` — "What Is Included In The 50 Hours Yoga Teacher Training Course?" (prose).
  5. `why-choose-split bg` — "How Do You Benefit…" 6 bullets.
  6. `spacial-daily-schedule` — SCHED-A.
  7. `dates-fees-section` — 50-hr tier.
  8. `trust-section` — "Why Choose Bali Yoga Studio?" paragraph.
  9. `excursion-section` — EXC.
  10. `workshop-faq-section` — 5 FAQs.
- **Key facts to retain:**
  - Nav label "50 Hours Yoga Foundation TTC" vs H1 "50 Hours Yoga Teacher Training Course".
  - Duration: "4 Days" (expect bar + fee card); "4-day yoga course"; sessions "1st to 5th" and "16th to 20th" ("runs twice every single month"); also "a 1-week intensive retreat".
  - Price: IDR 6,304,000 ($349); accommodation = 50-hr tier.
  - Certification: FAQ "No, Yoga Alliance certifies courses like 200 hrs, 300 hrs and 500 hrs." vs "Our school is accredited by Yoga Alliance, and you will receive certificates after each course."; YA logo alt "RYS 200".
  - Styles: Hatha Yoga, Ashtanga Vinyasa, sun salutations, breath, meditation, philosophy, anatomy intro.
  - Upsell: "continue with the 100 hour yoga teacher training course which is of two-weeks in total."
  - Teachers named: schedule staff only (Bablu, Hari Dharma, Hannah, Maa Haripriya).
  - Curriculum modules: none as a list (prose only).
- **Assets:** banner `assets/img/multi-style/50-yttc/banner.webp` (1920×1110); `50-yttc/img-1.webp`, `img-2.webp`, `img-3.webp`, `img-4.webp` (FAQ); `yoga-allience/yoga-alliance-logo.webp`; EXC images. 46 `<img>` total (incl. chrome & 14 time.svg).
- **Interactive elements:** EXC Swiper; FAQ accordion; no form, no video.
- **Responsive notes:** mobile overflow **yes** (402/390); heights D 7,411 / T 10,391 / M 11,609.
- **Dependencies:** `enrollment-form.php`; Prasadam café (text + floating link).
- **Issues / risks:** "4 Days" vs "1st to 5th" vs "1-week"; "two-weeks" for 100-hr conflicts with 100-hr page (8 / 10-11 days); FAQ typo "Do I any yoga experience…"; "You also gain here, as yoga philosophy and anatomy gets introduced."; YA-not-certified FAQ vs "certificates after each course"; logo alt "RYS 200" on a non-RYS course; "15% Discount" badge unexplained.
- **Redesign recommendation:** Implement via shared course template (data-driven). Condense overview + "What is included" into one block; turn prose into a module list; fix duration copy after business confirms.

### 100 Hours Yoga Teacher Training
- **URL / status:** https://baliyogastudio.org/100-hour-yoga-teacher-training.php — 200
- **Type / purpose:** Template A; beginner multi-style 100-hr (half of a 200-hr).
- **SEO:** title "100 Hrs Yoga Teacher Training In Bali | Bali Yoga Studio"; meta "Come to Bali and experience the intensive 100 Hrs Yoga Teacher Training. Learn Hatha Yoga, Pranayama, Meditation, Yoga Nidra and more at Bali Yoga Studio."; canonical none; H1 "100 Hrs Yoga Teacher Training Course" (1).
- **Sections (original order):**
  1. `inner-banner` — H1; breadcrumb "100 Hour Yoga Teacher Training In Bali".
  2. `expect-bar-section` — "100 Hours / 10-11 Days / Small Batch / RYT 500 (EXPERT TEACHERS)".
  3. `trust-section` — "Immersive Yoga Teacher Training At Bali Yoga Studio".
  4. `ttc-content-section bg` — "What Does The 100 Hrs Yoga Teacher Training Bali Include?" 13-item list.
  5. `ttc-content-section` — "How Will The 100 Hrs… Benefit You?" 6 bullets.
  6. `why-choose-split bg` — "Why You Should Join…" + "For Whom Is The 100 Hrs Yoga TTC Designed?".
  7. `spacial-daily-schedule` — SCHED-B ("Advanced" sessions).
  8. `dates-fees-section` — 100-hr tier.
  9. `trust-section` — "Why Should You Choose Bali Yoga Studio?" numbered 01–07.
  10. `excursion-section` — EXC.
  11. `workshop-faq-section` — 5 FAQs.
- **Key facts to retain:**
  - Nav "100 Hours Yogic Living TTC" vs H1 "100 Hrs Yoga Teacher Training Course".
  - Duration: "10-11 Days" (expect bar + overview) vs fee card "8 Days"; sessions "1st to 8th", "16th to 23rd" (twice monthly).
  - Price IDR 10,820,000 ($599); accommodation 100-hr tier.
  - Certification: "A single 100 hrs YTTC does not get you a certification, however, when you have completed two parts of 100 hrs each, you can apply for RYT 200." Teachers "equipped with RYT 500".
  - Modules: Hatha Yoga Basics; Ashtanga – Vinyasa Yoga Introduction; Pranayama; Meditation techniques; Mudras; Bandhas; Teaching methods; Anatomy and Physiology; Yoga Nidra; Adjustments and Modifications; Yoga Philosophy; Mantra Chanting; Yoga Darshan.
  - Claims: "one of the top yoga school Bali, with schools spread across Asia"; "several branches across the west and Asia"; "ancient Gurukul style".
- **Assets:** banner `multi-style/100-yttc/banner-img.webp` (1919×1143); `100-yttc/overview-img.webp`, `img-2.webp`, `img-3.webp`, `img-4.webp`, `faqs.webp`; YA logo. 46 `<img>`.
- **Interactive elements:** EXC Swiper; FAQ accordion.
- **Responsive notes:** mobile overflow **yes**; D 8,396 / T 11,871 / M 13,332.
- **Dependencies:** `enrollment-form.php`; Prasadam café.
- **Issues / risks:** 10-11 vs 8 days; beginner course shown SCHED-B "Advanced" sessions; trust list ends with empty "07"; "It you want…"; "top yoga school Bali"; "schools spread across Asia"/"branches across the west" (unverified multi-branch claim, likely inherited from parent school); RYT 200-by-two-parts claim needs YA policy check.
- **Redesign recommendation:** Shared template; review durations & branch claims with business.

### 200 Hours Yoga Teacher Training
- **URL / status:** https://baliyogastudio.org/200-hour-yoga-teacher-training.php — 200
- **Type / purpose:** Template A **extended** (flagship): adds curriculum accordion + sticky enquiry form, food & rooms sliders, inclusions, teachers, Google reviews; **no FAQ section**.
- **SEO:** title "200 Hours Yoga Teacher Training In Bali | Bali Yoga Studio"; meta description **missing**; canonical none; H1 "**Join The Most Authentic**" (1) — truncated/non-descriptive.
- **Sections (original order):**
  1. `inner-banner` — H1 "Join The Most Authentic"; breadcrumb "200 Hour Yoga Teacher Training In Bali".
  2. `expect-bar-section` — "10+ Years OF LIVING LEGACY / 5000+ CERTIFIED STUDENTS / USA ALLIANCE RECOGNIZED / BALI HEART OF YOGA".
  3. `trust-section` — "200 Hour Yoga Teacher Training In Bali" overview, RYS 200 logo.
  4. `ttc-content-section` — "Come & Align With The Powerful Natural Forces…" + numbered 01–09 list.
  5. `why-choose-split bg` — "Benefits Of Practicing Yoga With Us" + "Take Leverage Of…" paragraph.
  6. `curriculum-section` — "Curriculum Breakdown": timeline (Check In / Opening Ceremony / Certification Ceremony / Check Out) + accordion of 17 modules + sticky "Quick Enquiry" form.
  7. `spacial-daily-schedule` — SCHED-A.
  8. `dates-fees-section` — 200-hr tier.
  9. `cafe-wrapper` — "Food / We Serve" + 8-image Swiper.
  10. `cafe-wrapper` — "Accommodation / Our Rooms" + 9-image Swiper.
  11. `excursion-section` — variant: "Explore the Island of Gods" + per-card captions.
  12. `inclusions-section` — Included / Not Included / What to Bring.
  13. `teacher-slider-section#teachers` — TEACH.
  14. `review-slider-section` — "Global Reviews & Experiences", 5 Google reviews.
- **Key facts to retain:**
  - Nav "200 Hours Transformative Yoga Flow TTC" vs H1 "Join The Most Authentic" (heading "200 Hour Yoga Teacher Training In Bali" is the H2).
  - Duration "15 Days"; sessions "1st to 15th", "16th to 30th" (twice monthly) vs "this 20 days program" (Meditation) and "During these 20 days" (Philosophy) and "dedicate a month".
  - Price IDR 16,240,000 ($899); accommodation 200-hr tier.
  - Certification: "Backed by the RYT 200 certification, under Yoga Alliance"; "USA ALLIANCE RECOGNIZED"; evaluation = performance, attendance, practical asana test, written test, behaviour.
  - Inclusions: "15 Days Premium Accommodation in Bali", "Organic Satvic Vegetarian Meals Daily", "Comprehensive Training Manual (Hardcopy)", "Yoga Alliance Accredited Certificate", "Sacred Temple Visits & Cultural Excursions", "Unlimited Use of Studio Props & Facilities". Not included: flights, visa/insurance, laundry/spa, extra snacks, medical, weekend travel.
  - Excursions: "includes a beachside yoga session and a traditional purification bath; the rest of Bali's beauty is yours to explore on your own."
  - Curriculum modules (accordion): Mantra & Mantra Chanting; Hatha Yoga ("140 Yoga Exercises"); Ashtanga Yoga (first series); Pranayama; Meditation; Yoga Nidra; Yoga Cleansing; Yoga Philosophy; Anatomy & Physiology; Ayurveda; Mudra; Bandha (Energy Lock); Teaching Methodology; Alignment; Adjustment; Evaluation & Certification.
  - Teachers: TEACH (9) + schedule staff; "Guru Vishnu", "Yogi Vishnu … Swami Veda" in module copy.
- **Assets:** banner `multi-style/200-yttc/200-bali-yttc-banner.webp` (1920×1280); `200-yttc/what-is-yoga-ttc.webp`, `about-img.webp`, `why-choose.webp`; `yoga-allience/200-rys-logo.webp`; `assets/img/food/food1–8.jpg`; `assets/img/rooms/room1–9.webp`; EXC images; teacher images; `assets/img/student/testimonial-img*.webp`. 96 `<img>` total.
- **Interactive elements:** curriculum accordion (module buttons); enquiry form `#sidebar-enquiry-form` in sticky `.sidebar-form-wrap` — fields: hidden `form_id=ytt-enquiry`, `name` (required), `email` (required), `phone` (tel, optional, intl-tel-input), `course_interest` select ("200-Hour Yoga TTC / 300-Hour Yoga TTC / 500-Hour Yoga TTC", optional), `message` (required), button "Submit Application"; no reCAPTCHA; DOM `action`/`method` null (JS-submitted). Swipers: food, rooms, excursions, teachers, reviews.
- **Responsive notes:** mobile overflow **yes**; D 12,299 / T 16,683 / M 18,724 (longest page in set).
- **Dependencies:** enquiry form → `phpmailer/contact-mail.php` (V: the form→endpoint map in `assets/js/custom.js?v=20052026`, read by the lead auditor; delivery is unverified); intl-tel-input from cdnjs + jsdelivr; review "see more" → `https://share.google/dvgIimU3EQBnCNN6s`; `teachers.php`; `enrollment-form.php`; Prasadam café.
- **Issues / risks:** H1 truncated; "World Peace Yoga School teaches the traditional ancient style of Hatha Yoga…" (copied from other school); review "fantastic experience at WPYS … Thankyou Guru Vishnu"; Panchakarma text in food section ("During your Panchakarma detox, every meal…"); truncated "ur 200 Hour Yoga Teacher Training In is…"; truncated "ana – Lotus posture"; duplicate Savasana + "Coprse"; "Sitli/Sitkari" duplicate Sheetali/Sheetkari; typos "Spiritualtiy", "Rentention", "bio-trasformation"; 20-day references vs 15 days; inclusions "Premium Accommodation" + "Meals Daily" vs fee note "Accommodation takes extra charges" and "Students buy whatever they want to eat"; image alts wrong ("Tegenungan Waterfall" on beach-yoga; rooms alt "Cafe Image N"; review photos alt "Sarah Jenkins/Marco Rossi/Emily Chen" for Jenny Morris/Hong Bui/Sofia Schneider); review authored by "Prasadam" (own café) — credibility; review of daily class/opening day, not TTC; "Teacher 3" missing; all teachers "10+ Year" incl. Akshant "over 5 years"; "Our retreat offers…" rooms copy; enquiry select lacks Kundalini/short courses; no FAQ; meta missing.
- **Redesign recommendation:** Use as the reference layout for the shared course template (curriculum accordion, inclusions, teachers, reviews should become optional template slots for all TTCs). Remove WPYS/Panchakarma copy; reconcile day counts; review inclusions vs pricing with business.

### 300 Hours Yoga Teacher Training
- **URL / status:** https://baliyogastudio.org/300-hour-yoga-teacher-training.php — 200
- **Type / purpose:** Template A; advanced multi-style (post-200).
- **SEO:** title "300 Hours Yoga Teacher Training In Bali | Bali Yoga Studio"; meta "Join our 300 Hours Yoga Teacher Training Course in Bali. Advance your yoga journey with in-depth training in advanced asana, meditation, pranayama & more. Yoga Alliance accredited."; canonical none; H1 "300 Hours Yoga Teacher Training Course" (1).
- **Sections (original order):**
  1. `inner-banner`.
  2. `expect-bar-section` — "300 Hours / 4 Weeks RESIDENTIAL TRAINING / 13 Modules ADVANCED CURRICULUM / Global RECOGNITION".
  3. `trust-section` — overview, RYS 300 logo.
  4. `ttc-content-section bg` — "What Will You Learn…" 13 modules.
  5. `ttc-content-section` — "How Will You Benefit…" 4 bullets.
  6. `why-choose-split bg` — "Why Should You Join…" + "Eligibility…".
  7. `spacial-daily-schedule` — SCHED-B.
  8. `dates-fees-section` — 300-hr tier, 1 session.
  9. `trust-section` — "Why Should You Choose Bali Yoga Studio?" 01–07 (identical to 100-hr).
  10. `excursion-section` — EXC.
  11. `workshop-faq-section` — 5 FAQs.
- **Key facts to retain:**
  - Nav "300 Hours Yoga Mastery TTC" vs H1 "300 Hours Yoga Teacher Training Course".
  - Duration "4 Weeks" (expect bar), FAQ "It is for four weeks." vs fee card "20 Days", session "1st to 20th" ("runs once every single month").
  - Price IDR 23,465,000 ($1,299); accommodation 300-hr tier.
  - Certification: complete all classes "then apply for RYT 500"; prerequisite 200-hr; RYS 300 logo.
  - Eligibility: completed 200-hr; "stay at least 1 minute or more in Sarvangasana or Kakasana"; regular Pranayama.
  - Modules: Advance Yoga Asana; Advanced Meditation Techniques; Advanced Pranayama; Shatkarma Kriya; Advance Anatomy and Physiology; Bandhas; Mudras; Mantra Chanting; Teaching Skills; Alignments And Modifications; Yoga Therapy; Yoga Philosophy; Ayurveda.
- **Assets:** banner `multi-style/300-yttc/banner-img.webp` (1920×1058); `300-yttc/img-1,2,3,4,5.webp`; `yoga-allience/300-rys-logo.webp`. 46 `<img>`.
- **Interactive elements:** EXC Swiper; FAQ accordion.
- **Responsive notes:** mobile overflow **yes**; D 8,342 / T 11,630 / M 13,070.
- **Dependencies:** `enrollment-form.php`; Prasadam café.
- **Issues / risks:** 4 weeks vs 20 days; "Those looking to learn the restorative form of yoga" (Yin copy?); "Those looking for an affordable option"; "immerse yourself in traditional Balinese culture"; trust list empty "07"; "Advance" (adj.) typos; "focussed".
- **Redesign recommendation:** Shared template; confirm 20 days vs 4 weeks.

### 500 Hours Yoga Teacher Training
- **URL / status:** https://baliyogastudio.org/500-hour-yoga-teacher-training.php — 200
- **Type / purpose:** Template A; combined 500-hr multi-style.
- **SEO:** title "500 Hours Yoga Teacher Training In Bali | Bali Yoga Studio"; meta = **same sentence as 300-hr** with "500" ("Join our 500 Hours … Yoga Alliance accredited."); canonical none; H1 "500 Hours Yoga Teacher Training Course" (1).
- **Sections (original order):**
  1. `inner-banner`.
  2. `expect-bar-section` — "500 Hours / 8 Weeks FULL IMMERSION / 5000+ CERTIFIED GRADUATES / RYT 500 YOGA ALLIANCE".
  3. `trust-section` — overview, RYS 500 logo.
  4. `ttc-content-section bg` — "What Will You Learn…" 10 items.
  5. `ttc-content-section` — "How Will You Benefit…" (paragraph copied from 300-hr) + 7 bullets.
  6. `why-choose-split bg` — "Why Should You Join…" + "Eligibility…".
  7. `spacial-daily-schedule` — SCHED-B.
  8. `dates-fees-section` — 500-hr tier, 1 session.
  9. `trust-section` — "Why Choose Bali Yoga Studio For The 500 Hrs YTTC?" 01–09.
  10. `excursion-section` — EXC.
  11. `workshop-faq-section` — 5 FAQs.
- **Key facts to retain:**
  - Nav "500 Hours Expansion Yoga TTC" vs H1 "500 Hours Yoga Teacher Training Course".
  - Duration: "8 Weeks", "eight weeks", "2 months" vs fee card "56 Days"; session "1st to 25th (Next Month)".
  - Price IDR 36,110,000 ($1,999); accommodation 500-hr tier (6 Shared IDR 6,304,000 ($349) — same figure as 50-hr tuition).
  - Certification: "apply for RYT 500 from Yoga Alliance"; eligibility "even if you are a beginner in yoga".
  - Modules: More than 80 Classical Hatha Yoga Poses; Introduction to Different Series of Ashtanga Vinyasa Yoga; Pranayama & Breath Control Techniques; Meditation & Mindfulness Practices; Yoga Philosophy & Ancient Texts; Yoga Anatomy & Physiology; Teaching Methodology & Skills; Shatkarma Kriya (Yogic Cleansing); Mantra Chanting & Sound Vibrations; Alignments and Modifications.
  - Claims: "topmost school in the yogic world, with decades of experience"; "several branches across the globe"; "Under the guidance of Yogi Vishnu Panigrahi"; "sattvic meals" + "best accommodation"; volunteer work.
- **Assets:** banner `multi-style/500-yttc/banner-img.webp` (1919×1203); `500-yttc/overview-img.webp`, `what-will-learn.webp`, `benifit-img.webp`, `who-can-join.webp`, `faqs.webp`; `yoga-allience/500-rys-logo.webp`. 46 `<img>`.
- **Interactive elements:** EXC Swiper; FAQ accordion.
- **Responsive notes:** mobile overflow **yes**; D 8,621 / T 12,269 / M 14,101.
- **Dependencies:** `enrollment-form.php`; Prasadam café.
- **Issues / risks:** 56 days vs "1st to 25th (Next Month)" (ambiguous length); "decades of experience" vs 200-hr "10+ Years"; Yogi Vishnu Panigrahi (parent-school founder) — confirm; run-on "Register Yourself With Yoga Alliance As A 500 Hr Registered Yoga Teacher Bali Yoga Studio offers…"; meta duplicated from 300-hr; "sattvic meals" vs buy-your-own food; 500-hr accommodation priced identically for 56-day YTT and 35-day Kundalini.
- **Redesign recommendation:** Shared template; business to confirm length/start dates and Vishnu/branch claims.

### 50 Hours Kundalini Yoga Teacher Training
- **URL / status:** https://baliyogastudio.org/50-hour-kundalini-yoga-teacher-training.php — 200
- **Type / purpose:** Template A; Kundalini taster.
- **SEO:** title "50 Hrs Kundalini Yoga Teacher Training Course Bali | Bali Yoga Studio"; meta **missing**; canonical none; H1 "50 Hrs Kundalini Yoga Teacher Training" (1).
- **Sections (original order):**
  1. `inner-banner`. 2. `expect-bar-section` — "50 Hours / 4 Days / Beginner / Certificate". 3. `trust-section` — overview (tagline "Raise The Power Within… Awaken The Serpent Coiled At The Root Chakra" merged into paragraph). 4. `ttc-content-section` — "What You Get From The Life Transforming Kundalini Yoga Course Bali" 6 bullets. 5. `ttc-content-section` — "50 Hour Kundalini Yoga Teacher Training Course In Bali Yoga Studio". 6. `why-choose-split bg` — "Why Should You Visit Bali For Kundalini…" + "Why Should You Choose Us?". 7. `spacial-daily-schedule` — SCHED-A. 8. `dates-fees-section` — 50-hr tier. 9. `excursion-section` — EXC. 10. `workshop-faq-section` — 5 FAQs (copied from 50-hr YTT).
- **Key facts to retain:**
  - Nav "50 Hours Sacred Seeds of Kundalini TTC" vs H1 "50 Hrs Kundalini Yoga Teacher Training".
  - Duration "4 Days"; sessions "1st to 5th", "16th to 20th"; also "You stay in a residential set up for a week."
  - Price IDR 6,304,000 ($349); 50-hr accommodation tier.
  - Certification: "completion certificate"; FAQ (copied) "No, Yoga Alliance certifies courses like 200 hrs, 300 hrs and 500 hrs."
  - Teachers: "Yogi Vishnu Panigrahi's mentorship"; "a decade of experience in Kundalini yoga".
  - Modules (prose): Kundalini asanas, Kundalini Pranayama, Kundalini meditation, philosophy.
- **Assets:** banner `multi-style/50-kundalini-ttc/banner-img.webp` (1912×1138); `50-kundalini-ttc/overview-img.webp`, `img-1,2,3.webp`, `faqs.webp`; YA logo (alt "RYS 200"). 47 `<img>`.
- **Interactive elements:** EXC Swiper; FAQ accordion.
- **Responsive notes:** mobile overflow **yes**; D 8,045 / T 11,462 / M 12,747.
- **Dependencies:** `enrollment-form.php`; Prasadam café.
- **Issues / risks:** FAQ block copied from 50-hr YTT ("FAQs - 50 Hours Yoga Teacher Training Course", "You will learn Hatha Yoga and Ashtanga Vinyasa Yoga."); schedule is generic Ashtanga/Hatha (no Kundalini class); "The ambience and traditions are similar to the Yoga Capital of the World, in Bali" (Rishikesh copy, garbled); "six centres of spiritual energy", "Sahasara"; "You can opt for the 100-hour yoga teacher training course, in two parts. The 50-hour course is the first part" (contradicts 100-hr = 2×50 structure elsewhere); 4 days vs "a week".
- **Redesign recommendation:** Shared template; rewrite FAQ and schedule for Kundalini; consolidate with other 50-hr pages' data model.

### 100 Hours Kundalini Yoga Teacher Training
- **URL / status:** https://baliyogastudio.org/100-hour-kundalini-yoga-teacher-training.php — 200
- **Type / purpose:** Template A; Kundalini 100-hr (half of 200).
- **SEO:** title "100 Hrs Kundalini Yoga Teacher Training Course Bali | Bali Yoga Studio"; meta **missing**; canonical none; H1 "100 Hrs Kundalini Yoga Teacher Training" (1).
- **Sections (original order):**
  1. `inner-banner`. 2. `expect-bar-section` — "100 Hours / 8 Days / Beginner / Certificate". 3. `trust-section` — overview. 4. `ttc-content-section` — "What Will You Learn…" 5 bullets + prose. 5. `ttc-content-section` — "Benefits of the 100 Hour Kundalini Yoga TTC In Bali" 8 bullets. 6. `why-choose-split bg` — "Who Should Do…" + "Why Choose Bali Yoga Studio?". 7. SCHED-A. 8. `dates-fees-section` — 100-hr tier. 9. EXC. 10. `workshop-faq-section` — 3 FAQs.
- **Key facts to retain:**
  - Nav "100 Hours Kundalini Immersion TTC" vs H1 "100 Hrs Kundalini Yoga Teacher Training".
  - Duration "8 Days"; sessions "1st to 8th", "16th to 23rd"; prose "more like a two week retreat".
  - Price IDR 10,820,000 ($599); 100-hr accommodation tier.
  - Certification: "combine two 100 hours courses, to attain the 200 hours yoga teacher training certificate"; FAQ "You can teach after completing two parts".
  - Teachers: "Guru Vishnu Panigrahi".
  - Modules: Kundalini asanas, mudras, bandhas, Kundalini kriyas, mantras, meditation & pranayama, anatomy/physiology (Kundalini perspective), philosophy, Hatha, Ayurveda.
- **Assets:** banner `multi-style/100-kundalini-ttc/banner-img.webp` (1920×1228); `100-kundalini-ttc/overview-img.webp`, `what-will-learn.webp`, `benifit-img.webp`, `who-can-join.webp`, `faqs.webp`; YA logo alt "RYS 200". 47 `<img>`.
- **Interactive elements:** EXC Swiper; FAQ accordion.
- **Responsive notes:** mobile overflow **yes**; D 7,881 / T 11,059 / M 12,214.
- **Dependencies:** `enrollment-form.php`; Prasadam café.
- **Issues / risks:** 8 days vs "two week retreat"; "Avail yourself of the 100 hour yoga teacher training in Bali" (non-Kundalini wording); "Beginners will find the multi-style approach to be useful." (multi-style copy); "Your Kundalini awakening takes place." (outcome guarantee); "branches across the globe … decades of experience"; schedule generic.
- **Redesign recommendation:** Shared template; Kundalini-specific schedule; tone down outcome claims.

### 200 Hours Kundalini Yoga Teacher Training
- **URL / status:** https://baliyogastudio.org/200-hour-kundalini-yoga-teacher-training.php — 200
- **Type / purpose:** Template A; Kundalini RYT-200 track.
- **SEO:** title "200 Hrs Kundalini Yoga Teacher Training Course Bali | Bali Yoga Studio"; meta **missing**; canonical none; H1 "200 Hrs Kundalini Yoga Teacher Training" (1).
- **Sections (original order):**
  1. `inner-banner`. 2. `expect-bar-section` — "200 Hours / 15 Days / Beginner / Certificate". 3. `trust-section` — "Awaken The Spiritual Energy Within Yourself…", RYS 200 logo. 4. `ttc-content-section` — "What Will You Learn In The Kundalini Yoga Teacher Training Bali?". 5. `ttc-content-section` — "Benefits Of Joining…" 9 bullets. 6. `why-choose-split bg` — "Why Choose Bali Yoga Studio For 200 Hrs Kundalini YTTC?" + "How Can Anyone Join…". 7. SCHED-A. 8. `dates-fees-section` — 200-hr tier. 9. EXC. 10. `workshop-faq-section` — 3 FAQs.
- **Key facts to retain:**
  - Nav "200 Hours Alchemy of Kundalini Kriya TTC" vs H1 "200 Hrs Kundalini Yoga Teacher Training".
  - Duration "15 Days"; sessions "1st to 15th", "16th to 30th".
  - Price IDR 16,240,000 ($899) — identical to 200-hr multi-style; 200-hr accommodation tier.
  - Certification: "completing the Kundalini YTTC under Yoga Alliance … eligible to apply for RYT 200"; FAQ "Yes, the course is certified."
  - Inclusions conflict: FAQ "Is accommodation food charges included in the course fees? Yes, both are included in the course fees." vs fee card note.
  - Teachers: "Guru Vishnu Panigrahi".
  - Modules (prose): asana (Kundalini style) + Hatha; chakras, kundalini, bandhas, mudras, drishti, Pranayama, nadi, Shatkarma Kriya, kundalini meditation, philosophy, anatomy & physiology, mantra chanting.
- **Assets:** banner `multi-style/200-kundalini-ttc/banner-img.webp` (1914×1082); `200-kundalini-ttc/overview-img.webp`, `what-will-you-learn.webp`, `benefit-img.webp`, `why-choose.webp`, `faqs.webp`; `200-rys-logo.webp`. 47 `<img>`.
- **Interactive elements:** EXC Swiper; FAQ accordion.
- **Responsive notes:** mobile overflow **yes**; D 7,930 / T 10,973 / M 12,100.
- **Dependencies:** `enrollment-form.php`; Prasadam café.
- **Issues / risks:** "Bali Yoga Studio, a part of World Peace Yoga School Group, has been imparting yogic knowledge for decades." (parent-brand disclosure — business decision); FAQ says accommodation & food included vs "Accommodation takes extra charges"; "one of the closely guarded secrets of the royals … commoners" (tone); RYT 200 "minimum qualification to teach yoga globally" (overclaim); generic schedule.
- **Redesign recommendation:** Shared template; business decides on WPYS affiliation wording and inclusions.

### 300 Hours Kundalini Yoga Teacher Training
- **URL / status:** https://baliyogastudio.org/300-hour-kundalini-yoga-teacher-training.php — 200
- **Type / purpose:** Template A (shorter variant: one `ttc-content-section`, no trust-list); advanced Kundalini.
- **SEO:** title "300 Hrs Kundalini Yoga Teacher Training Course Bali | Bali Yoga Studio"; meta **missing**; canonical none; H1 "300 Hrs Kundalini Yoga Teacher Training Course" (1).
- **Sections (original order):**
  1. `inner-banner`. 2. `expect-bar-section` — "300 Hours / 20 Days / Beginner FRIENDLY LEVEL / Certificate". 3. `trust-section` — "Get Close To The Supreme Reality Today…". 4. `ttc-content-section` — "What Will You Learn…" 17 modules. 5. `why-choose-split bg` — "Who Should Join…" + "Benefits Of The 300 Hrs…". 6. SCHED-A. 7. `dates-fees-section` — 300-hr tier, 1 session. 8. EXC. 9. `workshop-faq-section` — 3 FAQs.
- **Key facts to retain:**
  - Nav "300 Hours Mystic Kundalini Kriya TTC" vs H1 "300 Hrs Kundalini Yoga Teacher Training Course".
  - Duration "20 Days"; session "1st to 20th" (once monthly).
  - Price IDR 23,465,000 ($1,299); 300-hr accommodation tier.
  - Prerequisites: completed 200-hr Kundalini; "You must have already have your Kundalini awakened."; "hold an intermediate level asana for at least 20 minutes"; English.
  - Certification: FAQ RYT 500 after combining 200 + 300; YA logo alt "RYS 200".
  - Modules: Hatha Yoga For Balancing Male And Female Energies; Breath-based Kundalini Practices; Kundalini Awakening Pranayama; Kundalini-activating kriyas; Bandhas; Mudras; Shatkarma Kriyas; Theory of Purusha and Prakriti; Knowledge about Chakras and Nadis; Therapeutic side of Kundalini Yoga; Meditation; Third Eye Activation; Powerful Mantras; Ayurveda and Doshas; Teaching Pedagogy; Anatomy and Physiology; Astral Body.
- **Assets:** banner `multi-style/300-kundalini-ttc/banner-img.webp` (1920×1280); `300-kundalini-ttc/overview-img.webp`, `who-will-learn.webp`, `why-should-join.webp`, `faqs.webp`; YA logo. 45 `<img>`.
- **Interactive elements:** EXC Swiper; FAQ accordion.
- **Responsive notes:** mobile overflow **yes**; D 7,431 / T 10,775 / M 11,795.
- **Dependencies:** `enrollment-form.php`; Prasadam café.
- **Issues / risks:** "Beginner FRIENDLY LEVEL" contradicts 200-hr prerequisite; "Foundational Excellence" eyebrow on advanced course; "must already have your Kundalini awakened" and "20 minutes" hold — likely errors; "restrain from", "adopt to"; RYS 300 logo not used (generic logo); generic schedule.
- **Redesign recommendation:** Shared template; business to confirm entry requirements.

### 500 Hours Kundalini Yoga Teacher Training
- **URL / status:** https://baliyogastudio.org/500-hour-kundalini-yoga-teacher-training.php — 200
- **Type / purpose:** Template A; combined 500-hr Kundalini.
- **SEO:** title "500 Hrs Kundalini Yoga Teacher Training Course Bali | Bali Yoga Studio"; meta **missing**; canonical none; H1 "500 Hrs Kundalini Yoga Teacher Training Course" (1).
- **Sections (original order):**
  1. `inner-banner`. 2. `expect-bar-section` — "500 Hours / 35 Days / Beginner / Certificate". 3. `trust-section` — "Complete Spiritual Awakening And Transformation…". 4. `ttc-content-section` — "What Is Kundalini Yoga?". 5. `ttc-content-section` — "What Will You Learn…" 16 items. 6. `why-choose-split bg` — "Who Can Join…" + "Why Should You Choose…". 7. SCHED-A. 8. `dates-fees-section` — 500-hr tier, 1 session. 9. EXC. 10. `workshop-faq-section` — 3 FAQs.
- **Key facts to retain:**
  - Nav "500 Hours Mastering Kundalini Kriya TTC" vs H1 "500 Hrs Kundalini Yoga Teacher Training Course".
  - Duration "35 Days" (expect bar + fee) vs "roughly 8 weeks" (overview) vs FAQ "roughly 2 months"; session "1st to 5th (Next Month)".
  - Price IDR 36,110,000 ($1,999) — identical to 56-day 500-hr YTT; 500-hr accommodation tier.
  - Certification: "Yoga Alliance certified course"; "apply for RYT 500"; YA logo alt "RYS 200".
  - Modules: Advanced asana practice; Alignment techniques; Knowledge about Pranic Body; Training on Chakras and Nadis; Spiritual blockages; Advanced energy balancing practices; Pranayama; Kriyas; Meditation; Mantra Chanting; Bandhas and Mudras; Philosophy of Kundalini; Anatomy and physiology; Teaching skills; Kundalini Tantra; Kundalini Awakening.
  - Claims: "internship opportunities and job placement"; "curriculum … better than that of others".
- **Assets:** banner `multi-style/500-kundalini-ttc/banner-img.webp` (1920×1280); `500-kundalini-ttc/overview.webp`, `what-is-kundalini-yoga-img.webp`, `what-will-you-learn.webp`, `who-can-join.webp`, `faqs.webp`; YA logo. 47 `<img>`.
- **Interactive elements:** EXC Swiper; FAQ accordion.
- **Responsive notes:** mobile overflow **yes**; D 8,024 / T 11,457 / M 12,290.
- **Dependencies:** `enrollment-form.php`; Prasadam café.
- **Issues / risks:** 35 days vs 8 weeks/2 months; "1st to 5th (Next Month)" (35 days would need different end date — I); same price as 56-day YTT; job-placement promise; generic schedule.
- **Redesign recommendation:** Shared template; business confirms duration/dates.

### 50 Hours Yin Yoga Teacher Training
- **URL / status:** https://baliyogastudio.org/50-hour-yin-yoga-teacher-training.php — 200
- **Type / purpose:** Template A (3 `ttc-content-section`s); specialty 50-hr.
- **SEO:** title "50 Hrs Yin Yoga Teacher Training Course Bali | Bali Yoga Studio"; meta **missing**; canonical none; H1 "50 Hours Yin Yoga Teacher Training Course" (1).
- **Sections (original order):**
  1. `inner-banner`. 2. `expect-bar-section` — "50 Hours / 4 Days / Beginner / Certificate". 3. `trust-section` — "50 Hrs Yin Yoga TTC" overview. 4. `ttc-content-section` — "What Is Yin Yoga?". 5. `ttc-content-section` — "What Will You Learn…" 11 items. 6. `why-choose-split bg` — "Benefits…" + "Why Choose…". 7. `ttc-content-section` — "Why Should You Do 50 Hrs Yin Yoga TTC?". 8. SCHED-A. 9. `dates-fees-section` — 50-hr tier. 10. EXC. 11. `workshop-faq-section` — 3 FAQs.
- **Key facts to retain:**
  - Nav "Yin Yoga TTC" vs H1 "50 Hours Yin Yoga Teacher Training Course".
  - Duration "4 Days"; sessions "1st to 5th", "16th to 20th"; FAQ "The duration of the 50 Hrs Yin Yoga TTC is a week."
  - Price IDR 6,304,000 ($349); 50-hr accommodation tier.
  - Certification: "the 50 Hrs course only carries a completion certificate. You have to complete the 200 hrs Yin Yoga TTC to get a Yoga Alliance certificate." (no 200-hr Yin page in nav — V for nav labels).
  - Modules: Yin Yoga Philosophy; Asana and Variations; Yin Yoga Sequencing; Breathing Techniques; Meditation; Anatomy and Physiology; Teaching Methodology; Evaluation and Certification; Daily Yin Yoga Practices; Mindfulness; Yoga Nidra.
- **Assets:** banner `multi-style/50-hr-yin-yoga-ttc/banner-img.webp` (1920×1280); `50-hr-yin-yoga-ttc/overview.webp`, `what-is-yin-yoga.webp` (500×333, small), `what-will-learn.webp`, `why-choose-us.webp`, `why-should-you-do.webp`, `faqs.webp`. 49 `<img>`.
- **Interactive elements:** EXC Swiper; FAQ accordion.
- **Responsive notes:** mobile overflow **yes**; D 8,475 / T 11,961 / M 12,649.
- **Dependencies:** `enrollment-form.php`; Prasadam café.
- **Issues / risks:** refers to "100 Hrs and 200 Hrs Yin Yoga TTC" not offered; "Want to improve my focus and patience." (1st person); sentence "Bali Yoga Studio offers a subtle introduction…" duplicated in two sections; "course' delivery"; "You will be able to teach across the globe" vs completion-cert only; schedule is Ashtanga/Hatha, no Yin.
- **Redesign recommendation:** Shared template; merge the two "why" sections; business confirms Yin roadmap.

### 50 Hours Aerial Yoga Teacher Training
- **URL / status:** https://baliyogastudio.org/50-hour-aerial-yoga-teacher-training-course.php — 200
- **Type / purpose:** Template A; specialty 50-hr.
- **SEO:** title "50 Hrs Aerial Yoga Teacher Training Course Bali | Bali Yoga Studio"; meta **missing**; canonical none; H1 "50 Hrs Aerial Yoga Teacher Training" (1).
- **Sections (original order):**
  1. `inner-banner`. 2. `expect-bar-section` — "50 Hours / 4 Days HANDS-ON TRAINING / All Levels OPEN FOR ALL / Certificate". 3. `trust-section` — "50 Hrs Aerial Yoga TTC" (tagline merged into paragraph). 4. `ttc-content-section` — "What Will You Learn…" 11 items. 5. `ttc-content-section` — "Who Can Apply…". 6. `why-choose-split bg` — "Benefits…" + "Why Should You Choose…". 7. SCHED-A. 8. `dates-fees-section` — 50-hr tier. 9. EXC. 10. `workshop-faq-section` — 3 FAQs.
- **Key facts to retain:**
  - Nav "Aerial Yoga TTC" vs H1 "50 Hrs Aerial Yoga Teacher Training".
  - Duration "4 Days"; sessions "1st to 5th", "16th to 20th". Class size "between 10-12 students".
  - Price IDR 6,304,000 ($349); 50-hr accommodation tier.
  - Certification: "Certificate OF COMPLETION"; "syllabus has been created in keeping with the guidelines of Yoga Alliance".
  - Modules: Aerial basic poses and techniques; Anatomy and physiology; Class sequencing and structuring; Restorative flows; Essential observation techniques; Mindfulness and Pranayama; Art of installing hammock for practice; Mantra Chanting; Teaching Ethics; Teaching practice; Surya Namaskar and alignment. Styles: "Hatha and Vinyasa aerial flows".
- **Assets:** banner `multi-style/50-aerial-yoga-course/banner-bg.webp` (1914×976); `50-aerial-yoga-course/overview-img.webp`, `what-will-learn-img.webp`, `who-can-apply-img.webp`, `why-choose-us.webp`, `faqs.webp`. 47 `<img>`.
- **Interactive elements:** EXC Swiper; FAQ accordion.
- **Responsive notes:** mobile overflow **yes**; D 7,812 / T 10,809 / M 11,607.
- **Dependencies:** `enrollment-form.php`; Prasadam café.
- **Issues / risks:** "all-inclusive course for beginners" vs "ideal for those who are already teaching yoga"; health claim "If you suffer from back pain, this course can alleviate the same."; "one of the oldest schools having multiple branches across the globe"; schedule has no aerial sessions; "deepening your understanding about aerial yoga" redundancy.
- **Redesign recommendation:** Shared template; specialty-course schedule; remove medical claims.

### Sound Healing Course Level 1 & 2
- **URL / status:** https://baliyogastudio.org/50-hour-sound-healing-course.php — 200
- **Type / purpose:** Template A; healing modality (2 levels).
- **SEO:** title "Sound Healing Course Level 1 And 2 | Bali Yoga Studio"; meta **missing**; canonical none; H1 "Sound Healing Course Level 1 & 2" (1).
- **Sections (original order):**
  1. `inner-banner`. 2. `expect-bar-section` — "50 Hours / 2 Levels / Beginner / Certificate". 3. `trust-section` — overview. 4. `ttc-content-section` — "What Will You Learn…" Level 1 list. 5. `ttc-content-section` — "Sound Healing Course — Level 2". 6. `why-choose-split bg` — "Benefits…" + "Why Should You Choose … For Sound Healing Certification?". 7. SCHED-A. 8. `dates-fees-section` — 50-hr tier. 9. EXC. 10. `workshop-faq-section` — 3 FAQs.
- **Key facts to retain:**
  - Nav "Sound Healing Course (Level 1 & 2)" ≈ H1.
  - Duration "4 Days" (fee card) for both levels; sessions "1st to 5th", "16th to 20th".
  - Price IDR 6,304,000 ($349); 50-hr accommodation tier.
  - Certification: "Certification under Yoga Alliance"; FAQ "globally-recognised sound healing certification"; YA logo alt "RYS 200".
  - Level 1: Introduction to sound healing tools; Physics and anatomy of sound; Concept of different singing bowls; Techniques to use sound healing tools; Knowledge of frequencies; Introduction to aura and protection; Mind relaxation; Music therapy; Facilitation of professional healing; Safety rules for classes. Level 2: Detailed knowledge about chakras; Process of identifying blockages; Usage of sounds to clear blockages; Mental therapies; Physical therapies; Chakra balancing; Professional ethics.
  - Inclusion claims: "Accommodation with all basic amenities.", "Sattvic food service."
- **Assets:** banner `multi-style/50-sound-healing/banner-bg.webp` (1911×989); `50-sound-healing/overview-img.webp`, `sound-healing-level-1-img.webp`, `sound-healing-level-2-img.webp`, `why-choose-us.webp`, `faqs-img.webp`. 47 `<img>`.
- **Interactive elements:** EXC Swiper; FAQ accordion.
- **Responsive notes:** mobile overflow **yes**; D 8,156 / T 11,558 / M 11,978.
- **Dependencies:** `enrollment-form.php`; Prasadam café.
- **Issues / risks:** YA certification claim for sound healing (YA registers yoga schools, not sound-healing certs — I); medical claims "If you suffer from diseases, you will get relief.", "pain relief"; "Sattvic food service" vs buy-your-own; slug says "50-hour" but page never states hours per level; schedule is yoga TTC timetable; same price as every 50-hr course.
- **Redesign recommendation:** Shared template with "levels" module slot; consolidate with Reiki into a healing-course variant; legal review of health claims.

### Reiki Healing Course Level 1 & 2
- **URL / status:** https://baliyogastudio.org/50-hour-reiki-healing-course.php — 200
- **Type / purpose:** Template A; healing modality (2 levels).
- **SEO:** title "Reiki Healing Course Level 1 And 2 | Bali Yoga Studio"; meta **missing**; canonical none; H1 "Reiki Healing Course Level 1 & 2" (1).
- **Sections (original order):**
  1. `inner-banner`. 2. `expect-bar-section` — "50 Hours / 2 Levels / Beginner / Certificate". 3. `trust-section` — overview. 4. `ttc-content-section` — Level 1 list. 5. `ttc-content-section` — "Reiki Healing Course — Level 2". 6. `why-choose-split bg` — "Benefits…" + "Why Choose…". 7. SCHED-A. 8. `dates-fees-section` — 50-hr tier. 9. EXC. 10. `workshop-faq-section` — 3 FAQs.
- **Key facts to retain:**
  - Nav "Reiki Healing Course (Level 1 & 2)" ≈ H1.
  - Duration "4 Days"; sessions "1st to 5th", "16th to 20th".
  - Price IDR 6,304,000 ($349); 50-hr accommodation tier.
  - Certification: "course completion certificate"; YA logo alt "RYS 200".
  - Level 1: Reiki introduction; Reiki history; Principles of Reiki; Reiki initiation; All about aura; Breathing techniques; Self-healing; Attunement. Level 2: Symbols knowledge; Distance Reiki; Aura cleansing tools and techniques; Charging crystals and water; Symbols for mental, physical and emotional healing; Use of Reiki tools; Professional healing methods; Chakra knowledge and balancing.
  - Location claims: "amidst rice fields", "streams that flow beside our ashram"; "daily reiki sessions".
- **Assets:** banner `multi-style/50-reiki-healing-course/banner-bg.webp` (1864×1134); `50-reiki-healing-course/overview-img.webp`, `level-1-img.webp`, `level-2-img.webp`, `why-choose-img.webp`, `faqs.webp`. 47 `<img>`.
- **Interactive elements:** EXC Swiper; FAQ accordion.
- **Responsive notes:** mobile overflow **yes**; D 8,035 / T 11,313 / M 12,186.
- **Dependencies:** `enrollment-form.php`; Prasadam café.
- **Issues / risks:** "It is similar to Shakti Path." (Shaktipat); garbled "your chances at successfully giving healing and teaching students also find success"; "one of the oldest and most reputed yoga schools in the entire world"; rice-field/stream setting unverified for Jl. Bisma studio; "daily reiki sessions" vs yoga schedule.
- **Redesign recommendation:** Healing-course variant of shared template (with Sound); verify location copy.

### 50 Hours Art of Vinyasa
- **URL / status:** https://baliyogastudio.org/50-hours-art-of-vinyasa.php — 200
- **Type / purpose:** Template B short course.
- **SEO:** title "50 Hours Art of Vinyasa Teacher Training in Bali | Bali Yoga Studio"; meta "Elevate your flow with our 50-hour Art of Vinyasa course in Ubud, Bali. Master the art of sequencing, breath, and movement in our sacred shala."; canonical none; H1 "50 Hours Art Of Vinyasa" (1).
- **Sections (original order):**
  1. `inner-banner`. 2. `sticky-nav-wrapper` (Schedule/Price). 3. `overview-wrapper` — "The Poetry of Flow / The Journey Within". 4. `overview-wrapper bg … section-video-bg` — "What We Teach" + 5 buttons. 5. `spacial-daily-schedule` — 8 rows. 6. `pricing-section` — 2 packages. 7. `inclusions-section` ("course details"). 8. `teacher-slider-section` — TEACH. 9. `yoga-modal` (placeholder). 10. `video-review-section`. 11. `video-popup-modal`. 12. `premium-review-section` — "What Our Guests Say" 4 quotes.
- **Key facts to retain:**
  - Not in header nav; `courses.php` card "50 Hours Art of Vinyasa" at "IDR 4,516,000 ($250)".
  - Duration: "50 Hours" only — no days, no dates.
  - Packages: "Flow Discovery" IDR 2,692,000 ($149) (excludes "Residential Accommodation"); "Vinyasa Artistic Mastery" "Best Value" IDR 4,498,000 ($249).
  - Schedule: 07:00 AM Pranayama & Meditation · 08:30 Dynamic Vinyasa Flow · 10:30 Healthy Breakfast · 12:00 PM Vinyasa Sequencing Theory · 01:30 Vegetarian Lunch · 03:30 Transitions & Float Workshop · 05:30 Restorative Vinyasa · 07:00 PM Dinner & Satsang.
  - Topics: Creative Sequencing; Breath-to-Movement; Pacing & Rhythm; Advanced Transitions; Flow Philosophy.
  - Included: 50 Hours of Creative Instruction; Vinyasa Sequencing Manual; Art of Vinyasa Certification; Pranayama & Rhythm Workshops; All Necessary Yoga Mats & Props; Sacred Shala Access in Ubud. Not included: Stay & Accommodation; Personal Travel Insurance; flights; Airport Transfers; Personal Meals & Expenses; Optional Private Sessions.
  - Certification body: none named.
- **Assets:** banner `assets/img/short-course/50hr-vinyasa/50hr-vinyasa-banner.webp` (1920×1280); video `assets/video/course-page-video.mp4`; `assets/img/thumbnail/thumb-1..4.webp`; YouTube thumbs; teacher images. 74 `<img>`.
- **Interactive elements:** sticky in-page nav; background video (autoplay/muted/loop, no poster); teacher Swiper; topic buttons → modal (placeholder); video-review popup (iframe); no form.
- **Responsive notes:** no overflow (390/390); D 6,843 / T 9,377 / M 10,777.
- **Dependencies:** `enrollment-form.php`; `teachers.php`; YouTube; Prasadam café.
- **Issues / risks:** price conflict with `courses.php` ($250); same two prices on all 3 short courses; meals in schedule ("Healthy Breakfast", "Vegetarian Lunch", "Dinner & Satsang") vs "Personal Meals & Expenses" not included; "Residential Accommodation" ✗ on tier 1 implies included on tier 2 but "Stay & Accommodation" listed as not included; `premium-review-section` quotes about "half-day retreat" & massage (retreat page content); modal "Description goes here."; video reviews titled generically "Student Review"; no dates/days.
- **Redesign recommendation:** Consolidate all 3 short courses into one short-course template driven by data; remove retreat testimonials; business sets price/dates.

### 50 Hours Bio Mechanics
- **URL / status:** https://baliyogastudio.org/50-hours-bio-mechanics.php — 200
- **Type / purpose:** Template B short course.
- **SEO:** title "50 Hours Bio Mechanics Of Yoga Teacher Training Course In Bali | Bali Yoga Studio"; meta **missing**; canonical none; H1 "50 Hours Bio Mechanics Yoga" (1).
- **Sections (original order):** as Template B 1–8, then `lotus-divider`, `yoga-modal`, `video-review-section`, `video-popup-modal` (no premium-review section).
  - Eyebrow "The Science of Alignment"; overview about functional anatomy.
- **Key facts to retain:**
  - Not in header nav; `courses.php` "50 Hours Bio Mechanics" at "IDR 4,516,000 ($250)".
  - Duration "50 Hours" only; no dates.
  - Packages: "Essential Anatomy" IDR 2,692,000 ($149) (✗ "Residential Stay"); "Professional Bio Mechanics" IDR 4,498,000 ($249).
  - Schedule: 07:00 Pranayama & Meditation · 08:30 Functional Asana Practice · 10:30 Healthy Breakfast · 12:00 Applied Anatomy Lecture · 01:30 Vegetarian Lunch · 03:30 Joint Stability Workshop · 05:30 Somatic Movement Flow · 07:00 PM Dinner & Journaling.
  - Topics: Functional Anatomy; Precision Alignment; Injury Prevention; Fascial Release; Kinesiology.
  - Included: 50 Hours of Expert Instruction; Functional Anatomy Course Manual; Body Mechanics Certification; Practical Alignment Workshops; All Necessary Props & Equipment; Serene Studio Environment. Not included: "Accommodation & Food", insurance, flights, transfers, Personal Expenses, Additional Private Sessions.
- **Assets:** banner `short-course/50hr-bio/50hr-bio-banner.webp` (1920×1279); shared video/thumbs/teachers. 73 `<img>`.
- **Interactive elements:** as Template B.
- **Responsive notes:** no overflow; D 6,211 / T 8,125 / M 9,453.
- **Dependencies:** `enrollment-form.php`; `teachers.php`; YouTube; Prasadam café.
- **Issues / risks:** meta missing; title "Bio Mechanics Of Yoga Teacher Training Course" vs H1 "Bio Mechanics Yoga"; schedule meals vs "Accommodation & Food" not included; price conflict vs courses page; modal placeholder.
- **Redesign recommendation:** Consolidate into short-course template.

### 50 Hours Hands-on Adjustment
- **URL / status:** https://baliyogastudio.org/50-hours-hands-on-adjustment.php — 200
- **Type / purpose:** Template B short course.
- **SEO:** title "50 Hours Hands-on Adjustment Yoga Course in Bali | Bali Yoga Studio"; meta "Learn the art of physical assistance in our 50-hour Hands-on Adjustment course in Ubud, Bali. Enhance your teaching with safe, effective, and intuitive touch."; canonical none; H1 "50 Hours Hands-On Adjustment" (1).
- **Sections (original order):** Template B 1–8, `yoga-modal`, `video-review-section`, `video-popup-modal` (no divider, no premium reviews). Eyebrow "The Art of Touch"; inclusions eyebrow "retreat details".
- **Key facts to retain:**
  - Not in header nav; `courses.php` "50 Hours Hands on Adjustment" at "IDR 4,516,000 ($250)", tag "Limited Spots".
  - Duration "50 Hours" only; no dates.
  - Packages: "Foundation Touch" IDR 2,692,000 ($149) (✗ "Residential Stay"); "Adjustment Mastery" IDR 4,498,000 ($249) ("50-Hour Advanced Certification").
  - Schedule: 07:00 Pranayama & Meditation · 08:30 Morning Asana Practice · 10:30 Healthy Breakfast · 12:00 Technique & Adjustment · 01:30 Vegetarian Lunch · 03:30 Alignment & Anatomy · 05:30 Evening Yoga Flow · 07:00 PM Dinner & Reflection.
  - Topics: Leverage & Mechanics; Ethics & Consent; Prop Assisted Adjustments; Intuitive Touch; Postural Correction.
  - Included: 50 Hours of Intensive Practice; Hands-on Adjustment Manual; Professional Course Certification; Safe Alignment & Ethics Labs; All Necessary Yoga Props; Bali Yoga Studio Shala Access. Not included: "Accommodation & Stay", insurance, flights, transfers, Personal Meals & Expenses, Additional Private Mentoring.
- **Assets:** banner `short-course/50hr-adjustment/50hr-adjustment-banner.webp` (1920×1280); shared video/thumbs/teachers. 72 `<img>`.
- **Interactive elements:** as Template B.
- **Responsive notes:** no overflow; D 6,165 / T 8,012 / M 9,317.
- **Dependencies:** `enrollment-form.php`; `teachers.php`; YouTube; Prasadam café.
- **Issues / risks:** "retreat details" eyebrow (copied from retreat template); price conflict; meals in schedule vs not included; modal placeholder.
- **Redesign recommendation:** Consolidate into short-course template.

---

# Part C — Retreats, workshops/events, wellness, daily classes, course hub


Evidence: `data/content/<slug>.md` (server HTML, 2026-10-23), `data/pages/<slug>.json` (rendered DOM @1440), `data/responsive-metrics.json`, desktop screenshot crop of half-day pricing. Today = 2026-10-23.
Conventions: **[V]** = verified in evidence; **[I]** = inferred. All quotes are verbatim. "Chrome" (header, mobile sidebar, footer, thank-you modal "Namaste! Enrollment Received", floating cafe widget → prasadamhealingcafe.com) is common to every page and omitted below.

**Global findings for this group [V]**
- **No page in this group contains a form.** All booking CTAs go to `enrollment-form.php` (→ `phpmailer/enroll-mail.php`) or `contact-us.php` (→ `phpmailer/contact-mail.php`). The enrollment form already has selects for every retreat, event/workshop, wellness service and class plan (`enroll_retreat_program`, `enroll_event_workshop`, `enroll_wellness_service`, `enroll_class_plan`), but no CTA passes a preselected value **[V]**. Its intro text is Ayurveda-specific ("…ancient wisdom of Ayurveda…") for all program types **[V]**.
- **Broken nav link:** `/sinior-citizen-wellness-retreat.php` (404, title "This Page Does Not Exist") is linked from the **mobile sidebar menu** (block `div.mobile-sidebar`), label "Senior citizen wellness retreat", on **all 46 crawled pages**. The desktop header (`main-header`) uses the correct `/senior-citizen-wellness-retreat.php`. Mobile users can't reach the Senior retreat from the menu.
- Wellness (`wellness.php`) isn't in the desktop header's top-level items (Home / Daily Classes / Courses / Retreats / Events); it's linked from the footer only **[V home.json]**.
- No page in the group has a canonical tag. Every retreat detail page and every workshop detail page has no meta description.
- Testimonial video modal (`div.video-popup-modal#videoModal`) has an iframe whose src resolves to `https://baliyogastudio.org/` until a thumbnail is clicked (then YouTube `embed/…?autoplay=1`, per interaction-tests home.videoModal) **[V/I]**.
- **IDR/USD rates differ by page [I, computed]:** retreat detail prices and listing-card prices use ≈18,067 IDR/USD (2,692,000/$149; 452,000/$25; 813,000/$45). Workshop detail pages use ≈13,300–15,000 (200,000/$15; 300,000/$20; 350,000/$25; 500,000/$35). This points to two different price sources.

---

## Retreat detail template (shared)

Used by one_day, half_day, panchakarma, senior_citizen, women. DOM order (at 1440px):
1. `section.inner-banner`: banner image, H1 (title), breadcrumb Home > X
2. `section.Overview spacing`: eyebrow "overview", **H1** heading, overview image, 2–3 paragraphs
3. `section.eligibility spacing bg`: eyebrow "Eligibility", **H1** heading, 2 images, 2 paragraphs, note "Accommodation is not included."
4. `section.inclusions-section spacing`: "What's Included & What to Bring", 3 columns (Included / Not Included / What to Bring) with svg icons
5. `section.highlights spacing`: "Retreat Highlights", 5 icon+text items. Icon alts are fixed template strings: "Healthy Meal", "Juice", "Yoga Barn Pass", "Massage", "Priority Booking"
6. `section.pricing-section spacing`: "Retreat Packages", 2 cards: **Essential Zen IDR 2,692,000 ($149) / PERSON** and **Bali Signature Wellness IDR 4,498,000 ($249) / PERSON** ("Best Value"). Same prices on all 5 pages. One CTA, "Book Your Retreat Now" → `contact-us.php`. Items after the `not-check` icon render struck through, i.e. excluded (verified on the half-day screenshot)
7. `section.why-choose-section spacing bg`: "Why Choose Bali Yoga Studio", 4 identical paragraphs on every page (Authentic Balinese Roots / Compassionate & Expert Guidance / Lush, Soul-Nourishing Sanctuary / A Holistic Path to Living)
8. `section.daily-schedule-section spacing`: "Daily Schedule", 6 slots (label, time, activity)
9. `section.cafe-wrapper bg spacing`: "We Serve" food text + Swiper of 8 images `assets/img/food/food1–8.jpg` (alts "Cafe Image 1/2/5/6" repeated)
10. *(Panchakarma, Senior, Women only)* `section.cafe-wrapper spacing`: "Our Rooms" + Swiper `assets/img/rooms/room1–8.webp` (alts "Cafe Image …")
11. `section.video-review-section spacing`: "Yoga Student Stories", 6 video thumbnails (2 YouTube `7VRTh7WXMLo`, `7O7wWhb5FN8`; 4 local `assets/img/thumbnail/thumb-1..4.webp`: Shella Eve Simaro, Kirsty Wallace, Refika Ji, Remi Butler). Same on every page in the group
12. `div.video-popup-modal#videoModal`
13. `section.premium-review-section spacing`: "What Our Guests Say", 4 text testimonials (missing on Women)

Every retreat detail page has **3 H1s** (banner + Overview + Eligibility). Responsive: no horizontal overflow at any viewport. H1 64.8 / 34.56 / 30px; mobile page height 12–13.5k px (very long).

## Workshop/event detail template (shared)

Used by kirtan, ytt-intro, IYD, yin, ayurveda, kundalini, breathwork, sound healing.
1. `section.inner-banner`: banner, H1, breadcrumb Home > Workshops (→ `events-and-workshop.php`) > short name. Kirtan has no "Workshops" crumb
2. `section.event-details-section spacing bg`: one long section with overview image, H2 intro, 3–5 H3 sub-blocks (lists), a bold callout note, "Why Join Us?" (3 checkmark items), and a details card (**Date / Time / Location / Price**, svg icons calender/time/pin/price). CTAs: "Book Now" → `enrollment-form.php`, "Send Inquiry" → `contact-us.php`
3. `section.video-review-section spacing` (the same 6 videos). Only on YTT intro, Yin, Ayurveda, Kundalini, Breathwork. **Missing on Kirtan, IYD, Sound Healing**
4. `div.video-popup-modal#videoModal` (only where 3 exists)

1 H1 each. Image count: 14 non-chrome (28 total) without the video section, 20 (34) with it. **Mobile horizontal overflow on all 8 pages: scrollWidth 402 vs clientWidth 390.** overflowNonSidebar is empty, so the cause wasn't isolated **[V metric / cause unknown]**.

---

### Retreats (listing)
- **URL / status:** https://baliyogastudio.org/retreat.php · 200
- **Type / purpose:** Listing/hub of retreat programs
- **SEO:** title "Wellness Retreats in Bali | Bali Yoga Studio"; meta "Embark on a soul-stirring journey with our carefully curated retreats in the heart of Bali. From detox to wellness resets."; H1 "Our Retreats" (1)
- **Sections:** 1 `inner-banner`: "Our Retreats", Home > Retreats · 2 `course-listing spacing`: "Rejuvenate & Heal / Transformative Retreats", 4 cards
- **Key facts (cards, verbatim):**
  - **One Day Wellness Reset**, IDR 2,710,000 ($150), badge "Top". Tags: Full Day Pass, Spa Treatment, Organic Meals, Pool Access. Details → one-day-yoga-and-wellness-retreat.php
  - **Panchakarma Detox Retreat**, IDR 14,451,000 ($800), "Detox". Tags: Full Cleanse, Doctor Consult, Special Diet, Daily Therapy. Details → panchakarma-detox-retreat.php
  - **Senior Citizen Wellness**, IDR 3,613,000 ($200), "Gentle". Tags: Medical Checkup, Gentle Hatha, Ayurvedic Diet, Specialized Care. Details → senior-citizen-wellness-retreat.php
  - **Women Wellness Retreat**, IDR 4,516,000 ($250), "Sisterhood". Tags: Hormonal Health, Moon Circles, Spa Rituals, Private Sacred Space. Details → women-wellness-retreat.php
  - All "Book Now" → enrollment-form.php
- **Assets:** banner `assets/img/home/retreat-img.webp`; **all 4 cards use the same image** `assets/img/wpy-studio-banner.webp` (alt "Retreat"). 10 non-chrome images (24 total)
- **Interactive:** none
- **Responsive:** no overflow; heights 2441 / 2842 / 3765
- **Dependencies:** enrollment-form.php
- **Issues:** the **Half-Day retreat is missing** from the listing (it's in nav and the enrollment select). **None of the 4 card prices match their detail pages** (detail pages all show 2,692,000/4,498,000). Panchakarma has three different prices across the site (see Panchakarma). Several tags have no support on the detail pages ("Pool Access", "Spa Treatment", "Doctor Consult", "Medical Checkup"). The homepage retreat slider lists 6 different retreats ("Yoga Retreat", "Yoga Wellness Retreats", "Panchakarma Retreat", "Senior Citizen Retreat", "Women Retreat", "Detox Retreat"), and two of them (Yoga Retreat, Detox Retreat) have no page. Duplicate images. The home welcome list says "Retreat 1hr to 1 month", but no durations appear here.
- **Redesign:** implement as the canonical retreat hub with 5 cards (add Half-Day) and show duration on each card. Prices need **business review** before build.

### One Day Yoga & Wellness Retreat
- **URL / status:** /one-day-yoga-and-wellness-retreat.php · 200
- **Type:** Retreat detail (template above)
- **SEO:** title "One Day Yoga & Wellness Retreat - Bali Yoga Studio"; meta **missing**; **3 H1s**: "One Day Yoga & Wellness Retreat", "Your One-Day Sanctuary of Peace", "Is This Retreat Right for You?"
- **Sections:** template 1–9, 11–13 (no Rooms section). 2 Overview: Ubud, morning yoga + meditation · 3 Eligibility: beginners to seasoned, solo/couples/residents · 4 Inclusions · 5 Highlights · 6 Pricing · 7 Why choose · 8 Schedule · 9 Food · 11–13 Videos/modal/guest reviews
- **Key facts:**
  - Included: Awakening Hatha/Vinyasa Flow; Guided Pranayama & Meditation; Sacred Sound Bath Session; Nutritious Organic Garden Lunch; Traditional Balinese Herbal Tea; Premium Yoga Mats & Props
  - Not included: Overnight Accommodation; Transport to and from the Studio; Additional Spa Treatments; Personal Travel Insurance
  - Bring: Light, flexible clothing; A reusable water bottle; Personal journal & pen (optional); A light sweater for relaxation
  - Highlights: Full-day immersive wellness program; Yoga, breathwork, and sound healing; Lush, serene jungle surroundings; Balanced activities for all levels; Small, intimate group sizes
  - Packages: Essential Zen IDR 2,692,000 ($149) with only 3 items (Guided Yoga & Meditation; High-Quality Yoga Equipment; Balinese Herbal Tea). Bali Signature Wellness IDR 4,498,000 ($249): Extended Yoga & Healing Flow; Organic Garden-to-Table Lunch; Sacred Sound Healing Ritual; Fresh Cold-Pressed Juice
  - Schedule: 08:00 AM Welcome Tea & Briefing · 08:30 AM Awakening Yoga Session · 10:00 AM Bali Tropical Breakfast · 11:30 AM Guided Meditation/Pranayama · 01:00 PM Organic Lunch Sharing · 02:30 PM Sacred Sound Bath. No end time is given
  - Guest reviews: Alexandra Dewar, Samantha Flower, John Peters, Linda M.
- **Assets:** `assets/img/retreat/one-day-wellness-retreat/retreat-banner.webp` (1920×1587, alt "Courses Banner"), `overview-img.webp`, `eligibility-img1.webp`, `eligibility-img-2.webp`, food1–8. 38 non-chrome images (52 total)
- **Interactive:** food Swiper; video thumbnails → modal
- **Responsive:** no overflow; 7756 / 10628 / 12257 px
- **Dependencies:** contact-us.php (package CTA)
- **Issues:** listing price IDR 2,710,000 ($150) vs detail 2,692,000 ($149). The cheapest package doesn't clearly include the lunch or sound bath that "What's Included" lists. Breakfast at 10:00 AM comes *after* the 08:30 yoga and isn't in "What's Included". Listing tags "Pool Access"/"Spa Treatment" appear nowhere here, and "Additional Spa Treatments" is listed as not included. Package CTA goes to contact-us while listing Book Now goes to the enrollment form. Banner alt is "Courses Banner". 3 H1s.
- **Redesign:** implement; condense the generic Why-choose block and the duplicated video and review blocks into shared components. **Business:** confirm price, package contents, end time.

### Half-Day Yoga, Massage & Healing Retreat
- **URL / status:** /half-day-yoga-massage-and-healing-retreat.php · 200
- **Type:** Retreat detail
- **SEO:** title "Half Day Yoga - Bali Yoga Studio" (truncated name); meta **missing**; **3 H1s**: "Half-Day Yoga, Massage & Healing", "The Ultimate Quick Recovery", "A Perfect Break for Every Level"
- **Sections:** same as One Day (no Rooms). Breadcrumb "Home > Half day yoga and healing retreat"
- **Key facts:**
  - Included: 90-Min Flow Yoga & Pranayama; 60-Min Balinese Abhyanga Massage; Sound Healing Vibrational Therapy; Fresh Tropical Cold-Pressed Juice; All Necessary Yoga Mats & Props; Clean & Peaceful Studio Access
  - Not included / Bring: generic 6+6 list (Accommodation & Stay; Personal Travel Insurance; International/Domestic Airfare; Airport Transfers; Personal Expenses; Optional Private Sessions / Comfortable Yoga Clothing; Personal Reusable Water Bottle; Sunscreen & Sunglasses; Small Towel; Journal & Pen; An Open Heart & Mind)
  - Highlights: "Intensive 4-hour wellness circuit"; Professional Balinese Bodywork; Immediate stress & tension relief; Small groups for focused care; High-vibration sound therapy
  - Packages: Essential Zen IDR 2,692,000 ($149) includes Tropical Yoga Sessions, Ayurvedic vegetarian meal, Fresh Organic Juice, and **excludes (struck through)** Balinese Abhyanga Massage and Sound Healing Introduction **[V screenshot]**. Bali Signature IDR 4,498,000 ($249) adds Relaxing Balinese Massage, Sound Healing Introduction, Priority to Bali Yoga Studio events
  - Schedule: 08:30 AM Tea & Sanctuary Orientation · 09:00 AM Reset Yoga & Pranayama · 10:30 AM Cold-Pressed Juice Break · 11:00 AM Balinese Abhyanga Massage · 12:15 PM Sound Bath Relaxation · 01:00 PM Closing Circle & Snack
  - Guest reviews: Maria Gonzalez, Tom Wilson, Sarah L., Robert Chen
- **Assets:** `assets/img/retreat/half-day-healing-retreat/banner-img.webp` (alt "Courses Banner"), `overview-img.webp`, `eligibility-img-1/2.webp` (alts "One Day Yoga & Wellness Retreat"), food1–8. 42 non-chrome images
- **Interactive / Responsive:** Swiper, video modal; no overflow; 7643 / 10760 / 12415
- **Issues:** **not on the retreat listing page**. Essential Zen excludes the massage and sound healing that "What's Included" and the page name promise. A half-day program costs the same as the full-day one ($149/$249). "4-hour" vs a 08:30–01:00 PM schedule (4.5 h). The food text promises "farm-to-table snacks", but the cheapest package includes "Ayurvedic vegetarian meal". The "Not included" list mentions airfare and airport transfers for a half-day session, which is irrelevant (template copy). Copy-pasted alts. Title truncated.
- **Redesign:** implement. **Business:** whether the cheaper tier really excludes the massage, and the price.

### Panchakarma Detox Retreat
- **URL / status:** /panchakarma-detox-retreat.php · 200
- **Type:** Retreat detail (+ Rooms section)
- **SEO:** title "Panchakarma Detox Retreat - Bali Yoga Studio"; meta **missing**; **3 H1s**: "Panchakarma Detox Retreat", "Deep internal Cleansing of Body & Soul", "Is a Detox Right for You?"
- **Sections:** template 1–13 incl. 10 `cafe-wrapper spacing` "Our Rooms"
- **Key facts:**
  - Included: Initial Ayurvedic Body Constitution Analysis; Daily Specialized Detox Treatments; Therapeutic Meditative Yoga & Pranayama; Personalized Ayurvedic Detox Meals; Healing Herbal Supplements & Tonics; One-on-One Wellness Guidance. Not included / Bring: generic lists
  - Eligibility: "suitable for adults of all ages"; pregnant/nursing/severe chronic illness → "we recommend a consultation first"
  - Highlights: Ayurvedic internal purification (Ama-release); Targeted therapeutic body treatments; Metabolic & digestive system reset; Expert Balinese Ayurvedic practitioners; Serene, toxin-free natural environment
  - Packages: Essential Zen IDR 2,692,000 ($149) includes Ayurvedic Consultation, Cleansing Detox Meal, Herbal Toxin-Release Tea and excludes Specialized Body Treatments and Advanced Sound Healing Ritual. Bali Signature IDR 4,498,000 ($249): Full Ayurvedic Consultation; Gourmet Multi-Course Detox Meals; Targeted Therapeutic Treatments; Herbal Toxin-Release Remedies; Sound & Vibration Healing; Priority to Wellness Workshops
  - Schedule: 06:30 AM Toxin-Exit Herbal Drink · 07:00 AM Purifying Meditative Yoga · 08:30 AM Ayurvedic Healing Breakfast · 10:30 AM Specialized Detox Treatment · 01:00 PM Prana-Rich Cleansing Lunch · 05:00 PM Deep Vibrational Sound Bath
  - **Duration not stated anywhere on the page.** A testimonial says "after these 7 days"; home says "/ 7 Days"
  - Guest reviews: John D., Alexandra Dewar, Emma Thompson, David Rodriguez
- **Assets:** `assets/img/retreat/panchakarma-detox-retreat/banner-img.webp` (1738×905), `overview-img.webp` (alt "One Day Yoga & Wellness Retreat"), `eligibility-img-1/2.webp` (same wrong alt), food1–8, rooms room1–8. 50 non-chrome images
- **Interactive / Responsive:** 2 Swipers, video modal; no overflow; 8501 / 11762 / 13473
- **Issues:** **three conflicting prices**: detail IDR 2,692,000 ($149) / 4,498,000 ($249) per person; listing IDR 14,451,000 ($800); homepage spa tab "IDR 17,161,000 ($950) / 7 Days". A multi-day medical-style detox costs the same as a one-day retreat. "Accommodation is not included" while an "Our Rooms" section describes accommodation. The cheapest tier excludes the "Specialized Body Treatments" that define Panchakarma. The listing tag "Doctor Consult" has no support on this page. The wellness page describes Vamana (emesis) and Raktamokshana (bloodletting) as part of Panchakarma (medical/legal risk). Grammar: "our guided detox offer". Capitalisation: "Deep internal Cleansing". Alexandra Dewar is reused as a reviewer on the One Day page.
- **Redesign:** implement after a **business decision** on duration, price, accommodation and medical claims. Merge with the wellness page's Panchakarma content.

### Senior Citizen Wellness Retreat
- **URL / status:** /senior-citizen-wellness-retreat.php · 200. The mobile menu links to the 404 `/sinior-…` instead
- **Type:** Retreat detail (+ Rooms + `lotus-divider`)
- **SEO:** title "Senior Citizen Wellness Retreat - Bali Yoga Studio"; meta **missing**; **3 H1s**: "Senior Citizen Wellness", "Rejuvenate Your Spirit in Your Golden Years", "A Welcoming Space for All Seniors"
- **Sections:** template 1–13 plus 11 `div.lotus-divider` before the videos. **Breadcrumb reads "Home > One Day Yoga & Wellness Retreat"** (copy-paste)
- **Key facts:**
  - Eligibility: "aged 60 and above, though we welcome anyone who prefers a slower, more mindful pace". "No previous yoga experience is necessary"
  - Included: Gentle Hatha & Chair Yoga Sessions; Restorative Yoga for Joint Flexibility; Guided Cognitive & Breath Meditation; Anti-Inflammatory Ayurvedic Nutrition; Therapeutic Sound Healing Reset; Personalized Assisted Wellness Care. Not included / Bring: generic
  - Highlights: Gentle, low-impact movements for all; Specially curated anti-inflammatory meals; Peaceful, nature-immersed environment; Focus on joint health & mental clarity; Deeply relaxing sound therapy sessions
  - Packages: Essential Zen IDR 2,692,000 ($149) includes Gentle Chair Yoga Session, Healthy Anti-Inflammatory Meal, Fresh Organic Herbal Tea and excludes Full Body Joint-Relief Treatment and Private Meditation Guidance. Bali Signature IDR 4,498,000 ($249): Therapeutic Daily Yoga Flow; Multi-Course Nutritious Meals; Joint & Bone Health Workshop; Full Body Relaxing Massage; Sound & Vibration Therapy; Guided Nature & Culture Walk
  - Schedule: 07:30 AM Gentle Morning Breathwork · 08:00 AM Soft Joint-Opening Yoga · 09:30 AM Healing Vitality Breakfast · 11:00 AM Guided Nature Reflection · 01:00 PM Nutrient-Dense Light Lunch · 02:30 PM Therapeutic Sound Bath
  - Duration not stated. Rooms text: "safe, accessible…"
- **Assets:** `assets/img/retreat/senior-citizen-retreat/banner-img.webp`, `overview-img.webp`, `eligibility-img-1/2.webp`, food1–8, room1–8, `assets/img/section-divider.webp`. 51 non-chrome images
- **Interactive / Responsive:** 2 Swipers, video modal; no overflow; 8570 / 11806 / 13511
- **Issues:** **guest reviews are copied verbatim from One Day** ("An incredible one-day escape!…", "I only had one day to spare…"). Wrong breadcrumb. Listing price IDR 3,613,000 ($200) vs detail 2,692,000/4,498,000. Listing "Medical Checkup" is unsupported. Accommodation is "not included" but Rooms are described. 404 mobile-menu link.
- **Redesign:** implement; replace the reviews; fix the slug link. **Business:** price, duration, medical checkup claim.

### Women Wellness Retreat
- **URL / status:** /women-wellness-retreat.php · 200
- **Type:** Retreat detail (+ Rooms; **no `premium-review-section`**)
- **SEO:** title "Women Wellness Retreat - Bali Yoga Studio"; meta **missing**; **3 H1s**: "Women Wellness Retreat", "Reconnect with Your Inner Goddess in Bali", "A Sacred Space for All Women"
- **Sections:** template 1–12 (ends with the video modal)
- **Key facts:**
  - Eligibility: "dedicated exclusively to women of all ages"; solo, friends, "mothers and daughters"
  - Included: Moon-Cycle & Hormonal Balance Yoga; Sacred Feminine Empowerment Workshop; Guided Emotional Release Meditation; Ayurvedic Beauty & Self-Care Ritual; Traditional Balinese Flower Bath; Nutritious Glow-Boosting Meals. Not included / Bring: generic
  - Highlights: Empowering sisterhood & community connection; Traditional Balinese flower & herbal baths; Emotional healing & stress-release focus; Hormonal balance through specialized yoga; Luxury Ayurvedic self-care treatments
  - Packages: Essential Zen IDR 2,692,000 ($149) includes Inner-Connect Yoga Session, Glow-Boosting Nutritious Meal, Hormonal Balance Herbal Tea and excludes Traditional Luxury Flower Bath and One-on-One Empowerment Circle. Bali Signature IDR 4,498,000 ($249): All Specialised Yoga Sessions; Gourmet Multi-Course Vitality Meals; Full Luxury Flower Bath Ritual; Ayurvedic Self-Care Treatment; Goddess Sound healing Ritual; Access to Women's Masterclasses
  - Schedule: 07:00 AM Soft Flow & Morning Affirmations · 08:30 AM Beauty-Boosting Organic Breakfast · 11:00 AM Women's Circle & Empowerment Work · 01:30 PM Prana-Rich Garden Lunch · 03:00 PM Ayurvedic Ritual or Flower Bath · 05:00 PM Goddess Sound Healing Ritual
  - Duration not stated ("throughout her stay")
- **Assets:** `assets/img/retreat/women-wellness-retreat/banner-img.webp`, `overview-img.webp`, `eligibility-img-1/2.webp`, food1–8, room1–8. 50 non-chrome images
- **Interactive / Responsive:** 2 Swipers, video modal; no overflow; 7971 / 10533 / 12210
- **Issues:** listing IDR 4,516,000 ($250) vs detail 2,692,000/4,498,000. Essential Zen excludes the Flower Bath that "What's Included" lists. Accommodation "not included" vs Rooms section and "stay". Listing "Moon Circles"/"Private Sacred Space" not clearly reflected. Guest reviews section missing (inconsistent with siblings). "Goddess Sound healing" capitalisation.
- **Redesign:** implement. **Business:** price, duration, accommodation.

---

### Workshop and Events (listing)
- **URL / status:** /events-and-workshop.php · 200
- **Type:** Events hub
- **SEO:** title "Events and Workshop - Bali Yoga Studio"; meta **missing**; H1 "Workshop And Events" (1)
- **Sections:** 1 `inner-banner` · 2 `overview spacing`: "Transformative Workshops & Soulful Events", 3 paragraphs · 3 `old-events spacing bg`: "Memories from Past Workshops", 4 bullets, note "All our past events were completely sold out.", 5-image collage · 4 `upcoming-events spacing`: 4 cards · 5 `community-experience compact-view spacing bg`: "The Community Experience" · 6 `ecstatic-dance spacing`: Ecstatic Dance description + age rule · 7 `workshop-faq-section spacing bg`: 3-question accordion
- **Key facts (cards):**
  - **Kirtan Evening**: FREE, 15 OCT. Chanting Night / Live Music / Social Circle / Center Shala → kirtan-evening.php
  - **Yoga Teacher Training Intro**: IDR 452,000 ($25), 22 OCT. Asana Basics / Anatomy Intro / Philosophy Talk / Teaching Path → yoga-teacher-training-introduction-workshop.php
  - **International Yoga Day Program**: FREE, 21 JUN. Global Event / Group Flow / Guest Teachers / Free Goodies → international-yoga-day-program.php
  - **Yin Yoga & Deep Relaxation**: IDR 813,000 ($45), 05 NOV. 90 Min Session / Meditative Hold / Deep Stretch / Calm Mind → yin-yoga-and-deep-relaxation-workshop.php
  - Ecstatic Dance: "curated by world-class DJs"; "children under the age of 12 are not permitted on the main dance floor"
  - FAQ: "Do I need to be an advanced yogi to attend?"; "What should I bring to a workshop?" (mats, bolsters, props provided); "Can I walk-in or is booking required?" (walk-ins if space)
- **Assets:** banner `assets/img/workshop-and-event/workshop-and-event-banner.webp` (alt "Courses Banner"); `workshop-and-event-img1.webp` (used twice); `ecstatic-dance.webp` (used twice); past events `assets/img/events/mud-therepy.webp, panch-karma.webp, sound-healing.webp, wellness-course.webp, workshop.webp`. 19 non-chrome images
- **Interactive:** FAQ accordion
- **Responsive:** **mobile overflow 402/390**; 6062 / 8238 / 9221
- **Dependencies:** enrollment-form.php
- **Issues:** **only 4 of 8 workshop pages are listed.** Ayurveda, Kundalini, Breathwork and Sound Healing are reachable only via the nav (and two via mis-labelled homepage cards). Card dates have **no year**, and the matching detail pages show **2024** dates (past). Card prices conflict with the detail pages (Kirtan FREE vs IDR 200,000; YTT 452,000 vs 350,000; Yin 813,000/$45 vs 300,000/$20; Yin "90 Min" vs "3-hour"). The homepage "Upcoming Workshops & Events" shows **different events on the same dates** (15 Oct Full Moon Sound Bath & Cacao, 22 Oct Inversions Masterclass, 05 Nov Pranayama Deep Dive, 12 Nov Ecstatic Dance Bali), none of which has a page. The upcoming cards reuse past-event photos (YTT card = `panch-karma.webp`, IYD = `sound-healing.webp`). Ecstatic Dance has a section but no page, schedule or price. "Sold out" claim is unverifiable.
- **Redesign:** consolidate into an events hub fed by one data source (date with year, price, status), with all 8 workshops listed and past events auto-archived. **Business:** confirm the real calendar.

### Kirtan Evening
- **URL / status:** /kirtan-evening.php · 200
- **Type:** Event detail (workshop template, no video section)
- **SEO:** title "Kirtan Evening - Bali Yoga Studio"; meta **missing**; H1 "Kirtan Evening" (1). Breadcrumb Home > Kirtan Evening (no Workshops crumb)
- **Sections:** 1 `inner-banner` · 2 `event-details-section spacing bg`: Experience the Magic; What is Kirtan?; Who Can Attend?; What to Expect During the Session?; Key Benefits (4); Important Note; Why Join Us?; Event Details
- **Key facts:** **Date "Coming Soon"**, **Time 18:30 - 20:00**, Location "Bali Yoga Studio, Main Hall", **Price IDR 200,000 ($15)**. "Doors will close exactly 10 minutes after the event starts". Format: call-and-response, ends with silence (Shunya). Open to all ages. Why Join: Expert Facilitators, Authentic Setting, Intimate Groups
- **Assets:** `assets/img/event-and-workshop/kirtan-evening/kirtan-evening-banner.webp`, `what-is-kirtan-evening-img.webp`. 14 non-chrome images
- **Interactive:** none · **Responsive:** mobile overflow 402/390; 2567 / 3774 / 4132
- **Dependencies:** enrollment-form.php, contact-us.php
- **Issues:** listing says **FREE / 15 OCT / "Center Shala"**; detail says IDR 200,000 ($15) / "Coming Soon" / "Main Hall". daily_classes says "Except Kirtan on Thursday and Sunday Soulful & Buffet", which implies a recurring weekly Kirtan not reflected here. "gentle ground meditation" (likely "grounding") **[I]**.
- **Redesign:** implement as a recurring event (weekday/time) if it is weekly. **Business:** price (free vs 200k), schedule.

### Yoga Teacher Training Introduction Workshop
- **URL / status:** /yoga-teacher-training-introduction-workshop.php · 200
- **Type:** Workshop detail (with video section)
- **SEO:** title "Yoga Teacher Training Introduction - Bali Yoga Studio"; meta **missing**; H1 "Yoga Teacher Training Intro" (1). Breadcrumb Home > Workshops > Yoga TTC Intro
- **Sections:** 1 banner · 2 event-details (Kickstart Your Teaching Journey; What to Expect?; Topics Covered (4); Who Should Attend?; Your Professional Path (3); Early Bird note; Why Join Us?; Workshop Details) · 3 video-review · 4 modal
- **Key facts:** **Date October 22nd, 2024**, Time 10:00 - 16:00, Location "Bali Yoga Studio, Hall B", **Price IDR 350,000 ($25)**. Covers "200-hour and 300-hour curriculums", "mini-teaching lab", "Yoga Alliance certification requirements". Audience: "considering a TTC in the next 6-12 months". **Early Bird: sign up for "upcoming 200hr TTC program within 7 days" → "special 10% discount on their tuition fees."** Why Join: "Yoga Alliance Accredited", "Over 10+ years experience", Career Support
- **Assets:** `assets/img/event-and-workshop/yoga-teacher-training-workshop/banner-img.webp`, `overview-img.webp`. 20 non-chrome images
- **Interactive:** video modal · **Responsive:** mobile overflow 402/390; 3498 / 4881 / 5925
- **Issues:** **past date (2024)**. Listing price IDR 452,000 ($25) vs detail IDR 350,000 ($25) (same USD, different IDR). The "Yoga Alliance Accredited" claim needs verification. "Over 10+ years" is redundant. Home hero "Become a Certified Yoga Teacher / Join Training" links to daily-classes.php rather than a TTC page (adjacent CTA issue).
- **Redesign:** implement; link to the 200h TTC page. **Business:** date, price, early-bird offer validity.

### International Yoga Day Program
- **URL / status:** /international-yoga-day-program.php · 200
- **Type:** Event detail (no video section)
- **SEO:** title "International Yoga Day Program - Bali Yoga Studio"; meta **missing**; H1 "International Yoga Day" (1)
- **Sections:** 1 banner · 2 event-details (Celebrate Global Unity…; What is IYD?; Schedule Highlights (4); How to Prepare?; Full Day Schedule; Admission note; Why Join Us?; Program Details)
- **Key facts:** **Date June 21st, 2024**, Time 06:00 - 18:00, Location "Ubud Main Studio & Garden", Price "Free (Registration Required)". Schedule: 06:00 - 08:00 108 Sun Salutations and Morning Blessing · 10:00 - 12:00 Hatha Flow and Community Talk · 14:00 - 16:00 Workshops on Yogic Philosophy and Lifestyle · 17:00 - 18:00 Grand Finale: Sunset Meditation and Kirtan. Bring own mat if possible ("limited supply"). Wear "white or light-colored" clothing; arrive 30 min early; refreshments at the Cafe
- **Assets:** `assets/img/event-and-workshop/international-yoga-day/banner-img.webp`, `overview-img.webp`. 14 non-chrome images
- **Interactive:** none · **Responsive:** mobile overflow 402/390; 2587 / 3827 / 4163
- **Issues:** **past date (2024)**. The listing shows "21 JUN" with no year (in Oct 2026 the next one is 21 Jun 2027). This conflicts with the events FAQ ("We provide mats…"). "main lawn" vs "Garden".
- **Redesign:** implement as an annual seasonal page (hide or "next year" state). **Business:** 2027 plan.

### Yin Yoga & Deep Relaxation Workshop
- **URL / status:** /yin-yoga-and-deep-relaxation-workshop.php · 200
- **Type:** Workshop detail (with video section)
- **SEO:** title "Yin Yoga and Deep Relaxation - Bali Yoga Studio"; meta **missing**; H1 "Yin Yoga & Relaxation" (1)
- **Sections:** 1 banner · 2 event-details (Dive Deep into the Art of Surrender; What is Yin Yoga?; Workshop Benefits (4); The Experience; Yin vs Yang; What to Bring note; Why Join Us?; Workshop Details) · 3 videos · 4 modal
- **Key facts:** "This 3-hour journey". Poses held "3 to 5 minutes or more". Ends with Yoga Nidra. **Date November 5th, 2024**, Time 15:00 - 18:00, Location "Bali Yoga Studio, Hall A", **Price IDR 300,000 ($20)**. Bring warm layers; no experience needed
- **Assets:** `assets/img/event-and-workshop/yin-yoga-workshop/banner-img.webp`, `overview-img.webp`. 20 non-chrome images
- **Responsive:** mobile overflow 402/390; 3433 / 4812 / 5879
- **Issues:** listing "90 Min Session", IDR 813,000 ($45) vs detail "3-hour", IDR 300,000 ($20). **Past date (2024)**; listing "05 NOV" (no year), and the same date is used by home's "Pranayama Deep Dive". Grammar: "workshop invite you".
- **Redesign:** implement. **Business:** duration, price, date.

### Ayurveda Workshop
- **URL / status:** /ayurveda-workshop.php · 200
- **Type:** Workshop detail (with video section). **Not on the events listing**
- **SEO:** title "Ayurveda Workshop - Bali Yoga Studio"; meta **missing**; H1 "Ayurveda Workshop" (1)
- **Sections:** 1 banner · 2 event-details (Master the Science of Longevity; Discover Your Dosha; Workshop Curriculum (4); Why Attend?; What You Will Discover?; Ancient Wisdom for Modern Life (3); Course Material note; Why Join Us?; Workshop Details) · 3 videos · 4 modal
- **Key facts:** "In this 3-hour Ayurveda Workshop". Includes a live demo of tongue scraping and Abhyanga. Participants get a digital "Ayurvedic Starter Guide" + "sample packet of tri-dosha balancing herbal tea". **Date November 12th, 2024**, **Time 10:00 - 16:00**, Location "Bali Yoga Studio, Hall B", **Price IDR 500,000 ($35)**
- **Assets:** `assets/img/event-and-workshop/ayurveda-workshop/banner-img.webp`, `overview-img.webp`. 20 non-chrome images
- **Responsive:** mobile overflow 402/390; 3631 / 5075 / 6194
- **Issues:** "3-hour" vs 10:00–16:00 (6 h). Time and location are identical to YTT Intro (copy-paste suspected **[I]**). **Past date**. The homepage "Teacher Training Courses" card **"Ayurvedic Therapist Training", Diploma, IDR 21,677,000 ($1,200)** links to this 3-hour workshop page (wrong target). "5,000-year-old" claim.
- **Redesign:** implement and add to the listing. **Business:** duration, date; does an Ayurvedic Therapist Training page exist?

### Kundalini Yoga Workshop
- **URL / status:** /kundalini-yoga-workshop.php · 200
- **Type:** Workshop detail (with video section). Not on the events listing
- **SEO:** title "Kundalini Yoga Workshop - Bali Yoga Studio"; meta **missing**; H1 "Kundalini Yoga" (1)
- **Sections:** 1 banner · 2 event-details (Awaken Your Creative Potential; What is a Kundalini Kriya?; Key Workshop Elements (7); Preparation note; Why Join Us?; Workshop Details) · 3 videos · 4 modal
- **Key facts:** "In this 3-hour workshop". Kriya for "Self-Radiance and Mental Clarity". No heavy meal 2 h before. **Date November 18th, 2024**, **Time 16:30 - 19:00**, Location "Bali Yoga Studio, Hall A", **Price IDR 300,000 ($20)**
- **Assets:** `assets/img/event-and-workshop/kundalini-workshop/banner-img.webp`, `overview-img.webp`. 20 non-chrome images
- **Responsive:** mobile overflow 402/390; 3187 / 4623 / 5522
- **Issues:** "3-hour" vs 16:30–19:00 (2.5 h). The Key Elements list duplicates items: "Breath of Fire" (×2, as "Dynamic Breathwork") and "Deep Relaxation" (×2). **Past date**. The homepage card "Kundalini Yoga Workshop", **"5 Days", IDR 6,322,000 ($350)**, links here, which conflicts with 3 h / IDR 300,000. Health claim "detoxify the bloodstream".
- **Redesign:** implement; dedupe the list. **Business:** is it a 5-day course or a 3-hour workshop?

### Breathwork & Pranayama Workshop
- **URL / status:** /breathwork-and-pranayama-workshop.php · 200
- **Type:** Workshop detail (with video section). Not on the events listing; no body links anywhere (nav only)
- **SEO:** title "Breathwork and Pranayama Workshop - Bali Yoga Studio"; meta **missing**; H1 "Breathwork & Pranayama" (1)
- **Sections:** 1 banner · 2 event-details (Unlock the Power…; What is Pranayama?; What You Will Learn (7); Safety First note; Why Join Us?; Workshop Details) · 3 videos · 4 modal
- **Key facts:** **Date November 25th, 2024**, Time 08:00 - 11:30, Location "Bali Yoga Studio, Hall B", **Price IDR 300,000 ($20)**. Safety: pregnant/cardiovascular → inform the instructor
- **Assets:** `assets/img/event-and-workshop/breathwork-workshop/banner-img.webp`, `overview-img.webp`. 20 non-chrome images
- **Responsive:** mobile overflow 402/390; 3158 / 4590 / 5479
- **Issues:** "Nadi Shodhana" and "Nadi Purification" duplicate each other. **Past date**. Home lists a different "Pranayama Deep Dive" on "05 Nov". The page is orphaned from the listing.
- **Redesign:** implement; list it on the hub. **Business:** date.

### Sound Healing Workshop
- **URL / status:** /sound-healing-workshop.php · 200
- **Type:** Workshop detail (**no video section**). Not on the events listing; nav only
- **SEO:** title "Sound Healing Workshop - Bali Yoga Studio"; meta **missing**; H1 "Sound Healing Workshop" (1)
- **Sections:** 1 banner · 2 event-details (Restore Your Internal Vibrational Balance; How Does it Work?; What We Use (7); Experience Level note; Why Join Us?; Workshop Details)
- **Key facts:** "This 3-hour journey". **Date December 5th, 2024**, **Time 19:00 - 20:30**, Location "Bali Yoga Studio, Healing Sanctuary", **Price IDR 200,000 ($15)**. Props provided (mats, bolsters, eye masks)
- **Assets:** `assets/img/event-and-workshop/sound-healing-workshop/sound-healing-workshop-banner.webp`, `overview-img.webp`. 14 non-chrome images
- **Responsive:** mobile overflow 402/390; 2343 / 3552 / 3804
- **Issues:** "3-hour" vs 19:00–20:30 (1.5 h). **Past date**. Medical claims ("lower blood pressure", "bodies are approximately 70% water", "Cellular Healing Repair on a vibrational level"). It overlaps with the daily 7:00 PM Sound Healing class (daily_classes) and the 50h Sound Healing course, so the positioning is unclear.
- **Redesign:** implement or consolidate with the sound-healing class/course. **Business:** claims review.

---

### Wellness
- **URL / status:** /wellness.php · 200
- **Type:** Services page (massages, Panchakarma, beauty)
- **SEO:** title "Wellness & Healing | Bali Yoga Studio - Rejuvenate Your Soul"; meta "Nourish your body and soul at Bali Yoga Studio's wellness center. From traditional Balinese massage to Ayurvedic detox (Panchakarma), find true healing in Ubud."; H1 "Wellness" (1)
- **Sections:** 1 `inner-banner` · 2 `div.sticky-nav-wrapper#stickyNav` (Massage / Panchakarma / Natural Beauty → #massage, #panchakarma, #naturely) · 3 `overview-wrapper spacing`: overview, 3 paragraphs · 4 `massage-wrapper spacing bg#massage`: 5 massage cards (Abhyanga, Deep Tissue, Balinese, Thai, Aromatherapy), each "Book Now" → enrollment-form.php · 5 `detox-wrapper spacing`: "Ayurvedic Detoxification", the 5 procedures · 6 `div.bg-wrapper`: "What is Ayurveda ?", "Enroll Now" → enrollment-form.php · 7 `cafe-wrapper spacing bg#panchakarma`: "What is Panchakarma ?" + Swiper of 6 images · 8 `massage-wrapper spacing#naturely`: "Lush Natural Beauty Treatments" (facial; 4 bullets) · 9 `lotus-divider` · 10 `video-review-section` · 11 video modal
- **Key facts:** **no prices or durations on this page.** The homepage spa tabs give: Abhyanga IDR 903,000 ($50) / 60 mins; Deep Tissue IDR 1,174,000 ($65) / 90 mins; Balinese IDR 813,000 ($45) / 60 mins; Thai IDR 994,000 ($55) / 90 mins; Sound Healing Therapy IDR 723,000 ($40) / 45 mins; Reiki IDR 1,084,000 ($60) / 60 mins; Ayurvedic Facial IDR 632,000 ($35) / 45 mins; Panchakarma Detox Retreat IDR 17,161,000 ($950) / 7 Days. Panchakarma procedures: Vamana (emesis), Virechana (purgation), Basti (enema), Nasya (nasal), Raktamokshana (bloodletting, "performed only when necessary")
- **Assets:** banner `assets/img/wellness-banner.webp` (alt "Courses Banner"); `assets/img/wellness/wellness-img-1..5.webp` (massages), the **same wellness-img-1..6 reused in the Panchakarma swiper** (alt "panchakarma img"), `detox-img.webp` (alt "Abhyangam Massage"), `facial-massage.webp`. 26 non-chrome images
- **Interactive:** sticky anchor nav, Swiper, video modal
- **Responsive:** no overflow; 6767 / 8337 / 10467
- **Dependencies:** enrollment-form.php (its `enroll_wellness_service` select lists Abhyanga, Deep Tissue, Balinese, Thai, Sound Healing, Reiki Therapy, Ayurvedic Facial. **Aromatherapy is missing**)
- **Issues:** the service sets differ between wellness.php (has Aromatherapy; no Sound Healing, Reiki or prices) and home (has prices, Sound Healing, Reiki, Facial; no Aromatherapy). No link to panchakarma-detox-retreat.php. Medical procedures (emesis, purgation, enema, bloodletting) are offered without a qualification/safety statement **(legal/medical risk)**. Spacing typos: "Bali Yoga Studio ,", "What is Ayurveda ?", "What is Panchakarma ?". Anchor id "naturely". Images reused with wrong alts. Not in the desktop header nav.
- **Redesign:** consolidate the wellness menu (one service list with price and duration) and merge the Panchakarma info with the Panchakarma retreat page. **Business:** service list, prices, which detox procedures are actually offered.

### Daily Classes
- **URL / status:** /daily-classes.php · 200
- **Type:** Drop-in classes, timetable, pricing
- **SEO:** title "Daily Yoga Classes in Ubud | Bali Yoga Studio"; meta "Join our daily yoga classes in Ubud, Bali. From Hatha and Vinyasa to Sound Healing and Meditation, find the perfect class for your level and schedule."; H1 "Daily Classes" (1)
- **Sections:** 1 `inner-banner` · 2 `sticky-nav-wrapper#stickyNav` (Schedule / Price) · 3 `overview-wrapper spacing`: overview (mentions "Guruji Vishnu Panigrahi") · 4 `overview-wrapper bg spacing section-video-bg#what-we-teach`: bg video + 9 style buttons that open the modal · 5 `why-choose-section spacing`: 4 USPs + image · 6 `premium-schedule-wrapper#schedule`: timetable · 7 `pricing-list-section#price`: 8 price cards + tiers + notes · 8 `div.yoga-modal#yogaModal` · 9 `lotus-divider` · 10 `teacher-slider-section#teachers`: Swiper, 9 teachers · 11 `lotus-divider` · 12 `video-review-section` · 13 video modal
- **Weekly timetable (verbatim; identical to homepage):**
  | Time | Duration | Class | Days | Category |
  |---|---|---|---|---|
  | 8:00 AM | 60 min | Hatha Flow | Everyday | Yoga |
  | 9:30 AM | 60 min | Pilates | Every Monday | Pilates |
  | 10:00 AM | 60 min | Aerial Yoga | Every Sunday | Yoga |
  | 5:00 PM | 60 min | Meditation | Friday & Saturday | Meditation |
  | 7:00 PM | 60 min | Sound Healing | Everyday | Healing |
- **Prices (IDR only, no USD):** Single Drop-In 150K · Students (Age 10-20) 100K (title in rendered H3; the "Supporting the next generation of yogis." card) · KITAS / Indonesian 100K · 3-Class Card * 450K ("Best Value") · 5-Class Card * 700K · 10-Class Card ** 1.35 Mil ("Best Value") · 20-Class Card ** 2.0 Mil · 30-Day Unlimited *** 2.950 Mil ("Best Value"). Tiers: 3 & 5 cards "(Valid for 30 days)", "Free 7-day access to Bali Yoga Studio Online | 30% discount on online subscriptions". 10 & 20 "(Valid for 30 & 60 days)", "…50% discount on online subscriptions". 30-Day Unlimited "All benefits of 10 & 20 class cards | 10% discount at Bali Yoga Studio Wellness & Garden Kafe". Notes: "Class cards are non-transferable, non-refundable, and non-extendable."; "Mats and props included | Shower/Bath Towel rental: 40k | Yoga Mat Towel rental: 30k"; "Except Kirtan on Thursday and Sunday Soulful & Buffet"; "All class card packages is only for our regular class"
- **Teachers (slider):** Yogi Ashutosh Mishra; Yogi Naveen; Hari Dharma; Yogi Akshant Ji; Yogi Sunil; Mandeep Bhatt; Yogi Rohit Kumar; Umakanta Sahoo (Guna); Sujata Ray (Mili). All show the badge "10+ Year Of Experience"; "SEE MORE" → teachers.php
- **Assets:** banner `assets/img/daily-classes/daily-classes-banner.webp` (alt "Courses Banner"); video `assets/video/course-page-video.mp4` (autoplay, muted, loop, no poster); style icons `assets/img/icons/*.webp`; schedule icons `assets/img/daily-classes/icons/*.webp`; `assets/img/daily-classes/why-choose.webp`; teacher photos `assets/img/teacher/*.webp`. 61 non-chrome images, **23 empty alts**
- **Interactive:** sticky anchor nav; 9 style buttons → `#yogaModal`, whose static content is "Yoga Style / Description goes here." with an empty img src (natural 0×0). Presumably JS-filled **[I, not verified]**. Teacher Swiper with "Pagination". Video modal
- **Responsive:** **mobile overflow 402/390**; 7660 / 9994 / 10299
- **Dependencies:** enrollment-form.php (`enroll_class_plan` select matches the 8 plans), teachers.php
- **Issues:** **courses.php card for "Daily Yoga Classes" shows IDR 903,000 ($50), "Mon - Sat", "Hatha Styles"**, which conflicts with drop-in 150K and the Everyday/Sunday timetable. IDR 903,000 equals the home Abhyanga massage price (copy-paste suspected **[I]**). "What We Teach" offers Vinyasa, Yin, Kundalini, Ashtanga, Reiki, Ecstatic Dance, but none are on the timetable, and Pilates isn't in What We Teach. Meta promises Vinyasa. "Best Value" appears on 3 cards. Yogi Akshant Ji: "With over 5 years of teaching experience" vs badge "10+ Year Of Experience". Teacher numbering skips "Teacher 3". Guruji Vishnu Panigrahi is named but not in the slider. "Except Kirtan on Thursday and Sunday Soulful & Buffet" is unclear and conflicts with the Kirtan page "Coming Soon". Grammar "packages is". Mixed number formats ("1.35 Mil", "2.950 Mil"). Placeholder modal text. Large autoplay video with no poster.
- **Redesign:** implement (high-value page); render the timetable and prices from one data source shared with the homepage. **Business:** class list, Students card validity, Kirtan note meaning.

### Courses (listing)
- **URL / status:** /courses.php · 200
- **Type:** Listing of daily classes + short courses
- **SEO:** title "Yoga Courses & Wellness Programs | Bali Yoga Studio"; meta "Explore our wide range of yoga courses, wellness retreats, and healing workshops at Bali Yoga Studio. From daily classes to certified teacher training."; H1 "Our Courses" (1)
- **Sections:** 1 `inner-banner` (`assets/img/common-banner-img.webp`) · 2 `daily-classes-listing spacing`: "Find Your Daily Flow", 1 card · 3 `short-courses-listing pt-0 spacing`: "Specialised Short Courses", 3 cards
- **Key facts:** Daily Yoga Classes, IDR 903,000 ($50), "Daily". Mon - Sat / Hatha Styles / Ubud Shala / All Levels → daily-classes.php. **50 Hours Hands on Adjustment** IDR 4,516,000 ($250) → 50-hours-hands-on-adjustment.php. **50 Hours Art of Vinyasa** IDR 4,516,000 ($250) → 50-hours-art-of-vinyasa.php. **50 Hours Bio Mechanics** IDR 4,516,000 ($250) → 50-hours-bio-mechanics.php. All Book Now → enrollment-form.php
- **Assets:** all 4 cards use `assets/img/wpy-studio-banner.webp`. 10 non-chrome images
- **Interactive:** none · **Responsive:** no overflow; 2625 / 3646 / 3898
- **Issues:** the meta promises retreats, workshops and teacher training, but the page lists none of them (no TTCs, no Yin/Aerial/Sound/Reiki short courses that appear in the nav). The daily-class price conflicts (see Daily Classes). IDR 4,516,000 ($250) is also the Women retreat listing price (the same figure is reused **[V]**). One image for every card. Very thin page.
- **Redesign:** consolidate into a true "All programs" hub (TTCs, short courses, classes, retreats, workshops) or drop it in favour of the nav. **Business:** prices.

### Misspelled route: /sinior-citizen-wellness-retreat.php
- 404 "This Page Does Not Exist" (meta "Oops, looks like the page is lost."). Linked **only** from the mobile sidebar menu item "Senior citizen wellness retreat" on all 46 crawled pages. Desktop header link is correct. Fix in the shared nav; add a 301 to `/senior-citizen-wellness-retreat.php` (or the new URL).
