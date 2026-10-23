import { notFound } from 'next/navigation';
import WorkshopTemplate from '@/components/WorkshopTemplate';
import { workshops, getWorkshop } from '@/data/workshops';

export const dynamicParams = false;

export function generateStaticParams() {
  return workshops.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const workshop = getWorkshop(slug);
  if (!workshop) return {};
  return {
    title: workshop.meta.title,
    description: workshop.meta.description,
    alternates: { canonical: `/workshops/${slug}` },
    openGraph: { title: workshop.meta.title, description: workshop.meta.description, images: [`${workshop.image}.webp`] },
  };
}

export default async function WorkshopPage({ params }) {
  const { slug } = await params;
  const workshop = getWorkshop(slug);
  if (!workshop) notFound();
  return <WorkshopTemplate workshop={workshop} />;
}
