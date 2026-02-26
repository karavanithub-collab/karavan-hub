import { Metadata } from 'next';
import Image from 'next/image';
import NewsletterCTA from '@/components/sections/NewsletterCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What If You Never Had to Answer "What Are Your Hours?" Again? | Karavan Hub',
  description:
    'Small businesses miss 62% of calls. Learn how AI-powered auto-reply automation helps retain customers and increase revenue by responding instantly. From Karavan Hub, Niagara\'s AI automation consultants.',
  keywords:
    'AI automation Niagara, missed call text back, auto reply automation, small business automation, Niagara IT services, AI consulting Ontario, business automation Canada, automated text response',
  authors: [{ name: 'Nyah S.', url: 'https://karavanhub.com' }],
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
    canonical: 'https://karavanhub.com/insights/auto-reply-automation',
    languages: {
      'en-CA': 'https://karavanhub.com/insights/auto-reply-automation',
      en: 'https://karavanhub.com/insights/auto-reply-automation',
    },
  },
  openGraph: {
    type: 'article',
    title: 'What If You Never Had to Answer "What Are Your Hours?" Again?',
    description:
      'Small businesses miss 62% of calls. Learn how AI-powered auto-reply automation helps retain customers and increase revenue.',
    url: 'https://karavanhub.com/insights/auto-reply-automation',
    siteName: 'Karavan Hub',
    locale: 'en_CA',
    authors: ['Nyah S.'],
    publishedTime: '2026-02-03T00:00:00Z',
    modifiedTime: '2026-02-26T00:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What If You Never Had to Answer "What Are Your Hours?" Again?',
    description:
      'Small businesses miss 62% of calls. AI-powered auto-reply automation helps retain customers by responding instantly.',
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Niagara Region',
    'geo.position': '43.0896;-79.0849',
    ICBM: '43.0896, -79.0849',
  },
};

/* ────────────────────────────────────────────────────────────────
   Consolidated JSON-LD @graph — AEO + GEO optimized
   ──────────────────────────────────────────────────────────────── */
