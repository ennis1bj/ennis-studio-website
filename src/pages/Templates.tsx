import { templatesConfig } from '../config/templates';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import TemplateCard from '../components/TemplateCard';

export default function Templates() {
  useDocumentMeta({
    title: 'Templates — Ennis Studio',
    description:
      'Browse Notion OS templates built for your profession. InsureFlow, VetOS, Therapist OS.',
  });

  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            All templates
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Each system is designed for one profession. No generic starting points.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templatesConfig.map((template) => (
            <TemplateCard key={template.slug} template={template} showViewDetails />
          ))}
        </div>
      </div>
    </section>
  );
}
