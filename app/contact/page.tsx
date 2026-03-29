import type { Metadata } from 'next';
import { BookingBanner } from '@/components/booking-banner';
import { ContactCards } from '@/components/contact-cards';
import { InquiryForm } from '@/components/inquiry-form';
import { MapPlaceholder } from '@/components/map-placeholder';
import { SectionIntro } from '@/components/section-intro';
import { images, siteConfig } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Contact Drift & Brine Oyster Bar | Book Dinner in Napier',
  description:
    'Contact Drift & Brine Oyster Bar in Ahuriri, Napier for reservations, opening hours, directions, and seafood dining enquiries.',
  keywords: ['contact Drift & Brine Oyster Bar', 'book oyster bar Napier', 'Ahuriri restaurant contact'],
  openGraph: {
    title: 'Contact Drift & Brine Oyster Bar | Book Dinner in Napier',
    description:
      'Get in touch with Drift & Brine Oyster Bar in Ahuriri, Napier for bookings, hours, and directions.',
    url: `${siteConfig.url}/contact/`,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Drift & Brine Oyster Bar | Book Dinner in Napier',
    description:
      'Get in touch with Drift & Brine Oyster Bar in Ahuriri, Napier for bookings, hours, and directions.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: `${siteConfig.url}/contact/` },
};

export default function ContactPage() {
  return (
    <>
      <section className="section-pad-lg pt-36">
        <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="space-y-6">
            <SectionIntro
              eyebrow="Contact"
              title="Contact Drift & Brine Oyster Bar and book dinner in Napier."
              body="If you are planning a dinner, looking for today’s availability, or organising a group booking, everything you need is here."
              as="h1"
            />
          </div>
          <img src={images.contactExterior.src} alt={images.contactExterior.alt} width={images.contactExterior.width} height={images.contactExterior.height} className="h-full max-h-[28rem] w-full rounded-[34px] object-cover shadow-medium" />
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="container-site space-y-10">
          <ContactCards
            items={[
              { title: 'Address', lines: ['4 West Quay, Ahuriri, Napier 4110'] },
              { title: 'Phone', lines: ['+64 6 650 1842'], href: siteConfig.phoneHref },
              { title: 'Email', lines: ['hello@driftandbrine.co.nz'], href: siteConfig.emailHref },
              {
                title: 'Opening Hours',
                lines: ['Wed–Thu 12pm–10pm', 'Fri–Sat 12pm–Late', 'Sun 12pm–8pm', 'Mon–Tue Closed'],
              },
            ]}
          />
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-site space-y-5">
          <MapPlaceholder
            title="Find us in Ahuriri"
            body="A short walk from the waterfront and old warehouse strip, with parking nearby."
            cta={{ label: 'Get Directions', href: siteConfig.directionsUrl }}
          />
          <img src={images.contactStreet.src} alt={images.contactStreet.alt} width={images.contactStreet.width} height={images.contactStreet.height} className="h-60 w-full rounded-[32px] object-cover shadow-soft" />
        </div>
      </section>

      <section className="section-pad bg-primary">
        <div className="container-site grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="space-y-6 text-ivory">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">Booking guidance</p>
              <h2 className="font-heading text-4xl leading-none md:text-[2.75rem]">Reservations are recommended for dinner and weekends.</h2>
              <p className="max-w-[60ch] text-base leading-8 text-ivory/78 md:text-lg">Walk-ins are welcome when space allows. If you are hoping for same-day seating, call us directly for the quickest answer.</p>
            </div>
            <div className="rounded-[28px] border border-ivory/12 bg-ivory/6 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Send an enquiry</h3>
              <p className="mt-3 text-sm leading-7 text-ivory/78">Use the form for reservations, date planning, same-day questions, or group enquiries. We will point you to the fastest path to a table.</p>
            </div>
          </div>
          <div className="rounded-[32px] bg-ivory p-6 shadow-lift md:p-8">
            <InquiryForm type="contact" submitLabel="Send Enquiry" />
          </div>
        </div>
      </section>

      <section id="booking">
        <BookingBanner
          title="Prefer to book now?"
          body="Reserve online, call the house, or follow along for seasonal arrivals and late-night pours."
          primaryCta={{ label: 'Book a Table', href: siteConfig.bookingUrl }}
          secondaryCta={{ label: 'Email Us', href: siteConfig.emailHref }}
        />
      </section>

      <section className="pb-20">
        <div className="container-site flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Social</p>
            <div className="mt-3 flex gap-5 text-sm font-semibold text-primary">
              <a href={siteConfig.instagram} className="link-underline">Instagram</a>
              <a href={siteConfig.facebook} className="link-underline">Facebook</a>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.bookingUrl} className="rounded-pill bg-primary px-6 py-3 text-sm font-semibold text-ivory transition hover:-translate-y-0.5 hover:shadow-medium">Book a Table</a>
            <a href={siteConfig.directionsUrl} className="rounded-pill border border-primary/15 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/6">Get Directions</a>
          </div>
        </div>
      </section>
    </>
  );
}
