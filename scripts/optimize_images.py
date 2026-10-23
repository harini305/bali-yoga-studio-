"""Build optimised WebP derivatives from the read-only original asset mirror.

Originals in docs/source-audit/original-assets are never modified. Each entry
below produces one or more resized and cropped files under public/img/.
Run: python -I scripts/optimize_images.py
"""
import json
import os
import sys
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "docs", "source-audit", "original-assets", "assets", "img")
OUT = os.path.join(ROOT, "public", "img")

# name: (source, widths, aspect (w/h) or None, focal x 0-1, focal y 0-1)
HERO = (1240, 720)
CARD = (900, 560)
JOBS = {
    # Home
    "home/hero": ("common-banner-img.webp", (1100, 640), 4 / 5, 0.5, 0.5),
    "home/kirtan": ("event-and-workshop/kirtan-evening/kirtan-evening-banner.webp", (720,), 4 / 3, 0.5, 0.5),
    "home/schedule": ("schedule-wrapper-img.webp", (1200, 700), 3 / 4, 0.3, 0.5),
    "home/food": ("food/food8.jpg", (900, 560), 4 / 3, 0.5, 0.5),
    "home/room": ("rooms/room5.webp", (600,), 3 / 2, 0.5, 0.5),
    "home/finale": ("about-us/about-banner.webp", (900, 560), 4 / 5, 0.55, 0.5),
    "home/garden": ("about-us/about-img2.webp", (800,), 3 / 2, 0.5, 0.5),
    # Page headers
    "header/about": ("about-us/about-banner.webp", HERO, 4 / 3, 0.5, 0.5),
    "header/teachers": ("event-and-workshop/yoga-teacher-training-workshop/banner-img.webp", HERO, 4 / 3, 0.5, 0.5),
    "header/training": ("multi-style/100-yttc/banner-img.webp", HERO, 4 / 3, 0.5, 0.5),
    "header/retreats": ("retreat/half-day-healing-retreat/banner-img.webp", HERO, 4 / 3, 0.4, 0.5),
    "header/workshops": ("workshop-and-event/workshop-and-event-banner.webp", HERO, 4 / 3, 0.5, 0.5),
    "header/classes": ("daily-classes/daily-classes-banner.webp", HERO, 4 / 3, 0.6, 0.5),
    "header/wellness": ("wellness-banner.webp", HERO, 4 / 3, 0.5, 0.5),
    "header/gallery": ("multi-style/50-yttc/banner.webp", HERO, 4 / 3, 0.5, 0.5),
    "header/faq": ("faqs-banner-img.webp", HERO, 4 / 3, 0.5, 0.5),
    "header/contact": ("event-and-workshop/kundalini-workshop/banner-img.webp", HERO, 4 / 3, 0.5, 0.5),
    # Courses
    "courses/200-hour-yoga": ("enrollment-banner.webp", HERO, 4 / 3, 0.5, 0.5),
    "courses/200-hour-yoga-2": ("multi-style/200-yttc/what-is-yoga-ttc.webp", CARD, 4 / 3, 0.5, 0.5),
    "courses/300-hour-yoga": ("multi-style/300-yttc/banner-img.webp", HERO, 4 / 3, 0.5, 0.5),
    "courses/300-hour-yoga-2": ("multi-style/300-yttc/img-1.webp", CARD, 4 / 3, 0.5, 0.5),
    "courses/500-hour-yoga": ("multi-style/500-yttc/banner-img.webp", HERO, 4 / 3, 0.5, 0.5),
    "courses/500-hour-yoga-2": ("multi-style/500-yttc/what-will-learn.webp", CARD, 4 / 3, 0.5, 0.5),
    "courses/200-hour-kundalini": ("multi-style/200-kundalini-ttc/banner-img.webp", HERO, 4 / 3, 0.5, 0.5),
    "courses/200-hour-kundalini-2": ("multi-style/200-kundalini-ttc/why-choose.webp", CARD, 4 / 3, 0.5, 0.5),
    "courses/yin-yoga": ("event-and-workshop/yin-yoga-workshop/banner-img.webp", HERO, 4 / 3, 0.5, 0.5),
    "courses/yin-yoga-2": ("multi-style/50-hr-yin-yoga-ttc/why-choose-us.webp", CARD, 4 / 3, 0.5, 0.5),
    "courses/aerial-yoga": ("home/bali-banner-2.webp", HERO, 4 / 3, 0.45, 0.5),
    "courses/aerial-yoga-2": ("multi-style/50-aerial-yoga-course/overview-img.webp", CARD, 4 / 3, 0.5, 0.5),
    "courses/sound-healing": ("sound-healing.webp", HERO, 4 / 3, 0.5, 0.5),
    "courses/sound-healing-2": ("sound-healing2.webp", CARD, 4 / 3, 0.5, 0.5),
    # Retreats
    "retreats/one-day": ("retreat/one-day-wellness-retreat/overview-img.webp", CARD, 4 / 3, 0.5, 0.5),
    "retreats/one-day-2": ("retreat/one-day-wellness-retreat/eligibility-img-2.webp", CARD, 4 / 3, 0.5, 0.5),
    "retreats/half-day": ("retreat/half-day-healing-retreat/eligibility-img-2.webp", CARD, 4 / 3, 0.5, 0.5),
    "retreats/half-day-2": ("retreat/half-day-healing-retreat/eligibility-img-1.webp", CARD, 4 / 3, 0.5, 0.5),
    "retreats/women": ("retreat/women-wellness-retreat/banner-img.webp", HERO, 4 / 3, 0.5, 0.5),
    "retreats/women-2": ("retreat/women-wellness-retreat/eligibility-img-1.webp", CARD, 4 / 3, 0.5, 0.5),
    "retreats/senior": ("retreat/senior-citizen-retreat/overview-img.webp", CARD, 4 / 3, 0.5, 0.5),
    "retreats/senior-2": ("retreat/senior-citizen-retreat/eligibility-img-1.webp", CARD, 4 / 3, 0.5, 0.5),
    "retreats/panchakarma": ("retreat/panchakarma-detox-retreat/overview-img.webp", CARD, 4 / 3, 0.5, 0.5),
    "retreats/panchakarma-2": ("retreat/panchakarma-detox-retreat/eligibility-img-1.webp", CARD, 4 / 3, 0.5, 0.5),
    # Retreat header arches (4:5)
    "retreats/one-day-arch": ("retreat/one-day-wellness-retreat/retreat-banner.webp", (900, 560), 4 / 5, 0.42, 0.5),
    "retreats/half-day-arch": ("retreat/half-day-healing-retreat/banner-img.webp", (900, 560), 4 / 5, 0.42, 0.5),
    "retreats/women-arch": ("retreat/women-wellness-retreat/banner-img.webp", (900, 560), 4 / 5, 0.5, 0.5),
    "retreats/senior-arch": ("retreat/senior-citizen-retreat/overview-img.webp", (900, 560), 4 / 5, 0.68, 0.5),
    "retreats/panchakarma-arch": ("retreat/panchakarma-detox-retreat/overview-img.webp", (900, 560), 4 / 5, 0.42, 0.5),
    # Workshops
    "workshops/kirtan": ("event-and-workshop/kirtan-evening/kirtan-evening-banner.webp", HERO, 4 / 3, 0.5, 0.5),
    "workshops/kirtan-2": ("event-and-workshop/kirtan-evening/what-is-kirtan-evening-img.webp", CARD, 4 / 3, 0.5, 0.5),
    "workshops/ytt-intro": ("event-and-workshop/yoga-teacher-training-workshop/overview-img.webp", CARD, 4 / 3, 0.5, 0.5),
    "workshops/ytt-intro-2": ("short-course/50hr-bio/50hr-bio-banner.webp", CARD, 4 / 3, 0.5, 0.5),
    "workshops/yin": ("event-and-workshop/sound-healing-workshop/sound-healing-workshop-banner.webp", HERO, 4 / 3, 0.5, 0.5),
    "workshops/yin-2": ("event-and-workshop/yin-yoga-workshop/overview-img.webp", CARD, 4 / 3, 0.5, 0.5),
    "workshops/breathwork": ("event-and-workshop/breathwork-workshop/banner-img.webp", HERO, 4 / 3, 0.5, 0.5),
    "workshops/breathwork-2": ("home/pranayama.webp", CARD, 4 / 3, 0.5, 0.5),
    "workshops/ayurveda": ("event-and-workshop/ayurveda-workshop/banner-img.webp", HERO, 4 / 3, 0.5, 0.5),
    "workshops/ayurveda-2": ("event-and-workshop/ayurveda-workshop/overview-img.webp", CARD, 4 / 3, 0.5, 0.5),
    # Wellness menu
    "wellness/abhyanga": ("home/abhayanga-massage-img.webp", (600,), 4 / 3, 0.5, 0.5),
    "wellness/deep-tissue": ("home/deep-tissue-img.webp", (600,), 4 / 3, 0.5, 0.5),
    "wellness/balinese": ("home/balinese-massage-img.webp", (600,), 4 / 3, 0.5, 0.5),
    "wellness/thai": ("home/thai-massage-img.webp", (600,), 4 / 3, 0.5, 0.5),
    "wellness/sound": ("sound-healing2.webp", (600,), 4 / 3, 0.5, 0.5),
    "wellness/reiki": ("home/reiki-healing-img.webp", (600,), 4 / 3, 0.5, 0.5),
    "wellness/facial": ("home/ayurvedic-facial-img.webp", (600,), 4 / 3, 0.5, 0.5),
    # About
    "about/story": ("about-us/about-img1.webp", (800,), 4 / 5, 0.55, 0.5),
    "about/garden": ("about-us/about-img2.webp", (800,), 4 / 3, 0.5, 0.5),
    "about/video-poster": ("home/daily-classes.webp", (800,), 16 / 9, 0.5, 0.5),
    "classes/why": ("daily-classes/why-choose.webp", (600,), 4 / 5, 0.5, 0.5),
}

