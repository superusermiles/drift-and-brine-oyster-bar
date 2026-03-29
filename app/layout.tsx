import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { navLinks, siteConfig } from '@/lib/site-data';

const headingFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-heading',
});

const bodyFont = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

const defaultDescription =
  'Oyster bar in Napier for seasonal oysters, seafood small plates, natural wine, and intimate coastal dining in Ahuriri, Hawke’s Bay.';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Oyster Bar in Napier | Drift & Brine Oyster Bar',
  description: defaultDescription,
  keywords: [...siteConfig.keywords, ...siteConfig.longTailKeywords],
  applicationName: 'Drift & Brine Oyster Bar',
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: 'Oyster Bar in Napier | Drift & Brine Oyster Bar',
    description:
      'Discover seasonal oysters, seafood plates, and natural wine at Drift & Brine Oyster Bar in Ahuriri, Napier.',
    siteName: 'Drift & Brine Oyster Bar',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Drift & Brine Oyster Bar social preview',
      },
    ],
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oyster Bar in Napier | Drift & Brine Oyster Bar',
    description:
      'Seasonal oysters, seafood small plates, and natural wine in Ahuriri, Napier.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: siteConfig.name,
    description:
      'A refined oyster bar in Ahuriri, Napier serving seasonal oysters, seafood small plates, and natural wine.',
    url: siteConfig.url,
    image: `${siteConfig.url}/og-image.jpg`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '$$$',
    servesCuisine: ['Seafood', 'Oyster Bar', 'Natural Wine'],
    acceptsReservations: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4 West Quay',
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      postalCode: siteConfig.postcode,
      addressCountry: siteConfig.country,
    },
    areaServed: [siteConfig.locality, siteConfig.city, siteConfig.region],
    sameAs: [siteConfig.instagram, siteConfig.facebook],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Wednesday', 'Thursday'],
        opens: '12:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '12:00',
        closes: '23:59',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '12:00',
        closes: '20:00',
      },
    ],
  };

  return (
    <html lang="en-NZ" className={`${headingFont.variable} ${bodyFont.variable} h-full`}>
      <body className="min-h-full bg-background text-text antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-accent focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <SiteHeader links={navLinks} ctaHref="/contact/#booking" ctaLabel="Book a Table" />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </body>
    </html>
  );
}
