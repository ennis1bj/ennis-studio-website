import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/#portfolio' },
  { label: 'Notion Studio', to: '/templates' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const productLinks = [
  { label: 'GuardHound', href: 'https://guardhound.io' },
  { label: 'GuestyMigrate', href: 'https://guestymigrate.com' },
  { label: 'Notion Studio', to: '/templates' },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: siteConfig.social.linkedin || '#',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Notion Marketplace',
    href: siteConfig.social.notionMarketplace || '#',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.29 2.29c-.466-.373-.84-.186-1.353.14L4.088 3.882c-.466.093-.56.28-.14.56l.512.326zm.793 1.866v13.907c0 .746.373 1.026 1.213.98l14.521-.84c.84-.046.933-.56.933-1.166V5.074c0-.607-.234-.933-.746-.887l-15.174.88c-.56.046-.747.326-.747.886zm14.334.607c.093.42 0 .84-.42.886l-.7.14v10.264c-.607.327-1.166.514-1.633.514-.746 0-.933-.234-1.493-.933L11.26 11.26v6.294l1.446.327s0 .84-1.166.84l-3.219.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.8 9.714c-.093-.42.14-1.026.793-1.073l3.453-.233 4.413 6.713V9.387l-1.213-.14c-.094-.467.233-.84.653-.84l3.546-.233.093.093z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-200 bg-navy-950 text-white">
      <div className="mx-auto max-w-content px-6 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5" aria-label="Ennis Studio home">
              <img
                src="/images/ennis-studio-icon.png"
                alt="Ennis Studio"
                className="h-8 w-8 rounded-lg object-cover"
              />
              <span className="text-base font-bold tracking-tight text-white">
                Ennis Studio
              </span>
            </Link>
            <p className="mt-3 text-sm text-navy-300">Building software that compounds.</p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-navy-400">
              Navigate
            </h3>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.to.startsWith('/#') ? (
                  <a
                    key={link.to}
                    href={link.to}
                    className="text-sm text-navy-300 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-navy-300 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-navy-400">
              Our Products
            </h3>
            <div className="flex flex-col gap-2">
              {productLinks.map((link) =>
                'href' in link && link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-navy-300 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={'to' in link ? link.to! : '/'}
                    className="text-sm text-navy-300 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Social links */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-navy-400">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-navy-300 transition-colors duration-200 hover:text-gold-400"
                  aria-label={social.label}
                >
                  {social.icon}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-navy-800 pt-6 text-xs text-navy-400 sm:flex-row">
          <p>
            &copy; {currentYear} Ennis Studio. All rights reserved. |{' '}
            <a href={`mailto:${siteConfig.email}`} className="underline hover:text-gold-400">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
