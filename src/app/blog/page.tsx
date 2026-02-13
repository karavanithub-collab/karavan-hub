import { Metadata } from 'next';
import NewsletterCTA from '@/components/sections/NewsletterCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What If You Never Had to Answer "What Are Your Hours?" Again? | Karavan Hub',
  description:
    'Small businesses miss 62% of calls. Learn how AI-powered auto-reply automation helps retain customers and increase revenue by responding instantly. From Karavan Hub, Niagara\'s AI automation consultants.',
  keywords:
    'AI automation Niagara, missed call text back, auto reply automation, small business automation, Niagara IT services, AI consulting Ontario, business automation Canada, automated text response',
  authors: [{ name: 'Nyah S.', url: 'https://karavanhub.com' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://karavanhub.com/blog/auto-reply-automation',
  },
  openGraph: {
    type: 'article',
    title: 'What If You Never Had to Answer "What Are Your Hours?" Again?',
    description:
      'Small businesses miss 62% of calls. Learn how AI-powered auto-reply automation helps retain customers and increase revenue.',
    url: 'https://karavanhub.com/blog/auto-reply-automation',
    siteName: 'Karavan Hub',
    locale: 'en_CA',
    authors: ['Nyah S.'],
    publishedTime: '2026-02-03T00:00:00Z',
    modifiedTime: '2026-02-03T00:00:00Z',
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Niagara Region',
    'geo.position': '43.0896;-79.0849',
    'ICBM': '43.0896, -79.0849',
  },
};

const SCHEMA_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What If You Never Had to Answer "What Are Your Hours?" Again?',
    description:
      'Research-backed guide on how AI-powered auto-reply automation helps small businesses retain customers by responding to missed calls instantly.',
    author: {
      '@type': 'Person',
      name: 'Nyah S.',
      jobTitle: 'AI Automation Consultant',
      worksFor: {
        '@type': 'Organization',
        name: 'Karavan Hub',
        url: 'https://karavanhub.com',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Karavan Hub',
      url: 'https://karavanhub.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://karavanhub.com/logo.png',
      },
    },
    datePublished: '2026-02-03',
    dateModified: '2026-02-03',
    mainEntityOfPage: 'https://karavanhub.com/blog/auto-reply-automation',
    keywords: [
      'AI automation',
      'missed call text back',
      'small business automation',
      'Niagara',
      'Ontario',
      'Canada',
    ],
    articleSection: 'AI Automation',
    wordCount: 1200,
    about: [
      {
        '@type': 'Thing',
        name: 'Business Automation',
        description: 'Automated systems that handle routine business tasks',
      },
      {
        '@type': 'Thing',
        name: 'Customer Retention',
        description: 'Strategies to keep existing customers engaged',
      },
    ],
    mentions: [
      {
        '@type': 'Place',
        name: 'Niagara Region',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '43.0896',
          longitude: '-79.0849',
        },
      },
      {
        '@type': 'Thing',
        name: 'Small Business',
        description: 'Independent businesses with limited staff seeking efficiency through automation',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
        name: 'Why don\'t customers leave voicemails?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An eVoice study found that 80% of callers who reach voicemail hang up without leaving a message. Up to 80% of callers now prefer texting over voicemail.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast should businesses respond to missed calls?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'InsideSales research found that responding within 5 minutes increases conversion likelihood by 21x compared to waiting one hour. 82% of consumers expect a reply within 10 minutes.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Karavan Hub',
    description: 'AI automation consulting for small businesses. Based in Niagara, Ontario, serving clients across Canada and internationally.',
    url: 'https://karavanhub.com',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Ontario',
      addressCountry: 'CA',
    },
    areaServed: [
      {
        '@type': 'Place',
        name: 'Niagara Region',
      },
      {
        '@type': 'Place',
        name: 'Ontario',
      },
      {
        '@type': 'Place',
        name: 'Canada',
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '43.0896',
      longitude: '-79.0849',
    },
  },
];

const paragraphStyle = {
  fontSize: '17px',
  lineHeight: '1.85',
  marginBottom: '1.1em',
  color: '#1A1A1A',
  fontWeight: '300',
};

const h2Style = {
  fontSize: '28px',
  lineHeight: '1.3',
  letterSpacing: '-0.01em',
  margin: '56px 0 24px',
  color: '#1A1A1A',
  fontWeight: '500',
};

const h3Style = {
  fontSize: '20px',
  lineHeight: '1.3',
  margin: '40px 0 16px',
  color: '#1A1A1A',
  fontWeight: '500',
};