TEACHERS = ["yogi-ashutosh-mishra", "yogi-naveen", "teacher-img-hari-dharma", "teacher-img-akshat",
            "yogi-sunil", "mandeep-bhatt", "yogi-rohit-kumar", "guna-ji", "sujata-ray"]
for t in TEACHERS:
    JOBS["teachers/" + t] = ("teacher/" + t + ".webp", (440,), 1, 0.5, 0.45)

GALLERY = {
    "yoga": ["gallery/y1.webp", "gallery/y2.webp", "gallery/y3.webp", "gallery/y4.webp", "gallery/y5.webp",
             "gallery/y6.webp", "home/200-hr-ttc.webp", "home/300-hr-ttc.webp", "home/500-hr-ttc.webp",
             "multi-style/50-aerial-yoga-course/banner-bg.webp"],
    "events": ["event-and-workshop/kirtan-evening/what-is-kirtan-evening-img.webp",
               "event-and-workshop/international-yoga-day/overview-img.webp",
               "home/esthetic-dance.webp", "workshop-and-event/workshop-and-event-img1.webp",
               "event-and-workshop/breathwork-workshop/overview-img.webp"],
    "food": ["food/food1.jpg", "food/food3.jpg", "food/food4.jpg", "food/food6.jpg", "food/food8.jpg"],
    "stay": ["rooms/room1.webp", "rooms/room2.webp", "rooms/room4.webp", "rooms/room5.webp", "rooms/room8.webp"],
    "wellness": ["sound-healing.webp", "home/full-moon.webp", "wellness/facial-massage.webp",
                 "retreat/half-day-healing-retreat/eligibility-img-2.webp"],
}
for cat, files in GALLERY.items():
    for i, f in enumerate(files, 1):
        JOBS[f"gallery/{cat}-{i}"] = (f, (1400, 560), None, 0.5, 0.5)


