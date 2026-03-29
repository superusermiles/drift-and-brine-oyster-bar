export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const siteConfig = {
  name: 'Drift & Brine Oyster Bar',
  url: 'https://drift-and-brine-oyster-bar.vercel.app',
  phone: '+64 6 650 1842',
  phoneHref: 'tel:+6466501842',
  email: 'hello@driftandbrine.co.nz',
  emailHref: 'mailto:hello@driftandbrine.co.nz',
  address: '4 West Quay, Ahuriri, Napier 4110',
  locality: 'Ahuriri',
  city: 'Napier',
  region: 'Hawke’s Bay',
  postcode: '4110',
  country: 'NZ',
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  bookingUrl: 'mailto:hello@driftandbrine.co.nz?subject=Book%20a%20Table%20at%20Drift%20%26%20Brine',
  directionsUrl: 'https://maps.google.com/?q=4+West+Quay+Ahuriri+Napier+4110',
  primaryKeyword: 'Oyster Bar in Napier',
  keywords: [
    'oyster bar Napier',
    'seafood restaurant Napier',
    'Ahuriri restaurant',
    'natural wine bar Napier',
    'private dining Napier',
    'Hawke’s Bay seafood restaurant',
    'oysters Ahuriri',
    'date night restaurant Napier',
    'coastal dining Hawke’s Bay',
    'restaurant in Ahuriri Napier',
  ],
  longTailKeywords: [
    'best oyster bar in Napier',
    'seafood and natural wine bar in Ahuriri',
    'private dining oyster bar Napier',
    'date night seafood restaurant in Hawke’s Bay',
    'where to eat oysters in Ahuriri',
    'seasonal seafood restaurant near Napier waterfront',
    'book oyster bar dinner in Napier',
    'natural wine and seafood restaurant Hawke’s Bay',
  ],
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Menu', href: '/menu/' },
  { label: 'Private Dining', href: '/private-dining/' },
  { label: 'Contact', href: '/contact/' },
];

export const images = {
  homeHero: {
    src: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=1600&h=1000&fit=crop',
    alt: 'Fresh oysters on crushed ice at Drift & Brine Oyster Bar in Ahuriri, Napier',
    width: 1600,
    height: 1000,
  },
  homePlateOne: {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=1100&fit=crop',
    alt: 'Seafood small plate served at an oyster bar in Napier',
    width: 900,
    height: 1100,
  },
  homePlateTwo: {
    src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&h=1100&fit=crop',
    alt: 'Natural wine pour at Drift & Brine Oyster Bar in Hawke’s Bay',
    width: 900,
    height: 1100,
  },
  homePlateThree: {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&h=1100&fit=crop',
    alt: 'Raw seafood small plate at a coastal dining restaurant in Ahuriri',
    width: 900,
    height: 1100,
  },
  homePlateFour: {
    src: 'https://images.unsplash.com/photo-1579631542720-3a87824fff86?w=900&h=1100&fit=crop',
    alt: 'Grilled market fish served at a seafood restaurant in Napier',
    width: 900,
    height: 1100,
  },
  homeInterior: {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=1400&fit=crop',
    alt: 'Candlelit dining room interior at Drift & Brine Oyster Bar in Ahuriri',
    width: 1200,
    height: 1400,
  },
  homeExterior: {
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=900&fit=crop',
    alt: 'Drift & Brine Oyster Bar style restaurant frontage near the Ahuriri waterfront',
    width: 1200,
    height: 900,
  },
  texture: {
    src: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&h=800&fit=crop',
    alt: 'Shell and linen detail reflecting coastal dining in Hawke’s Bay',
    width: 800,
    height: 800,
  },
  aboutFounder: {
    src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=1400&fit=crop',
    alt: 'Founder portrait representing Drift & Brine Oyster Bar in Napier',
    width: 1200,
    height: 1400,
  },
  aboutPrep: {
    src: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=900&h=1100&fit=crop',
    alt: 'Seafood preparation detail at a refined oyster bar in Ahuriri',
    width: 900,
    height: 1100,
  },
  aboutRoom: {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=1400&fit=crop',
    alt: 'Low-lit restaurant room prepared for evening dining in Napier',
    width: 1200,
    height: 1400,
  },
  aboutCoast: {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=900&fit=crop',
    alt: 'Hawke’s Bay coastline inspiring the menu at Drift & Brine Oyster Bar',
    width: 1200,
    height: 900,
  },
  aboutService: {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&h=1100&fit=crop',
    alt: 'Thoughtful seafood service at Drift & Brine Oyster Bar in Ahuriri',
    width: 900,
    height: 1100,
  },
  menuOysters: {
    src: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=1200&h=900&fit=crop',
    alt: 'Seasonal oysters on ice at Drift & Brine Oyster Bar in Napier',
    width: 1200,
    height: 900,
  },
  menuRaw: {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=1100&fit=crop',
    alt: 'Raw seafood plate from the menu at an Ahuriri oyster bar',
    width: 900,
    height: 1100,
  },
  menuShare: {
    src: 'https://images.unsplash.com/photo-1579631542720-3a87824fff86?w=900&h=1100&fit=crop',
    alt: 'Shared grilled seafood plate at a Hawke’s Bay restaurant',
    width: 900,
    height: 1100,
  },
  menuWine: {
    src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&h=900&fit=crop',
    alt: 'Natural wine bottles and pour at Drift & Brine Oyster Bar',
    width: 1200,
    height: 900,
  },
  privateHero: {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&h=1000&fit=crop',
    alt: 'Private dining long table at Drift & Brine Oyster Bar in Napier',
    width: 1600,
    height: 1000,
  },
  privateShared: {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=1100&fit=crop',
    alt: 'Shared seafood plates for private dining in Ahuriri',
    width: 900,
    height: 1100,
  },
  privateWine: {
    src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&h=1100&fit=crop',
    alt: 'Wine service for a private dining event at Drift & Brine Oyster Bar',
    width: 900,
    height: 1100,
  },
  privateRoom: {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=1400&fit=crop',
    alt: 'Intimate private dining room at a seafood restaurant in Napier',
    width: 1200,
    height: 1400,
  },
  contactExterior: {
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=900&fit=crop',
    alt: 'Waterfront restaurant exterior for Drift & Brine Oyster Bar in Ahuriri',
    width: 1200,
    height: 900,
  },
  contactStreet: {
    src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&h=900&fit=crop',
    alt: 'Ahuriri waterfront setting near Drift & Brine Oyster Bar in Napier',
    width: 1200,
    height: 900,
  },
};

export const footerHours = [
  'Wed–Thu · 12pm–10pm',
  'Fri–Sat · 12pm–Late',
  'Sun · 12pm–8pm',
  'Mon–Tue · Closed',
];
