import { notFound } from 'next/navigation';
import CourseTemplate from '@/components/CourseTemplate';
import { courses, getCourse } from '@/data/courses';

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: course.meta.title,
    description: course.meta.description,
    alternates: { canonical: `/teacher-training/${slug}` },
    openGraph: { title: course.meta.title, description: course.meta.description, images: [`${course.image}.webp`] },
  };
}

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  return <CourseTemplate course={course} />;
}
