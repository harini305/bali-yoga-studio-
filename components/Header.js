'use client';

import Link from '@/components/Link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { nav, site } from '@/data/site';
import { Chevron, Close } from './Icons';

function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Bali Yoga Studio, home">
      <img src="/img/logo.webp" alt="" width="240" height="214" />
      <span className="brand__name" aria-hidden="true">
        Bali
        <small>Yoga Studio</small>
      </span>
    </Link>
  );
}

const isActive = (pathname, href) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`));

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (!open) return undefined;

    const panel = panelRef.current;
    panel?.querySelector('.drawer__close')?.focus();

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let tween;
    if (!reduce && panel) {
      tween = gsap.from(panel.querySelectorAll('.drawer__nav > li, .drawer__foot'), {
        x: 24,
        opacity: 0,
        duration: 0.5,
        stagger: 0.045,
        delay: 0.12,
        ease: 'power3.out',
        clearProps: 'all',
      });
    }

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === 'Tab' && panel) {
        const focusables = panel.querySelectorAll('a, button');
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
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
      document.removeEventListener('keydown', onKey);
      tween?.kill();
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header__bar">
        <Brand />

        <nav className="nav" aria-label="Main">
          <ul className="nav__list">
            {nav.map((item) => (
              <li className="nav__item" key={item.href}>
                <Link href={item.href} className="nav__link" aria-current={isActive(pathname, item.href) ? 'page' : undefined}>
                  {item.label}
                  {item.children && <Chevron />}
                </Link>
                {item.children && (
                  <ul className="nav__panel">
                    {item.children.map((c) => (
                      <li key={c.href + c.label}>
                        <Link href={c.href}>{c.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact" className="btn btn--saffron header-cta">
          Enquire
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-drawer"
          onClick={() => setOpen(true)}
        >
          Menu
          <span className="menu-toggle__icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div id="site-drawer" className={`drawer${open ? ' is-open' : ''}`} aria-hidden={!open} inert={!open}>
        <div className="drawer__scrim" onClick={() => setOpen(false)} />
        <div className="drawer__panel" ref={panelRef} role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="drawer__top">
            <Brand />
            <button
              type="button"
              className="drawer__close"
              aria-label="Close menu"
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
            >
              <Close />
            </button>
          </div>

          <ul className="drawer__nav">
            <li>
              <Link href="/" className="drawer__link" aria-current={pathname === '/' ? 'page' : undefined}>
                Home
              </Link>
            </li>
            {nav.map((item) => {
              const isOpen = expanded === item.href;
              return (
                <li key={item.href}>
                  <div className="drawer__row">
                    <Link href={item.href} className="drawer__link" aria-current={isActive(pathname, item.href) ? 'page' : undefined}>
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        className="drawer__expand"
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? 'Hide' : 'Show'} ${item.label} pages`}
                        onClick={() => setExpanded(isOpen ? null : item.href)}
                      >
                        <Chevron />
                      </button>
                    )}
                  </div>
                  {item.children && (
                    <div className={`drawer__sub${isOpen ? ' is-open' : ''}`}>
                      <ul inert={!isOpen}>
                        {item.children.map((c) => (
                          <li key={c.href + c.label}>
                            <Link href={c.href} aria-current={pathname === c.href ? 'page' : undefined}>
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
            <li>
              <Link href="/contact" className="drawer__link" aria-current={pathname === '/contact' ? 'page' : undefined}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="drawer__foot">
            <Link href="/contact" className="btn btn--saffron">
              Enquire about a course
            </Link>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.addressShort}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
