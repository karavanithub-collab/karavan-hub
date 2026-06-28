import { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Custom AI Chatbot Ontario Small Business',
  description:
    'Custom AI chatbots built specifically for Ontario small businesses. Not a generic widget — a chatbot that knows your services, speaks in your voice, and converts.',
  keywords:
    'custom AI chatbot Ontario small business, business chatbot Ontario, AI chatbot for SMB Canada, custom chatbot development Ontario, conversational AI small business, chatbot for Canadian business',
  alternates: {
    canonical: 'https://www.karavanhub.com/custom-chatbots',
    languages: {
      'en-CA': 'https://www.karavanhub.com/custom-chatbots',
      en: 'https://www.karavanhub.com/custom-chatbots',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Custom AI Chatbot for Ontario Small Business | Karavan IT HUB',
    description:
      'Built for your business — not a generic template. A custom AI chatbot that knows your services, captures leads, and converts 24/7.',
    url: 'https://www.karavanhub.com/custom-chatbots',
    siteName: 'Karavan IT HUB',
    locale: 'en_CA',
    images: [
      {
        url: 'https://www.karavanhub.com/images/og-ai-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom AI Chatbot for Ontario Small Business — Karavan IT HUB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom AI Chatbot Ontario Small Business | Karavan IT HUB',
    description:
      'A custom AI chatbot that knows your services, speaks in your voice, and captures leads 24/7. Built for Ontario SMBs by Karavan IT HUB.',
    images: ['https://www.karavanhub.com/images/twitter-ai-solutions.jpg'],
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
      '@id': 'https://www.karavanhub.com/#organization',
      name: 'Karavan Hub',
      alternateName: 'Karavan IT HUB',
      url: 'https://www.karavanhub.com',
      logo: { '@type': 'ImageObject', url: 'https://www.karavanhub.com/logo.png' },
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
      '@id': 'https://www.karavanhub.com/custom-chatbots/#webpage',
      name: 'Custom AI Chatbot Ontario Small Business',
      url: 'https://www.karavanhub.com/custom-chatbots',
      datePublished: '2026-06-25',
      dateModified: '2026-06-25',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.karavanhub.com/#website',
        name: 'Karavan IT HUB',
        url: 'https://www.karavanhub.com',
      },
      about: { '@id': 'https://www.karavanhub.com/custom-chatbots/#service' },
      inLanguage: 'en-CA',
    },
    {
      '@type': 'Service',
      '@id': 'https://www.karavanhub.com/custom-chatbots/#service',
      name: 'Custom AI Chatbot for Small Business',
      description:
        'Custom AI chatbots built for Ontario small businesses — trained on your services, written in your voice, and configured to capture leads, answer questions, and book appointments around the clock.',
      provider: { '@id': 'https://www.karavanhub.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'State', name: 'Ontario' },
      ],
      serviceType: 'AI Chatbot Development',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Custom Chatbot Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Lead Capture Chatbot',
              description: 'AI chatbot that engages website visitors, qualifies them, and captures contact information — 24/7.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Customer Support Chatbot',
              description: 'AI that answers common questions, handles support requests, and escalates to a human when needed.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Appointment Booking Chatbot',
              description: 'Conversational AI that books appointments directly into your calendar without requiring staff involvement.',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.karavanhub.com/custom-chatbots/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.karavanhub.com' },
        { '@type': 'ListItem', position: 2, name: 'AI Solutions', item: 'https://www.karavanhub.com/ai-solutions' },
        { '@type': 'ListItem', position: 3, name: 'Custom Chatbots', item: 'https://www.karavanhub.com/custom-chatbots' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.karavanhub.com/custom-chatbots/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between a custom AI chatbot and a generic one?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A generic chatbot is built for everyone, which means it works well for no one in particular. It doesn\'t know your services, your prices, your policies, or how you talk to customers. A custom AI chatbot is trained on your actual business — what you offer, what questions you commonly get, and what actions you want visitors to take. The result is a more accurate, more useful experience that reflects your brand.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a custom AI chatbot cost for a small business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Custom AI chatbot projects at Karavan IT HUB typically start at $2,500 for a focused use case — lead capture or customer Q&A. More complex implementations with multiple integrations, booking, and a knowledge base layer range from $5,000 to $12,000. We provide a fixed-scope quote before work begins so there are no surprises.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to build a custom chatbot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A focused custom chatbot — lead capture, Q&A, or appointment booking — typically takes three to six weeks from kick-off to launch. More complex builds with deep integrations may take eight to twelve weeks. We share a clear timeline in your project proposal.',
          },
        },
        {
          '@type': 'Question',
          name: 'What platforms can a custom chatbot integrate with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We can integrate custom chatbots with your website (any platform), CRM systems, Google Calendar and Calendly for booking, email and SMS tools, and most business software via API. During discovery, we map the integrations that matter for your specific workflow.',
          },
        },
      ],
    },
  ],
};

