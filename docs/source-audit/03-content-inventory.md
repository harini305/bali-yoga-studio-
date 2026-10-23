# 03 — Content Inventory (preservation reference)

**Where the original text lives:** `data/content/<slug>.md` holds every page's complete text, taken from the live server HTML on 2026-10-23. It includes content hidden in tabs, accordions, and sliders, in original section order, with CTAs (`[CTA: "label" → href]`), images (`![alt](src)`), and form fields (`[FIELD …]`). `data/content/_shared-chrome.md` holds the header, mobile menu, footer, and modals. `data/content-structured.json` contains the same content as JSON (page → sections → lines). Phase 2 should source copy from these files, not from memory or new research.

This document summarises the **facts that must survive the redesign**, flags duplicated/low-priority content, and indexes the content files. Conflicting facts are listed in `08-issues-gaps-questions.md` §3. **Nothing here has been corrected.**

---

## 1. Business identity & contact (verified)

| Field | Value as published | Source |
|---|---|---|
| Name | Bali Yoga Studio | all pages |
| Tagline (footer) | "Your sanctuary for authentic yoga and holistic healing in the heart of Ubud, Bali." | footer |
| Email | info@baliyogastudio.org | footer, JSON-LD |
| Phone / WhatsApp | +628135904695 (`wa.me/628135904695`) | JSON-LD; WhatsApp link on contact-us |
| Address | Footer: "Ubud, Gianyar, Bali, Indonesia" · JSON-LD: "Jl. Bisma No.78, Ubud, Bali 80571, ID" · geo −8.5107036, 115.2584491 | footer, home JSON-LD |
| Map | Google Maps embed of the "Bali Yoga Studio" place | home, contact-us |
| Social | Instagram `@bali.yogastudio` · YouTube `@BaliYogaStudio-bali` · Facebook (link missing) | header/footer |
| Partner cafe | prasadamhealingcafe.com ("Prasadam Healing Café") | floating tab, fee notes |
| Lead/founder named | "master Guruji Vishnu Panigrahi" (home hero slide 3); "Guru Vishnu" in reviews/curriculum | home, 200-hour TTC |
| Copyright | © 2026 Bali Yoga Studio. All rights reserved. | footer |

## 2. Offerings catalogue (as published)

### 2.1 Teacher training (17 pages)

| Menu label | Route | Detail-page tuition |
|---|---|---|
| 50 Hours Yoga Foundation TTC | `/50-hour-yoga-teacher-training.php` | IDR 6,304,000 ($349) |
| 100 Hours Yogic Living TTC | `/100-hour-yoga-teacher-training.php` | IDR 10,820,000 ($599) |
| 200 Hours Transformative Yoga Flow TTC | `/200-hour-yoga-teacher-training.php` | IDR 16,240,000 ($899) |
| 300 Hours Yoga Mastery TTC | `/300-hour-yoga-teacher-training.php` | IDR 23,465,000 ($1,299) |
| 500 Hours Expansion Yoga TTC | `/500-hour-yoga-teacher-training.php` | IDR 36,110,000 ($1,999) |
| 50 Hours Sacred Seeds of Kundalini TTC | `/50-hour-kundalini-yoga-teacher-training.php` | IDR 6,304,000 ($349) |
| 100 Hours Kundalini Immersion TTC | `/100-hour-kundalini-yoga-teacher-training.php` | IDR 10,820,000 ($599) |
| 200 Hours Alchemy of Kundalini Kriya TTC | `/200-hour-kundalini-yoga-teacher-training.php` | IDR 16,240,000 ($899) |
| 300 Hours Mystic Kundalini Kriya TTC | `/300-hour-kundalini-yoga-teacher-training.php` | IDR 23,465,000 ($1,299) |
| 500 Hours Mastering Kundalini Kriya TTC | `/500-hour-kundalini-yoga-teacher-training.php` | IDR 36,110,000 ($1,999) |
| Yin Yoga TTC | `/50-hour-yin-yoga-teacher-training.php` | IDR 6,304,000 ($349) |
| Aerial Yoga TTC | `/50-hour-aerial-yoga-teacher-training-course.php` | IDR 6,304,000 ($349) |
| Sound Healing Course (Level 1 & 2) | `/50-hour-sound-healing-course.php` | IDR 6,304,000 ($349) |
| Reiki Healing Course (Level 1 & 2) | `/50-hour-reiki-healing-course.php` | IDR 6,304,000 ($349) |
| 50 Hours Art of Vinyasa *(not in menus)* | `/50-hours-art-of-vinyasa.php` | IDR 2,692,000 ($149) / IDR 4,498,000 ($249) |
| 50 Hours Bio Mechanics *(not in menus)* | `/50-hours-bio-mechanics.php` | same |
| 50 Hours Hands-on Adjustment *(not in menus)* | `/50-hours-hands-on-adjustment.php` | same |

