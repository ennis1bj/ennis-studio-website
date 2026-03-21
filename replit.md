# Ennis Studio Website

## Overview
A modern, responsive marketing website for Ennis Studio, showcasing industry-specific Notion templates (InsureFlow, VetOS, Therapist OS) for insurance, veterinary, and mental health professionals.

## Tech Stack
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS + PostCSS
- **Routing**: React Router 6
- **Package Manager**: npm

## Project Structure
- `src/` - Source code
  - `components/` - Reusable UI components (Nav, Footer, Layout, Button)
  - `pages/` - Page-level components (Home, About, Templates, TemplateDetail, Contact)
  - `config/` - Centralized data (templates.ts, site.ts)
  - `hooks/` - Custom React hooks (useDocumentMeta for SEO)
  - `main.tsx` - Application entry point
  - `App.tsx` - Root component with routing
- `public/` - Static assets (images, icons)
- `dist/` - Production build output

## Development
- Dev server runs on port 5000 via `npm run dev`
- Hot Module Replacement enabled via Vite
- All hosts allowed for Replit proxy compatibility

## Deployment
- Configured as a static site
- Build command: `npm run build`
- Output directory: `dist`
