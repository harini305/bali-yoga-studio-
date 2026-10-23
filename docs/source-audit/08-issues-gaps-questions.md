# 08 — Issues, Gaps & Open Questions

Severity: **Critical** = harms the business or users now · **High** = misleading facts or broken paths · **Medium** = quality/UX · **Low** = polish.
**None of these were corrected.** Facts are quoted as published. Items marked "Needs business decision" require the studio's input before Phase 2 can present them.

## 1. Sitewide issues (verified)

| # | Severity | Issue | Evidence |
|---|---|---|---|
| G1 | **Critical** | `robots.txt` = `User-agent: * / Disallow: /`. The entire site is blocked from search engines | `https://baliyogastudio.org/robots.txt` |
| G2 | High | No sitemap; **no canonical tags on any page**; **meta description missing on 33 of 46 live pages**; the 5 retreat detail pages have 3 H1s each and blog details has 2 | `data/routes.csv` |
| G3 | High | Two broken links in the mobile menu on every page: "Teachers" → `/teacher.php` (404) and "Senior citizen wellness retreat" → `/sinior-citizen-wellness-retreat.php` (404). The footer and desktop menu use the correct URLs | `data/html/home.html`, `data/pages/teacher.json` |
| G4 | High | **Content copied from another school**: "World Peace Yoga School" (200-hour TTC Hatha module, teacher bios), "WPYS" (home review), logo alt "WPY Studio", banner file `wpy-studio-banner.webp`, CSS class `wpy-studio-footer`, image `100hr-rishikesh.webp` | content files; tables below |
| G5 | High | **Prices are inconsistent between Home, hubs, and detail pages**, and detail pages reuse placeholder prices (every retreat detail: IDR 2,692,000 / 4,498,000; every 50-hour course: IDR 6,304,000) | §3 and tables |
| G6 | High | **Durations contradict themselves** on most course pages (e.g. 200-hour: "15 Days" vs "20 days program" vs "dedicate a month") | table B |
| G7 | High | **Expired or undated events**: workshop detail dates are in 2024 (e.g. "December 5th, 2024"); home/listing event dates have no year (15 Oct, 22 Oct, 05 Nov, 12 Nov) | table C |
| G8 | High | Lead-capture forms: contact and enrollment forms accept a completely empty submission (no `required`); no spam protection; phone defaults to India (+91); no privacy/consent text; mail delivery unverified | `data/interaction-tests.json`, `06` |
| G9 | Medium | Legal pages missing: Privacy Policy and Terms of Service are `#`; the FAQ refund answer cites a "Terms and Conditions" page that doesn't exist | footer, `faqs` |
| G10 | Medium | Facebook link is `#` everywhere; blog share/category links are `#`; blog-page social icons 404 (`/blog/assets/img/svg/*.svg`) | `data/links-forms-embeds.json`, `04-assets-manifest.csv` |
| G11 | Medium | Horizontal scroll at 390px on 24 pages (Bootstrap `.row.g-5` gutter overflow) | `07` §3 |
| G12 | Medium | No analytics on real pages (GA4 only on the Hostinger 404 template) | `06` §1 |
| G13 | Medium | Unverifiable social proof: hardcoded ratings (Google 4.6 / Facebook 4.5 / TripAdvisor 4.5), Instagram stats ("250+ Posts", "15K Followers", "320 Following"), "5000+ Certified Students", "10+ Years Of Living Legacy", "USA Alliance Recognized" | home, course pages |
| G14 | Medium | Accessibility: 57 images with empty/missing alt; amber text and white-on-amber buttons ≈2.2:1 contrast; outlined (transparent-fill) H1s over photos; decorative display/script fonts used for 13px labels | `05`, manifest |
| G15 | Medium | Wellness/retreat copy includes medical-procedure claims ("Raktamokshana (Bloodletting)", "Vamana (Therapeutic Emesis)", "Basti (Medicated Enema)", "colon hydrotherapy") | `content/wellness.md`, `content/home.md` |
| G16 | Low | Recurring typos: "Spacial" (Healing Herbs Cafe Spacial; Spacial Daily Schedule), "Prayanama Meditaion", "Mastry", "Coprse", "Rentention", "bio-trasformation", "Spiritualtiy", "ur 200 Hour", asset folder "yoga-allience" | content files |
| G17 | Low | Duplicate CSS includes; a hidden empty iframe loads the homepage inside ~17 pages; one 205 KB CSS file for every page | `06` |
| G18 | Low | Cafe identity is unclear: "Healing Herbs Cafe" (home heading), "Sattva Cafe" (home body), "Prasadam Healing Café" (fee notes + floating link), "Pure Vegan Cafe" (programs list) | home, course pages |

## 2. Questions for the business

1. **Pricing source of truth:** current prices for each TTC, short course, retreat, workshop, spa treatment, and class pass. Should USD be shown alongside IDR? (The site implies ≈18,060 IDR per USD.)
2. **Durations and schedules:** the true length (days) of each course and its batch dates. Do the "1st to 15th / 16th to 30th" 200-hour sessions really run every month?
3. **Inclusions:** are accommodation and meals included in TTC fees or extra? What are the room tiers and promos ("Free for first 6 students", "50% off for first 2 students")?
4. **Certification:** is the studio a current Yoga Alliance RYS 200/300/500? May the YA logos be used? Is "USA Alliance Recognized" accurate?
5. **Faculty:** who teaches now? Names vary: Guruji Vishnu Panigrahi, Yogi Ashutosh Mishra, Yogi Naveen, Hari Dharma, Yogi Akshant Ji, and schedule names Bablu, Hannah, Maa Haripriya.
6. **Copied content:** confirm that all "World Peace Yoga School" / "WPYS" / Rishikesh references must be removed or rewritten, and whether the testimonials and reviews are genuinely this studio's.
7. **Events:** which workshops/events are current or recurring, and on what dates? Should past (2024) events be removed?
8. **Wellness claims:** confirm the treatment menu, and whether medical-procedure claims should be published.
9. **Contact:** phone/WhatsApp (+62 813 5904 695 appears only in JSON-LD and the WhatsApp link), full street address (JSON-LD: Jl. Bisma No.78, Ubud 80571; footer: "Ubud, Gianyar, Bali, Indonesia"), opening hours, and the Facebook URL.
10. **Lead capture:** which inbox receives enquiries? Keep the email-based enrollment flow, or add a booking/payment provider? Which fields are required? Default phone country?
11. **Legal:** Privacy Policy and Terms/Refund policy text.
12. **Blog:** keep a blog? Only one article has real content (author "admin").
13. **Imagery:** which photos are authentic studio photos and which are stock/AI-looking (e.g. hero temple scenes)? Can vector logo files be supplied?
14. **Cafe:** the official cafe name and its relationship to prasadamhealingcafe.com.
15. **Search visibility:** was robots.txt `Disallow: /` intentional (staging) or a mistake?

## 3. Key cross-page fact conflicts (verified quotes)

