import type { Metadata } from 'next';
import { HeroSection } from '@/components/hero-section';
import { InfoCardGrid } from '@/components/info-card-grid';
import { InquiryForm } from '@/components/inquiry-form';
import { PrivateDiningOptions } from '@/components/private-dining-options';
import { SampleMenuTeaser } from '@/components/sample-menu-teaser';
import { SectionIntro } from '@/components/section-intro';
import { images, siteConfig } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Private Dining in Napier | Drift & Brine Oyster Bar',
  description:
    'Book private dining at Drift & Brine Oyster Bar in Ahuriri, Napier for celebrations, hosted seafood dinners, and wine-led gatherings.',
  keywords: ['private dining Napier', 'group dining Ahuriri', 'private event venue Napier'],
  openGraph: {
    title: 'Private Dining in Napier | Drift & Brine Oyster Bar',
    description:
      'Host private dining, long-table dinners, and wine-led gatherings at Drift & Brine Oyster Bar in Napier.',
    url: `${siteConfig.url}/private-dining/`,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Dining in Napier | Drift & Brine Oyster Bar',
    description:
      'Host private dining, long-table dinners, and wine-led gatherings at Drift & Brine Oyster Bar in Napier.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: `${siteConfig.url}/private-dining/` },
};

export default function PrivateDiningPage() {
  return (
    <>
      <HeroSection
        eyebrow="Private dining"
        title="Private dining in Napier for long tables, low light, and celebrations that feel personal."
        body="Drift & Brine hosts intimate events with seafood-led menus, thoughtful wine service, and a room designed for conversation."
        primaryCta={{ label: 'Enquire Now', href: '#inquiry-form' }}
        secondaryCta={{ label: 'View Sample Menu', href: '#sample-menu' }}
        image={images.privateHero}
        overlay="medium"
        headingLevel="h1"
      />

      <section className="section-pad bg-background">
        <div className="container-site space-y-10">
          <SectionIntro
            eyebrow="Event types"
            title="Celebrations, hosted dinners, and wine-led nights."
            body="Drift & Brine suits gatherings that want atmosphere, thoughtful pacing, and a menu tied closely to season and cellar."
          />
          <InfoCardGrid
            cards={[
              {
                title: 'Celebrations',
                body: 'Birthdays, engagement dinners, and gatherings that deserve a room with mood.',
              },
              {
                title: 'Corporate Dinners',
                body: 'Hosted evenings for clients, teams, and small groups who want something more polished than standard function space.',
              },
              {
                title: 'Wine-Led Gatherings',
                body: 'Producer dinners, bottle-focused nights, and paired seafood menus.',
              },
            ]}
            columns={3}
          />
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="container-site space-y-10">
          <SectionIntro
            eyebrow="Hosting options"
            title="Formats for seated dinners, standing receptions, and full-room occasions."
            body="Each option can be shaped around guest numbers, pacing, and whether the evening leans more toward oysters first or long-table dining."
          />
          <PrivateDiningOptions
            options={[
              {
                title: 'Seated Supper',
                body: 'A shared-course dinner for intimate groups who want the room to unfold slowly.',
                details: ['Ideal for 10–24 guests', 'Shared plates and paired pours', 'Custom pacing available'],
              },
              {
                title: 'Oyster & Wine Reception',
                body: 'A standing or mixed-format evening built around trays of oysters, snacks, and chilled bottles.',
                details: ['Ideal for 18–35 guests', 'Flexible service style', 'Great for launch nights and celebrations'],
              },
              {
                title: 'Full Venue Takeover',
                body: 'A private Drift & Brine experience with tailored menu planning and dedicated service.',
                details: ['Ideal for premium hosted events', 'Custom menu and beverage planning', 'Response within 48 hours'],
              },
            ]}
          />
        </div>
      </section>

      <section id="sample-menu">
        <SampleMenuTeaser
          courses={[
            { course: 'First course', items: 'Bluff oysters, lemon, mignonette' },
            { course: 'Shared starters', items: 'Kingfish crudo, smoked fish on rye, market leaves' },
            { course: 'Main table plates', items: 'Grilled fish, smoked potatoes, buttered greens' },
            { course: 'To finish', items: 'Seasonal dessert and digestif pour' },
          ]}
          cta={{ label: 'View Sample Menu', href: siteConfig.emailHref }}
        />
      </section>

      <section id="inquiry-form" className="section-pad bg-primary">
        <div className="container-site grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-5 text-ivory">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">Private dining enquiry</p>
            <h2 className="font-heading text-4xl leading-none md:text-[2.75rem]">Tell us about your date, group, and the kind of night you have in mind.</h2>
            <p className="max-w-[56ch] text-base leading-8 text-ivory/78 md:text-lg">We reply to private dining enquiries within 48 hours. For urgent requests, call the house directly.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <img src={images.privateShared.src} alt={images.privateShared.alt} width={images.privateShared.width} height={images.privateShared.height} className="h-60 w-full rounded-[28px] object-cover shadow-soft" />
              <img src={images.privateWine.src} alt={images.privateWine.alt} width={images.privateWine.width} height={images.privateWine.height} className="h-60 w-full rounded-[28px] object-cover shadow-soft" />
            </div>
          </div>
          <div className="rounded-[32px] bg-ivory p-6 shadow-lift md:p-8">
            <InquiryForm type="private-dining" submitLabel="Send Enquiry" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-site grid gap-6 rounded-[34px] border border-primary/10 bg-ivory p-8 shadow-soft lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Contact details</p>
            <h2 className="font-heading text-4xl leading-none text-primary md:text-[2.75rem]">Response times, group minimums, and access details stay clear from the start.</h2>
            <p className="max-w-[60ch] text-base leading-8 text-muted md:text-lg">We reply to private dining enquiries within 48 hours. For urgent requests, call the house directly. Group sizes typically begin at 10 guests, and accessibility details can be confirmed during planning.</p>
            <div className="flex flex-col gap-3 text-sm text-text sm:flex-row sm:items-center sm:gap-6">
              <a href={siteConfig.phoneHref} className="link-underline w-fit font-semibold">{siteConfig.phone}</a>
              <a href={siteConfig.emailHref} className="link-underline w-fit font-semibold">{siteConfig.email}</a>
            </div>
          </div>
          <img src={images.privateRoom.src} alt={images.privateRoom.alt} width={images.privateRoom.width} height={images.privateRoom.height} className="h-full max-h-[28rem] w-full rounded-[30px] object-cover shadow-soft" />
        </div>
      </section>
    </>
  );
}
