import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { portfolioProducts } from '../config/products';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { ArrowRight, ExternalLink } from 'lucide-react';
import ProductIcon from '../components/ProductIcon';

export default function Portfolio() {
  useDocumentMeta({
    title: 'Portfolio — Ennis Studio',
    description:
      'Explore the Ennis Studio software portfolio: GuardHound, GuestyMigrate, and our Notion Development Studio.',
  });

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="mb-12 max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Our Portfolio
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              We build and operate software products as long-term investments. Each product in our
              portfolio solves a specific operational problem for a well-defined audience.
            </p>
          </div>

          <div className="space-y-8">
            {portfolioProducts.map((product) => (
              <div
                key={product.slug}
                className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <ProductIcon product={product} size="lg" />
                      <h2 className="text-2xl font-bold text-slate-900">{product.name}</h2>
                      <Badge variant="outline">{product.category}</Badge>
                      <Badge variant="accent">
                        {product.status === 'live' ? 'Live' : product.status === 'beta' ? 'Beta' : 'In Development'}
                      </Badge>
                    </div>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
                      {product.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {product.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <svg
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-shrink-0">
                    {product.isInternal ? (
                      <Button to={product.url} variant="primary" size="md">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button href={product.url} variant="primary" size="md">
                        Visit Site <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
