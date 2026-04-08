import { useDocumentMeta } from '../hooks/useDocumentMeta';
import Button from '../components/Button';

const CHECKOUT_URL = 'https://buy.stripe.com/bJecN4gyx9i715f5sAcAo04';

const categories = [
  { name: 'Sales & Outreach', count: 7, samples: ['Cold Email Writer', 'Follow-Up Sequence', 'Objection Handler'] },
  { name: 'Customer Support', count: 6, samples: ['Ticket Triage Agent', 'Angry Customer Drafter', 'KB Article Generator'] },
  { name: 'Content & Marketing', count: 7, samples: ['SEO Blog Post Writer', 'Social Calendar Builder', 'Ad Copy A/B Generator'] },
  { name: 'Operations & Admin', count: 6, samples: ['Meeting Notes Summarizer', 'SOP Generator', 'Vendor Comparison'] },
  { name: 'Product & Engineering', count: 6, samples: ['Feature Spec Writer', 'Bug Report Analyzer', 'Sprint Planning Agent'] },
  { name: 'Finance & Analysis', count: 6, samples: ['Financial Report Summarizer', 'Budget Variance Analyzer', 'Pricing Strategy Advisor'] },
  { name: 'HR & People', count: 6, samples: ['Job Description Generator', 'Interview Question Builder', 'Candidate Screener'] },
  { name: 'Strategy & Research', count: 6, samples: ['Competitive Analysis Agent', 'Market Sizing Estimator', 'SWOT Generator'] },
];

const includes = [
  '92-page PDF with 50 production-ready system prompts',
  'Every prompt is 200–450 words — detailed enough to actually work',
  'Works with ChatGPT, Claude, Gemini, and any other LLM',
  'Copy-paste ready — no blanks to fill, no templates to customize',
  '8 business categories covering every department',
  'Instant download — PDF delivered immediately after purchase',
  'Free updates — new prompts added to future versions at no cost',
];

const faqs = [
  {
    q: 'Which AI tools do these prompts work with?',
    a: 'Every prompt works with ChatGPT (GPT-4, GPT-4o), Claude (Sonnet, Opus), Google Gemini, and any other LLM that accepts system prompts. Paste them into the system prompt field, custom instructions, or at the start of a conversation.',
  },
  {
    q: 'Are these generic prompts I could write myself?',
    a: "No. Each prompt is 200–450 words with specific output formatting rules, edge case handling, tone constraints, and structured sections. These are the kind of system prompts that take hours to develop and test — we've done that work for you.",
  },
  {
    q: 'Is this a subscription?',
    a: 'No. $29 one-time. You get the full 92-page PDF immediately and any future version updates for free.',
  },
  {
    q: 'How do I receive the playbook?',
    a: "Immediately after payment, you're redirected to a download page where you can save the PDF. No waiting, no email verification, no account creation.",
  },
  {
    q: 'Can I use these for my team?',
    a: 'Yes. Share the PDF internally with your team. The prompts are designed for individual contributors and managers across all departments.',
  },
];

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PlusIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}

