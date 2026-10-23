import PageHeader from '@/components/PageHeader';
import Gallery from '@/components/Gallery';
import CtaBand from '@/components/CtaBand';

export const metadata = {
  title: 'Gallery',
  description: 'Photos of classes, events, food, rooms and wellness treatments at Bali Yoga Studio in Ubud, Bali.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'About', href: '/about' }, { label: 'Gallery' }]}
        title="Moments from the studio"
        lead="Classes in the shala, community gatherings, shared meals and quiet rooms — a glimpse of life at Bali Yoga Studio."
        image="/img/header/gallery"
        imageAlt="An aerial view of students practising on mats laid out on a black-sand beach"
      />
      <section className="section bg-paper">
        <div className="container">
          <Gallery />
        </div>
      </section>
      <CtaBand title="See it for yourself" text="Join a daily class or plan a longer stay — we would love to welcome you." />
    </>
  );
}
