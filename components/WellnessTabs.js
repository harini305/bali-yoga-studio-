'use client';

import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import Picture from './Picture';

export default function WellnessTabs({ groups }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(0);
  const listRef = useRef(null);
  const tabsRef = useRef([]);
  const items = groups[active].items;
  const shown = items[Math.min(hovered, items.length - 1)];

  const select = (i) => {
    setActive(i);
    setHovered(0);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce && listRef.current) {
      requestAnimationFrame(() =>
        gsap.fromTo(listRef.current.children, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'power2.out' })
      );
    }
  };

  const onKey = (e, i) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!dir) return;
    const next = (i + dir + groups.length) % groups.length;
    select(next);
    tabsRef.current[next]?.focus();
  };

  return (
    <div className="wellness-home">
      <div>
        <div className="tabs" role="tablist" aria-label="Treatment categories">
          {groups.map((g, i) => (
            <button
              key={g.category}
              ref={(el) => (tabsRef.current[i] = el)}
              id={`tab-${i}`}
              type="button"
              role="tab"
              className="tab"
              aria-selected={active === i}
              aria-controls="treatment-panel"
              tabIndex={active === i ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {g.category}
            </button>
          ))}
        </div>
        <ul className="menu-list" id="treatment-panel" role="tabpanel" aria-labelledby={`tab-${active}`} ref={listRef}>
          {items.map((t, i) => (
            <li className="menu-item" key={t.name} onMouseEnter={() => setHovered(i)} onFocus={() => setHovered(i)}>
              <h3>{t.name}</h3>
              <span className="menu-item__price">
                {t.price}
                <small>{t.duration}</small>
              </span>
              <p>{t.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="media media--arch ratio-4-5">
        <Picture src={shown.image.replace('.webp', '')} alt={shown.name} width={600} height={450} sizes="(min-width: 900px) 35vw, 100vw" />
      </div>
    </div>
  );
}