| Item | Home | Hub / listing | Detail page |
|---|---|---|---|
| Sound Healing course | "Over 100+ Hr", IDR 10,820,000 ($599) | — | 50-hour page: IDR 6,304,000 ($349) |
| Reiki course | IDR 8,129,000 ($450) | — | 50-hour page: IDR 6,304,000 ($349) |
| Kundalini | "5 Days", IDR 6,322,000 ($350) | — | Kundalini workshop page: IDR 300,000 ($20) |
| Ayurvedic Therapist Training | "Diploma", IDR 21,677,000 ($1,200), linking to the workshop | — | Ayurveda workshop: IDR 500,000 ($35) |
| Panchakarma retreat | spa tab: IDR 17,161,000 ($950) / 7 Days | retreat.php: IDR 14,451,000 | detail: IDR 2,692,000 / 4,498,000 |
| Short courses (Vinyasa, Bio Mechanics, Adjustment) | — | courses.php: IDR 4,516,000 ($250) | detail: IDR 2,692,000 ($149) / 4,498,000 ($249) |
| Daily classes | — | courses.php card: IDR 903,000 ($50) | daily-classes: Single Drop-In IDR 150K; Students/KITAS IDR 100K; 3-class IDR 450K; 5-class IDR 700K; 10-class IDR 1.35 Mil |
| Blog "Relax & Receive" date | 04/02/2026 | /blog/: Oct 15, 2025 | — |
| 200-hour TTC length | — | — | "15 Days" (fee card) · "20 days program" · "dedicate a month" |
| Hero slide 3 "Become a Certified Yoga Teacher" | CTA "Join Training" → daily-classes.php | — | — |
| Hero slide 1 "Explore Courses" | → 200-hour TTC page (not the courses hub) | — | — |

---

# Per-page issue tables

These tables were compiled page by page from the captured evidence and spot-checked by the lead auditor. Two drafting errors were corrected: the gallery lightbox works (re-tested), and the enrollment "Accommodation Type" select is filled by inline JS with "Private Room" / "Shared Room".

## A. Core & information pages


Evidence-based; quotes verbatim. [I] = inferred. Detail in `inventory-core.md`.

