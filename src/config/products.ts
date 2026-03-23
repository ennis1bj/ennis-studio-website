export interface PortfolioProduct {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  url: string;
  status: 'live' | 'beta' | 'in-development';
  isInternal: boolean;
  highlights: string[];
}

export const portfolioProducts: PortfolioProduct[] = [
  {
    slug: 'guardhound',
    name: 'GuardHound',
    tagline: 'Breach monitoring and compliance intelligence for modern businesses.',
    description: 'GuardHound is a breach monitoring and compliance intelligence platform. It monitors data breaches, dark web exposure, and compliance posture for businesses and MSPs.',
    category: 'Cybersecurity / Compliance',
    url: 'https://guardhound.io',
    status: 'live',
    isInternal: false,
    highlights: [
      'Real-time breach monitoring and alerts',
      'Dark web exposure scanning',
      'Compliance posture tracking for MSPs'
    ]
  },
  {
    slug: 'guestymigrate',
    name: 'GuestyMigrate',
    tagline: 'Seamless data migration for short-term rental operators.',
    description: 'GuestyMigrate is a data migration tool for short-term rental operators moving their property management data into or out of the Guesty platform.',
    category: 'Hospitality Tech / Property Management',
    url: 'https://guestymigrate.com',
    status: 'live',
    isInternal: false,
    highlights: [
      'One-click migration into and out of Guesty',
      'Property, reservation, and guest data transfer',
      'Built for short-term rental operators'
    ]
  },
  {
    slug: 'notion-studio',
    name: 'Notion Development Studio',
    tagline: 'Premium, industry-specific Notion operating systems for professionals.',
    description: 'A studio producing premium, industry-specific Notion operating systems for professionals. Currently offers templates for insurance agents, veterinary practices, and solo therapists.',
    category: 'Productivity / Notion Templates',
    url: '/templates',
    status: 'live',
    isInternal: true,
    highlights: [
      'InsureFlow for insurance agents',
      'VetOS for veterinary practices',
      'Therapist OS for solo therapists'
    ]
  }
];
