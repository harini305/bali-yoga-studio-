import PageHeader from '@/components/PageHeader';
import Picture from '@/components/Picture';
import SubNav from '@/components/SubNav';
import CtaBand from '@/components/CtaBand';
import { ArrowRight } from '@/components/Icons';
import { dropInSchedule, passes, passNotes, styles } from '@/data/classes';

export const metadata = {
  title: 'Daily Drop-in Yoga Classes in Ubud',
  description:
    'Drop-in Hatha, aerial, Pilates, meditation and sound healing classes in Ubud. See the weekly schedule and class card prices at Bali Yoga Studio.',
  alternates: { canonical: '/daily-classes' },
};

const why = [
  { title: 'Certified teachers', text: 'Learn from instructors with years of dedicated practice and teaching.' },
  { title: 'Authentic techniques', text: 'Traditional practices, mindfully adapted for every level.' },
  { title: 'Small groups', text: 'Personal attention and careful alignment in intimate classes.' },
  { title: 'A serene setting', text: 'Practice surrounded by the calm and natural beauty of Ubud.' },
];

export default function DailyClasses() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Daily Classes' }]}
        title={
          <>
            Daily <span style={{ whiteSpace: 'nowrap' }}>drop-in</span> classes
          </>
        }
        lead="Yoga should fit into your life, not the other way round. Join a class from early morning until evening, whenever you feel the call."
        image="/img/header/classes"
        imageAlt="Students seated in prayer pose during a class in the bright studio"
      >
        <div className="btn-row">
          <a href="#schedule" className="btn btn--saffron">
            See the schedule <ArrowRight />
          </a>
          <a href="#prices" className="btn btn--ghost">
            Prices
          </a>
        </div>
      </PageHeader>

      <SubNav
        links={[
          { id: 'schedule', label: 'Schedule' },
          { id: 'prices', label: 'Prices' },
          { id: 'why', label: 'Why practise here' },
        ]}
      />

      <section className="section bg-ink" id="schedule">
        <div className="container split split--top">
          <div data-reveal data-pin>
            <h2>Weekly schedule</h2>
            <p className="lead" style={{ color: 'var(--muted-on-dark)', marginBottom: '2rem' }}>
              Every class runs on its own days. Simply arrive a little early — mats and props are provided.
            </p>
            <h3 className="list-title">Styles we teach</h3>
            <ul className="chips">
              {styles.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <ul className="timetable" data-stagger>
            {dropInSchedule.map((c) => (
              <li key={c.name}>
                <span className="timetable__time">{c.time}</span>
                <span className="timetable__name">{c.name}</span>
                <span className="timetable__meta">
                  {c.days} · {c.length}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="prices">
        <div className="container">
          <div className="section-head section-head--split" data-reveal>
            <h2>Class prices</h2>
            <p>Flexible options for every practitioner, from a single discovery class to a month of unlimited practice.</p>
          </div>
          <ul className="passes" data-stagger>
            {passes.map((p) => (
              <li className={`pass${p.featured ? ' pass--featured' : ''}`} key={p.name}>
                <h3>{p.name}</h3>
                <span className="pass__price">{p.price}</span>
                <p>{p.note}</p>
              </li>
            ))}
          </ul>
          <div className="callout" style={{ marginTop: '2.5rem' }} data-reveal>
            <h3>Good to know</h3>
            <ul className="ticks">
              {passNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-paper" id="why">
        <div className="container split split--media-narrow">
          <div className="media ratio-4-5" data-img-reveal>
            <Picture src="/img/classes/why" alt="A student in a seated meditation in the studio" sizes="(min-width: 900px) 440px, 100vw" />
          </div>
          <div>
            <div data-reveal>
              <h2>Rooted in authentic yoga</h2>
            </div>
            <ul className="promise promise--light" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))' }} data-stagger>
              {why.map((w) => (
                <li key={w.title}>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Planning a longer stay?"
        text="Ask about class cards, private sessions or combining classes with a retreat."
        secondary={{ label: 'Teacher training', href: '/teacher-training' }}
      />
    </>
  );
}
