import Link from '@/components/Link';
import PageHeader from '@/components/PageHeader';
import Picture from '@/components/Picture';
import CtaBand from '@/components/CtaBand';
import Accordion from '@/components/Accordion';
import { ArrowRight } from '@/components/Icons';
import { workshops } from '@/data/workshops';

export const metadata = {
  title: 'Workshops & Events in Ubud',
  description:
    'Kirtan evenings, Yin yoga and deep relaxation, breathwork and pranayama, Ayurveda and teacher training introduction workshops at Bali Yoga Studio in Ubud.',
  alternates: { canonical: '/workshops' },
};

const faqs = [
  {
    title: 'Do I need to be an advanced yogi to attend?',
    content: <p>No. Workshops are open to every level, and teachers offer options for beginners.</p>,
  },
  {
    title: 'What should I bring?',
    content: <p>Mats, bolsters and props are provided. Bring comfortable clothing and a water bottle.</p>,
  },
  {
    title: 'Can I walk in, or do I need to book?',
    content: <p>Walk-ins are welcome when space allows, but enquiring ahead secures your place.</p>,
  },
];

export default function WorkshopsHub() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Workshops' }]}
        title="Workshops & gatherings"
        lead="Focused sessions and community evenings that take one practice deeper — from devotional chanting to the science of breath."
        image="/img/header/workshops"
        imageAlt="A large group seated on colourful mats during a community event at the studio"
      />

      <section className="section bg-paper">
        <div className="container">
          <ul className="card-grid card-grid--three" data-stagger>
            {workshops.map((w) => (
              <li key={w.slug}>
                <article className="card">
                  <div className="card__media">
                    <Picture
                      src={w.image}
                      alt=""
                      preset={w.image.endsWith('ytt-intro') ? 'card' : 'hero'}
                      widths={w.image.endsWith('ytt-intro') ? [900, 560] : [720]}
                      sizes="(min-width: 960px) 30vw, (min-width: 640px) 45vw, 100vw"
                    />
                  </div>
                  <div className="card__meta">
                    <span>{w.category}</span>
                    {w.length && <span>{w.length}</span>}
                  </div>
                  <h3>
                    <Link href={`/workshops/${w.slug}`}>{w.title}</Link>
                  </h3>
                  <p>{w.summary}</p>
                  <span className="card__more" aria-hidden="true">
                    Details <ArrowRight />
                  </span>
                </article>
              </li>
            ))}
          </ul>
          <p className="note" data-reveal>
            Workshop dates change through the year — upcoming dates and fees are confirmed on enquiry.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split split--top">
          <div data-reveal data-pin>
            <h2>Good to know</h2>
          </div>
          <div data-reveal>
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand title="Hear about the next workshop" text="Tell us which sessions interest you and we will share the upcoming dates." />
    </>
  );
}
