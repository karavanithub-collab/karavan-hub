import { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'AI Agents for Small Business Ontario | Karavan IT HUB',
  description:
    'Custom AI agents that handle intake, lead qualification, follow-up, and internal workflows for Ontario small businesses. Built by Karavan IT HUB.',
  keywords:
    'AI agents for small business Ontario, AI automation agents Canada, autonomous AI systems, AI workflow agents Ontario, intelligent automation Niagara, AI agents for SMB',
  alternates: {
    canonical: 'https://karavanhub.com/ai-agents',
    languages: {
      'en-CA': 'https://karavanhub.com/ai-agents',
      en: 'https://karavanhub.com/ai-agents',
    },
  },
  openGraph: {
    type: 'website',
    title: 'AI Agents for Small Business in Ontario | Karavan IT HUB',
    description:
      'Custom AI agents for Ontario SMBs. We build systems that handle intake, follow-up, and workflows so your team focuses on work that matters.',
    url: 'https://karavanhub.com/ai-agents',
    siteName: 'Karavan IT HUB',
    locale: 'en_CA',
    images: [
      {
        url: 'https://karavanhub.com/images/og-ai-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Agents for Small Business Ontario — Karavan IT HUB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents for Small Business Ontario | Karavan IT HUB',
    description:
      'Custom AI agents that handle intake, follow-up, and internal workflows for Ontario SMBs.',
    images: ['https://karavanhub.com/images/twitter-ai-solutions.jpg'],
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Niagara, Ontario',
    'geo.position': '43.0896;-79.0849',
    ICBM: '43.0896, -79.0849',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://karavanhub.com/#organization',
      name: 'Karavan Hub',
      alternateName: 'Karavan IT HUB',
      url: 'https://karavanhub.com',
      logo: { '@type': 'ImageObject', url: 'https://karavanhub.com/logo.png' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Suite 31',
        addressLocality: 'Pelham',
        addressRegion: 'Ontario',
        addressCountry: 'CA',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: '+1-905-301-3936',
        email: 'karavan.it.hub@gmail.com',
        availableLanguage: ['English'],
      },
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'State', name: 'Ontario' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://karavanhub.com/ai-agents/#webpage',
      name: 'AI Agents for Small Business Ontario',
      url: 'https://karavanhub.com/ai-agents',
      datePublished: '2026-06-25',
      dateModified: '2026-06-25',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://karavanhub.com/#website',
        name: 'Karavan IT HUB',
        url: 'https://karavanhub.com',
      },
      about: { '@id': 'https://karavanhub.com/ai-agents/#service' },
      inLanguage: 'en-CA',
    },
    {
      '@type': 'Service',
      '@id': 'https://karavanhub.com/ai-agents/#service',
      name: 'AI Agents for Small Business',
      description:
        'Custom AI agents that handle customer intake, lead qualification, appointment booking, follow-up sequences, and internal workflows for Ontario small and medium businesses.',
      provider: { '@id': 'https://karavanhub.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'State', name: 'Ontario' },
      ],
      serviceType: 'AI Automation',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Agent Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Customer Intake AI Agent',
              description: 'Automated client intake that collects project details, contact info, and qualifies leads before they reach your team.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Lead Qualification AI Agent',
              description: 'AI-powered lead scoring and qualification that routes high-value prospects to sales and handles low-intent leads automatically.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Follow-Up Automation Agent',
              description: 'Automated follow-up sequences for quotes, proposals, and appointments that run without manual triggering.',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://karavanhub.com/ai-agents/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://karavanhub.com' },
        { '@type': 'ListItem', position: 2, name: 'AI Solutions', item: 'https://karavanhub.com/ai-solutions' },
        { '@type': 'ListItem', position: 3, name: 'AI Agents', item: 'https://karavanhub.com/ai-agents' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://karavanhub.com/ai-agents/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an AI agent for small business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An AI agent is a software system that can reason through a problem, decide what to do next, and take action — such as booking an appointment, updating a CRM, sending a follow-up email, or escalating to a human. Unlike a simple chatbot that answers questions, an AI agent actually completes tasks.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is an AI agent different from a chatbot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A chatbot answers questions. An AI agent takes action. Where a chatbot says "here is how to book a call," an AI agent books it. AI agents can connect to your calendar, CRM, inbox, and other tools to complete multi-step tasks autonomously.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to build a custom AI agent?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most focused AI agent projects — a single workflow like intake, qualification, or follow-up — take four to eight weeks from discovery to launch. More complex agents with multiple integrations may take longer. We share a clear timeline before any work begins.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do AI agents work for Ontario small businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. AI agents are particularly valuable for Ontario service businesses — trades companies, clinics, law firms, agencies, and property managers — where a significant portion of staff time goes to repetitive intake, follow-up, and routing tasks.',
          },
        },
      ],
    },
  ],
};

