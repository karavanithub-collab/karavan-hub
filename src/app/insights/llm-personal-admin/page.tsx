import { Metadata } from 'next';
import Image from 'next/image';
import NewsletterCTA from '@/components/sections/NewsletterCTA';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Your Business Doesn\'t Need More Hours. It Needs an AI Admin.',
  description:
    'Small business owners spend 16 hours a week on admin work. Learn how to use an LLM as your personal admin — drafting emails, proposals, meeting notes, and more in minutes.',
  keywords:
    'LLM for small business, AI admin assistant Canada, ChatGPT for business Ontario, AI productivity tools small business, business automation Niagara, AI writing assistant, save time with AI, small business AI tools 2026',
  authors: [{ name: 'Nyah S.', url: 'https://www.karavanhub.com' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://www.karavanhub.com/insights/llm-personal-admin',
    languages: {
      'en-CA': 'https://www.karavanhub.com/insights/llm-personal-admin',
      en: 'https://www.karavanhub.com/insights/llm-personal-admin',
    },
  },
  openGraph: {
    type: 'article',
    title: 'Your Business Doesn\'t Need More Hours. It Needs an AI Admin.',
    description:
      'Small business owners lose 16 hours a week to admin. Here\'s how to use an LLM to take it back — with real prompts and concrete use cases.',
    url: 'https://www.karavanhub.com/insights/llm-personal-admin',
    siteName: 'Karavan Hub',
    locale: 'en_CA',
    authors: ['Nyah S.'],
    publishedTime: '2026-07-10T00:00:00Z',
    modifiedTime: '2026-07-10T00:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Business Doesn\'t Need More Hours. It Needs an AI Admin.',
    description:
      'Small business owners lose 16 hours a week to admin. Here\'s how an LLM takes it back.',
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Niagara Region',
    'geo.position': '43.0896;-79.0849',
    ICBM: '43.0896, -79.0849',
  },
};

