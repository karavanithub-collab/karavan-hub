import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/sections/ContactForm'

// SEO Metadata
export const metadata: Metadata = {
  title: 'Contact Us | Karavan Hub — Free IT Consultation in Niagara, Ontario',
  description:
    'Contact Karavan Hub for a free IT consultation. Custom software, AI automation, web design, and digital transformation for small and medium businesses. Niagara, Ontario. Response within 24 hours.',
  keywords:
    'contact Karavan Hub, IT consulting Niagara, free IT consultation, software development Ontario, AI consulting Canada, web design Niagara, digital transformation contact, tech support Pelham, Karavan Hub phone, Karavan Hub email',
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
    canonical: 'https://karavanhub.com/contact',
    languages: {
      'en-CA': 'https://karavanhub.com/contact',
      en: 'https://karavanhub.com/contact',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://karavanhub.com/contact',
    title: 'Contact Karavan Hub — Free IT Consultation',
    description:
      'Free 30-minute consultation. Real answers about your tech, your timeline, your budget. No follow-up spam. Response within 24 hours.',
    images: [
      {
        url: 'https://karavanhub.com/images/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Karavan Hub - Free IT Consultation - Niagara, Ontario, Canada',
      },
    ],
    siteName: 'Karavan Hub',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Karavan Hub — Free IT Consultation',
    description: 'Free consultation, response within 24 hours. IT solutions for Canadian SMBs. Niagara, Ontario.',
    images: ['https://karavanhub.com/images/twitter-contact.jpg'],
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Niagara, Ontario',
    'geo.position': '43.0896;-79.0849',
    ICBM: '43.0896, -79.0849',
    'dc.title': 'Contact Karavan Hub — Free IT Consultation',
    'dc.creator': 'Karavan Hub',
    'dc.subject': 'IT Consulting Contact, Free Consultation, Niagara Ontario',
    'dc.language': 'en-CA',
    'dc.type': 'InteractiveResource',
    'dc.coverage': 'Niagara Region, Ontario, Canada',
    'dc.format': 'text/html',
  },
}

