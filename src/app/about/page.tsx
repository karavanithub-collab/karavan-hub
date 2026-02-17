import { Metadata } from 'next'
import Link from 'next/link'

// SEO Metadata — matches AI Solutions page pattern
export const metadata: Metadata = {
  title: 'About Us | Karavan Hub — Technology That Feels Human',
  description:
    'Meet Karavan Hub: Founded by a former Registered Nurse who saw firsthand how technology fails the people who need it most. Niagara-based IT consulting that makes technology feel human.',
  keywords:
    'Karavan Hub, about us, IT consulting Niagara, technology consulting Canada, healthcare IT background, human-centered technology, Canadian tech company, Niagara technology services, Ontario IT consulting',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://karavanhub.com/about',
    languages: {
      'en-CA': 'https://karavanhub.com/about',
      en: 'https://karavanhub.com/about',
    },
  },
  openGraph: {
    type: 'profile',
    url: 'https://karavanhub.com/about',
    title: 'About Karavan Hub — Technology That Feels Human',
    description:
      'Founded by a former Registered Nurse who saw firsthand how technology fails the people who need it most.',
    images: [
      {
        url: 'https://karavanhub.com/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Karavan Hub - Technology That Feels Human - Niagara, Canada',
      },
    ],
    siteName: 'Karavan Hub',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Karavan Hub — Technology That Feels Human',
    description: 'Founded by a former RN who saw how tech fails people. Niagara-based IT consulting for Canadian businesses.',
    images: ['https://karavanhub.com/images/twitter-about.jpg'],
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Niagara, Ontario',
    'geo.position': '43.0896;-79.0849',
    ICBM: '43.0896, -79.0849',
  },
}

