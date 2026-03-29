import type { Metadata } from 'next';
import { BookingBanner } from '@/components/booking-banner';
import { DarkFeatureBand } from '@/components/dark-feature-band';
import { EditorialSplit } from '@/components/editorial-split';
import { MapPlaceholder } from '@/components/map-placeholder';
import { MenuHighlightCard } from '@/components/menu-highlight-card';
import { QuoteStrip } from '@/components/quote-strip';
import { SectionIntro } from '@/components/section-intro';
import { SignatureStrip } from '@/components/signature-strip';
import { HeroSection } from '@/components/hero-section';
import { images, siteConfig } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Oyster Bar in Napier | Drift & Brine Oyster Bar',
  description:
    'Visit Drift & Brine Oyster Bar in Ahuriri, Napier for seasonal oysters, seafood small plates, natural wine, and refined coastal dining.',
  keywords: siteConfig.keywords,
  openGraph: {
    title: 'Oyster Bar in Napier | Drift & Brine Oyster Bar',
    description:
      'Seasonal oysters, seafood small plates, and natural wine in Ahuriri, Napier.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oyster Bar in Napier | Drift & Brine Oyster Bar',
    description:
      'Seasonal oysters, seafood small plates, and natural wine in Ahuriri, Napier.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="Ahuriri, Napier"
        title="Oyster bar in Napier for slow nights, seafood plates, and natural wine."
        body="Drift & Brine is a design-led oyster bar and natural wine dining room near the old port warehouses — a place for cold shells, smoked fish, mineral pours, and slow conversation after dark."
        primaryCta={{ label: 'Book a Table', href: siteConfig.bookingUrl }}
        secondaryCta={{ label: 'View Menu', href: '/menu/' }}
        image={images.homeHero}
        caption="Coastal dining for slow nights."
        headingLevel="h1"
      />

      <SignatureStrip
        items={[
          {
            title: 'Oysters in Season',
            body: 'Bluff oysters when the water is right, served simply and cold.',
          },
          {
            title: 'Hawke’s Bay Wines',
            body: 'Low-intervention bottles and by-the-glass pours chosen for saline, bright pairing.',
          },
          {
            title: 'Evening Service',
            body: 'A room that shifts from crisp lunch light to candle-warmed dinner.',
          },
        ]}
      />

      <section className="section-pad">
        <div className="container-site space-y-10">
          <SectionIntro
            eyebrow="From the kitchen"
            title="A seafood restaurant menu shaped by tide, smoke, citrus, and restraint."
            body="The food stays close to the ingredient. Raw where it should be raw. Flame-touched where depth matters. Built for sharing, pairing, and going back for one more plate."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <MenuHighlightCard
              title="Bluff Oysters"
              description="Natural, mignonette, or with a bright chilli dressing when the season allows."
              image={images.homePlateOne}
            />
            <MenuHighlightCard
              title="Smoked Fish on Rye"
              description="House-smoked catch, cultured butter, pickled fennel, and charred lemon."
              image={images.homePlateTwo}
            />
            <MenuHighlightCard
              title="Kingfish Crudo"
              description="Citrus, olive oil, sea herbs, and a little heat."
              image={images.homePlateThree}
            />
            <MenuHighlightCard
              title="Grilled Market Fish"
              description="Served with browned butter, capers, and whatever the coast is giving us."
              image={images.homePlateFour}
            />
          </div>
        </div>
      </section>

      <EditorialSplit
        eyebrow="The room"
        title="Sea air outside. Candlelight inside."
        body={[
          'Drift & Brine was built for evenings that start with oysters and end with a second bottle. Timber, stone, linen, and low light keep the room tactile and close.',
          'The service is calm, informed, and unforced — the kind that makes a premium night feel easy.',
        ]}
        image={images.homeInterior}
        cta={{ label: 'About the House', href: '/about/' }}
      />

      <DarkFeatureBand
        eyebrow="Natural pours"
        title="Seafood and Hawke’s Bay wine, in step."
        body="The list leans coastal and bright: skin-contact whites, mineral chardonnay, chilled reds, and bottles with enough energy to stand beside oysters, smoke, and salt."
        items={[
          { label: 'By the glass', value: 'A short rotating list for lunch, aperitif hour, and late pours.' },
          { label: 'Local producers', value: 'Hawke’s Bay makers sit alongside a tight natural list from further afield.' },
          { label: 'Pairing guidance', value: 'Ask for a shell-by-shell match or a bottle for the whole table.' },
        ]}
        image={images.texture}
      />

      <QuoteStrip
        quotes={[
          {
            quote: 'One of the most atmospheric rooms in Hawke’s Bay — all shell, shadow, and good pouring.',
            source: 'The Local Edit',
          },
          {
            quote: 'A date-night restaurant that knows how to stay relaxed.',
            source: 'Harbour Guide',
          },
          {
            quote: 'The oysters are excellent. The wine list is the reason you linger.',
            source: 'Weekend Notes',
          },
        ]}
      />

      <section className="section-pad bg-ivory">
        <div className="container-site grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="space-y-6">
            <SectionIntro
              eyebrow="Find us"
              title="Seafood dining near the Ahuriri waterfront."
              body="Drop in for lunch, settle in for dinner, or reserve ahead for a slower evening service. Walk-ins are welcome when space allows."
            />
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <article className="rounded-[24px] border border-primary/10 bg-background p-5 shadow-soft">
                <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Address</h3>
                <p className="mt-3 text-sm leading-7 text-text">4 West Quay, Ahuriri, Napier 4110</p>
              </article>
              <article className="rounded-[24px] border border-primary/10 bg-background p-5 shadow-soft">
                <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Hours</h3>
                <p className="mt-3 text-sm leading-7 text-text">Wed–Thu 12pm–10pm · Fri–Sat 12pm–Late · Sun 12pm–8pm</p>
              </article>
              <article className="rounded-[24px] border border-primary/10 bg-background p-5 shadow-soft">
                <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Reservations</h3>
                <p className="mt-3 text-sm leading-7 text-text">Recommended from Thursday evening onward.</p>
              </article>
            </div>
            <a href={siteConfig.directionsUrl} className="inline-flex rounded-pill bg-primary px-5 py-3 text-sm font-semibold text-ivory transition hover:-translate-y-0.5 hover:shadow-medium">
              Find Us
            </a>
          </div>
          <div className="space-y-5">
            <MapPlaceholder
              title="A short walk from the waterfront."
              body="Parking sits close by, with a quick turn from the Ahuriri promenade and old warehouse strip."
              cta={{ label: 'Get Directions', href: siteConfig.directionsUrl }}
            />
            <img src={images.homeExterior.src} alt={images.homeExterior.alt} width={images.homeExterior.width} height={images.homeExterior.height} className="h-64 w-full rounded-[32px] object-cover shadow-soft" />
          </div>
        </div>
      </section>

      <section id="booking">
        <BookingBanner
          title="Book for oysters, stay for the second bottle."
          body="Reserve a table for lunch, dinner, or an evening that drifts a little longer than planned."
          primaryCta={{ label: 'Book a Table', href: siteConfig.bookingUrl }}
          secondaryCta={{ label: 'Call Us', href: siteConfig.phoneHref }}
        />
      </section>
    </>
  );
}