Accommodation add-ons by hour tier (identical across courses of the same tier):

| Tier | 6 Shared | 4 Shared | 2 Shared | Private |
|---|---|---|---|---|
| 50-hr | IDR 723,000 ($40) | IDR 813,000 ($45) | IDR 1,806,000 ($100) | IDR 3,252,000 ($180) |
| 100-hr | IDR 1,445,000 ($80) | IDR 1,626,000 ($90) | IDR 3,432,000 ($190) | IDR 6,322,000 ($350) |
| 200-hr | IDR 2,890,000 ($160) | IDR 3,161,000 ($175) | IDR 6,322,000 ($350) | IDR 10,838,000 ($600) |
| 300-hr | IDR 3,595,000 ($199) | IDR 4,155,000 ($230) | IDR 8,309,000 ($460) | IDR 14,451,000 ($800) |
| 500-hr | IDR 6,304,000 ($349) | IDR 6,684,000 ($370) | IDR 13,367,000 ($740) | IDR 25,290,000 ($1,400) |

Durations, sessions, curriculum modules, inclusions, and FAQs per course: `02-page-inventory.md` Part B.

### 2.2 Retreats (5)
One Day Yoga & Wellness · Half-Day Yoga, Massage & Healing · Panchakarma Detox · Senior Citizen Wellness · Women Wellness. All detail pages show packages at IDR 2,692,000 ($149) / IDR 4,498,000 ($249); hub and home show other figures (see 08 §3). Itineraries: `02-page-inventory.md` Part C.

### 2.3 Workshops & events (8 detail pages)
Kirtan Evening (IDR 200,000 / $15) · Yoga Teacher Training Introduction (IDR 350,000 / $25) · International Yoga Day Program · Yin Yoga & Deep Relaxation (IDR 300,000 / $20) · Ayurveda Workshop (IDR 500,000 / $35) · Kundalini Yoga Workshop (IDR 300,000 / $20) · Breathwork & Pranayama (IDR 300,000 / $20) · Sound Healing Workshop (IDR 200,000 / $15). Detail dates are in 2024. Home "Upcoming Workshops & Events" lists different items: Full Moon Sound Bath & Cacao (15 Oct), Inversions Masterclass (22 Oct), Pranayama Deep Dive (05 Nov), Ecstatic Dance Bali (12 Nov), all without years.

### 2.4 Daily drop-in classes (home + daily-classes)

| Time | Class | Days | Length |
|---|---|---|---|
| 8:00 AM | Hatha Flow | Everyday | 60 min |
| 9:30 AM | Pilates | Every Monday | 60 min |
| 10:00 AM | Aerial Yoga | Every Sunday | 60 min |
| 5:00 PM | Meditation | Friday & Saturday | 60 min |
| 7:00 PM | Sound Healing | Everyday | 60 min |

