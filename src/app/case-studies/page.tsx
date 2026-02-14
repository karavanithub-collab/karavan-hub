import { Metadata } from 'next';
import Link from 'next/link';
const ChevronRight = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
);

export const metadata: Metadata = {
  title: 'Case Studies | Karavan Hub - Real Results for Real Businesses',
  description:
    'Explore 7 real-world case studies showcasing how Karavan IT Solutions helps businesses solve complex challenges with custom software, cloud migration, AI automation, and enterprise solutions. See verified results: 85% faster processing, 99.9% uptime, 40% cost reduction.',
  alternates: {
    canonical: 'https://karavanhub.com/case-studies',
  },
  openGraph: {
    title: 'Case Studies | Karavan IT Solutions — Real Results for Real Businesses',
    description:
      'Real problems. Real solutions. Real results. See how we\'ve helped 50+ businesses transform with technology that works. Verified case studies with measurable outcomes.',
    type: 'website',
    url: 'https://karavanhub.com/case-studies',
    images: [
      {
        url: 'https://karavanhub.com/images/case-studies-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Karavan IT Solutions Case Studies - Real Results for Real Businesses',
      },
    ],
    siteName: 'Karavan IT Solutions',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Karavan IT Solutions',
    description:
      'Real problems. Real solutions. Real results. See verified case studies with measurable business outcomes.',
    images: ['https://karavanhub.com/images/case-studies-twitter.jpg'],
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  authors: [{ name: 'Karavan IT Solutions', url: 'https://karavanhub.com/about' }],
  alternates: {
    canonical: 'https://karavanhub.com/case-studies',
    languages: {
      'en-CA': 'https://karavanhub.com/case-studies',
      'x-default': 'https://karavanhub.com/case-studies',
    },
  },
};

interface CaseStudy {
  id: string;
  category: string;
  categoryTag: string;
  title: string;
  intro: string;
  asciiArt: string;
  visualTitle: string;
  visualType: string;
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
      'A multi-branch organization was losing thousands monthly to payment errors, duplicate invoices, and compliance gaps. Manual verification couldn\'t scale—they needed a system that could.',
    asciiArt: `     ╔══════════════════════════════════════════════════╗
     ║           PAYMENT PROCESSING METRICS             ║
     ╠══════════════════════════════════════════════════╣
     ║                                                  ║
     ║   PROCESSING TIME          ACCURACY RATE        ║
     ║   ┌────────────────┐       ┌────────────────┐   ║
     ║   │▓▓▓▓▓▓▓▓▓▓▓▓░░░░│       │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│   ║
     ║   │    85% FASTER  │       │     100%       │   ║
     ║   └────────────────┘       └────────────────┘   ║
     ║                                                  ║
     ║   ┌──────────────────────────────────────────┐  ║
     ║   │  BEFORE        AFTER                     │  ║
     ║   │    █                                     │  ║
     ║   │    █                                     │  ║
     ║   │    █                                     │  ║
     ║   │    █             █                       │  ║
     ║   │    █             █                       │  ║
     ║   │   24h           3.6h                     │  ║
     ║   └──────────────────────────────────────────┘  ║
     ║                                                  ║
     ║   DUPLICATES: ████████████████████████ 0        ║
     ║   AUDIT COVERAGE: ████████████████████ 100%     ║
     ║                                                  ║
     ╚══════════════════════════════════════════════════╝`,
    visualTitle: 'Payment',
    visualType: 'fintech',
    results: [
      { value: '85%', label: 'Faster Processing' },
      { value: 'Zero', label: 'Duplicate Payments' },
      { value: '100%', label: 'Audit Coverage' },
    ],
    solution:
      'Built a role-based workflow system (Accountant → Validator → Approver → Executor) with automated duplicate detection, tax compliance checks, and complete audit logging. AI-powered anomaly detection flags suspicious patterns before payments execute.',
    services: ['Custom Software', 'AI Automation', 'System Integration'],
    layout: 'normal',
  },
  {
    id: 'travel-platform',
    category: 'Travel & Tourism',
    categoryTag: 'Enterprise',
    title: 'Saudi Travel Platform',
    intro:
      'A rapidly growing Saudi travel company hit a wall. Their monolithic booking system couldn\'t handle peak demand—slow response times were costing bookings and damaging their reputation with hotels.',
    asciiArt: `     ╔══════════════════════════════════════════════════╗
     ║            CLOUD MIGRATION DASHBOARD             ║
     ╠══════════════════════════════════════════════════╣
     ║                                                  ║
     ║   TRAFFIC CAPACITY        RESPONSE TIME         ║
     ║   ┌────────────────┐      ┌────────────────┐    ║
     ║   │ BEFORE:   1x   │      │ BEFORE: 2.5s   │    ║
     ║   │ AFTER:   10x   │      │ AFTER:  1.0s   │    ║
     ║   │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │      │ ▓▓▓▓▓▓▓▓▓▓░░░░ │    ║
     ║   └────────────────┘      └────────────────┘    ║
     ║                                                  ║
     ║   UPTIME CHART (30 DAYS)                        ║
     ║   ┌──────────────────────────────────────────┐  ║
     ║   │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  ║
     ║   │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  ║
     ║   │                                99.9%    │  ║
     ║   └──────────────────────────────────────────┘  ║
     ║                                                  ║
     ║   MICROSERVICES     ┌───┐ ┌───┐ ┌───┐ ┌───┐    ║
     ║   DEPLOYED:    4    │ B │ │ H │ │ U │ │ P │    ║
     ║                     └───┘ └───┘ └───┘ └───┘    ║
     ║                                                  ║
     ╚══════════════════════════════════════════════════╝`,
    visualTitle: 'Cloud',
    visualType: 'travel',
    results: [
      { value: '10x', label: 'Traffic Capacity' },
      { value: '60%', label: 'Faster Response' },
      { value: '99.9%', label: 'Uptime During Peak' },
    ],
    solution:
      'Decomposed the monolith into specialized microservices—booking, hotel reservations, user management, payment processing. Containerized with Docker, implemented API gateway routing, and built auto-scaling that responds to demand in real-time.',
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
    asciiArt: `     ╔══════════════════════════════════════════════════╗
     ║            SECURITY OPERATIONS CENTER            ║
     ╠══════════════════════════════════════════════════╣
     ║                                                  ║
     ║   USERS PROTECTED        YEARS IN PRODUCTION    ║
     ║   ┌────────────────┐     ┌────────────────┐     ║
     ║   │                │     │                │     ║
     ║   │    40,000+     │     │       6        │     ║
     ║   │                │     │     YEARS      │     ║
     ║   └────────────────┘     └────────────────┘     ║
     ║                                                  ║
     ║   THREAT DETECTION STATUS                       ║
     ║   ┌──────────────────────────────────────────┐  ║
     ║   │  ◉ REAL-TIME MONITORING        ACTIVE   │  ║
     ║   │  ◉ ANOMALY DETECTION           ACTIVE   │  ║
     ║   │  ◉ INCIDENT RESPONSE           READY    │  ║
     ║   │  ◉ COMPLIANCE AUDIT            PASSED   │  ║
     ║   └──────────────────────────────────────────┘  ║
     ║                                                  ║
     ║   COVERAGE     ████████████████████████ GLOBAL  ║
     ║   UPTIME       ████████████████████████ 24/7    ║
     ║   INCIDENTS    ░░░░░░░░░░░░░░░░░░░░░░░░ 0       ║
     ║                                                  ║
     ╚══════════════════════════════════════════════════╝`,
    visualTitle: 'Security',
    visualType: 'security',
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
      'A Fortune 500 technology company\'s field teams were drowning in disconnected apps and manual processes. Sales reps spent more time on data entry than selling. Service technicians couldn\'t access critical information on-site.',
    asciiArt: `     ╔══════════════════════════════════════════════════╗
     ║            MOBILE PRODUCTIVITY METRICS           ║
     ╠══════════════════════════════════════════════════╣
     ║                                                  ║
     ║   ADMIN TIME REDUCTION     PLATFORM SUPPORT     ║
     ║   ┌────────────────┐       ┌────────────────┐   ║
     ║   │ BEFORE   AFTER │       │  ◉ iOS         │   ║
     ║   │  100%     60%  │       │  ◉ Android     │   ║
     ║   │   █       █    │       │  ◉ Tablet      │   ║
     ║   │   █       █    │       │  ◉ Offline     │   ║
     ║   │   █             │       └────────────────┘   ║
     ║   │   █       40%   │                           ║
     ║   │  SAVED         │                            ║
     ║   └────────────────┘                            ║
     ║                                                  ║
     ║   FEATURE ADOPTION                              ║
     ║   ┌──────────────────────────────────────────┐  ║
     ║   │ Field Sync    ████████████████████  95%  │  ║
     ║   │ Offline Mode  ██████████████████░░  88%  │  ║
     ║   │ Push Alerts   █████████████████░░░  82%  │  ║
     ║   │ Data Entry    ████████████████████  96%  │  ║
     ║   └──────────────────────────────────────────┘  ║
     ║                                                  ║
     ╚══════════════════════════════════════════════════╝`,
    visualTitle: 'Mobile',
    visualType: 'mobile',
    results: [
      { value: '40%', label: 'Less Admin Time' },
      { value: 'iOS + Android', label: 'Cross-Platform' },
      { value: 'Offline', label: 'Field-Ready' },
    ],
    solution:
      'Developed native Android applications with Kotlin/Java alongside cross-platform solutions. Built offline-first architecture so field teams stay productive without connectivity. Integrated with enterprise backend systems via REST APIs and implemented secure authentication for sensitive corporate data.',
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
    asciiArt: `     ╔══════════════════════════════════════════════════╗
     ║            REAL-TIME DATA ANALYTICS              ║
     ╠══════════════════════════════════════════════════╣
     ║                                                  ║
     ║   DATA LATENCY             DAILY THROUGHPUT     ║
     ║   ┌────────────────┐       ┌────────────────┐   ║
     ║   │ BEFORE: 24 hrs │       │                │   ║
     ║   │ AFTER:  <1 sec │       │    TERABYTES   │   ║
     ║   │                │       │    PROCESSED   │   ║
     ║   │  24h    <1s    │       │                │   ║
     ║   │   █             │       │      TB+       │   ║
     ║   │   █      ░      │       │                │   ║
     ║   └────────────────┘       └────────────────┘   ║
     ║                                                  ║
     ║   PIPELINE RELIABILITY (90 DAYS)                ║
     ║   ┌──────────────────────────────────────────┐  ║
     ║   │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  ║
     ║   │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  ║
     ║   │             UPTIME: 99.9%               │  ║
     ║   └──────────────────────────────────────────┘  ║
     ║                                                  ║
     ║   STAGES    ┌───────┐┌───────┐┌───────┐┌─────┐ ║
     ║   ACTIVE:   │INGEST ││PROCESS││ANALYZE││ OUT │ ║
     ║      4      └───────┘└───────┘└───────┘└─────┘ ║
     ╚══════════════════════════════════════════════════╝`,
    visualTitle: 'Pipeline',
    visualType: 'data',
    results: [
      { value: '24hrs → Real-time', label: 'Data Latency' },
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
    asciiArt: `     ╔══════════════════════════════════════════════════╗
     ║            E-COMMERCE PLATFORM STATS             ║
     ╠══════════════════════════════════════════════════╣
     ║                                                  ║
     ║   DEVELOPMENT TIME       LAUNCH SPEED           ║
     ║   ┌────────────────┐     ┌────────────────┐     ║
     ║   │                │     │ TRADITIONAL    │     ║
     ║   │    6+ YEARS    │     │      █         │     ║
     ║   │    PLATFORM    │     │      █         │     ║
     ║   │   MATURITY     │     │      █   70%   │     ║
     ║   │                │     │      █  FASTER │     ║
     ║   └────────────────┘     │      █    █    │     ║
     ║                          │           █    │     ║
     ║                          └────────────────┘     ║
     ║   MULTI-TENANT ARCHITECTURE                     ║
     ║   ┌──────────────────────────────────────────┐  ║
     ║   │  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐ │  ║
     ║   │  │SHOP A│  │SHOP B│  │SHOP C│  │SHOP D│ │  ║
     ║   │  │ $$$  │  │ $$$  │  │ $$$  │  │ $$$  │ │  ║
     ║   │  └──────┘  └──────┘  └──────┘  └──────┘ │  ║
     ║   │         SHARED INFRASTRUCTURE           │  ║
     ║   └──────────────────────────────────────────┘  ║
     ║                                                  ║
     ╚══════════════════════════════════════════════════╝`,
    visualTitle: 'Store',
    visualType: 'ecommerce',
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
      'A Canadian real estate company launching luxury villa rentals on Turkey\'s coast needed a digital presence that matched the properties—sophisticated, immersive, and conversion-focused. Peak booking season was 6 weeks away.',
    asciiArt: `     ╔══════════════════════════════════════════════════╗
     ║            VILLA WEBSITE PERFORMANCE             ║
     ╠══════════════════════════════════════════════════╣
     ║                                                  ║
     ║   PROJECT TIMELINE        PAGE LOAD SPEED       ║
     ║   ┌────────────────┐      ┌────────────────┐    ║
     ║   │                │      │  INDUSTRY  US  │    ║
     ║   │   6 WEEKS      │      │     █          │    ║
     ║   │   TO LAUNCH    │      │     █          │    ║
     ║   │                │      │     █     █    │    ║
     ║   │  ▓▓▓▓▓▓▓▓▓▓▓▓  │      │    5s    <3s   │    ║
     ║   └────────────────┘      └────────────────┘    ║
     ║                                                  ║
     ║   PROPERTIES SHOWCASE                           ║
     ║   ┌──────────────────────────────────────────┐  ║
     ║   │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐│  ║
     ║   │  │VILLA│ │VILLA│ │VILLA│ │VILLA│ │VILLA││  ║
     ║   │  │  1  │ │  2  │ │  3  │ │  4  │ │  5  ││  ║
     ║   │  │ ◉◉◉ │ │ ◉◉◉ │ │ ◉◉◉ │ │ ◉◉◉ │ │ ◉◉◉ ││  ║
     ║   │  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘│  ║
     ║   │            5 VILLAS LIVE                 │  ║
     ║   └──────────────────────────────────────────┘  ║
     ║                                                  ║
     ╚══════════════════════════════════════════════════╝`,
    visualTitle: 'Villa',
    visualType: 'hospitality',
    results: [
      { value: '6', label: 'Weeks to Launch' },
      { value: '<3s', label: 'Load Time' },
      { value: '5', label: 'Villas Live' },
    ],
    solution:
      'Custom WordPress theme with full-screen hero videos, parallax scrolling, and high-resolution galleries. Conversion-optimized UX with strategic inquiry form placement. Image pipeline delivering visual quality at fast load speeds.',
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
    question: 'What industries does Karavan IT Solutions specialize in?',
    answer:
      'We specialize in fintech, healthcare, travel, e-commerce, and property management. Our case studies showcase successful projects including enterprise payment systems, mobile banking apps, healthcare compliance platforms, travel booking systems, and IoT-integrated property management solutions.',
  },
  {
    question: 'What results can I expect from working with Karavan IT?',
    answer:
      'Our case studies show consistent, measurable results: 85% faster processing times, 99.9% system uptime, 40% cost reduction, 60% faster decision-making with AI analytics, and 3x performance improvements through cloud migration.',
  },
  {
    question: 'Do you work with startups or only enterprises?',
    answer:
      'We work with businesses of all sizes, from funded startups to Fortune 500 enterprises. Our scalable solutions are designed to grow with your business, whether you\'re processing your first transactions or handling millions daily.',
  },
  {
    question: 'What technologies does Karavan IT Solutions use?',
    answer:
      'We use industry-leading technologies including React, Node.js, Python, AWS, TypeScript, Docker, Kubernetes, MongoDB, PostgreSQL, and TensorFlow. Our stack is chosen based on each project\'s specific requirements for scalability, security, and performance.',
  },
  {
    question: 'Where is Karavan IT Solutions located?',
    answer:
      'We\'re headquartered in Niagara, Ontario, Canada. We serve clients across North America and globally, with experience delivering projects for companies in Canada, the United States, and international markets.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on complexity. MVP development typically takes 3-4 months, while enterprise solutions may require 6-12 months. We provide detailed timelines during our discovery phase, with regular milestones and transparent progress tracking.',
  },
];

function getCategoryColor(category: string, visualType: string): string {
  const colorMap: Record<string, string> = {
    'Enterprise': 'bg-blue-600',
    'Travel & Tourism': 'bg-orange-500',
    'Information Security': 'bg-purple-600',
    'Mobile & Mobility': 'bg-pink-600',
    'Data Engineering': 'bg-red-600',
    'E-Commerce': 'bg-green-600',
  };
  return colorMap[category] || 'bg-blue-600';
}

function ResultsBox({ results }: { results: Array<{ value: string; label: string }> }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-6">
      <div className="flex items-center gap-2 mb-4 text-green-600 font-semibold text-xs uppercase tracking-wider">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        Results Delivered
      </div>
      <div className="grid grid-cols-3 gap-4">
        {results.map((result, idx) => (
          <div key={idx} className="text-center">
            <div className="text-2xl font-bold text-blue-600 leading-none mb-1">{result.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-tight">{result.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SolutionBox({ solution }: { solution: string }) {
  return (
    <div className="bg-blue-50 rounded-lg p-6 mb-6">
      <div className="flex items-center gap-2 mb-3 text-blue-600 font-semibold text-xs uppercase tracking-wider">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        How We Solved It
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{solution}</p>
    </div>
  );
}

function ServiceTags({ services }: { services: string[] }) {
  return (
    <div className="mt-6">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Services Delivered</div>
      <div className="flex flex-wrap gap-2">
        {services.map((service, idx) => (
          <span key={idx} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded border border-gray-200">
            {service}
          </span>
        ))}
      </div>
    </div>
  );
}

function AsciiVisual({ asciiArt, visualTitle, visualType }: { asciiArt: string; visualTitle: string; visualType: string }) {
  const colorClasses: Record<string, string> = {
    fintech: 'text-cyan-400',
    travel: 'text-orange-400',
    security: 'text-blue-400',
    mobile: 'text-purple-400',
    data: 'text-red-400',
    ecommerce: 'text-green-400',
    hospitality: 'text-cyan-300',
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-cyan-500/20">
      <div className="aspect-video bg-gradient-to-b from-slate-900 via-slate-950 to-blue-900 flex flex-col items-center justify-center relative overflow-hidden p-8">
        {/* Ambient glow background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-48 h-40 rounded-full blur-3xl bg-cyan-500/10 animate-pulse" />
        </div>

        {/* ASCII Art */}
        <pre className={`font-mono text-xs leading-tight whitespace-pre relative z-10 ${colorClasses[visualType] || 'text-cyan-400'} drop-shadow-lg`}>
          {asciiArt}
        </pre>

        {/* Visual Title */}
        <div className={`text-xs font-semibold uppercase tracking-wider relative z-10 mt-4 ${colorClasses[visualType] || 'text-cyan-400'} drop-shadow-lg`}>
          {visualTitle}
        </div>
      </div>
    </div>
  );
}

function Accordion() {
  return (
    <div className="flex flex-col gap-3 max-w-2xl mx-auto">
      {faqs.map((faq, idx) => (
        <details
          key={idx}
          className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all hover:border-blue-300 open:border-blue-300 open:shadow-md"
          itemScope
          itemType="https://schema.org/Question"
        >
          <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-gray-900 hover:text-blue-600">
            <h3 className="text-sm md:text-base" itemProp="name">{faq.question}</h3>
            <div className="w-6 h-6 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center transition-transform group-open:rotate-180 [details_&>summary_&_div]:rotate-180">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </summary>
          <div
            className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100"
            itemScope
            itemType="https://schema.org/Answer"
            itemProp="acceptedAnswer"
          >
            <p itemProp="text">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://karavanhub.com/#organization',
                name: 'Karavan IT Solutions',
                url: 'https://karavanhub.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://karavanhub.com/images/logo.png',
                  width: 200,
                  height: 60,
                },
                description:
                  'Enterprise IT consulting and software development company specializing in cloud migration, AI automation, and digital transformation.',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Niagara',
                  addressRegion: 'ON',
                  addressCountry: 'CA',
                },
                areaServed: [
                  { '@type': 'City', name: 'Niagara' },
                  { '@type': 'Country', name: 'Canada' },
                  { '@type': 'Country', name: 'United States' },
                ],
              },
              {
                '@type': 'WebPage',
                '@id': 'https://karavanhub.com/case-studies/#webpage',
                url: 'https://karavanhub.com/case-studies',
                name: 'Case Studies | Karavan IT Solutions',
                description:
                  'Explore real-world case studies showcasing how Karavan IT Solutions helps businesses solve complex challenges with custom software, cloud migration, AI automation, and enterprise solutions.',
                breadcrumb: {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://karavanhub.com' },
                    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://karavanhub.com/case-studies' },
                  ],
                },
              },
              {
                '@type': 'ItemList',
                name: 'Karavan IT Solutions Case Studies',
                description: 'Collection of enterprise IT case studies demonstrating real business results',
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
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      <main id="main-content" role="main">
        {/* HERO SECTION */}
        <section className="relative py-32 text-center overflow-hidden" style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #2563eb 100%)',
        }}>
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

          <div className="container-main relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Real Problems.<br />
              <span className="text-cyan-400">Real Solutions.</span>
              <br />Real Results.
            </h1>
            <p className="text-lg text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed">
              No fluff. No vanity metrics. Just honest stories of how we helped businesses solve real challenges—with technology that actually works.
            </p>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white/95 hover:shadow-xl hover:-translate-y-0.5"
            >
              View Our Work
              <ChevronRight size={20} />
            </a>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="case-studies" className="py-24">
          {caseStudies.map((study, idx) => (
            <section key={study.id} className="border-b border-gray-200 py-20 last:border-b-0">
              <div className="container-main">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${study.layout === 'reverse' ? 'lg:grid-cols-2' : ''}`}>
                  {study.layout === 'reverse' ? (
                    <>
                      {/* Content left on desktop, comes first on mobile */}
                      <div className="order-2 lg:order-2">
                        <div className="flex gap-2 mb-4 flex-wrap">
                          <span className={`px-3 py-1 text-white text-xs font-semibold uppercase rounded-full ${getCategoryColor(study.category, study.visualType)}`}>
                            {study.category}
                          </span>
                          {study.categoryTag !== study.category && (
                            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold uppercase rounded-full">
                              {study.categoryTag}
                            </span>
                          )}
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">{study.title}</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">{study.intro}</p>
                        <ResultsBox results={study.results} />
                        <SolutionBox solution={study.solution} />
                        <ServiceTags services={study.services} />
                      </div>
                      {/* Visual right on desktop */}
                      <div className="order-1 lg:order-1">
                        <AsciiVisual
                          asciiArt={study.asciiArt}
                          visualTitle={study.visualTitle}
                          visualType={study.visualType}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Visual left on desktop */}
                      <div>
                        <AsciiVisual
                          asciiArt={study.asciiArt}
                          visualTitle={study.visualTitle}
                          visualType={study.visualType}
                        />
                      </div>
                      {/* Content right on desktop */}
                      <div>
                        <div className="flex gap-2 mb-4 flex-wrap">
                          <span className={`px-3 py-1 text-white text-xs font-semibold uppercase rounded-full ${getCategoryColor(study.category, study.visualType)}`}>
                            {study.category}
                          </span>
                          {study.categoryTag !== study.category && (
                            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold uppercase rounded-full">
                              {study.categoryTag}
                            </span>
                          )}
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">{study.title}</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">{study.intro}</p>
                        <ResultsBox results={study.results} />
                        <SolutionBox solution={study.solution} />
                        <ServiceTags services={study.services} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </section>
          ))}
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 bg-amber-50">
          <div className="container-main">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Common questions about our case studies and how we deliver results for our clients.
              </p>
            </div>
            <Accordion />
          </div>
        </section>

        {/* TECH PARTNERS SECTION */}
        <section className="py-24 bg-gray-50">
          <div className="container-main text-center">
            <div className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">Technology Stack</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-16">Built With Industry Leaders</h2>
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
                  <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4643a9.8753 9.8753 0 0 0-1.1549-.0706c-1.0919-.0142-2.0634.2091-2.9187.6654C9.1654.3952 7.5997-.0373 5.9051.0027 4.0283.0474 2.4936.7674 1.404 2.1627.4627 3.3684.0386 5.0085.0036 6.9695c-.0027.1572-.0036.3144-.0036.4701 0 2.6441.7752 6.1227 2.0755 9.3296.4793 1.1829.9774 2.1687 1.4803 2.9289.6078.9177 1.1867 1.4472 1.7595 1.6144.3914.1144.8006.0787 1.1531-.0973.4926-.2456.9324-.7548 1.2195-1.4036.1725-.3885.364-1.0252.4865-1.7336.0122.0144.0245.029.0368.0435.1834.2175.3696.4247.5782.6023.0383.0326.0772.0646.1167.0962-.1792.4145-.2818.8858-.2818 1.4035 0 .9752.3552 1.7722 1.0283 2.3072.7153.5685 1.7107.8573 2.9584.8573.8157 0 1.7035-.0966 2.6423-.2878a.217.217 0 0 0 .0513-.0137c.5765-.1999 1.1455-.4357 1.6893-.7016.5765.2005 1.2174.3078 1.9098.3191h.0135c1.3714 0 2.5298-.4988 3.3541-1.4434.8291-.9501 1.2665-2.2641 1.2665-3.8005 0-.0771-.0021-.1621-.0042-.2475l.0026.0029a.6186.6186 0 0 0 .0127-.1696zm-3.7247-1.2373l-.0047.0124c-.0473.1236-.0969.2505-.1477.3795a8.5765 8.5765 0 0 1-1.4808 2.4759c-.937 1.0793-2.0901 1.6281-3.4259 1.6281-.1422 0-.2891-.0085-.4369-.0254-.0717-.0081-.1442-.0171-.2173-.0271a.5583.5583 0 0 1-.0138-.0023c-.0013-.0002-.0025-.0004-.0037-.0007-.0013-.0004-.0025-.0008-.0037-.0011-.6043-.1449-1.1378-.4743-1.5833-.9746-.4483-.5033-.7882-1.1427-.9985-1.8733-.0013-.0047-.0025-.0094-.0037-.0141-.0011-.0041-.0022-.0083-.0032-.0125-.0609-.2241-.1106-.4575-.1473-.6972-.0398-.2596-.0605-.5212-.0605-.7784 0-.2861.0263-.5688.0787-.8431a4.1823 4.1823 0 0 1 .6127-1.5724c.2914-.4419.6547-.8108 1.0794-1.0953a4.4002 4.4002 0 0 1 2.4482-.758c.1778 0 .3588.0115.5396.0346.3666.0465.7195.1381 1.0513.2725a4.4158 4.4158 0 0 1 1.6412 1.1512c.4709.5268.8186 1.1488 1.0337 1.8497.2067.6739.296 1.3839.2646 2.1095zm-6.8827-9.6051c-.0434-.1775-.0902-.3512-.1412-.5209-.0523-.1736-.1068-.3465-.1634-.5185.0018-.0037.0036-.0075.0053-.0113a.3557.3557 0 0 1 .0325-.0583c.0133-.0212.0266-.0393.0396-.0539a.2378.2378 0 0 1 .0419-.0352c.0152-.0105.032-.0175.0523-.0219a.6713.6713 0 0 1 .1099-.0141 4.647 4.647 0 0 1 .5307-.0196c1.3063.0174 2.3923.5413 3.2259 1.5581.0261.0318.0517.0639.077.0963-.0456.0222-.0907.045-.1352.0684-.0619.0328-.1231.0668-.1837.1019-.0612.0353-.1219.0716-.182.1089-.0608.0377-.1215.0767-.1816.1165l-.0174.0117a13.036 13.036 0 0 0-.1761.1245c-.2067.1524-.4037.3169-.5887.4929l-.0027.0026c-.0127.0122-.0255.0243-.0383.0364a9.8752 9.8752 0 0 0-.3573.3736c-.1228.1369-.2406.2793-.3529.4271a8.6407 8.6407 0 0 0-.3311.455 7.5001 7.5001 0 0 0-.2886.4595l-.0192.0333a.0785.0785 0 0 1-.0051.0087 7.4469 7.4469 0 0 0-.4796.9995c-.1466.3587-.2663.7267-.3568 1.1017a6.7776 6.7776 0 0 0-.1702.9299c-.0267.2507-.0408.5006-.0408.7488 0 .0974.0019.1948.0055.2917.0011.0283.0025.0567.0039.085-.0014.0212-.0027.0424-.0038.0636a6.7345 6.7345 0 0 0 .0134 1.1456c-.3923-.1346-.7782-.3018-1.1545-.5003a8.1472 8.1472 0 0 1-.991-.6224c-.31-.2265-.6087-.4725-.8917-.7345a9.4829 9.4829 0 0 1-.7739-.8338 10.5174 10.5174 0 0 1-.6506-.8871c-.207-.3177-.4018-.6506-.5803-.9943a13.0149 13.0149 0 0 1-.4893-1.0932c-.0267-.0683-.0531-.1369-.0791-.2056-.157-.4155-.2982-.8435-.4216-1.2801-.1223-.4322-.2274-.8738-.3144-1.3219a15.5744 15.5744 0 0 1-.1915-1.376c-.039-.3686-.0606-.7421-.0642-1.1185-.0023-.241-.0026-.4736-.001-.6964a16.8983 16.8983 0 0 1 .0419-1.3522 13.8462 13.8462 0 0 1 .2214-1.8697c.1202-.6689.2961-1.3265.5226-1.9539.2246-.6222.5002-1.2128.8188-1.7545.3199-.5441.687-1.0378 1.0928-1.4703a6.3474 6.3474 0 0 1 1.3389-1.088c.5037-.3037 1.0483-.5194 1.6197-.6416.5678-.1213 1.171-.1573 1.7952-.1071.6233.0501 1.2706.1909 1.9273.4186.1168.0406.2349.0842.3541.1311.1129.0447.2265.0925.3402.1432a9.1515 9.1515 0 0 0-.4274.4179c-.0624.0658-.1242.1332-.1852.2018a10.7425 10.7425 0 0 0-.3462.4159 9.9 9.9 0 0 0-.3168.4298 8.8914 8.8914 0 0 0-.2869.4417c-.0894.1499-.1763.3022-.2604.4573a8.5814 8.5814 0 0 0-.2339.4742c-.0726.1595-.1426.3209-.2095.4843-.0675.1645-.132.3305-.193.4982l-.007.0192c-.1361.3752-.2543.7589-.3537 1.1494a10.7307 10.7307 0 0 0-.2182 1.2032c-.0515.4132-.0832.8338-.0935 1.2594a13.0693 13.0693 0 0 0 .0285 1.3107c.0254.4399.0689.8813.13 1.3228.0292.2134.0622.4269.0993.6401.0168.0964.0345.1927.053.2889-.0027.0157-.0053.0314-.0078.0472a6.4459 6.4459 0 0 0-.0717.7065c-.0083.1678-.0099.3354-.0049.5019.005.1658.0165.3301.0347.4928a5.5324 5.5324 0 0 0 .0756.5053c.0169.0937.0376.1867.0618.2785a3.6174 3.6174 0 0 0 .0949.2861c.0385.0983.0827.1938.1328.286.0506.0932.1073.183.1704.2696.0635.0874.1337.1715.2107.2519.0776.0813.1624.1588.2546.2322.093.0741.1935.1437.3016.209.1087.066.2252.1273.3496.1836.125.0568.2582.1083.3996.1544.1422.0463.2929.0869.4522.1217.1601.035.3291.0637.5069.0862.1787.0227.3666.0387.5636.0481.198.0095.4052.0121.6218.0081.2175-.004.4446-.0149.6811-.0326a15.4012 15.4012 0 0 0 .7275-.0664c.2464-.0296.5001-.0671.7606-.1126.2615-.0456.5299-.0993.8047-.1609a17.0929 17.0929 0 0 0 .8351-.2097c.279-.078.5622-.1637.8488-.257l.0163-.0053c.2887-.0942.5798-.1964.8727-.3066l.0143-.0054c.2916-.1099.5841-.2277.8768-.3534.0011-.0005.0022-.0009.0033-.0014.0018-.0008.0037-.0015.0055-.0023l.0108-.0046c.0107-.0046.0214-.0092.032-.0138.0011-.0005.0023-.001.0034-.0014a28.1306 28.1306 0 0 0 .8622-.3969l.0112-.0055a24.554 24.554 0 0 0 .8463-.4407l.0039-.0021.0068-.0037a21.5SEO 21.5SEO 0 0 0 1.6288-1.0056l.004-.0027a18.6248 18.6248 0 0 0 .7773-.5775l.0047-.0037c.0604-.0465.1205-.0935.1804-.1408.0599-.0474.1195-.0954.1787-.1438.1182-.0968.2348-.1959.3496-.2975.1152-.1021.2287-.207.3404-.3145.1119-.1079.2222-.2186.3308-.3321.1086-.1138.2154-.2305.3204-.35.1049-.1197.2079-.2423.3091-.3678.1009-.1254.1998-.254.2969-.3855.0968-.1313.1914-.266.2839-.4036.0921-.1373.1818-.278.2693-.422.0871-.1438.1716-.291.2535-.4414.0818-.1504.1607-.3043.2369-.4616.076-.1571.1491-.3178.2193-.4821.07-.1641.137-.3318.201-.5032.0638-.1713.1246-.3464.1824-.525.0577-.1786.1123-.3611.1638-.5475a13.3381 13.3381 0 0 0 .2672-1.1623c.0367-.2003.0695-.4038.0986-.6104a12.6264 12.6264 0 0 0 .1204-1.2607c.0146-.2129.0251-.4283.0316-.6462a11.3068 11.3068 0 0 0-.0076-.6811c-.0113-.2266-.0279-.4549-.0498-.6848a10.1594 10.1594 0 0 0-.0927-.6796 9.0534 9.0534 0 0 0-.1367-.6698 7.5556 7.5556 0 0 0-.1816-.6556 6.1424 6.1424 0 0 0-.228-.6368 4.8776 4.8776 0 0 0-.2763-.6133 3.7716 3.7716 0 0 0-.3268-.5849 2.8437 2.8437 0 0 0-.3802-.5516 2.0869 2.0869 0 0 0-.437-.5131 1.4896 1.4896 0 0 0-.4978-.4691 1.0309 1.0309 0 0 0-.5637-.42.6813.6813 0 0 0-.3006-.0355.8515.8515 0 0 0-.2967.0595c-.0988.0394-.1932.0921-.2836.158z"/>
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
        <section className="py-24" style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)' }}>
          <div className="container-main">
            <div className="bg-white rounded-3xl p-16 max-w-2xl mx-auto shadow-lg border border-blue-100">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Ready to discuss your project?</h2>
              <p className="text-gray-600 text-lg text-center mb-8">
                Whether you're modernizing legacy systems, building AI-powered solutions, or scaling for growth—let's talk.
              </p>
              <div className="text-center">
                <button className="bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto">
                  Start the Conversation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

import React from 'react';
