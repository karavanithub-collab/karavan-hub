import { Metadata } from 'next';
import { HomeFAQ } from '@/components/sections/HomeFAQ';

export const metadata: Metadata = {
  title: 'Karavan IT HUB — AI & IT Solutions | Custom Software Development',
  description: 'Technology that works for your business. Canadian-owned AI and IT solutions in Niagara, Ontario. Custom software, AI automation, web development, and digital transformation for SMBs.',
  keywords: 'AI solutions, IT solutions, custom software development, AI automation, digital transformation, Canadian tech company',
  authors: [{ name: 'Karavan IT HUB' }],
  openGraph: {
    type: 'website',
    url: 'https://karavanhub.com',
    title: 'Karavan IT HUB — AI & IT Solutions',
    description: 'Technology that works for your business. Custom AI solutions and enterprise software.',
    images: [
      {
        url: 'https://karavanhub.com/images/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Karavan IT HUB'
      }
    ],
    siteName: 'Karavan IT HUB'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karavan IT HUB — AI & IT Solutions',
    description: 'Technology that works for your business. Custom AI solutions and enterprise software.',
    images: ['https://karavanhub.com/images/twitter-homepage.jpg']
  },
  other: {
    'geo.region': 'CA',
    'geo.placename': 'Canada',
    'theme-color': '#2563EB'
  }
};

const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Karavan IT HUB',
  description: 'AI and IT solutions company specializing in custom software development, AI automation, and digital transformation.',
  url: 'https://karavanhub.com',
  logo: 'https://karavanhub.com/images/logo.png',
  areaServed: 'Canada',
  knowsAbout: ['AI Automation', 'Custom Software Development', 'AI Strategy Consulting', 'Digital Transformation', 'Web Design', 'Data Analytics'],
  sameAs: [
    'https://www.linkedin.com/company/karavanithub',
    'https://www.instagram.com/karavanithub',
    'https://www.tiktok.com/@karavanithub'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    availableLanguage: 'English'
  }
};

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Karavan IT HUB',
  description: 'Canadian-owned AI and IT solutions company providing custom software development, AI automation, web design, and digital transformation services.',
  url: 'https://karavanhub.com',
  image: 'https://karavanhub.com/images/og-homepage.jpg',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CA'
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00'
  }
};

