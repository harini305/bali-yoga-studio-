'use client';

import { useEffect } from 'react';

// Publishes the footer's height as --footer-h so a closing section can size
// itself to fill the rest of the screen above it.
export default function FooterMeasure() {
  useEffect(() => {
    const footer = document.querySelector('.site-footer');
    if (!footer) return undefined;
    const set = () => document.documentElement.style.setProperty('--footer-h', `${footer.offsetHeight}px`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(footer);
    return () => ro.disconnect();
  }, []);
  return null;
}
