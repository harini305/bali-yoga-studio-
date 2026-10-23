# Bali Yoga Studio — frontend redesign (demo)

A redesigned, responsive frontend for Bali Yoga Studio, Ubud. Built with Next.js (App Router, JavaScript), React, GSAP and ScrollTrigger, and plain CSS.

This is a design demo: the enquiry form validates input but does not send messages, and pages are marked `noindex`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Structure

- `app/` — routes: home, about, teachers, teacher training (+ 7 course pages), retreats (+ 5), workshops (+ 5), daily classes, wellness, gallery, FAQ, contact
- `components/` — shared UI and the course, retreat and workshop templates
- `data/` — page content as JavaScript data, rendered by the templates
- `public/img/` — optimised WebP images used by the site
- `scripts/optimize_images.py` — builds `public/img/` from the original asset mirror (`docs/source-audit/original-assets/`, kept out of the repository)
- `docs/source-audit/` — the Phase 1 audit reports

## Performance notes

- Images are pre-sized WebP with responsive `srcset`; Next.js image optimisation is disabled (`images: { unoptimized: true }`).
- Internal links don't prefetch (`components/Link.js`), and static images are served with long cache headers, to keep CDN requests low.
- YouTube and Google Maps load only when the visitor asks for them.
