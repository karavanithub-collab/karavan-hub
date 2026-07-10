import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import NewsletterCTA from '@/components/sections/NewsletterCTA';
import Breadcrumb from '@/components/Breadcrumb';

export const revalidate = 3600;

// SEO Metadata
export const metadata: Metadata = {
  title: 'Insights — AI & Tech for Business Owners',
  description:
    'Practical guides on AI automation, web development, and digital growth for Canadian small businesses.',
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
    canonical: 'https://www.karavanhub.com/insights',
    languages: {
      'en-CA': 'https://www.karavanhub.com/insights',
      en: 'https://www.karavanhub.com/insights',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.karavanhub.com/insights',
    title: 'Insights — Practical Tech Knowledge for Business Owners',
    description:
      'Practical articles on AI automation, software, and digital strategy for SMBs. Written by real consultants.',
    images: [
      {
        url: 'https://www.karavanhub.com/images/og-insights.jpg',
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
    images: ['https://www.karavanhub.com/images/twitter-insights.jpg'],
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
      '@id': 'https://www.karavanhub.com/#organization',
      name: 'Karavan Hub',
      url: 'https://www.karavanhub.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.karavanhub.com/images/logo.png',
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
      '@id': 'https://www.karavanhub.com/insights/#webpage',
      url: 'https://www.karavanhub.com/insights',
      name: 'Insights — Practical Tech Knowledge for Business Owners',
      description:
        'Practical articles on AI automation, software, and digital strategy for small and medium businesses.',
      isPartOf: { '@id': 'https://www.karavanhub.com/#website' },
      about: { '@id': 'https://www.karavanhub.com/#organization' },
      breadcrumb: { '@id': 'https://www.karavanhub.com/insights/#breadcrumb' },
      inLanguage: 'en-CA',
      datePublished: '2026-02-03',
      dateModified: '2026-02-23',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.insights-title', '.insights-subtitle'],
      },
      significantLink: [
        'https://www.karavanhub.com/insights/llm-personal-admin',
        'https://www.karavanhub.com/insights/auto-reply-automation',
        'https://www.karavanhub.com/contact',
      ],
      mentions: [
        { '@type': 'Thing', name: 'AI Automation' },
        { '@type': 'Thing', name: 'Small Business Technology' },
        { '@type': 'Thing', name: 'Digital Strategy' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.karavanhub.com/#website',
      url: 'https://www.karavanhub.com',
      name: 'Karavan Hub',
      publisher: { '@id': 'https://www.karavanhub.com/#organization' },
      inLanguage: 'en-CA',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.karavanhub.com/insights/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.karavanhub.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Insights',
          item: 'https://www.karavanhub.com/insights',
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.karavanhub.com/insights/#itemlist',
      name: 'Karavan Hub Insights',
      numberOfItems: 2,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          url: 'https://www.karavanhub.com/insights/llm-personal-admin',
          name: 'Your Business Doesn\'t Need More Hours. It Needs an AI Admin.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          url: 'https://www.karavanhub.com/insights/auto-reply-automation',
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
            <div>
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
                className="insights-subtitle mt-3"
                style={{
                  fontSize: '15px',
                  lineHeight: 1.5,
                  color: '#6B6B6B',
                  fontWeight: 400,
                }}
              >
                What we're learning, building, and sharing.
              </p>
            </div>
          </div>
        </section>

        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Insights' },
        ]} />

        {/* ============================================
           FEATURED ARTICLE
           ============================================ */}
        <section
          className="pt-10 md:pt-14 pb-8 md:pb-10"
          aria-labelledby="featured-article-heading"
        >
          <div className="mx-auto px-6 sm:px-8" style={{ maxWidth: '1080px' }}>
            <Link
              href="/insights/llm-personal-admin"
              className="group block bg-white rounded-2xl overflow-hidden border border-[#E8E8E3] transition-all duration-300 hover:shadow-lg"
            >
              <div>
                <Image
                  src="/images/ai-workflows.jpg"
                  alt="Using LLMs as a personal admin assistant — AI productivity guide for small business owners in Ontario"
                  width={1080}
                  height={600}
                  sizes="(max-width: 1080px) 100vw, 1080px"
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-5">
                  <span
                    className="inline-block self-start px-3 py-1.5 rounded-full text-xs font-medium tracking-wide"
                    style={{ backgroundColor: 'rgba(26, 90, 90, 0.08)', color: '#1A5A5A' }}
                  >
                    AI Productivity
                  </span>
                  <p className="font-mono text-xs" style={{ color: '#ADADAD', fontWeight: 400 }}>
                    Nyah S. &middot; Jul 10, 2026 &middot; 7 min read
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
                  Your Business Doesn&apos;t Need More Hours. It Needs an AI Admin.
                </h2>

                <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5A5A5A', fontWeight: 300, maxWidth: '640px', marginBottom: '24px' }}>
                  Small business owners lose 14–16 hours a week to admin. Here&apos;s how to use a large language model to take that time back — with real prompts you can use today.
                </p>

                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 text-[#1A5A5A] border-[1.5px] border-[#1A5A5A] group-hover:bg-[#1A5A5A] group-hover:text-white">
                  Read article
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* ============================================
           ARTICLE GRID
           ============================================ */}
        <section className="pb-12 md:pb-16" aria-labelledby="more-articles-heading">
          <div className="mx-auto px-6 sm:px-8" style={{ maxWidth: '1080px' }}>
            <h2
              id="more-articles-heading"
              className="font-serif mb-8"
              style={{ fontSize: '24px', fontWeight: 500, color: '#1A1A1A' }}
            >
              More articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link
                href="/insights/auto-reply-automation"
                className="group block bg-white rounded-2xl overflow-hidden border border-[#E8E8E3] transition-all duration-300 hover:shadow-lg"
              >
                <div>
                  <Image
                    src="/images/insights/auto-reply-hero.png"
                    alt="AI auto-reply automation — how Ontario small businesses stop losing leads from missed calls"
                    width={540}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 540px"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span
                      className="inline-block px-3 py-1.5 rounded-full text-xs font-medium tracking-wide"
                      style={{ backgroundColor: 'rgba(26, 90, 90, 0.08)', color: '#1A5A5A' }}
                    >
                      AI Automation
                    </span>
                    <p className="font-mono text-xs" style={{ color: '#ADADAD', fontWeight: 400 }}>
                      Feb 3, 2026 &middot; 6 min
                    </p>
                  </div>
                  <h3
                    className="font-serif group-hover:text-[#1A5A5A] transition-colors duration-300 mb-3"
                    style={{ fontSize: '20px', fontWeight: 500, lineHeight: 1.3, color: '#1A1A1A' }}
                  >
                    What If You Never Had to Answer &ldquo;What Are Your Hours?&rdquo; Again?
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#5A5A5A', fontWeight: 300 }}>
                    Small businesses miss 62% of calls. Here&apos;s how AI auto-reply automation retains customers by responding in seconds.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

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
