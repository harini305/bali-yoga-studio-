import Link from '@/components/Link';
import PageHeader from '@/components/PageHeader';
import Picture from '@/components/Picture';
import Teachers from '@/components/Teachers';
import CtaBand from '@/components/CtaBand';
import { VideoFacade } from '@/components/Facades';
import { ArrowRight } from '@/components/Icons';
import { getTeachers } from '@/data/teachers';

export const metadata = {
  title: 'About the Studio',
  description:
    'Bali Yoga Studio is a community in Ubud built on authentic yoga and healing — a second home where ancient tradition meets a warm, modern approach.',
  alternates: { canonical: '/about' },
};

const values = [
  { title: 'Authentic guidance', text: 'Experienced teachers who bring deep philosophical understanding to every class.' },
  { title: 'An inclusive space', text: 'No judgement and no competition — a safe place for everyone to grow.' },
  { title: 'A holistic approach', text: 'Not just exercise, but a balanced way of living for body, mind and spirit.' },
  { title: 'A true sanctuary', text: 'A clean, beautiful, light-filled studio that feels like a retreat in itself.' },
];

export default function About() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'About' }]}
        title="A community built on healing"
        lead="We don’t focus on how flexible your body is, but on how open your heart becomes."
        image="/img/header/about"
        imageAlt="Guests and teachers seated together in a relaxed circle at the studio"
      />

      <section className="section bg-paper">
        <div className="container split split--media-narrow">
          <div className="media media--arch ratio-4-5" data-img-reveal>
            <Picture src="/img/about/story" alt="Teachers and guests gathered in the stone-walled hall during a ceremony" sizes="(min-width: 900px) 440px, 100vw" />
          </div>
          <div data-reveal>
            <h2>Our story</h2>
            <div className="prose">
              <p>
                At Bali Yoga Studio we aren’t just a place to practise asanas; we are a community that believes in the power
                of healing. Nestled in the heart of Bali, the studio is designed to be your second home — a space to leave
                your worries at the door and reconnect with your true self.
              </p>
              <p>
                We believe mindfulness is not a luxury but a way of living. Whether you are a beginner or a seasoned yogi,
                our aim is to help you find balance through teachings rooted in traditional wisdom and enriched by the
                sacred energy of the Island of the Gods.
              </p>
              <p>
                What makes us different is the energy: natural light, the scent of incense, and teachers who actually
                listen to your story. We combine ancient tradition with a friendly, modern approach, so everyone feels
                welcome.
              </p>
            </div>
            <figure className="quote-mark">
              <blockquote>Yoga is the journey of the self, through the self, to the self.</blockquote>
              <figcaption>Bhagavad Gita</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--split" data-reveal>
            <h2>Why practise here</h2>
            <p>Four things guests tell us they value most about the studio.</p>
          </div>
          <ul className="promise promise--light" data-stagger>
            {values.map((v) => (
              <li key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-ink">
        <div className="container split">
          <div data-reveal data-pin>
            <h2>Experience the power of yoga</h2>
            <p className="lead" style={{ color: 'var(--muted-on-dark)' }}>
              Yoga is more than movement — it is a journey towards balance, awareness and transformation. Each session is
              designed to strengthen the body, calm the mind and awaken the spirit.
            </p>
          </div>
          <div data-reveal>
            <VideoFacade
              id="Ul4fpLB1lgo"
              title="Experience the power of yoga at Bali Yoga Studio"
              poster="/img/about/video-poster"
              posterAlt="A class practising in an open-air jungle shala"
            />
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container">
          <div className="section-head section-head--split" data-reveal>
            <h2>The teachers</h2>
            <p>
              A team trained in Rishikesh, Bali and beyond.{' '}
              <Link href="/teachers" className="text-link">
                Meet everyone <ArrowRight width="14" height="14" />
              </Link>
            </p>
          </div>
          <Teachers people={getTeachers(['ashutosh', 'naveen', 'hari-dharma', 'akshant'])} />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div data-reveal data-pin>
            <h2>A green corner of Ubud</h2>
            <p className="lead" style={{ marginBottom: '1.5rem' }}>
              Practice spaces open to the garden, a calm place to eat, and rooms for training guests — all a short walk from
              the centre of Ubud.
            </p>
            <Link href="/gallery" className="btn">
              Browse the gallery <ArrowRight />
            </Link>
          </div>
          <div className="media ratio-4-3" data-parallax>
            <Picture src="/img/about/garden" alt="An open-air pavilion with white curtains among tropical trees" sizes="(min-width: 900px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
