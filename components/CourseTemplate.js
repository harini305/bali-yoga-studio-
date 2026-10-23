import Link from '@/components/Link';
import PageHeader from './PageHeader';
import Picture from './Picture';
import Accordion from './Accordion';
import SubNav from './SubNav';
import Teachers from './Teachers';
import CtaBand from './CtaBand';
import { ArrowRight } from './Icons';
import { courses } from '@/data/courses';
import { getTeachers } from '@/data/teachers';

export default function CourseTemplate({ course: c }) {
  const enquire = `/contact?interest=${c.slug}`;
  const links = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    c.schedule && { id: 'day', label: 'A typical day' },
    { id: 'fees', label: c.fees ? 'Fees & rooms' : 'Fees & dates' },
    { id: 'teachers', label: 'Teachers' },
    { id: 'faq', label: 'FAQ' },
  ].filter(Boolean);
  const related = courses.filter((o) => o.slug !== c.slug).slice(0, 6);

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Teacher Training', href: '/teacher-training' }, { label: c.cardTitle }]}
        title={c.title}
        lead={c.lead}
        image={c.image}
        imageAlt={c.imageAlt}
      >
        <div className="btn-row">
          <Link href={enquire} className="btn btn--saffron">
            Enquire about this course <ArrowRight />
          </Link>
          <a href="#curriculum" className="btn btn--ghost">
            View curriculum
          </a>
        </div>
      </PageHeader>

      <section className="facts" aria-label="Course at a glance">
        <div className="container">
          <ul className="facts__list">
            {c.facts.map((f) => (
              <li className="facts__item" key={f.label}>
                <span className="facts__label">{f.label}</span>
                <span className="facts__value">{f.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SubNav links={links} />

      <section className="section" id="overview">
        <div className="container split split--top">
          <div data-reveal data-pin>
            <h2>About the course</h2>
            <div className="prose">
              {c.overview.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <h3 className="list-title">Who it’s for</h3>
              <ul className="ticks">
                {c.forWho.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="media ratio-4-3" data-img-reveal>
              <Picture src={c.image2} alt={c.image2Alt} preset="card" sizes="(min-width: 900px) 45vw, 100vw" />
            </div>
            {(c.eligibility || c.benefits) && (
              <div className="callout" style={{ marginTop: '2rem' }} data-reveal>
                <h3>{c.eligibility ? 'Before you join' : 'What you gain'}</h3>
                <ul className="ticks">
                  {(c.eligibility || c.benefits).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section bg-paper" id="curriculum">
        <div className="container split split--top">
          <div data-reveal data-pin>
            <h2>What you will study</h2>
            <p className="lead">
              {c.modules.length} areas of study, balancing daily practice with theory. Open each one to see the topics
              covered.
            </p>
            {c.assessment && (
              <div style={{ marginTop: '2rem' }}>
                <h3 className="list-title">How you are assessed</h3>
                <ul className="ticks">
                  {c.assessment.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div data-reveal>
            <Accordion
              defaultOpen={0}
              items={c.modules.map((m) => ({
                title: m.title,
                content: (
                  <>
                    <p>{m.text}</p>
                    <ul className="topics">
                      {m.topics.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </>
                ),
              }))}
            />
          </div>
        </div>
      </section>

      {c.schedule && (
        <section className="section bg-ink" id="day">
          <div className="container">
            <div className="section-head section-head--split" data-reveal>
              <h2>A typical training day</h2>
              <p>Days begin before sunrise and close after an evening practice, with time for study and rest in between.</p>
            </div>
            <ol className="day day--two" data-stagger>
              {c.schedule.map((s) => (
                <li key={s.time + s.activity}>
                  <time>{s.time}</time>
                  <span>{s.activity}</span>
                </li>
              ))}
            </ol>
            <p className="note">Timings and modules may vary with the season.</p>
          </div>
        </section>
      )}

      <section className="section" id="fees">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>{c.fees ? 'Fees & accommodation' : 'Fees & dates'}</h2>
          </div>
          {c.fees ? (
            <div className="fee-panel" data-reveal>
              <div>
                <span className="fee-panel__label">Tuition</span>
                <span className="fee-panel__amount">{c.fees.tuition}</span>
                <span className="fee-panel__usd">approx. {c.fees.usd}</span>
                <p className="note">
                  Accommodation is booked separately. Fees are shown as published by the studio — please confirm current
                  fees and start dates when you enquire.
                </p>
                <Link href={enquire} className="btn" style={{ marginTop: '1.5rem' }}>
                  Ask about dates <ArrowRight />
                </Link>
              </div>
              <div className="table-wrap">
                <table className="rooms">
                  <caption>Accommodation for the course</caption>
                  <thead>
                    <tr>
                      <th scope="col">Room</th>
                      <th scope="col">IDR</th>
                      <th scope="col">USD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.fees.rooms.map(([room, idr, usd]) => (
                      <tr key={room}>
                        <th scope="row">{room}</th>
                        <td>{idr}</td>
                        <td>{usd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="fee-panel" data-reveal>
              <div>
                <span className="fee-panel__label">Tuition & start dates</span>
                <span className="fee-panel__amount">On enquiry</span>
              </div>
              <div>
                <p className="lead">
                  Current fees, accommodation options and upcoming start dates are confirmed directly by the studio team.
                  Send a short note and they will reply with the details.
                </p>
                <Link href={enquire} className="btn" style={{ marginTop: '1.5rem' }}>
                  Request fees & dates <ArrowRight />
                </Link>
              </div>
            </div>
          )}

          <div className="two-col" style={{ marginTop: '2rem' }} data-stagger>
            <div>
              <h3 className="list-title">Included</h3>
              <ul className="ticks">
                {c.included.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="list-title">What to bring</h3>
              <ul className="ticks ticks--muted">
                {c.bring.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper" id="teachers">
        <div className="container">
          <div className="section-head section-head--split" data-reveal>
            <h2>Learn with</h2>
            <p>
              Teachers who bring years of practice to every class.{' '}
              <Link href="/teachers" className="text-link">
                Meet the full team <ArrowRight width="14" height="14" />
              </Link>
            </p>
          </div>
          <Teachers people={getTeachers(c.teachers)} />
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container split split--top">
          <div data-reveal data-pin>
            <h2>Questions</h2>
            <p className="lead">
              More answers about travel, food and certification on the <Link href="/faq">FAQ page</Link>.
            </p>
          </div>
          <div data-reveal>
            <Accordion items={c.faqs.map((f) => ({ title: f.q, content: <p>{f.a}</p> }))} />
          </div>
        </div>
      </section>

      <section className="related-strip" aria-labelledby="related-title">
        <div className="container" data-reveal>
          <h2 id="related-title">Other trainings</h2>
          <ul className="related">
            {related.map((o) => (
              <li key={o.slug}>
                <Link href={`/teacher-training/${o.slug}`}>{o.cardTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={`Ready to join the ${c.cardTitle}?`}
        text="Send a short enquiry with your preferred dates and experience, and the team will reply with fees and availability."
        primary={{ label: 'Enquire now', href: enquire }}
        secondary={{ label: 'All courses', href: '/teacher-training' }}
      />
    </>
  );
}
