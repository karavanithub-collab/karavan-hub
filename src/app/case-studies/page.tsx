import { Metadata } from 'next';
import Link from 'next/link';

const ChevronRight = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
);

export const metadata: Metadata = {
  title: 'Case Studies | Karavan Hub - Real Results for Real Businesses',
  description:
    'How Karavan Hub helped businesses fix broken payment systems, rebuild booking platforms, and automate what used to take days. 7 projects, real numbers, no fluff.',
  keywords:
    'case studies, IT solutions, custom software, cloud migration, AI automation, business results, Karavan Hub, Niagara',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://karavanhub.com/case-studies',
    languages: {
      'en-CA': 'https://karavanhub.com/case-studies',
      en: 'https://karavanhub.com/case-studies',
    },
  },
  openGraph: {
    title: 'Case Studies - Real Results for Real Businesses | Karavan Hub',
    description:
      'How we helped businesses fix broken systems and build what they actually needed. 7 projects with real numbers.',
    type: 'website',
    url: 'https://karavanhub.com/case-studies',
    images: [
      {
        url: 'https://karavanhub.com/images/case-studies-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Karavan Hub Case Studies - Real Results for Real Businesses',
      },
    ],
    siteName: 'Karavan Hub',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Karavan Hub',
    description:
      'How we helped businesses fix broken systems and build what they actually needed. 7 projects, real numbers.',
    images: ['https://karavanhub.com/images/case-studies-twitter.jpg'],
  },
  authors: [{ name: 'Karavan Hub', url: 'https://karavanhub.com/about' }],
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Niagara, Ontario',
    'geo.position': '43.0896;-79.0849',
    ICBM: '43.0896, -79.0849',
  },
};

interface CaseStudy {
  id: string;
  category: string;
  categoryTag: string;
  title: string;
  intro: string;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
  results: Array<{ value: string; label: string }>;
  solution: string;
  services: string[];
  layout: 'normal' | 'reverse';
}