Class prices (`daily-classes.php`): Single Drop-In IDR 150K · Students (Age 10-20) IDR 100K · KITAS / Indonesian IDR 100K · 3-Class Card IDR 450K · 5-Class Card IDR 700K · 10-Class Card IDR 1.35 Mil · 20-Class Card and further passes: see `data/content/daily_classes.md` §7.

### 2.5 Ayurveda Wellness Spa menu (home tabs; also `wellness.php`)

| Category | Treatment | Price | Duration |
|---|---|---|---|
| Massages | Abhyanga Massage | IDR 903,000 ($50) | 60 mins |
| Massages | Deep Tissue Massage | IDR 1,174,000 ($65) | 90 mins |
| Massages | Balinese Massage | IDR 813,000 ($45) | 60 mins |
| Massages | Thai Massage | IDR 994,000 ($55) | 90 mins |
| Therapy | Sound Healing Therapy | IDR 723,000 ($40) | 45 mins |
| Therapy | Reiki Energy Healing | IDR 1,084,000 ($60) | 60 mins |
| Beauty | Ayurvedic Facial | IDR 632,000 ($35) | 45 mins |
| Retreats | Panchakarma Detox Retreat | IDR 17,161,000 ($950) | 7 Days |

### 2.6 Home: other content blocks to keep (summarised)
- **Hero slides (4):** "Find Your Inner Calm" / "Experience True Holistic Wellness" / "Become a Certified Yoga Teacher" / "A Way of Living", each with subcopy + CTA.
- **Welcome:** "Discover the Path to Inner Peace & Holistic Healing" + 9 programs (Join daily yoga Classes, Prayanama Meditaion & Yoga *(sic)*, Reiki & Sound Healing, Retreat 1hr to 1 month, Workshops & Events, Ecstatic Dance, Massage & Wellness, Panchakarma, Pure Vegan Cafe).
- **Benefits (8 chips):** Physical Strength & Posture · Mental Peace & Clarity · Reduced Anxiety & Stress · Better Sleep & Immunity · Emotional Healing · Lifestyle Transformation · Authentic Yoga Philosophy · Mindful Living Habits.
- **Retreat slider (6):** Yoga Retreat, Yoga Wellness Retreats, Panchakarma Retreat, Senior Citizen Retreat, Women Retreat, Detox Retreat (Detox has no detail page).
- **TTC cards:** 200 ($899) / 300 ($1,299) / 500 ($1,999). **Healing courses:** Sound Healing ($599), Reiki ($450), Ayurvedic Therapist Training ($1,200), Kundalini Yoga Workshop ($350); these conflict with detail pages.
- **Student video stories (6 YouTube):** 2 untitled "Student Review", Shella Eve Simaro, Kirsty Wallace, Refika Ji, Remi Butler.
- **Reviews:** Jenny Morris (Canada), Sherry Saifullah (New Zealand), Sofia Schneider (Germany). Note that the image filenames don't match the names (`dewar-canada`, `flower-canada`, `nicola-finland`), and the first review mentions "WPYS".
- **Ratings:** Google 4.6 · Facebook 4.5 · TripAdvisor 4.5 (unverified).

### 2.7 Other content sets
- **Teachers** (`teachers.php` + course sliders): names, roles, and bios in `data/content/teachers.md`. Bios repeat verbatim on 5 pages (see §3).
- **FAQs:** 17 Q&As in 8 categories (`data/content/faqs.md`), plus 3–5 course-specific FAQs on each Template A course page.
- **Testimonials page:** see `02-page-inventory.md` Part A.
- **Blog:** 6 card titles on `/blog/`; only "Relax & Receive: Is Sound Healing the Future of Wellness?" has body text (`data/content/blog_blog_details.md`).

## 3. Duplicated & repetitive content (verified)

