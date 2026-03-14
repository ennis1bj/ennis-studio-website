import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Templates', to: '/templates' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5" aria-label="Ennis Studio home">
          <img
            src="/images/ennis-studio-icon.png"
            alt="Ennis Studio"
            className="h-8 w-8 rounded-lg object-cover shadow-sm"
          />
          <span className="text-lg font-bold tracking-tight text-navy-900">
            Ennis Studio
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.to
                  ? 'text-gold-600'
                  : 'text-navy-600 hover:text-navy-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button to="/templates" size="sm">
            Browse templates
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-600 transition-colors hover:bg-navy-50 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`border-t border-navy-100 bg-white md:hidden ${mobileOpen ? 'block' : 'hidden'}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'bg-gold-50 text-gold-700'
                  : 'text-navy-600 hover:bg-navy-50 hover:text-navy-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2">
            <Button to="/templates" className="w-full" onClick={() => setMobileOpen(false)}>
              Browse templates
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
