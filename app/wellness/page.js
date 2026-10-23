import Link from '@/components/Link';
import PageHeader from '@/components/PageHeader';
import Picture from '@/components/Picture';
import CtaBand from '@/components/CtaBand';
import { ArrowRight } from '@/components/Icons';
import { treatments } from '@/data/wellness';

export const metadata = {
  title: 'Ayurveda Wellness Spa in Ubud',
  description:
    'Abhyanga, Balinese, Thai and deep tissue massage, sound healing, Reiki and Ayurvedic facials at the Bali Yoga Studio wellness spa in Ubud.',
  alternates: { canonical: '/wellness' },
};

export default function Wellness() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Wellness' }]}
        title="Ayurveda wellness spa"
        lead="Let the healing touch of our therapists melt away your worries. Organic herbal oils and centuries-old techniques for deep relaxation and renewed vitality."
        image="/img/header/wellness"
        imageAlt="A therapist pressing a warm herbal compress onto a guest’s back"
      />

      <section className="section bg-paper">
        <div className="container">
          {treatments.map((group) => (
            <div className="category-group" key={group.category}>
              <h2 className="category-title" data-reveal>
                {group.category}
              </h2>
              <ul className="treatments" data-stagger>
                {group.items.map((t) => (
                  <li className="treatment" key={t.name}>
                    <div className="media">
                      <Picture src={t.image.replace('.webp', '')} alt="" sizes="120px" />
                    </div>
                    <div>
                      <h3>{t.name}</h3>
                      <p className="treatment__meta">
                        {t.price} <span>· {t.duration}</span>
                      </p>
                      <p>{t.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="note" data-reveal>
            Prices as published by the studio; please confirm when booking.
          </p>
        </div>
      </section>

      <section className="section bg-ink">
        <div className="container split">
          <div data-reveal data-pin>
            <h2>Looking for a deeper cleanse?</h2>
            <p className="lead" style={{ color: 'var(--muted-on-dark)', marginBottom: '2rem' }}>
              Our Panchakarma retreat combines an Ayurvedic constitution analysis with daily treatments, meditative yoga and
              personalised meals.
            </p>
            <Link href="/retreats/panchakarma-detox" className="btn btn--saffron">
              Panchakarma Detox Retreat <ArrowRight />
            </Link>
          </div>
          <div className="media ratio-4-3" data-img-reveal>
            <Picture src="/img/retreats/panchakarma" preset="card" alt="A therapist applying a herbal treatment" sizes="(min-width: 900px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      <CtaBand title="Book a treatment" text="Tell us which treatment you would like and when, and the team will confirm availability." />
    </>
  );
}
