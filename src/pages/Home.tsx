import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { portfolioProducts } from '../config/products';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { Search, Server, Bot, Target, ArrowRight, ExternalLink } from 'lucide-react';
import ProductIcon from '../components/ProductIcon';

const services = [
  {
    icon: Search,
    title: 'Software Research & Prototyping',
    description:
      'Rapid proof-of-concept development for early-stage software ideas. We validate feasibility and build working prototypes fast.',
  },
  {
    icon: Server,
    title: 'SaaS Architecture Consulting',
    description:
      'Technical architecture review and cloud infrastructure design. We help you build on a foundation that scales.',
  },
  {
    icon: Bot,
    title: 'AI Agent Development',
    description:
      'Building AI-powered automation workflows and agent systems. We turn manual processes into intelligent pipelines.',
  },
  {
    icon: Target,
    title: 'Product Strategy',
    description:
      'Go-to-market research, competitive analysis, and product positioning. We help you find the right market and message.',
  },
];

export default function Home() {
  useDocumentMeta({
    title: 'Ennis Studio — We Build Software That Compounds',
    description:
      'Ennis Studio is a software portfolio company. We build and operate SaaS products as long-term investments and offer software development research and prototyping services.',
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 px-6 py-24 md:px-8 lg:py-32">
        <div className="container-content text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            We Build Software That Compounds.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-300">
            Ennis Studio is a portfolio company. We build, acquire, and operate SaaS products —
            and help founders prototype their next idea.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="#portfolio" variant="primary" size="lg">
              View Our Portfolio
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Work With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="section-padding bg-white">
        <div className="container-content">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Portfolio
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProducts.map((product) => (
              <div
                key={product.slug}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <ProductIcon product={product} size="sm" />
                  <Badge variant="outline">{product.category}</Badge>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.tagline}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  {product.isInternal ? (
                    <Button to={product.url} variant="secondary" size="sm" className="w-full">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button href={product.url} variant="secondary" size="sm" className="w-full">
                      Visit Site <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-slate-50">
        <div className="container-content">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What We Build & How We Can Help
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50">
                    <Icon className="h-5 w-5 text-navy-700" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-slate-600">
            Ennis Studio is a Michigan-based software portfolio company founded by Ben Ennis. We
            invest our time and capital into software products we believe in — then operate them
            for the long term.
          </p>
          <div className="mt-6">
            <Link
              to="/about"
              className="text-sm font-medium text-gold-600 transition-colors hover:text-gold-700"
            >
              Learn more about us &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy-950 px-6 py-16 md:px-8">
        <div className="container-content text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Have an idea? Let&rsquo;s prototype it.
          </h2>
          <div className="mt-8">
            <Button to="/contact" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
