import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Linkedin, Instagram, Clock } from 'lucide-react';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with Karavan Hub — IT Solutions in Niagara, Ontario',
  description:
    'Contact Karavan Hub for IT consulting, custom software development, and digital transformation services in Niagara, Ontario. Free consultation. Response within 24 hours.',
  keywords:
    'contact Karavan Hub, IT consulting Niagara, software development Ontario, digital transformation contact, free IT consultation, tech support Pelham',
  authors: [{ name: 'Karavan Hub' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://karavanhub.com/contact',
    languages: {
      'en-CA': 'https://karavanhub.com/contact',
      'en': 'https://karavanhub.com/contact',
      'x-default': 'https://karavanhub.com/contact',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://karavanhub.com/contact',
    title: 'Contact Karavan Hub — Let\'s Talk About Your Project',
    description:
      'No sales pitch, no pressure. Just an honest conversation about where you are and where technology can take you. Free consultation, response within 24 hours.',
    images: [
      {
        url: 'https://karavanhub.com/images/contact-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Karavan Hub - IT Solutions Partner',
      },
    ],
    siteName: 'Karavan Hub',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Karavan Hub — Let\'s Talk About Your Project',
    description:
      'No sales pitch, no pressure. Free consultation, response within 24 hours. IT solutions for Niagara businesses.',
    images: ['https://karavanhub.com/images/contact-twitter-card.jpg'],
  },
};

const SCHEMA_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.contact-title', '.contact-subtitle', '.response-badge span'],
    },
    name: 'Contact Karavan Hub',
    description: 'Contact page for Karavan Hub IT solutions and consulting services',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
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
      areaServed: ['CA', 'US'],
      availableLanguage: 'English',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    sameAs: [
      'https://www.linkedin.com/company/karavanhub',
      'https://www.instagram.com/karavanhub',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://karavanhub.com/#localbusiness',
    name: 'Karavan Hub',
    description:
      'IT consulting and software development company serving Niagara region and beyond',
    url: 'https://karavanhub.com',
    telephone: '+1-905-301-3936',
    email: 'karavan.it.hub@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suite 31',
      addressLocality: 'Pelham',
      addressRegion: 'Ontario',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.0334,
      longitude: -79.3288,
    },
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 43.0334,
          longitude: -79.3288,
        },
        geoRadius: '100000',
      },
      {
        '@type': 'Country',
        name: 'Canada',
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 43.0896,
        longitude: -79.0849,
      },
      geoRadius: '50000',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://karavanhub.com/contact/#webpage',
    name: 'Contact Karavan Hub',
    description:
      'Get in touch with Karavan Hub for IT consulting and digital transformation services',
    url: 'https://karavanhub.com/contact',
    isPartOf: {
      '@id': 'https://karavanhub.com/#website',
    },
    about: {
      '@id': 'https://karavanhub.com/#organization',
    },
    mainEntity: {
      '@type': 'Organization',
      '@id': 'https://karavanhub.com/#organization',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
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
];

