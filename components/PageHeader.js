import Link from '@/components/Link';
import Picture from './Picture';

export default function PageHeader({ crumbs = [], title, lead, image, imageAlt, children }) {
  return (
    <section className="page-header">
      <div className={`container page-header__grid${image ? '' : ' page-header__grid--solo'}`}>
        <div>
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb" data-hero-item>
              <li>
                <Link href="/">Home</Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label}>{c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>
              ))}
            </ol>
          </nav>
          <h1 data-hero-item>{title}</h1>
          {lead && (
            <p className="lead" data-hero-item>
              {lead}
            </p>
          )}
          {children && <div data-hero-item>{children}</div>}
        </div>
        {image && (
          <div className="page-header__media" data-hero-media>
            <Picture src={image} alt={imageAlt} preset="hero" sizes="(min-width: 900px) 50vw, 100vw" priority />
          </div>
        )}
      </div>
    </section>
  );
}