const SCHEMA_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.karavanhub.com/#organization',
      name: 'Karavan Hub',
      url: 'https://www.karavanhub.com',
      logo: { '@type': 'ImageObject', url: 'https://www.karavanhub.com/logo.png' },
      description: 'AI and IT solutions company based in Niagara, Ontario.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Suite 31',
        addressLocality: 'Pelham',
        addressRegion: 'Ontario',
        postalCode: 'L0S 1E0',
        addressCountry: 'CA',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-905-301-3936',
        email: 'karavan.it.hub@gmail.com',
        contactType: 'sales',
        availableLanguage: ['English'],
        areaServed: ['CA', 'US', 'SA'],
      },
      founder: {
        '@type': 'Person',
        '@id': 'https://www.karavanhub.com/#nyah',
        name: 'Nyah S.',
        jobTitle: 'AI Automation Consultant',
      },
      sameAs: ['https://www.linkedin.com/company/karavanhub'],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.karavanhub.com/insights/llm-personal-admin/#webpage',
      url: 'https://www.karavanhub.com/insights/llm-personal-admin',
      name: 'Your Business Doesn\'t Need More Hours. It Needs an AI Admin.',
      description: 'Practical guide to using large language models as a personal admin assistant for small business owners.',
      isPartOf: { '@id': 'https://www.karavanhub.com/#website' },
      about: { '@id': 'https://www.karavanhub.com/#organization' },
      datePublished: '2026-07-10',
      dateModified: '2026-07-10',
      inLanguage: 'en-CA',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['article h1', 'article h2', 'article p:first-of-type'],
      },
    },
    {
      '@type': 'BlogPosting',
      '@id': 'https://www.karavanhub.com/insights/llm-personal-admin/#article',
      headline: 'Your Business Doesn\'t Need More Hours. It Needs an AI Admin.',
      description: 'Practical guide to using large language models as a personal admin assistant for small business owners.',
      image: 'https://www.karavanhub.com/images/ai-workflows.jpg',
      author: { '@id': 'https://www.karavanhub.com/#nyah' },
      publisher: { '@id': 'https://www.karavanhub.com/#organization' },
      mainEntityOfPage: { '@id': 'https://www.karavanhub.com/insights/llm-personal-admin/#webpage' },
      datePublished: '2026-07-10',
      dateModified: '2026-07-10',
      keywords: ['LLM for small business', 'AI admin assistant', 'ChatGPT for business', 'business productivity', 'small business automation', 'Ontario', 'Canada'],
      articleSection: 'AI Productivity',
      wordCount: 1350,
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.karavanhub.com/insights/llm-personal-admin/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an LLM and how does it help small businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A large language model (LLM) is an AI system — like ChatGPT, Claude, or Gemini — trained to understand and write text at a high level. For small businesses, it acts as an on-demand admin assistant: drafting emails, writing proposals, summarizing meetings, answering customer FAQs, and handling any task that involves reading or writing.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many hours per week does admin work cost small business owners?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Research by McKinsey and SCORE consistently finds that small business owners spend between 14 and 16 hours per week on administrative tasks — email, scheduling, documentation, proposals, and follow-ups.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it safe to use AI tools like ChatGPT for business tasks?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For most administrative tasks — drafting copy, summarizing notes, creating templates — yes. The key rule is to never paste sensitive client data, financial records, or confidential contracts into a public AI tool. Use general context instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'What admin tasks can I realistically hand off to an LLM today?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can immediately delegate: email drafts and replies, project proposals and quotes, meeting notes and action item summaries, customer FAQ responses, job descriptions, social media captions, policy documents, and research summaries.',
          },
        },
        {
          '@type': 'Question',
          name: 'What tasks should I NOT hand off to an LLM?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Do not rely on an LLM for legal or financial advice specific to your situation, factual claims about recent events without verifying, or decisions that require direct knowledge of your clients or relationships.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get better results from ChatGPT or Claude for business tasks?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Give it a role, context, task, and constraints. For example: "You are a professional business consultant. Write a follow-up email to a potential client. Warm but professional. Under 120 words." Treat the first response as a draft and refine with follow-up instructions.',
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      '@id': 'https://www.karavanhub.com/insights/llm-personal-admin/#howto',
      name: 'How to Use an LLM as Your Business Admin Assistant',
      description: 'A practical guide for small business owners to start delegating admin tasks to AI in under 15 minutes.',
      totalTime: 'PT15M',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'CAD', value: '0' },
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Pick one task you\'ve been avoiding', text: 'Choose a specific piece of admin work — an email you haven\'t written, a proposal you\'ve been putting off. Start with one concrete task.' },
        { '@type': 'HowToStep', position: 2, name: 'Give the LLM a role and context', text: 'Start your prompt by setting context: "You are a professional consultant writing on behalf of a small IT firm in Ontario."' },
        { '@type': 'HowToStep', position: 3, name: 'Give a clear, specific instruction with constraints', text: 'State exactly what you want: "Write a follow-up email after our discovery call. Warm but professional. Under 150 words. End with a soft next-step ask."' },
        { '@type': 'HowToStep', position: 4, name: 'Treat the output as a draft', text: 'Review what it returns. Add your own voice, fix anything that\'s off, and send or use it.' },
        { '@type': 'HowToStep', position: 5, name: 'Build a personal prompt library', text: 'When a prompt works well, save it. After a few weeks you\'ll have a library of prompts that reliably produce good output.' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.karavanhub.com' },
        { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.karavanhub.com/insights' },
        { '@type': 'ListItem', position: 3, name: 'LLM as Your Personal Admin', item: 'https://www.karavanhub.com/insights/llm-personal-admin' },
      ],
    },
  ],
};

const pCls = 'text-[15px] md:text-[17px] leading-[1.85] mb-[1.1em] text-[var(--text-body)] font-light';
const h2Cls = 'text-[24px] md:text-[28px] leading-[1.3] tracking-[-0.01em] mt-[36px] md:mt-[56px] mb-[20px] md:mb-[24px] text-[var(--text-dark)] font-semibold';
const h3Cls = 'text-[18px] md:text-[20px] leading-[1.3] mt-[28px] md:mt-[40px] mb-[14px] md:mb-[16px] text-[var(--text-dark)] font-semibold';