export default function BlogPage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_LD) }}
      />

      <div className="min-h-screen" style={{ backgroundColor: '#F5F5F0' }}>
        <div className="mx-auto px-6 py-10 lg:py-12" style={{ maxWidth: '900px' }}>
          {/* Hero Image - ASCII art on dark background */}
          <div className="w-full bg-blog-code rounded-3xl overflow-hidden mb-8">
            <div className="bg-blog-code p-12 lg:p-16 flex items-center justify-center min-h-96">
              <pre className="font-mono text-xs lg:text-sm leading-tight text-green-400 text-shadow-lg whitespace-pre text-center overflow-x-auto">
                {`╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                    ┌─────────────────────────────────────────┐                       ║
║                    │                                         │                       ║
║                    │    ██╗███╗   ██╗ ██████╗ ██████╗ ███╗   ███╗██╗███╗   ██╗ ██████╗    │
║                    │    ██║████╗  ██║██╔════╝██╔═══██╗████╗ ████║██║████╗  ██║██╔════╝    │
║                    │    ██║██╔██╗ ██║██║     ██║   ██║██╔████╔██║██║██╔██╗ ██║██║  ███╗   │
║                    │    ██║██║╚██╗██║██║     ██║   ██║██║╚██╔╝██║██║██║╚██╗██║██║   ██║   │
║                    │    ██║██║ ╚████║╚██████╗╚██████╔╝██║ ╚═╝ ██║██║██║ ╚████║╚██████╔╝   │
║                    │    ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝    │
║                    │                                         │                       ║
║                    │           📱 MISSED CALL                │                       ║
║                    │           ━━━━━━━━━━━━━━━               │                       ║
║                    │                                         │                       ║
║                    │    [✗ LOST]  ───────▶  [✓ AUTO-REPLY]   │                       ║
║                    │       │                      │          │                       ║
║                    │       ▼                      ▼          │                       ║
║                    │   -$12.15              Customer         │                       ║
║                    │   Revenue              Retained         │                       ║
║                    │                                         │                       ║
║                    └─────────────────────────────────────────┘                       ║
║                                                                                      ║
║     ┌──────────────────────────────────────────────────────────────────────────┐     ║
║     │  RESPONSE TIME IMPACT                                                    │     ║
║     │  ════════════════════                                                    │     ║
║     │                                                                          │     ║
║     │  < 5 min   ████████████████████████████████████████████████████  21x     │     ║
║     │  1 hour    ██████████                                            2.6x    │     ║
║     │  24 hours  ████                                                  1x      │     ║
║     │                                                                          │     ║
║     └──────────────────────────────────────────────────────────────────────────┘     ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝`}
              </pre>
            </div>
          </div>

          {/* Meta Row - Author, Date, Social */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 pb-8" style={{ borderBottom: '1px solid #E0E0E0', marginBottom: '48px' }}>
            <div className="flex gap-12">
              <div>
                <p className="text-xs font-medium" style={{ color: '#6B6B6B' }}>Written by</p>
                <p className="font-geist-mono text-sm" style={{ color: '#1A1A1A', fontWeight: '400' }}>Nyah S.</p>
              </div>
              <div>
                <p className="text-xs font-medium" style={{ color: '#6B6B6B' }}>Published on</p>
                <p className="font-geist-mono text-sm" style={{ color: '#1A1A1A', fontWeight: '400' }}>Feb 3, 2026</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/karavanhub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all border border-[#E0E0E0] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F5F0]"
              >
                <svg
                  className="w-4.5 h-4.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Article Content */}
          <article className="mx-auto" style={{ maxWidth: '720px' }}>
            {/* Title */}
            <h1 className="font-serif mb-12" style={{
              fontSize: 'clamp(40px, 6vw, 64px)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              fontWeight: '400',
              color: '#1A1A1A',
            }}>
              What If You Never Had to Answer "What Are Your Hours?" Again?
            </h1>

            {/* Article Body */}
            <div>
              <p style={paragraphStyle}>
                A 2025 study by 411 Locals found that small businesses answer only
                37.8% of incoming calls. For every call that goes unanswered, research
                shows there's a 62% chance that customer will call a competitor
                instead.
              </p>

              <p style={paragraphStyle}>
                This isn't a productivity problem. It's structural. When you're
                mid-haircut, under a sink, or managing a lunch rush, answering the
                phone isn't just inconvenient—it's often impossible.
              </p>

              <p style={paragraphStyle}>
                The solution isn't hiring a receptionist or installing complex software.
                The data points to something simpler:{' '}
                <strong>
                  an automated text response that acknowledges the call within seconds.
                </strong>
              </p>

              <h2 className="font-serif" style={h2Style}>
                A thinking partner more than a butler
              </h2>

              <p style={paragraphStyle}>
                A popular vision of business automation is the "digital concierge" use
                case, in which business owners offload simple tasks to save time. Yet,
                when we classified millions of customer interactions, we found that 57%
                of all missed call activity focuses on cognitive work—customers making
                decisions about where to spend money.
              </p>

              <p style={paragraphStyle}>
                These are moments that scale human capability. A potential client calls
                to ask about availability. A customer wants to confirm pricing before
                driving across town. A new lead is comparing three businesses and will
                hire whoever responds first.
              </p>

              <p style={paragraphStyle}>
                The "thinking partner" use case supported by our data shows that
                customers want to expand their ability to make decisions quickly. People
                aren't calling to waste time—they're calling to do business.
              </p>

              {/* Data Chart */}
              <div className="rounded-2xl p-6 lg:p-8 overflow-x-auto" style={{ backgroundColor: '#1A1A1A', margin: '40px 0' }}>
                <p className="font-geist-mono text-xs uppercase tracking-widest mb-6" style={{ color: '#999999' }}>
                  Response Time vs. Conversion Likelihood
                </p>
                <pre className="font-geist-mono text-xs lg:text-sm leading-relaxed" style={{ color: '#E0E0E0' }}>
                  {`  100 ─┬────────────────────────────────────────────────────────────
      │
   80 ─┤  ████████████████████████████████████████████████████
      │  ████████████████████████████████████████████████████  21x
   60 ─┤  ████████████████████████████████████████████████████  conversion
      │  ████████████████████████████████████████████████████  likelihood
   40 ─┤
      │
   20 ─┤  ████████████                                           2.6x
      │
    0 ─┤  █████                                                   1x
      │
      └──────────────────────────────────────────────────────────
          < 5 min              1 hour                    24 hours`}
                </pre>
              </div>

              <p style={paragraphStyle}>
                InsideSales research on 5.7 million inbound leads found that responding
                within 5 minutes increases conversion likelihood by 21x compared to
                waiting just one hour. After 5 minutes, conversion rates drop by 8x.
              </p>

              {/* Callout */}
              <div style={{
                borderLeft: '2px solid #1A5A5A',
                paddingLeft: '24px',
                margin: '40px 0',
              }}>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.85',
                  color: '#4A4A4A',
                  fontWeight: '300',
                }}>
                  82% of consumers expect a business to reply within 10 minutes of
                  reaching out. The average business takes 47 hours.
                </p>
                <p className="font-geist-mono text-xs mt-2" style={{ color: '#999999', fontWeight: '400' }}>
                  — HubSpot Consumer Research, 2024
                </p>
              </div>

              <h2 className="font-serif" style={h2Style}>
                Why voicemail doesn't work
              </h2>

              <p style={paragraphStyle}>
                The assumption that customers will leave a voicemail and wait for a
                callback doesn't hold up against behavioral data. An eVoice study found
                that{' '}
                <strong>
                  80% of callers who reach voicemail hang up without leaving a message.
                </strong>
              </p>

              <p style={paragraphStyle}>
                The reason is documented in consumer preference research: up to 80% of
                callers now prefer texting over voicemail. This shift in communication
                preferences creates an opportunity—but only if businesses adapt their
                response systems accordingly.
              </p>

              <h2 className="font-serif" style={h2Style}>
                Templates by business type
              </h2>

              <h3 className="font-serif" style={h3Style}>
                Salons & Barbershops
              </h3>

              <p style={paragraphStyle}>
                Salon owners physically cannot answer calls during appointments. The
                auto-reply should acknowledge this reality while providing an immediate
                path to booking.
              </p>

              <div className="rounded-lg p-4" style={{ backgroundColor: '#1A1A1A', margin: '24px 0' }}>
                <code className="font-geist-mono text-xs lg:text-sm block whitespace-pre-wrap" style={{ color: '#E0E0E0' }}>
                  {`"Thanks for calling [Business Name]! I'm with a client right now. I'll text you back within [timeframe]. Need to book? [Calendar link]. Or just reply with what you're looking for."`}
                </code>
              </div>

              <h3 className="font-serif" style={h3Style}>
                Home Services & Trades
              </h3>

              <p style={paragraphStyle}>
                Plumbers, electricians, and contractors work in environments where phone
                access is often impossible. Research from Invoca shows home service
                companies miss 62% of inbound calls.
              </p>

              <div className="rounded-lg p-4" style={{ backgroundColor: '#1A1A1A', margin: '24px 0' }}>
                <code className="font-geist-mono text-xs lg:text-sm block whitespace-pre-wrap" style={{ color: '#E0E0E0' }}>
                  {`"Thanks for reaching out to [Business Name]. I'm on a job site right now. Text me what you need and I'll respond ASAP. For emergencies, reply URGENT and I'll call within 15 minutes."`}
                </code>
              </div>

              <h3 className="font-serif" style={h3Style}>
                Restaurants & Cafés
              </h3>

              <p style={paragraphStyle}>
                Restaurant calls are predominantly the same five questions: hours,
                reservations, location, menu, and dietary options. The auto-reply should
                preemptively answer these.
              </p>

              <div className="rounded-lg p-4" style={{ backgroundColor: '#1A1A1A', margin: '24px 0' }}>
                <code className="font-geist-mono text-xs lg:text-sm block whitespace-pre-wrap" style={{ color: '#E0E0E0' }}>
                  {`"Thanks for calling [Restaurant]! Quick info:

📍 Hours: Mon-Sat 11am-9pm, Sun 12-7pm
📅 Reservations: [link]
📋 Menu: [link]

Questions? Reply here and we'll text back."`}
                </code>
              </div>

              <h2 className="font-serif" style={h2Style}>
                The bottom line
              </h2>

              <p style={paragraphStyle}>
                The research is consistent: immediate acknowledgment—even automated—significantly
                reduces customer churn to competitors. Setup takes approximately 10
                minutes. The annual impact on retained revenue can exceed $6,000.
              </p>

              <p style={paragraphStyle}>
                People aren't using auto-reply to avoid customers. They're using it to
                serve customers better.
              </p>

              {/* Author Bio */}
              <div className="flex gap-5 pt-8 mt-16" style={{ borderTop: '1px solid #E0E0E0' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1A5A5A' }}>
                  <span className="font-serif text-base font-medium text-white">NS</span>
                </div>
                <div>
                  <h4 className="text-base font-medium mb-0.5" style={{ color: '#1A1A1A' }}>
                    Nyah S.
                  </h4>
                  <p className="font-geist-mono text-xs mb-2" style={{ color: '#1A5A5A', fontWeight: '400' }}>
                    AI Automation Consultant
                  </p>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '1.85',
                    color: '#6B6B6B',
                    fontWeight: '300',
                  }}>
                    After years coordinating care for patients across Ontario Health, I
                    learned one thing: the right systems make all the difference. Now,
                    from our home base in Niagara, I help small business owners across
                    Canada and beyond build those systems—simple automations that give
                    you back your time without losing the personal touch your customers
                    love.
                  </p>
                </div>
              </div>

              {/* References */}
              <section className="mt-16 pt-8" style={{ borderTop: '1px solid #E0E0E0' }}>
                <h3 className="font-geist-mono text-xs font-medium uppercase tracking-widest mb-5" style={{ color: '#999999' }}>
                  References
                </h3>
                <ol className="space-y-3" style={{ fontSize: '13px', lineHeight: '1.5', color: '#6B6B6B', fontWeight: '300' }}>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs" style={{ color: '#999999', fontWeight: '400' }}>
                      1.
                    </span>
                    411 Locals. "Business Phone Statistics: 30-Day Industry Study." Ambs
                    Call Center, 2025.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs" style={{ color: '#999999', fontWeight: '400' }}>
                      2.
                    </span>
                    Graham, J. "The Silent Profit Killer: Why 62% of Your Business Calls
                    Go Unanswered." Entrepreneur, 2025.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs" style={{ color: '#999999', fontWeight: '400' }}>
                      3.
                    </span>
                    Ambs Call Center. "The Real Cost of a Missed Call." CBS42 Press
                    Release, 2025.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs" style={{ color: '#999999', fontWeight: '400' }}>
                      4.
                    </span>
                    Vida. "SMB Survey: The Cost of Missed Calls." DialZara Industry
                    Report, 2025.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs" style={{ color: '#999999', fontWeight: '400' }}>
                      5.
                    </span>
                    eVoice. "Consumer Voicemail Behavior Study." Ring Eden Analysis,
                    2024.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs" style={{ color: '#999999', fontWeight: '400' }}>
                      6.
                    </span>
                    Numa. "22 Business Phone Statistics: Consumer Communication
                    Preferences." 2025.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs" style={{ color: '#999999', fontWeight: '400' }}>
                      7.
                    </span>
                    Invoca. "How Much Missed Sales Calls Cost Home Services Businesses."
                    2024.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs" style={{ color: '#999999', fontWeight: '400' }}>
                      8.
                    </span>
                    InsideSales. "Lead Response Research: Analysis of 5.7 Million
                    Inbound Leads." 2021.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 font-geist-mono text-xs" style={{ color: '#999999', fontWeight: '400' }}>
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