const SCHEMA_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    /* ── Organization (shared entity) ── */
    {
      '@type': 'Organization',
      '@id': 'https://karavanhub.com/#organization',
      name: 'Karavan Hub',
      url: 'https://karavanhub.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://karavanhub.com/logo.png',
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
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '43.0896',
        longitude: '-79.0849',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-905-301-3936',
        email: 'karavan.it.hub@gmail.com',
        contactType: 'sales',
        availableLanguage: ['English'],
        areaServed: ['CA', 'US', 'SA'],
      },
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Saudi Arabia' },
      ],
      founder: {
        '@type': 'Person',
        '@id': 'https://karavanhub.com/#nyah',
        name: 'Nyah S.',
        jobTitle: 'AI Automation Consultant',
      },
      sameAs: [
        'https://www.linkedin.com/company/karavanhub',
      ],
    },

    /* ── WebPage ── */
    {
      '@type': 'WebPage',
      '@id': 'https://karavanhub.com/insights/auto-reply-automation/#webpage',
      url: 'https://karavanhub.com/insights/auto-reply-automation',
      name: 'What If You Never Had to Answer "What Are Your Hours?" Again?',
      description:
        'Research-backed guide on how AI-powered auto-reply automation helps small businesses retain customers by responding to missed calls instantly.',
      isPartOf: { '@id': 'https://karavanhub.com/#website' },
      about: { '@id': 'https://karavanhub.com/#organization' },
      datePublished: '2026-02-03',
      dateModified: '2026-02-26',
      inLanguage: 'en-CA',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['article h1', 'article h2', 'article p:first-of-type'],
      },
      mentions: [
        {
          '@type': 'Place',
          name: 'Niagara Region',
          geo: { '@type': 'GeoCoordinates', latitude: '43.0896', longitude: '-79.0849' },
        },
        { '@type': 'Place', name: 'Ontario, Canada' },
        { '@type': 'Thing', name: 'Small Business Automation' },
        { '@type': 'Thing', name: 'Missed Call Text Back' },
        { '@type': 'Thing', name: 'Customer Retention' },
      ],
    },

    /* ── Article ── */
    {
      '@type': 'Article',
      '@id': 'https://karavanhub.com/insights/auto-reply-automation/#article',
      headline: 'What If You Never Had to Answer "What Are Your Hours?" Again?',
      description:
        'Research-backed guide on how AI-powered auto-reply automation helps small businesses retain customers by responding to missed calls instantly.',
      image: 'https://karavanhub.com/images/insights/auto-reply-hero.png',
      author: { '@id': 'https://karavanhub.com/#nyah' },
      publisher: { '@id': 'https://karavanhub.com/#organization' },
      mainEntityOfPage: { '@id': 'https://karavanhub.com/insights/auto-reply-automation/#webpage' },
      datePublished: '2026-02-03',
      dateModified: '2026-02-26',
      keywords: [
        'AI automation',
        'missed call text back',
        'auto reply automation',
        'small business automation',
        'Niagara',
        'Ontario',
        'Canada',
      ],
      articleSection: 'AI Automation',
      wordCount: 1100,
      about: [
        { '@type': 'Thing', name: 'Business Automation', description: 'Automated systems that handle routine business communication tasks' },
        { '@type': 'Thing', name: 'Customer Retention', description: 'Strategies to prevent customers from choosing a competitor' },
      ],
    },

    /* ── FAQPage (AEO: 6 questions) ── */
    {
      '@type': 'FAQPage',
      '@id': 'https://karavanhub.com/insights/auto-reply-automation/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much revenue do small businesses lose from missed calls?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Research shows small businesses answer only 37.8% of incoming calls, and 62% of unanswered callers will contact a competitor instead. The annual impact on retained revenue can exceed $6,000 per business.',
          },
        },
        {
          '@type': 'Question',
          name: "Why don't customers leave voicemails anymore?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An eVoice study found that 80% of callers who reach voicemail hang up without leaving a message. Up to 80% of callers now prefer texting over voicemail, making text-based responses more effective.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast should a business respond to a missed call?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'InsideSales research on 5.7 million leads found that responding within 5 minutes increases conversion likelihood by 21x compared to waiting one hour. 82% of consumers expect a reply within 10 minutes.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is auto-reply automation for small businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Auto-reply automation sends an instant text message to anyone who calls your business when you can not answer. It acknowledges the call, provides basic info like hours or booking links, and keeps the customer engaged instead of losing them to a competitor.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to set up auto-reply automation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most auto-reply systems can be configured in about 10 minutes. You write a short text template, connect it to your business phone number, and set the trigger conditions. No coding or complex software required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which industries benefit most from missed call text back?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Salons, barbershops, home service companies (plumbers, electricians, contractors), restaurants, and any business where staff physically cannot answer the phone during work. Home service companies alone miss 62% of inbound calls according to Invoca research.',
          },
        },
      ],
    },

    /* ── HowTo: Setting up auto-reply ── */
    {
      '@type': 'HowTo',
      '@id': 'https://karavanhub.com/insights/auto-reply-automation/#howto',
      name: 'How to Set Up Auto-Reply Automation for Your Business',
      description:
        'A simple guide to setting up missed call text back automation for small businesses. Takes about 10 minutes.',
      totalTime: 'PT10M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'CAD',
        value: '0',
      },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Write your auto-reply template',
          text: 'Draft a short, friendly text message that acknowledges the missed call and gives the customer a next step (booking link, reply prompt, or key info like hours).',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Choose your automation platform',
          text: 'Select a missed call text back service or AI automation tool that connects to your business phone number. Many options work with existing mobile or VoIP numbers.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Connect your phone number',
          text: 'Link your business phone number to the automation platform and set the trigger: send the auto-reply whenever a call goes unanswered after a set number of rings.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Test and go live',
          text: 'Call your own number, let it ring, and verify the text arrives within seconds. Adjust the message wording if needed, then activate for all incoming calls.',
        },
      ],
    },

    /* ── BreadcrumbList ── */
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://karavanhub.com' },
        { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://karavanhub.com/insights' },
        { '@type': 'ListItem', position: 3, name: 'Auto-Reply Automation', item: 'https://karavanhub.com/insights/auto-reply-automation' },
      ],
    },
  ],
};

