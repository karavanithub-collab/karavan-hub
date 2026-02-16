import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const ChevronRight = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
);

export const metadata: Metadata = {
  title: 'Case Studies | Karavan Hub - Real Results for Real Businesses',
  description:
    '7 real-world case studies from Karavan Hub. See how we helped businesses solve real challenges with custom software, cloud migration, and AI automation. Verified results: 85% faster processing, 99.9% uptime, 40% cost reduction.',
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
      'Real problems. Real results. See how we\'ve helped businesses with technology that actually works. Verified case studies with measurable outcomes.',
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
      'Real problems. Real results. See verified case studies with measurable business outcomes.',
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
  image: string;
  imageAlt: string;
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
      'A multi-branch organization was losing thousands monthly to payment errors, duplicate invoices, and compliance gaps. Manual verification couldn\'t scale. They needed a system that could.',
    image: '/images/software-dev.jpg',
    imageAlt: 'Custom payment management software dashboard for enterprise fintech',
    results: [
      { value: '85%', label: 'Faster Processing' },
      { value: 'Zero', label: 'Duplicate Payments' },
      { value: '100%', label: 'Audit Coverage' },
    ],
    solution:
      'Built a role-based workflow system (Accountant, Validator, Approver, Executor) with automated duplicate detection, tax compliance checks, and complete audit logging. AI-powered anomaly detection flags suspicious patterns before payments execute.',
    services: ['Custom Software', 'AI Automation', 'System Integration'],
    layout: 'normal',
  },
  {
    id: 'travel-platform',
    category: 'Travel & Tourism',
    categoryTag: 'Enterprise',
    title: 'Saudi Travel Platform',
    intro:
      'A rapidly growing Saudi travel company hit a wall. Their monolithic booking system couldn\'t handle peak demand. Slow response times were costing bookings and damaging their reputation with hotels.',
    image: '/images/digital-transformation.jpg',
    imageAlt: 'Cloud migration dashboard for Saudi travel booking platform',
    results: [
      { value: '10x', label: 'Traffic Capacity' },
      { value: '60%', label: 'Faster Response' },
      { value: '99.9%', label: 'Uptime During Peak' },
    ],
    solution:
      'Decomposed the monolith into specialized microservices: booking, hotel reservations, user management, payment processing. Containerized with Docker, implemented API gateway routing, and built auto-scaling that responds to demand in real-time.',
    services: ['Cloud Migration', 'Microservices', 'System Architecture', 'Horizontal Scaling'],
    layout: 'reverse',
  },
  {
    id: 'enterprise-security',
    category: 'Information Security',
    categoryTag: 'Healthcare',
    title: 'Enterprise Security & Data Platform',
    intro:
      'A global technology manufacturer with 40,000+ employees needed to modernize their security infrastructure. Legacy systems couldn\'t keep pace with threat detection requirements, and manual monitoring was creating dangerous blind spots.',
    image: '/images/data-analytics.jpg',
    imageAlt: 'Security operations center with real-time threat monitoring dashboard',
    results: [
      { value: '6 Years', label: 'Production Support' },
      { value: 'Real-time', label: 'Threat Detection' },
      { value: 'Global', label: 'Deployment Scale' },
    ],
    solution:
      'Built full-stack security applications using React.js and Angular frontends with Python and Node.js backends. Implemented real-time data streaming with Amazon Kinesis for threat monitoring, containerized deployments with Docker and Kubernetes, and established CI/CD pipelines for rapid, secure releases.',
    services: ['Full-Stack Development', 'AWS Infrastructure', 'Real-time Analytics', 'DevOps'],
    layout: 'normal',
  },
  {
    id: 'mobility-suite',
    category: 'Mobile & Mobility',
    categoryTag: 'Enterprise',
    title: 'Enterprise Mobility Suite',
    intro:
      'A large technology company\'s field teams were drowning in disconnected apps and manual processes. Sales reps spent more time on data entry than selling. Service technicians couldn\'t access information on-site.',
    image: '/images/ai-workflows.jpg',
    imageAlt: 'Mobile enterprise application for field teams on iOS and Android',
    results: [
      { value: '40%', label: 'Less Admin Time' },
      { value: 'iOS + Android', label: 'Cross-Platform' },
      { value: 'Offline', label: 'Field-Ready' },
    ],
    solution:
      'Developed native Android applications with Kotlin/Java alongside cross-platform solutions. Built offline-first architecture so field teams stay productive without connectivity. Integrated with backend systems via REST APIs and implemented secure authentication for sensitive corporate data.',
    services: ['Mobile Development', 'Android Native', 'API Integration', 'Offline Sync'],
    layout: 'reverse',
  },
  {
    id: 'data-pipeline',
    category: 'Data Engineering',
    categoryTag: 'AI & Analytics',
    title: 'Real-time Data Pipeline',
    intro:
      'A global manufacturer\'s business intelligence was always 24 hours behind. Executives made decisions on yesterday\'s data while competitors moved faster. The batch-processing approach couldn\'t support real-time operations.',
    image: '/images/cta-motion.jpg',
    imageAlt: 'Real-time data pipeline architecture with streaming analytics',
    results: [
      { value: '24hrs to Real-time', label: 'Data Latency' },
      { value: 'TB-scale', label: 'Daily Processing' },
      { value: '99.9%', label: 'Pipeline Reliability' },
    ],
    solution:
      'Architected streaming ETL pipelines using Amazon Kinesis for real-time data ingestion. Built transformation layers with Python, implemented data quality checks at each stage, and deployed Tableau dashboards for executive visibility. Automated monitoring alerts when data quality thresholds breach.',
    services: ['ETL Pipelines', 'Amazon Kinesis', 'Data Engineering', 'Tableau'],
    layout: 'normal',
  },
  {
    id: 'ecommerce-platform',
    category: 'E-Commerce',
    categoryTag: 'SaaS',
    title: 'Multi-tenant E-commerce Platform',
    intro:
      'A growing tech company needed to launch e-commerce solutions for multiple clients without rebuilding from scratch each time. Custom development for every client was eating margins and slowing delivery.',
    image: '/images/web-design.jpg',
    imageAlt: 'Multi-tenant e-commerce platform with customizable storefronts',
    results: [
      { value: '6+ Years', label: 'Platform Development' },
      { value: '70%', label: 'Faster Client Launch' },
      { value: 'Multi-tenant', label: 'Architecture' },
    ],
    solution:
      'Led development of a multi-tenant platform using Node.js backend with MongoDB for flexible data modeling. Built customizable storefronts with PHP/Drupal, integrated payment gateways, and created a reusable component library. Each new client deployment became configuration, not construction.',
    services: ['Platform Development', 'Node.js', 'MongoDB', 'Payment Integration'],
    layout: 'reverse',
  },
  {
    id: 'villa-hospitality',
    category: 'Travel & Tourism',
    categoryTag: 'Hospitality',
    title: 'Aegean Escape Villas',
    intro:
      'A Canadian real estate company launching luxury villa rentals on Turkey\'s coast needed a digital presence that matched the properties: sophisticated and conversion-focused. Peak booking season was 6 weeks away.',
    image: '/images/software-dev.jpg',
    imageAlt: 'Luxury villa rental website with immersive property galleries',
    results: [
      { value: '6', label: 'Weeks to Launch' },
      { value: '<3s', label: 'Load Time' },
      { value: '5', label: 'Villas Live' },
    ],
    solution:
      'Custom WordPress theme with full-screen hero videos, parallax scrolling, and high-resolution galleries. UX designed to convert, with strategic inquiry form placement. Custom image pipeline that keeps visual quality high without killing load speeds.',
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
    question: 'What industries does Karavan Hub specialize in?',
    answer:
      'We specialize in fintech, healthcare, travel, e-commerce, and hospitality. Our case studies cover projects including payment management systems, mobile apps, cloud migration platforms, travel booking systems, and villa booking websites.',
  },
  {
    question: 'What results can I expect from working with Karavan Hub?',
    answer:
      'Our case studies show consistent, measurable results: 85% faster processing times, 99.9% system uptime, 40% cost reduction, 60% faster decision-making with AI analytics, and 3x performance improvements through cloud migration.',
  },
  {
    question: 'Do you work with startups or only large companies?',
    answer:
      'We focus on small and medium businesses, though we have experience with projects at every scale. Every solution we build is designed to grow with your business, whether you\'re processing your first transactions or handling thousands daily.',
  },
  {
    question: 'What technologies does Karavan Hub use?',
    answer:
      'We build with React, Node.js, Python, AWS, TypeScript, Docker, Kubernetes, MongoDB, PostgreSQL, and TensorFlow. Our stack is chosen based on what each project actually needs for security and performance.',
  },
  {
    question: 'Where is Karavan Hub located?',
    answer:
      'Niagara, Ontario. We work with clients across Canada, the US, and internationally.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on complexity. MVP development typically takes 3-4 months, while larger solutions may require 6-12 months. We provide detailed timelines during our discovery phase, with regular milestones and transparent progress tracking.',
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

function ResultsBox({ results }: { results: Array<{ value: string; label: string }> }) {
  return (
    <div className="rounded-lg p-6 mb-6" style={{ background: '#F8F9FA' }}>
      <div className="flex items-center gap-2 mb-4 text-[#10B981] font-semibold text-xs uppercase tracking-wider">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        Results Delivered
      </div>
      <div className="grid grid-cols-3 gap-4">
        {results.map((result, idx) => (
          <div key={idx} className="text-center">
            <div className="font-headline text-2xl font-bold text-[var(--primary)] leading-none mb-1">{result.value}</div>
            <div className="text-xs text-[var(--text-muted)] uppercase tracking-tight">{result.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SolutionBox({ solution }: { solution: string }) {
  return (
    <div className="bg-blue-50 rounded-lg p-6 mb-6">
      <div className="flex items-center gap-2 mb-3 text-[var(--primary)] font-semibold text-xs uppercase tracking-wider">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        How We Solved It
      </div>
      <p className="font-body text-[var(--text-body)] text-sm leading-relaxed">{solution}</p>
    </div>
  );
}

function ServiceTags({ services }: { services: string[] }) {
  return (
    <div className="mt-6">
      <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">Services Delivered</div>
      <div className="flex flex-wrap gap-2">
        {services.map((service, idx) => (
          <span key={idx} className="px-3 py-1.5 bg-gray-100 text-[var(--text-body)] text-xs font-medium rounded border border-[var(--border-light)]">
            {service}
          </span>
        ))}
      </div>
    </div>
  );
}

// Consolidated JSON-LD Schema Graph
const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
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
    {
      '@type': 'WebPage',
      '@id': 'https://karavanhub.com/case-studies/#webpage',
      url: 'https://karavanhub.com/case-studies',
      name: 'Case Studies | Karavan Hub',
      description:
        'Real-world case studies from Karavan Hub. See how we help businesses solve real challenges with custom software, cloud migration, and AI automation.',
      datePublished: '2026-01-15',
      dateModified: '2026-02-16',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://karavanhub.com/#website',
        name: 'Karavan Hub',
        url: 'https://karavanhub.com',
      },
      about: { '@id': 'https://karavanhub.com/case-studies/#itemlist' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['#hero-heading', '#faq-heading'],
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
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://karavanhub.com/case-studies/#itemlist',
      name: 'Karavan Hub Case Studies',
      description: 'Collection of IT and AI case studies demonstrating real business results',
      numberOfItems: 7,
      itemListElement: caseStudies.map((study, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'Article',
          name: study.title,
          description: study.intro,
        },
      })),
    },
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
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://karavanhub.com' },
        { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://karavanhub.com/case-studies' },
      ],
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
          className="relative py-32 text-center overflow-hidden"
          aria-labelledby="hero-heading"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #2563eb 100%)',
          }}
        >
          {/* Gradient orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-transparent rounded-full blur-3xl opacity-40 -mr-32 -mt-32" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-cyan-400 to-transparent rounded-full blur-3xl opacity-40 -ml-32 -mb-16" aria-hidden="true" />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
            aria-hidden="true"
          />

          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 relative z-10">
            <h1 id="hero-heading" className="font-headline text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Real Problems.<br />
              <span className="text-cyan-400">Real Results.</span>
            </h1>
            <p className="font-body text-lg text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed">
              No fluff. No vanity metrics. Just honest stories of how we helped businesses solve real challenges with technology that actually works.
            </p>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-headline font-semibold transition-all hover:bg-white/95 hover:shadow-xl hover:-translate-y-0.5"
            >
              View Our Work
              <ChevronRight size={20} />
            </a>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="case-studies" aria-label="Case Studies" className="py-24">
          {caseStudies.map((study, idx) => (
            <section key={study.id} className="border-b border-[var(--border-light)] py-20 last:border-b-0">
              <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                  {/* Image - sticky, alternates position */}
                  <div className={`lg:sticky lg:top-24 ${study.layout === 'reverse' ? 'lg:order-first' : ''}`}>
                    <div className="rounded-2xl overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.imageAlt}
                        width={800}
                        height={700}
                        className="w-full h-auto object-cover rounded-2xl"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={idx === 0}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={study.layout === 'reverse' ? 'lg:order-last' : ''}>
                    <div className="flex gap-2 mb-4 flex-wrap">
                      <span className={`px-3 py-1 text-white text-xs font-semibold uppercase rounded-full ${getCategoryColor(study.category)}`}>
                        {study.category}
                      </span>
                      {study.categoryTag !== study.category && (
                        <span className="px-3 py-1 bg-gray-200 text-[var(--text-body)] text-xs font-semibold uppercase rounded-full">
                          {study.categoryTag}
                        </span>
                      )}
                    </div>
                    <h2 className="font-headline text-4xl font-bold text-[var(--text-dark)] mb-4">{study.title}</h2>
                    <p className="font-body text-[var(--text-body)] mb-6 leading-relaxed">{study.intro}</p>
                    <ResultsBox results={study.results} />
                    <SolutionBox solution={study.solution} />
                    <ServiceTags services={study.services} />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </section>

        {/* FAQ SECTION */}
        <section id="faq" aria-labelledby="faq-heading" className="py-24" style={{ background: '#FAFAF8' }}>
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 id="faq-heading" className="font-headline text-4xl font-bold text-[var(--text-dark)] mb-4">Frequently Asked Questions</h2>
              <p className="font-body text-[var(--text-body)] max-w-2xl mx-auto">
                Common questions about our case studies and how we deliver results for our clients.
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
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-[var(--text-dark)] hover:text-[var(--primary)]">
                    <h3 className="font-headline text-sm md:text-base" itemProp="name">{faq.question}</h3>
                    <div className="w-6 h-6 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center transition-transform">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </summary>
                  <div
                    className="px-5 pb-5 text-[var(--text-body)] text-sm leading-relaxed border-t border-[var(--border-light)]"
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                  >
                    <p className="font-body" itemProp="text">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* TECH PARTNERS SECTION */}
        <section aria-labelledby="tech-stack-heading" className="py-24 bg-gray-50">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 text-center">
            <div className="text-[var(--primary)] text-xs font-semibold uppercase tracking-widest mb-2">Technology Stack</div>
            <h2 id="tech-stack-heading" className="font-headline text-4xl font-bold text-[var(--text-dark)] mb-16">Tools We Build With</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
              {/* React */}
              <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform" title="React">
                <svg viewBox="0 0 24 24" fill="#61DAFB" className="w-12 h-12">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                </svg>
              </div>
              {/* Node.js */}
              <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform" title="Node.js">
                <svg viewBox="0 0 24 24" fill="#339933" className="w-12 h-12">
                  <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.283.283 0 0 0-.137-.242l-8.791-5.072a.278.278 0 0 0-.271 0L3.075 6.68a.284.284 0 0 0-.139.241v10.15a.27.27 0 0 0 .139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.857 1.857 0 0 1-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15a1.86 1.86 0 0 1-.924 1.604l-8.795 5.078c-.28.163-.6.247-.924.247zm2.715-6.997c-3.857 0-4.664-1.77-4.664-3.256 0-.14.114-.254.256-.254h1.136c.127 0 .233.092.253.216.172 1.162.686 1.75 3.02 1.75 1.858 0 2.648-.42 2.648-1.404 0-.568-.224-.989-3.112-1.271-2.415-.238-3.91-.772-3.91-2.703 0-1.782 1.503-2.843 4.023-2.843 2.83 0 4.229.982 4.406 3.091a.255.255 0 0 1-.253.28h-1.142a.252.252 0 0 1-.245-.198c-.273-1.212-.934-1.6-2.766-1.6-2.037 0-2.275.71-2.275 1.242 0 .645.28.833 3.014 1.198 2.708.361 4.006.872 4.006 2.76 0 1.925-1.603 3.024-4.395 2.992z"/>
                </svg>
              </div>
              {/* Python */}
              <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform" title="Python">
                <svg viewBox="0 0 24 24" fill="#3776AB" className="w-12 h-12">
                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                </svg>
              </div>
              {/* AWS */}
              <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform" title="Amazon Web Services">
                <svg viewBox="0 0 24 24" fill="#FF9900" className="w-12 h-12">
                  <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.176 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/>
                </svg>
              </div>
              {/* TypeScript */}
              <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform" title="TypeScript">
                <svg viewBox="0 0 24 24" fill="#3178C6" className="w-12 h-12">
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.395c.272.12.576.237.912.352.476.164.909.347 1.297.55.387.2.727.439 1.014.716.287.277.513.6.677.97.164.37.246.803.246 1.3 0 .604-.104 1.11-.311 1.52-.207.41-.49.742-.849.997-.36.254-.779.436-1.258.545a6.816 6.816 0 0 1-1.563.175 7.07 7.07 0 0 1-1.68-.18 5.53 5.53 0 0 1-1.41-.527v-2.538c.238.186.5.35.786.494a5.77 5.77 0 0 0 1.812.552c.294.032.56.047.8.047.336 0 .612-.025.826-.076a1.7 1.7 0 0 0 .526-.2.788.788 0 0 0 .281-.301.755.755 0 0 0 .086-.357.82.82 0 0 0-.178-.553 1.902 1.902 0 0 0-.504-.446c-.22-.14-.487-.277-.802-.41a14.696 14.696 0 0 0-1.07-.4 8.75 8.75 0 0 1-1.25-.553 4.18 4.18 0 0 1-.974-.732 3.052 3.052 0 0 1-.63-1.013c-.149-.398-.224-.862-.224-1.392 0-.576.109-1.066.327-1.47.218-.404.52-.732.906-.984a4.18 4.18 0 0 1 1.378-.59 7.127 7.127 0 0 1 1.716-.196zM11.082 9.9H6.896v9.6H4.5V9.9H.382V7.7h10.7z"/>
                </svg>
              </div>
              {/* Docker */}
              <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform" title="Docker">
                <svg viewBox="0 0 24 24" fill="#2496ED" className="w-12 h-12">
                  <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186h-2.12a.186.186 0 0 0-.185.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/>
                </svg>
              </div>
              {/* Kubernetes */}
              <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform" title="Kubernetes">
                <svg viewBox="0 0 24 24" fill="#326CE5" className="w-12 h-12">
                  <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.006.01 1.616 2.01a5.15 5.15 0 0 0 1.26-2.886l-2.576-.39-.004.004a.44.44 0 0 1-.303.252zm.596-2.166l.005.005 2.603-.645a5.145 5.145 0 0 0-1.878-2.324l-1.02 2.467-.004.003a.44.44 0 0 1 .294.494zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.78 17.313a.635.635 0 0 1-.262-.054l-1.07-.484a6.022 6.022 0 0 1-1.442.625l-.2 1.154a.638.638 0 0 1-.627.536h-.004l-1.683-.007a.638.638 0 0 1-.622-.545l-.185-1.15a6.022 6.022 0 0 1-1.44-.635l-1.078.476a.638.638 0 0 1-.78-.238l-.843-1.434a.638.638 0 0 1 .115-.778l.877-.792a5.96 5.96 0 0 1-.163-1.559c.005-.528.065-1.05.177-1.556l-.866-.8a.638.638 0 0 1-.109-.788l.856-1.423a.638.638 0 0 1 .784-.233l1.073.487a6.02 6.02 0 0 1 1.432-.64l.19-1.146a.638.638 0 0 1 .627-.535h.004l1.68.007a.638.638 0 0 1 .623.544l.183 1.15c.502.134.984.32 1.44.64l1.074-.48a.638.638 0 0 1 .782.232l.852 1.424a.638.638 0 0 1-.109.788l-.865.8c.113.507.172 1.03.177 1.556a5.96 5.96 0 0 1-.163 1.56l.88.79a.638.638 0 0 1 .115.779l-.844 1.433a.635.635 0 0 1-.52.294z"/>
                </svg>
              </div>
              {/* MongoDB */}
              <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform" title="MongoDB">
                <svg viewBox="0 0 24 24" fill="#47A248" className="w-12 h-12">
                  <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
                </svg>
              </div>
              {/* PostgreSQL */}
              <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform" title="PostgreSQL">
                <svg viewBox="0 0 24 24" fill="#4169E1" className="w-12 h-12">
                  <path d="M23.56 14.72a.53.53 0 0 0-.06-.12c-.14-.26-.48-.34-1.01-.23-1.65.34-2.29.13-2.53-.02 1.34-2.05 2.45-4.52 3.04-6.83.27-1.05.8-3.52.12-4.73a1.56 1.56 0 0 0-.15-.24C21.69.91 19.8.02 17.51 0c-1.49-.02-2.77.35-3.12.46a9.88 9.88 0 0 0-1.15-.07c-1.09-.01-2.06.21-2.92.67C9.17.4 7.6 0 5.91 0 4.03.05 2.49.77 1.4 2.16.46 3.37.04 5.01 0 6.97a35.04 35.04 0 0 0 0 .47c0 2.64.78 6.12 2.08 9.33.48 1.18.98 2.17 1.48 2.93.61.92 1.19 1.45 1.76 1.61.39.11.8.08 1.15-.1.49-.25.93-.75 1.22-1.4.17-.39.36-1.03.49-1.73a7.8 7.8 0 0 0 .62.65c-.18.41-.28.89-.28 1.4 0 .98.36 1.77 1.03 2.31.72.57 1.71.86 2.96.86.82 0 1.7-.1 2.64-.29.58-.2 1.15-.44 1.69-.7.58.2 1.22.31 1.91.32 1.37 0 2.53-.5 3.35-1.44.83-.95 1.27-2.26 1.27-3.8 0-.08 0-.16-.01-.25a.62.62 0 0 0 .01-.17z"/>
                </svg>
              </div>
              {/* TensorFlow */}
              <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform" title="TensorFlow">
                <svg viewBox="0 0 24 24" fill="#FF6F00" className="w-12 h-12">
                  <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section aria-labelledby="cta-heading" className="py-24" style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)' }}>
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="bg-white rounded-3xl p-16 max-w-2xl mx-auto shadow-lg border border-blue-100">
              <h2 id="cta-heading" className="font-headline text-4xl font-bold text-[var(--text-dark)] mb-4 text-center">Ready to discuss your project?</h2>
              <p className="font-body text-[var(--text-body)] text-lg text-center mb-8">
                Whether you're replacing legacy systems or building something new with AI, let's talk.
              </p>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-[var(--primary)] text-white px-12 py-4 rounded-lg font-headline font-semibold transition-all hover:bg-[var(--primary-dark)] hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto text-center"
                >
                  Start the Conversation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
