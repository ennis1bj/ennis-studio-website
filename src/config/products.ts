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
  icon: string; // lucide-react icon name
  brandColor: string; // Tailwind color class for icon background
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
    ],
    icon: 'Shield',
    brandColor: 'emerald'
  },
  {
    slug: 'guestymigrate',
    name: 'GuestyMigrate',
    tagline: 'Automated account-to-account migration for Guesty property managers.',
    description: 'GuestyMigrate transfers listings, reservations, guests, photos, rate strategies, saved replies, and all 11 data categories between Guesty accounts — fully automated with complex multi-unit listing support, 100% ID remapping, and a verification report. No CSVs, no manual data entry.',
    category: 'Hospitality Tech / Data Migration',
    url: 'https://guestymigrate.com',
    status: 'live',
    isInternal: false,
    highlights: [
      'All 11 Guesty data categories migrated with full ID remapping',
      'Complex multi-unit listing hierarchies preserved automatically',
      'AES-256 encrypted with real-time progress and verification report'
    ],
    icon: 'ArrowRightLeft',
    brandColor: 'sky'
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
    ],
    icon: 'LayoutTemplate',
    brandColor: 'violet'
  }
];