const comparison = [
  {
    aspect: 'Knowledge',
    generic: 'Knows nothing about your business, services, or prices',
    custom: 'Trained on your actual offerings, policies, and FAQs',
  },
  {
    aspect: 'Tone',
    generic: 'Robotic, impersonal — obviously a bot',
    custom: 'Written in your voice, consistent with your brand',
  },
  {
    aspect: 'Actions',
    generic: 'Directs visitors to call or email — no conversion',
    custom: 'Books calls, captures leads, qualifies prospects directly',
  },
  {
    aspect: 'Accuracy',
    generic: 'Invents answers when it doesn\'t know something',
    custom: 'Only answers from what it\'s been configured to know',
  },
  {
    aspect: 'Integration',
    generic: 'Standalone — no connection to your systems',
    custom: 'Connected to your CRM, calendar, and tools',
  },
];

const useCases = [
  {
    title: 'Lead Capture',
    description:
      'Engage visitors when they land on your site — ask the right questions, collect contact details, and qualify interest before they leave.',
  },
  {
    title: 'FAQ & Service Questions',
    description:
      'Answer the questions that come up over and over — about your process, your pricing range, your service area, what to expect — without tying up your team.',
  },
  {
    title: 'Appointment Booking',
    description:
      'Book discovery calls, consultations, or service appointments directly into your calendar through a conversational interface.',
  },
  {
    title: 'After-Hours Coverage',
    description:
      'Capture leads and answer questions at 11pm on a Thursday — when your team is off and your competitor\'s contact form is just sitting there.',
  },
  {
    title: 'New Client Onboarding',
    description:
      'Walk a new client through your process, collect intake information, and set expectations — before the first call even happens.',
  },
  {
    title: 'Staff Support',
    description:
      'Internal-facing chatbots that help staff find policies, procedures, or answers to operational questions from your own documentation.',
  },
];

const steps = [
  {
    num: '1',
    title: 'Discovery',
    body: 'We define the chatbot\'s job: what it should handle, what questions it will answer, what actions it should take, and when it should hand off to a human.',
  },
  {
    num: '2',
    title: 'Knowledge Configuration',
    body: 'We load the chatbot with your actual content — your services, pricing, FAQs, policies, and anything else it needs to answer accurately.',
  },
  {
    num: '3',
    title: 'Conversation Design',
    body: 'We map the conversation flows — how it greets visitors, how it handles unexpected questions, how it captures lead information, and how it exits gracefully.',
  },
  {
    num: '4',
    title: 'Integration',
    body: 'We connect the chatbot to your tools: your CRM, calendar, email, or SMS. Actions the chatbot takes show up in the right places.',
  },
  {
    num: '5',
    title: 'Testing and Launch',
    body: 'We test across browsers and devices, run edge-case scenarios, and monitor closely in the first weeks after launch. Most chatbots improve meaningfully in the first 30 days.',
  },
];

