import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import FAQAccordion from '../components/FAQAccordion';

const LINKEDIN_URL = 'https://www.linkedin.com/in/benjamin-ennis-ab3a8b60/';

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

      {/* Meet the Founder */}
      <section className="section-padding bg-slate-50" id="founder">
        <div className="container-content max-w-3xl">
          <h2 className="mb-10 text-2xl font-bold text-slate-900 sm:text-3xl">Meet the founder</h2>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            {/* Profile photo */}
            <div className="flex-shrink-0">
              <img
                src="/images/ben-ennis.jpeg"
                alt="Ben Ennis, Founder of Ennis Studio"
                className="h-24 w-24 rounded-full object-cover object-top shadow-md ring-2 ring-indigo-100"
              />
            </div>
            {/* Bio */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Ben Ennis</h3>
                <p className="text-sm font-medium text-indigo-600">Founder, Ennis Studio</p>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  Ben Ennis is a software entrepreneur and product builder based in Grand Rapids,
                  Michigan. With a background spanning enterprise software, AI-driven systems, and
                  SaaS product development, Ben founded Ennis Studio to bring structured,
                  professional-grade Notion operating systems to specialized industries.
                </p>
                <p>
                  His approach is rooted in real-world systems thinking: start with the data, build
                  for the actual user, and ship something that works on day one. Ennis Studio is the
                  product of that philosophy applied to knowledge work.
                </p>
              </div>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors duration-200 hover:border-indigo-300 hover:text-indigo-600"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white">
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
      <section className="section-padding bg-slate-50">
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
