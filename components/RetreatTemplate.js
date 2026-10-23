import Link from '@/components/Link';
import Picture from './Picture';
import CtaBand from './CtaBand';
import { ArrowRight } from './Icons';
import { retreats, retreatPromise } from '@/data/retreats';

export default function RetreatTemplate({ retreat: r }) {
  const enquire = `/contact?interest=${r.slug}`;
  const others = retreats.filter((o) => o.slug !== r.slug);
  // The arch uses the strongest photo; the inset shows a second moment from the day.
  const inset = ['women-wellness', 'senior-wellness', 'panchakarma-detox'].includes(r.slug)
    ? { src: r.image2, alt: r.image2Alt }
    : { src: r.image, alt: r.imageAlt };
  const facts = [
    { label: 'Starts', value: r.schedule[0].time },
    { label: 'Suits', value: r.audience },
    { label: 'Packages', value: 'On enquiry' },
    { label: 'Accommodation', value: 'Not included' },
  ];

  return (
    <>
      <section className="retreat-hero">
        <div className="container retreat-hero__grid">
          <div className="retreat-hero__text">
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumb" data-hero-item>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/retreats">Retreats</Link>
                </li>
                <li>
                  <span aria-current="page">{r.cardTitle}</span>
                </li>
              </ol>
            </nav>
            <span className="retreat-hero__tag" data-hero-item>
              {r.format} retreat
            </span>
            <h1 data-hero-item>{r.title}</h1>
            <p className="retreat-hero__lead" data-hero-item>
              {r.lead}
            </p>
            <div className="btn-row" data-hero-item>
              <Link href={enquire} className="btn btn--saffron">
                Enquire about this retreat <ArrowRight />
              </Link>
              <a href="#day" className="btn btn--ghost">
                See the day
              </a>
            </div>
          </div>

          <div className="retreat-hero__media">
            <div className="retreat-hero__arch" data-hero-media>
              <Picture src={r.arch} alt={r.archAlt} widths={[900, 560]} sizes="(min-width: 960px) 440px, 80vw" priority />
            </div>
            <div className="retreat-hero__inset" data-hero-inset>
              <Picture src={inset.src} alt={inset.alt} preset="card" widths={[560]} sizes="220px" />
            </div>
          </div>
        </div>

        <div className="container">
          <dl className="retreat-hero__facts" data-hero-item>
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container split split--top split--wide-text">
          <div data-reveal data-pin>
            <h2>The retreat</h2>
            <div className="prose">
              {r.overview.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div data-reveal data-pin>
            <h3 className="list-title">Highlights</h3>
            <ul className="ticks">
              {r.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="callout" style={{ marginTop: '2rem' }}>
              <h3>{r.eligibility.title}</h3>
              <p>{r.eligibility.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ink" id="day">
        <div className="container split split--top">
          <div data-reveal data-pin>
            <h2>How the day unfolds</h2>
            <p className="lead" style={{ color: 'var(--muted-on-dark)' }}>
              A gentle rhythm of practice, nourishment and rest. Times are a guide and may shift slightly on the day.
            </p>
          </div>
          <ol className="day" data-stagger>
            {r.schedule.map((s) => (
              <li key={s.time}>
                <time>{s.time}</time>
                <span>{s.activity}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>What’s included</h2>
          </div>
          <div className="three-col" data-stagger>
            <div>
              <h3 className="list-title">Included</h3>
              <ul className="ticks">
                {r.included.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="list-title">Not included</h3>
              <ul className="ticks ticks--muted">
                {r.notIncluded.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="list-title">What to bring</h3>
              <ul className="ticks ticks--muted">
                {r.bring.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="fee-panel" style={{ marginTop: '2rem' }} data-reveal>
            <div>
              <span className="fee-panel__label">Packages & pricing</span>
              <span className="fee-panel__amount">On enquiry</span>
            </div>
            <div>
              <p className="lead">
                Retreat packages and current prices are confirmed by the studio team when you enquire. Accommodation is not
                included.
              </p>
              <Link href={enquire} className="btn" style={{ marginTop: '1.5rem' }}>
                Ask about packages <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Why guests choose the studio</h2>
          </div>
          <ul className="promise promise--light" data-stagger>
            {retreatPromise.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="related-strip" aria-labelledby="related-title">
        <div className="container" data-reveal>
          <h2 id="related-title">Other retreats</h2>
          <ul className="related">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/retreats/${o.slug}`}>{o.cardTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Reserve your place"
        text="Tell us your preferred date and group size, and the team will confirm availability and packages."
        primary={{ label: 'Enquire now', href: enquire }}
        secondary={{ label: 'All retreats', href: '/retreats' }}
      />
    </>
  );
}
