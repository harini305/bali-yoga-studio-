import Link from '@/components/Link';
import PageHeader from '@/components/PageHeader';
import Picture from '@/components/Picture';
import CtaBand from '@/components/CtaBand';
import { ArrowRight } from '@/components/Icons';
import { retreats, retreatPromise } from '@/data/retreats';

export const metadata = {
  title: 'Yoga & Wellness Retreats in Ubud',
  description:
    'Half-day, one-day and specialised yoga and wellness retreats in Ubud, Bali — for women, seniors, and anyone needing a deep reset, plus a traditional Panchakarma detox.',
  alternates: { canonical: '/retreats' },
};

export default function RetreatsHub() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Retreats' }]}
        title="Retreats to rest, heal and reset"
        lead="Whether you seek emotional healing, gentle movement or simply a peaceful escape from a busy world, each retreat is designed to nourish body, mind and spirit."
        image="/img/header/retreats"
        imageAlt="Guests resting on mats while a facilitator plays singing bowls in the aerial studio"
      />

      <section className="section bg-paper">
        <div className="container">
          <ul className="feature-rows">
            {retreats.map((r, i) => (
              <li key={r.slug} className={`feature-row split${i % 2 ? ' split--reverse' : ''}`}>
                <div className="media ratio-4-3" data-img-reveal>
                  <Picture
                    src={r.image}
                    alt={r.imageAlt}
                    preset={r.image.endsWith('women') ? 'hero' : 'card'}
                    widths={r.image.endsWith('women') ? [1240, 720] : [900, 560]}
                    sizes="(min-width: 900px) 50vw, 100vw"
                  />
                </div>
                <div data-reveal>
                  <span className="feature-row__tag">{r.format}</span>
                  <h2>{r.title}</h2>
                  <p className="lead">{r.summary}</p>
                  <ul className="ticks">
                    {r.highlights.slice(0, 3).map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <Link href={`/retreats/${r.slug}`} className="btn">
                    View retreat <ArrowRight />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-ink">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Every retreat shares</h2>
          </div>
          <ul className="promise" data-stagger>
            {retreatPromise.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Plan your retreat"
        text="Packages and prices are confirmed on enquiry. Let us know your dates and what you hope to take home."
      />
    </>
  );
}
