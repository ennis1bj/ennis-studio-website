import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { portfolioProducts } from '../config/products';
import FAQAccordion from '../components/FAQAccordion';

const LINKEDIN_URL = 'https://www.linkedin.com/in/benjamin-ennis-ab3a8b60/';

const values = [
  {
    title: 'Build for the long term',
    description: 'We operate every product as a long-term investment, not a flip.',
  },
  {
    title: 'Ship early, iterate fast',
    description: 'We get working software in front of users quickly and improve from real feedback.',
  },
  {
    title: 'Solve operational problems',
    description:
      'We focus on software that eliminates real friction — compliance gaps, data silos, manual workflows.',
  },
  {
    title: 'Stay small on purpose',
    description:
      'We run lean by design. Small teams, low overhead, high ownership.',
  },
  {
    title: 'Compound through reinvestment',
    description:
      'Revenue from one product funds the next. Every product in the portfolio strengthens the whole.',
  },
  {
    title: 'Technical depth over breadth',
    description:
      'We go deep on the domains we serve — understanding regulatory needs, data models, and user workflows.',
  },
];

const extendedFAQs = [
  {
    question: 'What does Ennis Studio actually do?',
    answer:
      'Ennis Studio is a software portfolio company. We build and operate SaaS products as long-term investments. We also provide software development research, prototyping, and consulting services to founders and businesses.',
  },
  {
    question: 'What products does Ennis Studio operate?',
    answer:
      'We currently operate three products: GuardHound (breach monitoring and compliance intelligence), GuestyMigrate (data migration for short-term rental operators), and a Notion Development Studio producing premium industry-specific templates.',
  },
  {
    question: 'Do you build products for other companies?',
    answer:
      'Yes. We offer software research and prototyping, SaaS architecture consulting, AI agent development, and product strategy services. If you have an idea or need technical help, reach out via our contact page.',
  },
  {
    question: 'Are you a venture-backed company?',
    answer:
      'No. Ennis Studio is independently funded and operated. We reinvest revenue from our products into new opportunities. This lets us make long-term decisions without external pressure.',
  },
  {
    question: 'Where is Ennis Studio based?',
    answer:
      'Ennis Studio is based in Michigan. We work with clients and users across the United States.',
  },
  {
    question: 'Can I invest in or acquire one of your products?',
    answer:
      'We are generally not looking to sell, but we are always open to conversations. Reach out via our contact page if you want to discuss partnership or investment opportunities.',
  },
  {
    question: 'Do you still sell Notion templates?',
    answer:
      'Yes. Our Notion Development Studio is one of the three products in our portfolio. We continue to build and sell premium Notion operating systems for insurance agents, veterinary practices, and therapists.',
  },
  {
    question: 'How do I work with Ennis Studio?',
    answer:
      'The best way to start is through our contact form. Describe what you need — whether it is prototyping, architecture review, AI automation, or product strategy — and we will follow up with next steps.',
  },
];

export default function About() {
  const location = useLocation();

  useDocumentMeta({
    title: 'About — Ennis Studio',
    description:
      'Ennis Studio is a software portfolio company that builds and operates SaaS products. Learn about our mission, team, and portfolio.',
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
            A software portfolio company.
          </h1>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-600">
            <p>
              Ennis Studio builds, acquires, and operates software products as long-term
              investments. We focus on SaaS tools that solve real operational problems — compliance
              gaps, data migration headaches, fragmented workflows — and run them with small teams
              and high ownership.
            </p>
            <p>
              Beyond our own portfolio, we work with founders and businesses on software research,
              rapid prototyping, and architecture consulting. We bring the same product thinking
              we apply to our own investments to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="section-padding bg-slate-50" id="founder">
        <div className="container-content max-w-3xl">
          <h2 className="mb-10 text-2xl font-bold text-slate-900 sm:text-3xl">Meet the founder</h2>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <div className="flex-shrink-0">
              <img
                src="/images/ben-ennis.jpeg"
                alt="Ben Ennis, Founder of Ennis Studio"
                className="h-24 w-24 rounded-full object-cover object-top shadow-md ring-2 ring-navy-100"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Ben Ennis</h3>
                <p className="text-sm font-medium text-gold-600">Founder, Ennis Studio</p>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  Ben Ennis is a software entrepreneur and product builder based in Michigan. With a
                  background spanning enterprise software architecture, compliance technology, and
                  SaaS product development, Ben founded Ennis Studio to build and operate software
                  products that solve real problems — and hold them for the long term.
                </p>
                <p>
                  His approach starts with understanding the domain deeply, modeling the data
                  correctly, and shipping something useful fast. Ennis Studio is the product of that
                  philosophy applied across cybersecurity, hospitality tech, and knowledge work tools.
                </p>
              </div>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors duration-200 hover:border-gold-400 hover:text-gold-600"
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

      {/* Portfolio Overview */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <h2 className="mb-12 text-2xl font-bold text-slate-900 sm:text-3xl">
            What we operate
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {portfolioProducts.map((product) => (
              <div
                key={product.slug}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-gold-600">
                  {product.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.tagline}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/#portfolio"
              className="text-sm font-medium text-gold-600 transition-colors hover:text-gold-700"
            >
              See full portfolio details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-content">
          <h2 className="mb-12 text-2xl font-bold text-slate-900 sm:text-3xl">How we operate</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold-100">
                  <svg
                    className="h-3.5 w-3.5 text-gold-700"
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
                  <h3 className="text-sm font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white" id="faq">
        <div className="container-content max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <FAQAccordion items={extendedFAQs} id="about-faq" />
          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="text-sm font-medium text-gold-600 transition-colors hover:text-gold-700"
            >
              Still have questions? Get in touch &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
