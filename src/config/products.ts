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
    slug: 'certindex',
    name: 'CertIndex',
    tagline: 'A real-time index of every TLS certificate logged to public CT logs.',
    description: 'CertIndex is a real-time index of every TLS certificate logged to a public Certificate Transparency (CT) log — exposed over REST, MCP, and an SSE firehose. Search every cert ever issued, monitor new issuance for your domains, and stream the live firehose. Built for security teams, AppSec, asset-management tools, and AI agents.',
    category: 'Cybersecurity / Certificate Transparency',
    url: 'https://ctindex.io',
    status: 'live',
    isInternal: false,
    highlights: [
      'REST API, MCP server, and SSE firehose over a unified CT index',
      'Subdomain enumeration, alert subscriptions, and Stripe-backed billing',
      'Drops into Claude Desktop, Cursor, and Windsurf via Streamable HTTP MCP'
    ],
    icon: 'ScanSearch',
    brandColor: 'sky'
  },
  {
    slug: 'ai-playbook',
    name: 'The AI Agent Playbook',
    tagline: '50 production-ready system prompts for ChatGPT, Claude, and Gemini.',
    description: 'A 92-page PDF with 50 copy-paste system prompts across 8 business categories — sales, marketing, support, operations, product, finance, HR, and strategy. Each prompt is 200-450 words and production-grade.',
    category: 'Digital Product / AI Tools',
    url: '/playbook',
    status: 'live' as const,
    isInternal: true,
    highlights: [
      '50 prompts across 8 business categories',
      'Works with ChatGPT, Claude, Gemini, and any LLM',
      '$29 one-time — instant PDF download'
    ],
    icon: 'Brain',
    brandColor: 'indigo'
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