| Page | Location (section) | Issue type | Exact quote (short) | Why it matters | Needs business decision? |
|---|---|---|---|---|---|
| All | Mobile sidebar ▸ About ▸ Teachers | Broken link (404) | `Teachers → /teacher.php` | Every mobile visitor hits host 404 page; footer uses correct `/teachers.php` | No |
| All | Mobile sidebar ▸ Retreats | Broken link (404) | `Senior citizen wellness retreat → /sinior-citizen-wellness-retreat.php` | Misspelt slug 404s; desktop uses `/senior-…` | No |
| All | Footer bottom bar | Dead link / missing page | "Privacy Policy" → `/#`; "Terms of Service" → `/#` | No legal pages; forms collect personal data; FAQ refers to "Terms and Conditions" | Yes (policy content) |
| All | Footer, mobile sidebar, contact concierge | Dead link | Facebook icon → `#` (93 dead icon links) | Broken social proof; FB rating 4.5 claimed on Home | Yes (FB URL or remove) |
| All | Desktop header | IA gap | Nav = Home, Daily Classes, Courses, Retreats, Events | About, Teachers, Gallery, Contact, Wellness, Blog, FAQs only in footer on desktop | Yes (IA) |
| All | Mobile sidebar | IA gap / duplicate | "GALLERY" listed twice; no Contact/Wellness/Blog/FAQs | Inconsistent desktop vs mobile navigation | Yes (IA) |
| All | Header, sidebar, footer logo | Copy-paste branding | logo alt "WPY Studio"; class `wpy-studio-footer` | "WPY" = World Peace Yoga, another school | No |
| All | Thank-you modal | Wrong copy context [I] | "Namaste! Enrollment Received" | Same modal is on contact-form pages; contact enquiries told "Enrollment Received" | No |
| All | Phone widget | Wrong default | intl-tel-input `phoneCountry: "India (भारत)"` | Studio is in Indonesia; skews phone data entry | No |
| All | Menus | Orphan pages | 50-Hour Hands-On Adjustment / Art of Vinyasa / Bio Mechanics not in any menu | Only discoverable via enrollment select | Yes |
| All (except 404) | `<head>` | SEO | No canonical, no OG tags | Duplicate content (/ vs /index.php), poor social sharing | No |
| Home / Index | Duplicate URL | SEO | `/index.php` 200, identical content; linked from Teachers breadcrumb | Duplicate content | No |
| Home | Hero slide 3 | Wrong CTA target | "Become a Certified Yoga Teacher" … "Join Training" → `daily-classes.php` | TTC intent sent to drop-in classes | No |
| Home | Hero slide 2 | CTA mismatch | "Book a Retreat" → `enrollment-form.php` | Skips retreat info page | No |
| Home | Programs list | Typo | "Prayanama Meditaion & Yoga" | Credibility | No |
| Home | Programs list | Unclear claim | "Retreat 1hr to 1 month" | Contradicts retreat offers (1 day, half day, 7 days) | Yes |
| Home | Cafe section | Typo + conflicting names | "Healing Herbs Cafe Spacial" / "our Sattva Cafe" / tab → prasadamhealingcafe.com / Programs "Pure Vegan Cafe" | Four names for one cafe (daily_classes also says "Wellness & Garden Kafe") | Yes (cafe name) |
| Home | Events | Stale / undated | "15 Oct … Full Moon Sound Bath & Cacao", "22 Oct … Inversions Masterclass" | No year; two already past at capture (23 Oct 2026); hard-coded | Yes (events source) |
| Home | Blog section | Conflicting date | "04/02/2026" vs blog listing/detail "Oct 15, 2025" (Relax & Receive) | Inconsistent facts | Yes |
| Home | Blog section | Link target | All "Read More" → `/blog/` | Teasers don't open posts | No |
| Home | Blog section | Title mismatch | "Ahimsa in Action: Yoga, Justice & Activism (Part 3/3)" | Parts 1–2 don't exist | Yes |
| Home | Reviews testimonials | Copy-paste from other school | "I had a fantastic experience at WPYS…" | WPYS = World Peace Yoga School; misleading | Yes (remove/replace) |
| Home | Reviews testimonials | India reference | "Felt like I was transported to India for a while." | Possibly genuine but reads as India school review; verify origin | Yes |
| Home | Reviews testimonials | Image mismatch | Jenny Morris "Canada" uses `dewar-canada.webp`; Sherry Saifullah "New Zealand" uses `flower-canada.webp`; Sofia Schneider "Germany" uses `nicola-finland.webp` | Photos appear to belong to other people | Yes |
| Home | Ratings | Unsourced claims | "4.6 rating on Google", "4.5 rating on Facebook", "4.5 rating on TripAdvisor" | No links; FB link is dead; figures hard-coded and may be outdated | Yes (verify) |
| Home | Instagram card | Hard-coded stats | "250+ Posts", "15K Followers", "320 Following" | Will drift; may be inaccurate | Yes (verify or remove) |
| Home | Healing Classes | Price conflict | "Sound Healing Therapy Course … IDR 10,820,000 ($599)" → 50-hour page shows IDR 6,304,000 ($349) | Contradictory pricing | Yes |
| Home | Healing Classes | Hours conflict | "Over 100+ Hr" → `50-hour-sound-healing-course.php` | Contradictory course length | Yes |
| Home | Healing Classes | Price conflict | "Reiki Energy Healing Certification … IDR 8,129,000 ($450)" vs Reiki page IDR 6,304,000 ($349) | Contradictory pricing | Yes |
| Home | Healing Classes | Price/format conflict | "Kundalini Yoga Workshop" "5 Days" IDR 6,322,000 ($350) vs workshop page IDR 300,000 ($20) | Contradictory pricing | Yes |
| Home | Healing Classes | Wrong link / missing page | "Ayurvedic Therapist Training" "Diploma" IDR 21,677,000 ($1,200) → `ayurveda-workshop.php` (IDR 500,000 ($35)) | No diploma page exists | Yes |
| Home | Spa ▸ Retreats tab | Price conflict | "Panchakarma Detox Retreat IDR 17,161,000 ($950) / 7 Days" vs panchakarma page IDR 2,692,000 ($149) / IDR 4,498,000 ($249) | Contradictory pricing | Yes |
| Home | Retreat slider | Missing links / unknown offer | 6 cards no CTA; "Detox Retreat … colon hydrotherapy" | Dead-end; Detox Retreat & Yoga Retreat have no pages | Yes |
| Home | Hero slide 3 / testimonials | Missing teacher | "master Guruji Vishnu Panigrahi" | Not on Teachers page | Yes |
| Home | Contact form | Validation | no `required`; empty form `valid: true` | Empty/spam submissions | No |
| Home | Images | Accessibility | 33 of 104 `<img>` without alt | A11y/SEO | No |
| Home | Mobile hero [I] | UX | Mobile above-fold screenshot shows eyebrow only; cafe tab overlaps hero | Weak first impression on mobile | No |
| About Us | Story badge/heading | Unverified claim | "10 + year" / "A Decade of Spiritual Growth in Bali" | No founding date anywhere; teacher bios suggest recent | Yes |
| About Us | sister-science | Broken copy | eyebrow "Interested In The" | Dangling fragment | No |
| About Us | Whole page | Missing content | No founder, year, team, address facts | Thin "About" | Yes |
| About Us | Images | Wrong alt | about-img1/img2 alt "Our Classes Banner" | A11y/SEO | No |
| Teachers | Hari Dharma bio | Copy-paste / other school | "teaching philosophy and meditation at World Peace Yoga School in Bali" | Names another school | Yes |
| Teachers | Mandeep Bhatt bio | Copy-paste / India | "teacher training programmes at World Peace Yoga School Rishikesh India" | Unclear if teaches in Bali | Yes |
| Teachers | Naveen bio | India reference | "currently works with one of India's leading Prenatal - Postnatal Yoga school in Rishikesh, India" | Implies not at this studio | Yes |
| Teachers | Roster | Missing teacher | meta: "Guruji Vishnu and Hari Dharma Ji"; Vishnu not on page | Meta/page mismatch | Yes |
| Teachers | Sujata Ray bio | Stale fact / grammar | "Right now she is 23years old" (born 1993); "marbolious treatment"; "cured me" | Outdated, unprofessional | Yes (rewrite) |
| Teachers | Guna bio | Grammar | "Guna bornas Jagannath Dham…", "he quire many western and indian people" | Unprofessional | Yes (rewrite) |
| Teachers | Sunil bio | Duplicate text | "about 15 years" stated twice; "Kaivlyadham" | Sloppy copy | No |
| Teachers | Images | Wrong alt | Ashutosh alt "Guruji Bali"; Naveen alt "Haripriya Ji"; Sunil alt "Yogi Akshant Ji" | A11y/SEO, misidentification | No |
| Teachers | Breadcrumb | Duplicate URL link | "Home" → `/index.php` | Reinforces duplicate home | No |
| Teacher (404) | Whole page | Missing page | `/teacher.php` 404, host default page, no nav | Dead end from mobile menu | No |
| Testimonials | Head | SEO | meta description missing | — | No |
| Testimonials | Cards | Authenticity risk | "Sarah Jenkins, Yoga Teacher, USA", "Sven Lindberg, Digital Nomad, Sweden" … | Generic, undated, unsourced; none match Home reviewers; consumer-protection risk if fabricated | Yes (verify) |
| Testimonials | Avatars | Image reuse | alt "Sarah J." on `dewar-canada.webp` | Same photos used for different names on Home | Yes |
| Testimonials | Mobile | Layout | page 3,052px desktop → 9,355px at 390 | Very long marquee stack on mobile | No |
| Gallery | Filters | Disabled content | Retreat/Wellness/Events buttons HTML-commented; "Sacred Retreats", "Wellness Sanctuary", "Sangha Events" empty | Incomplete gallery | Yes (photos) |
| Gallery | Images | Dead markup | `class="glightbox"` with no GLightbox JS (the custom `.clb` lightbox works — re-tested) | Leftover classes/CSS only | No |
| Gallery | Head/alts | SEO/A11y | meta description missing; alts "Yoga Spirit" ×6 etc. | — | No |
| Gallery | Peaceful Stay | Unclear offer | 9 room photos; no accommodation page or room details | Accommodation offer undefined | Yes |
| FAQs | Head | SEO | meta description missing | — | No |
| FAQs | Payment | Dead reference | "Full details are available in our Terms and Conditions." | Terms link is `#` | Yes |
| FAQs | About The Course | Conflicting fact | "Hatha and Vinyasa Flow in the mornings … Yin or Restorative yoga in the evenings" | Schedule shows Hatha Flow 8 AM, Meditation 5 PM, Sound Healing 7 PM | Yes |
| FAQs | Transport / Rooms | Unverified offers | "we can arrange a private airport pickup"; "private deluxe suites … shared twin rooms" | Not offered/priced elsewhere | Yes |
| FAQs | Panel heading | Inconsistency | tab "Location & Transportation" vs "Location And Transportation" | Minor | No |
| Contact Us | Head | SEO | meta description missing; no H2 | — | No |
| Contact Us | Our Locations | Misleading copy | "Our Locations" / "Experience Peace Across the Globe" | Only one location | Yes |
| Contact Us | Address | Inconsistency | "Jl. Bisma No.78, Ubud, Kecamatan Ubud" vs "Jl. Bisma No.78, Ubud Kecamatan Ubud"; footer "Ubud, Gianyar, Bali, Indonesia" | NAP consistency for local SEO | No |
| Contact Us | Phone | Visibility | "+628135904695" shown only here (→ wa.me); not in footer/header; no `tel:` | Phone (also in JSON-LD) hard to find | Yes (confirm number) |
| Contact Us | Hours | Missing info | no opening hours anywhere | Visitors can't plan | Yes |
| Contact Us | Form | Validation | no required fields; empty form valid; no reCAPTCHA/consent | Spam, empty leads, privacy | No |
| Contact Us | Map | Inconsistency | Home and Contact use different embed URLs/coords for same place | Minor; unify | No |
| Enrollment | Intro | Copy-paste | "journey into the ancient wisdom of Ayurveda … Ayurvedic science" | Form serves all programs | No |
| Enrollment | Form | Validation | all fields optional; `valid: true` when empty | Unusable submissions | No |
| Enrollment | Accommodation Type | Generic options | JS fills only "Private Room" / "Shared Room" | Does not match TTC room tiers or prices | Yes |
| Enrollment | Kundalini TTC select | Wrong labels | "50 Hours Yoga Teacher Training Course" … (same as Multi Style) | Can't distinguish Kundalini choice | No |
| Enrollment | Short course / month | Typos | "Areal Yoga TTC"; "Febuary" | Credibility | No |
| Enrollment | Wellness select | Numbering | "01. Abhyanga…04. Thai", "01. Sound Healing", "01. Ayurvedic Facial" | Confusing | No |
| Enrollment | Retreat / Wellness selects | Missing options | no Detox/Yoga Retreat, no Panchakarma 7-day spa package | Home offers can't be selected | Yes |
| Enrollment | Coupon | Unclear rule | "Coupon (Only For 3 months)" | Ambiguous | Yes |
| Enrollment | Consent | Compliance | no privacy/consent checkbox | Personal data collection without policy | Yes |
| Enrollment | Phone label/default | UX | "Mobile Number with country code" + default India | Indonesia studio | No |
| Blog | Cards | Placeholder content | all 6 cards → `/blog/blog-details.php` | 5 posts don't exist | Yes |
| Blog | Head | SEO | title "Blog Page - Bali Yoga Studio"; H1 "our Blogs"; meta missing | — | No |
| Blog | Cards | Conflicting category | "Relax & Receive" = "Yoga" (listing) vs "Wellness" (detail) vs "Uncategorized" (sidebar) | Inconsistent | No |
| Blog | Images | Wrong imagery | `100hr-rishikesh.webp` as post image | Rishikesh asset from other school | No |
| Blog Details | Headings | SEO | two H1s ("Blog Details" + post title) | — | No |
| Blog Details | JSON-LD | Wrong URL | Breadcrumb item `https://baliyogastudio.org/blog-details.php` | Points to non-existent path [I] | No |
| Blog Details | Sidebar | Dead links | Twitter/Facebook/Pinterest/Linkedin, "Uncategorized", 4 related posts → `#` | Broken UX | Yes (which networks) |
| Blog Details | Sidebar | Foreign reference [I] | "The Power of Yin Yoga & Stillness Sessions at Manasthala" | "Manasthala" not this studio | Yes |
| Blog Details | Head | SEO | title "Blog Details - Bali Yoga Studio"; meta missing; no Article schema | — | No |
| Blog Details | Content | Unsourced claims | "Research suggests that sound healing can significantly reduce stress…" | Health claims without citations | Yes |

