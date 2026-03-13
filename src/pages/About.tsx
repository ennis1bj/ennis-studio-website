import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import FAQAccordion from '../components/FAQAccordion';

const principles = [
  {
    title: 'Database-first architecture',
    description: 'Every workspace is built around relational data, not pages.',
  },
  {
    title: 'Role-based views',
    description: 'Operators, managers, and ICs each get the view they need.',
  },
  {
    title: 'Industry-researched workflows',
    description:
      'Built around how your profession actually works, not a generic productivity framework.',
  },
  {
    title: 'Privacy-first where needed',
    description: 'E.g., Therapist OS uses coded identifiers by default.',
  },
  {
    title: 'Documentation baked in',
    description: 'Setup guides and best-practice notes live inside the workspace.',
  },
  {
    title: 'Automation-ready',
    description:
      'Properties and structures designed to connect to Notion automations, Zapier, and Make.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Industry research & constraint mapping',
    description:
      'We interview practitioners and map the core entities, relationships, and recurring workflows specific to that profession.',
  },
  {
    step: '02',
    title: 'Data modeling',
    description:
      'We design the database schema first: which entities need their own database, how they relate, what rollups and formulas are needed, and what properties matter most.',
  },
  {
    step: '03',
    title: 'Views & workflows by role',
    description:
      'We build filtered views, grouped tables, calendars, and boards tailored to the different people who will use the workspace — solo operators, team leads, and staff.',
  },
  {
    step: '04',
    title: 'Onboarding, documentation & upgrade paths',
    description:
      'We write a setup checklist, annotate key properties with best-practice notes, load example data, and document how to extend the system as your practice grows.',
  },
];

const extendedFAQs = [
  {
    question: 'How do I get access after purchase?',
    answer:
      'After completing your purchase, you\'ll receive a link to the full Notion template. Click "Duplicate" in the top-right corner of the template page to copy the entire system into your Notion workspace. All databases, views, relations, and example data come with it.',
  },
  {
    question: 'What Notion plan do I need?',
    answer:
      'All templates work on Notion\'s free plan for individual use. If you plan to share the workspace with a team, collaborate in real time, or need advanced permissions, Notion\'s Plus or Business plan is recommended. None of the templates require Notion AI or any paid add-on.',
  },
  {
    question: 'Do I need to be a Notion power user?',
    answer:
      'You should be comfortable with Notion databases, views, and relations — these are intermediate-level templates, not beginner tutorials. That said, every template includes a built-in onboarding checklist and property-level notes to guide setup. If you know what a filtered view or a rollup is, you\'re ready.',
  },
  {
    question: 'Can I use this with my team or staff?',
    answer:
      'Yes. Once the template is in your workspace, you can share it with any number of team members. Each template includes role-based views designed for different team functions — for example, a front-desk view vs. a practitioner view in VetOS. Team collaboration features depend on your Notion plan.',
  },
  {
    question: 'Can I customize the template?',
    answer:
      'Absolutely. You own the duplicated workspace. Add properties, create new views, build new databases, rename anything, change layouts, or extend the system with automations and integrations. The template is a starting architecture — it\'s designed to be built on, not locked down.',
  },
  {
    question: 'What is your refund policy?',
    answer:
      'Because digital templates can be duplicated immediately, we do not offer refunds after purchase. We encourage you to explore the free preview thoroughly before buying — every template has a full live preview you can browse without creating an account.',
  },
  {
    question: 'Do you offer custom builds or consulting?',
    answer:
      'Yes. Ennis Studio takes on a small number of custom Notion system builds for practices, teams, and agencies. Custom builds include full database architecture, role-based views, onboarding documentation, and optional ongoing support. Use the contact form to describe your needs.',
  },
  {
    question: 'Do the templates work on Notion mobile?',
    answer:
      'Yes. All databases, views, and pages are fully functional on Notion\'s iOS and Android apps. Some complex views (like multi-column layouts) may look different on smaller screens, but all data and functionality are accessible.',
  },
  {
    question: 'Can I resell or share the template?',
    answer:
      'No. Each purchase grants a single-user license for personal or business use within your own Notion workspace. You may not redistribute, resell, or share the template file itself. Sharing your workspace with team members for collaborative use is allowed.',
  },
  {
    question: 'What happens if Notion changes its features or pricing?',
    answer:
      'These templates use core Notion features — databases, relations, rollups, views, and pages — which have been stable for years. If Notion introduces breaking changes, we will update affected templates and notify customers. Notion\'s pricing changes do not affect the templates themselves.',
  },
];

export default function About() {
  const location = useLocation();

  useDocumentMeta({
    title: 'About — Ennis Studio',
    description:
      'How Ennis Studio designs industry-specific Notion systems. Our process, philosophy, and FAQ.',
  });

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      {/* Studio Overview */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Systems, not aesthetic pages.
          </h1>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-600">
            <p>
              Ennis Studio builds Notion operating systems for professionals who work in specific
              industries — insurance, veterinary medicine, therapy and mental health. Each template
              is a structured, opinionated workspace designed around the actual entities,
              relationships, and workflows of that profession.
            </p>
            <p>
              Most Notion templates give you a pretty page and leave you to figure out the rest.
              Ennis Studio starts with the data: what databases you need, how they connect, and what
              views surface the right information for the right role. The result is a workspace that
              works on day one — with example data, onboarding documentation, and a clear path to
              making it your own.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-slate-50">
        <div className="container-content">
          <h2 className="mb-12 text-2xl font-bold text-slate-900 sm:text-3xl">Our philosophy</h2>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Narrative */}
            <div className="space-y-6 text-base leading-relaxed text-slate-600">
              <p>
                Ennis Studio starts every template with industry research — the specific entities,
                relationships, and workflows that matter to that profession. We talk to
                practitioners, study their day-to-day operations, and identify the data structures
                that will actually support their work.
              </p>
              <p>
                Then we model the data first. Databases, relations, rollups, and formulas come before
                any page layout or aesthetic decision. Once the data architecture is sound, we build
                views and workflows for different roles — so a solo practitioner, a team lead, and a
                staff member each see what they need without navigating someone else&apos;s noise.
              </p>
              <p>
                Finally, we write documentation and onboarding directly into the workspace. Every
                template ships with a setup checklist, property-level notes, and example data so the
                system is ready to use out of the box — not a blank canvas waiting for your
                imagination.
              </p>
            </div>

            {/* Principles list */}
            <div className="space-y-6">
              {principles.map((principle) => (
                <div key={principle.title} className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100">
                    <svg
                      className="h-3.5 w-3.5 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{principle.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <h2 className="mb-12 text-2xl font-bold text-slate-900 sm:text-3xl">
            How we design every template
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {processSteps.map((item) => (
              <div key={item.step} className="rounded-xl border border-slate-200 bg-white p-6">
                <span className="text-3xl font-bold text-indigo-100">{item.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended FAQ */}
      <section className="section-padding bg-slate-50" id="faq">
        <div className="container-content max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <FAQAccordion items={extendedFAQs} id="about-faq" />
          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
            >
              Still have questions? Get in touch &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
