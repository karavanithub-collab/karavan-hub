import { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'RAG Systems for Small Business Canada | Karavan IT HUB',
  description:
    'Retrieval-Augmented Generation systems built for Canadian small businesses. Connect AI to your actual documents and knowledge — accurate answers, no hallucinations.',
  keywords:
    'RAG systems for small business Canada, retrieval-augmented generation Canada, AI knowledge base small business, RAG implementation Ontario, document AI Canada, business knowledge base AI',
  alternates: {
    canonical: 'https://karavanhub.com/rag-systems',
    languages: {
      'en-CA': 'https://karavanhub.com/rag-systems',
      en: 'https://karavanhub.com/rag-systems',
    },
  },
  openGraph: {
    type: 'website',
    title: 'RAG Systems for Small Business Canada | Karavan IT HUB',
    description:
      'Connect AI to your actual documents and knowledge. Accurate, source-grounded answers for staff and customers — no hallucinations.',
    url: 'https://karavanhub.com/rag-systems',
    siteName: 'Karavan IT HUB',
    locale: 'en_CA',
    images: [
      {
        url: 'https://karavanhub.com/images/og-ai-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'RAG Systems for Small Business Canada — Karavan IT HUB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAG Systems for Small Business Canada | Karavan IT HUB',
    description:
      'Connect AI to your actual business documents and knowledge. Built by Karavan IT HUB for Canadian SMBs.',
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
      '@id': 'https://karavanhub.com/rag-systems/#webpage',
      name: 'RAG Systems for Small Business Canada',
      url: 'https://karavanhub.com/rag-systems',
      datePublished: '2026-06-25',
      dateModified: '2026-06-25',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://karavanhub.com/#website',
        name: 'Karavan IT HUB',
        url: 'https://karavanhub.com',
      },
      about: { '@id': 'https://karavanhub.com/rag-systems/#service' },
      inLanguage: 'en-CA',
    },
    {
      '@type': 'Service',
      '@id': 'https://karavanhub.com/rag-systems/#service',
      name: 'RAG Systems for Small Business',
      description:
        'Retrieval-Augmented Generation systems that connect AI to your actual business documents, policies, and knowledge — delivering accurate, source-grounded answers to staff and customers.',
      provider: { '@id': 'https://karavanhub.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'State', name: 'Ontario' },
      ],
      serviceType: 'AI Implementation',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'RAG System Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Internal Knowledge Base RAG',
              description: 'Staff-facing RAG system that answers questions from your own SOPs, policies, and documentation.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Customer-Facing RAG',
              description: 'Customer-facing AI that answers questions from your product catalog, service descriptions, and support documentation.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Document Search RAG',
              description: 'AI-powered search across large collections of contracts, case files, manuals, or reports.',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://karavanhub.com/rag-systems/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://karavanhub.com' },
        { '@type': 'ListItem', position: 2, name: 'AI Solutions', item: 'https://karavanhub.com/ai-solutions' },
        { '@type': 'ListItem', position: 3, name: 'RAG Systems', item: 'https://karavanhub.com/rag-systems' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://karavanhub.com/rag-systems/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a RAG system in plain English?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RAG stands for Retrieval-Augmented Generation. It means connecting an AI model to your actual documents and knowledge so it can give accurate, source-specific answers instead of guessing from general training data. When someone asks a question, the system finds the relevant parts of your real content and uses that to generate a precise response.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do small businesses need a RAG system?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Without a retrieval layer, AI models answer from general training data and cannot access your specific documents, policies, prices, or procedures. They also hallucinate — inventing plausible-sounding but wrong answers. A RAG system fixes both problems: the AI works from your actual knowledge, and every answer is grounded in something real.',
          },
        },
        {
          '@type': 'Question',
          name: 'What kinds of documents can a RAG system work with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RAG systems can work with PDFs, Word documents, Excel files, web pages, database records, email archives, and more. We build the ingestion pipeline that imports and indexes your specific content, whatever format it is in.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a RAG system the same as a chatbot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A RAG system is the knowledge layer that powers a chatbot or AI assistant. The chatbot is the interface — the thing people type into. The RAG system is what ensures the answers it gives come from your actual documents rather than general AI training data.',
          },
        },
      ],
    },
  ],
};