const caseStudies: CaseStudy[] = [
  {
    id: 'payment-management',
    category: 'Enterprise',
    categoryTag: 'Fintech',
    title: 'Enterprise Payment Management',
    intro:
      'Thousands lost every month to duplicate invoices and payment errors. The finance team was catching mistakes manually, but the volume had outgrown that approach. They called us when the next audit cycle was 90 days out.',
    gradientFrom: '#1e3a8a',
    gradientTo: '#2563eb',
    iconColor: '#60a5fa',
    results: [
      { value: '85%', label: 'Faster Processing' },
      { value: 'Zero', label: 'Duplicate Payments' },
      { value: '100%', label: 'Audit Coverage' },
    ],
    solution:
      'We built a role-based workflow where every payment passes through four checkpoints: Accountant, Validator, Approver, Executor. Automated duplicate detection catches repeats before they cost money. AI-powered anomaly flagging spots suspicious patterns before anything gets paid out.',
    services: ['Custom Software', 'AI Automation', 'System Integration'],
    layout: 'normal',
  },
  {
    id: 'travel-platform',
    category: 'Travel & Tourism',
    categoryTag: 'Enterprise',
    title: 'Saudi Travel Platform',
    intro:
      'Peak season hit and the booking system buckled. Pages timing out. Hotels getting duplicate reservations. The existing monolith was built for a smaller company, and growth had broken it.',
    gradientFrom: '#92400e',
    gradientTo: '#f59e0b',
    iconColor: '#fbbf24',
    results: [
      { value: '10x', label: 'Traffic Capacity' },
      { value: '60%', label: 'Faster Response' },
      { value: '99.9%', label: 'Uptime During Peak' },
    ],
    solution:
      'We broke the monolith into four microservices: booking, hotel reservations, user management, and payments. Each one containerized with Docker, routed through an API gateway, and auto-scaling based on live demand. Peak traffic stopped being a crisis.',
    services: ['Cloud Migration', 'Microservices', 'System Architecture', 'Horizontal Scaling'],
    layout: 'reverse',
  },
  {
    id: 'enterprise-security',
    category: 'Information Security',
    categoryTag: 'Healthcare',
    title: 'Enterprise Security & Data Platform',
    intro:
      'Manual threat monitoring across a global operation with 40,000+ employees. The security team was drowning in alerts they couldn\'t triage fast enough. Six years ago, we started building the tools that changed that.',
    gradientFrom: '#0f172a',
    gradientTo: '#1e3a8a',
    iconColor: '#93c5fd',
    results: [
      { value: '6 Years', label: 'Production Support' },
      { value: 'Real-time', label: 'Threat Detection' },
      { value: 'Global', label: 'Deployment Scale' },
    ],
    solution:
      'Full-stack security apps: React and Angular on the frontend, Python and Node.js on the backend. Amazon Kinesis handles real-time threat data streaming. Docker and Kubernetes keep deployments consistent across global infrastructure. We\'ve maintained CI/CD pipelines on this project for six years and counting.',
    services: ['Full-Stack Development', 'AWS Infrastructure', 'Real-time Analytics', 'DevOps'],
    layout: 'normal',
  },
  {
    id: 'mobility-suite',
    category: 'Mobile & Mobility',
    categoryTag: 'Enterprise',
    title: 'Enterprise Mobility Suite',
    intro:
      'Sales reps entering the same data into four different apps. Service techs driving back to the office because they couldn\'t pull specs on-site. The field team needed one tool that worked everywhere, including places without cell service.',
    gradientFrom: '#4c1d95',
    gradientTo: '#7c3aed',
    iconColor: '#a78bfa',
    results: [
      { value: '40%', label: 'Less Admin Time' },
      { value: 'iOS + Android', label: 'Cross-Platform' },
      { value: 'Offline', label: 'Field-Ready' },
    ],
    solution:
      'Native Android apps in Kotlin and Java, built offline-first. That last part matters: field techs in areas with no signal can still pull specs, log work, and sync when they\'re back online. REST API integration ties everything to existing backend systems with secure auth.',
    services: ['Mobile Development', 'Android Native', 'API Integration', 'Offline Sync'],
    layout: 'reverse',
  },
  {
    id: 'data-pipeline',
    category: 'Data Engineering',
    categoryTag: 'AI & Analytics',
    title: 'Real-time Data Pipeline',
    intro:
      'Every morning, the leadership team opened dashboards showing yesterday\'s numbers. By the time they acted, conditions had already shifted. They didn\'t need prettier charts. They needed live data.',
    gradientFrom: '#7f1d1d',
    gradientTo: '#dc2626',
    iconColor: '#f87171',
    results: [
      { value: '24hrs to Real-time', label: 'Data Latency' },
      { value: 'TB-scale', label: 'Daily Processing' },
      { value: '99.9%', label: 'Pipeline Reliability' },
    ],
    solution:
      'Amazon Kinesis for real-time ingestion, Python transformation layers with quality checks at every stage, and Tableau dashboards the leadership team actually checks. When data quality drops below threshold, automated alerts fire before anyone has to notice manually.',
    services: ['ETL Pipelines', 'Amazon Kinesis', 'Data Engineering', 'Tableau'],
    layout: 'normal',
  },
  {
    id: 'ecommerce-platform',
    category: 'E-Commerce',
    categoryTag: 'SaaS',
    title: 'Multi-tenant E-commerce Platform',
    intro:
      'Every new client meant rebuilding an e-commerce system from zero. Same features, same integrations, but months of work each time. The math stopped making sense around client number five.',
    gradientFrom: '#064e3b',
    gradientTo: '#059669',
    iconColor: '#34d399',
    results: [
      { value: '6+ Years', label: 'Platform Development' },
      { value: '70%', label: 'Faster Client Launch' },
      { value: 'Multi-tenant', label: 'Architecture' },
    ],
    solution:
      'Node.js backend, MongoDB for flexible data modeling, and customizable storefronts on PHP/Drupal. We built a reusable component library so each new client launch went from months of custom dev to days of configuration. Six years later, the platform is still running.',
    services: ['Platform Development', 'Node.js', 'MongoDB', 'Payment Integration'],
    layout: 'reverse',
  },
  {
    id: 'villa-hospitality',
    category: 'Travel & Tourism',
    categoryTag: 'Hospitality',
    title: 'Aegean Escape Villas',
    intro:
      'Luxury villas on Turkey\'s Aegean coast, launching to the Canadian market. The properties were stunning. The website didn\'t exist yet. And peak booking season was six weeks out. The client had never captured a single booking during this window before.',
    gradientFrom: '#0c4a6e',
    gradientTo: '#0891b2',
    iconColor: '#22d3ee',
    results: [
      { value: '40%', label: 'More Bookings' },
      { value: '3 Weeks', label: 'To First Results' },
      { value: '5', label: 'Villas Live' },
    ],
    solution:
      'Custom WordPress theme built around full-screen video, parallax scrolling, and high-res galleries that load fast. Every page moves visitors toward an inquiry form without feeling pushy. We built a custom image pipeline so the visuals stay sharp without tanking page speed. Within three weeks of going live, bookings jumped 40% during a period the client had written off as dead. They\'d never seen a single booking in that window before we launched.',
    services: ['Web Design', 'WordPress Development', 'SEO', 'Performance Optimization'],
    layout: 'normal',
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What industries does Karavan Hub work with?',
    answer:
      'Fintech, healthcare, travel, e-commerce, and hospitality are where most of our work lands. But we care more about the problem than the industry label. If your business runs on systems that need to be better, we should talk.',
  },
  {
    question: 'What kind of results should I expect?',
    answer:
      'It depends on the project. The case studies on this page range from 85% faster payment processing to launching a full villa booking site in six weeks. We set specific targets at the start of every engagement and track against them. No vague promises.',
  },
  {
    question: 'Do you work with startups or only large companies?',
    answer:
      'Most of our clients are small and medium businesses. We\'ve also worked on projects inside companies with 40,000+ employees. The work is different at each scale, and we\'re honest about what fits your stage and budget.',
  },
  {
    question: 'What technologies does Karavan Hub use?',
    answer:
      'React, Node.js, Python, AWS, TypeScript, Docker, Kubernetes, MongoDB, PostgreSQL, TensorFlow. We pick the stack based on what the project actually needs. We don\'t have a "house flavor" we push on everyone.',
  },
  {
    question: 'Where is Karavan Hub located?',
    answer:
      'Niagara, Ontario. We work with clients across Canada, the US, and Saudi Arabia.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'An MVP usually takes 3-4 months. Larger systems can run 6-12 months. We give you a detailed timeline before any work starts, with milestones you can actually hold us to.',
  },
  {
    question: 'How much does custom software development cost?',
    answer:
      'It varies a lot. A focused MVP might start around $15-25K. A full enterprise system with integrations, security layers, and ongoing support runs higher. We scope everything upfront so there are no surprises midway through.',
  },
  {
    question: 'Can you work with our existing systems?',
    answer:
      'That\'s actually most of what we do. Ripping everything out and starting fresh is rarely the right move. We integrate with your current stack, whether that\'s legacy databases, third-party APIs, or internal tools your team already knows.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Yes. We offer maintenance and support contracts, and several of our projects (like the enterprise security platform) have been running for 6+ years with us managing updates, monitoring, and CI/CD. We don\'t build and disappear.',
  },
];

