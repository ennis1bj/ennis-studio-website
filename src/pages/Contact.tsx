import { useState, useRef } from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import Button from '../components/Button';

const interestOptions = [
  'Buying a template',
  'Custom build for my practice',
  'Team or group rollout',
  'Partnership or affiliate',
  'Other',
];

export default function Contact() {
  useDocumentMeta({
    title: 'Contact — Ennis Studio',
    description:
      'Get in touch about a template, custom Notion build, or team rollout.',
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Resend, EmailJS, or a backend API endpoint
    // to send form submissions to hello@ennis-studio.com
    console.log('Form submission:', formData);
    setSubmitted(true);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    formRef.current?.querySelector('input')?.focus();
  };

  return (
    <>
      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Get in touch
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Whether you&apos;re looking to buy a template, explore a custom build, or discuss a team
            rollout — we&apos;d like to hear from you.
          </p>

          {submitted ? (
            <div className="mt-10 rounded-xl border border-green-200 bg-green-50 p-8 text-center">
              <svg
                className="mx-auto h-12 w-12 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="mt-4 text-lg font-semibold text-green-900">Message sent</h2>
              <p className="mt-2 text-sm text-green-700">
                Thanks for reaching out. We&apos;ll get back to you within 1–2 business days.
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                  Company / Practice name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-slate-700">
                  I&apos;m interested in… <span className="text-red-500">*</span>
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
                >
                  <option value="">Select an option</option>
                  {interestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none resize-y"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send message
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Custom Builds */}
      <section className="section-padding bg-slate-50">
        <div className="container-content max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Need something built for your specific workflow?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Ennis Studio takes on a small number of custom Notion system builds for practices,
            teams, and agencies. If you have a specific industry, workflow, or team structure that
            needs a tailored system, get in touch.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Full database architecture and data modeling',
              'Role-based views and filtered dashboards',
              'Onboarding documentation and training materials',
              'Ongoing support and iteration available',
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button variant="primary" onClick={scrollToForm}>
              Tell us about your workspace &rarr;
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
