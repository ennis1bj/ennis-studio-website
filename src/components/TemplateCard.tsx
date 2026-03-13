import { Link } from 'react-router-dom';
import type { Template } from '../config/templates';
import Badge from './Badge';

interface TemplateCardProps {
  template: Template;
  showViewDetails?: boolean;
}

export default function TemplateCard({ template, showViewDetails = false }: TemplateCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-indigo-200 hover:shadow-lg">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{template.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{template.idealFor}</p>
        </div>
        <span className="text-2xl font-bold text-indigo-600">{template.price}</span>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-slate-600">{template.tagline}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        <Badge variant="accent">{template.complexity}</Badge>
        {template.badges.map((badge) => (
          <Badge key={badge}>{badge}</Badge>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-3">
        <a
          href={template.notionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-indigo-700 active:bg-indigo-800 shadow-sm hover:shadow-md"
        >
          Preview &amp; get template
          <span aria-hidden="true">&rarr;</span>
        </a>
        {showViewDetails && (
          <Link
            to={`/templates/${template.slug}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:border-slate-400"
          >
            View details
          </Link>
        )}
      </div>
    </div>
  );
}