## B. Teacher-training & course pages


All quotes verbatim from `data/content/<slug>.md` / `data/pages/<slug>.json` unless marked (I) = inferred.
"All A" = all 14 Template A pages (multi-style YTT ×5, Kundalini ×5, Yin, Aerial, Sound, Reiki). "All B" = Art of Vinyasa, Bio Mechanics, Hands-on Adjustment.

| Page | Location (section) | Issue type | Exact quote (short) | Why it matters | Needs business decision? |
|---|---|---|---|---|---|
| All 17 | `<head>` | SEO — canonical missing | canonical: null | Duplicate/param URLs unconsolidated | No |
| 50 YTT, 200 YTT, all 5 Kundalini, Yin, Aerial, Sound, Reiki, Bio Mechanics | `<head>` | SEO — meta description missing | description: None | Google writes its own snippet | No (copy needed) |
| 500 YTT | `<head>` | SEO — meta duplicated from 300-hr | "Advance your yoga journey with in-depth training in advanced asana…" | Near-duplicate snippet; 500 is marketed as beginner-friendly | No |
| All 17 | JSON-LD `Course` | Claim wording | "authentic, Yoga Alliance-style training" | Same text on Sound/Reiki/short courses; "-style" is vague | Yes |
| All 17 | Header logo / footer | Legacy brand | alt "WPY Studio"; class `wpy-studio-footer` | Other-school (World Peace Yoga) branding leaks into a11y text | No |
| All A | `dates-fees-section` | Promo ambiguity | "15% Discount" (badge on Prasadam café card) | Unclear what is discounted / for whom | Yes |
| All A | `dates-fees-section` | Stale/evergreen urgency | "Limited Seats available for November and December" | Hard-coded months will go stale | Yes |
| All A | `dates-fees-section` | Inclusion conflict | "Note: Accommodation takes extra charges." / "Students buy whatever they want to eat." | Contradicted by inclusions/FAQ/why-choose copy on several pages (rows below) | Yes |
| All A | Accommodation add-ons | Promo mechanics | "Free for first 6 students" / "50% off for first 1 student" | Per-session or per-month? No end date; legal/ops clarity | Yes |
| 500 YTT, 500 Kundalini | Accommodation add-ons | Pricing anomaly | 6 Shared "IDR 6,304,000 ($349)" | Identical to 50-hr tuition figure; same add-on price for 56-day and 35-day stays | Yes |
| 50/200 YTT, all Kundalini, Yin, Aerial, Sound, Reiki | `spacial-daily-schedule` | Content mismatch | "Ashtanga(Bablu)" … "Hatha yoga" | Same Hatha/Ashtanga timetable on Kundalini, Yin, Aerial, Sound, Reiki — no course-specific sessions | Yes |
| All A | `spacial-daily-schedule` | Typo | "Spacial Daily Schedule" / "Ashtanga Mastry(Self Mastery)" / "Sadhna" / "dependant" | Professionalism | No |
| All A | `spacial-daily-schedule` | Logic error | "17:45 PM - 18:30 PM Yoga Sadhna" vs "18:00 PM - 19:00 PM Dinner (Thur, sat)" | Overlapping slots; "13:00 PM" 24h+PM mix; no Sun/Tue listed for some slots | Yes |
| All A | `spacial-daily-schedule` | Unlisted staff | "(Hannah)", "(Bablu)", "(Maa Haripriya)" | Named staff not in teacher roster | Yes |
| 100 YTT | `spacial-daily-schedule` | Content mismatch | "Advanced Pranayama & Meditation" / "Advanced Hatha Yoga" | Beginner course shows advanced schedule (SCHED-B) | Yes |
| All A (except 200 YTT) | `excursion-section` | Overpromise vs 200 YTT | "Ayurvedic treatments and massages are also a part of the itinerary." | 200 YTT says only "a beachside yoga session and a traditional purification bath" included | Yes |
| All A | `trust-section` (YA logo) | Wrong alt / logo | alt "RYS 200" on generic YA logo (50-hr, 100K, 300K, 500K, Yin, Aerial, Sound, Reiki) | Misrepresents accreditation level per course | Yes |
| 50 YTT | expect-bar / fee / sessions / benefits | Conflicting duration | "4 Days" vs "1st to 5th" vs "a 1-week intensive retreat" | Buyer can't tell length | Yes |
| 50 YTT | `why-choose-split` | Conflicting duration (other course) | "100 hour yoga teacher training course which is of two-weeks in total" | 100-hr page says 8 / 10-11 days | Yes |
| 50 YTT | FAQ vs trust-section | Conflicting certification | "No, Yoga Alliance certifies courses like 200 hrs…" vs "you will receive certificates after each course" | Mixed signals on YA status | Yes |
| 50 YTT, 50 Kundalini | FAQ | Typo | "Do I any yoga experience to join this course?" | Professionalism | No |
| 50 YTT | `trust-section` | Grammar | "You also gain here, as yoga philosophy and anatomy gets introduced." | Readability | No |
| 100 YTT | expect-bar vs fee card | Conflicting duration | "10-11 Days" vs "8 Days" / "1st to 8th" | Contradiction on same page | Yes |
| 100 YTT, 300 YTT | `trust-section` list | Broken list item | "06 We also provide post-course support. 07" (empty) | Empty numbered item renders | No |
| 100 YTT | `why-choose-split` | Typo / unverified claim | "It you want…"; "top yoga school Bali, with schools spread across Asia" | Typo; multi-branch claim likely inherited from parent school | Yes |
| 100 YTT, 100 Kundalini, 50 Kundalini | benefits / FAQ | Certification claim | "when you have completed two parts of 100 hrs each, you can apply for RYT 200" | Must match YA rules & school's RYS registration | Yes |
| 100 YTT | expect-bar | Unverified claim | "RYT 500 EXPERT TEACHERS" | Credential claim for all teachers | Yes |
| 200 YTT | `inner-banner` H1 | Truncated heading | H1 "Join The Most Authentic" | Only H1 is a fragment; SEO & clarity | No |
| 200 YTT | `why-choose-split` | Truncated text | "ur 200 Hour Yoga Teacher Training In is a truly transformative journey" | Broken copy | No |
| 200 YTT | `curriculum-section` → Hatha | Copied from other school | "World Peace Yoga School teaches the traditional ancient style of Hatha Yoga…" | Names a different school | Yes |
| 200 YTT | `curriculum-section` → Philosophy / Nidra | Copied from other school | "Yogi Vishnu learnt the secrets of Yoga philosophy from his great Master Swami Veda" / "Guru Vishnu's proven techniques" | Parent-school founder content; verify he teaches in Bali | Yes |
| 200 YTT | `curriculum-section` → Philosophy | India/Himalaya framing | "Introduction to Indian Culture and Spiritualtiy and Himalayan Tradition" | Rishikesh-school syllabus; typo "Spiritualtiy" | Yes |
| 200 YTT | `curriculum-section` → Meditation / Philosophy | Conflicting duration | "With this 20 days program" / "During these 20 days" | Page states 15 Days | Yes |
| 200 YTT | `why-choose-split` | Conflicting duration | "aimed at the ones who want to dedicate a month to practice" | vs 15 Days | Yes |
| 200 YTT | `curriculum-section` → Ashtanga | Truncated / duplicate | "ana – Lotus posture"; "Savasana - Corpse pose" + "Savasana – Coprse pose" | Broken list, typo | No |
| 200 YTT | `curriculum-section` → Pranayama | Duplicates | "Sheetali & Sheetkari" + "Sitli Pranayama" + "Sitkari Pranayama" | Same techniques listed twice | No |
| 200 YTT | `curriculum-section` | Typos | "Rentention", "bio-trasformation", "Mantra & Mantra Chanting" | Professionalism | No |
| 200 YTT | `cafe-wrapper` (Food) | Content from other page | "During your Panchakarma detox, every meal is specifically designed…" | Panchakarma (Ayurveda retreat) text on a TTC page | No |
| 200 YTT | `cafe-wrapper` (Food) vs fee card | Inclusion conflict | "kitcharis, detoxifying vegetable broths" vs "Students buy whatever they want to eat." | Are meals included? | Yes |
| 200 YTT | `inclusions-section` | Inclusion conflict | "15 Days Premium Accommodation in Bali" / "Organic Satvic Vegetarian Meals Daily" | Contradicts "Accommodation takes extra charges" and paid add-ons | Yes |
| 200 YTT | expect-bar | Claim wording | "USA ALLIANCE RECOGNIZED" | Odd phrasing of Yoga Alliance (US) | Yes |
| 200 YTT | expect-bar vs 500 YTT | Conflicting history | "10+ Years OF LIVING LEGACY" vs 500 YTT "decades of experience" | Inconsistent founding claim | Yes |
| 200 YTT | `cafe-wrapper` (Rooms) | Wrong alt / copy | alt "Cafe Image 1…6" on room photos; "Our retreat offers comfortable…" | A11y; retreat copy on TTC | No |
| 200 YTT | `excursion-section` | Wrong alt | alt "Tegenungan Waterfall" on `beach-yoga.webp` | A11y / mismatch | No |
| 200 YTT | `review-slider-section` | Copied review (other school) | "fantastic experience at WPYS … Thankyou Guru Vishnu" | Review belongs to World Peace Yoga School | Yes |
| 200 YTT | `review-slider-section` | Credibility | Reviewer "#### Prasadam" — "I attened the first day of the school yester…" | Review apparently by the school's own café; typos | Yes |
| 200 YTT | `review-slider-section` | Wrong alt | alt "Sarah Jenkins" / "Marco Rossi" / "Emily Chen" on reviews by Jenny Morris / Hong Bui / Sofia Schneider | Mislabelled photos (likely stock) | Yes |
| 200 YTT, All B | `teacher-slider-section` | Missing item / inconsistent | "Teacher 2" → "Teacher 4" (no 3); all "10+ Year Of Experience" incl. Akshant "over 5 years" | Contradictory credential | Yes |
| 200 YTT, All B | `teacher-slider-section` | India/Rishikesh refs | "training over 1000 teachers in India and abroad"; "across Bali and Rishikesh" | Fine if true; confirm teachers are in Bali | Yes |
| 200 YTT | page structure | Missing section | (no `workshop-faq-section`) | Flagship page lacks FAQ present on all others | No |
| 200 YTT | `#sidebar-enquiry-form` | Form scope | course_interest: "200-Hour Yoga TTC / 300-Hour Yoga TTC / 500-Hour Yoga TTC" | No Kundalini/50/100/specialty options; only form in set | No |
| 200 YTT | `#sidebar-enquiry-form` | Dependency (unverified) | action null (JS); endpoint `phpmailer/contact-mail.php` (verified in custom.js) | Mail delivery unverified; no captcha → spam risk | No |
| 300 YTT | expect-bar / FAQ vs fee | Conflicting duration | "4 Weeks" / "It is for four weeks." vs "20 Days" / "1st to 20th" | Contradiction | Yes |
| 300 YTT | `why-choose-split` | Copy from other course | "Those looking to learn the restorative form of yoga, must join this course." | Restorative = Yin copy | No |
| 300 YTT | `why-choose-split` | Eligibility clarity | "stay at least 1 minute or more in Sarvangasana or Kakasana, i.e. shoulder stand or arm balance pose" | Check intended requirement | Yes |
| 500 YTT | expect-bar / FAQ vs fee | Conflicting duration | "8 Weeks" / "2 months" vs "56 Days" / "1st to 25th (Next Month)" | End date ambiguous | Yes |
| 500 YTT | `trust-section` | Run-on / missing break | "…As A 500 Hr Registered Yoga Teacher Bali Yoga Studio offers…" | Tagline merged into body | No |
| 500 YTT | `trust-section` list | Founder / branches claim | "Under the guidance of Yogi Vishnu Panigrahi"; "several branches across the globe" | Parent-school claims | Yes |
| 500 YTT | `trust-section` list | Inclusion conflict | "best accommodation … and sattvic meals" | vs extra-charge accommodation & buy-your-own food | Yes |
| 500 YTT, 500 Kundalini | fee card | Pricing anomaly | both "IDR 36,110,000 ($1,999)" | 56-day vs 35-day course at same price | Yes |
| 50 Kundalini | FAQ | Copied from other page | "FAQs - 50 Hours Yoga Teacher Training Course" … "You will learn Hatha Yoga and Ashtanga Vinyasa Yoga." | Wrong course FAQ | No |
| 50 Kundalini | `why-choose-split` | India reference garbled | "similar to the Yoga Capital of the World, in Bali" | Rishikesh copy mis-edited | No |
| 50 Kundalini | `ttc-content-section` | Conflicting duration | "You stay in a residential set up for a week." vs "4 Days" | Contradiction | Yes |
| 50 Kundalini | `why-choose-split` | Course-structure conflict | "opt for the 100-hour yoga teacher training course, in two parts. The 50-hour course is the first part" | Contradicts 100-hr = half of 200 framing | Yes |
| 50 Kundalini | `trust-section` | Typo / factual | "six centres of spiritual energy"; "Sahasara Chakra" | Chakra count & spelling | No |
| 50 / 100 / 200 Kundalini | various | Founder claim | "Yogi Vishnu Panigrahi's mentorship" / "Guru Vishnu Panigrahi" | Verify involvement | Yes |
| 100 Kundalini | `trust-section` / benefits | Copy from multi-style | "Avail yourself of the 100 hour yoga teacher training in Bali"; "multi-style approach" | Wrong course naming | No |
| 100 Kundalini | `trust-section` vs fee | Conflicting duration | "more like a two week retreat" vs "8 Days" | Contradiction | Yes |
| 100 Kundalini | benefits | Outcome guarantee | "Your Kundalini awakening takes place." | Unsubstantiated promise | Yes |
| 200 Kundalini | `why-choose-split` | Copied/affiliation claim | "Bali Yoga Studio, a part of World Peace Yoga School Group" | Brand disclosure decision | Yes |
| 200 Kundalini | FAQ vs fee card | Inclusion conflict | "Is accommodation food charges included…? Yes, both are included" | Directly contradicts fee note & add-on prices | Yes |
| 200 Kundalini | `why-choose-split` | Overclaim | "RYT 200, which is the minimum qualification to teach yoga globally" | Not a legal requirement | Yes |
| 200 YTT vs 200 Kundalini | fee card | Identical prices | both "IDR 16,240,000 ($899)", same add-ons | Fine if intended; confirm | Yes |
| 300 Kundalini | expect-bar vs eligibility | Conflicting level | "Beginner FRIENDLY LEVEL" vs "Completing the 200 hrs Kundalini yoga teacher training course is a must." | Contradiction | Yes |
| 300 Kundalini | eligibility | Implausible requirement | "You must have already have your Kundalini awakened." / "hold an intermediate level asana for at least 20 minutes" | Likely error; deters applicants | Yes |
| 300 Kundalini | eyebrow | Wrong label | "Foundational Excellence" on advanced course | Template copy | No |
| 500 Kundalini | expect-bar vs overview/FAQ | Conflicting duration | "35 Days" vs "roughly 8 weeks" vs "roughly 2 months" | Contradiction | Yes |
| 500 Kundalini | sessions | Date logic | "1st to 5th (Next Month)" | Doesn't equal 35 days (I) | Yes |
| 500 Kundalini | why-choose | Overpromise | "We provide support in gaining internship opportunities and job placement." | Commitment needing backing | Yes |
| Yin | FAQ vs fee | Conflicting duration | "The duration of the 50 Hrs Yin Yoga TTC is a week." vs "4 Days" | Contradiction | Yes |
| Yin | benefits / FAQ | References non-existent courses | "demo of what the 100 Hrs and 200 Hrs Yin Yoga TTC will look like"; "complete the 200 hrs Yin Yoga TTC" | No such pages/nav items | Yes |
| Yin | `ttc-content-section` | Duplicate sentence / POV | "Bali Yoga Studio offers a subtle introduction…" (×2); "Want to improve my focus and patience." | Copy quality | No |
| Yin | benefits | Overclaim | "You will be able to teach across the globe." | Completion cert only | Yes |
| Aerial | learn vs who-can-apply | Audience conflict | "all-inclusive course for beginners" vs "ideal for those who are already teaching yoga" | Mixed positioning | Yes |
| Aerial | benefits | Health claim | "If you suffer from back pain, this course can alleviate the same." | Medical claim liability | Yes |
| Sound | why-choose / FAQ | Certification claim | "Certification under Yoga Alliance." / "globally-recognised sound healing certification" | YA does not certify sound healing (I) | Yes |
| Sound | benefits | Health claim | "If you suffer from diseases, you will get relief." | Medical claim liability | Yes |
| Sound | why-choose | Inclusion conflict | "Accommodation with all basic amenities." / "Sattvic food service." | vs extra charges / buy-your-own | Yes |
| Sound, Reiki | expect-bar / fee | Duration clarity | "50 Hours / 2 Levels" in "4 Days" | Two levels in 4 days; hours per level unstated | Yes |
| Reiki | FAQ | Typo / term | "It is similar to Shakti Path." | Shaktipat | No |
| Reiki | why-choose | Garbled copy | "your chances at successfully giving healing and teaching students also find success" | Readability | No |
| Reiki | why-choose | Unverified setting | "amidst rice fields … streams that flow beside our ashram" | Studio is at Jl. Bisma, Ubud (JSON-LD) — verify | Yes |
| All 50-hr A pages (50 YTT, 50K, Yin, Aerial, Sound, Reiki) | fee card | Identical prices reused | "IDR 6,304,000 ($349)" + identical add-ons + "1st to 5th"/"16th to 20th" | Six different courses, same price/dates — likely placeholder | Yes |
| All B | `pricing-section` vs `courses.php` | Price conflict | "IDR 2,692,000 ($149)" / "IDR 4,498,000 ($249)" vs courses card "IDR 4,516,000 ($250)" | Customer sees two prices | Yes |
| All B | `pricing-section` | Identical prices | same two tiers on all 3 courses | Likely placeholder | Yes |
| All B | page structure | Missing info | no days, dates, sessions, FAQ | Can't plan/enrol | Yes |
| All B | schedule vs inclusions | Inclusion conflict | "Healthy Breakfast" / "Vegetarian Lunch" vs "Personal Meals & Expenses" / "Accommodation & Food" not included | Are meals included? | Yes |
| All B | `pricing-section` | Ambiguity | tier 1 ✗ "Residential Accommodation/Stay" | Implies tier 2 includes stay; inclusions say stay not included | Yes |
| All B | `yoga-modal` | Placeholder content | "Yoga Style" / "Description goes here." | Unfinished modal behind topic buttons (I) | No |
| All B | `video-popup-modal` | Placeholder iframe | iframe src "https://baliyogastudio.org/" | Empty until JS sets src (I); a11y no title | No |
| All B | header nav | Discoverability | (no nav link; discovered only from `courses.php`) | Orphan-ish pages | Yes |
| Art of Vinyasa | `premium-review-section` | Content from other page | "The half-day retreat was the highlight of my trip. The massage…" | Retreat testimonials on course page | No |
| Hands-on Adjustment | inclusions eyebrow | Copied label | "retreat details" | Template copy from retreat page | No |
| Bio Mechanics | title vs H1 | Inconsistent naming | "Bio Mechanics Of Yoga Teacher Training Course" vs "50 Hours Bio Mechanics Yoga" | SEO/brand consistency | No |
| All 14 nav-linked pages | nav vs H1 | Naming inconsistency | e.g. nav "200 Hours Alchemy of Kundalini Kriya TTC" vs H1 "200 Hrs Kundalini Yoga Teacher Training" | Marketing names absent from pages; "Hours" vs "Hrs" mixed | Yes |
| All A | mobile 390px | Horizontal overflow | scrollWidth 402 vs clientWidth 390 | Sideways scroll on phones; source element not isolated | No |