export default function ContactPage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_LD) }}
      />

      <main id="main-content" role="main">
        {/* ============================================
            HERO SECTION WITH FORM
            ============================================ */}
        <section
          className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-blue-600 relative flex items-center overflow-hidden py-20"
          aria-labelledby="contact-heading"
          data-geo-signal="availability"
          data-eeat="trust"
        >
          {/* Animated gradient orbs */}
          <div
            className="absolute w-96 h-96 -top-24 -right-12 bg-gradient-radial from-blue-500 to-transparent rounded-full blur-3xl opacity-40 animate-pulse"
            style={{ animationDuration: '12s' }}
            aria-hidden="true"
          />
          <div
            className="absolute w-64 h-64 -bottom-16 -left-10 bg-gradient-radial from-cyan-500 to-transparent rounded-full blur-3xl opacity-40 animate-pulse"
            style={{ animationDuration: '12s', animationDelay: '-4s' }}
            aria-hidden="true"
          />
          <div
            className="absolute w-56 h-56 top-1/2 left-1/5 bg-gradient-radial from-indigo-500 to-transparent rounded-full blur-3xl opacity-40 animate-pulse"
            style={{ animationDuration: '12s', animationDelay: '-8s' }}
            aria-hidden="true"
          />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 bg-grid-pattern opacity-5"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-5xl mx-auto px-12 w-full grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Contact Info */}
            <div>
              <div className="flex items-center gap-2 mb-6" data-geo-signal="availability" data-eeat="trust">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                  Available Now
                </span>
              </div>

              <h1
                id="contact-heading"
                className="contact-title font-headline text-5xl md:text-6xl font-light text-white mb-5 leading-tight tracking-tight"
                data-speakable="true"
              >
                Let's talk about
                <br />
                <span className="font-semibold block bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  your project.
                </span>
              </h1>

              <p className="contact-subtitle text-lg text-white/70 leading-relaxed mb-12" data-speakable="true" data-geo-signal="value-proposition">
                No sales pitch, no pressure. Just an honest conversation about where you
                are and where technology can take you.
              </p>

              {/* Contact Details */}
              <address className="flex flex-col gap-6 not-italic" itemScope itemType="https://schema.org/PostalAddress">
                {/* Email */}
                <div className="flex items-start gap-4" data-geo-signal="contact">
                  <div className="w-11 h-11 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white/70"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">
                      Email
                    </h4>
                    <p>
                      <a
                        href="mailto:karavan.it.hub@gmail.com"
                        className="text-white hover:text-blue-300 transition-colors"
                        itemProp="email"
                      >
                        karavan.it.hub@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4" data-geo-signal="contact">
                  <div className="w-11 h-11 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white/70"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">
                      Phone
                    </h4>
                    <p>
                      <a
                        href="tel:+19053013936"
                        className="text-white hover:text-blue-300 transition-colors"
                        itemProp="telephone"
                      >
                        905-301-3936
                      </a>
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white/70"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">
                      Location
                    </h4>
                    <p className="text-white">
                      <span itemProp="streetAddress">Suite 31</span>, <span itemProp="addressLocality">Pelham</span>, <span itemProp="addressRegion">Ontario</span>
                      <br />
                      <span itemProp="addressCountry">Canada</span>
                    </p>
                  </div>
                </div>
              </address>

              {/* Response Badge */}
              <div className="mt-8 inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 px-4 py-2.5 rounded-full response-badge" data-eeat="trust" data-geo-signal="responsiveness" role="status" aria-live="polite">
                <svg
                  className="w-4 h-4 text-green-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-sm text-green-300 font-medium" data-speakable="true">
                  Usually responds within 24 hours
                </span>
              </div>
            </div>

            {/* Right Side - Form */}
            <ContactForm />
          </div>
        </section>

        {/* ============================================
            ALTERNATIVE CONTACT OPTIONS
            ============================================ */}
        <section
          className="py-20 bg-stone-50"
          aria-labelledby="alt-contact-heading"
          data-geo-signal="multi-channel"
        >
          <div className="max-w-4xl mx-auto px-12">
            <div className="text-center mb-12">
              <h2
                id="alt-contact-heading"
                className="font-headline text-3xl font-bold text-text-dark mb-3"
              >
                Prefer another way to connect?
              </h2>
              <p className="text-base text-text-body">
                Choose the method that works best for you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Book a Call Card */}
              <article className="bg-white rounded-2xl p-8 border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary" role="listitem" data-eeat="accessibility">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Calendar className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-headline text-base font-bold text-text-dark text-center mb-2">
                  Book a Call
                </h3>
                <p className="text-sm text-text-muted text-center mb-4">
                  Schedule a 30-minute discovery call at a time that works for you.
                </p>
                <a
                  href="https://calendly.com/karavanhub/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mx-auto"
                  aria-label="View calendar to book a 30-minute discovery call"
                >
                  View Calendar
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
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </article>

              {/* LinkedIn Card */}
              <article className="bg-white rounded-2xl p-8 border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary" role="listitem" data-eeat="social-proof">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Linkedin className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-headline text-base font-bold text-text-dark text-center mb-2">
                  LinkedIn
                </h3>
                <p className="text-sm text-text-muted text-center mb-4">
                  Connect with us professionally on LinkedIn.
                </p>
                <a
                  href="https://www.linkedin.com/company/karavanhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mx-auto"
                  aria-label="Connect with Karavan Hub on LinkedIn"
                >
                  Connect
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
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </article>

              {/* Instagram Card */}
              <article className="bg-white rounded-2xl p-8 border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary" role="listitem" data-eeat="social-proof">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Instagram className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-headline text-base font-bold text-text-dark text-center mb-2">
                  Instagram
                </h3>
                <p className="text-sm text-text-muted text-center mb-4">
                  Follow us for updates, insights, and behind the scenes.
                </p>
                <a
                  href="https://www.instagram.com/karavanhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mx-auto"
                  aria-label="Follow Karavan Hub on Instagram"
                >
                  Follow
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
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
