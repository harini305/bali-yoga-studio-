import Link from '@/components/Link';
import Picture from '@/components/Picture';
import WellnessTabs from '@/components/WellnessTabs';
import { ArrowRight } from '@/components/Icons';
import { getCourse } from '@/data/courses';
import { retreats } from '@/data/retreats';
import { workshops } from '@/data/workshops';
import { dropInSchedule } from '@/data/classes';
import { treatments } from '@/data/wellness';
import { site } from '@/data/site';

export const metadata = {
  title: { absolute: 'Bali Yoga Studio — Yoga, Teacher Training & Retreats in Ubud' },
  description:
    'A sanctuary for authentic yoga and holistic healing in Ubud, Bali: daily drop-in classes, yoga teacher training, retreats, workshops and Ayurvedic wellness.',
};

const programmes = [
  { label: 'Daily yoga classes', href: '/daily-classes' },
  { label: 'Teacher training', href: '/teacher-training' },
  { label: 'Healing retreats', href: '/retreats' },
  { label: 'Workshops & kirtan', href: '/workshops' },
  { label: 'Reiki & sound healing', href: '/teacher-training/sound-healing' },
  { label: 'Massage & Ayurveda', href: '/wellness' },
];

const featured = ['200-hour-yoga', '300-hour-yoga', '500-hour-yoga'].map(getCourse);
const featuredRetreats = ['women-wellness', 'one-day-wellness', 'half-day-healing', 'senior-wellness'].map((s) =>
  retreats.find((r) => r.slug === s)
);

