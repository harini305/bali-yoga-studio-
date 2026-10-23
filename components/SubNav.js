'use client';

import { useEffect, useState } from 'react';

// Sticky in-page navigation that highlights the section currently in view.
export default function SubNav({ links, label = 'On this page' }) {
  const [active, setActive] = useState(links[0]?.id);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [links]);

  return (
    <nav className="subnav" aria-label={label}>
      <div className="container">
        <ul>
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? 'is-active' : undefined}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