// Schema.org JSON-LD — consolidated @graph
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
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Suite 31',
        addressLocality: 'Pelham',
        addressRegion: 'Ontario',
        postalCode: 'L0S',
        addressCountry: 'CA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.0334,
        longitude: -79.3288,
      },
      hasMap: 'https://www.google.com/maps/place/Pelham,+ON,+Canada',
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'AdministrativeArea', name: 'Ontario' },
        { '@type': 'City', name: 'Pelham' },
        { '@type': 'City', name: 'Niagara Falls' },
        { '@type': 'City', name: 'St. Catharines' },
        { '@type': 'City', name: 'Welland' },
        { '@type': 'City', name: 'Hamilton' },
        { '@type': 'City', name: 'Toronto' },
        {
          '@type': 'GeoCircle',
          geoMidpoint: { '@type': 'GeoCoordinates', latitude: 43.0896, longitude: -79.0849 },
          geoRadius: '80000',
        },
      ],
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://calendly.com/karavanhub/30min',
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        result: {
          '@type': 'Reservation',
          name: 'Free 30-Minute Consultation',
        },
      },
      sameAs: [
        'https://www.linkedin.com/company/karavanhub',
        'https://www.instagram.com/karavanhub',
      ],
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
      ],
    },
    {
      '@type': 'ContactPage',
      '@id': 'https://karavanhub.com/contact/#webpage',
      url: 'https://karavanhub.com/contact',
      name: 'Contact Karavan Hub — Free IT Consultation',
      description:
        'Contact Karavan Hub for a free IT consultation. Custom software, AI automation, web design for Canadian SMBs. Response within 24 hours.',
      isPartOf: { '@id': 'https://karavanhub.com/#website' },
      about: { '@id': 'https://karavanhub.com/#organization' },
      mainEntity: { '@id': 'https://karavanhub.com/#organization' },
      breadcrumb: { '@id': 'https://karavanhub.com/contact/#breadcrumb' },
      inLanguage: 'en-CA',
      datePublished: '2024-01-01',
      dateModified: '2026-02-23',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.contact-title', '.contact-subtitle', '.response-text'],
      },
      significantLink: [
        'https://karavanhub.com/about',
        'https://karavanhub.com/ai-solutions',
        'https://karavanhub.com/it-solutions',
        'https://calendly.com/karavanhub/30min',
      ],
      mentions: [
        { '@type': 'Thing', name: 'Custom Software Development' },
        { '@type': 'Thing', name: 'AI Automation' },
        { '@type': 'Thing', name: 'Web Design' },
        { '@type': 'Thing', name: 'Data Analytics' },
        { '@type': 'Thing', name: 'Digital Transformation' },
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
      '@id': 'https://karavanhub.com/contact/#breadcrumb',
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
          name: 'Contact',
          item: 'https://karavanhub.com/contact',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://karavanhub.com/contact/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What happens after I submit the contact form?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "A real person reads it. Not a bot, not an auto-responder. We typically reply within a few hours, always within 24.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is the consultation really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "100%. No invoice, no discovery phase that secretly costs money. We would rather have a good conversation and earn your trust than chase a quick sale. And if we are not the right fit, we will say so.",
          },
        },
        {
          '@type': 'Question',
          name: 'What if I am not sure what I need?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "That is most people. You do not need a brief or a spec sheet. Just tell us what is bugging you about how things work right now, and we will figure out the rest together.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does Karavan Hub work with businesses outside Ontario?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We are based in Niagara but we work with clients across Canada, the US, and Saudi Arabia. Everything is remote-first. As long as we can get on a call, we are good.",
          },
        },
      ],
    },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Visually hidden summary for AEO */}
      <div className="sr-only" role="doc-abstract">
        <h2>Contact Karavan Hub</h2>
        <p>Karavan Hub offers free IT consultations for small and medium businesses. Based in Pelham, Niagara, Ontario, Canada. Services include custom software development, AI automation, web design, data analytics, and digital transformation.</p>
        <dl>
          <dt>Email</dt><dd>karavan.it.hub@gmail.com</dd>
          <dt>Phone</dt><dd>905-301-3936</dd>
          <dt>Location</dt><dd>Suite 31, Pelham, Ontario, Canada</dd>
          <dt>Response time</dt><dd>Within 24 hours</dd>
          <dt>Consultation</dt><dd>Free 30-minute consultation, no commitment</dd>
          <dt>Book online</dt><dd>https://calendly.com/karavanhub/30min</dd>
          <dt>Business hours</dt><dd>Monday to Friday, 9:00 AM to 5:00 PM EST</dd>
          <dt>Service areas</dt><dd>Niagara Region, Ontario, Canada, United States, Saudi Arabia</dd>
          <dt>Services offered</dt><dd>Custom software development, AI integration and automation, web design and development, data analytics and business intelligence, digital transformation strategy, workflow optimization</dd>
          <dt>Languages</dt><dd>English</dd>
        </dl>
      </div>

      {/* ============================================
         HERO SECTION WITH FORM
         ============================================ */}
      <section
        className="relative overflow-hidden flex items-center min-h-[auto] lg:min-h-screen pt-[100px] md:pt-[110px] pb-16 md:pb-20"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #2563eb 100%)' }}
        aria-labelledby="contact-heading"
      >
        {/* Animated gradient orbs */}
        <div
          className="absolute rounded-full opacity-40 hidden md:block"
          style={{
            width: 500, height: 500, top: -150, right: -100,
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'orbFloat 12s ease-in-out infinite',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute rounded-full opacity-40"
          style={{
            width: 350, height: 350, bottom: -100, left: -80,
            background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'orbFloat 12s ease-in-out infinite',
            animationDelay: '-4s',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute rounded-full opacity-40"
          style={{
            width: 250, height: 250, top: '50%', left: '20%',
            background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'orbFloat 12s ease-in-out infinite',
            animationDelay: '-8s',
          }}
          aria-hidden="true"
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />

        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          }}
          aria-hidden="true"
        />

        {/* Floating particle dots */}
        <div className="absolute w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ top: '15%', left: '20%', boxShadow: '0 0 15px rgba(147,197,253,0.4)', willChange: 'transform', transform: 'translateZ(0)' }} aria-hidden="true" />
        <div className="absolute w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ top: '35%', right: '15%', animationDelay: '1.5s', boxShadow: '0 0 15px rgba(147,197,253,0.4)', willChange: 'transform', transform: 'translateZ(0)' }} aria-hidden="true" />
        <div className="absolute w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ bottom: '25%', left: '15%', animationDelay: '3s', boxShadow: '0 0 15px rgba(147,197,253,0.4)', willChange: 'transform', transform: 'translateZ(0)' }} aria-hidden="true" />
        <div className="absolute w-1.5 h-1.5 bg-[rgba(34,211,238,0.8)] rounded-full animate-float" style={{ bottom: '20%', left: '35%', animationDelay: '5s', boxShadow: '0 0 15px rgba(34,211,238,0.4)', willChange: 'transform', transform: 'translateZ(0)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 w-full grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-[80px] items-center">
          {/* Left Side — Contact Info */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full" style={{ animation: 'pulseDot 2s ease-in-out infinite' }} />
              <span className="text-[11px] font-semibold text-white/50 uppercase tracking-[2px]">
                Available Now
              </span>
            </div>

            <h1
              id="contact-heading"
              className="contact-title font-headline text-white leading-[1.1] tracking-[-1px] mb-5"
              style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 300 }}
            >
              Let's talk about<br />
              <span
                className="font-semibold block"
                style={{
                  background: 'linear-gradient(90deg, #fff 0%, #93c5fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                your project.
              </span>
            </h1>

            <p className="contact-subtitle text-[15px] md:text-[17px] text-white/70 leading-[1.7] md:leading-[1.8] mb-8 md:mb-12 max-w-[500px] mx-auto lg:mx-0">
              Free 30-minute consultation. Real answers about your tech, your timeline, your budget. No follow-up spam.
            </p>

            {/* Contact Details */}
            <address className="flex flex-col gap-5 md:gap-6 not-italic items-center lg:items-start" itemScope itemType="https://schema.org/PostalAddress">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <svg className="w-5 h-5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold text-white/50 uppercase tracking-[1.5px] mb-1">Email</h4>
                  <p>
                    <a href="mailto:karavan.it.hub@gmail.com" className="text-white font-medium hover:text-blue-300 transition-colors" itemProp="email">
                      karavan.it.hub@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <svg className="w-5 h-5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold text-white/50 uppercase tracking-[1.5px] mb-1">Phone</h4>
                  <p>
                    <a href="tel:+19053013936" className="text-white font-medium hover:text-blue-300 transition-colors" itemProp="telephone">
                      905-301-3936
                    </a>
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <svg className="w-5 h-5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold text-white/50 uppercase tracking-[1.5px] mb-1">Location</h4>
                  <p className="text-white font-medium">
                    <span itemProp="streetAddress">Suite 31</span>, <span itemProp="addressLocality">Pelham</span>, <span itemProp="addressRegion">Ontario</span>
                    <br />
                    <span itemProp="addressCountry">Canada</span>
                  </p>
                </div>
              </div>
            </address>

            {/* Response Badge */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2.5 rounded-full" style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)' }} role="status">
              <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="response-text text-sm text-green-300 font-medium">
                Usually responds within 24 hours
              </span>
            </div>
          </div>

          {/* Right Side — Form */}
          <ContactForm />
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex flex-col items-center mt-12 opacity-40 relative z-10">
          <span className="text-[10px] font-semibold text-white/60 uppercase tracking-[3px]">Scroll</span>
          <div className="w-px h-8 mt-2 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ============================================
         ALTERNATIVE CONTACT OPTIONS
         ============================================ */}
      <section
        className="py-16 md:py-20"
        style={{ background: '#f9fafb' }}
        aria-labelledby="alt-contact-heading"
      >
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center mb-10 md:mb-12">
            <h2 id="alt-contact-heading" className="font-headline text-[24px] sm:text-[28px] font-bold text-[var(--text-dark)] mb-3">
              Prefer another way to connect?
            </h2>
            <p className="text-base text-[var(--text-body)]">
              Pick whatever feels easiest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Book a Call */}
            <article className="bg-white rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-[#e5e7eb] border-l-[3px] border-l-transparent hover:border-l-[#2563eb]">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)' }}>
                <svg className="w-6 h-6 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="font-headline text-base font-bold text-[var(--text-dark)] mb-2">Book a Call</h3>
              <p className="text-sm text-[var(--text-muted)] mb-4 leading-[1.6]">
                Grab 30 minutes on our calendar. No prep needed.
              </p>
              <a
                href="https://calendly.com/karavanhub/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] hover:underline"
                aria-label="View calendar to book a 30-minute discovery call"
              >
                View Calendar
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </article>

            {/* LinkedIn */}
            <article className="bg-white rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-[#e5e7eb] border-l-[3px] border-l-transparent hover:border-l-[#22d3ee]">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)' }}>
                <svg className="w-6 h-6 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <h3 className="font-headline text-base font-bold text-[var(--text-dark)] mb-2">LinkedIn</h3>
              <p className="text-sm text-[var(--text-muted)] mb-4 leading-[1.6]">
                Say hello on LinkedIn. We actually reply.
              </p>
              <a
                href="https://www.linkedin.com/company/karavanhub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] hover:underline"
                aria-label="Connect with Karavan Hub on LinkedIn"
              >
                Connect
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </article>

            {/* Instagram */}
            <article className="bg-white rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-[#e5e7eb] border-l-[3px] border-l-transparent hover:border-l-[#8b5cf6]">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)' }}>
                <svg className="w-6 h-6 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <h3 className="font-headline text-base font-bold text-[var(--text-dark)] mb-2">Instagram</h3>
              <p className="text-sm text-[var(--text-muted)] mb-4 leading-[1.6]">
                Behind the scenes and the occasional hot take.
              </p>
              <a
                href="https://www.instagram.com/karavanhub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] hover:underline"
                aria-label="Follow Karavan Hub on Instagram"
              >
                Follow
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================
         FAQ SECTION
         ============================================ */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-[700px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center mb-10 md:mb-12">
            <h2 id="faq-heading" className="font-headline text-[24px] sm:text-[28px] font-bold text-[var(--text-dark)] mb-2">
              Before you ask
            </h2>
            <p className="text-base text-[var(--text-body)]">
              Quick answers to help you decide
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#f8fafc] rounded-xl p-6 border-l-2 border-l-[#2563eb] transition-all duration-200 hover:bg-[#f0f4ff] hover:shadow-sm">
              <h3 className="text-[16px] font-semibold text-[var(--text-dark)] mb-2">What happens after I submit the form?</h3>
              <p className="text-[15px] text-[var(--text-body)] leading-[1.7]">
                A real person reads it. Not a bot, not an auto-responder. We typically reply within a few hours, always within 24.
              </p>
            </div>

            <div className="bg-[#f8fafc] rounded-xl p-6 border-l-2 border-l-[#22d3ee] transition-all duration-200 hover:bg-[#f0f4ff] hover:shadow-sm">
              <h3 className="text-[16px] font-semibold text-[var(--text-dark)] mb-2">Is the consultation really free?</h3>
              <p className="text-[15px] text-[var(--text-body)] leading-[1.7]">
                100%. No invoice, no "discovery phase" that secretly costs money. We'd rather have a good conversation and earn your trust than chase a quick sale. And if we're not the right fit, we'll say so.
              </p>
            </div>

            <div className="bg-[#f8fafc] rounded-xl p-6 border-l-2 border-l-[#8b5cf6] transition-all duration-200 hover:bg-[#f0f4ff] hover:shadow-sm">
              <h3 className="text-[16px] font-semibold text-[var(--text-dark)] mb-2">What if I'm not sure what I need?</h3>
              <p className="text-[15px] text-[var(--text-body)] leading-[1.7]">
                That's most people. Seriously. You don't need a brief or a spec sheet. Just tell us what's bugging you about how things work right now, and we'll figure out the rest together.
              </p>
            </div>

            <div className="bg-[#f8fafc] rounded-xl p-6 border-l-2 border-l-[#2563eb] transition-all duration-200 hover:bg-[#f0f4ff] hover:shadow-sm">
              <h3 className="text-[16px] font-semibold text-[var(--text-dark)] mb-2">Do you work with businesses outside Ontario?</h3>
              <p className="text-[15px] text-[var(--text-body)] leading-[1.7]">
                We're based in Niagara but we work with clients across Canada, the US, and Saudi Arabia. Everything's remote-first. As long as we can get on a call, we're good.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
         CTA SECTION
         ============================================ */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e293b 100%)' }}
        aria-labelledby="cta-heading"
      >
        {/* Background orbs */}
        <div
          className="absolute rounded-full opacity-30"
          style={{
            width: 400, height: 400, top: -100, right: -80,
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: 300, height: 300, bottom: -80, left: -60,
            background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          aria-hidden="true"
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[800px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <div
            className="rounded-3xl p-8 md:p-12 text-center"
            style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <h2
              id="cta-heading"
              className="font-headline text-[28px] sm:text-[32px] md:text-[36px] font-bold text-white mb-4"
            >
              Still not sure?{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #93c5fd, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Let's talk.
              </span>
            </h2>
            <p className="text-white/60 text-base md:text-[17px] leading-[1.7] mb-8 max-w-[520px] mx-auto">
              No agenda, no pitch deck. Just a real conversation about what's working and what isn't.
            </p>
            <a
              href="https://calendly.com/karavanhub/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 font-headline text-sm font-semibold text-white uppercase tracking-[1.5px] rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: 'var(--primary)',
              }}
              aria-label="Book a free 30-minute consultation call"
            >
              Book a Conversation
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CSS Keyframe Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}} />
    </>
  )
}
