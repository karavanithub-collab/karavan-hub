import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// SEO Metadata
export const metadata: Metadata = {
  title: 'About Us | Karavan Hub - Our Story & Mission',
  description:
    'Meet Karavan Hub: Founded by a former Registered Nurse who saw firsthand how technology fails the people who need it most. We\'re a Niagara-based IT consulting company that makes technology feel human—without the jargon or overwhelm.',
  keywords:
    'Karavan Hub, about us, IT consulting Niagara, technology consulting Canada, healthcare IT background, human-centered technology, Canadian tech company',
  authors: [{ name: 'Nyah S.', url: 'https://karavanhub.com' }],
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
        alt: 'Karavan Hub - Technology That Feels Human',
      },
    ],
    siteName: 'Karavan Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Karavan Hub — Technology That Feels Human',
    description: 'Founded by a former RN who saw how tech fails people.',
    images: 'https://karavanhub.com/images/twitter-about.jpg',
  },
  canonical: 'https://karavanhub.com/about',
  alternates: {
    canonical: 'https://karavanhub.com/about',
    languages: {
      'en-CA': 'https://karavanhub.com/about',
      'en': 'https://karavanhub.com/about',
    },
  },
}

// Schema.org JSON-LD
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
        addressLocality: 'Niagara',
        addressRegion: 'Ontario',
        postalCode: 'L2E',
        addressCountry: {
          '@type': 'Country',
          name: 'Canada',
          alternateName: 'CA',
        },
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.0896,
        longitude: -79.0849,
      },
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
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
              description: 'Tailored software solutions designed around how your business actually works.',
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
      sameAs: [
        'https://www.linkedin.com/company/karavanhub',
        'https://twitter.com/karavanhub',
        'https://github.com/karavanhub',
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
        'Learn about Karavan Hub\'s founder story—from healthcare operations to technology consulting—and our commitment to making technology feel human for Canadian businesses.',
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
      dateModified: '2025-02-02',
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
            text: 'Karavan Hub\'s founder worked as a Registered Nurse and Care Coordinator before transitioning to technology consulting. This healthcare background provides unique insight into how technology impacts real people on the ground. We prioritize human-centered solutions, plain language communication, and honest advice—even if that means recommending a simpler, less expensive solution than you expected.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Karavan Hub located?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Karavan Hub is headquartered in the Niagara region of Ontario, Canada. We serve businesses across all of Canada, with particular expertise serving small and medium businesses in Ontario. Our local presence means we understand the unique challenges Canadian SMBs face, from regulatory requirements to seasonal business patterns.',
          },
        },
        {
          '@type': 'Question',
          name: 'What industries does Karavan Hub specialize in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We serve small and medium businesses across various industries, with particular expertise in healthcare, professional services, property management, and businesses undergoing digital transformation. Our founder\'s healthcare background gives us unique insight into compliance-heavy industries where technology must work reliably for the people who depend on it.',
          },
        },
        {
          '@type': 'Question',
          name: 'What services does Karavan Hub offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Karavan Hub offers custom software development, web design and development, data analytics, AI integration and automation, workflow optimization, and digital transformation consulting. We focus on practical solutions that make your work easier—not technology for technology\'s sake.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Karavan Hub work with small businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, small and medium businesses are our primary focus. We believe every business—regardless of size—deserves technology that actually helps rather than hinders. We take the time to understand how your business works before recommending solutions, ensuring you get exactly what you need without paying for complexity you don\'t.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Karavan Hub\'s approach to AI and automation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We believe AI should make your work easier, not more complicated. Our approach is practical: we assess whether AI is actually the right solution for your specific challenge. Sometimes a simpler solution works better—and we\'ll tell you that honestly. When AI is the right fit, we implement it in a way that integrates naturally with your existing workflows.',
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
          text: 'We\'re not here for quick projects. We build partnerships that help your business grow year after year, taking the time to truly understand your operations before recommending solutions.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Honest Advice',
          text: 'Sometimes AI isn\'t the answer. We\'ll tell you when a simpler solution works better—even if it means less work for us. Our goal is your success, not maximizing our billable hours.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Plain Language',
          text: 'No jargon, no complexity for complexity\'s sake. We explain things the way we\'d want them explained to us—clearly, directly, and without making you feel like you need a technical degree to understand.',
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

      <Navbar />

      <main id="main-content" role="main">
        {/* ============================================
           HERO SECTION - Brand Blue Gradient
           ============================================ */}
        <section
          className="relative min-h-[90vh] overflow-hidden bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#2563eb] flex items-center"
          aria-labelledby="hero-title"
        >
          {/* Animated gradient orbs */}
          <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-gradient-radial from-blue-400 to-transparent rounded-full blur-[80px] opacity-40 animate-pulse" />
          <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-radial from-cyan-400 to-transparent rounded-full blur-[80px] opacity-40 animate-pulse" />
          <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-gradient-radial from-indigo-400 to-transparent rounded-full blur-[80px] opacity-40 animate-pulse" />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

          {/* Grain overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          }} />

          <div className="relative z-10 max-w-6xl mx-auto px-10 w-full grid lg:grid-cols-2 gap-15 items-center">
            {/* Hero Text */}
            <div className="max-w-lg">
              <h1 id="hero-title" className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                We make tech<br />
                <span className="block bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent font-semibold">
                  feel human.
                </span>
              </h1>
              <p className="text-lg text-blue-100 max-w-sm leading-relaxed">
                Born from real experience in healthcare operations—where we saw firsthand how technology can fail the people who need it most.
              </p>
            </div>

            {/* Abstract Tech Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square">
                {/* Floating nodes */}
                <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-blue-300 rounded-full shadow-lg shadow-blue-300 animate-pulse" />
                <div className="absolute top-[35%] right-[20%] w-2 h-2 bg-blue-300 rounded-full shadow-lg shadow-blue-300 animate-pulse" />
                <div className="absolute bottom-[30%] left-[25%] w-2 h-2 bg-blue-300 rounded-full shadow-lg shadow-blue-300 animate-pulse" />
                <div className="absolute top-[50%] right-[15%] w-2 h-2 bg-blue-300 rounded-full shadow-lg shadow-blue-300 animate-pulse" />
                <div className="absolute bottom-[20%] right-[30%] w-2 h-2 bg-blue-300 rounded-full shadow-lg shadow-blue-300 animate-pulse" />

                {/* Circuit ASCII Pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <pre className="font-mono text-xs leading-relaxed text-blue-300 text-center whitespace-pre select-none" style={{ textShadow: '0 0 20px rgba(147, 197, 253, 0.8)' }}>
{`            .  .  .  .  .  .  .  .
         .        .        .        .
      .     .        .        .     .
         ┌──────────────────────────┐
      ┌──┤                          ├──┐
   ┌──┤  │    ╔══════════════╗      │  ├──┐
   │  │  │    ║  TECHNOLOGY  ║      │  │  │
───┤  │  │    ║      +       ║      │  │  ├───
   │  │  │    ║   HUMANITY   ║      │  │  │
   └──┤  │    ╚══════════════╝      │  ├──┘
      └──┤                          ├──┘
         └──────────────────────────┘
      .     .        .        .     .
         .        .        .        .
            .  .  .  .  .  .  .  .            `}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs tracking-widest">
            <span>Scroll</span>
            <div className="w-px h-[60px] bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
          </div>
        </section>

        {/* ============================================
           FOUNDER STORY SECTION
           ============================================ */}
        <section
          className="py-[120px] lg:py-[70px] bg-white"
          aria-labelledby="story-heading"
          itemScope
          itemType="https://schema.org/Article"
        >
          <meta itemProp="author" content="Nyah S." />
          <meta itemProp="publisher" content="Karavan Hub" />

          <div className="max-w-6xl mx-auto px-10">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              {/* Founder Image */}
              <aside className="lg:sticky lg:top-24" aria-label="Founder portrait">
                <figure
                  className="aspect-[3/4] bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-2xl overflow-hidden relative shadow-2xl shadow-blue-500/20"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute w-52 h-80 bg-gradient-to-b from-white/5 to-white/15 blur-[40px] animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(30,58,138,0.3)]" />
                    <span className="relative z-10 text-center text-white/60 text-xs tracking-wide uppercase">
                      [ FOUNDER PORTRAIT ]<br /><br />
                      <span className="block text-sm font-bold text-white/80 mb-3 tracking-widest">Editorial / Artistic</span>
                      <span className="text-[11px] leading-relaxed text-white/40">
                        Natural light · Soft focus background<br />
                        Warm tones · Authentic expression
                      </span>
                    </span>
                  </div>
                  <figcaption className="mt-6 text-center">
                    <h3 itemProp="name" className="text-2xl font-bold text-gray-900 mb-1">
                      Nyah S.
                    </h3>
                    <p itemProp="jobTitle" className="text-sm text-blue-600 font-semibold">
                      Founder & Principal Consultant
                    </p>
                    <meta itemProp="worksFor" content="Karavan Hub" />
                    <meta itemProp="alumniOf" content="Ontario Health" />
                  </figcaption>
                </figure>
              </aside>

              {/* Story Content */}
              <article className="pt-5" itemProp="articleBody">
                <header>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-5">Our Story</span>
                  <h2
                    id="story-heading"
                    className="text-4xl font-bold text-gray-900 mb-8 leading-tight"
                    itemProp="headline"
                  >
                    The software was supposed to help us. Most days, it felt like it was working against us.
                  </h2>
                </header>

                <div className="text-base leading-relaxed text-gray-600 space-y-6">
                  <p>
                    Before Karavan Hub, I worked as a <strong>Registered Nurse and Care Coordinator with Ontario Health</strong>. My job was to connect the dots—tracking patients across appointments, coordinating between specialists, following up on those who needed extra support.
                  </p>

                  <p>
                    The irony? The systems meant to help me often made it harder. I'd spend hours manually cross-referencing information that should have been connected—while patients returned to the ER again and again, their patterns obvious to anyone paying attention, but invisible to our software.
                  </p>

                  <p>
                    And it wasn't just me. Nurses, physicians, entire care teams—we were all navigating systems designed for compliance checklists and IT departments, not for the people actually delivering care.
                  </p>

                  <blockquote className="text-xl font-semibold text-gray-900 pl-6 border-l-4 border-blue-600 my-8">
                    <p>"Technology doesn't have to be intimidating. It just has to be built around the people who actually use it."</p>
                    <cite className="block text-sm font-normal text-gray-500 mt-3">— Nyah S., Founder of Karavan Hub</cite>
                  </blockquote>

                  <p>
                    I carried that belief with me—even after leaving healthcare. Consulting for a <strong>property management company</strong>, I found myself automating tasks that had been eating up hours of someone's week. The technology wasn't complicated. It just needed someone to ask the right questions first.
                  </p>

                  <p>
                    That's when it clicked: this isn't a healthcare problem. It's a <em>business</em> problem. Every company—small or large—has workflows that could work smarter, if someone took the time to understand them.
                  </p>

                  <p>
                    That's why Karavan Hub exists. Not to push the flashiest AI or overcomplicate what's simple. But to understand how your business actually works, then find where the right technology can genuinely help.
                  </p>

                  <p className="text-lg">
                    <strong>We're not here to impress you. We're here to make your work easier.</strong>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================
           VALUES SECTION
           ============================================ */}
        <section
          className="py-[120px] lg:py-[70px] relative overflow-hidden bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#2563eb]"
          aria-labelledby="values-heading"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <meta itemProp="name" content="Karavan Hub Core Values" />
          <meta itemProp="description" content="The guiding principles behind how Karavan Hub works with clients" />
          <meta itemProp="numberOfItems" content="3" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-50 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

          {/* Floating orb */}
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-gradient-radial from-blue-400 to-transparent rounded-full blur-[80px] opacity-30 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-10 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-blue-300 uppercase tracking-widest block mb-4">How We Work</span>
              <h2 id="values-heading" className="text-4xl font-bold text-white">
                Simple principles. Real results.
              </h2>
            </div>

            {/* Values Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Value 1: Relationships First */}
              <article
                className="group bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl p-12 text-center transition-all duration-300 hover:translate-y-[-8px] hover:bg-white/12 hover:border-white/25 hover:shadow-2xl hover:shadow-blue-400/15"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content="1" />
                <div className="w-28 h-28 bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center mx-auto mb-7 backdrop-blur-lg">
                  <pre className="font-mono text-sm text-white text-center whitespace-pre" style={{ textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(147,197,253,0.6)' }}>
{`    ◇
   /│\
  ◇─┼─◇
   \│/
    ◇`}
                  </pre>
                </div>
                <h3 itemProp="name" className="text-xl font-bold text-white mb-3">
                  Relationships First
                </h3>
                <p itemProp="description" className="text-blue-100/70 leading-relaxed">
                  We're not here for quick projects. We build partnerships that help your business grow year after year.
                </p>
              </article>

              {/* Value 2: Honest Advice */}
              <article
                className="group bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl p-12 text-center transition-all duration-300 hover:translate-y-[-8px] hover:bg-white/12 hover:border-white/25 hover:shadow-2xl hover:shadow-blue-400/15"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content="2" />
                <div className="w-28 h-28 bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center mx-auto mb-7 backdrop-blur-lg">
                  <pre className="font-mono text-sm text-white text-center whitespace-pre" style={{ textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(147,197,253,0.6)' }}>
{`    ▲
    │
◇───┼───◇
    │
    ·`}
                  </pre>
                </div>
                <h3 itemProp="name" className="text-xl font-bold text-white mb-3">
                  Honest Advice
                </h3>
                <p itemProp="description" className="text-blue-100/70 leading-relaxed">
                  Sometimes AI isn't the answer. We'll tell you when a simpler solution works better—even if it means less work for us.
                </p>
              </article>

              {/* Value 3: Plain Language */}
              <article
                className="group bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl p-12 text-center transition-all duration-300 hover:translate-y-[-8px] hover:bg-white/12 hover:border-white/25 hover:shadow-2xl hover:shadow-blue-400/15"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content="3" />
                <div className="w-28 h-28 bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center mx-auto mb-7 backdrop-blur-lg">
                  <pre className="font-mono text-sm text-white text-center whitespace-pre" style={{ textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(147,197,253,0.6)' }}>
{`╭───────╮
│ Hello │
╰───┬───╯
    ╰`}
                  </pre>
                </div>
                <h3 itemProp="name" className="text-xl font-bold text-white mb-3">
                  Plain Language
                </h3>
                <p itemProp="description" className="text-blue-100/70 leading-relaxed">
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
          className="py-24 relative overflow-hidden bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#2563eb] text-center"
          aria-labelledby="cta-heading"
          itemScope
          itemType="https://schema.org/ContactPoint"
        >
          <meta itemProp="contactType" content="customer service" />
          <meta itemProp="areaServed" content="Canada" />

          {/* Animated orbs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-radial from-blue-400 to-transparent rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-radial from-blue-400 to-transparent rounded-full blur-[60px] pointer-events-none" />

          <div className="max-w-2xl mx-auto px-10 relative z-10 bg-white/8 backdrop-blur-3xl border border-white/12 rounded-3xl p-16">
            {/* Location tag */}
            <div
              className="inline-flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full text-sm font-medium text-white/80 mb-6 border border-white/15"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span aria-label="Canadian maple leaf">🍁</span>
              <span>
                <span itemProp="addressLocality">Niagara</span>, <span itemProp="addressCountry">Canada</span>
              </span>
            </div>

            <h2 id="cta-heading" className="text-4xl font-bold text-white mb-4">
              See what's possible.
            </h2>
            <p className="text-lg text-white/75 mb-8 leading-relaxed">
              Every business is different. Take a look at how we've helped others find the right technology fit—without the overwhelm.
            </p>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold transition-all hover:translate-y-[-2px] hover:shadow-2xl"
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
      </main>

      <Footer />
    </>
  )
}
