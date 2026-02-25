import { Metadata } from 'next';
import Link from 'next/link';
import NewsletterCTA from '@/components/sections/NewsletterCTA';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Insights | Karavan Hub — Practical Tech Knowledge for Business Owners',
  description:
    'Practical articles on AI automation, software, and digital strategy for small and medium businesses. Written by real consultants who build the tech. From Karavan Hub, Niagara, Ontario.',
  keywords:
    'AI automation insights, business technology articles, small business automation, IT consulting blog, AI strategy articles, Niagara tech insights, Ontario business technology, Karavan Hub blog, automation for small business',
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
    canonical: 'https://karavanhub.com/insights',
    languages: {
      'en-CA': 'https://karavanhub.com/insights',
      en: 'https://karavanhub.com/insights',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://karavanhub.com/insights',
    title: 'Insights — Practical Tech Knowledge for Business Owners',
    description:
      'Practical articles on AI automation, software, and digital strategy for SMBs. Written by real consultants.',
    images: [
      {
        url: 'https://karavanhub.com/images/og-insights.jpg',
        width: 1200,
        height: 630,
        alt: 'Karavan Hub Insights - Practical Tech Knowledge',
      },
    ],
    siteName: 'Karavan Hub',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights — Practical Tech Knowledge | Karavan Hub',
    description:
      'AI automation, software, and digital strategy articles for business owners. Niagara, Ontario.',
    images: ['https://karavanhub.com/images/twitter-insights.jpg'],
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Niagara, Ontario',
    'geo.position': '43.0896;-79.0849',
    ICBM: '43.0896, -79.0849',
  },
};

// Schema.org JSON-LD
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': 'https://karavanhub.com/#organization',
      name: 'Karavan Hub',
      url: 'https://karavanhub.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://karavanhub.com/images/logo.png',
        width: 512,
        height: 512,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-905-301-3936',
        contactType: 'customer service',
        email: 'karavan.it.hub@gmail.com',
        areaServed: ['CA', 'US', 'SA'],
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Suite 31',
        addressLocality: 'Pelham',
        addressRegion: 'Ontario',
        addressCountry: 'CA',
      },
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Saudi Arabia' },
      ],
      sameAs: [
        'https://www.linkedin.com/company/karavanhub',
        'https://www.instagram.com/karavanhub',
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': 'https://karavanhub.com/insights/#webpage',
      url: 'https://karavanhub.com/insights',
      name: 'Insights — Practical Tech Knowledge for Business Owners',
      description:
        'Practical articles on AI automation, software, and digital strategy for small and medium businesses.',
      isPartOf: { '@id': 'https://karavanhub.com/#website' },
      about: { '@id': 'https://karavanhub.com/#organization' },
      breadcrumb: { '@id': 'https://karavanhub.com/insights/#breadcrumb' },
      inLanguage: 'en-CA',
      datePublished: '2026-02-03',
      dateModified: '2026-02-23',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.insights-title', '.insights-subtitle'],
      },
      significantLink: [
        'https://karavanhub.com/insights/auto-reply-automation',
        'https://karavanhub.com/contact',
      ],
      mentions: [
        { '@type': 'Thing', name: 'AI Automation' },
        { '@type': 'Thing', name: 'Small Business Technology' },
        { '@type': 'Thing', name: 'Digital Strategy' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://karavanhub.com/#website',
      url: 'https://karavanhub.com',
      name: 'Karavan Hub',
      publisher: { '@id': 'https://karavanhub.com/#organization' },
      inLanguage: 'en-CA',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://karavanhub.com/insights/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://karavanhub.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Insights',
          item: 'https://karavanhub.com/insights',
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://karavanhub.com/insights/#itemlist',
      name: 'Karavan Hub Insights',
      numberOfItems: 1,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          url: 'https://karavanhub.com/insights/auto-reply-automation',
          name: 'What If You Never Had to Answer "What Are Your Hours?" Again?',
        },
      ],
    },
  ],
};