def crop_to(im, aspect, fx, fy):
    w, h = im.size
    if aspect is None:
        return im
    if w / h > aspect:
        nw = round(h * aspect)
        left = min(max(round(w * fx - nw / 2), 0), w - nw)
        return im.crop((left, 0, left + nw, h))
    nh = round(w / aspect)
    top = min(max(round(h * fy - nh / 2), 0), h - nh)
    return im.crop((0, top, w, top + nh))


def main():
    manifest = []
    sizes = {}
    for name, (src, widths, aspect, fx, fy) in JOBS.items():
        im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, src))).convert("RGB")
        im = crop_to(im, aspect, fx, fy)
        made = []
        base_w = min(widths[0], im.size[0])  # never upscale
        for i, target in enumerate(widths):
            out = os.path.join(OUT, name + ("" if i == 0 else f"-{target}") + ".webp")
            if i > 0 and target >= base_w:
                # The source is too small for a separate smaller copy; Picture skips it.
                if os.path.exists(out):
                    os.remove(out)
                continue
            w = base_w if i == 0 else target
            h = round(im.size[1] * w / im.size[0])
            os.makedirs(os.path.dirname(out), exist_ok=True)
            resized = im.resize((w, h), Image.LANCZOS)
            resized.save(out, "WEBP", quality=78, method=6)
            if os.path.getsize(out) > 150 * 1024:
                # Busy photos compress poorly; trade a little quality for size.
                resized.save(out, "WEBP", quality=68, method=6)
            made.append(f"{w}x{h} {os.path.getsize(out) // 1024}KB")
        manifest.append(f"{name}: {src} -> {', '.join(made)}")
        sizes[name] = [min(widths[0], im.size[0]), round(im.size[1] * min(widths[0], im.size[0]) / im.size[0])]
    with open(os.path.join(ROOT, "data", "image-sizes.json"), "w") as f:
        json.dump(sizes, f, indent=0, sort_keys=True)
    print("\n".join(manifest))
    print(len(manifest), "images", file=sys.stderr)


if __name__ == "__main__":
    main()