## C. Retreats, workshops/events, wellness, daily classes, course hub


Quotes are verbatim from `data/content/*.md` / `data/pages/*.json`. Today = 2026-10-23. [I] = inferred.

| Page | Location (section) | Issue type | Exact quote (short) | Why it matters | Needs business decision? |
|---|---|---|---|---|---|
| All pages (shared chrome) | `div.mobile-sidebar` nav | Broken link (404) | href `/sinior-citizen-wellness-retreat.php`, label "Senior citizen wellness retreat" | Mobile users can't reach the Senior retreat; 46 pages affected | No |
| retreat | course-listing | Missing item | Half-Day retreat card absent | The program in the nav and enrollment form isn't discoverable from the hub | No |
| retreat | course-listing | Price conflict | One Day "IDR 2,710,000 ($150)" vs detail "IDR 2,692,000 ($149)" | Two prices for the same product | Yes |
| retreat / panchakarma / home | listing card / pricing / home spa tab | Price conflict (3 ways) | "IDR 14,451,000 ($800)" vs "IDR 2,692,000 ($149)"/"IDR 4,498,000 ($249)" vs "IDR 17,161,000 ($950) / 7 Days" | Biggest pricing contradiction on the site | Yes |
| retreat / senior | listing / pricing | Price conflict | "IDR 3,613,000 ($200)" vs "IDR 2,692,000 ($149)" | Inconsistent price | Yes |
| retreat / women | listing / pricing | Price conflict | "IDR 4,516,000 ($250)" vs "IDR 2,692,000 ($149)" | Inconsistent price | Yes |
| All 5 retreat details | pricing-section | Identical prices reused | "Essential Zen IDR 2,692,000 ($149)" / "Bali Signature Wellness IDR 4,498,000 ($249)" on every retreat | Half-day = one-day = multi-day detox; placeholder pricing likely [I] | Yes |
| All 5 retreat details | pricing-section CTA | CTA inconsistency | "Book Your Retreat Now" → contact-us.php (listing "Book Now" → enrollment-form.php) | Two booking paths; the enrollment form has a retreat select that's never used | Yes |
| retreat | course-listing tags | Unsupported claims | "Pool Access", "Spa Treatment", "Doctor Consult", "Medical Checkup" | Not mentioned on the detail pages; possible misrepresentation | Yes |
| retreat | course-listing | Duplicate images | all cards `assets/img/wpy-studio-banner.webp` | Cards look the same | No |
| home vs retreat | home retreats-slider | Content mismatch | "Yoga Retreat", "Yoga Wellness Retreats", "Detox Retreat" | Retreats with no page; names differ from the actual 5 retreats | Yes |
| home | wellcome-section | Unsupported duration | "Retreat 1hr to 1 month" | No retreat page states a duration | Yes |
| All 5 retreat details | Overview + Eligibility headings | SEO / a11y | 3 H1s, e.g. "Your One-Day Sanctuary of Peace", "Is This Retreat Right for You?" | Multiple H1s per page | No |
| All 5 retreat details + all 8 workshop details | head | SEO | Meta description: None | No snippets | No |
| All 5 retreat details | highlights icons | Wrong / competitor alt text | alt "Yoga Barn Pass" (also "Juice", "Priority Booking") | Alt names another Ubud studio [I]; looks template-copied | No |
| One Day, Half Day | inner-banner | Wrong alt | alt "Courses Banner" | a11y/SEO | No |
| Half Day, Panchakarma | Overview/Eligibility images | Copy-paste alt | alt "One Day Yoga & Wellness Retreat" | Wrong alt | No |
| One Day | daily-schedule | Schedule logic | "08:30 AM Awakening Yoga Session … 10:00 AM Bali Tropical Breakfast" | Breakfast not in inclusions; no end time | Yes |
| One Day | inclusions vs pricing | Inclusion conflict | Included "Nutritious Organic Garden Lunch"/"Sacred Sound Bath Session"; Essential Zen lists only yoga, equipment, tea | Unclear what the cheaper tier gets | Yes |
| Half Day | pricing Essential Zen | Inclusion conflict | struck-through "Balinese Abhyanga Massage", "Sound Healing Introduction" vs Included "60-Min Balinese Abhyanga Massage" | The page name promises a massage the base tier excludes | Yes |
| Half Day | highlights vs schedule | Duration conflict | "Intensive 4-hour wellness circuit" vs 08:30 AM–01:00 PM | 4.5 h shown | Yes |
| Half Day | inclusions "Not Included" | Copy-paste | "International/Domestic Airfare", "Airport Transfers" | Irrelevant for a half-day session | No |
| Half Day | head | SEO | title "Half Day Yoga - Bali Yoga Studio"; breadcrumb "Half day yoga and healing retreat" | Truncated / inconsistent naming | No |
| Panchakarma | whole page | Missing duration | testimonial "after these 7 days"; no duration in content | Key fact missing | Yes |
| Panchakarma, Senior, Women | eligibility note vs Our Rooms | Contradiction | "Accommodation is not included." + "### Our Rooms" | Confusing offer | Yes |
| Panchakarma | pricing Essential Zen | Inclusion conflict | struck-through "Specialized Body Treatments" | A detox without treatments in the base tier | Yes |
| Panchakarma | Overview | Typo/grammar | "our guided detox offer"; "Deep internal Cleansing" | Copy quality | No |
| Panchakarma / One Day | premium-review | Reused reviewer | "Alexandra Dewar" on both pages with different roles | Testimonial credibility | Yes |
| Senior | inner-banner breadcrumb | Copy-paste | "Home > One Day Yoga & Wellness Retreat" | Wrong breadcrumb | No |
| Senior | premium-review | Copy-paste testimonials | "An incredible one-day escape!…", "I only had one day to spare…" | Reviews belong to another product | Yes |
| Senior | pricing | Inclusion conflict | struck-through "Full Body Joint-Relief Treatment" | Core benefit excluded in the base tier | Yes |
| Women | pricing | Inclusion conflict | struck-through "Traditional Luxury Flower Bath" vs Included "Traditional Balinese Flower Bath" | Contradiction | Yes |
| Women | end of page | Missing section | no `premium-review-section` (present on the other 4) | Template inconsistency | No |
| events_and_workshop | upcoming-events | Missing items | Only Kirtan, YTT Intro, IYD, Yin listed | Ayurveda, Kundalini, Breathwork, Sound Healing are orphaned (nav-only) | No |
| events_and_workshop | upcoming-events | Dates without year | "15 OCT", "22 OCT", "21 JUN", "05 NOV" | Can't tell whether upcoming or past | Yes |
| events_and_workshop / kirtan | card vs details | Price/date/location conflict | "FREE" "15 OCT" "Center Shala" vs "IDR 200,000 ($15)" "Coming Soon" "Main Hall" | Contradictory event info | Yes |
| events_and_workshop / ytt intro | card vs details | Price conflict | "IDR 452,000 ($25)" vs "IDR 350,000 ($25)" | Same USD, different IDR | Yes |
| events_and_workshop / yin | card vs details | Price + duration conflict | "IDR 813,000 ($45)", "90 Min Session" vs "IDR 300,000 ($20)", "This 3-hour journey" | Contradictory | Yes |
| home vs events_and_workshop | home workshop-event-section | Conflicting calendar | "15 Oct Full Moon Sound Bath & Cacao", "22 Oct Inversions Masterclass", "05 Nov Pranayama Deep Dive", "12 Nov Ecstatic Dance Bali" | Different events on the same dates; none has a page | Yes |
| events_and_workshop | upcoming cards | Wrong images | YTT Intro card uses `events/panch-karma.webp`; IYD uses `events/sound-healing.webp` | Misleading visuals; reuses past-event photos | No |
| events_and_workshop | ecstatic-dance | Orphan offering | "curated by world-class DJs" | No schedule/price/page; also a daily-classes style | Yes |
| events_and_workshop | old-events | Unverifiable claim | "All our past events were completely sold out." | Marketing claim | Yes |
| ytt intro | Workshop Details | Past date | "October 22nd, 2024" | Expired event shown as bookable | Yes |
| iyd | Program Details | Past date | "June 21st, 2024" | Expired | Yes |
| yin | Workshop Details | Past date | "November 5th, 2024" | Expired | Yes |
| ayurveda | Workshop Details | Past date | "November 12th, 2024" | Expired | Yes |
| kundalini | Workshop Details | Past date | "November 18th, 2024" | Expired | Yes |
| breathwork | Workshop Details | Past date | "November 25th, 2024" | Expired | Yes |
| sound healing | Workshop Details | Past date | "December 5th, 2024" | Expired | Yes |
| kirtan | Event Details | Missing date | "Date Coming Soon" | Bookable without a date | Yes |
| daily_classes vs kirtan | pricing notes | Conflict | "Except Kirtan on Thursday and Sunday Soulful & Buffet" | Implies weekly Kirtan; the Kirtan page says "Coming Soon" | Yes |
| ayurveda | intro vs details | Duration conflict | "3-hour Ayurveda Workshop" vs "10:00 - 16:00" | 6 h vs 3 h | Yes |
| ayurveda / ytt intro | Workshop Details | Copy-paste [I] | both "10:00 - 16:00", "Bali Yoga Studio, Hall B" | Likely unedited template | Yes |
| home → ayurveda | home healing-classes-wrapper | Wrong CTA target | "Ayurvedic Therapist Training" "Diploma" "IDR 21,677,000 ($1,200)" → ayurveda-workshop.php | Diploma course links to a 3-hour workshop | Yes |
| kundalini | intro vs details | Duration conflict | "3-hour workshop" vs "16:30 - 19:00" | 2.5 h | Yes |
| home → kundalini | home healing-classes-wrapper | Conflict | "5 Days" "IDR 6,322,000 ($350)" → page with "IDR 300,000 ($20)" | Product mismatch | Yes |
| kundalini | Key Workshop Elements | Duplicate content | "Deep Relaxation" ×2; "Breath of Fire" + "Dynamic Breathwork: Breath of Fire" | Copy quality | No |
| breathwork | What You Will Learn | Duplicate content | "Nadi Shodhana…" + "Nadi Purification…" | Copy quality | No |
| sound healing | intro vs details | Duration conflict | "This 3-hour journey" vs "19:00 - 20:30" | 1.5 h | Yes |
| sound healing | How Does it Work? | Health claim | "lower blood pressure"; "approximately 70% water" | Medical-claim risk | Yes |
| sound healing, kirtan, iyd | page end | Template inconsistency | no video-review-section | Inconsistent | No |
| All 8 workshop details | price vs USD | Exchange-rate inconsistency [I] | "IDR 200,000 ($15)", "IDR 300,000 ($20)", "IDR 500,000 ($35)" (≈13–15k/USD) vs retreats ≈18k/USD | Two price sources | Yes |
| All 8 workshop details | mobile 390 | Horizontal overflow | scrollWidth 402 vs clientWidth 390 | Sideways scroll on phones; cause not isolated | No |
| events_and_workshop, daily_classes | mobile 390 | Horizontal overflow | scrollWidth 402 vs 390 | Same | No |
| ytt intro | Why Join Us? | Unverified claim | "Yoga Alliance Accredited."; "Over 10+ years experience." | Accreditation must be true | Yes |
| ytt intro | Early Bird note | Offer validity | "within 7 days will receive a special 10% discount" | Offer tied to a past event | Yes |
| yin | intro | Grammar | "workshop invite you" | Copy quality | No |
| wellness | massage-wrapper | Missing prices | no price/duration on any massage (home lists e.g. "Abhyanga… IDR 903,000 ($50) / 60 mins") | Key decision info missing on the service page | Yes |
| wellness vs home vs enrollment | massage list | Inconsistent service set | Aromatherapy only on wellness; Sound Healing/Reiki/Facial only on home; enrollment select lacks Aromatherapy | Can't book Aromatherapy by name | Yes |
| wellness | detox-wrapper | Medical/legal risk | "Vamana (emesis)… Raktamokshana (bloodletting)" | Invasive procedures advertised without qualification statement | Yes |
| wellness | Panchakarma swiper | Reused images / wrong alt | wellness-img-1..6, alt "panchakarma img"; detox img alt "Abhyangam Massage" | a11y; misleading | No |
| wellness | headings/body | Typos | "Bali Yoga Studio ,", "What is Ayurveda ?", "What is Panchakarma ?"; id "naturely" | Copy quality | No |
| wellness | Panchakarma | Missing cross-link | no link to panchakarma-detox-retreat.php | Lost conversion path | No |
| courses / daily_classes | daily-classes-listing | Price + schedule conflict | "IDR 903,000 ($50)", "Mon - Sat", "Hatha Styles" vs "Single Drop-In … 150K", "Everyday"/"Every Sunday" | Contradictory | Yes |
| courses | daily-classes-listing | Reused figure [I] | "IDR 903,000 ($50)" = home Abhyanga massage price | Likely placeholder | Yes |
| courses | short-courses-listing | Identical prices | three 50-hour courses all "IDR 4,516,000 ($250)" (same as Women retreat listing) | Possibly placeholder | Yes |
| courses | head vs content | Meta mismatch | meta "…wellness retreats, and healing workshops… certified teacher training" | Page lists only 1 class + 3 short courses | Yes |
| daily_classes | yogaModal | Placeholder text | "Yoga Style / Description goes here." (img src empty) | Possibly JS-filled; verify [I] | No |
| daily_classes | what-we-teach vs schedule | Offer mismatch | buttons Vinyasa, Yin, Kundalini, Ashtanga, Reiki, Ecstatic Dance; timetable has none of them, plus Pilates | Users can't find the taught styles on the timetable | Yes |
| daily_classes | pricing | Badge overuse | "Best Value" on 3-Class, 10-Class and 30-Day cards | Dilutes the badge | Yes |
| daily_classes | pricing notes | Grammar / formats | "All class card packages is only…"; "1.35 Mil", "2.950 Mil" | Copy quality | No |
| daily_classes | teacher slider | Conflicting bio | Akshant: "With over 5 years of teaching experience" + badge "10+ Year Of Experience" | Contradiction | Yes |
| daily_classes | teacher slider | Gap | labels "Teacher 1, 2, 4, 5…" (no Teacher 3) | Removed teacher [I] | No |
| daily_classes | overview | Missing person | "guided by masters like Guruji Vishnu Panigrahi" not in slider | Inconsistency | Yes |
| daily_classes | images | a11y | 23 empty alts | a11y | No |
| home → daily_classes | home banner slide 3 | Wrong CTA target | "Become a Certified Yoga Teacher" / "Join Training" → daily-classes.php | Should go to a TTC page | No |
| enrollment_form (dependency) | intro | Copy mismatch | "…transformative and healing journey into the ancient wisdom of Ayurveda" | Shown for all retreats, classes and events | No |
