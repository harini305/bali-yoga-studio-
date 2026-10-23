'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Accordion({ items, defaultOpen = null, headingLevel = 3 }) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();
  const Heading = `h${headingLevel}`;
  const first = useRef(true);

  // Panel height changes move everything below it, so pinned columns need new positions.
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return undefined;
    }
    const t = setTimeout(() => ScrollTrigger.refresh(), 450);
    return () => clearTimeout(t);
  }, [open]);

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${uid}-b${i}`;
        const panelId = `${uid}-p${i}`;
        return (
          <div className="accordion__item" key={item.title}>
            <Heading style={{ font: 'inherit', margin: 0 }}>
              <button
                id={btnId}
                type="button"
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {item.title}
                <span className="accordion__icon" aria-hidden="true" />
              </button>
            </Heading>
            <div id={panelId} role="region" aria-labelledby={btnId} className={`accordion__panel${isOpen ? ' is-open' : ''}`}>
              <div className="accordion__inner" inert={!isOpen}>
                <div className="accordion__content">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
