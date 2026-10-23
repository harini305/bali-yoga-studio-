# 07 — Responsive Observations

Tested with headless Chromium (Playwright) on 2026-10-23.

| Viewport tested | Coverage |
|---|---|
| **1440 × 900** (desktop) | All 46 live pages, full-page screenshots → `screenshots/desktop-1440/` |
| **768 × 1024** (tablet) | All pages; full-page for 17 template representatives, above-the-fold only for the rest → `screenshots/tablet-768/` |
| **390 × 844** (mobile) | All pages, full-page → `screenshots/mobile-390/` |
| Breakpoint probe | Home at 1440, 1280, 1200, 1199, 1024, 992, 991, 768, 576, 390, 360 (header + grid behaviour) |

Per-page numbers: `data/responsive-metrics.json`. Limitations: these are headless-Chromium renders only (no Safari/iOS or real devices). Hover states were tested on desktop only. Animated entrances can make the first viewport look empty in a static capture.

---

## 1. Breakpoint system (verified from CSS + probe)

- The site is built on the Bootstrap 5 grid. The custom CSS uses `max-width` breakpoints at **1300, 1199, 991/992, 767/768, 575, 480** px.
- Container: `.container { max-width: 1240px }`.
- **Header switch at 1200px:** ≥1200 shows the desktop header (121px, then 81px after scroll); ≤1199 shows the mobile header (fixed, 97px at 576–1199, 90px at ≤575) with the off-canvas menu. **Tablets in both orientations, and small laptops (1024–1199), get the hamburger menu.**
- Card grids (e.g. home "Teacher Training Courses"): 3 columns at ≥992 (380px each at 1280, 440px at 1440), still 3 columns at 768 (360px; the row is wider than the viewport so cards scroll in a slider), 1 column ≤575.

## 2. Header & navigation

| Width | Behaviour |
|---|---|
| ≥1200 | Transparent fixed header over the hero; logo left, centred links, amber "Get Started" right. Turns solid `#1f1f1f` and shrinks on scroll. Hover mega-menu with a light-grey panel (`screenshots/interactions/desktop-dropdown-*.jpg`) |
| <1200 | Dark fixed bar; logo left, rounded dark hamburger right. A 340px off-canvas panel slides in from the right over a dark overlay; uppercase links in the display font; sub-menus as accordions; Get Started + 3 social icons at the bottom |

Issues: the logo is a small, thin gold mark that has low contrast on the dark hero. The floating "Explore Cafe" tab (fixed, right edge, ~280px tall) overlaps hero arrows, content, and the open mobile menu at every width.

## 3. Horizontal overflow (verified)

At **390px, 24 pages scroll horizontally** (document width 402px vs 390px viewport). The cause: Bootstrap `.row.g-5` (48px gutters → −24px margins) inside containers with only 12px padding, in sections such as `trust-section`, `workshop-faq-section`, `why-choose-section`, and `event-details-section`. A badge element (`.badge-inner`) also sits at the edge. Affected: the 14 TTC/certification pages (10 multi-style/Kundalini TTCs + Yin, Aerial, Sound Healing, Reiki), `daily-classes`, `events-and-workshop`, and all 8 workshop pages. Not affected: home, retreats, about, contact, blog, gallery, teachers, testimonials, FAQ, the 50-hour short courses (Art of Vinyasa, Bio Mechanics, Hands-on Adjustment).

At tablet and desktop widths, no page overflows horizontally.

## 4. Typography scaling (computed)

| Element | 1440 | 768 | 390 |
|---|---|---|---|
| Inner-page banner H1 (outlined display font) | 64.8px, letter-spacing 9.72px | 34.56px | 30px |
| Home hero H1 | 55px | 34.56px | 30px |
| Section H2 | 24–55px (inconsistent between sections) | — | ~30px on home |
| Body `p` | 15px / 26.25px (home 20px / 34px) | 14px | 14px (home 16px) |
| Buttons | 12px, weight 600, letter-spacing 2px | same | same |

Body copy drops to **14px on mobile**, which is small for long-form course content. Heading sizes vary widely between equivalent sections.

## 5. Page length

The pages are very long, especially on mobile:

| Page | Desktop height | Mobile height |
|---|---|---|
| Home | 12,654px | 18,512px |
| 200-Hour Yoga TTC | 12,299px | 18,724px |
| Other TTC / retreat pages | 7,400–8,600px | 11,600–14,100px |
| Workshop pages | 2,300–3,600px | 3,800–6,200px |
| Testimonials | 3,052px | 9,355px (cards stack) |
| Gallery | 4,073px | 8,279px |

## 6. Section-level observations

- **Hero (home):** a full-bleed image slider at 720px on desktop. At 390 the first capture shows only the eyebrow text ("Your Sanctuary for Yoga & Meditation") over the image. The headline, subcopy, and CTA appear to animate in and **were not visible in the static capture** (observation, not confirmed as a bug). Arrows are hidden on mobile; pagination bullets stay.
- **Inner banners:** a 500px image band with an outlined (transparent-fill, `-webkit-text-stroke`) H1 + breadcrumb pill. The outlined text is hard to read over busy photos at every width.
- **Welcome + Programs panel:** two columns on desktop (text left, dark rounded "Programs" card with 9 items right); stacks on mobile.
- **Weekly schedule card:** a large white card on a photographic background; it stays a single column and shrinks well.
- **Spa tabs (home/wellness):** horizontal category boxes + vertical pills + content on desktop; on mobile the pills stack. The image area in the desktop capture rendered blank.
- **Card sliders** (retreats, workshops, courses, teachers, testimonials): they become swipeable 1.2-slide carousels on mobile.
- **Footer:** dark photographic background (Buddha statue); 5 columns on desktop (brand, Navigation, Quick Links, Contact, Follow Us) + a bottom bar; stacks to one column on mobile. It is compact on desktop (~476px).
- **Fixed elements:** the header, the "Explore Cafe" tab, and the back-to-top button. A sticky in-page section nav (`#stickyNav`, with smooth-scroll links handled in custom.js) exists on 5 pages: `daily-classes`, `wellness`, and the three 50-hour short courses (Art of Vinyasa, Bio Mechanics, Hands-on Adjustment). Its behaviour was observed in markup only and not interaction-tested.

## 7. Implications for Phase 2

1. Design for real tablet widths. Showing the hamburger up to 1199px is acceptable, but the tablet layout should not be a stretched phone layout.
2. Eliminate gutter-induced overflow (container padding ≥ half the gutter) and test at 360/390/768/1024/1280/1440.
3. Mobile body text should be ≥16px; use a single fluid type scale.
4. Shorten pages: mobile heights of 12–18k px suggest heavy consolidation (see 09).
5. Replace the floating cafe tab with a normal link/section, or make sure it never overlaps content or menus.
6. Outlined hero headings should become solid text with sufficient contrast.
