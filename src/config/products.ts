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
    tagline: 'Domain security monitoring for founders, agencies, and IT teams.',
    description: 'GuardHound is an all-in-one domain security monitoring platform. It runs nine parallel checks — SSL certificates, CVE vulnerabilities, DNS and email security, lookalike domains, WHOIS changes, malware flags, subdomain discovery, and breach exposure — then delivers a 0-100 security score with continuous alerting.',
    category: 'Cybersecurity / Domain Security',
    url: 'https://guardhound.io',
    status: 'live',
    isInternal: false,
    highlights: [
      'Nine parallel security checks with a 0-100 domain score',
      'SSL expiry alerts, CVE detection, and lookalike domain scanning',
      'Continuous monitoring with hourly scans and email alerts'
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
