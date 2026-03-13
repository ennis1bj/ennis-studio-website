import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Templates', to: '/templates' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const socialLinks = [
  {
    label: 'Twitter / X',
    href: siteConfig.social.twitter || '#', // TODO: add real URL
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Notion Marketplace',
    href: siteConfig.social.notionMarketplace || '#', // TODO: add real URL
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.29 2.29c-.466-.373-.84-.186-1.353.14L4.088 3.882c-.466.093-.56.28-.14.56l.512.326zm.793 1.866v13.907c0 .746.373 1.026 1.213.98l14.521-.84c.84-.046.933-.56.933-1.166V5.074c0-.607-.234-.933-.746-.887l-15.174.88c-.56.046-.747.326-.747.886zm14.334.607c.093.42 0 .84-.42.886l-.7.14v10.264c-.607.327-1.166.514-1.633.514-.746 0-.933-.234-1.493-.933L11.26 11.26v6.294l1.446.327s0 .84-1.166.84l-3.219.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.8 9.714c-.093-.42.14-1.026.793-1.073l3.453-.233 4.413 6.713V9.387l-1.213-.14c-.094-.467.233-.84.653-.84l3.546-.233.093.093z" />
      </svg>
    ),
  },
  {
    label: 'Gumroad',
    href: siteConfig.social.gumroad || '#', // TODO: add real URL
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13v2h4v6h-4v2h6V7h-6z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-content px-6 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2" aria-label="Ennis Studio home">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="32" height="32" rx="8" fill="#4F46E5" />
                <path
                  d="M8 10h16M8 16h12M8 22h8"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-base font-bold tracking-tight text-slate-900">
                Ennis Studio
              </span>
            </Link>
            <p className="mt-2 text-sm text-slate-500">Industry-built Notion systems.</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social links */}
          <div className="flex gap-4 md:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-slate-500 transition-colors duration-200 hover:text-slate-700"
                aria-label={social.label}
              >
                {social.icon}
                <span className="hidden sm:inline">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>
            &copy; {currentYear} Ennis Studio. All rights reserved. |{' '}
            <a href={`mailto:${siteConfig.email}`} className="underline hover:text-slate-600">
              {siteConfig.email}
            </a>
          </p>
          <a
            href="https://www.perplexity.ai/computer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-slate-600"
          >
            Created with Perplexity Computer
          </a>
        </div>
      </div>
    </footer>
  );
}