const useCases = [
  {
    title: 'Customer Intake',
    description:
      'Collect project details, contact information, scope, and timeline from new prospects automatically — before they ever speak to a human on your team.',
  },
  {
    title: 'Lead Qualification',
    description:
      'Score and qualify inbound leads based on their answers. Route high-value prospects straight to your salesperson and handle low-intent contacts automatically.',
  },
  {
    title: 'Appointment Booking',
    description:
      'Let the agent check your availability and book directly into your calendar — no back-and-forth, no waiting for someone to check and reply.',
  },
  {
    title: 'Quote Follow-Up',
    description:
      'Automatically check in on outstanding proposals at the right intervals. No more relying on someone remembering to send a follow-up on day three.',
  },
  {
    title: 'Internal Knowledge Retrieval',
    description:
      'Staff ask questions in plain English and get answers pulled from your own documents, SOPs, and systems — instead of pinging a colleague or searching through drives.',
  },
  {
    title: 'Client Onboarding',
    description:
      'Walk new clients through your onboarding steps automatically — collecting documents, signing agreements, scheduling kick-off calls, and confirming next steps.',
  },
];

const steps = [
  {
    num: '1',
    title: 'Discovery',
    body: 'We map the workflow the agent will handle end to end. What does it need to know? What systems does it need to touch? Where does human judgment still apply? We get specific before building anything.',
  },
  {
    num: '2',
    title: 'Design',
    body: 'We define the agent\'s behavior — what it says, how it handles unexpected inputs, what it does when something is outside its scope, and when it hands off to a person.',
  },
  {
    num: '3',
    title: 'Build and Integrate',
    body: 'We connect the agent to your tools: your CRM, calendar, inbox, database, or any other system it needs to act on. The agent isn\'t just talking — it\'s doing.',
  },
  {
    num: '4',
    title: 'Test, Launch, and Tune',
    body: 'We run the agent through real-world scenarios before it\'s live — including difficult edge cases and unusual inputs. After launch, we monitor closely and improve based on what we see.',
  },
];

