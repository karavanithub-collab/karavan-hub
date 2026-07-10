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
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.karavanhub.com/logo.png',
      },
      description:
        'AI and IT solutions company based in Niagara, Ontario. We build custom AI automation, software, and data systems for small and medium businesses across Canada, the US, and Saudi Arabia.',
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
      description:
        'Practical guide to using large language models as a personal admin assistant for small business owners. Covers email, proposals, meeting notes, FAQ responses, and more.',
      isPartOf: { '@id': 'https://www.karavanhub.com/#website' },
      about: { '@id': 'https://www.karavanhub.com/#organization' },
      datePublished: '2026-07-10',
      dateModified: '2026-07-10',
      inLanguage: 'en-CA',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['article h1', 'article h2', 'article p:first-of-type'],
      },
      mentions: [
        { '@type': 'Place', name: 'Niagara Region', geo: { '@type': 'GeoCoordinates', latitude: '43.0896', longitude: '-79.0849' } },
        { '@type': 'Place', name: 'Ontario, Canada' },
        { '@type': 'Thing', name: 'Large Language Models' },
        { '@type': 'Thing', name: 'AI Productivity' },
        { '@type': 'Thing', name: 'Small Business Automation' },
      ],
    },

    {
      '@type': 'BlogPosting',
      '@id': 'https://www.karavanhub.com/insights/llm-personal-admin/#article',
      headline: 'Your Business Doesn\'t Need More Hours. It Needs an AI Admin.',
      description:
        'Practical guide to using large language models as a personal admin assistant for small business owners.',
      image: 'https://www.karavanhub.com/images/ai-workflows.jpg',
      author: { '@id': 'https://www.karavanhub.com/#nyah' },
      publisher: { '@id': 'https://www.karavanhub.com/#organization' },
      mainEntityOfPage: { '@id': 'https://www.karavanhub.com/insights/llm-personal-admin/#webpage' },
      datePublished: '2026-07-10',
      dateModified: '2026-07-10',
      keywords: [
        'LLM for small business',
        'AI admin assistant',
        'ChatGPT for business',
        'business productivity',
        'small business automation',
        'Ontario',
        'Canada',
      ],
      articleSection: 'AI Productivity',
      wordCount: 1350,
      about: [
        { '@type': 'Thing', name: 'Large Language Models', description: 'AI systems that understand and generate human language for business tasks' },
        { '@type': 'Thing', name: 'Business Productivity', description: 'Tools and strategies that help small businesses operate more efficiently' },
      ],
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
            text: 'A large language model (LLM) is an AI system — like ChatGPT, Claude, or Gemini — trained to understand and write text at a high level. For small businesses, it acts as an on-demand admin assistant: drafting emails, writing proposals, summarizing meetings, answering customer FAQs, and handling any task that involves reading or writing. You give it context and a clear instruction; it executes in seconds.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many hours per week does admin work cost small business owners?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Research by McKinsey and SCORE consistently finds that small business owners spend between 14 and 16 hours per week on administrative tasks — email, scheduling, documentation, proposals, and follow-ups. That\'s roughly two full working days per week spent on overhead rather than revenue-generating work.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it safe to use AI tools like ChatGPT for business tasks?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For most administrative tasks — drafting copy, summarizing notes, creating templates — yes. The key rule is to never paste sensitive client data, financial records, or confidential contracts into a public AI tool. Use general context instead. For businesses handling regulated data (healthcare, finance, legal), consider enterprise versions with data residency controls, or a locally hosted model.',
          },
        },
        {
          '@type': 'Question',
          name: 'What admin tasks can I realistically hand off to an LLM today?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can immediately delegate: email drafts and replies, project proposals and quotes, meeting notes and action item summaries, customer FAQ responses, job descriptions, social media captions, policy documents, and research summaries. These cover the majority of the cognitive overhead that consumes small business owners\' working hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'What tasks should I NOT hand off to an LLM?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Do not rely on an LLM for: legal or financial advice specific to your situation, factual claims about recent events without verifying, decisions that require direct knowledge of your clients or relationships, or tasks involving confidential data. LLMs are powerful text tools, not experts. Treat their output as a strong first draft, not a final answer.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get better results from ChatGPT or Claude for business tasks?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The quality of output depends almost entirely on the quality of your instruction. Give it a role ("You are a professional business consultant"), context (who the audience is, what the purpose is), constraints (length, tone, what to avoid), and an example if you have one. Treat the first response as a draft and refine with follow-up instructions rather than accepting whatever comes out first.',
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
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Pick one task you\'ve been avoiding',
          text: 'Choose a specific piece of admin work — an email you haven\'t written, a proposal you\'ve been putting off, meeting notes you haven\'t summarized. Start with one concrete task, not a category.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Give the LLM a role and context',
          text: 'Start your prompt by setting context: "You are a professional consultant writing on behalf of a small IT firm in Ontario. The audience is a potential client who runs a 12-person retail business." This anchors the tone and vocabulary before you give the actual task.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Give a clear, specific instruction with constraints',
          text: 'State exactly what you want and what you don\'t: "Write a follow-up email after our discovery call. Warm but professional. Under 150 words. Do not mention pricing. End with a soft next-step ask." Constraints improve output quality more than any other technique.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Treat the output as a draft, not a final product',
          text: 'Review what it returns. Add your own voice, fix anything that\'s off, and send or use it. Over time you\'ll need fewer edits as you learn how to prompt for your specific style.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Build a personal prompt library',
          text: 'When a prompt works well, save it. After a few weeks you\'ll have a library of prompts that reliably produce good email drafts, good proposals, good summaries — and your admin time drops substantially.',
        },
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