const schemaServices = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IT and AI Solutions',
  provider: {
    '@type': 'Organization',
    name: 'Karavan IT HUB'
  },
  areaServed: 'Canada',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Business Technology Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Automation',
          description: 'Automate repetitive tasks and workflows with custom AI solutions that integrate with your existing systems.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom AI Applications',
          description: 'Purpose-built AI applications including intelligent document processing, predictive analytics, and natural language interfaces.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Strategy Consulting',
          description: 'Strategic AI roadmapping, use case identification, and implementation planning for sustainable AI adoption.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Design & Development',
          description: 'Mobile-responsive, SEO-optimized websites built for conversions and business growth.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Software Development',
          description: 'Tailored software solutions designed around your specific business workflows and requirements.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Data Analytics',
          description: 'Transform your data into actionable insights with custom dashboards, reports, and visualizations.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Transformation',
          description: 'Modernize your business operations with technology that eliminates inefficiencies and enables growth.'
        }
      }
    ]
  }
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is AI actually right for my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your specific situation. AI delivers real value when you have repetitive tasks eating up employee time, data that needs organizing or analyzing, or customer interactions that could be faster. During a free assessment, we identify whether AI, traditional IT solutions, or a combination makes the most sense for your business.'
      }
    },
    {
      '@type': 'Question',
      name: 'What results can I realistically expect from AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Results vary based on your starting point and goals. Clients typically see measurable improvements in time savings on manual tasks, faster response times to customers, and better insights from existing data. We build a proof of concept first so you can validate results before committing to a larger investment.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you keep our data safe when implementing AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Data security is built into every step of our process. We use enterprise-grade encryption, work within your existing security policies, and never share your data with third parties. For sensitive industries, we can deploy AI solutions that run entirely within your own infrastructure.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does a website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website costs depend on complexity, features, and your specific business needs. A professional small business website typically ranges from a few thousand dollars to significantly more for e-commerce or custom functionality. We provide transparent quotes after understanding your goals.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most business websites take 4-8 weeks from kickoff to launch. Simpler sites can be faster; complex e-commerce or custom applications take longer. The biggest variable is usually content and feedback timing.'
      }
    },
    {
      '@type': 'Question',
      name: 'Will my website work on mobile and show up on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes—every website we build is mobile-responsive and optimized for search engines. Mobile-first design and technical SEO are standard, not add-ons. We handle fast loading speeds, proper structure, meta tags, and schema markup.'
      }
    },
    {
      '@type': 'Question',
      name: 'What does digital transformation actually mean for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Digital transformation means using technology to solve real business problems—not chasing trends. For small businesses, it often starts with eliminating paper processes, connecting disconnected systems, or giving your team better tools to serve customers.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you build custom software or help us understand our data better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes to both. We build custom software when off-the-shelf tools don\'t fit your workflow. For data analytics, we help you turn the information you\'re already collecting into insights you can act on: dashboards, reports, and visualizations that answer your real business questions.'
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaServices) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="hero relative min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #2563eb 100%)' }}>
        {/* Animated gradient orbs */}
        <div className="hero-orb-1 absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#3b82f6] to-transparent blur-[80px] opacity-40 animate-pulse"></div>
        <div className="hero-orb-2 absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-gradient-radial from-[#22d3ee] to-transparent blur-[80px] opacity-40 animate-pulse" style={{ animationDelay: '-4s' }}></div>
        <div className="hero-orb-3 absolute top-[40%] left-[30%] w-[350px] h-[350px] rounded-full bg-gradient-radial from-[#8b5cf6] to-transparent blur-[80px] opacity-40 animate-pulse" style={{ animationDelay: '-8s' }}></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

        {/* Hero Content */}
        <div className="hero-content relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 lg:px-10 pt-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
          {/* Left Column - Text */}
          <div className="hero-text max-w-full lg:max-w-[560px]">
            <h1 className="hero-title font-headline text-[clamp(42px,6vw,64px)] font-bold text-white leading-[1.1] mb-7 tracking-[-1.5px]">
              Technology that works
              <span className="accent block font-bold bg-gradient-to-r from-white to-[#22d3ee] bg-clip-text text-transparent">
                for your business.
              </span>
            </h1>

            <p className="hero-subtitle font-body text-[16px] sm:text-[17px] md:text-[19px] text-white/75 max-w-full lg:max-w-[500px] leading-[1.75] font-normal mb-9">
              AI automation, custom software, web development. We build what your business actually needs and skip what it doesn't. 14+ years of enterprise experience, now working for SMBs across North America.
            </p>

            <div className="hero-cta-group flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="hero-cta inline-flex items-center justify-center gap-2.5 bg-white text-[#1e3a8a] px-7 sm:px-9 py-[16px] sm:py-[18px] rounded-lg text-[15px] font-semibold no-underline transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-white/95 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] whitespace-nowrap"
              >
                Get a Free Assessment
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[18px] h-[18px] flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#services"
                className="hero-cta hero-cta-secondary inline-flex items-center justify-center gap-2.5 bg-transparent text-white px-7 sm:px-9 py-[16px] sm:py-[18px] border border-white/30 rounded-lg text-[15px] font-semibold no-underline transition-all duration-300 hover:bg-white/10 hover:border-white/50 whitespace-nowrap"
              >
                See Our Work
              </a>
            </div>
          </div>

          {/* Right Column - ASCII Visual (hidden on mobile — ASCII art needs ~550px+ width) */}
          <div className="hero-visual hidden lg:flex items-center justify-center relative">
            <div className="ascii-visual w-full max-w-[620px] min-h-[480px] relative flex items-center justify-center">
              {/* Glow layers */}
              <div className="hero-glow-1 absolute top-[10%] left-1/2 -translate-x-1/2 w-[550px] h-[500px] rounded-full bg-gradient-radial from-[rgba(139,92,246,0.35)] via-[rgba(37,99,235,0.2)] to-transparent blur-[80px] opacity-90"></div>
              <div className="hero-glow-2 absolute top-[25%] left-1/2 -translate-x-1/2 w-[400px] h-[380px] rounded-full bg-gradient-radial from-[rgba(34,211,238,0.35)] via-[rgba(96,165,250,0.18)] to-transparent blur-[65px] opacity-100"></div>
              <div className="hero-glow-3 absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-gradient-radial from-[rgba(255,255,255,0.18)] via-[rgba(34,211,238,0.12)] to-transparent blur-[45px] opacity-100"></div>

              {/* Floating particles */}
              <div className="hero-particle absolute w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full shadow-lg opacity-40 animate-float" style={{ top: '15%', left: '20%' }}></div>
              <div className="hero-particle absolute w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full shadow-lg opacity-40 animate-float" style={{ top: '30%', right: '15%', animationDelay: '1.5s' }}></div>
              <div className="hero-particle absolute w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full shadow-lg opacity-40 animate-float" style={{ bottom: '25%', left: '15%', animationDelay: '3s' }}></div>
              <div className="hero-particle absolute w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full shadow-lg opacity-40 animate-float" style={{ top: '50%', right: '25%', animationDelay: '4.5s' }}></div>
              <div className="hero-particle absolute w-1.5 h-1.5 bg-[rgba(139,92,246,0.7)] rounded-full shadow-lg opacity-40 animate-float" style={{ bottom: '35%', right: '20%', animationDelay: '6s' }}></div>
              <div className="hero-particle absolute w-1.5 h-1.5 bg-[rgba(34,211,238,0.8)] rounded-full shadow-lg opacity-40 animate-float" style={{ bottom: '20%', right: '35%', animationDelay: '5s' }}></div>

              {/* ASCII Art */}
              <div className="circuit-container relative z-10 flex items-center justify-center">
                <pre className="circuit-ascii organic font-mono text-[14px] leading-[1.45] text-center font-medium tracking-[2px] px-4" style={{ filter: 'drop-shadow(0 0 40px rgba(34, 211, 238, 0.3)) drop-shadow(0 0 80px rgba(139, 92, 246, 0.2))' }}>
                  <span className="ascii-dim">                                   </span><span className="ascii-white">✧</span>
                  <br />
                  <span className="ascii-dim">                            </span><span className="ascii-flow">╭</span><span className="ascii-dim">─────────</span><span className="ascii-flow">╮</span>
                  <br />
                  <span className="ascii-dim">                         </span><span className="ascii-flow">╭──</span><span className="ascii-dim">╯</span>    <span className="ascii-white">◎</span>    <span className="ascii-dim">╰──</span><span className="ascii-flow">╮</span>
                  <br />
                  <span className="ascii-dim">                       </span><span className="ascii-purple">╭─</span><span className="ascii-dim">╯</span>    <span className="ascii-flow">◦</span><span className="ascii-dim">───</span><span className="ascii-core">◉</span><span className="ascii-dim">───</span><span className="ascii-flow">◦</span>    <span className="ascii-dim">╰─</span><span className="ascii-purple">╮</span>
                  <br />
                  <span className="ascii-dim">                      </span><span className="ascii-flow">│</span>    <span className="ascii-purple">◦</span><span className="ascii-dim">──╯</span>   <span className="ascii-white">│</span>   <span className="ascii-dim">╰──</span><span className="ascii-purple">◦</span>    <span className="ascii-flow">│</span>
                  <br />
                  <span className="ascii-dim">                     </span><span className="ascii-purple">│</span>   <span className="ascii-flow">◦</span><span className="ascii-dim">─╯</span>  <span className="ascii-bright">◦</span><span className="ascii-dim">──</span><span className="ascii-core">◈</span><span className="ascii-dim">──</span><span className="ascii-bright">◦</span>  <span className="ascii-dim">╰─</span><span className="ascii-flow">◦</span>   <span className="ascii-purple">│</span>
                  <br />
                  <span className="ascii-dim">                    </span><span className="ascii-flow">╭</span><span className="ascii-dim">───</span><span className="ascii-purple">◉</span><span className="ascii-dim">────</span><span className="ascii-flow">◦</span><span className="ascii-dim">──</span><span className="ascii-core">◉</span><span className="ascii-white">◈</span><span className="ascii-core">◉</span><span className="ascii-dim">──</span><span className="ascii-flow">◦</span><span className="ascii-dim">────</span><span className="ascii-purple">◉</span><span className="ascii-dim">───</span><span className="ascii-flow">╮</span>
                  <br />
                  <span className="ascii-dim">                    </span><span className="ascii-flow">╰</span><span className="ascii-dim">───</span><span className="ascii-purple">◉</span><span className="ascii-dim">────</span><span className="ascii-flow">◦</span><span className="ascii-dim">──</span><span className="ascii-core">◉</span><span className="ascii-white">◈</span><span className="ascii-core">◉</span><span className="ascii-dim">──</span><span className="ascii-flow">◦</span><span className="ascii-dim">────</span><span className="ascii-purple">◉</span><span className="ascii-dim">───</span><span className="ascii-flow">╯</span>
                  <br />
                  <span className="ascii-dim">                     </span><span className="ascii-purple">│</span>   <span className="ascii-flow">◦</span><span className="ascii-dim">─╮</span>  <span className="ascii-bright">◦</span><span className="ascii-dim">──</span><span className="ascii-core">◈</span><span className="ascii-dim">──</span><span className="ascii-bright">◦</span>  <span className="ascii-dim">╭─</span><span className="ascii-flow">◦</span>   <span className="ascii-purple">│</span>
                  <br />
                  <span className="ascii-dim">                      </span><span className="ascii-flow">│</span>    <span className="ascii-purple">◦</span><span className="ascii-dim">──╮</span>   <span className="ascii-white">│</span>   <span className="ascii-dim">╭──</span><span className="ascii-purple">◦</span>    <span className="ascii-flow">│</span>
                  <br />
                  <span className="ascii-dim">                       </span><span className="ascii-purple">╰─</span><span className="ascii-dim">╮</span>    <span className="ascii-flow">◦</span><span className="ascii-dim">───</span><span className="ascii-core">◉</span><span className="ascii-dim">───</span><span className="ascii-flow">◦</span>    <span className="ascii-dim">╭─</span><span className="ascii-purple">╯</span>
                  <br />
                  <span className="ascii-dim">                         </span><span className="ascii-flow">╰──</span><span className="ascii-dim">╮</span>    <span className="ascii-white">◎</span>    <span className="ascii-dim">╭──</span><span className="ascii-flow">╯</span>
                  <br />
                  <span className="ascii-dim">                            </span><span className="ascii-flow">╰</span><span className="ascii-dim">────┬────</span><span className="ascii-flow">╯</span>
                  <br />
                  <span className="ascii-dim">                       </span><span className="ascii-purple">∿</span>   <span className="ascii-flow">∿</span>   <span className="ascii-white">│</span>   <span className="ascii-flow">∿</span>   <span className="ascii-purple">∿</span>
                  <br />
                  <span className="ascii-dim">                      </span><span className="ascii-flow">∿</span>  <span className="ascii-purple">◦</span>  <span className="ascii-flow">∿</span>  <span className="ascii-core">◉</span>  <span className="ascii-flow">∿</span>  <span className="ascii-purple">◦</span>  <span className="ascii-flow">∿</span>
                  <br />
                  <span className="ascii-dim">                     </span><span className="ascii-purple">∿</span>   <span className="ascii-flow">│</span>   <span className="ascii-purple">∿</span>  <span className="ascii-white">│</span>  <span className="ascii-purple">∿</span>   <span className="ascii-flow">│</span>   <span className="ascii-purple">∿</span>
                  <br />
                  <span className="ascii-dim">                    </span><span className="ascii-flow">∿</span>    <span className="ascii-purple">◦</span>    <span className="ascii-flow">│</span> <span className="ascii-core">◉</span> <span className="ascii-flow">│</span>    <span className="ascii-purple">◦</span>    <span className="ascii-flow">∿</span>
                  <br />
                  <span className="ascii-dim">                   </span><span className="ascii-purple">∿</span>     <span className="ascii-flow">∿</span>    <span className="ascii-purple">◦</span> <span className="ascii-white">│</span> <span className="ascii-purple">◦</span>    <span className="ascii-flow">∿</span>     <span className="ascii-purple">∿</span>
                  <br />
                  <span className="ascii-dim">                  </span><span className="ascii-flow">∿</span>       <span className="ascii-purple">∿</span>    <span className="ascii-flow">◦</span><span className="ascii-core">◉</span><span className="ascii-flow">◦</span>    <span className="ascii-purple">∿</span>       <span className="ascii-flow">∿</span>
                  <br />
                  <span className="ascii-dim">                 </span><span className="ascii-purple">·</span>         <span className="ascii-flow">·</span>    <span className="ascii-purple">◦</span>    <span className="ascii-flow">·</span>         <span className="ascii-purple">·</span>
                  <br />
                  <span className="ascii-dim">                            </span><span className="ascii-flow">·</span>   <span className="ascii-white">✧</span>   <span className="ascii-flow">·</span>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs tracking-widest uppercase animate-bounce">
          <span>Scroll</span>
          <div className="w-px h-15 bg-gradient-to-b from-white/40 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* ============================================
          CLIENT LOGO BAR - Trust Signal
          ============================================ */}
      <section className="logo-bar bg-[var(--bg-light)] py-10 md:py-12 lg:py-[72px] border-b border-[var(--border-light)]">
        <div className="container-main">
          <div className="logo-bar-header text-center mb-12">
            <p className="text-sm text-[var(--text-body)] uppercase tracking-[3px] font-semibold">
              Our Team Has Delivered For
            </p>
          </div>
          <div className="client-logos flex justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-14 flex-wrap">
            {/* Seagate */}
            <div className="client-logo flex items-center justify-center h-10 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105">
              <svg viewBox="0 0 130 32" fill="none" className="h-full w-auto max-w-40">
                <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700" letterSpacing="1" fill="#6EBE49">
                  SEAGATE
                </text>
              </svg>
            </div>

            {/* Ontario Health */}
            <div className="client-logo flex items-center justify-center h-10 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105">
              <svg viewBox="0 0 155 32" fill="none" className="h-full w-auto max-w-40">
                <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="700" fill="#00529B">
                  Ontario Health
                </text>
              </svg>
            </div>

            {/* Microsoft */}
            <div className="client-logo flex items-center justify-center h-10 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105">
              <svg viewBox="0 0 140 30" fill="none" className="h-full w-auto max-w-40">
                <rect x="0" y="1" width="14" height="14" fill="#F25022" />
                <rect x="15" y="1" width="14" height="14" fill="#7FBA00" />
                <rect x="0" y="16" width="14" height="14" fill="#00A4EF" />
                <rect x="15" y="16" width="14" height="14" fill="#FFB900" />
                <text x="36" y="22" fontFamily="Segoe UI, Arial, sans-serif" fontSize="18" fontWeight="600" fill="#737373">
                  Microsoft
                </text>
              </svg>
            </div>

            {/* Google */}
            <div className="client-logo flex items-center justify-center h-10 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105">
              <svg viewBox="0 0 90 32" fill="none" className="h-full w-auto max-w-40">
                <text x="0" y="26" fontFamily="Product Sans, Arial, sans-serif" fontSize="28" fontWeight="500">
                  <tspan fill="#4285F4">G</tspan>
                  <tspan fill="#EA4335">o</tspan>
                  <tspan fill="#FBBC05">o</tspan>
                  <tspan fill="#4285F4">g</tspan>
                  <tspan fill="#34A853">l</tspan>
                  <tspan fill="#EA4335">e</tspan>
                </text>
              </svg>
            </div>

            {/* Popeyes */}
            <div className="client-logo flex items-center justify-center h-10 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105">
              <svg viewBox="0 0 130 32" fill="none" className="h-full w-auto max-w-40">
                <text x="0" y="26" fontFamily="Arial Black, Arial, sans-serif" fontSize="24" fontWeight="900" fill="#F15A22">
                  POPEYES
                </text>
              </svg>
            </div>

            {/* Aegean Escape Villas */}
            <div className="client-logo flex items-center justify-center h-10 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105">
              <svg viewBox="0 0 180 32" fill="none" className="h-full w-auto max-w-40">
                <text x="0" y="23" fontFamily="Georgia, serif" fontSize="19" fontWeight="400" fill="#1e3a5f">
                  Aegean Escape Villas
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          VALUE PROPOSITION SECTION
          ============================================ */}
      <section className="value-section bg-white py-[60px] sm:py-[80px] lg:py-[120px]">
        <div className="container-main max-w-[900px] text-center">
          <h2 className="font-headline text-[26px] sm:text-[32px] lg:text-[48px] font-semibold text-[var(--text-dark)] mb-8 leading-[1.15] tracking-[-1px]">
            Everyone&rsquo;s talking about AI. But no one&rsquo;s explaining how to actually use it.
          </h2>
          <p className="font-body text-[19px] text-[var(--text-body)] leading-[1.8] mb-10 max-w-[800px] mx-auto">
            You&#8217;ve seen the headlines. You&#8217;ve sat through the demos. Maybe you&#8217;ve even tried a few tools. And yet—nothing&#8217;s really changed in how your business runs. That&#8217;s not your fault. You need a partner who can cut through the noise, speak plain English, and tell you honestly what will actually work for your business—and what won&#8217;t.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 text-[var(--primary)] px-8 py-4 border-2 border-[var(--primary)] rounded-lg text-[15px] font-semibold font-headline no-underline transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:-translate-y-0.5"
          >
            Let's Talk
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ============================================
          SERVICES SECTION
          ============================================ */}
      <section className="services-section bg-gradient-to-b from-[#f0f7ff] to-white py-[60px] sm:py-[80px] lg:py-[120px]" id="services">
        <div className="container-main">
          <div className="services-header text-center mb-16">
            <h2 className="font-headline text-[26px] sm:text-[32px] lg:text-[42px] font-medium text-[var(--text-dark)] mb-4 tracking-[-0.5px]">
              Here&#8217;s how we help.
            </h2>
            <p className="text-[17px] text-[var(--text-body)] max-w-[600px] mx-auto leading-[1.7]">
              Two specialties. One goal: technology that actually helps your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Solutions Card */}
            <div className="service-card bg-gradient-to-br from-white via-[#f8fafc] to-[#eff6ff] rounded-[20px] px-5 py-7 sm:p-10 border border-[rgba(37,99,235,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(37,99,235,0.12)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-cyan)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="tech-stack flex gap-4 mb-6 flex-wrap items-center">
                {/* Python */}
                <div className="tech-logo-icon w-9 h-9 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-115">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.403 3.35-3.403h5.766s3.24.052 3.24-3.132V3.202S18.28 0 11.913 0zM8.708 1.85c.578 0 1.046.468 1.046 1.046 0 .578-.468 1.046-1.046 1.046-.578 0-1.046-.468-1.046-1.046 0-.578.468-1.046 1.046-1.046z" fill="#3776AB" />
                    <path d="M12.087 24c6.093 0 5.713-2.656 5.713-2.656l-.007-2.752h-5.814v-.826h8.122s3.9.445 3.9-5.735c0-6.18-3.404-5.96-3.404-5.96h-2.03v2.867s.11 3.403-3.349 3.403H9.452s-3.24-.052-3.24 3.132v5.325S5.72 24 12.087 24zm3.206-1.85c-.578 0-1.046-.468-1.046-1.046 0-.578.468-1.046 1.046-1.046.578 0 1.046.468 1.046 1.046 0 .578-.468 1.046-1.046 1.046z" fill="#FFD43B" />
                  </svg>
                </div>
                {/* OpenAI */}
                <div className="tech-logo-icon w-9 h-9 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-115">
                  <svg viewBox="0 0 24 24" fill="#000000">
                    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
                  </svg>
                </div>
                {/* Claude (Anthropic) */}
                <div className="tech-logo-icon w-9 h-9 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-115">
                  <svg viewBox="0 0 24 24" fill="#D97757">
                    <path d="M16.5 2.5H21L17.5 21.5H13L16.5 2.5Z"/>
                    <path d="M3 2.5H7.5L11 21.5H6.5L3 2.5Z"/>
                  </svg>
                </div>
                {/* Gemini */}
                <div className="tech-logo-icon w-9 h-9 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-115">
                  <svg viewBox="0 0 24 24" fill="#4285F4">
                    <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"/>
                  </svg>
                </div>
                {/* Hugging Face */}
                <div className="tech-logo-icon w-9 h-9 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-115">
                  <svg viewBox="0 0 24 24" fill="#F4B400">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="#F4B400" strokeWidth="1.5"/>
                    <circle cx="8.5" cy="9.5" r="1.5" fill="#F4B400"/>
                    <circle cx="15.5" cy="9.5" r="1.5" fill="#F4B400"/>
                    <path d="M7.5 14.5c0 0 2 3 4.5 3s4.5-3 4.5-3" fill="none" stroke="#F4B400" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              <h3 className="font-headline text-2xl font-semibold text-[var(--text-dark)] mb-3">
                AI Solutions
                <span className="block text-sm font-medium text-[var(--text-muted)] mt-1">Automation & Intelligence</span>
              </h3>
              <p className="text-[16px] text-[var(--text-body)] mb-6 leading-[1.7]">
                Transform how your business operates with intelligent automation that learns, adapts, and delivers measurable ROI from day one.
              </p>
              <ul className="space-y-0 mb-6">
                <li className="py-2.5 text-[15px] text-[var(--text-body)] border-b border-[var(--border-light)] last:border-b-0">
                  AI Automation & Integration
                </li>
                <li className="py-2.5 text-[15px] text-[var(--text-body)] border-b border-[var(--border-light)] last:border-b-0">
                  Custom AI Applications (RAG, Chatbots, Agents)
                </li>
                <li className="py-2.5 text-[15px] text-[var(--text-body)] border-b border-[var(--border-light)] last:border-b-0">
                  AI Strategy Consulting
                </li>
                <li className="py-2.5 text-[15px] text-[var(--text-body)] border-b border-[var(--border-light)] last:border-b-0">
                  LLM Fine-Tuning & Implementation
                </li>
              </ul>
              <a
                href="/ai-solutions"
                className="inline-flex items-center gap-2 bg-[var(--primary)] text-white no-underline font-semibold text-[15px] py-3.5 px-6 rounded-lg transition-all duration-250 hover:bg-[var(--primary-dark)] hover:gap-3 hover:-translate-y-0.5 mt-2"
              >
                Explore AI Solutions
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5-5-5-5" />
                </svg>
              </a>
            </div>

            {/* IT Solutions Card */}
            <div className="service-card bg-gradient-to-br from-white via-[#f8fafc] to-[#eff6ff] rounded-[20px] px-5 py-7 sm:p-10 border border-[rgba(37,99,235,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(37,99,235,0.12)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-cyan)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="tech-stack flex gap-4 mb-6 flex-wrap items-center">
                {/* Tech logos */}
                <div className="tech-logo-icon w-9 h-9 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-115">
                  <svg viewBox="0 0 24 24" fill="#61DAFB">
                    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-9.82.26c.27.06.57.11.88.16l-.3-.51-.29-.51c-.11.29-.22.58-.29.86m9.82-4.52c-.27-.06-.57-.11-.88-.16l.3.51.29.51c.11-.29.22-.58.29-.86m-9.53-.16c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51.3-.51m3.14-2.04c-.52.59-1.03 1.23-1.51 1.9-.82.08-1.63.2-2.4.36.51 2.14.32 3.61-.31 3.96.63.38 2.01-.2 3.6-1.7" />
                  </svg>
                </div>
                <div className="tech-logo-icon w-9 h-9 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-115">
                  <svg viewBox="0 0 24 24" fill="#339933">
                    <path d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.548-.191.659-.234 1.243-.566.062-.034.141-.021.205.015l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.193-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.049-.139.143-.139.242v10.142c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.509 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.943-.922-1.604V6.929c0-.66.352-1.274.922-1.603L11.076.249c.557-.317 1.296-.317 1.848 0l8.794 5.077c.57.329.924.943.924 1.603v10.142c0 .66-.354 1.273-.924 1.604l-8.794 5.078c-.28.163-.601.247-.926.247zm2.72-6.979c-3.857 0-4.664-1.771-4.664-3.256 0-.141.114-.253.254-.253h1.137c.125 0 .231.091.251.214.172 1.161.683 1.746 3.022 1.746 1.858 0 2.65-.42 2.65-1.406 0-.568-.224-.99-3.114-1.274-2.415-.238-3.909-.772-3.909-2.702 0-1.779 1.5-2.839 4.016-2.839 2.823 0 4.222.979 4.398 3.082.007.074-.021.147-.068.203-.047.053-.114.084-.184.084h-1.143c-.119 0-.224-.082-.249-.198-.277-1.228-.949-1.621-2.754-1.621-2.027 0-2.263.707-2.263 1.236 0 .641.279.828 3.017 1.189 2.711.356 4.003.861 4.003 2.773 0 1.921-1.601 3.022-4.4 3.022z" />
                  </svg>
                </div>
                <div className="tech-logo-icon w-9 h-9 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-115">
                  <svg viewBox="0 0 24 24" fill="#FF9900">
                    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.399l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.319-.79 1.03-2.57.695-2.994z" />
                  </svg>
                </div>
                {/* TypeScript */}
                <div className="tech-logo-icon w-9 h-9 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-115">
                  <svg viewBox="0 0 24 24" fill="#3178C6">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.34h9.25v2.259H9.372V18.5H7.067v-6.15H3.375z"/>
                  </svg>
                </div>
                {/* Next.js */}
                <div className="tech-logo-icon w-9 h-9 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-115">
                  <svg viewBox="0 0 24 24" fill="#000000">
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                  </svg>
                </div>
                {/* WordPress */}
                <div className="tech-logo-icon w-9 h-9 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-115">
                  <svg viewBox="0 0 24 24" fill="#21759B">
                    <path d="M12.158 12.786l-2.698 7.84c.806.236 1.657.365 2.54.365 1.047 0 2.051-.181 2.986-.51a.852.852 0 0 1-.069-.131l-2.759-7.564zm-3.796 1.06l-2.33 6.77A10.007 10.007 0 0 0 12 22c1.71 0 3.325-.43 4.735-1.188l-.037-.068-6.336-7.898zM20.108 6.89c.068.493.108 1.023.108 1.594 0 1.572-.294 3.338-1.175 5.55l-4.72 13.65C18.963 25.478 22 21.072 22 15.89a12.137 12.137 0 0 0-1.892-8.999zM12 2C6.477 2 2 6.477 2 12c0 3.04 1.363 5.762 3.51 7.598l4.846-14.072c.326-.806.558-1.38.558-1.88 0-.737-.283-1.213-.52-1.582C11.094 2.023 11.544 2 12 2zm.752 4.666c.337.018.639.05.639.05.301.036.266.479-.036.462 0 0-.905-.071-1.49-.071-.549 0-1.472.071-1.472.071-.302.017-.337-.444-.036-.48 0 0 .284-.025.585-.043l.87-2.384-.612-1.837L8.871 9.47l.58-.016c.337-.009.639.05.639.05.302.036.266.478-.035.462 0 0-.906-.071-1.49-.071-.105 0-.228.003-.359.008L12.058 2.12A9.96 9.96 0 0 1 22 12c0 2.162-.691 4.163-1.862 5.8l-.06-.355c-.57-1.842-.2-3.304.47-4.356.327-.461.684-1.054.684-1.705 0-.529-.203-1.136-.406-1.746l-.758-2.52c.516-.935.8-2.105.8-3.387v-.175z" />
                  </svg>
                </div>
              </div>

              <h3 className="font-headline text-2xl font-semibold text-[var(--text-dark)] mb-3">
                IT Solutions
                <span className="block text-sm font-medium text-[var(--text-muted)] mt-1">Development & Design</span>
              </h3>
              <p className="text-[16px] text-[var(--text-body)] mb-6 leading-[1.7]">
                From concept to launch, we build digital infrastructure that powers growth—reliable, scalable, and designed for tomorrow.
              </p>
              <ul className="space-y-0 mb-6">
                <li className="py-2.5 text-[15px] text-[var(--text-body)] border-b border-[var(--border-light)] last:border-b-0">
                  Custom Software Development
                </li>
                <li className="py-2.5 text-[15px] text-[var(--text-body)] border-b border-[var(--border-light)] last:border-b-0">
                  Web Design & E-Commerce
                </li>
                <li className="py-2.5 text-[15px] text-[var(--text-body)] border-b border-[var(--border-light)] last:border-b-0">
                  Data Analytics & Dashboards
                </li>
                <li className="py-2.5 text-[15px] text-[var(--text-body)] border-b border-[var(--border-light)] last:border-b-0">
                  Digital Transformation
                </li>
              </ul>
              <a
                href="/it-solutions"
                className="inline-flex items-center gap-2 bg-[var(--primary)] text-white no-underline font-semibold text-[15px] py-3.5 px-6 rounded-lg transition-all duration-250 hover:bg-[var(--primary-dark)] hover:gap-3 hover:-translate-y-0.5 mt-2"
              >
                Explore IT Solutions
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5-5-5-5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TRUST & RESULTS SECTION
          ============================================ */}
      <section className="trust-results-section bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] py-[60px] sm:py-[80px] md:py-[120px] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

        <div className="container-main relative z-10">
          {/* Top Row: Copy + Company Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 items-center">
            <div className="trust-content">
              <h2 className="font-headline text-[26px] sm:text-[32px] md:text-[42px] font-medium text-white mb-6 leading-[1.2] tracking-[-0.5px]">
                We&rsquo;ve been at this for years. Here&rsquo;s what that looks like.
              </h2>
              <p className="text-[17px] text-white/75 mb-5 leading-[1.75]">
                We've spent over a decade helping businesses turn fragmented processes into reliable systems they can scale on.
              </p>
              <a
                href="/case-studies"
                className="inline-flex items-center gap-2.5 text-white px-8 py-4 border-2 border-white/30 rounded-lg text-[15px] font-semibold no-underline transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 mt-4"
              >
                Read Case Studies
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="company-stats-card bg-white/8 backdrop-blur-[24px] rounded-[20px] p-7 md:p-10 grid grid-cols-2 gap-6 md:gap-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-white/15">
              <div className="company-stat text-center">
                <div className="company-stat-number font-headline text-[42px] md:text-[52px] font-bold text-white leading-none mb-2">
                  14<span className="text-[var(--accent-cyan)]">+</span>
                </div>
                <div className="company-stat-label text-xs font-semibold text-white/85 uppercase tracking-[1.5px] leading-[1.4]">
                  Years Combined Experience
                </div>
              </div>
              <div className="company-stat text-center">
                <div className="company-stat-number font-headline text-[42px] md:text-[52px] font-bold text-white leading-none mb-2">
                  6
                </div>
                <div className="company-stat-label text-xs font-semibold text-white/85 uppercase tracking-[1.5px] leading-[1.4]">
                  Years at Fortune 500
                </div>
              </div>
              <div className="col-span-2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="col-span-2 text-center">
                <div className="company-stat-number font-headline text-[42px] md:text-[52px] font-bold text-white leading-none mb-2">
                  10<span className="text-[var(--accent-cyan)]">+</span>
                </div>
                <div className="company-stat-label text-xs font-semibold text-white/85 uppercase tracking-[1.5px] leading-[1.4]">
                  Years Enterprise Healthcare
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: ASCII Result Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* 92% Efficiency */}
            <div className="ascii-result-card bg-[rgba(34,211,238,0.12)] border border-[rgba(34,211,238,0.25)] rounded-[20px] px-4 py-5 md:px-5 md:py-6 text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="ascii-result-title text-[10px] font-semibold uppercase tracking-[2px] text-white/50 mb-3">
                Efficiency
              </div>
              <div className="ascii-result-visual h-[100px] md:h-[120px] flex items-center justify-center mb-4">
                <pre className="result-ascii font-mono text-[10px] md:text-[14px] leading-[1.4] text-center font-semibold tracking-[0.5px]">
                  <span className="text-[#22d3ee] glow-c1">  ╭───◉───╮</span>
                  <br />
                  <span className="text-[#67e8f9] glow-c2">  │</span><span className="text-[#a5f3fc] glow-c3"> ◈ ─ ◈ </span><span className="text-[#67e8f9] glow-c2">│</span>
                  <br />
                  <span className="text-[#22d3ee] glow-c1">  │</span><span className="text-[#a5f3fc] glow-c3">  ╲│╱  </span><span className="text-[#22d3ee] glow-c1">│</span>
                  <br />
                  <span className="text-[#67e8f9] glow-c2">  ◈──</span><span className="text-[#a5f3fc] glow-c3">◉</span><span className="text-[#67e8f9] glow-c2">──◈</span>
                  <br />
                  <span className="text-[#22d3ee] glow-c1">  │</span><span className="text-[#a5f3fc] glow-c3">  ╱│╲  </span><span className="text-[#22d3ee] glow-c1">│</span>
                  <br />
                  <span className="text-[#67e8f9] glow-c2">  ╰───◉───╯</span>
                </pre>
              </div>
              <div className="font-headline text-[26px] md:text-[32px] font-bold text-white mb-1">
                92%
              </div>
              <div className="text-[13px] font-medium text-white/75">
                Efficiency Gain
              </div>
            </div>

            {/* 85% Faster */}
            <div className="ascii-result-card bg-[rgba(139,92,246,0.12)] border border-[rgba(139,92,246,0.25)] rounded-[20px] px-4 py-5 md:px-5 md:py-6 text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="ascii-result-title text-[10px] font-semibold uppercase tracking-[2px] text-white/50 mb-3">
                Speed
              </div>
              <div className="ascii-result-visual h-[100px] md:h-[120px] flex items-center justify-center mb-4">
                <pre className="result-ascii font-mono text-[10px] md:text-[14px] leading-[1.4] text-center font-semibold tracking-[0.5px]">
                  <span className="text-[#a78bfa] glow-p2">  ╭─────────╮</span>
                  <br />
                  <span className="text-[#8b5cf6] glow-p1"> ╱</span><span className="text-[#c4b5fd] glow-p3">  0  50  100 </span><span className="text-[#8b5cf6] glow-p1">╲</span>
                  <br />
                  <span className="text-[#a78bfa] glow-p2">│</span><span className="text-[#c4b5fd] glow-p3">  ◦   ◦   ◦  </span><span className="text-[#a78bfa] glow-p2">│</span>
                  <br />
                  <span className="text-[#8b5cf6] glow-p1">│</span><span className="text-[#c4b5fd] glow-p3">      ╱      </span><span className="text-[#8b5cf6] glow-p1">│</span>
                  <br />
                  <span className="text-[#a78bfa] glow-p2">│</span><span className="text-[#c4b5fd] glow-p3">    ◉╱       </span><span className="text-[#a78bfa] glow-p2">│</span>
                  <br />
                  <span className="text-[#8b5cf6] glow-p1"> ╲</span><span className="text-[#c4b5fd] glow-p3">───────────</span><span className="text-[#8b5cf6] glow-p1">╱</span>
                </pre>
              </div>
              <div className="font-headline text-[26px] md:text-[32px] font-bold text-white mb-1">
                85%
              </div>
              <div className="text-[13px] font-medium text-white/75">
                Faster Processing
              </div>
            </div>

            {/* 200+ Hours */}
            <div className="ascii-result-card bg-[rgba(37,99,235,0.12)] border border-[rgba(37,99,235,0.25)] rounded-[20px] px-4 py-5 md:px-5 md:py-6 text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="ascii-result-title text-[10px] font-semibold uppercase tracking-[2px] text-white/50 mb-3">
                Time Saved
              </div>
              <div className="ascii-result-visual h-[100px] md:h-[120px] flex items-center justify-center mb-4">
                <pre className="result-ascii font-mono text-[10px] md:text-[14px] leading-[1.4] text-center font-semibold tracking-[0.5px]">
                  <span className="text-[#3b82f6] glow-b2">    ╭───────╮</span>
                  <br />
                  <span className="text-[#2563eb] glow-b1">   ╱</span><span className="text-[#60a5fa] glow-b3">   12    </span><span className="text-[#2563eb] glow-b1">╲</span>
                  <br />
                  <span className="text-[#3b82f6] glow-b2">  │</span><span className="text-[#60a5fa] glow-b3"> 9   │   3 </span><span className="text-[#3b82f6] glow-b2">│</span>
                  <br />
                  <span className="text-[#2563eb] glow-b1">  │</span><span className="text-[#60a5fa] glow-b3">     ◉───  </span><span className="text-[#2563eb] glow-b1">│</span>
                  <br />
                  <span className="text-[#3b82f6] glow-b2">   ╲</span><span className="text-[#60a5fa] glow-b3">    6    </span><span className="text-[#3b82f6] glow-b2">╱</span>
                  <br />
                  <span className="text-[#2563eb] glow-b1">    ╰───────╯</span>
                </pre>
              </div>
              <div className="font-headline text-[26px] md:text-[32px] font-bold text-white mb-1">
                200+
              </div>
              <div className="text-[13px] font-medium text-white/75">
                Hours Saved Monthly
              </div>
            </div>

            {/* 3x ROI */}
            <div className="ascii-result-card bg-[rgba(34,197,94,0.12)] border border-[rgba(34,197,94,0.25)] rounded-[20px] px-4 py-5 md:px-5 md:py-6 text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="ascii-result-title text-[10px] font-semibold uppercase tracking-[2px] text-white/50 mb-3">
                Returns
              </div>
              <div className="ascii-result-visual h-[100px] md:h-[120px] flex items-center justify-center mb-4">
                <pre className="result-ascii font-mono text-[10px] md:text-[14px] leading-[1.4] text-center font-semibold tracking-[0.5px]">
                  <span className="text-[#22c55e] glow-g1">        ╭─╮</span>
                  <br />
                  <span className="text-[#4ade80] glow-g2">     ╭─╮│</span><span className="text-[#86efac] glow-g3">▓</span><span className="text-[#4ade80] glow-g2">│</span>
                  <br />
                  <span className="text-[#22c55e] glow-g1">  ╭─╮│</span><span className="text-[#86efac] glow-g3">▓</span><span className="text-[#22c55e] glow-g1">││</span><span className="text-[#86efac] glow-g3">▓</span><span className="text-[#22c55e] glow-g1">│</span>
                  <br />
                  <span className="text-[#4ade80] glow-g2">  │</span><span className="text-[#86efac] glow-g3">▓</span><span className="text-[#4ade80] glow-g2">││</span><span className="text-[#86efac] glow-g3">▓</span><span className="text-[#4ade80] glow-g2">││</span><span className="text-[#86efac] glow-g3">▓</span><span className="text-[#4ade80] glow-g2">│↗</span>
                  <br />
                  <span className="text-[#22c55e] glow-g1">  │</span><span className="text-[#86efac] glow-g3">▓</span><span className="text-[#22c55e] glow-g1">││</span><span className="text-[#86efac] glow-g3">▓</span><span className="text-[#22c55e] glow-g1">││</span><span className="text-[#86efac] glow-g3">▓</span><span className="text-[#22c55e] glow-g1">│</span>
                  <br />
                  <span className="text-[#4ade80] glow-g2">  ╰─╯╰─╯╰─╯</span>
                </pre>
              </div>
              <div className="font-headline text-[26px] md:text-[32px] font-bold text-white mb-1">
                3x
              </div>
              <div className="text-[13px] font-medium text-white/75">
                Average ROI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION
          ============================================ */}
      <HomeFAQ />

      {/* ============================================
          CTA/CONTACT SECTION
          ============================================ */}
      <section className="cta-section bg-gradient-to-b from-[var(--bg-light)] to-white py-[60px] md:py-[80px] lg:py-[120px]" id="contact">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Motion Blur Image */}
          <div className="relative rounded-[20px] overflow-hidden min-h-[300px] lg:min-h-0 order-2 lg:order-1 shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
            <img
              src="/images/cta-motion.jpg"
              alt="Person working with technology"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: Title + Form */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h2 className="font-headline text-[26px] sm:text-[32px] md:text-[42px] font-medium text-[var(--text-dark)] mb-4 leading-[1.2] tracking-[-0.5px]">
              What problem should AI solve for you?
            </h2>
            <p className="text-[17px] text-[var(--text-body)] leading-[1.75] mb-8">
              We start with the business problem, not the technology. Tell us what you&apos;re trying to accomplish.
            </p>

            <div className="cta-form bg-white p-7 lg:p-10 rounded-[20px] shadow-[0_24px_64px_rgba(0,0,0,0.08)] border border-[var(--border-light)]">
              <form className="space-y-4">
                <div className="form-group">
                  <label className="block text-sm font-medium mb-1.5 text-[var(--text-dark)]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3.5 border border-[var(--border-light)] rounded-lg font-body text-[15px] transition-all duration-250 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_var(--primary-light)]"
                  />
                </div>
                <div className="form-group">
                  <label className="block text-sm font-medium mb-1.5 text-[var(--text-dark)]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3.5 border border-[var(--border-light)] rounded-lg font-body text-[15px] transition-all duration-250 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_var(--primary-light)]"
                  />
                </div>
                <div className="form-group">
                  <label className="block text-sm font-medium mb-1.5 text-[var(--text-dark)]">
                    What&apos;s on your mind?
                  </label>
                  <textarea
                    placeholder="Tell us about your project, challenge, or question..."
                    rows={4}
                    className="w-full px-4 py-3.5 border border-[var(--border-light)] rounded-lg font-body text-[15px] transition-all duration-250 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_var(--primary-light)] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[var(--primary)] text-white py-4 border-none rounded-lg font-body text-[15px] font-semibold cursor-pointer transition-all duration-250 mt-2 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5 shadow-lg"
                >
                  Get a Free Assessment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
