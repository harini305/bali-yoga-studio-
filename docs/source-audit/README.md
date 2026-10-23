# Source Audit: baliyogastudio.org (Phase 1)

Research-only audit of **https://baliyogastudio.org**, captured **2026-10-23**, to prepare a redesigned Next.js frontend. No implementation, configuration change, push, or deployment has been made. **Phase 2 waits for explicit approval.**

## Start here

| Doc | What it answers |
|---|---|
| [01-audit-report.md](01-audit-report.md) | Overview, method, coverage, limitations, summary of all findings |
| [02-page-inventory.md](02-page-inventory.md) | Every route (46 live + 2 broken) with status, type, and recommendation; shared templates; page-by-page sections, facts, assets, interactions, SEO, risks |
| [03-content-inventory.md](03-content-inventory.md) | Facts to preserve (contact, offerings, prices, timetable, spa menu), duplicated content, content priority, index of per-page text files |
| [04-assets-manifest.csv](04-assets-manifest.csv) | 350 asset references → original URL, local mirror path, pages and sections, dimensions, bytes, alt text, concerns |
| [05-brand-reference.md](05-brand-reference.md) | Fonts, type values, verified HEX palette, logo, shape and imagery language; what to keep or drop |
| [06-functionality-and-dependencies.md](06-functionality-and-dependencies.md) | Stack, 31 features with verification levels, form endpoints, integrations, unknowns |
| [07-responsive-observations.md](07-responsive-observations.md) | Breakpoints, header switch, overflow bugs, type scaling, page lengths at 1440/768/390 |
| [08-issues-gaps-questions.md](08-issues-gaps-questions.md) | Sitewide issues, 15 questions for the business, cross-page fact conflicts, per-page issue tables |
| [09-phase-2-recommendations.md](09-phase-2-recommendations.md) | Mandatory Phase 2 rules (two fonts, visual, content, footer, images/`unoptimized`), proposed IA, templates, SEO baseline, risks |

## Evidence folders

| Path | Contents | Size |
|---|---|---|
| `data/content/*.md` | Full original text per page, including hidden tab/accordion content, in section order (+ `_shared-chrome.md`) | — |
| `data/content-structured.json` | The same content as JSON (page → sections → lines) | — |
| `data/pages/*.json` | Rendered-DOM capture per page (sections, images, links, forms, typography, responsive metrics) | — |
| `data/html/*.html` | Raw server HTML snapshots | 3.9 MB |
| `data/routes.csv` / `routes.json` | Route table with SEO fields | — |
| `data/interaction-tests.json`, `links-forms-embeds.json`, `responsive-metrics.json`, `typography-color-aggregate.json`, `repeated-paragraphs.json`, `near-duplicate-pages.json`, `network-resources.json` | Analysis outputs | — |
| `screenshots/` | 1440 / 768 / 390 captures + interaction shots ([index](screenshots/README.md)) | 43 MB |
| `original-assets/` | **Read-only mirror of 341 original site assets** (images, fonts, favicons, video) at their original paths (`assets/img/...`) | 26 MB |

## Key numbers

- 48 URLs crawled: 46 live, 2 broken (404), 1 duplicate (`/index.php`)
- ~50k words of content; 17 course, 5 retreat, and 8 workshop pages share 3 templates
- Brand: saffron amber `#eb9d0a`, antique gold `#e2ae4b`, ink `#181818`; fonts Manrope + Melinda Evania (+ Lavishly Yours accents)
- **Critical:** robots.txt `Disallow: /` blocks all search engines
- **High:** copied third-party-school content, inconsistent and placeholder prices/durations, expired event dates, empty-submittable forms, broken mobile-menu links

## Rules recorded for Phase 2 (summary; full text in 09)

Exactly **two font families**; professional, non-template visual design; concise content with no invented facts; a compact footer that never overlaps content; original assets first, locally optimised, with `images: { unoptimized: true }` merged into the existing Next.js config.