/* ────────────────────────────────────────────────────────────────
   Responsive Tailwind class strings (replace inline style objects)
   ──────────────────────────────────────────────────────────────── */
const pCls =
  'text-[15px] md:text-[17px] leading-[1.85] mb-[1.1em] text-[#1A1A1A] font-light';

const h2Cls =
  'text-[24px] md:text-[28px] leading-[1.3] tracking-[-0.01em] mt-[36px] md:mt-[56px] mb-[20px] md:mb-[24px] text-[#1A1A1A] font-medium';

const h3Cls =
  'text-[18px] md:text-[20px] leading-[1.3] mt-[28px] md:mt-[40px] mb-[14px] md:mb-[16px] text-[#1A1A1A] font-medium';

export default function AutoReplyArticlePage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_LD) }}
      />

      <div className="min-h-screen bg-[#F5F5F0]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 md:px-8 pt-[120px] md:pt-[140px] pb-10 lg:pb-12">

          {/* Back to Insights */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-geist-mono text-xs tracking-wide text-[#999999] font-normal mb-6 md:mb-8 transition-colors duration-200 hover:text-[#1A5A5A]"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Insights
          </Link>

          {/* Hero Image */}
          <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden mb-6 md:mb-8">
            <Image
              src="/images/insights/auto-reply-hero.png"
              alt="Teal telephone handset on orange background representing missed business calls"
              width={1000}
              height={560}
              sizes="(max-width: 900px) 100vw, 900px"
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Meta Row - Author, Date, Social */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6 pb-6 md:pb-8 border-b border-[#E0E0E0] mb-8 md:mb-12">
            <div className="flex gap-8 md:gap-12">
              <div>
                <p className="text-xs font-medium text-[#6B6B6B]">Written by</p>
                <p className="font-geist-mono text-sm text-[#1A1A1A] font-normal">Nyah S.</p>
              </div>
              <div>
                <p className="text-xs font-medium text-[#6B6B6B]">Published on</p>
                <p className="font-geist-mono text-sm text-[#1A1A1A] font-normal">Feb 3, 2026</p>
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
                <svg
                  className="w-4 h-4 md:w-[18px] md:h-[18px]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Article Content */}
          <article className="mx-auto max-w-[720px]" aria-labelledby="article-title">
            {/* Title */}
            <h1
              id="article-title"
              className="font-serif mb-8 md:mb-12 text-[#1A1A1A] font-normal"
              style={{
                fontSize: 'clamp(32px, 6vw, 64px)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              What If You Never Had to Answer "What Are Your Hours?" Again?
            </h1>

            {/* Article Body */}
            <div>
              <p className={pCls}>
                A 2025 study by 411 Locals found that small businesses answer only
                37.8% of incoming calls. For every call that goes unanswered, research
                shows there's a 62% chance that customer will call a competitor
                instead.
              </p>

              <p className={pCls}>
                This isn't a productivity problem. It's structural. When you're
                mid-appointment or elbow-deep in a job, answering the phone
                is impossible.
              </p>

              <p className={pCls}>
                The solution isn't hiring a receptionist or installing complex software.
                The data points to something simpler:{' '}
                <strong>
                  an automated text response that acknowledges the call within seconds.
                </strong>
              </p>

              <h2 className={`font-serif ${h2Cls}`}>
                A thinking partner more than a butler
              </h2>

              <p className={pCls}>
                Most people think of automation as outsourcing busywork.
                Scheduling, reminders, that kind of thing. But when we looked
                at millions of customer interactions, 57% of missed calls were
                actually about decisions. People figuring out where to spend
                their money.
              </p>

              <p className={pCls}>
                Someone calls to check your availability. Another wants to
                confirm pricing before driving over. These aren't
                time-wasters. These are people ready to buy, and they'll go
                with whoever answers first.
              </p>

              <p className={pCls}>
                People don't call businesses for fun. They call because they
                want to spend money. The faster you respond, the more likely
                they spend it with you.
              </p>

              {/* Data Chart */}
              <div className="rounded-xl md:rounded-2xl overflow-hidden my-8 md:my-10">
                <Image
                  src="/images/insights/response-time-chart.png"
                  alt="Response Time vs. Conversion Likelihood chart: responding within 5 minutes yields 21x conversion likelihood, 1 hour yields 2.6x, and 24 hours yields 1x"
                  width={720}
                  height={400}
                  sizes="(max-width: 720px) 100vw, 720px"
                  className="w-full h-auto"
                />
              </div>

              <p className={pCls}>
                InsideSales research on 5.7 million inbound leads found that responding
                within 5 minutes increases conversion likelihood by 21x compared to
                waiting just one hour. After 5 minutes, conversion rates drop by 8x.
              </p>

              {/* Callout */}
              <div className="border-l-2 border-[#1A5A5A] pl-5 md:pl-6 my-8 md:my-10">
                <p className="text-[15px] md:text-base leading-[1.85] text-[#4A4A4A] font-light">
                  82% of consumers expect a business to reply within 10 minutes of
                  reaching out. The average business takes 47 hours.
                </p>
                <p className="font-geist-mono text-xs mt-2 text-[#999999] font-normal">
                  — HubSpot Consumer Research, 2024
                </p>
              </div>

              <h2 className={`font-serif ${h2Cls}`}>
                Why voicemail doesn't work
              </h2>

              <p className={pCls}>
                The assumption that customers will leave a voicemail and wait for a
                callback doesn't hold up against behavioral data. An eVoice study found
                that{' '}
                <strong>
                  80% of callers who reach voicemail hang up without leaving a message.
                </strong>
              </p>

              <p className={pCls}>
                The reason is simple: up to 80% of callers now prefer texting
                over voicemail. People want a quick text back, not a callback
                tomorrow. If your response system is still built around
                voicemail, you're losing them.
              </p>

              <h2 className={`font-serif ${h2Cls}`}>
                Templates by business type
              </h2>

              <h3 className={`font-serif ${h3Cls}`}>
                Salons & Barbershops
              </h3>

              <p className={pCls}>
                Salon owners physically cannot answer calls during appointments. The
                auto-reply should acknowledge this reality while providing an immediate
                path to booking.
              </p>

              <div className="rounded-lg p-3.5 md:p-4 bg-[#1A1A1A] my-5 md:my-6">
                <code className="font-geist-mono text-xs lg:text-sm block whitespace-pre-wrap text-[#E0E0E0]">
                  {`"Thanks for calling [Business Name]! I'm with a client right now. I'll text you back within [timeframe]. Need to book? [Calendar link]. Or just reply with what you're looking for."`}
                </code>
              </div>

              <h3 className={`font-serif ${h3Cls}`}>
                Home Services & Trades
              </h3>

              <p className={pCls}>
                If you're a plumber or electrician, your hands are probably
                not free when the phone rings. Invoca's research puts the
                number at 62% of inbound calls missed across home service
                companies. That's a lot of lost work.
              </p>

              <div className="rounded-lg p-3.5 md:p-4 bg-[#1A1A1A] my-5 md:my-6">
                <code className="font-geist-mono text-xs lg:text-sm block whitespace-pre-wrap text-[#E0E0E0]">
                  {`"Thanks for reaching out to [Business Name]. I'm on a job site right now. Text me what you need and I'll respond ASAP. For emergencies, reply URGENT and I'll call within 15 minutes."`}
                </code>
              </div>

              <h3 className={`font-serif ${h3Cls}`}>
                Restaurants & Cafes
              </h3>

              <p className={pCls}>
                Most restaurant calls are the same four questions on repeat:
                hours, reservations, menu, dietary restrictions. An auto-reply
                can answer all of them before your staff picks up the phone.
              </p>

              <div className="rounded-lg p-3.5 md:p-4 bg-[#1A1A1A] my-5 md:my-6">
                <code className="font-geist-mono text-xs lg:text-sm block whitespace-pre-wrap text-[#E0E0E0]">
                  {`"Thanks for calling [Restaurant]! Quick info:\n\n📍 Hours: Mon-Sat 11am-9pm, Sun 12-7pm\n📅 Reservations: [link]\n📋 Menu: [link]\n\nQuestions? Reply here and we'll text back."`}
                </code>
              </div>

              <h2 className={`font-serif ${h2Cls}`}>
                What ten minutes of setup gets you
              </h2>

              <p className={pCls}>
                The research all points the same way: when you respond fast,
                even with an automated text, fewer customers leave for a
                competitor. Setup takes about 10 minutes. The annual impact on
                retained revenue? Over $6,000.
              </p>

              <p className={pCls}>
                Nobody uses auto-reply to avoid their customers. They use it
                to keep them.
              </p>

              {/* Author Bio */}
              <div className="flex gap-4 md:gap-5 pt-8 mt-12 md:mt-16 border-t border-[#E0E0E0]">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-[#1A5A5A]">
                  <span className="font-serif text-sm md:text-base font-medium text-white">NS</span>
                </div>
                <div>
                  <h4 className="text-base font-medium mb-0.5 text-[#1A1A1A]">
                    Nyah S.
                  </h4>
                  <p className="font-geist-mono text-xs mb-2 text-[#1A5A5A] font-normal">
                    AI Automation Consultant
                  </p>
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

              {/* References */}
              <section className="mt-12 md:mt-16 pt-8 border-t border-[#E0E0E0]" aria-label="References">
                <h3 className="font-geist-mono text-xs font-medium uppercase tracking-widest mb-5 text-[#999999]">
                  References
                </h3>
                <ol className="space-y-3 text-[12px] md:text-[13px] leading-[1.5] text-[#6B6B6B] font-light">
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs text-[#999999] font-normal">
                      1.
                    </span>
                    411 Locals. "Business Phone Statistics: 30-Day Industry Study." Ambs
                    Call Center, 2025.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs text-[#999999] font-normal">
                      2.
                    </span>
                    Graham, J. "The Silent Profit Killer: Why 62% of Your Business Calls
                    Go Unanswered." Entrepreneur, 2025.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs text-[#999999] font-normal">
                      3.
                    </span>
                    Ambs Call Center. "The Real Cost of a Missed Call." CBS42 Press
                    Release, 2025.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs text-[#999999] font-normal">
                      4.
                    </span>
                    Vida. "SMB Survey: The Cost of Missed Calls." DialZara Industry
                    Report, 2025.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs text-[#999999] font-normal">
                      5.
                    </span>
                    eVoice. "Consumer Voicemail Behavior Study." Ring Eden Analysis,
                    2024.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs text-[#999999] font-normal">
                      6.
                    </span>
                    Numa. "22 Business Phone Statistics: Consumer Communication
                    Preferences." 2025.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs text-[#999999] font-normal">
                      7.
                    </span>
                    Invoca. "How Much Missed Sales Calls Cost Home Services Businesses."
                    2024.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs text-[#999999] font-normal">
                      8.
                    </span>
                    InsideSales. "Lead Response Research: Analysis of 5.7 Million
                    Inbound Leads." 2021.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs text-[#999999] font-normal">
                      9.
                    </span>
                    HubSpot via Podium. "Consumer Expectations: Response Time
                    Benchmarks." 2024.
                  </li>
                </ol>
              </section>
            </div>
          </article>

          {/* Newsletter CTA */}
          <NewsletterCTA />
        </div>
      </div>
    </>
  );
}
