import Link from '@/components/Link';
import PageHeader from './PageHeader';
import Picture from './Picture';
import CtaBand from './CtaBand';
import { ArrowRight } from './Icons';
import { workshops } from '@/data/workshops';

export default function WorkshopTemplate({ workshop: w }) {
  const enquire = `/contact?interest=${w.slug}`;
  const others = workshops.filter((o) => o.slug !== w.slug);
  const heroIsCard = w.image.endsWith('ytt-intro');

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Workshops', href: '/workshops' }, { label: w.title }]}
        title={w.title}
        lead={w.lead}
        image={heroIsCard ? null : w.image}
        imageAlt={w.imageAlt}
      >
        <div className="btn-row">
          <Link href={enquire} className="btn btn--saffron">
            Ask about the next date <ArrowRight />
          </Link>
        </div>
      </PageHeader>

      <section className="section bg-paper">
        <div className="container workshop-layout">
          <article>
            <div className="article-block" data-reveal>
              <p className="intro__statement" style={{ maxWidth: '40ch' }}>
                {w.intro}
              </p>
            </div>
            <div className="media ratio-4-3 article-block" data-img-reveal>
              <Picture src={heroIsCard ? w.image : w.image2} alt={heroIsCard ? w.imageAlt : w.image2Alt} preset="card" sizes="(min-width: 960px) 55vw, 100vw" />
            </div>
            {w.sections.map((s) => (
              <div className="article-block" key={s.title} data-reveal>
                <h2>{s.title}</h2>
                {s.text && <p>{s.text}</p>}
                {s.list && (
                  <ul className="ticks">
                    {s.list.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {w.note && (
              <div className="callout article-block" data-reveal>
                <p>
                  {w.note}{' '}
                  {w.noteLink && (
                    <Link href={w.noteLink} className="text-link">
                      200 hour course <ArrowRight width="14" height="14" />
                    </Link>
                  )}
                </p>
              </div>
            )}
          </article>

          <aside className="details-card" aria-labelledby="details-title" data-reveal data-pin>
            <h2 id="details-title">Workshop details</h2>
            <dl>
              <div>
                <dt>Format</dt>
                <dd>{w.category}</dd>
              </div>
              {w.length && (
                <div>
                  <dt>Length</dt>
                  <dd>{w.length}</dd>
                </div>
              )}
              {w.when && (
                <div>
                  <dt>Usual time</dt>
                  <dd>{w.when}</dd>
                </div>
              )}
              <div>
                <dt>Location</dt>
                <dd>Bali Yoga Studio, Ubud</dd>
              </div>
              <div>
                <dt>Next date & fee</dt>
                <dd>Confirmed on enquiry</dd>
              </div>
            </dl>
            <Link href={enquire} className="btn btn--saffron">
              Enquire <ArrowRight />
            </Link>
          </aside>
        </div>
      </section>

      <section className="related-strip" aria-labelledby="related-title">
        <div className="container" data-reveal>
          <h2 id="related-title">More workshops</h2>
          <ul className="related">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/workshops/${o.slug}`}>{o.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Join the next session"
        text="Workshop dates change through the year. Send a quick note and we will let you know when this one runs next."
        primary={{ label: 'Enquire now', href: enquire }}
        secondary={{ label: 'All workshops', href: '/workshops' }}
      />
    </>
  );
}