// Schema.org JSON-LD — consolidated @graph
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://karavanhub.com/#website',
      url: 'https://karavanhub.com',
      name: 'Karavan Hub',
      description: 'Technology consulting that feels human. Niagara-based IT solutions for Canadian businesses.',
      publisher: { '@id': 'https://karavanhub.com/#organization' },
      inLanguage: 'en-CA',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://karavanhub.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://karavanhub.com/#organization',
      name: 'Karavan Hub',
      alternateName: ['Karavan Hub IT', 'Karavan Technology'],
      url: 'https://karavanhub.com',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://karavanhub.com/#logo',
        url: 'https://karavanhub.com/images/logo.png',
        contentUrl: 'https://karavanhub.com/images/logo.png',
        width: 512,
        height: 512,
        caption: 'Karavan Hub Logo',
      },
      image: 'https://karavanhub.com/images/og-about.jpg',
      description:
        'Karavan Hub is a Niagara-based technology consulting company founded by a former Registered Nurse. We specialize in human-centered IT solutions including custom software, web design, data analytics, and AI integration for Canadian small and medium businesses.',
      slogan: 'Technology That Feels Human',
      foundingDate: '2024',
      foundingLocation: {
        '@type': 'Place',
        name: 'Niagara, Ontario, Canada',
      },
      founder: { '@id': 'https://karavanhub.com/#founder' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Suite 31',
        addressLocality: 'Pelham',
        addressRegion: 'Ontario',
        postalCode: 'L0S',
        addressCountry: {
          '@type': 'Country',
          name: 'Canada',
          alternateName: 'CA',
        },
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.0334,
        longitude: -79.3288,
      },
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'AdministrativeArea', name: 'Ontario' },
        { '@type': 'City', name: 'Niagara Falls' },
        { '@type': 'City', name: 'St. Catharines' },
        { '@type': 'City', name: 'Toronto' },
      ],
      knowsAbout: [
        'Custom Software Development',
        'Web Design and Development',
        'Data Analytics and Business Intelligence',
        'Digital Transformation Strategy',
        'Healthcare IT Systems',
        'AI Integration and Automation',
        'Workflow Optimization',
        'Small Business Technology Solutions',
        'Process Automation',
        'User Experience Design',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'IT Consulting Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Software Development',
              description: 'Software solutions designed around how your business actually works.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Design & Development',
              description: 'Professional websites that convert visitors into customers.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Integration & Automation',
              description: 'Practical AI solutions that save time without overcomplicating your workflow.',
            },
          },
        ],
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-905-301-3936',
        contactType: 'customer service',
        email: 'karavan.it.hub@gmail.com',
        areaServed: ['CA', 'US'],
        availableLanguage: 'English',
      },
      sameAs: [
        'https://www.linkedin.com/company/karavanhub',
        'https://www.instagram.com/karavanhub',
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://karavanhub.com/#founder',
      name: 'Nyah S.',
      givenName: 'Nyah',
      jobTitle: 'Founder & Principal Consultant',
      description:
        'Former Registered Nurse and Care Coordinator with Ontario Health who transitioned to technology consulting after witnessing firsthand how poorly designed systems fail the people who need them most.',
      image: 'https://karavanhub.com/images/founder-nyah.jpg',
      worksFor: { '@id': 'https://karavanhub.com/#organization' },
      alumniOf: {
        '@type': 'Organization',
        name: 'Ontario Health',
      },
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Professional License',
          name: 'Registered Nurse (RN)',
          recognizedBy: {
            '@type': 'Organization',
            name: 'College of Nurses of Ontario',
          },
        },
      ],
      hasOccupation: [
        {
          '@type': 'Occupation',
          name: 'IT Consultant',
          occupationLocation: {
            '@type': 'Country',
            name: 'Canada',
          },
        },
        {
          '@type': 'Occupation',
          name: 'Registered Nurse',
          description: 'Former Care Coordinator with Ontario Health',
        },
      ],
      knowsAbout: [
        'Healthcare Operations',
        'Care Coordination',
        'Technology Implementation',
        'Process Automation',
        'User-Centered Design',
        'Business Workflow Optimization',
      ],
    },
    {
      '@type': 'AboutPage',
      '@id': 'https://karavanhub.com/about/#webpage',
      url: 'https://karavanhub.com/about',
      name: 'About Karavan Hub — Our Story, Mission & Values',
      description:
        "Learn about Karavan Hub's founder story from healthcare operations to technology consulting, and our commitment to making technology feel human for Canadian businesses.",
      isPartOf: { '@id': 'https://karavanhub.com/#website' },
      about: { '@id': 'https://karavanhub.com/#organization' },
      mainEntity: { '@id': 'https://karavanhub.com/#organization' },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://karavanhub.com/images/og-about.jpg',
      },
      breadcrumb: { '@id': 'https://karavanhub.com/about/#breadcrumb' },
      inLanguage: 'en-CA',
      datePublished: '2024-01-01',
      dateModified: '2026-02-17',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.story-headline', '.highlight-quote', '.cta-title'],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://karavanhub.com/about/#breadcrumb',
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
          name: 'About Us',
          item: 'https://karavanhub.com/about',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://karavanhub.com/about/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What makes Karavan Hub different from other IT consulting firms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Karavan Hub's founder worked as a Registered Nurse and Care Coordinator before transitioning to technology consulting. This healthcare background provides unique insight into how technology impacts real people on the ground. We prioritize human-centered solutions, plain language communication, and honest advice even if that means recommending a simpler, less expensive solution than you expected.",
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Karavan Hub located?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Karavan Hub is based in Pelham, in the Niagara region of Ontario, Canada. We serve businesses across Canada and the United States, with particular expertise serving small and medium businesses in Ontario.',
          },
        },
        {
          '@type': 'Question',
          name: 'What industries does Karavan Hub specialize in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We serve small and medium businesses across various industries, with particular expertise in healthcare, professional services, property management, and businesses undergoing digital transformation. Our founder's healthcare background gives us unique insight into compliance-heavy industries where technology must work reliably.",
          },
        },
        {
          '@type': 'Question',
          name: 'What services does Karavan Hub offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Karavan Hub offers custom software development, web design and development, data analytics, AI integration and automation, workflow optimization, and digital transformation consulting. We focus on practical solutions that make your work easier, not technology for technology's sake.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does Karavan Hub work with small businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes, small and medium businesses are our primary focus. We believe every business regardless of size deserves technology that actually helps rather than hinders. We take the time to understand how your business works before recommending solutions, ensuring you get exactly what you need without paying for complexity you don't.",
          },
        },
        {
          '@type': 'Question',
          name: "What is Karavan Hub's approach to AI and automation?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We believe AI should make your work easier, not more complicated. Our approach is practical: we assess whether AI is actually the right solution for your specific challenge. Sometimes a simpler solution works better and we will tell you that honestly. When AI is the right fit, we implement it in a way that integrates naturally with your existing workflows.",
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      '@id': 'https://karavanhub.com/about/#howwework',
      name: 'How Karavan Hub Works With Clients',
      description:
        'Our approach to technology consulting: building relationships, providing honest advice, and communicating in plain language.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Relationships First',
          text: "We're not here for a quick handoff. We build partnerships and stay involved, because good technology is an ongoing relationship, not a one-time transaction.",
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Honest Advice',
          text: "Sometimes AI isn't the answer. We'll tell you when a simpler solution works better, even if it means less work for us. Our goal is your success, not maximizing our billable hours.",
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Plain Language',
          text: "No jargon, no complexity for complexity's sake. We explain things the way we'd want them explained to us: clearly, directly, and without making you feel like you need a technical degree to understand.",
        },
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ============================================
         HERO SECTION - Brand Blue Gradient
         ============================================ */}
      <section
        className="relative min-h-[90vh] overflow-hidden flex items-center"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #2563eb 100%)' }}
        aria-labelledby="hero-title"
      >
        {/* Animated gradient orbs */}
        <div
          className="absolute rounded-full opacity-40"
          style={{
            width: 600, height: 600, top: -200, right: -100,
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'orbFloat 12s ease-in-out infinite',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute rounded-full opacity-40"
          style={{
            width: 400, height: 400, bottom: -100, left: -100,
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
            width: 300, height: 300, top: '40%', left: '30%',
            background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'orbFloat 12s ease-in-out infinite',
            animationDelay: '-8s',
          }}
          aria-hidden="true"
        />

        {/* Grid pattern */}
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

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 w-full grid lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
          {/* Hero Text */}
          <div className="max-w-[560px] lg:max-w-none text-center lg:text-left mx-auto lg:mx-0">
            <h1
              id="hero-title"
              className="font-headline font-bold text-white leading-[1.05] tracking-[-1.5px] mb-6"
              style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}
            >
              We make tech<br />
              <span
                className="block font-semibold"
                style={{
                  background: 'linear-gradient(90deg, #fff 0%, #93c5fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                feel human.
              </span>
            </h1>
            <p className="text-lg text-white/70 max-w-[480px] leading-[1.8] mx-auto lg:mx-0">
              Born from real experience in healthcare operations, where we saw firsthand how technology can fail the people who need it most.
            </p>
          </div>

          {/* Abstract Tech Visual — hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[480px] aspect-square">
              {/* Floating nodes */}
              <div className="absolute rounded-full shadow-lg shadow-blue-300" style={{ width: 8, height: 8, background: '#93c5fd', top: '20%', left: '15%', animation: 'nodeFloat 6s ease-in-out infinite' }} />
              <div className="absolute rounded-full shadow-lg shadow-blue-300" style={{ width: 8, height: 8, background: '#93c5fd', top: '35%', right: '20%', animation: 'nodeFloat 6s ease-in-out infinite', animationDelay: '-1s' }} />
              <div className="absolute rounded-full shadow-lg shadow-blue-300" style={{ width: 8, height: 8, background: '#93c5fd', bottom: '30%', left: '25%', animation: 'nodeFloat 6s ease-in-out infinite', animationDelay: '-2s' }} />
              <div className="absolute rounded-full shadow-lg shadow-blue-300" style={{ width: 8, height: 8, background: '#93c5fd', top: '50%', right: '15%', animation: 'nodeFloat 6s ease-in-out infinite', animationDelay: '-3s' }} />
              <div className="absolute rounded-full shadow-lg shadow-blue-300" style={{ width: 8, height: 8, background: '#93c5fd', bottom: '20%', right: '30%', animation: 'nodeFloat 6s ease-in-out infinite', animationDelay: '-4s' }} />

              {/* Connection lines */}
              <div className="absolute" style={{ top: '25%', left: '20%', width: 120, height: 1, background: 'linear-gradient(90deg, transparent, rgba(147,197,253,0.4), transparent)', transform: 'rotate(25deg)' }} />
              <div className="absolute" style={{ top: '40%', left: '30%', width: 100, height: 1, background: 'linear-gradient(90deg, transparent, rgba(147,197,253,0.4), transparent)', transform: 'rotate(-15deg)' }} />
              <div className="absolute" style={{ bottom: '35%', left: '25%', width: 140, height: 1, background: 'linear-gradient(90deg, transparent, rgba(147,197,253,0.4), transparent)', transform: 'rotate(10deg)' }} />
              <div className="absolute" style={{ top: '55%', right: '25%', width: 80, height: 1, background: 'linear-gradient(90deg, transparent, rgba(147,197,253,0.4), transparent)', transform: 'rotate(-30deg)' }} />

              {/* ASCII Circuit Pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <pre
                  className="font-mono text-[10px] leading-[1.2] text-center whitespace-pre select-none"
                  style={{
                    letterSpacing: '2px',
                    color: 'rgba(147, 197, 253, 0.6)',
                    animation: 'pulse 4s ease-in-out infinite',
                  }}
                >
                  <span style={{ color: 'rgba(147,197,253,0.3)' }}>{'            .  .  .  .  .  .  .  .            '}</span>{'\n'}
                  <span style={{ color: 'rgba(147,197,253,0.3)' }}>{'         .        .        .        .         '}</span>{'\n'}
                  <span style={{ color: 'rgba(147,197,253,0.3)' }}>{'      .     .        .        .     .      '}</span>{'\n'}
                  <span style={{ color: 'rgba(147,197,253,0.7)' }}>{'         ┌──────────────────────────┐         '}</span>{'\n'}
                  <span style={{ color: 'rgba(147,197,253,0.7)' }}>{'      ┌──┤                          ├──┐      '}</span>{'\n'}
                  <span style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 0 20px rgba(147,197,253,0.8)' }}>{'   ┌──┤  │    ╔══════════════╗      │  ├──┐   '}</span>{'\n'}
                  <span style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 0 20px rgba(147,197,253,0.8)' }}>{'   │  │  │    ║  TECHNOLOGY  ║      │  │  │   '}</span>{'\n'}
                  <span style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 0 20px rgba(147,197,253,0.8)' }}>{'───┤  │  │    ║      +       ║      │  │  ├───'}</span>{'\n'}
                  <span style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 0 20px rgba(147,197,253,0.8)' }}>{'   │  │  │    ║   HUMANITY   ║      │  │  │   '}</span>{'\n'}
                  <span style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 0 20px rgba(147,197,253,0.8)' }}>{'   └──┤  │    ╚══════════════╝      │  ├──┘   '}</span>{'\n'}
                  <span style={{ color: 'rgba(147,197,253,0.7)' }}>{'      └──┤                          ├──┘      '}</span>{'\n'}
                  <span style={{ color: 'rgba(147,197,253,0.7)' }}>{'         └──────────────────────────┘         '}</span>{'\n'}
                  <span style={{ color: 'rgba(147,197,253,0.3)' }}>{'      .     .        .        .     .      '}</span>{'\n'}
                  <span style={{ color: 'rgba(147,197,253,0.3)' }}>{'         .        .        .        .         '}</span>{'\n'}
                  <span style={{ color: 'rgba(147,197,253,0.3)' }}>{'            .  .  .  .  .  .  .  .            '}</span>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[10px] tracking-widest uppercase">
          <span>Scroll</span>
          <div
            className="w-px"
            style={{
              height: 60,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.4), transparent)',
              animation: 'scrollPulse 2s ease-in-out infinite',
            }}
          />
        </div>
      </section>

      {/* ============================================
         FOUNDER STORY SECTION
         ============================================ */}
      <section
        className="py-20 lg:py-[120px] bg-white"
        aria-labelledby="story-heading"
        itemScope
        itemType="https://schema.org/Article"
      >
        <meta itemProp="author" content="Nyah S." />
        <meta itemProp="publisher" content="Karavan Hub" />

        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            {/* Founder Image */}
            <aside className="lg:sticky lg:top-[100px] max-w-[400px] mx-auto lg:max-w-none" aria-label="Founder portrait">
              <figure
                className="aspect-[3/4] rounded-xl overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                  boxShadow: '0 32px 64px rgba(37, 99, 235, 0.2)',
                }}
                itemScope
                itemType="https://schema.org/Person"
              >
                <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
                  <div
                    className="absolute"
                    style={{
                      width: 200, height: 350,
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.15) 70%, rgba(255,255,255,0.05) 100%)',
                      filter: 'blur(40px)',
                      animation: 'breathe 4s ease-in-out infinite',
                    }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(30,58,138,0.3) 100%)' }} />
                  <span className="relative z-10 text-center text-white/60 text-[11px] tracking-[2px] uppercase">
                    [ FOUNDER PORTRAIT ]<br /><br />
                    <span className="block text-[13px] font-semibold text-white/80 mb-3 tracking-[3px]">Editorial / Artistic</span>
                    <span className="text-[9px] tracking-[1px] leading-relaxed text-white/40 normal-case">
                      Natural light &middot; Soft focus background<br />
                      Warm tones &middot; Authentic expression
                    </span>
                  </span>
                </div>
                <figcaption className="mt-6 text-center">
                  <h3 itemProp="name" className="font-headline text-[22px] font-bold text-[var(--text-dark)] mb-1">
                    Nyah S.
                  </h3>
                  <p itemProp="jobTitle" className="text-sm text-[var(--primary)] font-medium">
                    Founder & Principal Consultant
                  </p>
                  <meta itemProp="worksFor" content="Karavan Hub" />
                  <meta itemProp="alumniOf" content="Ontario Health" />
                </figcaption>
              </figure>
            </aside>

            {/* Story Content */}
            <article className="pt-0 lg:pt-5" itemProp="articleBody">
              <header>
                <span className="text-[11px] font-semibold text-[var(--primary)] uppercase tracking-[2px] block mb-5">Our Story</span>
                <h2
                  id="story-heading"
                  className="story-headline font-headline text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[var(--text-dark)] mb-8 leading-[1.2]"
                  itemProp="headline"
                >
                  The software was supposed to help us. Most days, it felt like it was working against us.
                </h2>
              </header>

              <div className="text-[17px] leading-[1.9] text-[var(--text-body)] space-y-6">
                <p>
                  Before Karavan Hub, I worked as a <strong>Registered Nurse and Care Coordinator with Ontario Health</strong>. My job was to connect the dots: tracking patients across appointments, coordinating between specialists, following up on those who needed extra support.
                </p>

                <p>
                  The irony? The systems meant to help me often made it harder. I'd spend hours manually cross-referencing information that should have been connected, while patients returned to the ER again and again. Their patterns were obvious to anyone paying attention, but invisible to our software.
                </p>

                <p>
                  And it wasn't just me. Nurses and physicians alike, entire care teams, all of us stuck in systems built for compliance checklists and IT departments, not for the people actually delivering care.
                </p>

                <blockquote
                  className="highlight-quote text-[22px] font-medium text-[var(--text-dark)] leading-[1.6] pl-6 border-l-[3px] border-[var(--primary)] my-10"
                  style={{ fontStyle: 'normal' }}
                >
                  <p>"Technology doesn't have to be intimidating. It just has to be built around the people who actually use it."</p>
                  <cite className="block text-sm font-normal text-[var(--text-muted)] mt-3" style={{ fontStyle: 'normal' }}>
                    - Nyah S., Founder of Karavan Hub
                  </cite>
                </blockquote>

                <p>
                  I carried that belief with me after leaving healthcare. Consulting for a <strong>property management company</strong>, I found myself automating tasks that had been eating up hours of someone's week. Intake forms that used to take 45 minutes, trimmed to under 10. Maintenance requests that sat in inboxes for days, routed automatically within minutes. The technology wasn't complicated. It just needed someone to ask the right questions first.
                </p>

                <p>
                  That's when it clicked: every company has workflows that could work smarter. Someone just has to ask.
                </p>

                <p>
                  That's why Karavan Hub exists. Not to push the flashiest AI or overcomplicate what's simple. But to understand how your business actually works, then find where the right technology can genuinely help.
                </p>

                <p className="text-lg conclusion-statement mt-8">
                  <strong>We're not here to impress you. We're here to make your work easier.</strong>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================
         VALUES SECTION - Brand Blue Gradient
         ============================================ */}
      <section
        className="py-20 lg:py-[120px] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #2563eb 100%)' }}
        aria-labelledby="values-heading"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <meta itemProp="name" content="Karavan Hub Core Values" />
        <meta itemProp="description" content="The guiding principles behind how Karavan Hub works with clients" />
        <meta itemProp="numberOfItems" content="3" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />

        {/* Floating orb */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 500, height: 500, top: -150, right: -150,
            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 relative z-10">
          {/* Header */}
          <div className="text-center mb-[60px]">
            <span
              className="text-[11px] font-semibold uppercase tracking-[3px] block mb-4"
              style={{ color: '#93c5fd', textShadow: '0 0 20px rgba(147,197,253,0.5)' }}
            >
              How We Work
            </span>
            <h2 id="values-heading" className="font-headline text-[28px] sm:text-[32px] font-bold text-white">
              Simple principles. Real results.
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
            {/* Value 1: Relationships First */}
            <article
              className="group rounded-[20px] p-10 lg:p-12 text-center transition-all duration-400 hover:translate-y-[-8px]"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
              role="listitem"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content="1" />
              <div
                className="w-[90px] h-[90px] lg:w-[110px] lg:h-[110px] rounded-3xl flex items-center justify-center mx-auto mb-7"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                }}
                aria-hidden="true"
              >
                <pre
                  className="font-mono text-[11px] lg:text-[14px] text-white text-center whitespace-pre font-semibold"
                  style={{ textShadow: '0 0 10px rgba(255,255,255,0.9), 0 0 20px rgba(147,197,253,0.7), 0 0 40px rgba(147,197,253,0.5)' }}
                >
{`    ◇
   /│\\
  ◇─┼─◇
   \\│/
    ◇`}
                </pre>
              </div>
              <h3 itemProp="name" className="font-headline text-[18px] lg:text-xl font-bold text-white mb-3">
                Relationships First
              </h3>
              <p itemProp="description" className="text-[15px] text-white/70 leading-[1.7]">
                We're not here for a quick handoff. If something breaks six months later, we want to know about it.
              </p>
            </article>

            {/* Value 2: Honest Advice */}
            <article
              className="group rounded-[20px] p-10 lg:p-12 text-center transition-all duration-400 hover:translate-y-[-8px]"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
              role="listitem"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content="2" />
              <div
                className="w-[90px] h-[90px] lg:w-[110px] lg:h-[110px] rounded-3xl flex items-center justify-center mx-auto mb-7"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                }}
                aria-hidden="true"
              >
                <pre
                  className="font-mono text-[11px] lg:text-[14px] text-white text-center whitespace-pre font-semibold"
                  style={{ textShadow: '0 0 10px rgba(255,255,255,0.9), 0 0 20px rgba(147,197,253,0.7), 0 0 40px rgba(147,197,253,0.5)' }}
                >
{`    ▲
    │
◇───┼───◇
    │
    ·`}
                </pre>
              </div>
              <h3 itemProp="name" className="font-headline text-[18px] lg:text-xl font-bold text-white mb-3">
                Honest Advice
              </h3>
              <p itemProp="description" className="text-[15px] text-white/70 leading-[1.7]">
                Sometimes AI isn't the answer. We'll tell you when a simpler solution works better, even if it means less work for us.
              </p>
            </article>

            {/* Value 3: Plain Language */}
            <article
              className="group rounded-[20px] p-10 lg:p-12 text-center transition-all duration-400 hover:translate-y-[-8px]"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
              role="listitem"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content="3" />
              <div
                className="w-[90px] h-[90px] lg:w-[110px] lg:h-[110px] rounded-3xl flex items-center justify-center mx-auto mb-7"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                }}
                aria-hidden="true"
              >
                <pre
                  className="font-mono text-[11px] lg:text-[14px] text-white text-center whitespace-pre font-semibold"
                  style={{ textShadow: '0 0 10px rgba(255,255,255,0.9), 0 0 20px rgba(147,197,253,0.7), 0 0 40px rgba(147,197,253,0.5)' }}
                >
{`╭───────╮
│ Hello │
╰───┬───╯
    ╰`}
                </pre>
              </div>
              <h3 itemProp="name" className="font-headline text-[18px] lg:text-xl font-bold text-white mb-3">
                Plain Language
              </h3>
              <p itemProp="description" className="text-[15px] text-white/70 leading-[1.7]">
                No jargon, no complexity for complexity's sake. We explain things the way we'd want them explained to us.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================
         CTA SECTION
         ============================================ */}
      <section
        className="py-20 lg:py-24 relative overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)' }}
        aria-labelledby="cta-heading"
        itemScope
        itemType="https://schema.org/ContactPoint"
      >
        <meta itemProp="contactType" content="customer service" />
        <meta itemProp="areaServed" content="Canada" />

        {/* Animated orbs */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 400, height: 400, top: -100, right: -100,
            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 400, height: 400, bottom: -100, left: -100,
            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
          aria-hidden="true"
        />

        <div
          className="max-w-[700px] mx-4 sm:mx-auto px-6 sm:px-8 lg:px-[50px] py-10 lg:py-[60px] relative z-10 rounded-3xl"
          style={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          {/* Location tag */}
          <div
            className="cta-title inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white/80 mb-6"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <span aria-label="Canadian maple leaf" className="text-base">&#x1F341;</span>
            <span>
              <span itemProp="addressLocality">Niagara</span>, <span itemProp="addressCountry">Canada</span>
            </span>
          </div>

          <h2 id="cta-heading" className="cta-title font-headline text-[24px] sm:text-[28px] lg:text-[36px] font-bold text-white mb-4">
            See what's possible.
          </h2>
          <p className="text-base lg:text-lg text-white/75 mb-8 leading-[1.7] max-w-[500px] mx-auto">
            Every business is different. Take a look at how we've helped others find the right technology fit.
          </p>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2.5 bg-white text-[var(--primary-deeper,#1E3A8A)] px-8 lg:px-10 py-4 rounded-xl font-semibold text-base transition-all hover:translate-y-[-2px]"
            style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
            aria-label="View our case studies and client success stories"
          >
            View Our Work
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CSS Keyframe Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes nodeFloat {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(10px, -10px) scale(1.2); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; height: 60px; }
          50% { opacity: 0.8; height: 80px; }
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
