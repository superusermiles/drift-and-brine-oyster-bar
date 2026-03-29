import type { Metadata } from 'next';
import { BookingBanner } from '@/components/booking-banner';
import { DarkFeatureBand } from '@/components/dark-feature-band';
import { EditorialSplit } from '@/components/editorial-split';
import { InfoCardGrid } from '@/components/info-card-grid';
import { SectionIntro } from '@/components/section-intro';
import { images, siteConfig } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'About Drift & Brine Oyster Bar | Napier Oyster Bar',
  description:
    'About Drift & Brine Oyster Bar in Ahuriri, Napier — the story behind our coastal seafood restaurant, natural wine list, and dining philosophy.',
  keywords: ['about Drift & Brine Oyster Bar', 'Napier oyster bar', 'Ahuriri seafood restaurant'],
  openGraph: {
    title: 'About Drift & Brine Oyster Bar | Napier Oyster Bar',
    description:
      'Learn the story and dining philosophy behind Drift & Brine Oyster Bar in Ahuriri, Napier.',
    url: `${siteConfig.url}/about/`,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Drift & Brine Oyster Bar | Napier Oyster Bar',
    description:
      'Learn the story and dining philosophy behind Drift & Brine Oyster Bar in Ahuriri, Napier.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: `${siteConfig.url}/about/` },
};

export default function AboutPage() {
  return (
    <>
      <section className="section-pad-lg pt-36">
        <div className="container-site grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <SectionIntro
              eyebrow="Our story"
              title="About Drift & Brine Oyster Bar in Ahuriri, Napier."
              body="Drift & Brine was founded by a former deckhand turned chef and a Hawke’s Bay winemaker who wanted to build a dining room that felt both coastal and intimate — precise in its food, easy in its welcome, and deeply tied to place."
              as="h1"
            />
          </div>
          <img src={images.aboutFounder.src} alt={images.aboutFounder.alt} width={images.aboutFounder.width} height={images.aboutFounder.height} className="h-full max-h-[42rem] w-full rounded-[34px] object-cover shadow-medium" />
        </div>
      </section>

      <EditorialSplit
        title="Built by two people who know the coast differently."
        body={[
          'One came from long days on the water, working close to catch, weather, and the discipline of handling seafood properly. The other came through vineyards and cellars, with a palate shaped by texture, acid, and the pleasure of a table that keeps talking.',
          'Together they built Drift & Brine as a room that could hold both lunch brightness and after-dark mood — a place where Hawke’s Bay hospitality feels polished, but never stiff.',
        ]}
        image={images.aboutPrep}
        imageSide="left"
      />

      <section className="section-pad bg-ivory">
        <div className="container-site space-y-10">
          <SectionIntro
            eyebrow="Philosophy"
            title="Grounded in seasonality, hospitality, and provenance."
            body="A dining room shaped by what the coast is giving, how the room feels, and where each bottle sits in relation to the plate."
          />
          <InfoCardGrid
            cards={[
              {
                title: 'Seasonality',
                body: 'We write the menu around availability, not habit. If the water shifts, so does the plate.',
              },
              {
                title: 'Hospitality',
                body: 'Service should feel informed, calm, and generous enough to put people fully at ease.',
              },
              {
                title: 'Provenance',
                body: 'Seafood, wine, and produce are chosen for integrity, locality where possible, and a sense of the coast.',
              },
            ]}
            columns={3}
          />
        </div>
      </section>

      <EditorialSplit
        title="Close to the source, close to the glass."
        body={[
          'Seafood sourcing is led by season and quality. The wine list reflects long relationships across Hawke’s Bay, with producers selected for energy, balance, and food-minded structure.',
        ]}
        image={images.aboutCoast}
      />

      <DarkFeatureBand
        title="The room matters as much as the plate."
        body="We care about pace, light, sound, and the feeling of being looked after without interruption. The aim is a room that feels composed, intimate, and quietly memorable."
        items={[
          { label: 'Service', value: 'Calm pacing, attentive guidance, and room to linger when the night calls for it.' },
          { label: 'Atmosphere', value: 'Low light, textured materials, and a layout designed for conversation.' },
          { label: 'Setting', value: 'A coastal dining room where sea air meets candlelight and thoughtful pouring.' },
        ]}
        image={images.aboutRoom}
      />

      <section className="section-pad bg-background">
        <div className="container-site grid gap-6 rounded-[36px] border border-primary/10 bg-ivory p-8 shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Service ethos</p>
            <h2 className="font-heading text-4xl italic leading-tight text-primary md:text-[2.75rem]">
              “The room matters as much as the plate.”
            </h2>
            <p className="max-w-[58ch] text-base leading-8 text-muted md:text-lg">We care about pace, light, sound, and the feeling of being looked after without interruption. The aim is a room that feels composed, intimate, and quietly memorable.</p>
          </div>
          <img src={images.aboutService.src} alt={images.aboutService.alt} width={images.aboutService.width} height={images.aboutService.height} className="h-full max-h-[34rem] w-full rounded-[32px] object-cover shadow-soft" />
        </div>
      </section>

      <BookingBanner
        title="Join us for dinner in Ahuriri."
        body="Reserve for a slow evening of oysters, small plates, and wines worth staying with."
        primaryCta={{ label: 'Reserve for Dinner', href: siteConfig.bookingUrl }}
        secondaryCta={{ label: 'Explore the Menu', href: '/menu/' }}
      />
    </>
  );
}