export default function LLMAdminArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_LD) }}
      />

      {/* ── DARK GRADIENT HERO HEADER (matches homepage) ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #2563eb 100%)' }}
      >
        {/* Orbs */}
        <div className="absolute top-[-150px] right-[-80px] w-[500px] h-[500px] rounded-full opacity-40 pointer-events-none" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[-60px] left-[-80px] w-[350px] h-[350px] rounded-full opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute top-[40%] left-[40%] w-[280px] h-[280px] rounded-full opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', filter: 'blur(80px)' }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Floating particles */}
        <div className="absolute w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float pointer-events-none" style={{ top: '20%', left: '8%' }} />
        <div className="absolute w-1.5 h-1.5 bg-[rgba(139,92,246,0.7)] rounded-full animate-float pointer-events-none" style={{ top: '35%', right: '12%', animationDelay: '-2s' }} />
        <div className="absolute w-1 h-1 bg-[rgba(34,211,238,0.8)] rounded-full animate-float pointer-events-none" style={{ bottom: '20%', left: '18%', animationDelay: '-4s' }} />
        <div className="absolute w-1 h-1 bg-[rgba(147,197,253,0.5)] rounded-full animate-float pointer-events-none" style={{ top: '55%', right: '22%', animationDelay: '-1s' }} />

        <div className="relative z-10 mx-auto max-w-[900px] px-5 sm:px-6 md:px-8 pt-[120px] md:pt-[140px] pb-12 md:pb-16">
          {/* Back link */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs tracking-wide text-white/50 font-normal mb-8 md:mb-10 transition-colors duration-200 hover:text-[#22d3ee]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Insights
          </Link>

          {/* Category pill */}
          <div className="mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[#22d3ee]/30 text-[#22d3ee] bg-[#22d3ee]/10">
              AI Productivity
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-headline font-bold text-white leading-[1.05] mb-6 tracking-[-1px]"
            style={{ fontSize: 'clamp(32px, 5.5vw, 64px)' }}
          >
            Your Business Doesn&apos;t Need More Hours.{' '}
            <span className="bg-gradient-to-r from-white to-[#22d3ee] bg-clip-text text-transparent">
              It Needs an AI Admin.
            </span>
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #2563eb, #22d3ee)' }}>
                NS
              </div>
              <span>Nyah S.</span>
            </div>
            <span>Jul 10, 2026</span>
            <span>7 min read</span>
            <a
              href="https://www.linkedin.com/company/karavanhub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="ml-auto w-8 h-8 rounded-lg flex items-center justify-center border border-white/20 text-white/50 hover:border-[#22d3ee]/60 hover:text-[#22d3ee] transition-all"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Insights', href: '/insights' },
        { label: 'LLM as Your Personal Admin' },
      ]} />

      {/* ── ARTICLE BODY ── */}
      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 md:px-8 py-10 md:py-14">

          {/* Hero image */}
          <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden mb-10 md:mb-14 shadow-[0_8px_40px_rgba(37,99,235,0.12)] border border-[var(--border-light)]">
            <Image
              src="/images/ai-workflows.jpg"
              alt="Using large language models as a personal admin assistant for small business owners in Ontario"
              width={1000}
              height={560}
              sizes="(max-width: 900px) 100vw, 900px"
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <article className="mx-auto max-w-[720px]" aria-labelledby="article-title">
            {/* Visually hidden h1 for schema — visual title is in the hero */}
            <h1 id="article-title" className="sr-only">
              Your Business Doesn&apos;t Need More Hours. It Needs an AI Admin.
            </h1>

            <div>
              <p className={pCls}>
                The average small business owner spends between 14 and 16 hours every week on
                administrative work. Emails that need replies. Proposals that need writing.
                Meeting notes that need summarizing. Follow-ups that need sending.
              </p>

              <p className={pCls}>
                None of that moves the business forward. All of it takes time you don&apos;t have.
              </p>

              <p className={pCls}>
                A large language model — ChatGPT, Claude, Gemini — can&apos;t run your business.
                But it can handle the cognitive overhead of running it. Given the right
                instruction, it drafts the email, writes the proposal, summarizes the meeting,
                and generates the FAQ response. In seconds, not hours.
              </p>

              <p className={pCls}>
                This article is about how to actually use one — not in theory, but today,
                on the task that&apos;s been sitting in your to-do list all week.
              </p>

              <h2 className={`font-headline ${h2Cls}`}>
                What an LLM actually is (the 30-second version)
              </h2>

              <p className={pCls}>
                A large language model is an AI system trained on an enormous amount of text —
                books, websites, documentation, business writing. What it learned to do is
                predict language: given everything you&apos;ve told it, what&apos;s the most useful
                thing to say next?
              </p>

              <p className={pCls}>
                In practice, that makes it exceptional at any task that involves reading or
                writing. You give it context — who you are, what you&apos;re trying to accomplish,
                who the audience is — and a clear instruction. It produces a draft you
                review and send.
              </p>

              <p className={pCls}>
                The key word is draft. An LLM is not an autonomous employee. It&apos;s a
                fast, capable collaborator that removes the hardest part of admin work:
                the blank page.
              </p>

              {/* Stat callout — homepage blue palette */}
              <div className="rounded-xl border-l-4 border-[var(--primary)] bg-[var(--primary-light)] px-6 py-5 my-8 md:my-10">
                <p className="text-[15px] md:text-base leading-[1.85] text-[var(--text-dark)] font-normal">
                  Small business owners who integrate AI tools into their daily workflow
                  report recovering an average of{' '}
                  <strong className="text-[var(--primary)]">6–8 hours per week</strong> —
                  time redirected toward revenue-generating activity.
                </p>
                <p className="font-mono text-xs mt-2 text-[var(--text-muted)]">
                  — McKinsey Global Institute, 2025
                </p>
              </div>

              <h2 className={`font-headline ${h2Cls}`}>
                Six tasks you can hand off today
              </h2>

              <h3 className={`font-headline ${h3Cls}`}>
                1. Email drafts and replies
              </h3>

              <p className={pCls}>
                Most business email follows predictable patterns: follow-up after a call,
                declining a request politely, asking for information, thanking someone for
                their time. You&apos;ve written versions of these hundreds of times.
              </p>

              <p className={pCls}>
                Instead of writing the next one from scratch, give the LLM the context —
                who the person is, what the email is in response to, what outcome you want —
                and ask for a draft.
              </p>

              {/* Code block — dark navy matching homepage dark sections */}
              <div className="rounded-xl overflow-hidden my-6 md:my-8 border border-[#1e3a8a]/20 shadow-[0_4px_24px_rgba(37,99,235,0.08)]">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10" style={{ background: '#0f172a' }}>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <span className="font-mono text-[10px] text-white/30 ml-2 tracking-wider uppercase">Prompt</span>
                </div>
                <div style={{ background: '#0f172a' }} className="px-5 py-4">
                  <code className="font-mono text-xs lg:text-sm block whitespace-pre-wrap leading-[1.7]" style={{ color: '#22d3ee' }}>
                    {`"You are helping me run a small IT consulting firm in Ontario. Write a follow-up email to a potential client after our discovery call. They run a 15-person accounting firm. We discussed building them an automated client intake system. Tone: warm but professional. Length: under 120 words. End with a soft ask to schedule a next call."`}
                  </code>
                </div>
              </div>

              <h3 className={`font-headline ${h3Cls}`}>
                2. Quotes and proposals
              </h3>

              <p className={pCls}>
                Writing a proposal is the task most business owners put off longest —
                not because it&apos;s hard to know what to charge, but because assembling a
                professional document is time-consuming.
              </p>

              <p className={pCls}>
                Give the LLM your service details, the client&apos;s situation, and your pricing.
                Ask it to structure a proposal with an executive summary, scope of work,
                timeline, and investment section. Review and adjust. What used to take
                two hours takes twenty minutes.
              </p>

              <div className="rounded-xl overflow-hidden my-6 md:my-8 border border-[#1e3a8a]/20 shadow-[0_4px_24px_rgba(37,99,235,0.08)]">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10" style={{ background: '#0f172a' }}>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <span className="font-mono text-[10px] text-white/30 ml-2 tracking-wider uppercase">Prompt</span>
                </div>
                <div style={{ background: '#0f172a' }} className="px-5 py-4">
                  <code className="font-mono text-xs lg:text-sm block whitespace-pre-wrap leading-[1.7]" style={{ color: '#22d3ee' }}>
                    {`"Write a project proposal for building a custom inventory management dashboard for a retail client. Scope: 6-week build, Power BI integration, training session included. Investment: $4,800 CAD. Format: executive summary, what's included, timeline, investment, next steps. Professional tone."`}
                  </code>
                </div>
              </div>

              <h3 className={`font-headline ${h3Cls}`}>
                3. Meeting summaries and action items
              </h3>

              <p className={pCls}>
                After every meeting, someone needs to capture what was decided, what&apos;s
                next, and who owns what. That task almost never gets done well because
                everyone leaves the meeting and gets pulled into the next thing.
              </p>

              <p className={pCls}>
                Paste your rough notes — even messy bullet points — and ask the LLM to
                produce a clean summary with decisions made, action items, owners, and
                deadlines. Forward it to everyone in the meeting. You&apos;ve just replaced
                the follow-up email and the meeting recap simultaneously.
              </p>

              <h3 className={`font-headline ${h3Cls}`}>
                4. Customer FAQ responses
              </h3>

              <p className={pCls}>
                Every business gets the same five questions on repeat. What are your hours?
                How long does it take? What&apos;s included? Do you offer payment plans?
                Can you work with [specific constraint]?
              </p>

              <p className={pCls}>
                Write those answers once — properly, with an LLM — then save them as
                templates. The next time the question arrives, you&apos;re not writing a reply.
                You&apos;re personalizing a sentence and hitting send. Over a month, this
                reclaims hours.
              </p>

              <h3 className={`font-headline ${h3Cls}`}>
                5. Job descriptions and HR documents
              </h3>

              <p className={pCls}>
                When you&apos;re ready to hire, the hiring process doesn&apos;t start with interviews.
                It starts with writing a job post compelling enough to attract the right
                people. Most small business owners are not professional copywriters,
                and it shows.
              </p>

              <p className={pCls}>
                Describe the role, the responsibilities, and the kind of person you&apos;re
                looking for. Ask the LLM to write a job posting that&apos;s clear, specific,
                and honest. Same applies to onboarding checklists, contractor agreements
                (as a starting template — always review with a lawyer), and performance
                review frameworks.
              </p>

              <h3 className={`font-headline ${h3Cls}`}>
                6. Social media and marketing copy
              </h3>

              <p className={pCls}>
                The strategy is yours. The execution — turning &ldquo;we launched a new service&rdquo;
                into three LinkedIn posts, an email announcement, and a caption — is
                exactly what an LLM is built for. Give it the core message and ask for
                variations. Pick the one that sounds most like you.
              </p>

              <h2 className={`font-headline ${h2Cls}`}>
                The one habit that separates useful from useless
              </h2>

              <p className={pCls}>
                Most people who try an LLM and give up do the same thing: they type a
                vague request, get a generic response, and conclude the tool doesn&apos;t work.
                The tool works. The prompt didn&apos;t.
              </p>

              <p className={pCls}>
                Every good prompt has four elements:
              </p>

              {/* Four elements — card grid in homepage blue palette */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 md:my-10">
                {[
                  { label: 'Role', color: '#2563eb', text: 'Tell it who it\'s acting as. "You are a professional consultant helping a small manufacturing company in Ontario."' },
                  { label: 'Context', color: '#8b5cf6', text: 'Tell it the situation. Who is the audience? What does this output need to accomplish?' },
                  { label: 'Task', color: '#22d3ee', text: 'State exactly what you want. "Write a two-paragraph email declining a vendor partnership politely."' },
                  { label: 'Constraints', color: '#2563eb', text: 'Tell it what to avoid or limit. "Under 100 words. No jargon. Don\'t mention pricing."' },
                ].map(({ label, color, text }) => (
                  <div key={label} className="rounded-xl border border-[var(--border-light)] bg-white p-5 shadow-[0_2px_12px_rgba(37,99,235,0.06)]">
                    <div className="inline-flex items-center gap-1.5 mb-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                      <span className="font-headline text-xs font-bold tracking-widest uppercase" style={{ color }}>{label}</span>
                    </div>
                    <p className="text-[13px] md:text-[14px] leading-[1.7] text-[var(--text-body)] font-light">{text}</p>
                  </div>
                ))}
              </div>

              <p className={pCls}>
                Treat the first response as a rough draft. If something&apos;s off, say so:
                &ldquo;Make it shorter,&rdquo; &ldquo;Sound less formal,&rdquo; &ldquo;Add a line about our turnaround
                time.&rdquo; The conversation improves the output. You don&apos;t need to re-prompt
                from scratch.
              </p>

              <h2 className={`font-headline ${h2Cls}`}>
                What it won&apos;t replace
              </h2>

              <p className={pCls}>
                Being clear about the limits matters, because overestimating an AI tool
                leads to mistakes.
              </p>

              <p className={pCls}>
                An LLM doesn&apos;t know your clients. It doesn&apos;t know the history behind a
                difficult relationship, the context from last quarter, or the unspoken
                dynamics in your industry. You bring that. It handles the words.
              </p>

              <p className={pCls}>
                It&apos;s not a lawyer, accountant, or doctor. It can help you draft a
                contractor agreement template — it cannot tell you whether that contract
                is enforceable in Ontario. Use it to save time on the document; use a
                professional to verify what matters.
              </p>

              <p className={pCls}>
                And don&apos;t paste sensitive client data into a public AI tool. Use general
                context instead: &ldquo;a client in the healthcare sector&rdquo; rather than a name
                and file details. Most consumer-facing LLMs offer paid tiers with stronger
                privacy controls if your work requires them.
              </p>

              {/* Pull quote — gradient accent */}
              <div className="relative rounded-xl overflow-hidden my-10 md:my-12">
                <div className="absolute inset-0 opacity-5" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #2563eb 100%)' }} />
                <div className="relative border border-[var(--primary)]/20 rounded-xl px-6 md:px-8 py-6 md:py-8">
                  <div className="w-8 h-1 rounded-full mb-4" style={{ background: 'linear-gradient(90deg, #2563eb, #22d3ee)' }} />
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[var(--text-dark)] font-normal">
                    The goal is not to automate your judgment. It&apos;s to automate everything
                    around your judgment — so the hours you spend on admin become hours you
                    spend on decisions that only you can make.
                  </p>
                </div>
              </div>

              <h2 className={`font-headline ${h2Cls}`}>
                Start in the next 15 minutes
              </h2>

              <p className={pCls}>
                There&apos;s one email in your inbox right now that you&apos;ve been putting off.
                You know which one.
              </p>

              <p className={pCls}>
                Open Claude, ChatGPT, or Gemini. Paste in the email you received. Write:
                &ldquo;Help me reply to this. I want to [what you want to achieve]. Tone: [warm /
                professional / direct]. Under 100 words.&rdquo; Read what comes back. Adjust one
                or two things. Send it.
              </p>

              <p className={pCls}>
                That&apos;s the whole practice. Admin work doesn&apos;t stop piling up. But with the
                right tool, it stops taking the hours it used to.
              </p>

              {/* CTA block — homepage hero gradient */}
              <div
                className="relative rounded-2xl overflow-hidden my-10 md:my-12 p-8 md:p-10 text-center"
                style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)' }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)', filter: 'blur(40px)', transform: 'translate(30%, -30%)' }} />
                <p className="font-headline font-bold text-white text-lg md:text-xl mb-2">
                  Want help building this into your workflow?
                </p>
                <p className="text-white/65 text-sm md:text-base mb-6 font-light">
                  We help small businesses in Ontario implement AI tools that actually stick.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#1e3a8a] px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-white/90 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                >
                  Get a free assessment
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>

              {/* Author bio */}
              <div className="flex gap-4 md:gap-5 pt-8 mt-12 md:mt-14 border-t border-[var(--border-light)]">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm md:text-base font-bold"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)' }}
                >
                  NS
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-0.5 text-[var(--text-dark)] font-headline">Nyah S.</h4>
                  <p className="font-mono text-xs mb-2 text-[var(--primary)]">AI Automation Consultant</p>
                  <p className="text-[13px] md:text-[14px] leading-[1.85] text-[var(--text-muted)] font-light">
                    After years coordinating care for patients across Ontario Health, I
                    learned one thing: the right systems make all the difference. Now,
                    from our home base in Niagara, I help small business owners across
                    Canada and beyond build those systems. Simple automations that give
                    you back your time without losing the personal touch your customers
                    love.
                  </p>
                </div>
              </div>

              {/* References */}
              <section className="mt-12 md:mt-14 pt-8 border-t border-[var(--border-light)]" aria-label="References">
                <h3 className="font-mono text-xs font-medium uppercase tracking-widest mb-5 text-[var(--text-muted)]">
                  References
                </h3>
                <ol className="space-y-3 text-[12px] md:text-[13px] leading-[1.5] text-[var(--text-muted)] font-light">
                  {[
                    'McKinsey Global Institute. "The Economic Potential of Generative AI." McKinsey & Company, 2025.',
                    'SCORE. "Small Business Administrative Burden Report: Time Costs of Non-Revenue Tasks." 2025.',
                    'Salesforce. "State of the AI Connected Customer: SMB Edition." 2025.',
                    'Anthropic. "Claude Usage Patterns in Small Business Workflows." Internal Research Summary, 2026.',
                    'BDC. "AI Adoption Among Canadian Small and Medium Businesses." Business Development Bank of Canada, 2026.',
                  ].map((ref, i) => (
                    <li key={i} className="pl-6 relative">
                      <span className="absolute left-0 font-mono text-xs text-[var(--text-muted)]">{i + 1}.</span>
                      {ref}
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </article>

          <NewsletterCTA />
        </div>
      </div>
    </>
  );
}
