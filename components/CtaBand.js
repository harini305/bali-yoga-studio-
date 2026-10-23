import Link from '@/components/Link';
import { ArrowRight } from './Icons';

export default function CtaBand({
  title = 'Begin your practice in Ubud',
  text = 'Tell us what you are looking for and the studio team will help you choose a class, course or retreat.',
  primary = { label: 'Send an enquiry', href: '/contact' },
  secondary,
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band__grid" data-reveal>
        <div>
          <h2>{title}</h2>
          {text && <p>{text}</p>}
        </div>
        <div className="btn-row">
          <Link href={primary.href} className="btn">
            {primary.label} <ArrowRight />
          </Link>
          {secondary && (
            <Link href={secondary.href} className="btn btn--ghost">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