export default function Playbook() {
  useDocumentMeta({
    title: 'The AI Agent Playbook — 50 System Prompts for Business | Ennis Studio',
    description:
      '50 production-ready system prompts for ChatGPT, Claude, and Gemini. Covers sales, marketing, support, operations, product, finance, HR, and strategy. $29 one-time.',
  });

  return (
    <>
      {/* HERO */}
      <section className="bg-navy-950 px-6 py-20 md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-300">
              PDF &middot; 50 PROMPTS &middot; INSTANT DOWNLOAD
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Stop Writing Bad Prompts.{' '}
              <span className="text-indigo-400">Start Deploying Agents.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-navy-300">
              50 production-ready system prompts for ChatGPT, Claude, and Gemini — organized across 8
              business functions. Copy, paste, and get results that actually move your business forward.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={CHECKOUT_URL}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md active:bg-indigo-800"
              >
                Get the Playbook <span aria-hidden="true">&rarr;</span>
              </a>
              <span className="text-3xl font-bold text-white">
                $29 <span className="text-base font-medium text-navy-400">one-time</span>
              </span>
            </div>
          </div>

          {/* Right — code preview */}
          <div className="rounded-xl border border-white/[0.06] bg-navy-800 p-6">
            <div className="mb-4 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>
            <pre className="rounded-lg bg-navy-950 p-5 font-mono text-[11px] leading-relaxed text-navy-300 sm:text-xs">
              <span className="text-navy-500">{'// PROMPT 1.1 — Cold Email Writer'}</span>
              {'\n\n'}
              <span className="text-indigo-400">You are</span>
              {' an expert B2B cold email\ncopywriter with '}
              <span className="text-amber-400">10+</span>
              {' years of\nexperience in outbound sales.\n\n'}
              <span className="text-indigo-400">Your job</span>
              {' is to write a single cold\noutreach email. Follow these rules:\n\n'}
              <span className="text-amber-400">1.</span>
              {' Subject line: '}
              <span className="text-emerald-400">5 words or fewer</span>
              {'\n'}
              <span className="text-amber-400">2.</span>
              {' Opening: '}
              <span className="text-emerald-400">specific to them</span>
              {'\n'}
              <span className="text-amber-400">3.</span>
              {' Value prop: '}
              <span className="text-emerald-400">one sentence</span>
              {'\n'}
              <span className="text-amber-400">4.</span>
              {' Social proof: '}
              <span className="text-emerald-400">{'<15 words'}</span>
              {'\n'}
              <span className="text-amber-400">5.</span>
              {' CTA: '}
              <span className="text-emerald-400">15-min call or yes/no</span>
              {'\n'}
              <span className="text-amber-400">6.</span>
              {' Total: '}
              <span className="text-emerald-400">under 120 words</span>
            </pre>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <div className="border-b border-slate-200 bg-slate-50 px-6 py-4 text-center">
        <p className="text-sm text-slate-500">
          <span className="font-semibold text-slate-900">92-page PDF</span> with 50 copy-paste prompts
          across <span className="font-semibold text-slate-900">8 business categories</span>. Works with
          any LLM.
        </p>
      </div>

      {/* CATEGORIES */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            8 Categories. 50 Prompts. Zero Filler.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-base text-slate-500">
            Every prompt was built for a specific job. Find your function, copy the prompt, and deploy.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-indigo-300"
              >
                <h3 className="text-sm font-bold text-slate-900">{cat.name}</h3>
                <span className="text-xs font-medium text-slate-400">{cat.count} prompts</span>
                <ul className="mt-3 space-y-1">
                  {cat.samples.map((s) => (
                    <li key={s} className="text-xs text-slate-500">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE PROMPT */}
      <section className="section-padding bg-slate-50">
        <div className="container-content">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            See What's Inside
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-base text-slate-500">
            Every prompt is this detailed. Here's one of the 50.
          </p>
          <div className="mx-auto mt-10 max-w-2xl rounded-xl bg-navy-950 p-7">
            <p className="text-[11px] font-semibold tracking-wider text-indigo-400">PROMPT 3.1</p>
            <h3 className="mt-1 text-lg font-bold text-white">
              SEO Blog Post Writer with Keyword Targeting
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-300">
              Paste your target keyword and audience context. The AI produces a complete,
              publication-ready blog post with proper heading structure, internal linking suggestions,
              and a meta description.
            </p>
            <pre className="mt-4 rounded-lg border border-white/[0.06] bg-white/[0.03] p-4 font-mono text-xs leading-[1.8] text-slate-300">
{`You are an expert SEO content strategist and writer.
You produce long-form blog posts that rank on page
one of Google while genuinely helping the reader.

When I give you a primary keyword, target audience,
and optional notes, produce a complete blog post:

1. Title: Include the primary keyword. Under 60 chars.
2. Structure: H2 and H3 subheadings every 200-300 words.
3. Opening: Hook with a stat, question, or scenario.
4. Body: Actionable, specific advice. No filler.
5. Length: 1,500-2,500 words depending on depth.
6. Internal links: Suggest 2-3 related content links.
7. Meta description: Under 155 characters w/ keyword.
8. Tone: Authoritative but conversational. Second person.`}
            </pre>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What You Get
          </h2>
          <ul className="mx-auto mt-10 max-w-xl space-y-0 divide-y divide-slate-100">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 py-3.5 text-[15px] text-slate-700">
                <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-50">
        <div className="container-content">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-10 max-w-2xl divide-y divide-slate-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <PlusIcon className="h-5 w-5 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-navy-950 px-6 py-16 text-center md:px-8">
        <div className="container-content">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            50 Prompts. One PDF. Immediate Results.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-navy-300">
            Stop experimenting with vague instructions. Start deploying agents that work.
          </p>
          <p className="mt-6 text-4xl font-bold text-white">$29</p>
          <p className="mt-1 text-sm text-slate-400">One-time purchase. Instant PDF download. Free updates.</p>
          <div className="mt-6">
            <a
              href={CHECKOUT_URL}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md active:bg-indigo-800"
            >
              Get the Playbook <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