const reviews = [
  {
    name: 'Sherry Saifullah',
    from: 'New Zealand',
    text: 'I attended the opening day ceremony and it was so wholesome — I felt transported to India for a while. I also took Yoga Nidra classes there, and that was probably the best time I’ve had in Bali. It’s a very calm and relaxing space and you can really feel the love that’s been put into it.',
  },
  {
    name: 'Sofia Schneider',
    from: 'Germany',
    text: 'A wonderful studio with very experienced and amazing teachers. From the moment you step into the place you can tell it has been designed with attention to detail and warmth. I hope to come back if I am ever in Ubud again.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <h1 className="hero__title">
              <span data-hero-item>Find your</span>
              <span data-hero-item>
                <em>inner calm</em> in Ubud
              </span>
            </h1>
            <p className="hero__lead" data-hero-item>
              In the middle of life’s chaos, a quiet corner to breathe, move and simply be — with daily classes, teacher
              training and healing retreats in the heart of Bali.
            </p>
            <div className="btn-row" data-hero-item>
              <Link href="/teacher-training" className="btn btn--saffron">
                Explore teacher training <ArrowRight />
              </Link>
              <Link href="/daily-classes" className="btn btn--ghost">
                Drop in to a class
              </Link>
            </div>
            <div className="today" data-hero-item>
              <span className="today__label">At the shala every day</span>
              {dropInSchedule
                .filter((c) => c.days === 'Every day')
                .map((c) => (
                  <div className="today__row" key={c.name}>
                    <span>{c.time}</span>
                    <span>{c.name}</span>
                    <span>{c.length}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="hero__media">
            <div className="hero__outline" aria-hidden="true" />
            <div className="hero__arch" data-hero-media>
              <Picture
                src="/img/home/hero"
                preset="arch"
                alt="A teacher meditating on a low stage before the studio’s golden triangle mural"
                sizes="(min-width: 960px) 520px, 90vw"
                priority
              />
            </div>
            <div className="hero__inset" data-hero-inset>
              <Picture
                src="/img/home/kirtan"
                alt="Musicians leading kirtan in front of the stone logo wall"
                sizes="240px"
                width={720}
                height={540}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container split split--top">
          <div data-reveal data-pin>
            <h2>A second home for seekers from around the world</h2>
          </div>
          <div data-reveal>
            <p className="intro__statement">
              Nestled in the lush, spiritual heart of Ubud, our shala is more than a place to practise asanas. It is a
              community built on authentic healing — somewhere to leave your worries at the door.
            </p>
            <ul className="programmes" data-stagger>
              {programmes.map((p) => (
                <li key={p.href}>
                  <Link href={p.href}>
                    {p.label} <ArrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Teacher training */}
      <section className="section bg-paper">
        <div className="container">
          <div className="section-head section-head--split" data-reveal>
            <h2>Train to teach, the traditional way</h2>
            <p>
              Residential trainings in Hatha and Ashtanga Vinyasa, rooted in philosophy, breath and meditation — from
              your first 200 hours to a complete 500.
            </p>
          </div>
          <ul className="course-rows" data-stagger>
            {featured.map((c) => (
              <li key={c.slug}>
                <Link href={`/teacher-training/${c.slug}`} className="course-row">
                  <span className="course-row__hours" aria-hidden="true">
                    {c.hours}
                  </span>
                  <div className="course-row__body">
                    <h3>{c.title}</h3>
                    <p>{c.summary}</p>
                  </div>
                  <span className="course-row__fee">
                    <small>Tuition</small>
                    {c.fees.usd}
                  </span>
                  <span className="course-row__thumb">
                    <Picture src={c.image} alt="" preset="hero" widths={[720]} sizes="120px" />
                  </span>
                  <span className="course-row__arrow" aria-hidden="true">
                    <ArrowRight />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="also" data-reveal>
            Also offered: <Link href="/teacher-training/200-hour-kundalini">Kundalini</Link>,{' '}
            <Link href="/teacher-training/yin-yoga">Yin</Link>, <Link href="/teacher-training/aerial-yoga">Aerial</Link> and{' '}
            <Link href="/teacher-training/sound-healing">Sound Healing</Link> trainings.{' '}
            <Link href="/teacher-training" className="text-link">
              See all courses <ArrowRight width="14" height="14" />
            </Link>
          </p>
        </div>
      </section>

      {/* Drop-in schedule */}
      <section className="section bg-ink">
        <div className="container schedule-home">
          <div className="media" data-parallax>
            <Picture
              src="/img/home/schedule"
              preset="tall"
              alt="Students stretching in the shala beneath the painted Bali Yoga Studio sign"
              sizes="(min-width: 900px) 40vw, 100vw"
            />
          </div>
          <div>
            <div data-reveal>
              <h2 style={{ marginBottom: '1rem' }}>Drop in to a class</h2>
              <p className="lead" style={{ color: 'var(--muted-on-dark)', marginBottom: '2rem' }}>
                No booking ahead, no experience needed. Each class runs on its own days — single classes from IDR 150K.
              </p>
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
            <div className="btn-row" style={{ marginTop: '2rem' }} data-reveal>
              <Link href="/daily-classes" className="btn btn--saffron">
                Class passes & prices <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Retreats */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--split" data-reveal>
            <h2>Retreats to rest, heal and reset</h2>
            <p>
              From a single restorative morning to a full Ayurvedic cleanse — programmes that nourish body, mind and
              spirit.{' '}
              <Link href="/retreats" className="text-link">
                All retreats <ArrowRight width="14" height="14" />
              </Link>
            </p>
          </div>
          <ul className="mosaic" data-stagger>
            {featuredRetreats.map((r, i) => (
              <li key={r.slug}>
                <Link href={`/retreats/${r.slug}`} className="tile">
                  <Picture
                    src={r.image}
                    alt=""
                    preset={r.image.endsWith('women') ? 'hero' : 'card'}
                    sizes={i === 0 ? '(min-width: 760px) 58vw, 100vw' : '(min-width: 760px) 42vw, 100vw'}
                  />
                  <div className="tile__body">
                    <span className="tile__tag">{r.format}</span>
                    <h3>{r.cardTitle}</h3>
                    {i < 2 && <p>{r.summary}</p>}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Wellness */}
      <section className="section bg-paper">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Ayurveda wellness spa</h2>
          </div>
          <WellnessTabs groups={treatments} />
          <p style={{ marginTop: '2rem' }} data-reveal>
            <Link href="/wellness" className="text-link">
              The full treatment menu <ArrowRight width="14" height="14" />
            </Link>
          </p>
        </div>
      </section>

      {/* Workshops */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--split" data-reveal>
            <h2>Workshops & gatherings</h2>
            <p>
              Evenings of kirtan, slow Yin afternoons and focused sessions on breath and Ayurveda — open to everyone.
            </p>
          </div>
          <ul className="rail" data-stagger>
            {workshops.slice(0, 3).map((w) => (
              <li key={w.slug}>
                <article className="card">
                  <div className="card__media">
                    <Picture src={w.image} alt="" preset="hero" widths={[720]} sizes="(min-width: 760px) 30vw, 78vw" />
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
        </div>
      </section>

      {/* Food & stay */}
      <section className="section bg-sand">
        <div className="container">
          <div className="section-head section-head--split" data-reveal>
            <h2>Nourishing food, peaceful rooms</h2>
            <div>
              <p>
                Wholesome vegetarian meals inspired by Ayurvedic recipes and local Balinese ingredients, and simple, calm
                rooms for training and retreat guests.
              </p>
              <div className="btn-row" style={{ marginTop: '1.5rem' }}>
                <Link href="/gallery" className="btn">
                  See the studio <ArrowRight />
                </Link>
                <a href={site.cafeUrl} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                  Visit the café site
                </a>
              </div>
            </div>
          </div>

          <div className="stay-grid" data-stagger>
            <figure className="stay-figure stay-figure--lead">
              <div className="media">
                <Picture
                  src="/img/home/food"
                  preset="card"
                  alt="A vegetarian plate of rice, curry and fresh salad"
                  sizes="(min-width: 900px) 56vw, 100vw"
                />
              </div>
              <figcaption>
                <h3>The café</h3>
                <p>Vegetarian and vegan plates inspired by Ayurveda and local Balinese flavours.</p>
              </figcaption>
            </figure>
            <figure className="stay-figure">
              <div className="media">
                <Picture src="/img/home/room" alt="A private room with a four-poster bed" sizes="(min-width: 900px) 40vw, 50vw" />
              </div>
              <figcaption>
                <h3>Rooms</h3>
                <p>Shared or private, for training and retreat guests.</p>
              </figcaption>
            </figure>
            <figure className="stay-figure">
              <div className="media">
                <Picture
                  src="/img/home/garden"
                  alt="An open-air pavilion with white curtains among tropical trees"
                  sizes="(min-width: 900px) 40vw, 50vw"
                />
              </div>
              <figcaption>
                <h3>The garden</h3>
                <p>Open-air pavilions to rest between sessions.</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>In our guests’ words</h2>
          </div>
          <div className="quotes" data-stagger>
            {reviews.map((r) => (
              <figure className="quote" key={r.name}>
                <blockquote>
                  <p>“{r.text}”</p>
                </blockquote>
                <figcaption>
                  {r.name}
                  <span>{r.from}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Visit: with the footer, fills the final screen */}
      <section className="cta-band finale">
        <div className="container finale__grid">
          <div className="finale__content">
            <div data-reveal>
              <h2>Come and practise with us</h2>
              <p>
                Questions about a course, retreat or class? The studio team is happy to help you plan your visit to Ubud.
              </p>
              <div className="btn-row">
                <Link href="/contact" className="btn">
                  Send an enquiry <ArrowRight />
                </Link>
                <Link href="/daily-classes" className="btn btn--ghost">
                  Drop in to a class
                </Link>
              </div>
            </div>
            <dl className="visit" data-reveal>
              <div>
                <dt>Studio</dt>
                <dd>{site.addressShort}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>WhatsApp</dt>
                <dd>
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="finale__media" data-img-reveal>
            <Picture
              src="/img/home/finale"
              widths={[900, 560]}
              alt="Teachers and guests seated together in a circle at the studio"
              sizes="(min-width: 900px) 34vw, 0px"
            />
          </div>
        </div>
      </section>
    </>
  );
}