export default function AIAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section
        className="relative min-h-[80vh] lg:min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] flex items-center overflow-hidden pt-[90px] md:pt-[100px] pb-[60px] md:pb-[80px]"
        aria-label="AI Agents for Small Business Ontario"
      >
        {/* Gradient orbs */}
        <div className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-30" aria-hidden="true" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[-100px] left-[-80px] w-[400px] h-[400px] rounded-full opacity-30" aria-hidden="true" style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)', filter: 'blur(80px)' }} />

        <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 w-full">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-[13px] text-white/40" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-solutions" className="hover:text-white/70 transition-colors">AI Solutions</Link>
            <span>/</span>
            <span className="text-white/60">AI Agents</span>
          </nav>

          <div className="max-w-[700px]">
            <h1
              className="font-headline font-bold text-white leading-[1.05] tracking-[-1.5px] mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}
            >
              AI Agents for Small Business in Ontario
            </h1>
            <p className="text-[17px] md:text-[20px] text-white/75 leading-[1.75] font-medium mb-10 max-w-[580px]">
              Software that does the work. Not just the talking. AI agents that handle intake, qualification, follow-up, and internal tasks — around the clock, without adding headcount.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-white text-[#1e3a8a] px-8 py-4 rounded-lg text-[15px] font-semibold leading-none no-underline transition-all duration-300 hover:bg-white/95 hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
              >
                Book a Free Consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/ai-solutions"
                className="inline-flex items-center gap-2 border border-white/30 text-white/80 px-7 py-4 rounded-lg text-[15px] font-medium leading-none no-underline transition-all duration-300 hover:border-white/60 hover:text-white"
              >
                See All AI Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS AN AI AGENT ── */}
      <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-white" aria-labelledby="what-heading">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2
                id="what-heading"
                className="font-headline text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-[var(--text-dark)] mb-5 leading-[1.15] tracking-[-0.5px]"
              >
                A chatbot answers questions. An AI agent takes action.
              </h2>
              <p className="text-[16px] text-[var(--text-body)] leading-[1.8] mb-5">
                An AI agent is a software system that can reason through a situation, decide what to do next, and then do it — without someone supervising every step. It can look something up, fill in a form, send an email, schedule a meeting, update a database, or escalate to a human when judgment is needed.
              </p>
              <p className="text-[16px] text-[var(--text-body)] leading-[1.8] mb-5">
                Where a basic chatbot says &ldquo;here&apos;s how you book a call,&rdquo; an AI agent books it. Where a simple automation runs a fixed sequence of steps, an AI agent adapts to what&apos;s happening in the conversation.
              </p>
              <p className="text-[16px] text-[var(--text-body)] leading-[1.8]">
                For small businesses in Ontario, this means automating the kinds of interactions that currently require a person: qualifying a new lead, gathering intake information from a new client, following up on a quote, or routing a support request to the right person.
              </p>
            </div>

            <div className="lg:pt-2">
              <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-[var(--primary)] mb-5">
                Problems AI agents remove
              </p>
              <ul className="list-none p-0 m-0 space-y-4">
                {[
                  'Leads that fall through the cracks when nobody responds fast enough',
                  'Staff time eaten by repetitive intake and qualification questions',
                  'Follow-up that depends on someone remembering to do it',
                  'Inconsistent customer experiences when different people handle things differently',
                  'After-hours inquiries that go unanswered until morning',
                  'Onboarding new clients manually, step by step, every time',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
                    <span className="text-[15px] text-[var(--text-body)] leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section
        className="py-[60px] md:py-[80px] lg:py-[100px] border-t border-gray-200"
        style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f0f7ff 100%)' }}
        aria-labelledby="usecases-heading"
      >
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2
              id="usecases-heading"
              className="font-headline text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-[var(--text-dark)] mb-4 leading-[1.15] tracking-[-0.5px]"
            >
              What Ontario SMBs use AI agents for
            </h2>
            <p className="text-[16px] text-[var(--text-muted)] leading-[1.75] max-w-[520px] mx-auto">
              Each agent is built around a specific workflow — not a generic template. Here are the most common starting points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 transition-shadow duration-300 hover:shadow-md"
              >
                <h3 className="font-headline text-[16px] font-semibold text-[var(--text-dark)] mb-2">
                  {uc.title}
                </h3>
                <p className="text-[14px] text-[var(--text-body)] leading-[1.7]">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE BUILD ── */}
      <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-white border-t border-gray-200" aria-labelledby="process-heading">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2
                id="process-heading"
                className="font-headline text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-[var(--text-dark)] mb-5 leading-[1.15] tracking-[-0.5px]"
              >
                How Karavan builds AI agents
              </h2>
              <p className="text-[16px] text-[var(--text-body)] leading-[1.8] mb-6">
                We don&apos;t sell pre-built agents. Every system we build is specific to the workflow you&apos;re automating, the tools you&apos;re already using, and the edge cases your business encounters. Here&apos;s what that process looks like.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-7 py-3.5 rounded-lg text-[14px] font-semibold leading-none no-underline transition-all duration-300 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 16px rgba(37, 99, 235, 0.25)' }}
              >
                Start with a free call
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-5">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-[13px] font-bold">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-headline text-[16px] font-semibold text-[var(--text-dark)] mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[var(--text-body)] leading-[1.7]">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section
        className="py-[60px] md:py-[80px] lg:py-[100px] border-t border-gray-200"
        style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)' }}
        aria-labelledby="outcomes-heading"
      >
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2
                id="outcomes-heading"
                className="font-headline text-[28px] sm:text-[34px] md:text-[38px] font-semibold text-[var(--text-dark)] mb-4 leading-[1.15] tracking-[-0.5px]"
              >
                What changes when the agent is live
              </h2>
              <p className="text-[15px] text-[var(--text-body)] leading-[1.8]">
                Most businesses see measurable impact within the first month — not because AI is magic, but because the workflow it replaces was genuinely expensive in time, errors, and missed opportunities.
              </p>
              <p className="text-[15px] text-[var(--text-body)] leading-[1.8] mt-4">
                This is especially true for Ontario service businesses where a single missed lead or delayed follow-up can represent thousands of dollars in lost revenue.
              </p>
            </div>

            <ul className="list-none p-0 m-0 space-y-3">
              {[
                'Respond to every new inquiry within 60 seconds — including nights and weekends',
                'Reduce intake from 20 minutes of back-and-forth to under 5 minutes',
                'Eliminate follow-up that depends on someone remembering to do it',
                'Give your team back 5–15 hours per week spent on repetitive conversations',
                'Create a consistent experience that doesn\'t depend on who happens to pick up',
                'Scale inquiry volume without adding headcount',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
                  <span className="text-[15px] text-[var(--text-body)] leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="py-[40px] md:py-[56px] bg-white border-t border-gray-200" aria-labelledby="whofor-heading">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <h2
            id="whofor-heading"
            className="font-headline text-[22px] sm:text-[26px] font-semibold text-[var(--text-dark)] mb-4 leading-[1.2] tracking-[-0.3px]"
          >
            Who this is for
          </h2>
          <p className="text-[16px] text-[var(--text-body)] leading-[1.8] mb-4">
            AI agents work best for Ontario service businesses that handle a significant volume of new inquiries, quotes, or client interactions — trades companies, clinics, law firms, agencies, property managers, or any business where a person is currently the bottleneck between someone asking and something happening.
          </p>
          <p className="text-[16px] text-[var(--text-body)] leading-[1.8]">
            If your team is spending meaningful time every week answering the same questions, chasing the same follow-ups, or manually routing the same requests — an AI agent is the right conversation to have.{' '}
            <Link href="/ai-solutions" className="text-[var(--primary)] font-medium hover:underline">
              See our full AI solutions offering
            </Link>{' '}
            or{' '}
            <Link href="/contact" className="text-[var(--primary)] font-medium hover:underline">
              book a free 30-minute call
            </Link>.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-[60px] md:py-[80px] lg:py-[100px] text-center"
        style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)' }}
        aria-label="Contact call to action"
      >
        <div className="max-w-[700px] mx-auto px-5 sm:px-6">
          <div
            className="bg-white rounded-[24px] py-[40px] px-6 md:py-[56px] md:px-12 border border-[rgba(37,99,235,0.08)]"
            style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.02), 0 12px 24px rgba(0,0,0,0.04), 0 24px 48px rgba(37,99,235,0.06)' }}
          >
            <h2 className="font-headline text-[22px] md:text-[30px] font-semibold text-[var(--text-dark)] mb-4 tracking-[-0.4px]">
              Ready to see what an AI agent could do for your business?
            </h2>
            <p className="text-[15px] md:text-[17px] text-[var(--text-muted)] mb-8 leading-[1.7] max-w-[480px] mx-auto">
              We&apos;ll map out the workflow together and tell you honestly whether an AI agent is the right fit — before any commitment.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[var(--primary)] text-white px-8 py-4 rounded-lg text-[15px] font-semibold leading-none no-underline transition-all duration-300 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5"
              style={{ boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)' }}
            >
              Book a Free Consultation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