export default function CustomChatbotsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section
        className="relative min-h-[80vh] lg:min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] flex items-center overflow-hidden pt-[90px] md:pt-[100px] pb-[60px] md:pb-[80px]"
        aria-label="Custom AI Chatbot Ontario Small Business"
      >
        <div className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-30" aria-hidden="true" style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[-100px] left-[-80px] w-[400px] h-[400px] rounded-full opacity-30" aria-hidden="true" style={{ background: 'radial-gradient(circle, #34d399 0%, transparent 70%)', filter: 'blur(80px)' }} />

        <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 w-full">
          <div className="max-w-[700px]">
            <h1
              className="font-headline font-bold text-white leading-[1.05] tracking-[-1.5px] mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}
            >
              Custom AI Chatbot for Ontario Small Business
            </h1>
            <p className="text-[17px] md:text-[20px] text-white/75 leading-[1.75] font-medium mb-10 max-w-[580px]">
              Not another generic widget. A chatbot trained on your services, written in your voice, and built to capture leads and convert visitors — 24 hours a day.
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

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'AI Solutions', href: '/ai-solutions' },
        { label: 'Custom Chatbots' },
      ]} />

      {/* ── CUSTOM VS GENERIC ── */}
      <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-white" aria-labelledby="compare-heading">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center mb-10">
            <h2
              id="compare-heading"
              className="font-headline text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-[var(--text-dark)] mb-4 leading-[1.15] tracking-[-0.5px]"
            >
              Generic chatbot vs. custom AI chatbot
            </h2>
            <p className="text-[16px] text-[var(--text-muted)] leading-[1.75] max-w-[500px] mx-auto">
              The difference is not just the technology. It&apos;s what the chatbot actually knows and what it can do for your business.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[14px] md:text-[15px]" role="table">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-[var(--text-muted)] font-medium border-b border-gray-200 w-[20%]">Feature</th>
                  <th className="text-left py-3 px-4 text-[var(--text-muted)] font-medium border-b border-gray-200 w-[40%]">Generic Chatbot</th>
                  <th className="text-left py-3 px-4 text-[var(--primary)] font-semibold border-b border-gray-200 w-[40%]">Custom AI Chatbot</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}>
                    <td className="py-3 px-4 font-semibold text-[var(--text-dark)] border-b border-gray-100">{row.aspect}</td>
                    <td className="py-3 px-4 text-[var(--text-body)] border-b border-gray-100 leading-[1.6]">{row.generic}</td>
                    <td className="py-3 px-4 text-[var(--text-dark)] border-b border-gray-100 leading-[1.6] font-medium">{row.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              What Ontario businesses use custom chatbots for
            </h2>
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

      {/* ── PROCESS ── */}
      <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-white border-t border-gray-200" aria-labelledby="process-heading">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2
                id="process-heading"
                className="font-headline text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-[var(--text-dark)] mb-5 leading-[1.15] tracking-[-0.5px]"
              >
                How Karavan builds custom chatbots
              </h2>
              <p className="text-[16px] text-[var(--text-body)] leading-[1.8] mb-4">
                We don&apos;t use drag-and-drop chatbot builders. We design, configure, and test each chatbot as a system — with attention to what it knows, how it handles uncertainty, and what happens when a conversation goes somewhere unexpected.
              </p>
              <p className="text-[16px] text-[var(--text-body)] leading-[1.8] mb-6">
                Most chatbot projects that disappoint do so because the conversation design wasn&apos;t thought through. We put as much time into the flows as we do the technical implementation.
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

      {/* ── PRICING ANCHOR ── */}
      <section
        className="py-[60px] md:py-[80px] lg:py-[100px] border-t border-gray-200"
        style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)' }}
        aria-labelledby="pricing-heading"
      >
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2
                id="pricing-heading"
                className="font-headline text-[28px] sm:text-[34px] md:text-[38px] font-semibold text-[var(--text-dark)] mb-4 leading-[1.15] tracking-[-0.5px]"
              >
                What a custom chatbot costs
              </h2>
              <p className="text-[15px] text-[var(--text-body)] leading-[1.8] mb-4">
                We share pricing ranges openly. Most focused chatbot projects — lead capture, customer Q&A, or appointment booking — start at <strong>$2,500</strong>.
              </p>
              <p className="text-[15px] text-[var(--text-body)] leading-[1.8] mb-4">
                More complex builds with a RAG knowledge base, multiple integrations, and booking functionality typically range from <strong>$5,000 to $12,000</strong>.
              </p>
              <p className="text-[15px] text-[var(--text-body)] leading-[1.8]">
                We quote fixed scope — you know the cost before work begins. Ongoing hosting and maintenance is available separately for businesses that want continued support.
              </p>
            </div>

            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-[var(--primary)] mb-5">
                What&apos;s included in every build
              </p>
              <ul className="list-none p-0 m-0 space-y-3">
                {[
                  'Discovery call and workflow mapping',
                  'Conversation design and flow documentation',
                  'Knowledge configuration using your actual content',
                  'CRM, calendar, or email integration (where applicable)',
                  'Cross-browser and mobile testing',
                  'Launch support and 30-day monitoring',
                  'Documentation so your team can make simple updates',
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
            Ontario small businesses that have website traffic but aren&apos;t converting it. Service companies that get inquiries after hours and have no way to respond. Any business where a staff member is currently spending meaningful time answering the same questions repeatedly — about process, pricing, service area, or next steps.
          </p>
          <p className="text-[16px] text-[var(--text-body)] leading-[1.8]">
            If you&apos;re considering a chatbot and have already looked at generic solutions that felt like they wouldn&apos;t represent your business properly — that&apos;s the right instinct.{' '}
            <Link href="/ai-solutions" className="text-[var(--primary)] font-medium hover:underline">
              Explore our full AI solutions offering
            </Link>{' '}
            or{' '}
            <Link href="/contact" className="text-[var(--primary)] font-medium hover:underline">
              book a free 30-minute consultation
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
              Stop losing leads to slow response times and empty contact forms.
            </h2>
            <p className="text-[15px] md:text-[17px] text-[var(--text-muted)] mb-8 leading-[1.7] max-w-[480px] mx-auto">
              We&apos;ll walk through your current site and inquiry process and show you exactly what a custom chatbot would change — no commitment required.
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
