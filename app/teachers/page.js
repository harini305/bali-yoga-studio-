import PageHeader from '@/components/PageHeader';
import Teachers from '@/components/Teachers';
import CtaBand from '@/components/CtaBand';
import { teachers } from '@/data/teachers';

export const metadata = {
  title: 'Our Teachers',
  description:
    'Meet the teachers of Bali Yoga Studio in Ubud — specialists in Hatha, Ashtanga, Vinyasa, Kundalini, pranayama, meditation, philosophy and healing.',
  alternates: { canonical: '/teachers' },
};

export default function TeachersPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'About', href: '/about' }, { label: 'Teachers' }]}
        title="Our teachers"
        lead="Experienced teachers of Hatha, Ashtanga, Vinyasa, Kundalini, meditation, philosophy and healing — each bringing a lifetime of practice to the shala."
        image="/img/header/teachers"
        imageAlt="Students listening to a teacher in the bright main studio"
      />
      <section className="section bg-paper">
        <div className="container">
          <Teachers people={teachers} showBio />
        </div>
      </section>
      <CtaBand title="Learn with the team" text="Join a daily class, or ask about which teachers lead the upcoming trainings." secondary={{ label: 'Daily classes', href: '/daily-classes' }} />
    </>
  );
}
