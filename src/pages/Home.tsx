import { Link } from 'react-router-dom';
import { templatesConfig } from '../config/templates';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import Button from '../components/Button';
import TemplateCard from '../components/TemplateCard';
import FAQAccordion from '../components/FAQAccordion';

const featured = templatesConfig.filter((t) => t.featured);

const homeFAQs = [
  {
    question: 'Do I need to be a Notion expert to use these templates?',
    answer:
      'No, but these are built for intermediate-to-advanced Notion users. If you understand databases, relations, and views, you will get the most out of these systems. Each template includes a built-in setup guide to help you get started quickly.',
  },
  {
    question: 'What Notion plan do I need?',
    answer:
      'All templates work on Notion\'s free plan. However, if you plan to use advanced automations, team collaboration, or need more storage, Notion\'s Plus or Business plan is recommended.',
  },
  {
    question: 'Can I use this with my team or staff?',
    answer:
      'Absolutely. Once the template is in your workspace, you can share it with any number of team members. Role-based views are built in, so different team members see the data most relevant to them.',
  },
  {
    question: 'Can I customize the template after purchase?',
    answer:
      'Yes — you own the workspace. Add properties, create new views, connect automations, change layouts, or extend the system however you want. The template is a starting architecture, not a locked-down product.',
  },
  {
    question: 'What happens after I click "Preview & get template"?',
    answer:
      'You\'ll be taken to a live Notion preview of the full system. From there you can browse the workspace, explore the databases and views, and duplicate it into your own Notion account — no sign-up or login required to preview.',
  },
];

const personas = [
  {
    title: 'Insurance professionals',
    description:
      'Agents, brokers, and independent advisors who manage high client volumes and renewal cycles.',
    outcomes: [
      'Never miss a policy renewal with an urgency-filtered pipeline',
      'Keep client records, compliance notes, and tasks in one system',
      'Onboard new clients with a structured intake workflow',
    ],
  },
  {
    title: 'Veterinary practices',
    description:
      'Independent clinics and small practice operators juggling patients, staff, and inventory.',
    outcomes: [
      'Track patient history, owner info, and visits in one record',
      'Manage staff tasks and schedules across the team',
      'Monitor inventory levels and flag low-stock items automatically',
    ],
  },
  {
    title: 'Therapists & counselors',
    description:
      'Solo practitioners who need structured, private caseload and session management.',
    outcomes: [
      'Maintain date-stamped session notes linked to each client',
      'Track treatment goals and log progress over time',
      'Use privacy-first coded identifiers by default',
    ],
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Choose your industry template',
    description: 'Browse templates built around how your profession actually works.',
  },
  {
    step: '02',
    title: 'Duplicate into your Notion workspace',
    description: 'One click adds the full system to your account, example data included.',
  },
  {
    step: '03',
    title: 'Follow the built-in onboarding checklist',
    description:
      'Each template includes a setup guide and best-practice notes baked directly into the workspace.',
  },
  {
    step: '04',
    title: 'Customize, extend, and automate',
    description:
      'Adjust properties, add views, connect Notion automations or third-party tools like Zapier or Make.',
  },
];