const useCases = [
  {
    title: 'Internal Knowledge Base',
    description:
      'Staff ask questions in plain English and get answers drawn from your SOPs, policies, and documentation — not from memory or a colleague who may not know.',
  },
  {
    title: 'Customer-Facing Q&A',
    description:
      'Customers ask about your services, pricing, policies, or products and get accurate answers sourced from your real content — at any hour, without staff involvement.',
  },
  {
    title: 'Document Search',
    description:
      'Find the relevant section across hundreds of pages of contracts, manuals, or case files in seconds. Particularly useful for legal, healthcare, and compliance-heavy industries.',
  },
  {
    title: 'New Staff Onboarding',
    description:
      'New hires ask questions and get answers from your actual training materials and procedures — reducing the burden on senior staff and speeding up time-to-competence.',
  },
  {
    title: 'Sales Support',
    description:
      'Salespeople get instant answers to product, service, or pricing questions while on a call — without putting the customer on hold or looking through multiple systems.',
  },
  {
    title: 'Compliance and Policy Lookup',
    description:
      'Quickly surface relevant regulatory requirements, internal policies, or contractual obligations when they&apos;re needed most — without manual document review.',
  },
];

const steps = [
  {
    num: '1',
    title: 'Content Audit',
    body: 'We assess what knowledge you have and where it lives — PDFs, Word documents, your website, database records, email archives. We identify what\'s worth ingesting and what needs cleanup first.',
  },
  {
    num: '2',
    title: 'Ingestion Pipeline',
    body: 'We build the system that imports, processes, and indexes your content. When your documents are updated or new ones are added, the knowledge base updates automatically.',
  },
  {
    num: '3',
    title: 'Retrieval Configuration',
    body: 'We tune how the system finds relevant content — so it returns the right sections for the question being asked, not just the most popular chunks. This is where most RAG implementations get it wrong.',
  },
  {
    num: '4',
    title: 'Response Layer',
    body: 'We configure how the AI uses what it retrieves — citing source documents, flagging when it\'s uncertain, and escalating when a question falls outside its knowledge.',
  },
  {
    num: '5',
    title: 'Integration',
    body: 'We connect the system to wherever your team or customers are asking questions — a website widget, a Slack channel, an internal portal, or embedded in an existing tool.',
  },
];

