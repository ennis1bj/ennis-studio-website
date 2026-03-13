# Ennis Studio — Marketing Website

A modern, responsive multi-page marketing website for **Ennis Studio**, a premium Notion template studio building vertical-specific operating systems for professionals in insurance, veterinary, and therapy/mental health industries.

**Stack:** React + TypeScript + Tailwind CSS + React Router

## Overview

This project powers the public marketing site for Ennis Studio. It showcases the studio's industry-specific Notion templates (InsureFlow, VetOS, Therapist OS), explains the design philosophy and process, and provides a contact form for inquiries and custom build requests.

### Routes

| Route | Page |
|---|---|
| `/` | Home — hero, featured templates, how it works, persona cards, FAQ |
| `/templates` | Catalog — grid of all templates with detail links |
| `/templates/:slug` | Template detail — full breakdown, databases, views, use cases, sticky CTA |
| `/about` | Philosophy, design process, extended FAQ |
| `/contact` | Contact form + custom build information |

## Running in Replit

1. Click the **Run** button — the app starts on the port Replit assigns via `process.env.PORT` (falls back to 3000 locally).
2. Vite's dev server handles client-side routing automatically — page refreshes on any route will work correctly.
3. The site opens in Replit's webview. You can also open it in a new tab.

## Deploying on Replit

To deploy the site for production:

1. Open the **Deployments** tab in the Replit sidebar.
2. Choose **Static** deployment.
3. Set the **build command** to:
   ```
   npm run build
   ```
4. Set the **publish directory** to:
   ```
   dist
   ```
5. Click **Deploy**.

Replit will build the project and serve the static files from the `dist` folder. For client-side routing to work on page refresh in production, Replit's static hosting automatically serves `index.html` for all routes.

Alternatively, you can use **Autoscale** deployment if you need server-side rendering or API routes in the future.

## Adding or Editing Templates

All template data lives in a single config file:

```
src/config/templates.ts
```

- **To add a new template:** Add a new object to the `templatesConfig` array following the existing shape (slug, name, tagline, description, price, idealFor, complexity, badges, featured, notionUrl, databases, views, useCases, implementationTime).
- **To update a purchase URL:** Change the `notionUrl` field for the relevant template. Once Stripe checkout is connected on Notion Marketplace, Gumroad, or Lemon Squeezy, replace each `notionUrl` with the direct checkout URL. No other file needs to change.
- **To feature/unfeature a template:** Toggle the `featured` boolean. Featured templates appear on the home page.

## Updating Social Links

Edit `src/config/site.ts` to add real URLs for:

- `social.twitter` — Twitter/X profile
- `social.notionMarketplace` — Notion Marketplace store
- `social.gumroad` — Gumroad store

These are rendered in the footer across all pages.

## Form Integration

The contact form currently logs submissions to the browser console. To connect it to a real email service:

1. Open `src/pages/Contact.tsx`
2. Replace the `console.log` in the `handleSubmit` function with an API call to your email service (e.g., Resend, EmailJS, or a custom backend endpoint)
3. Send submissions to `hello@ennis-studio.com`

## Analytics

To add analytics tracking:

- **Script tag approach:** Add your analytics script (Google Analytics, Plausible, etc.) to `index.html` inside the `<head>` tag.
- **React library approach:** Install a React analytics library (e.g., `react-ga4`) and initialize it in `src/App.tsx`.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

## Project Structure

```
/src
  /components
    Nav.tsx          — Sticky navigation with mobile hamburger menu
    Footer.tsx       — Site footer with nav, social links, attribution
    Layout.tsx       — Shared layout wrapper (nav + footer + outlet)
    ScrollToTop.tsx  — Scroll restoration on route changes
    FAQAccordion.tsx — Accessible accordion for FAQ sections
    TemplateCard.tsx — Template preview card with CTA
    Badge.tsx        — Small badge/pill component
    Button.tsx       — Polymorphic button (link, anchor, or button)
  /pages
    Home.tsx            — Landing page
    Templates.tsx       — Template catalog grid
    TemplateDetail.tsx  — Individual template detail page
    About.tsx           — Philosophy, process, FAQ
    Contact.tsx         — Contact form + custom builds
  /config
    templates.ts  — Single source of truth for all template data
    site.ts       — Site-wide configuration (name, domain, social links)
  /hooks
    useDocumentMeta.ts — Per-route title and meta tag management
/public
  favicon.svg
README.md
```