export default function Home() {
  useDocumentMeta({
    title: 'Ennis Studio — Industry-built Notion systems',
    description:
      'Premium Notion operating systems for insurance professionals, vet practices, and therapists. Ready on day one.',
  });

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Industry-built Notion&nbsp;systems.{' '}
                <span className="text-indigo-600">Ready on day one.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Ennis Studio builds vertical-specific Notion operating systems for professionals who
                need a structured workspace — not a template they have to design themselves.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/templates" size="lg">
                  Browse templates
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  Talk about a custom build
                </Button>
              </div>
              <p className="mt-6 text-sm text-slate-500">
                Built for insurance professionals, veterinary practices, and therapists who run their
                work on Notion.
              </p>
            </div>

            {/* Abstract dashboard illustration */}
            <div className="hidden lg:block" aria-hidden="true">
              <svg
                viewBox="0 0 500 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                {/* Background frame */}
                <rect x="20" y="20" width="460" height="360" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                {/* Sidebar */}
                <rect x="20" y="20" width="120" height="360" rx="16" fill="#F1F5F9" />
                <rect x="40" y="56" width="80" height="8" rx="4" fill="#CBD5E1" />
                <rect x="40" y="80" width="60" height="8" rx="4" fill="#CBD5E1" />
                <rect x="40" y="104" width="70" height="8" rx="4" fill="#CBD5E1" />
                <rect x="40" y="128" width="50" height="8" rx="4" fill="#CBD5E1" />
                <rect x="40" y="152" width="65" height="8" rx="4" fill="#CBD5E1" />
                {/* Header */}
                <rect x="160" y="40" width="140" height="12" rx="6" fill="#334155" />
                <rect x="160" y="64" width="200" height="8" rx="4" fill="#94A3B8" />
                {/* Cards row 1 */}
                <rect x="160" y="100" width="140" height="90" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                <rect x="176" y="116" width="60" height="8" rx="4" fill="#4F46E5" />
                <rect x="176" y="132" width="108" height="6" rx="3" fill="#CBD5E1" />
                <rect x="176" y="146" width="90" height="6" rx="3" fill="#CBD5E1" />
                <rect x="176" y="166" width="48" height="12" rx="6" fill="#EEF2FF" />
                <rect x="320" y="100" width="140" height="90" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                <rect x="336" y="116" width="60" height="8" rx="4" fill="#4F46E5" />
                <rect x="336" y="132" width="108" height="6" rx="3" fill="#CBD5E1" />
                <rect x="336" y="146" width="90" height="6" rx="3" fill="#CBD5E1" />
                <rect x="336" y="166" width="48" height="12" rx="6" fill="#EEF2FF" />
                {/* Cards row 2 */}
                <rect x="160" y="210" width="140" height="90" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                <rect x="176" y="226" width="60" height="8" rx="4" fill="#4F46E5" />
                <rect x="176" y="242" width="108" height="6" rx="3" fill="#CBD5E1" />
                <rect x="176" y="256" width="90" height="6" rx="3" fill="#CBD5E1" />
                <rect x="176" y="276" width="48" height="12" rx="6" fill="#EEF2FF" />
                <rect x="320" y="210" width="140" height="90" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                <rect x="336" y="226" width="60" height="8" rx="4" fill="#4F46E5" />
                <rect x="336" y="242" width="108" height="6" rx="3" fill="#CBD5E1" />
                <rect x="336" y="256" width="90" height="6" rx="3" fill="#CBD5E1" />
                <rect x="336" y="276" width="48" height="12" rx="6" fill="#EEF2FF" />
                {/* Table row */}
                <rect x="160" y="320" width="300" height="40" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                <rect x="176" y="334" width="80" height="6" rx="3" fill="#CBD5E1" />
                <rect x="276" y="334" width="60" height="6" rx="3" fill="#CBD5E1" />
                <rect x="356" y="334" width="40" height="6" rx="3" fill="#CBD5E1" />
                <rect x="416" y="330" width="28" height="14" rx="7" fill="#4F46E5" opacity="0.15" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="section-padding bg-slate-50">
        <div className="container-content">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Purpose-built for your profession.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((template) => (
              <TemplateCard key={template.slug} template={template} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From purchase to productive in hours, not weeks.
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div key={item.step} className="relative">
                <span className="text-4xl font-bold text-indigo-100">{item.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
            >
              See how we design every system &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding bg-slate-50">
        <div className="container-content">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A system designed around your workflow.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {personas.map((persona) => (
              <div
                key={persona.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">{persona.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{persona.description}</p>
                <ul className="mt-4 space-y-2">
                  {persona.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/templates">Find your template &rarr;</Button>
          </div>
        </div>
      </section>

      {/* Compact FAQ */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <FAQAccordion items={homeFAQs} id="home-faq" />
          <div className="mt-6">
            <Link
              to="/about#faq"
              className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
            >
              View all FAQs &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