| Content | Repeated on | Recommendation |
|---|---|---|
| "At Bali Yoga Studio, you not only engage in yoga, meditation and Pranayama, but go beyond the ordinary…" | 13 course pages | Write once (studio intro) and reference it |
| Teacher bios (Yogi Sunil, Yogi Rohit Kumar, Yogi Naveen, Yogi Akshant Ji, Sujata Ray, Mandeep Bhatt Ji, Hari Dharma, Guna, Ashutosh Mishra) | 5 pages (200-hour TTC, the 3 short courses, daily-classes) | Single teachers dataset; show 3–4 relevant faces per page |
| Retreat boilerplate ("Wellness doesn't end when you roll up your mat…", "We don't just teach yoga; we live it…", "Our instructors are more than teachers…", "Escape the noise of the city…") | 5 retreat pages | Shared retreat "why us" block, once |
| "Bali Excursions / Activities & Spiritual Experiences" block | 13 course pages | Shared component, or move to one page |
| Daily schedule (Hatha/Ashtanga timetable) | 14 course pages, including Kundalini/Yin/Aerial/Sound/Reiki where it doesn't fit | Needs per-course schedules from the business |
| Cafe image grid (15 images) + food/rooms paragraphs | Home + course pages | One "Food & Stay" section |
| `index.php` | duplicate of home | Redirect |

## 4. Content priority guidance for Phase 2

| Priority | Content |
|---|---|
| **Essential** (easy to find) | What the studio offers; course list with real duration, dates, price, inclusions; daily class timetable + prices; retreat/workshop essentials; how to enrol/enquire; contact (email, WhatsApp, map, address); certification status; teachers |
| **Condense** | Long curriculum lists (present as compact accordions); benefits lists; "why choose us" paragraphs; excursion blocks; retreat boilerplate; repeated teacher bios |
| **Low priority** | Blog (one real article); Instagram stats mock-up; rating badges (until verified); decorative section dividers; testimonials page as a standalone route |
| **Needs clarification before use** | All prices and durations flagged in 08; medical wellness claims; WPYS-derived text; event dates; social-proof numbers |

## 5. Content file index

Word counts are for the generated markdown, which includes CTA and image notation.