export default function RAGSystemsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section
        className="relative min-h-[80vh] lg:min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] flex items-center overflow-hidden pt-[90px] md:pt-[100px] pb-[60px] md:pb-[80px]"
        aria-label="RAG Systems for Small Business Canada"
      >
        <div className="absolute top-[-150px] right-[-80px] w-[500px] h-[500px] rounded-full opacity-30" aria-hidden="true" style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[-100px] left-[-80px] w-[400px] h-[400px] rounded-full opacity-30" aria-hidden="true" style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', filter: 'blur(80px)' }} />

        <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 w-full">
          <nav className="mb-8 flex items-center gap-2 text-[13px] text-white/40" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-solutions" className="hover:text-white/70 transition-colors">AI Solutions</Link>
            <span>/</span>
            <span className="text-white/60">RAG Systems</span>
          </nav>

          <div className="max-w-[700px]">
            <h1
              className="font-headline font-bold text-white leading-[1.05] tracking-[-1.5px] mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}
            >
              RAG Systems for Small Business in Canada
            </h1>
            <p className="text-[17px] md:text-[20px] text-white/75 leading-[1.75] font-medium mb-10 max-w-[580px]">
              Ask your business a question. Get an actual answer. We connect AI to your real documents and knowledge — so the answers your staff and customers get are accurate, sourced, and yours.
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

      {/* ── WHAT IS RAG ── */}
      <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-white" aria-labelledby="what-heading">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2
                id="what-heading"
                className="font-headline text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-[var(--text-dark)] mb-5 leading-[1.15] tracking-[-0.5px]"
              >
                What is RAG? Plain English, no jargon.
              </h2>
              <p className="text-[16px] text-[var(--text-body)] leading-[1.8] mb-5">
                RAG stands for Retrieval-Augmented Generation. You don&apos;t need to know what that means. Here&apos;s what matters:
              </p>
              <p className="text-[16px] text-[var(--text-body)] leading-[1.8] mb-5">
                You have information — in documents, policies, manuals, past client files, product specs, your website. Right now, if someone wants to find something in that information, they&apos;re either searching through files by hand or asking a colleague.
              </p>
              <p className="text-[16px] text-[var(--text-body)] leading-[1.8] mb-5">
                A RAG system connects an AI model to your actual documents. When someone asks a question, the system finds the relevant parts of your real content and uses that to give a precise, accurate answer. It&apos;s not guessing. It&apos;s not making things up. It&apos;s working from what you&apos;ve actually written.
              </p>
              <p className="text-[16px] text-[var(--text-body)] leading-[1.8]">
                The result: your team finds answers in 30 seconds that used to take 15 minutes of digging. Your customers get accurate responses without staff involvement. Your knowledge is finally findable.
              </p>
            </div>

            <div className="lg:pt-2">
              <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-[var(--primary)] mb-5">
                Why generic AI fails without RAG
              </p>
              <ul className="list-none p-0 m-0 space-y-4 mb-8">
                {[
                  'It cannot answer questions about your specific services, prices, or policies',
                  'It invents plausible-sounding answers when it doesn\'t know something — confidently wrong',
                  'It treats every conversation like the first — no access to your actual knowledge',
                  'It cannot search your documents, files, or databases',
                  'It cannot cite a source because it\'s not working from one',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-[11px] font-bold mt-0.5">✕</span>
                    <span className="text-[15px] text-[var(--text-body)] leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[14px] text-[var(--text-muted)] leading-[1.7] italic border-l-2 border-[var(--primary)] pl-4">
                Most &ldquo;AI chatbots&rdquo; fail in real business use because they&apos;re not connected to anything real. RAG fixes that.
              </p>
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
              What Canadian SMBs use RAG systems for
            </h2>
            <p className="text-[16px] text-[var(--text-muted)] leading-[1.75] max-w-[520px] mx-auto">
              The common thread: businesses where knowledge is scattered and the cost of someone not finding the right answer is real.
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
                Karavan&apos;s approach to RAG
              </h2>
              <p className="text-[16px] text-[var(--text-body)] leading-[1.8] mb-4">
                Most RAG implementations fail at step three — retrieval configuration. They ingest documents correctly but return the wrong sections when someone asks a question. Getting the retrieval layer right is where the system earns its keep.
              </p>
              <p className="text-[16px] text-[var(--text-body)] leading-[1.8] mb-6">
                We&apos;ve built RAG systems on top of pgvector, Pinecone, and Weaviate. The right choice depends on your data volume, update frequency, and the tools you already use. We pick what fits, not what&apos;s trending.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-7 py-3.5 rounded-lg text-[14px] font-semibold leading-none no-underline transition-all duration-300 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 16px rgba(37, 99, 235, 0.25)' }}
              >
                Discuss your knowledge problem
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
                What changes when your knowledge is findable
              </h2>
              <p className="text-[15px] text-[var(--text-body)] leading-[1.8]">
                The impact shows up in two places: the time your team saves not digging for answers, and the quality of the answers your customers get when they ask.
              </p>
              <p className="text-[15px] text-[var(--text-body)] leading-[1.8] mt-4">
                For Canadian professional services firms, healthcare providers, distributors, and property managers — businesses where knowledge is scattered and the cost of a wrong answer is real — a well-built RAG system pays for itself quickly.
              </p>
            </div>

            <ul className="list-none p-0 m-0 space-y-3">
              {[
                'Staff find answers in 30 seconds that used to take 15 minutes of searching',
                'Customers get accurate responses at any hour without staff involvement',
                'New hires get up to speed faster with AI trained on your actual procedures',
                'Reduce repeat questions to your team on things that are already documented',
                'Give your documents legs — information people actually use instead of files that sit unread',
                'Every answer is grounded in a source your team can verify',
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
            Who needs a RAG system
          </h2>
          <p className="text-[16px] text-[var(--text-body)] leading-[1.8] mb-4">
            This is for Canadian businesses where knowledge is scattered — across shared drives, emails, systems, and people&apos;s heads — and where the cost of someone not finding the right answer is real. Professional services firms, healthcare providers, property managers, distributors with complex product catalogs, or any business with staff who spend time looking up answers instead of doing work.
          </p>
          <p className="text-[16px] text-[var(--text-body)] leading-[1.8]">
            If you have documents that contain valuable information that people can&apos;t easily access, RAG is the right conversation to have.{' '}
            <Link href="/ai-solutions" className="text-[var(--primary)] font-medium hover:underline">
              See our full AI solutions offering
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
              Your knowledge is more valuable than it looks. Let&apos;s make it findable.
            </h2>
            <p className="text-[15px] md:text-[17px] text-[var(--text-muted)] mb-8 leading-[1.7] max-w-[480px] mx-auto">
              We&apos;ll look at your content, your team&apos;s questions, and tell you honestly what a RAG system would change — before any commitment.
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
