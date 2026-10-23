import { notFound } from 'next/navigation';
import RetreatTemplate from '@/components/RetreatTemplate';
import { retreats, getRetreat } from '@/data/retreats';

export const dynamicParams = false;

export function generateStaticParams() {
  return retreats.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const retreat = getRetreat(slug);
  if (!retreat) return {};
  return {
    title: retreat.meta.title,
    description: retreat.meta.description,
    alternates: { canonical: `/retreats/${slug}` },
    openGraph: { title: retreat.meta.title, description: retreat.meta.description, images: [`${retreat.image}.webp`] },
  };
}

export default async function RetreatPage({ params }) {
  const { slug } = await params;
  const retreat = getRetreat(slug);
  if (!retreat) notFound();
  return <RetreatTemplate retreat={retreat} />;
}
