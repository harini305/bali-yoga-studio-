import Link from '@/components/Link';
import { site } from '@/data/site';

const explore = [
  { label: 'Teacher Training', href: '/teacher-training' },
  { label: 'Daily Classes', href: '/daily-classes' },
  { label: 'Retreats', href: '/retreats' },
  { label: 'Workshops', href: '/workshops' },
  { label: 'Wellness', href: '/wellness' },
];

const studio = [
  { label: 'About', href: '/about' },
  { label: 'Teachers', href: '/teachers' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Link href="/" className="brand" aria-label="Bali Yoga Studio, home">
            <img src="/img/logo.webp" alt="" width="240" height="214" loading="lazy" />
            <span className="brand__name" aria-hidden="true">
              Bali
              <small>Yoga Studio</small>
            </span>
          </Link>
          <p>{site.tagline}</p>
        </div>

        <div className="footer-col">
          <h2>Explore</h2>
          <ul>
            {explore.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2>Studio</h2>
          <ul>
            {studio.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2>Visit</h2>
          <ul>
            <li>{site.addressShort}</li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              {' · '}
              <a href={site.youtube} target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Bali Yoga Studio. All rights reserved.</span>
        <span>Design demo — enquiry forms do not send messages.</span>
      </div>
    </footer>
  );
}