export default function InsightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Visually hidden AEO summary */}
      <div className="sr-only" role="doc-abstract">
        <h2>Karavan Hub Insights</h2>
        <p>Practical articles on AI automation, software development, and digital strategy for small and medium business owners. Written by Karavan Hub consultants based in Niagara, Ontario, Canada.</p>
        <dl>
          <dt>Topics covered</dt><dd>AI automation, missed call text back, small business technology, workflow automation, digital strategy</dd>
          <dt>Author</dt><dd>Nyah S., AI Automation Consultant, Karavan Hub</dd>
          <dt>Location</dt><dd>Niagara Region, Ontario, Canada</dd>
          <dt>Audience</dt><dd>Small and medium business owners across Canada and the United States</dd>
        </dl>
      </div>

      <div className="min-h-screen" style={{ backgroundColor: '#F5F5F0' }}>

        {/* ============================================
           PAGE HEADER
           ============================================ */}
        <section
          className="pt-[130px] md:pt-[150px] pb-8 md:pb-10 border-b border-[#D4D4D0]"
          aria-labelledby="insights-heading"
        >
          <div className="mx-auto px-6 sm:px-8" style={{ maxWidth: '1080px' }}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2 md:gap-8">
              <h1
                id="insights-heading"
                className="insights-title font-serif"
                style={{
                  fontSize: 'clamp(40px, 5vw, 56px)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: '#1A1A1A',
                }}
              >
                Insights
              </h1>
              <p
                className="insights-subtitle md:text-right md:pb-1"
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: '#8A8A8A',
                  fontWeight: 300,
                  maxWidth: '340px',
                }}
              >
                Practical knowledge from people who build the tech. Written for business owners, not developers.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
           FEATURED ARTICLE
           ============================================ */}
        <section
          className="pt-10 md:pt-14 pb-8 md:pb-10"
          aria-labelledby="featured-article-heading"
        >
          <div className="mx-auto px-6 sm:px-8" style={{ maxWidth: '1080px' }}>
            <Link
              href="/insights/auto-reply-automation"
              className="group block bg-white rounded-2xl overflow-hidden border border-[#E8E8E3] transition-all duration-300 hover:shadow-lg"
            >
              {/* ASCII Hero Image — full width inside card */}
              <div className="bg-[#1A1A1A]">
                <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 flex items-center justify-center min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]">
                  <pre
                    className="font-mono text-[4px] sm:text-[5px] md:text-[6px] lg:text-[7px] leading-tight text-green-400 whitespace-pre text-center overflow-x-auto select-none"
                    style={{ textShadow: '0 0 20px rgba(74, 222, 128, 0.3)' }}
                    aria-hidden="true"
                  >
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

              {/* Article Info — padded content area below image */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-5">
                  <span
                    className="inline-block self-start px-3 py-1.5 rounded-full text-xs font-medium tracking-wide"
                    style={{
                      backgroundColor: 'rgba(26, 90, 90, 0.08)',
                      color: '#1A5A5A',
                    }}
                  >
                    AI Automation
                  </span>
                  <p className="font-mono text-xs" style={{ color: '#ADADAD', fontWeight: 400 }}>
                    Nyah S. &middot; Feb 3, 2026 &middot; 6 min read
                  </p>
                </div>

                <h2
                  id="featured-article-heading"
                  className="font-serif group-hover:text-[#1A5A5A] transition-colors duration-300"
                  style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    fontWeight: 500,
                    lineHeight: 1.25,
                    letterSpacing: '-0.01em',
                    color: '#1A1A1A',
                    marginBottom: '14px',
                  }}
                >
                  What If You Never Had to Answer "What Are Your Hours?" Again?
                </h2>

                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.75,
                    color: '#5A5A5A',
                    fontWeight: 300,
                    maxWidth: '640px',
                    marginBottom: '24px',
                  }}
                >
                  Small businesses miss 62% of calls. Here's how AI-powered auto-reply automation helps retain customers and grow revenue by responding in seconds.
                </p>

                <span
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 group-hover:bg-[#1A5A5A] group-hover:text-white"
                  style={{
                    border: '1.5px solid #1A5A5A',
                    color: '#1A5A5A',
                  }}
                >
                  Read article
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* ============================================
           MORE ARTICLES COMING
           ============================================ */}
        <div className="text-center pt-2 pb-4">
          <p className="font-mono text-[11px] tracking-[0.15em] uppercase" style={{ color: '#B5B5B0' }}>
            More articles coming soon
          </p>
        </div>

        {/* ============================================
           ARTICLE GRID (future-ready)
           When there are 2+ articles, uncomment this
           section and add cards to the grid.
           ============================================ */}
        {/*
        <section className="pb-12 md:pb-16" aria-labelledby="more-articles-heading">
          <div className="mx-auto px-6 sm:px-8" style={{ maxWidth: '1080px' }}>
            <h2
              id="more-articles-heading"
              className="font-serif mb-8"
              style={{
                fontSize: '24px',
                fontWeight: 500,
                color: '#1A1A1A',
              }}
            >
              More articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article cards go here *\/}
            </div>
          </div>
        </section>
        */}

        {/* ============================================
           NEWSLETTER CTA
           ============================================ */}
        <section className="pb-10 md:pb-14">
          <div className="mx-auto px-6 sm:px-8" style={{ maxWidth: '1080px' }}>
            <NewsletterCTA />
          </div>
        </section>

      </div>
    </>
  );
}