function getCategoryColor(category: string): string {
  const colorMap: Record<string, string> = {
    'Enterprise': 'bg-[#2563EB]',
    'Travel & Tourism': 'bg-[#F59E0B]',
    'Information Security': 'bg-[#1E3A8A]',
    'Mobile & Mobility': 'bg-[#7C3AED]',
    'Data Engineering': 'bg-[#DC2626]',
    'E-Commerce': 'bg-[#059669]',
  };
  return colorMap[category] || 'bg-[#2563EB]';
}

function getCategoryAccentColor(category: string): string {
  const colorMap: Record<string, string> = {
    'Enterprise': '#2563EB',
    'Travel & Tourism': '#F59E0B',
    'Information Security': '#1E3A8A',
    'Mobile & Mobility': '#7C3AED',
    'Data Engineering': '#DC2626',
    'E-Commerce': '#059669',
  };
  return colorMap[category] || '#2563EB';
}

function GradientVisual({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <div
      className="rounded-2xl overflow-hidden relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]"
      style={{
        background: `linear-gradient(135deg, ${study.gradientFrom} 0%, ${study.gradientTo} 100%)`,
      }}
      role="img"
      aria-label={`Visual placeholder for ${study.title} case study`}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full opacity-30"
        style={{
          background: `radial-gradient(circle, ${study.iconColor} 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      {/* Study number */}
      <div className="absolute top-4 left-5 sm:top-6 sm:left-8 font-mono text-white/20 text-xs sm:text-sm tracking-widest uppercase">
        Case {String(index + 1).padStart(2, '0')}
      </div>

      {/* Central icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div
            className="font-headline text-[80px] sm:text-[120px] md:text-[140px] font-bold leading-none opacity-[0.08] text-white select-none"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-3 left-3 sm:top-5 sm:left-5 w-8 h-8 sm:w-12 sm:h-12 border-t border-l border-white/20" aria-hidden="true" />
      <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 w-8 h-8 sm:w-12 sm:h-12 border-b border-r border-white/20" aria-hidden="true" />

      {/* Category label */}
      <div className="absolute bottom-4 left-5 sm:bottom-6 sm:left-8 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase" style={{ color: study.iconColor }}>
        {study.category}
      </div>
    </div>
  );
}

function CaseStudyCard({
  results,
  accentColor,
  solution,
  services,
}: {
  results: Array<{ value: string; label: string }>;
  accentColor: string;
  solution: string;
  services: string[];
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      }}
    >
      {/* Metrics */}
      <div className="p-5 sm:p-6 md:p-8 pb-0 sm:pb-0 md:pb-0">
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-4">
          {results.map((result, idx) => (
            <div key={idx} className="flex items-baseline gap-3 sm:block sm:text-center">
              <div className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold leading-none sm:mb-1 text-white">
                {result.value}
              </div>
              <div className="text-xs sm:text-sm text-[#22D3EE] uppercase tracking-tight">{result.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 sm:mx-6 md:mx-8 my-5 sm:my-6 h-px bg-white/[0.06]" />

      {/* Solution */}
      <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8">
        <p className="font-body text-[#E879F9] text-sm sm:text-base leading-relaxed">{solution}</p>

        {/* Service tags */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {services.map((service, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-[11px] sm:text-xs font-medium rounded-full uppercase tracking-wide"
              style={{ color: accentColor, background: 'rgba(255,255,255,0.04)', border: `1px solid ${accentColor}20` }}
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


// Consolidated JSON-LD Schema Graph
const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    // Organization entity (GEO: anchor for entity linking)
    {
      '@type': 'Organization',
      '@id': 'https://karavanhub.com/#organization',
      name: 'Karavan Hub',
      alternateName: 'Karavan IT HUB',
      url: 'https://karavanhub.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://karavanhub.com/logo.png',
      },
      description:
        'Canadian-owned AI and IT solutions company specializing in vertical AI automation, custom software development, and strategic AI consulting for small and medium businesses.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Suite 31',
        addressLocality: 'Pelham',
        addressRegion: 'Ontario',
        postalCode: 'L0S 1E0',
        addressCountry: 'CA',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: '+1-905-301-3936',
        email: 'karavan.it.hub@gmail.com',
        availableLanguage: ['English'],
      },
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Saudi Arabia' },
      ],
      knowsAbout: [
        'Custom Software Development',
        'Cloud Migration',
        'AI Automation',
        'Mobile Development',
        'Data Engineering',
        'Web Design',
        'E-Commerce',
        'System Architecture',
      ],
      founder: {
        '@type': 'Person',
        name: 'Nyah S.',
        jobTitle: 'Founder',
      },
      sameAs: [
        'https://www.linkedin.com/company/karavan-hub',
        'https://www.instagram.com/karavanhub',
        'https://www.tiktok.com/@karavanhub',
      ],
    },
    // WebPage entity (GEO: page-level entity with speakable + mentions)
    {
      '@type': 'WebPage',
      '@id': 'https://karavanhub.com/case-studies/#webpage',
      url: 'https://karavanhub.com/case-studies',
      name: 'Case Studies | Karavan Hub',
      description:
        'How Karavan Hub helped businesses fix broken payment systems, rebuild booking platforms, and automate what used to take days. 7 projects, real numbers.',
      datePublished: '2026-01-15',
      dateModified: '2026-02-16',
      inLanguage: 'en-CA',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://karavanhub.com/#website',
        name: 'Karavan Hub',
        url: 'https://karavanhub.com',
      },
      about: { '@id': 'https://karavanhub.com/case-studies/#service' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['#hero-heading', '#faq-heading', '#cta-heading'],
      },
      mentions: [
        { '@type': 'Thing', name: 'React', url: 'https://react.dev' },
        { '@type': 'Thing', name: 'Node.js', url: 'https://nodejs.org' },
        { '@type': 'Thing', name: 'Amazon Web Services', url: 'https://aws.amazon.com' },
        { '@type': 'Thing', name: 'Docker', url: 'https://docker.com' },
        { '@type': 'Thing', name: 'Kubernetes', url: 'https://kubernetes.io' },
        { '@type': 'Thing', name: 'MongoDB', url: 'https://mongodb.com' },
        { '@type': 'Thing', name: 'Python', url: 'https://python.org' },
        { '@type': 'Thing', name: 'TypeScript', url: 'https://typescriptlang.org' },
        { '@type': 'Thing', name: 'Amazon Kinesis', url: 'https://aws.amazon.com/kinesis' },
        { '@type': 'Thing', name: 'Tableau', url: 'https://tableau.com' },
        { '@type': 'Thing', name: 'WordPress', url: 'https://wordpress.org' },
      ],
    },
    // Service entity (SEO: service catalog for case study work)
    {
      '@type': 'Service',
      '@id': 'https://karavanhub.com/case-studies/#service',
      name: 'Custom Software & IT Solutions',
      description:
        'Custom software development, cloud migration, AI automation, mobile apps, data engineering, and web design for small and medium businesses.',
      provider: { '@id': 'https://karavanhub.com/#organization' },
      serviceType: 'IT Consulting and Custom Software Development',
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'State', name: 'Ontario' },
        { '@type': 'City', name: 'Niagara' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Saudi Arabia' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'IT & Software Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Software Development',
              description: 'Full-stack software built for specific business workflows, from payment systems to booking platforms.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Migration & Architecture',
              description: 'Microservices architecture, containerized deployments, and auto-scaling cloud infrastructure on AWS.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Automation & Data Engineering',
              description: 'Real-time data pipelines, anomaly detection, and AI-powered process automation.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile App Development',
              description: 'Native Android and cross-platform mobile applications with offline-first architecture.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Design & E-Commerce',
              description: 'Custom websites and multi-tenant e-commerce platforms built for performance and conversion.',
            },
          },
        ],
      },
    },
    // ItemList entity (SEO: enriched case study list)
    {
      '@type': 'ItemList',
      '@id': 'https://karavanhub.com/case-studies/#itemlist',
      name: 'Karavan Hub Case Studies',
      description: 'IT and AI projects from Karavan Hub with measurable business outcomes',
      numberOfItems: 7,
      itemListElement: caseStudies.map((study, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'CreativeWork',
          name: study.title,
          description: study.intro,
          about: {
            '@type': 'Service',
            name: study.services[0],
            provider: { '@id': 'https://karavanhub.com/#organization' },
          },
          genre: study.category,
        },
      })),
    },
    // HowTo entity (SEO: project delivery process)
    {
      '@type': 'HowTo',
      '@id': 'https://karavanhub.com/case-studies/#howto',
      name: 'How Karavan Hub delivers custom software projects',
      description: 'Our project delivery process from discovery to production support.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Discovery & Scoping',
          text: 'We sit down with your team, map out what is broken and what needs building, and define clear deliverables with a fixed timeline.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Architecture & Planning',
          text: 'We design the system architecture, pick the right tech stack for the job, and set up project milestones you can track.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Build & Iterate',
          text: 'Agile sprints with working demos every two weeks. You see real progress, not slide decks.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Launch & Support',
          text: 'We deploy to production, monitor performance, and provide ongoing maintenance. Several of our projects have been running for 6+ years.',
        },
      ],
    },
    // FAQPage entity (AEO: expanded with cost + integration + support questions)
    {
      '@type': 'FAQPage',
      '@id': 'https://karavanhub.com/case-studies/#faq',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
    // BreadcrumbList entity
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://karavanhub.com' },
        { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://karavanhub.com/case-studies' },
      ],
    },
    // ProfessionalService entity (GEO: local business signals)
    {
      '@type': 'ProfessionalService',
      '@id': 'https://karavanhub.com/#localbusiness',
      name: 'Karavan Hub',
      url: 'https://karavanhub.com',
      telephone: '+1-905-301-3936',
      email: 'karavan.it.hub@gmail.com',
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
        latitude: 43.0896,
        longitude: -79.0849,
      },
      priceRange: '$$',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      sameAs: { '@id': 'https://karavanhub.com/#organization' },
    },
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <main id="main-content" role="main">
        {/* HERO SECTION */}
        <section
          className="relative py-20 sm:py-24 md:py-32 text-center overflow-hidden"
          aria-labelledby="hero-heading"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #2563eb 100%)',
          }}
        >
          {/* Gradient orbs */}
          <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-br from-blue-500 to-transparent rounded-full blur-3xl opacity-40 -mr-12 sm:-mr-16 md:-mr-32 -mt-12 sm:-mt-16 md:-mt-32" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 bg-gradient-to-tr from-cyan-400 to-transparent rounded-full blur-3xl opacity-40 -ml-12 sm:-ml-16 md:-ml-32 -mb-6 sm:-mb-8 md:-mb-16" aria-hidden="true" />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
            aria-hidden="true"
          />

          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 relative z-10">
            <div className="font-mono text-cyan-400/80 text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">7 Case Studies</div>
            <h1 id="hero-heading" className="font-headline text-[clamp(2.5rem,8vw,3.75rem)] font-bold text-white mb-4 sm:mb-6 leading-[1.1] tracking-[-0.02em]">
              Real Problems.<br />
              <span className="text-cyan-400">Real Results.</span>
            </h1>
            <p className="font-body text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Every project started with a business that needed something fixed, built, or rebuilt. Here&apos;s what we did and what actually happened.
            </p>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-headline font-semibold text-sm sm:text-base transition-all hover:bg-white/95 hover:shadow-xl hover:-translate-y-0.5"
            >
              See the Work
              <ChevronRight size={18} />
            </a>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="case-studies" aria-label="Case Studies">
          {caseStudies.map((study, idx) => (
            <section
              key={study.id}
              className={`py-16 sm:py-20 lg:py-28 ${idx % 2 === 1 ? '' : ''}`}
              style={{ background: idx % 2 === 1 ? '#FAFAF8' : '#ffffff' }}
              aria-labelledby={`study-heading-${study.id}`}
            >
              <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                  {/* Gradient Visual — always first on mobile (DOM order), alternates on desktop */}
                  <div className={`lg:sticky lg:top-24 ${study.layout === 'reverse' ? 'lg:order-last' : ''}`}>
                    <GradientVisual study={study} index={idx} />
                  </div>

                  {/* Content — always second on mobile (DOM order) */}
                  <div className={study.layout === 'reverse' ? 'lg:order-first' : ''}>
                    {/* Study number + badges */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-mono text-[var(--text-muted)] text-sm tracking-widest">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="w-8 h-px bg-[var(--border-light)]" aria-hidden="true" />
                      <div className="flex gap-2 flex-wrap">
                        <span className={`px-3 py-1 text-white text-xs font-semibold uppercase rounded-full ${getCategoryColor(study.category)}`}>
                          {study.category}
                        </span>
                        {study.categoryTag !== study.category && (
                          <span className="px-3 py-1 bg-gray-200 text-[var(--text-body)] text-xs font-semibold uppercase rounded-full">
                            {study.categoryTag}
                          </span>
                        )}
                      </div>
                    </div>

                    <h2 id={`study-heading-${study.id}`} className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-3 sm:mb-4">{study.title}</h2>
                    <p className="font-body text-base sm:text-lg text-[var(--text-dark)] mb-6 sm:mb-8 leading-relaxed">{study.intro}</p>

                    <CaseStudyCard
                      results={study.results}
                      accentColor={getCategoryAccentColor(study.category)}
                      solution={study.solution}
                      services={study.services}
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </section>

        {/* FAQ SECTION */}
        <section id="faq" aria-labelledby="faq-heading" className="py-16 sm:py-20 lg:py-24" style={{ background: '#FAFAF8' }}>
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="text-center mb-10 sm:mb-16">
              <h2 id="faq-heading" className="font-headline text-3xl sm:text-4xl font-bold text-[var(--text-dark)] mb-4">Frequently Asked Questions</h2>
              <p className="font-body text-[var(--text-body)] max-w-2xl mx-auto">
                What people usually want to know before reaching out.
              </p>
            </div>
            <div className="flex flex-col gap-3 max-w-2xl mx-auto">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="bg-white rounded-lg border border-[var(--border-light)] overflow-hidden transition-all hover:border-blue-300 open:border-blue-300 open:shadow-md"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer list-none font-semibold text-[var(--text-dark)] hover:text-[var(--primary)] min-h-[48px]">
                    <h3 className="font-headline text-sm sm:text-[15px] md:text-base pr-3" itemProp="name">{faq.question}</h3>
                    <div className="w-6 h-6 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center transition-transform" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </summary>
                  <div
                    className="px-4 sm:px-5 pb-4 sm:pb-5 text-[var(--text-body)] text-sm leading-relaxed border-t border-[var(--border-light)]"
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                  >
                    <p className="font-body pt-4" itemProp="text">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          aria-labelledby="cta-heading"
          className="py-12 sm:py-[60px] md:py-[80px] lg:py-[100px] text-center relative"
          style={{ background: 'linear-gradient(180deg, #f0f9ff, #e0f2fe)' }}
        >
          <div className="max-w-[900px] mx-auto px-5 sm:px-6">
            <div
              className="bg-white rounded-2xl sm:rounded-[24px] py-8 px-5 sm:py-[40px] sm:px-6 md:py-[60px] md:px-12 border border-[rgba(37,99,235,0.08)]"
              style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.02), 0 12px 24px rgba(0,0,0,0.04), 0 24px 48px rgba(37,99,235,0.06)' }}
            >
              <h2 id="cta-heading" className="font-headline text-xl sm:text-[24px] md:text-[clamp(24px,4vw,36px)] font-semibold text-[var(--text-dark)] mb-3 sm:mb-4 tracking-[-0.5px]">
                Got a project like these?
              </h2>
              <p className="font-body text-[16px] md:text-[18px] text-[var(--text-muted)] mb-8 leading-[1.7] max-w-[550px] mx-auto">
                Tell us what&apos;s broken, what you&apos;re building, or what keeps you up at night. We&apos;ll be straight with you about what we can do.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[var(--primary)] text-white px-8 py-4 rounded-lg text-[15px] font-semibold leading-none uppercase tracking-[0.5px] no-underline transition-all duration-300 hover:bg-[var(--primary-deeper)] hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)' }}
                aria-label="Book a free consultation with Karavan Hub"
              >
                Let&apos;s Talk
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
