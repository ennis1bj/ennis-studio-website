import { useParams, Link } from 'react-router-dom';
import { templatesConfig } from '../config/templates';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import Badge from '../components/Badge';

export default function TemplateDetail() {
  const { slug } = useParams<{ slug: string }>();
  const template = templatesConfig.find((t) => t.slug === slug);

  useDocumentMeta({
    title: template ? `${template.name} — Ennis Studio` : 'Template not found — Ennis Studio',
    description: template?.tagline || 'Template not found.',
  });

  if (!template) {
    return (
      <section className="section-padding bg-white">
        <div className="container-content text-center">
          <h1 className="text-2xl font-bold text-slate-900">Template not found</h1>
          <p className="mt-4 text-slate-600">
            The template you're looking for doesn't exist.{' '}
            <Link to="/templates" className="text-indigo-600 underline hover:text-indigo-700">
              Browse all templates
            </Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Link
                to="/templates"
                className="mb-6 inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-slate-700"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                All templates
              </Link>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {template.name}
              </h1>
              <p className="mt-4 text-xl text-slate-600">{template.tagline}</p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Badge variant="accent">{template.complexity}</Badge>
                <span className="text-sm text-slate-500">{template.idealFor}</span>
              </div>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-600">
                {template.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="text-3xl font-bold text-indigo-600">{template.price}</span>
                <a
                  href={template.stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-7 py-3.5 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md active:bg-indigo-800"
                >
                  Buy template
                  <span aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href={template.notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-7 py-3.5 text-base font-medium text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:border-slate-400"
                >
                  Preview template
                </a>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                Secure checkout via Stripe. Preview opens on Notion — no account required.
              </p>

              {/* What's Included */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-slate-900">What&apos;s included</h2>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Databases
                    </h3>
                    <ul className="space-y-2">
                      {template.databases.map((db) => (
                        <li key={db} className="flex items-start gap-2 text-sm text-slate-600">
                          <svg
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8 8-4-4" />
                          </svg>
                          {db}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Key views
                    </h3>
                    <ul className="space-y-2">
                      {template.views.map((view) => (
                        <li key={view} className="flex items-start gap-2 text-sm text-slate-600">
                          <svg
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8 8-4-4" />
                          </svg>
                          {view}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Every template includes
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Example data pre-loaded so you can see the system in action immediately',
                      'Built-in setup guide and onboarding checklist',
                      'Best-practice property notes inside the workspace',
                      'Upgrade path suggestions (e.g., connecting to automations, adding team members)',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8 8-4-4" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Use Cases */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-slate-900">Example use cases</h2>
                <ul className="mt-6 space-y-3">
                  {template.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" aria-hidden="true" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Implementation time callout */}
              <div className="mt-12 rounded-xl border border-indigo-100 bg-indigo-50 p-6">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-indigo-900">Implementation time</p>
                    <p className="text-sm text-indigo-700">{template.implementationTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky sidebar (desktop) */}
            <div className="hidden lg:block">
              <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">{template.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{template.idealFor}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {template.badges.map((badge) => (
                    <Badge key={badge}>{badge}</Badge>
                  ))}
                </div>
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <span className="text-3xl font-bold text-indigo-600">{template.price}</span>
                  <a
                    href={template.stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md active:bg-indigo-800"
                  >
                    Buy template
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                  <a
                    href={template.notionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:border-slate-400"
                  >
                    Preview on Notion
                  </a>
                  <p className="mt-3 text-center text-xs text-slate-400">
                    Secure checkout via Stripe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom mobile CTA banner */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white p-4 shadow-lg lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">{template.name}</p>
            <p className="text-lg font-bold text-indigo-600">{template.price}</p>
          </div>
          <a
            href={template.stripeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 active:bg-indigo-800"
          >
            Buy template
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </>
  );
}