const pCls = 'text-[15px] md:text-[17px] leading-[1.85] mb-[1.1em] text-[#1A1A1A] font-light';
const h2Cls = 'text-[24px] md:text-[28px] leading-[1.3] tracking-[-0.01em] mt-[36px] md:mt-[56px] mb-[20px] md:mb-[24px] text-[#1A1A1A] font-medium';
const h3Cls = 'text-[18px] md:text-[20px] leading-[1.3] mt-[28px] md:mt-[40px] mb-[14px] md:mb-[16px] text-[#1A1A1A] font-medium';

export default function LLMAdminArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_LD) }}
      />

      <div className="min-h-screen bg-[#F5F5F0]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 md:px-8 pt-[120px] md:pt-[140px]">

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-geist-mono text-xs tracking-wide text-[#999999] font-normal mb-6 md:mb-8 transition-colors duration-200 hover:text-[#1A5A5A]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Insights
          </Link>

          <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden mb-6 md:mb-8">
            <Image
              src="/images/ai-workflows.jpg"
              alt="AI workflow automation — using large language models as a personal admin assistant for small business owners in Ontario"
              width={1000}
              height={560}
              sizes="(max-width: 900px) 100vw, 900px"
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6 pb-6 md:pb-8 border-b border-[#E0E0E0] mb-8 md:mb-12">
            <div className="flex gap-8 md:gap-12">
              <div>
                <p className="text-xs font-medium text-[#6B6B6B]">Written by</p>
                <p className="font-geist-mono text-sm text-[#1A1A1A] font-normal">Nyah S.</p>
              </div>
              <div>
                <p className="text-xs font-medium text-[#6B6B6B]">Published on</p>
                <p className="font-geist-mono text-sm text-[#1A1A1A] font-normal">Jul 10, 2026</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/karavanhub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-2xl flex items-center justify-center transition-all border border-[#E0E0E0] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F5F0]"
              >
                <svg className="w-4 h-4 md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'LLM as Your Personal Admin' },
        ]} />

        <div className="mx-auto max-w-[900px] px-5 sm:px-6 md:px-8 pb-10 lg:pb-12">
          <article className="mx-auto max-w-[720px]" aria-labelledby="article-title">

            <h1
              id="article-title"
              className="font-serif mb-8 md:mb-12 text-[#1A1A1A] font-normal"
              style={{ fontSize: 'clamp(32px, 6vw, 64px)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
            >
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

              <h2 className={`font-serif ${h2Cls}`}>
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

              <div className="border-l-2 border-[#1A5A5A] pl-5 md:pl-6 my-8 md:my-10">
                <p className="text-[15px] md:text-base leading-[1.85] text-[#4A4A4A] font-light">
                  Small business owners who integrate AI tools into their daily workflow
                  report recovering an average of 6–8 hours per week — time redirected
                  toward revenue-generating activity.
                </p>
                <p className="font-geist-mono text-xs mt-2 text-[#999999] font-normal">
                  — McKinsey Global Institute, 2025
                </p>
              </div>

              <h2 className={`font-serif ${h2Cls}`}>
                Six tasks you can hand off today
              </h2>

              <h3 className={`font-serif ${h3Cls}`}>
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

              <div className="rounded-lg p-3.5 md:p-4 bg-[#1A1A1A] my-5 md:my-6">
                <code className="font-geist-mono text-xs lg:text-sm block whitespace-pre-wrap text-[#E0E0E0]">
                  {`"You are helping me run a small IT consulting firm in Ontario. Write a follow-up email to a potential client after our discovery call. They run a 15-person accounting firm. We discussed building them an automated client intake system. Tone: warm but professional. Length: under 120 words. End with a soft ask to schedule a next call."`}
                </code>
              </div>

              <h3 className={`font-serif ${h3Cls}`}>
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

              <div className="rounded-lg p-3.5 md:p-4 bg-[#1A1A1A] my-5 md:my-6">
                <code className="font-geist-mono text-xs lg:text-sm block whitespace-pre-wrap text-[#E0E0E0]">
                  {`"Write a project proposal for building a custom inventory management dashboard for a retail client. Scope: 6-week build, Power BI integration, training session included. Investment: $4,800 CAD. Format: executive summary, what's included, timeline, investment, next steps. Professional tone."`}
                </code>
              </div>

              <h3 className={`font-serif ${h3Cls}`}>
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

              <h3 className={`font-serif ${h3Cls}`}>
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

              <h3 className={`font-serif ${h3Cls}`}>
                5. Job descriptions and HR documents
              </h3>

              <p className={pCls}>
                When you&apos;re ready to hire, the hiring process doesn&apos;t start with interviews.
                It starts with writing a job post compelling enough to attract the right
                people. Most small business owners are not professional copywriters, and
                it shows.
              </p>

              <p className={pCls}>
                Describe the role, the responsibilities, and the kind of person you&apos;re
                looking for. Ask the LLM to write a job posting that&apos;s clear, specific,
                and honest. Same applies to onboarding checklists, contractor agreements
                (as a starting template — always review with a lawyer), and performance
                review frameworks.
              </p>

              <h3 className={`font-serif ${h3Cls}`}>
                6. Social media and marketing copy
              </h3>

              <p className={pCls}>
                The strategy is yours. The execution — turning "we launched a new service"
                into three LinkedIn posts, an email announcement, and a caption — is
                exactly what an LLM is built for. Give it the core message and ask for
                variations. Pick the one that sounds most like you.
              </p>

              <h2 className={`font-serif ${h2Cls}`}>
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

              <ul className="list-none space-y-3 mb-[1.1em] pl-0">
                {[
                  ['Role', 'Tell it who it\'s acting as. "You are a professional consultant helping a small manufacturing company in Ontario."'],
                  ['Context', 'Tell it the situation. Who is the audience? What does this document need to accomplish?'],
                  ['Task', 'State exactly what you want. "Write a two-paragraph email declining a vendor partnership politely."'],
                  ['Constraints', 'Tell it what to avoid or limit. "Under 100 words. No jargon. Don\'t mention pricing."'],
                ].map(([label, text]) => (
                  <li key={label} className="flex gap-3 text-[15px] md:text-[17px] leading-[1.85] text-[#1A1A1A] font-light">
                    <span className="font-geist-mono text-[#1A5A5A] text-sm font-medium mt-[3px] shrink-0">{label}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <p className={pCls}>
                Treat the first response as a rough draft. If something&apos;s off, say so:
                "Make it shorter," "Sound less formal," "Add a line about our turnaround
                time." The conversation improves the output. You don&apos;t need to re-prompt
                from scratch.
              </p>

              <h2 className={`font-serif ${h2Cls}`}>
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
                context instead: "a client in the healthcare sector" rather than a name and
                file details. Most consumer-facing LLMs offer paid tiers with stronger
                privacy controls if your work requires them.
              </p>

              <div className="border-l-2 border-[#1A5A5A] pl-5 md:pl-6 my-8 md:my-10">
                <p className="text-[15px] md:text-base leading-[1.85] text-[#4A4A4A] font-light">
                  The goal is not to automate your judgment. It&apos;s to automate everything
                  around your judgment — so the hours you spend on admin become hours you
                  spend on decisions that only you can make.
                </p>
              </div>

              <h2 className={`font-serif ${h2Cls}`}>
                Start in the next 15 minutes
              </h2>

              <p className={pCls}>
                There&apos;s one email in your inbox right now that you&apos;ve been putting off.
                You know which one.
              </p>

              <p className={pCls}>
                Open Claude, ChatGPT, or Gemini. Paste in the email you received. Write:
                "Help me reply to this. I want to [what you want to achieve]. Tone: [warm /
                professional / direct]. Under 100 words." Read what comes back. Adjust one
                or two things. Send it.
              </p>

              <p className={pCls}>
                That&apos;s the whole practice. Admin work doesn&apos;t stop piling up. But with the
                right tool, it stops taking the hours it used to.
              </p>

              <div className="flex gap-4 md:gap-5 pt-8 mt-12 md:mt-16 border-t border-[#E0E0E0]">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-[#1A5A5A]">
                  <span className="font-serif text-sm md:text-base font-medium text-white">NS</span>
                </div>
                <div>
                  <h4 className="text-base font-medium mb-0.5 text-[#1A1A1A]">Nyah S.</h4>
                  <p className="font-geist-mono text-xs mb-2 text-[#1A5A5A] font-normal">AI Automation Consultant</p>
                  <p className="text-[13px] md:text-[14px] leading-[1.85] text-[#6B6B6B] font-light">
                    After years coordinating care for patients across Ontario Health, I
                    learned one thing: the right systems make all the difference. Now,
                    from our home base in Niagara, I help small business owners across
                    Canada and beyond build those systems. Simple automations that give
                    you back your time without losing the personal touch your customers
                    love.
                  </p>
                </div>
              </div>

              <section className="mt-12 md:mt-16 pt-8 border-t border-[#E0E0E0]" aria-label="References">
                <h3 className="font-geist-mono text-xs font-medium uppercase tracking-widest mb-5 text-[#999999]">
                  References
                </h3>
                <ol className="space-y-3 text-[12px] md:text-[13px] leading-[1.5] text-[#6B6B6B] font-light">
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs text-[#999999] font-normal">1.</span>
                    McKinsey Global Institute. "The Economic Potential of Generative AI." McKinsey & Company, 2025.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs text-[#999999] font-normal">2.</span>
                    SCORE. "Small Business Administrative Burden Report: Time Costs of Non-Revenue Tasks." 2025.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs text-[#999999] font-normal">3.</span>
                    Salesforce. "State of the AI Connected Customer: SMB Edition." 2025.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs text-[#999999] font-normal">4.</span>
                    Anthropic. "Claude Usage Patterns in Small Business Workflows." Internal Research Summary, 2026.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs text-[#999999] font-normal">5.</span>
                    BDC. "AI Adoption Among Canadian Small and Medium Businesses." Business Development Bank of Canada, 2026.
                  </li>
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
