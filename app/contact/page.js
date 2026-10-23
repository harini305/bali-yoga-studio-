import { Suspense } from 'react';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import { MapFacade } from '@/components/Facades';
import { site } from '@/data/site';

export const metadata = {
  title: 'Contact & Enquiries',
  description: 'Contact Bali Yoga Studio in Ubud by email or WhatsApp, find the studio on Jl. Bisma, and send an enquiry about classes, courses and retreats.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Contact' }]}
        title="Get in touch"
        lead="Need help planning your visit or choosing a class? The studio team is here to guide you."
        image="/img/header/contact"
        imageAlt="A student meditating with eyes closed in the bright studio"
      />

      <section className="section bg-paper">
        <div className="container split split--top">
          <div data-reveal data-pin>
            <h2>Visit the studio</h2>
            <dl className="contact-list">
              <div>
                <dt>Address</dt>
                <dd>{site.address}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>Phone & WhatsApp</dt>
                <dd>
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Follow</dt>
                <dd>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                  {' · '}
                  <a href={site.youtube} target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                </dd>
              </div>
            </dl>
            <MapFacade src={site.mapEmbed} address={site.address} link={site.mapsUrl} />
          </div>
          {/* Not pinned: a form should stay put while someone types in it. */}
          <div data-reveal>
            <h2 style={{ marginBottom: '1rem' }}>Send an enquiry</h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>
              Tell us what you are interested in, your preferred dates and anything else we should know.
            </p>
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
