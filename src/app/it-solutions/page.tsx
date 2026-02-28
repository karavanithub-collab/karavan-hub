import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';
import AccordionWrapper from '@/components/it-solutions/AccordionWrapper';

export const metadata: Metadata = {
  title: 'IT Solutions for Small & Medium Businesses | Karavan IT HUB',
  description:
    'IT solutions built around how your business operates. Custom software, web design, data analytics, and digital transformation. No workarounds required.',
  keywords:
    'IT solutions, custom software development, web design, data analytics, digital transformation, SMB technology, business software, cloud applications, mobile app development',
  openGraph: {
    type: 'website',
    url: 'https://karavanhub.com/it-solutions',
    title: 'IT Solutions for Small & Medium Businesses | Karavan IT HUB',
    description:
      'IT solutions built around how your business operates. Custom software, web design, data analytics, and digital transformation. No workarounds required.',
    images: [
      {
        url: 'https://karavanhub.com/images/og-it-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'Karavan IT HUB IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Solutions for Small & Medium Businesses | Karavan IT HUB',
    description:
      'IT solutions built around how your business operates. Custom software, web design, data analytics, and digital transformation. No workarounds required.',
    images: ['https://karavanhub.com/images/twitter-it-solutions.jpg'],
  },
  alternates: {
    canonical: 'https://karavanhub.com/it-solutions',
  },
};

// Schema.org JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IT Solutions',
  provider: {
    '@type': 'Organization',
    name: 'Karavan IT HUB',
    url: 'https://karavanhub.com',
    logo: 'https://karavanhub.com/images/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Ontario',
      addressCountry: 'CA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: 'English',
    },
  },
  description:
    'Custom IT solutions for small and medium businesses including software development, web design, data analytics, and digital transformation services.',
  areaServed: [
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'State', name: 'Ontario' },
    { '@type': 'City', name: 'Niagara' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Solutions Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Software Development',
          description:
            'Cloud-native applications, full-stack development, system modernization, mobile apps, and API integration built around your workflows.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Design & Development',
          description:
            'Responsive websites, e-commerce platforms, web applications, CMS implementation, and performance optimization.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Data Analytics & Dashboards',
          description:
            'Business intelligence dashboards, data visualization, reporting automation, and predictive analytics.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Transformation',
          description:
            'Process automation, cloud migration, legacy system modernization, and workflow optimization.',
        },
      },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What IT solutions does Karavan IT HUB offer for small businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Karavan IT HUB provides custom software development, web design and development, data analytics dashboards, and digital transformation services specifically designed for small and medium businesses in Canada.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is custom software different from off-the-shelf solutions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom software is built around your specific workflows and business processes, eliminating workarounds and unnecessary features. It grows with your business and connects with your existing tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes a website effective for business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An effective business website is mobile-responsive, loads quickly, guides visitors toward action, and is easy for you to update. It builds trust and converts visitors into customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can data analytics help my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Data analytics turns scattered information into clear dashboards that show what is happening in your business. It helps you make decisions based on facts rather than gut feelings.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a custom software project typically take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timelines depend on scope. A focused project like a customer portal or internal tool can take 6 to 12 weeks. Larger systems with multiple integrations may take 3 to 6 months. We share a clear timeline before any work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the first step to working with Karavan IT HUB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first step is a free consultation where we learn how your business operates and identify where technology can help. No pitch, no pressure. We listen first and recommend second.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Karavan IT HUB work with businesses outside Ontario?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. While Karavan IT HUB is headquartered in Niagara, Ontario, we work with small and medium businesses across Canada. Most of our collaboration happens remotely with regular video check-ins.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does custom software development cost for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Costs vary based on complexity and scope. A simple web application may start around $15,000 to $30,000 CAD, while larger enterprise systems can range higher. We provide detailed estimates after understanding your needs during the free consultation.',
      },
    },
  ],
};

const breadcrumbJsonLd = {
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
      name: 'IT Solutions',
      item: 'https://karavanhub.com/it-solutions',
    },
  ],
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Karavan IT HUB Delivers Custom IT Solutions',
  description:
    'Our process for building custom IT solutions for small and medium businesses in Canada.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Discovery',
      text: 'We learn how your business operates and identify where technology can remove friction.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Planning',
      text: 'We create a prioritized roadmap, deciding what to tackle first and what to phase in later.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Build and Iterate',
      text: 'Senior engineers build your solution with regular check-ins so you see progress throughout.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Launch and Support',
      text: 'We handle deployment and provide ongoing support to make sure everything runs smoothly.',
    },
  ],
};

const speakableJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'IT Solutions for Small & Medium Businesses',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#software-heading', '#webdesign-heading', '#analytics-heading', '#transform-heading'],
  },
  url: 'https://karavanhub.com/it-solutions',
};

export default function ITSolutionsPage() {
  // Software Solutions Accordion Items
  const softwareItems = [
    {
      title: 'Cloud-Native Applications',
      content: (
        <p>
          No more paying for servers that sit idle. Your app scales up during busy periods and scales back down when things are quiet. You only pay for what you use.
        </p>
      ),
    },
    {
      title: 'Full-Stack Development',
      content: (
        <p>
          One team handles everything, from the screens your customers see to the database underneath. No finger-pointing. No handoffs between vendors. Just people who understand the whole picture.
        </p>
      ),
    },
    {
      title: 'System Modernization',
      content: (
        <p>
          That old system everyone&apos;s nervous about touching? We help you move off it carefully, one piece at a time, without breaking what&apos;s already working.
        </p>
      ),
    },
    {
      title: 'Mobile Apps',
      content: (
        <p>
          We build iOS and Android apps that feel like they belong on your phone. Clean, fast, and designed around how people actually use them.
        </p>
      ),
    },
    {
      title: 'Connecting Your Tools',
      content: (
        <p>
          If your team is copying data between systems by hand, something is broken. We connect your tools so information moves on its own.
        </p>
      ),
    },
    {
      title: 'The Business Impact',
      content: (
        <ul className="list-none p-0 pb-5 m-0">
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Stop paying for features you don&apos;t use, and missing ones you need</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Less training time because the software matches how your team already thinks</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Own your technology instead of renting someone else&apos;s limitations</span>
          </li>
        </ul>
      ),
      isHighlight: true,
    },
  ];

  // Web Design Accordion Items
  const webdesignItems = [
    {
      title: 'Responsive Website Design',
      content: (
        <p>
          Your site should look and feel right on a laptop, a tablet, and a phone. No pinching. No awkward scrolling. We test on real devices, not just browser windows.
        </p>
      ),
    },
    {
      title: 'E-Commerce Development',
      content: (
        <p>
          An online store that&apos;s easy for your customers to buy from and easy for you to manage. We handle the checkout, the product organization, and the behind-the-scenes tools so you can focus on selling.
        </p>
      ),
    },
    {
      title: 'Web Applications',
      content: (
        <p>
          Sometimes a website isn&apos;t enough. You need something that does real work. Customer portals, booking systems, internal tools. We build those too.
        </p>
      ),
    },
    {
      title: 'CMS Implementation',
      content: (
        <p>
          You should be able to update your own content without calling us or worrying you&apos;ll break something. We set you up with a system your team can manage on their own.
        </p>
      ),
    },
    {
      title: 'Speed and Performance',
      content: (
        <p>
          A three-second load time costs you roughly half your visitors. We make sure your site is fast, and we keep it that way.
        </p>
      ),
    },
    {
      title: 'The Business Impact',
      content: (
        <ul className="list-none p-0 pb-5 m-0">
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Convert more of the traffic you&apos;re already paying for</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Rank higher on Google because your site is fast and works on every device</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Update content yourself without waiting (or paying) for developer time</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Look credible before the first sales conversation even happens</span>
          </li>
        </ul>
      ),
      isHighlight: true,
    },
  ];

  // Analytics Accordion Items
  const analyticsItems = [
    {
      title: 'Dashboards That Make Sense',
      content: (
        <p>
          The numbers that matter to your business, updated live and visible to the people who need them. No more frantic Monday morning data pulls.
        </p>
      ),
    },
    {
      title: 'Connecting Your Data',
      content: (
        <p>
          Your CRM says one thing. Your accounting software says another. We connect everything so you have one set of numbers you can trust, not twelve conflicting spreadsheets.
        </p>
      ),
    },
    {
      title: 'Organizing It All',
      content: (
        <p>
          A proper home for all that data. Organized, searchable, and ready to answer whatever questions come up next quarter.
        </p>
      ),
    },
    {
      title: 'Reports That Write Themselves',
      content: (
        <p>
          Weekly reports. Monthly board decks. The ones that used to eat three days of someone&apos;s week. We automate them so your team can do work that matters.
        </p>
      ),
    },
    {
      title: "Seeing What's Coming",
      content: (
        <p>
          We build models that help you spot patterns before they become problems. Which customers might leave. Where demand is heading. Where the next opportunity is. That kind of thing.
        </p>
      ),
    },
    {
      title: 'The Business Impact',
      content: (
        <ul className="list-none p-0 pb-5 m-0">
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Make decisions in hours that used to take weeks of analysis</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Free up the people currently stuck compiling reports</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Walk into meetings with answers instead of excuses</span>
          </li>
        </ul>
      ),
      isHighlight: true,
    },
  ];

  // Transform Accordion Items
  const transformItems = [
    {
      title: 'A Plan That Makes Sense',
      content: (
        <p>
          We help you figure out what to tackle first, what to phase in later, and honestly, what to skip. No trying to change everything at once.
        </p>
      ),
    },
    {
      title: 'Automating the Tedious Stuff',
      content: (
        <p>
          Your team didn&apos;t sign up to copy data between systems or chase down approvals all day. We automate those tasks so they can focus on work that matters to them.
        </p>
      ),
    },
    {
      title: 'Moving to the Cloud',
      content: (
        <p>
          Less hardware to maintain. Lower costs. Your team can work from anywhere. We handle the migration so the switch feels easy, not scary.
        </p>
      ),
    },
    {
      title: 'Making It Easier for Your Customers',
      content: (
        <p>
          Self-service portals. Faster responses. Simpler processes. When it&apos;s easy to work with you, people come back.
        </p>
      ),
    },
    {
      title: 'The Business Impact',
      content: (
        <ul className="list-none p-0 pb-5 m-0">
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Get back the hours your team loses to manual workarounds every week</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Fewer mistakes from people doing the same repetitive task over and over</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Handle more work without needing to hire at the same rate</span>
          </li>
        </ul>
      ),
      isHighlight: true,
    },
  ];

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />

      {/* ============================================
           HERO SECTION
           ============================================ */}
      <section
        className="relative min-h-[80vh] lg:min-h-[100vh] bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] flex items-center overflow-hidden pt-[90px] md:pt-[100px] pb-[60px] md:pb-[80px]"
        aria-label="IT Solutions Overview"
      >
        {/* Animated gradient orbs — smooth 12s drift, GPU-promoted */}
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full opacity-40" aria-hidden="true" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)', filter: 'blur(80px)', animation: 'orbFloat 12s ease-in-out infinite', willChange: 'transform', transform: 'translateZ(0)' }}></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full opacity-40" aria-hidden="true" style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)', filter: 'blur(80px)', animation: 'orbFloat 12s ease-in-out infinite', animationDelay: '-4s', willChange: 'transform', transform: 'translateZ(0)' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[350px] h-[350px] rounded-full opacity-40" aria-hidden="true" style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', filter: 'blur(80px)', animation: 'orbFloat 12s ease-in-out infinite', animationDelay: '-8s', willChange: 'transform', transform: 'translateZ(0)' }}></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

        {/* Floating particles — visible on all viewports */}
        <div className="absolute w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" aria-hidden="true" style={{ top: '15%', left: '10%', boxShadow: '0 0 15px rgba(147,197,253,0.4)', willChange: 'transform', transform: 'translateZ(0)' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-[rgba(139,92,246,0.7)] rounded-full animate-float" aria-hidden="true" style={{ top: '30%', right: '15%', animationDelay: '-2s', boxShadow: '0 0 15px rgba(139,92,246,0.4)', willChange: 'transform', transform: 'translateZ(0)' }}></div>
        <div className="absolute w-1 h-1 bg-[rgba(34,211,238,0.8)] rounded-full animate-float" aria-hidden="true" style={{ bottom: '25%', left: '20%', animationDelay: '-4s', boxShadow: '0 0 15px rgba(34,211,238,0.4)', willChange: 'transform', transform: 'translateZ(0)' }}></div>
        <div className="absolute w-1 h-1 bg-[rgba(147,197,253,0.5)] rounded-full animate-float" aria-hidden="true" style={{ top: '50%', right: '25%', animationDelay: '-1s', boxShadow: '0 0 15px rgba(147,197,253,0.4)', willChange: 'transform', transform: 'translateZ(0)' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-[rgba(139,92,246,0.6)] rounded-full animate-float" aria-hidden="true" style={{ bottom: '35%', right: '10%', animationDelay: '-3s', boxShadow: '0 0 15px rgba(139,92,246,0.4)', willChange: 'transform', transform: 'translateZ(0)' }}></div>
        <div className="absolute w-1 h-1 bg-[rgba(34,211,238,0.7)] rounded-full animate-float" aria-hidden="true" style={{ bottom: '20%', left: '35%', animationDelay: '-5s', boxShadow: '0 0 15px rgba(34,211,238,0.4)', willChange: 'transform', transform: 'translateZ(0)' }}></div>

        {/* Grain texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Left Column - Text */}
          <div className="max-w-full lg:max-w-[560px] text-center lg:text-left mx-auto lg:mx-0">
            <h1
              className="font-headline font-bold text-white leading-[1.05] tracking-[-1.5px] mb-7"
              style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}
            >
              Software that fits
              <span
                className="block font-bold bg-gradient-to-r from-white to-[#22d3ee] bg-clip-text"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                how you work.
              </span>
            </h1>
            <p className="text-[16px] md:text-[19px] text-white/75 max-w-full lg:max-w-[500px] leading-[1.75] font-medium mb-9 mx-auto lg:mx-0">
              Custom apps, web platforms, data systems. We start with your workflow, not a template. If off-the-shelf works better, we&apos;ll tell you that too.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-white text-[#1e3a8a] px-9 py-[18px] rounded-lg text-[15px] font-semibold leading-none no-underline transition-all duration-300 hover:bg-white/95 hover:-translate-y-0.5 mx-auto lg:mx-0"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
            >
              Book a Consultation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] transition-transform duration-300">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          {/* Right Column - ASCII Tech Visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="w-full max-w-[650px] min-h-[550px] relative flex items-center justify-center">
              {/* Glow layers — GPU-promoted */}
              <div
                className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[450px] rounded-full blur-[80px]"
                style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(139, 92, 246, 0.12) 0%, rgba(37, 99, 235, 0.08) 30%, transparent 60%)', willChange: 'transform', transform: 'translateZ(0)' }}
              ></div>
              <div
                className="absolute top-[30%] left-[45%] -translate-x-1/2 w-[350px] h-[300px] rounded-full blur-[70px]"
                style={{ background: 'radial-gradient(ellipse at center, rgba(34, 211, 238, 0.1) 0%, rgba(96, 165, 250, 0.05) 40%, transparent 70%)', willChange: 'transform', transform: 'translateZ(0)' }}
              ></div>

              {/* Floating particles — GPU-promoted */}
              <div className="absolute w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ top: '15%', left: '20%', boxShadow: '0 0 15px rgba(147, 197, 253, 0.4)', willChange: 'transform', transform: 'translateZ(0)' }}></div>
              <div className="absolute w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ top: '30%', right: '15%', animationDelay: '1.5s', boxShadow: '0 0 15px rgba(147, 197, 253, 0.4)', willChange: 'transform', transform: 'translateZ(0)' }}></div>
              <div className="absolute w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ bottom: '25%', left: '15%', animationDelay: '3s', boxShadow: '0 0 15px rgba(147, 197, 253, 0.4)', willChange: 'transform', transform: 'translateZ(0)' }}></div>
              <div className="absolute w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ top: '50%', right: '25%', animationDelay: '4.5s', boxShadow: '0 0 15px rgba(147, 197, 253, 0.4)', willChange: 'transform', transform: 'translateZ(0)' }}></div>

              {/* Flow lines */}
              <div className="absolute top-[22%] left-[10%] w-[150px] h-px rotate-[15deg] opacity-30" style={{ background: 'linear-gradient(90deg, transparent, rgba(103, 232, 249, 0.3), rgba(147, 197, 253, 0.4), transparent)' }}></div>
              <div className="absolute top-[38%] right-[5%] w-[120px] h-px -rotate-[20deg] opacity-30" style={{ background: 'linear-gradient(90deg, transparent, rgba(103, 232, 249, 0.3), rgba(147, 197, 253, 0.4), transparent)' }}></div>

              {/* ASCII Art */}
              <div className="relative z-10 flex items-center justify-center">
                <pre className="font-mono text-[13px] leading-[1.35] tracking-[1px] whitespace-pre text-center font-medium" style={{ filter: 'drop-shadow(0 0 40px rgba(34, 211, 238, 0.3)) drop-shadow(0 0 80px rgba(139, 92, 246, 0.2))' }}>
                  <span className="ascii-dim">{`          `}</span><span className="ascii-dim">{`·    ·    ·    ·    ·    ·    ·    ·`}</span>{'\n'}
                  <span className="ascii-dim">{`       ·                                         ·`}</span>{'\n'}
                  <span className="ascii-flow">{`    ╭─────────`}</span><span className="ascii-bright">{`○`}</span><span className="ascii-flow">{`───────────`}</span><span className="ascii-bright">{`○`}</span><span className="ascii-flow">{`───────────`}</span><span className="ascii-bright">{`○`}</span><span className="ascii-flow">{`─────────╮`}</span>{'\n'}
                  <span className="ascii-dim">{`    │         │           │           │         │`}</span>{'\n'}
                  <span className="ascii-dim">{` ───┼─────────┼───────────┼───────────┼─────────┼───`}</span>{'\n'}
                  <span className="ascii-dim">{`    │         │           │           │         │`}</span>{'\n'}
                  <span className="ascii-dim">{`    │   `}</span><span className="ascii-flow">{`╔═════════════════════════════════════╗`}</span><span className="ascii-dim">{`   │`}</span>{'\n'}
                  <span className="ascii-dim">{`    │   `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-dim">{`                                     `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-dim">{`   │`}</span>{'\n'}
                  <span className="ascii-dim">{`    │   `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-white">{`    ██╗████████╗`}</span><span className="ascii-dim">{`                   `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-dim">{`   │`}</span>{'\n'}
                  <span className="ascii-dim">{`    │   `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-white">{`    ██║╚══██╔══╝`}</span><span className="ascii-dim">{`                   `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-dim">{`   │`}</span>{'\n'}
                  <span className="ascii-bright">{` ○──┤`}</span><span className="ascii-dim">{`   `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-white">{`    ██║   ██║`}</span><span className="ascii-cyan">{`     SOLUTIONS`}</span><span className="ascii-dim">{`       `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-dim">{`   `}</span><span className="ascii-bright">{`├──○`}</span>{'\n'}
                  <span className="ascii-dim">{`    │   `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-white">{`    ██║   ██║`}</span><span className="ascii-cyan">{`     THAT WORK`}</span><span className="ascii-dim">{`       `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-dim">{`   │`}</span>{'\n'}
                  <span className="ascii-dim">{`    │   `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-white">{`    ██║   ██║`}</span><span className="ascii-dim">{`                      `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-dim">{`   │`}</span>{'\n'}
                  <span className="ascii-dim">{`    │   `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-white">{`    ╚═╝   ╚═╝`}</span><span className="ascii-dim">{`                      `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-dim">{`   │`}</span>{'\n'}
                  <span className="ascii-dim">{`    │   `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-dim">{`                                     `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-dim">{`   │`}</span>{'\n'}
                  <span className="ascii-dim">{`    │   `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-dim">{`          `}</span><span className="ascii-purple">{`◈`}</span><span className="ascii-dim">{`      `}</span><span className="ascii-purple">{`◈`}</span><span className="ascii-dim">{`      `}</span><span className="ascii-purple">{`◈`}</span><span className="ascii-dim">{`          `}</span><span className="ascii-flow">{`║`}</span><span className="ascii-dim">{`   │`}</span>{'\n'}
                  <span className="ascii-dim">{`    │   `}</span><span className="ascii-flow">{`╚═════════════════════════════════════╝`}</span><span className="ascii-dim">{`   │`}</span>{'\n'}
                  <span className="ascii-dim">{`    │         │           │           │         │`}</span>{'\n'}
                  <span className="ascii-dim">{` ───┼─────────┼───────────┼───────────┼─────────┼───`}</span>{'\n'}
                  <span className="ascii-dim">{`    │         │           │           │         │`}</span>{'\n'}
                  <span className="ascii-flow">{`    ╰─────────`}</span><span className="ascii-bright">{`○`}</span><span className="ascii-flow">{`───────────`}</span><span className="ascii-bright">{`○`}</span><span className="ascii-flow">{`───────────`}</span><span className="ascii-bright">{`○`}</span><span className="ascii-flow">{`─────────╯`}</span>{'\n'}
                  <span className="ascii-dim">{`       ·                                         ·`}</span>{'\n'}
                  <span className="ascii-dim">{`          ·    ·    ·    ·    ·    ·    ·    ·`}</span>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[10px] tracking-[2px] uppercase">
          <span>Scroll</span>
          <div className="w-px h-[60px] bg-gradient-to-b from-white/40 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* ============================================
           SOFTWARE SOLUTIONS SECTION
           ============================================ */}
      <section
        className="py-[40px] md:py-[56px] lg:py-[80px] bg-white border-t border-gray-200"
        id="software-solutions"
        aria-labelledby="software-heading"
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image — shown first on mobile, right column on desktop */}
          <div className="lg:sticky lg:top-24 lg:order-last">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/software-dev.jpg"
                alt="Custom software development for small business applications"
                width={800}
                height={700}
                priority
                className="w-full h-auto object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2
              id="software-heading"
              className="font-headline text-[28px] sm:text-[34px] md:text-[42px] font-medium text-[var(--text-dark)] mb-3 leading-[1.15] tracking-[-0.5px]"
            >
              Software Solutions
            </h2>

            <p className="text-[17px] text-[var(--text-dark)] font-bold mb-0 leading-[1.6]">
              Your business is unique. Your software should be too.
            </p>

            <hr className="border-t border-gray-200 mt-6 mb-0" />

            {/* Accordion Items */}
            <AccordionWrapper items={softwareItems} type="software" />

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-4 rounded-lg text-[15px] font-semibold leading-none uppercase tracking-[0.5px] no-underline transition-all duration-300 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           WEB DESIGN & DEVELOPMENT SECTION
           ============================================ */}
      <section
        className="py-[40px] md:py-[56px] lg:py-[80px] bg-white border-t border-gray-200"
        id="web-design"
        aria-labelledby="webdesign-heading"
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image — shown first on mobile, left column on desktop */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/web-design.jpg"
                alt="Responsive web design and development for small businesses"
                width={800}
                height={700}
                className="w-full h-auto object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2
              id="webdesign-heading"
              className="font-headline text-[28px] sm:text-[34px] md:text-[42px] font-medium text-[var(--text-dark)] mb-3 leading-[1.15] tracking-[-0.5px]"
            >
              Web Design & Development
            </h2>

            <p className="text-[17px] text-[var(--text-dark)] font-bold mb-0 leading-[1.6]">
              A website that works as hard as you do.
            </p>

            <hr className="border-t border-gray-200 mt-6 mb-0" />

            {/* Accordion Items */}
            <AccordionWrapper items={webdesignItems} type="webdesign" />

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-4 rounded-lg text-[15px] font-semibold leading-none uppercase tracking-[0.5px] no-underline transition-all duration-300 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           DATA ANALYTICS & DASHBOARDS SECTION
           ============================================ */}
      <section
        className="py-[40px] md:py-[56px] lg:py-[80px] bg-white border-t border-gray-200"
        id="data-analytics"
        aria-labelledby="analytics-heading"
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image — shown first on mobile, right column on desktop */}
          <div className="lg:sticky lg:top-24 lg:order-last">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/data-analytics.jpg"
                alt="Business intelligence dashboard with real-time data analytics"
                width={800}
                height={700}
                className="w-full h-auto object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2
              id="analytics-heading"
              className="font-headline text-[28px] sm:text-[34px] md:text-[42px] font-medium text-[var(--text-dark)] mb-3 leading-[1.15] tracking-[-0.5px]"
            >
              Data Analytics & Dashboards
            </h2>

            <p className="text-[17px] text-[var(--text-dark)] font-bold mb-0 leading-[1.6]">
              Your data is telling you something. Let&apos;s help you hear it.
            </p>

            <hr className="border-t border-gray-200 mt-6 mb-0" />

            {/* Accordion Items */}
            <AccordionWrapper items={analyticsItems} type="analytics" />

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-4 rounded-lg text-[15px] font-semibold leading-none uppercase tracking-[0.5px] no-underline transition-all duration-300 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5"
              >
                Discover Your Data
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           DIGITAL TRANSFORMATION SECTION
           ============================================ */}
      <section
        className="py-[40px] md:py-[56px] lg:py-[80px] bg-white border-t border-gray-200"
        id="digital-transformation"
        aria-labelledby="transform-heading"
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image — shown first on mobile, left column on desktop */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/digital-transformation.jpg"
                alt="Digital transformation and cloud migration for Canadian businesses"
                width={800}
                height={700}
                className="w-full h-auto object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2
              id="transform-heading"
              className="font-headline text-[28px] sm:text-[34px] md:text-[42px] font-medium text-[var(--text-dark)] mb-3 leading-[1.15] tracking-[-0.5px]"
            >
              Digital Transformation
            </h2>

            <p className="text-[17px] text-[var(--text-dark)] font-bold mb-0 leading-[1.6]">
              Technology that gets out of your way.
            </p>

            <hr className="border-t border-gray-200 mt-6 mb-0" />

            {/* Accordion Items */}
            <AccordionWrapper items={transformItems} type="transform" />

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-4 rounded-lg text-[15px] font-semibold leading-none uppercase tracking-[0.5px] no-underline transition-all duration-300 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5"
              >
                Start Your Transformation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           TECHNOLOGY STACK SECTION
           ============================================ */}
      <section
        className="py-[60px] md:py-[80px] lg:py-[120px] relative overflow-hidden"
        id="technology-stack"
        aria-labelledby="tech-heading"
        style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 25%, #1e3a8a 60%, #2563eb 100%)' }}
      >
        {/* Animated glow orbs */}
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#3b82f6] to-transparent blur-[100px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#06b6d4] to-transparent blur-[100px] opacity-40 animate-pulse" style={{ animationDelay: '-5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-radial from-[#8b5cf6] to-transparent blur-[100px] opacity-40 animate-pulse" style={{ animationDelay: '-10s' }}></div>

        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 relative z-[2]">
          <div className="text-center mb-[50px] lg:mb-[70px]">
            <h2
              id="tech-heading"
              className="font-headline text-[26px] sm:text-[32px] md:text-[clamp(32px,4vw,42px)] font-light text-white leading-[1.15] tracking-[-1.5px] mb-6"
            >
              We pick tools that <strong className="font-bold bg-gradient-to-r from-[#60a5fa] via-[#22d3ee] to-[#a78bfa] bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>solve your problem.</strong><br />
              Not chase trends.
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/60 max-w-[600px] mx-auto leading-[1.7]">
              The right technology depends on what you&apos;re building. We pick what works for your situation, not what&apos;s trending on Twitter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {/* Software Solutions Card */}
            <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-[24px] p-7 lg:p-9 transition-all duration-400 relative overflow-hidden hover:-translate-y-1 hover:bg-white/[0.08] hover:border-white/20 group" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
              <h3 className="text-[18px] font-semibold text-white mb-5 relative z-[1]">Software Solutions</h3>
              <div className="flex flex-wrap gap-2 md:gap-2.5 relative z-[1]">
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/dotnet/512BD4" alt=".NET Core" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />.NET Core</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/openjdk/ED8B00" alt="Java" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Java</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Python</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Node.js</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/springboot/6DB33F" alt="Spring Boot" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Spring Boot</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />React</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/angular/DD0031" alt="Angular" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Angular</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />TypeScript</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/graphql/E10098" alt="GraphQL" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />GraphQL</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Docker</span>
              </div>
            </div>

            {/* Website Design & Development Card */}
            <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-[24px] p-7 lg:p-9 transition-all duration-400 relative overflow-hidden hover:-translate-y-1 hover:bg-white/[0.08] hover:border-white/20 group" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
              <h3 className="text-[18px] font-semibold text-white mb-5 relative z-[1]">Website Design & Development</h3>
              <div className="flex flex-wrap gap-2 md:gap-2.5 relative z-[1]">
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />React</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/nextdotjs/ffffff" alt="Next.js" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Next.js</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />JavaScript</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />HTML5</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />CSS3</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/wordpress/21759B" alt="WordPress" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />WordPress</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/shopify/7AB55C" alt="Shopify" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Shopify</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/woocommerce/96588A" alt="WooCommerce" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />WooCommerce</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Figma</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/stripe/626CD9" alt="Stripe" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Stripe</span>
              </div>
            </div>

            {/* Data Analytics & Dashboards Card */}
            <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-[24px] p-7 lg:p-9 transition-all duration-400 relative overflow-hidden hover:-translate-y-1 hover:bg-white/[0.08] hover:border-white/20 group" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
              <h3 className="text-[18px] font-semibold text-white mb-5 relative z-[1]">Data Analytics & Dashboards</h3>
              <div className="flex flex-wrap gap-2 md:gap-2.5 relative z-[1]">
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Python</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/pandas/150458" alt="Pandas" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Pandas</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Power BI</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/tableau/E97627" alt="Tableau" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Tableau</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/apachespark/E25A1C" alt="Apache Spark" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Apache Spark</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/apacheairflow/017CEE" alt="Airflow" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Airflow</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/chartdotjs/FF6384" alt="Chart.js" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Chart.js</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/postman/FF6C37" alt="Postman" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Postman</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/mysql/4479A1" alt="MySQL" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />MySQL</span>
              </div>
            </div>

            {/* Digital Transformation Card */}
            <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-[24px] p-7 lg:p-9 transition-all duration-400 relative overflow-hidden hover:-translate-y-1 hover:bg-white/[0.08] hover:border-white/20 group" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
              <h3 className="text-[18px] font-semibold text-white mb-5 relative z-[1]">Digital Transformation</h3>
              <div className="flex flex-wrap gap-2 md:gap-2.5 relative z-[1]">
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />AWS</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Azure</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/googlecloud/4285F4" alt="Google Cloud" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Google Cloud</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Docker</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/kubernetes/326CE5" alt="Kubernetes" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Kubernetes</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/githubactions/2088FF" alt="CI/CD" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />CI/CD</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />PostgreSQL</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />MongoDB</span>
                <span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/redis/DC382D" alt="Redis" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Redis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           TRUST/STATS STRIP
           ============================================ */}
      <section
        className="py-10 md:py-12 border-t border-b border-gray-200/60"
        id="why-karavan"
        aria-labelledby="trust-headline"
        style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f0f7ff 50%, #f8fafc 100%)' }}
      >
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <h2
            className="font-headline text-[18px] md:text-[22px] font-medium text-[var(--text-dark)] text-center leading-[1.3] tracking-[-0.3px] mb-7 md:mb-8"
            id="trust-headline"
          >
            <strong className="font-bold text-[var(--primary)]">Senior engineers.</strong> Direct access. No runaround.
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-y-5">
            <div className="text-center px-5 sm:px-6 md:px-8 lg:px-10">
              <div className="font-headline text-[26px] md:text-[32px] font-bold text-[var(--primary)] leading-none tracking-[-1px]">30+</div>
              <div className="text-[11px] md:text-[12px] text-[var(--text-muted)] font-medium mt-1 uppercase tracking-[0.5px]">Years Experience</div>
            </div>
            <div className="hidden sm:block w-px h-9 bg-gray-300/60"></div>
            <div className="text-center px-5 sm:px-6 md:px-8 lg:px-10">
              <div className="font-headline text-[26px] md:text-[32px] font-bold text-[var(--primary)] leading-none tracking-[-1px]">Senior</div>
              <div className="text-[11px] md:text-[12px] text-[var(--text-muted)] font-medium mt-1 uppercase tracking-[0.5px]">Engineers Only</div>
            </div>
            <div className="hidden sm:block w-px h-9 bg-gray-300/60"></div>
            <div className="text-center px-5 sm:px-6 md:px-8 lg:px-10">
              <div className="font-headline text-[26px] md:text-[32px] font-bold text-[var(--primary)] leading-none tracking-[-1px]">Fortune 500</div>
              <div className="text-[11px] md:text-[12px] text-[var(--text-muted)] font-medium mt-1 uppercase tracking-[0.5px]">Background</div>
            </div>
            <div className="hidden sm:block w-px h-9 bg-gray-300/60"></div>
            <div className="text-center px-5 sm:px-6 md:px-8 lg:px-10">
              <div className="font-headline text-[26px] md:text-[32px] font-bold text-[var(--primary)] leading-none tracking-[-1px]">100%</div>
              <div className="text-[11px] md:text-[12px] text-[var(--text-muted)] font-medium mt-1 uppercase tracking-[0.5px]">Canadian-Owned</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           FINAL CTA BANNER
           ============================================ */}
      <section
        className="py-[60px] md:py-[80px] lg:py-[100px] bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe] text-center relative"
        aria-label="Contact Call to Action"
      >
        <div className="max-w-[900px] mx-auto px-5 sm:px-6">
          <div
            className="bg-white rounded-[24px] py-[40px] px-6 md:py-[60px] md:px-12 border border-[rgba(37,99,235,0.08)]"
            style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.02), 0 12px 24px rgba(0,0,0,0.04), 0 24px 48px rgba(37,99,235,0.06)' }}
          >
            <h2 className="font-headline text-[24px] md:text-[clamp(24px,4vw,36px)] font-semibold text-[var(--text-dark)] mb-4 tracking-[-0.5px]">
              Tired of working around your technology?
            </h2>
            <p className="text-[16px] md:text-[18px] text-[var(--text-muted)] mb-8 leading-[1.7] max-w-[550px] mx-auto">
              Let&apos;s talk about what&apos;s getting in your way. No pitch, no pressure. Just a conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[var(--primary)] text-white px-8 py-4 rounded-lg text-[15px] font-semibold leading-none uppercase tracking-[0.5px] no-underline transition-all duration-300 hover:bg-[var(--primary-deeper)] hover:-translate-y-0.5"
              style={{ boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)' }}
              aria-label="Book a free consultation with Karavan IT HUB"
            >
              Book a Free Consultation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] transition-transform duration-300">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