| Slug / file | Route | Status | Words |
|---|---|---|---|
| `data/content/_shared-chrome.md` | header, mobile menu, footer, modals | — | 516 |
| `data/content/100_hour_kundalini_yoga_teacher_training.md` | `/100-hour-kundalini-yoga-teacher-training.php` | 200 | 1358 |
| `data/content/100_hour_yoga_teacher_training.md` | `/100-hour-yoga-teacher-training.php` | 200 | 1566 |
| `data/content/200_hour_kundalini_yoga_teacher_training.md` | `/200-hour-kundalini-yoga-teacher-training.php` | 200 | 1315 |
| `data/content/200_hour_yoga_teacher_training.md` | `/200-hour-yoga-teacher-training.php` | 200 | 4453 |
| `data/content/300_hour_kundalini_yoga_teacher_training.md` | `/300-hour-kundalini-yoga-teacher-training.php` | 200 | 1309 |
| `data/content/300_hour_yoga_teacher_training.md` | `/300-hour-yoga-teacher-training.php` | 200 | 1467 |
| `data/content/500_hour_kundalini_yoga_teacher_training.md` | `/500-hour-kundalini-yoga-teacher-training.php` | 200 | 1319 |
| `data/content/500_hour_yoga_teacher_training.md` | `/500-hour-yoga-teacher-training.php` | 200 | 1764 |
| `data/content/50_hour_aerial_yoga_teacher_training_course.md` | `/50-hour-aerial-yoga-teacher-training-course.php` | 200 | 1174 |
| `data/content/50_hour_kundalini_yoga_teacher_training.md` | `/50-hour-kundalini-yoga-teacher-training.php` | 200 | 1519 |
| `data/content/50_hour_reiki_healing_course.md` | `/50-hour-reiki-healing-course.php` | 200 | 1319 |
| `data/content/50_hour_sound_healing_course.md` | `/50-hour-sound-healing-course.php` | 200 | 1183 |
| `data/content/50_hour_yin_yoga_teacher_training.md` | `/50-hour-yin-yoga-teacher-training.php` | 200 | 1389 |
| `data/content/50_hour_yoga_teacher_training.md` | `/50-hour-yoga-teacher-training.php` | 200 | 1362 |
| `data/content/50_hours_art_of_vinyasa.md` | `/50-hours-art-of-vinyasa.php` | 200 | 1292 |
| `data/content/50_hours_bio_mechanics.md` | `/50-hours-bio-mechanics.php` | 200 | 1169 |
| `data/content/50_hours_hands_on_adjustment.md` | `/50-hours-hands-on-adjustment.php` | 200 | 1146 |
| `data/content/about_us.md` | `/about-us.php` | 200 | 557 |
| `data/content/ayurveda_workshop.md` | `/ayurveda-workshop.php` | 200 | 605 |
| `data/content/blog.md` | `/blog/` | 200 | 202 |
| `data/content/blog_blog_details.md` | `/blog/blog-details.php` | 200 | 624 |
| `data/content/breathwork_and_pranayama_workshop.md` | `/breathwork-and-pranayama-workshop.php` | 200 | 473 |
| `data/content/contact_us.md` | `/contact-us.php` | 200 | 321 |
| `data/content/courses.md` | `/courses.php` | 200 | 319 |
| `data/content/daily_classes.md` | `/daily-classes.php` | 200 | 1271 |
| `data/content/enrollment_form.md` | `/enrollment-form.php` | 200 | 629 |
| `data/content/events_and_workshop.md` | `/events-and-workshop.php` | 200 | 1058 |
| `data/content/faqs.md` | `/faqs.php` | 200 | 820 |
| `data/content/gallery.md` | `/gallery.php` | 200 | 176 |
| `data/content/half_day_yoga_massage_and_healing_retreat.md` | `/half-day-yoga-massage-and-healing-retreat.php` | 200 | 1140 |
| `data/content/home.md` | `/` | 200 | 2149 |
| `data/content/index.md` | `/index.php` | 200 | 2149 |
| `data/content/international_yoga_day_program.md` | `/international-yoga-day-program.php` | 200 | 479 |
| `data/content/kirtan_evening.md` | `/kirtan-evening.php` | 200 | 491 |
| `data/content/kundalini_yoga_workshop.md` | `/kundalini-yoga-workshop.php` | 200 | 470 |
| `data/content/one_day_yoga_and_wellness_retreat.md` | `/one-day-yoga-and-wellness-retreat.php` | 200 | 1156 |
| `data/content/panchakarma_detox_retreat.md` | `/panchakarma-detox-retreat.php` | 200 | 1234 |
| `data/content/retreat.md` | `/retreat.php` | 200 | 285 |
| `data/content/senior_citizen_wellness_retreat.md` | `/senior-citizen-wellness-retreat.php` | 200 | 1255 |
| `data/content/sinior_citizen_wellness_retreat.md` | `/sinior-citizen-wellness-retreat.php` | 404 | 105 |
| `data/content/sound_healing_workshop.md` | `/sound-healing-workshop.php` | 200 | 418 |
| `data/content/teacher.md` | `/teacher.php` | 404 | 105 |
| `data/content/teachers.md` | `/teachers.php` | 200 | 1504 |
| `data/content/testimonials.md` | `/testimonials.php` | 200 | 485 |
| `data/content/wellness.md` | `/wellness.php` | 200 | 1076 |
| `data/content/women_wellness_retreat.md` | `/women-wellness-retreat.php` | 200 | 1126 |
| `data/content/yin_yoga_and_deep_relaxation_workshop.md` | `/yin-yoga-and-deep-relaxation-workshop.php` | 200 | 560 |
| `data/content/yoga_teacher_training_introduction_workshop.md` | `/yoga-teacher-training-introduction-workshop.php` | 200 | 544 |
