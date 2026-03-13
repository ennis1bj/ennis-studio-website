import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  id?: string;
}

export default function FAQAccordion({ items, id }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id={id} className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const headingId = `faq-heading-${id || 'default'}-${index}`;
        const panelId = `faq-panel-${id || 'default'}-${index}`;

        return (
          <div key={index}>
            <button
              id={headingId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between py-5 text-left text-base font-medium text-slate-900 transition-colors duration-200 hover:text-indigo-600"
            >
              <span>{item.question}</span>
              <svg
                className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}
            >
              <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
