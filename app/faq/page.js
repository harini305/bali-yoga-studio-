import PageHeader from '@/components/PageHeader';
import Accordion from '@/components/Accordion';
import CtaBand from '@/components/CtaBand';
import { faqGroups } from '@/data/faqs';

export const metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers about travelling to Ubud, food and accommodation, courses, certification, health and payment at Bali Yoga Studio.',
  alternates: { canonical: '/faq' },
};

const slug = (s) => s.toLowerCase().replace(/[^a-z]+/g, '-');

export default function FaqPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'About', href: '/about' }, { label: 'FAQ' }]}
        title="Questions, answered"
        lead="Everything you need to know before you travel — from airport transfers to what to pack."
        image="/img/header/faq"
        imageAlt="Students seated on cushions listening during a class"
      />

      <section className="section bg-paper">
        <div className="container">
          <nav aria-label="FAQ topics" style={{ marginBottom: '1rem' }}>
            <ul className="related">
              {faqGroups.map((g) => (
                <li key={g.title}>
                  <a href={`#${slug(g.title)}`}>{g.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          {faqGroups.map((g) => (
            <div className="group" id={slug(g.title)} key={g.title}>
              <div className="group__intro" data-reveal data-pin>
                <h2>{g.title}</h2>
              </div>
              <div data-reveal>
                <Accordion items={g.items.map((f) => ({ title: f.q, content: <p>{f.a}</p> }))} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Still have a question?" text="Send us a note and the studio team will get back to you." secondary={{ label: 'Daily classes', href: '/daily-classes' }} />
    </>
  );
}
