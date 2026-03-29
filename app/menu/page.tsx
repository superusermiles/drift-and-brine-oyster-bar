import type { Metadata } from 'next';
import { BookingBanner } from '@/components/booking-banner';
import { DarkFeatureBand } from '@/components/dark-feature-band';
import { MenuSectionList } from '@/components/menu-section-list';
import { SectionIntro } from '@/components/section-intro';
import { images, siteConfig } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Seafood Restaurant Menu in Napier | Drift & Brine Oyster Bar',
  description:
    'See the seasonal menu at Drift & Brine Oyster Bar in Ahuriri, Napier, from oysters and raw seafood plates to shared dishes and natural wine.',
  keywords: ['Napier seafood restaurant menu', 'oyster bar menu Napier', 'Ahuriri restaurant menu'],
  openGraph: {
    title: 'Seafood Restaurant Menu in Napier | Drift & Brine Oyster Bar',
    description:
      'Explore oysters, seafood small plates, shared dishes, and natural wine at Drift & Brine Oyster Bar in Napier.',
    url: `${siteConfig.url}/menu/`,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seafood Restaurant Menu in Napier | Drift & Brine Oyster Bar',
    description:
      'Explore oysters, seafood small plates, shared dishes, and natural wine at Drift & Brine Oyster Bar in Napier.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: `${siteConfig.url}/menu/` },
};

export default function MenuPage() {
  return (
    <>
      <section className="section-pad-lg pt-36">
        <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="space-y-6">
            <SectionIntro
              eyebrow="Seasonal menu"
              title="Seafood restaurant menu in Napier with oysters, raw plates, and natural wine."
              body="These dishes are a guide to the way we cook. Availability shifts with the coast and with what we want to pour beside it."
              as="h1"
            />
          </div>
          <img src={images.menuOysters.src} alt={images.menuOysters.alt} width={images.menuOysters.width} height={images.menuOysters.height} className="h-full max-h-[28rem] w-full rounded-[34px] object-cover shadow-medium" />
        </div>
      </section>

      <MenuSectionList
        title="Oysters"
        intro="Served natural or dressed lightly, always cold."
        items={[
          { name: 'Bluff Oysters / half dozen', description: 'Natural with lemon and mignonette.', price: '$36' },
          { name: 'Bluff Oysters / dozen', description: 'Natural with lemon and mignonette.', price: '$70' },
          { name: 'Chilli Shallot Oysters / half dozen', description: 'A brighter, sharper finish.', price: '$39' },
        ]}
        image={images.menuOysters}
      />

      <MenuSectionList
        title="Raw and small plates"
        intro="For aperitif hour, shared starts, and ordering broadly across the table."
        items={[
          { name: 'Kingfish Crudo', description: 'Citrus, green olive oil, sea herbs.', price: '$28' },
          { name: 'Smoked Fish on Rye', description: 'Cultured butter, pickled fennel, charred lemon.', price: '$24' },
          { name: 'Mussel Toast', description: 'Warm mussels, garlic, parsley, white wine.', price: '$22' },
          { name: 'Market Leaves', description: 'Bitter leaves, soft herbs, preserved lemon dressing.', price: '$18' },
        ]}
        image={images.menuRaw}
      />

      <MenuSectionList
        title="Larger sharing plates"
        intro="A little more depth. Best with bread, vegetables, and another glass."
        items={[
          { name: 'Grilled Market Fish', description: 'Brown butter, capers, coastal greens.', price: '$46' },
          { name: 'Charred Octopus', description: 'White bean, paprika oil, grilled citrus.', price: '$38' },
          { name: 'Smoked Potatoes', description: 'Sea salt, whipped aioli, herbs.', price: '$16' },
          { name: 'Buttered Greens', description: 'Seasonal greens with lemon crumb.', price: '$17' },
        ]}
        image={images.menuShare}
      />

      <DarkFeatureBand
        eyebrow="By the glass and bottle"
        title="A list built for shell-heavy tables."
        body="A tight list of saline whites, textured skin-contact wines, elegant reds, and celebratory bottles for shell-heavy tables."
        items={[
          { label: 'Pet Nat Rosé', value: 'Dry, bright, and built for first pours.' },
          { label: 'Coastal Chardonnay', value: 'Mineral, taut, and oyster-friendly.' },
          { label: 'Chilled Pinot Noir', value: 'Light, savoury, and easy with smoke.' },
        ]}
        image={images.menuWine}
      />

      <section className="section-pad bg-ivory">
        <div className="container-site grid gap-8 rounded-[34px] border border-primary/10 bg-background p-8 shadow-soft lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">To finish</p>
            <h2 className="font-heading text-4xl leading-none text-primary md:text-[2.75rem]">A short dessert and digestif board.</h2>
            <p className="max-w-[58ch] text-base leading-8 text-muted md:text-lg">Ask for the dessert and digestif board. We keep it short: one sweet thing, one cheese, one good last pour.</p>
          </div>
          <a href={siteConfig.phoneHref} className="inline-flex rounded-pill border border-primary/15 px-6 py-3.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-ivory">
            Call for Today’s Specials
          </a>
        </div>
      </section>

      <BookingBanner
        title="Reserve for the full list."
        body="Seasonal changes happen often. Book ahead or call for today’s oysters and specials."
        primaryCta={{ label: 'Book a Table', href: siteConfig.bookingUrl }}
        secondaryCta={{ label: 'Call for Today’s Specials', href: siteConfig.phoneHref }}
      />
    </>
  );
}
