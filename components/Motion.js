'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Page-level motion. Content is fully visible without JavaScript; the inline
// script in the layout only hides [data-hero-item] when motion is allowed, and
// removes that class again if this component never runs.
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const mm = gsap.matchMedia();

    mm.add(
      {
        motion: '(prefers-reduced-motion: no-preference)',
        reduce: '(prefers-reduced-motion: reduce)',
        desktop: '(min-width: 900px)',
      },
      (ctx) => {
        const { motion, desktop } = ctx.conditions;

        if (!motion) {
          root.classList.remove('js-motion');
          return undefined;
        }

        // Entrance for the first screen (home hero or page header).
        const heroItems = gsap.utils.toArray('[data-hero-item]');
        const media = document.querySelector('[data-hero-media]');
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        if (heroItems.length) {
          tl.fromTo(heroItems, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.09 }, 0);
        }
        if (media) {
          tl.fromTo(
            media,
            { clipPath: 'inset(100% 0% 0% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'expo.out', clearProps: 'clipPath' },
            0.1
          );
          const img = media.querySelector('img');
          if (img) tl.fromTo(img, { scale: 1.12 }, { scale: 1, duration: 1.6, ease: 'expo.out' }, 0.1);
        }
        const inset = document.querySelector('[data-hero-inset]');
        if (inset) tl.fromTo(inset, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.55);
        root.classList.remove('js-motion');

        // Section reveals.
        gsap.utils.toArray('[data-reveal]').forEach((el) => {
          // Pinned columns only fade: a transform would skew the pin's measured start.
          gsap.from(el, {
            y: el.hasAttribute('data-pin') ? 0 : 32,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          });
        });

        // Staggered groups (cards, rows).
        gsap.utils.toArray('[data-stagger]').forEach((group) => {
          const items = group.children;
          if (!items.length) return;
          gsap.from(items, {
            y: 36,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: { trigger: group, start: 'top 85%', once: true },
          });
        });

        // Image reveals: a soft wipe for framed images below the fold.
        gsap.utils.toArray('[data-img-reveal]').forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: 'inset(12% 8% 12% 8%)', opacity: 0.4 },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              opacity: 1,
              duration: 1.2,
              ease: 'expo.out',
              clearProps: 'clipPath,opacity',
              scrollTrigger: { trigger: el, start: 'top 85%', once: true },
            }
          );
        });

        // Gentle parallax on large images, desktop only.
        if (desktop) {
          gsap.utils.toArray('[data-parallax]').forEach((el) => {
            const img = el.querySelector('img');
            if (!img) return;
            gsap.fromTo(
              img,
              { yPercent: -6, scale: 1.12 },
              {
                yPercent: 6,
                scale: 1.12,
                ease: 'none',
                scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
              }
            );
          });
        }

        return undefined;
      }
    );

    // Pinned text: a text column stays in view while the taller column beside it
    // scrolls, then releases at the end of its section. Desktop layouts only.
    mm.add('(min-width: 900px)', () => {
      const header = document.querySelector('.site-header');
      const subnav = document.querySelector('.subnav');
      const offset = () => (header?.offsetHeight || 0) + (subnav?.offsetHeight || 0) + 32;

      gsap.utils.toArray('[data-pin]').forEach((el) => {
        const container = el.parentElement;
        // Only pin when the neighbouring column is clearly taller, and the text fits on screen.
        const room = container.offsetHeight - el.offsetHeight;
        if (room < 200 || el.offsetHeight > window.innerHeight - offset() - 24) return;

        ScrollTrigger.create({
          trigger: el,
          start: () => `top ${offset()}px`,
          endTrigger: container,
          end: () => `bottom ${offset() + el.offsetHeight}px`,
          pin: el,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      });
      return undefined;
    });

    // Recalculate trigger positions once images have loaded.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const t = setTimeout(refresh, 600);

    return () => {
      clearTimeout(t);
      window.removeEventListener('load', refresh);
      mm.revert();
    };
  }, [pathname]);

  return null;
}
