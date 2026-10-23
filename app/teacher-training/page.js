import Link from '@/components/Link';
import PageHeader from '@/components/PageHeader';
import Picture from '@/components/Picture';
import CtaBand from '@/components/CtaBand';
import { ArrowRight } from '@/components/Icons';
import { courses, groups, catalogue } from '@/data/courses';

export const metadata = {
  title: 'Yoga Teacher Training in Bali',
  description:
    'Multi-style, Kundalini and specialty yoga teacher trainings in Ubud, Bali — from 50 hour courses to the complete 500 hour journey.',
  alternates: { canonical: '/teacher-training' },
};

export default function TrainingHub() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Teacher Training' }]}
        title="Yoga teacher training in Ubud"
        lead="Traditional, residential trainings for aspiring teachers and devoted practitioners — taught in small groups in the spiritual heart of Bali."
        image="/img/header/training"
        imageAlt="Trainees in white with marigold garlands gathered around a ceremonial fire"
      >
        <div className="btn-row">
          <a href="#courses" className="btn btn--saffron">
            Browse courses <ArrowRight />
          </a>
          <Link href="/workshops/teacher-training-intro" className="btn btn--ghost">
            Try the intro workshop
          </Link>
        </div>
      </PageHeader>

      <section className="section bg-paper" id="courses">
        <div className="container">
          {Object.entries(groups).map(([key, g]) => {
            const built = courses.filter((c) => c.group === key);
            const more = catalogue.filter((c) => c.group === key && !c.slug);
            return (
              <div className="group" key={key}>
                <div className="group__intro" data-reveal data-pin>
                  <h2>{g.title}</h2>
                  <p>{g.text}</p>
                </div>
                <div className="group__body">
                  <ul className="card-grid" data-stagger>
                    {built.map((c) => (
                      <li key={c.slug}>
                        <article className="card">
                          <div className="card__media">
                            <Picture src={c.image} alt="" preset="hero" widths={[720]} sizes="(min-width: 1000px) 30vw, (min-width: 640px) 45vw, 100vw" />
                          </div>
                          <div className="card__meta">
                            <span>{c.hours} hours</span>
                            <span>{c.facts[1].value}</span>
                          </div>
                          <h3>
                            <Link href={`/teacher-training/${c.slug}`}>{c.title}</Link>
                          </h3>
                          <p>{c.summary}</p>
                          <span className="card__more" aria-hidden="true">
                            View course <ArrowRight />
                          </span>
                        </article>
                      </li>
                    ))}
                  </ul>
                  {more.length > 0 && (
                    <div className="also-list" data-reveal>
                      <h3>Also offered</h3>
                      <ul>
                        {more.map((m) => (
                          <li key={m.title}>
                            <span>
                              {m.title}
                              {!m.title.startsWith(String(m.hours)) && ` · ${m.hours} hours`}
                            </span>
                            <Link href="/contact?interest=other-course">Enquire</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section bg-ink">
        <div className="container split">
          <div data-reveal data-pin>
            <h2>Not sure which course is right?</h2>
          </div>
          <div data-reveal>
            <p className="lead" style={{ color: 'var(--muted-on-dark)', marginBottom: '2rem' }}>
              Start with a 200 hour training if you are new to teaching; choose the 300 hour once you have completed it, or
              commit to the full 500 hours in one immersion. The introduction workshop is a good place to ask questions
              and meet the trainers.
            </p>
            <div className="btn-row">
              <Link href="/teacher-training/200-hour-yoga" className="btn btn--saffron">
                The 200 hour course <ArrowRight />
              </Link>
              <Link href="/workshops/teacher-training-intro" className="btn btn--ghost">
                Introduction workshop
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Talk to us about training" />
    </>
  );
}
