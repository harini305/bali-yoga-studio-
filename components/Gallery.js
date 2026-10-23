'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryFilters, galleryImages } from '@/data/gallery';
import Picture from './Picture';
import { ArrowLeft, ArrowRight, Close } from './Icons';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [index, setIndex] = useState(null);
  const gridRef = useRef(null);
  const closeRef = useRef(null);
  const lastTrigger = useRef(null);
  const touchX = useRef(null);

  const items = filter === 'all' ? galleryImages : galleryImages.filter((g) => g.category === filter);
  const current = index !== null ? items[index] : null;

  const step = useCallback((dir) => setIndex((i) => (i + dir + items.length) % items.length), [items.length]);
  const close = useCallback(() => {
    setIndex(null);
    lastTrigger.current?.focus();
  }, []);

  // Fade the grid in after filtering.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce && gridRef.current) {
      gsap.fromTo(gridRef.current.children, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.03, ease: 'power2.out' });
    }
    ScrollTrigger.refresh();
  }, [filter]);

  useEffect(() => {
    if (index === null) return undefined;
    document.body.classList.add('menu-open');
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'Tab') {
        const nodes = document.querySelectorAll('.lightbox button');
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', onKey);
    };
  }, [index, close, step]);

  return (
    <>
      <div className="tabs" role="group" aria-label="Filter photos">
        {galleryFilters.map((f) => (
          <button key={f.id} type="button" className="tab" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
            {f.label}
          </button>
        ))}
      </div>
      <p className="visually-hidden" aria-live="polite">
        Showing {items.length} photos
      </p>

      <ul className="masonry" ref={gridRef}>
        {items.map((img, i) => (
          <li key={img.id}>
            <button
              type="button"
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setIndex(i);
              }}
              aria-label={`Open photo: ${img.alt}`}
            >
              <Picture src={img.src} alt="" widths={[1400, 560]} width={560} height={420} sizes="(min-width: 900px) 33vw, (min-width: 560px) 50vw, 100vw" />
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="lightbox__bar">
            <span>
              {index + 1} / {items.length}
            </span>
            <button ref={closeRef} type="button" className="icon-btn" aria-label="Close photo viewer" onClick={close}>
              <Close />
            </button>
          </div>
          <div className="lightbox__stage" onClick={(e) => e.target === e.currentTarget && close()}>
            <img src={`${current.src}.webp`} alt={current.alt} key={current.id} />
          </div>
          <div className="lightbox__controls">
            <button type="button" className="icon-btn" aria-label="Previous photo" onClick={() => step(-1)}>
              <ArrowLeft />
            </button>
            <p className="lightbox__caption">{current.alt}</p>
            <button type="button" className="icon-btn" aria-label="Next photo" onClick={() => step(1)}>
              <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
