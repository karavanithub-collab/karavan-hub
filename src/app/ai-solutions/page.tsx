import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import AccordionWrapper from '@/components/ai-solutions/AccordionWrapper';

export const metadata: Metadata = {
  title: 'AI Solutions | Karavan Hub - AI Automation & Consulting in Niagara',
  description:
    'Make AI work for your business. Vertical AI automation, custom AI software solutions, and strategic AI consulting. 85% faster processing, 92% fewer errors.',
  keywords:
    'AI solutions, artificial intelligence, business automation, vertical AI, AI integration, machine learning, AI consulting, AI strategy, process automation',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://karavanhub.com/ai-solutions',
    languages: {
      'en-CA': 'https://karavanhub.com/ai-solutions',
      en: 'https://karavanhub.com/ai-solutions',
    },
  },
  openGraph: {
    type: 'website',
    title: 'AI Solutions for Business | Karavan IT HUB',
    description:
      'Make AI work for your business. Vertical AI automation, custom solutions, and strategic consulting.',
    url: 'https://karavanhub.com/ai-solutions',
    siteName: 'Karavan IT HUB',
    locale: 'en_CA',
    images: [
      {
        url: 'https://karavanhub.com/images/og-ai-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'Karavan Hub AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Solutions for Business | Karavan IT HUB',
    description:
      'Make AI work for your business. Vertical AI automation, custom AI software, and strategic consulting.',
    images: ['https://karavanhub.com/images/twitter-ai-solutions.jpg'],
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Niagara, Ontario',
    'geo.position': '43.0896;-79.0849',
    ICBM: '43.0896, -79.0849',
  },
};

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
        'Artificial Intelligence',
        'AI Automation',
        'Custom AI Agents',
        'Retrieval-Augmented Generation',
        'LLM Fine-Tuning',
        'Custom Software Development',
        'Web Application Development',
        'Data Analytics',
        'Digital Transformation',
        'AI Strategy Consulting',
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
      '@id': 'https://karavanhub.com/ai-solutions/#webpage',
      name: 'AI Solutions for Business',
      url: 'https://karavanhub.com/ai-solutions',
      datePublished: '2026-01-15',
      dateModified: '2026-02-28',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://karavanhub.com/#website',
        name: 'Karavan Hub',
        url: 'https://karavanhub.com',
      },
      about: { '@id': 'https://karavanhub.com/ai-solutions/#service' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['#hero-heading', '#automation-heading', '#aisoftware-heading', '#strategy-heading'],
      },
      mentions: [
        { '@type': 'Thing', name: 'OpenAI', url: 'https://openai.com' },
        { '@type': 'Thing', name: 'Anthropic Claude', url: 'https://anthropic.com' },
        { '@type': 'Thing', name: 'LangChain', url: 'https://langchain.com' },
        { '@type': 'Thing', name: 'Retrieval-Augmented Generation' },
        { '@type': 'Thing', name: 'Large Language Models' },
        { '@type': 'Thing', name: 'Hugging Face', url: 'https://huggingface.co' },
        { '@type': 'Thing', name: 'Microsoft Semantic Kernel' },
        { '@type': 'Thing', name: 'Pinecone', url: 'https://pinecone.io' },
        { '@type': 'Thing', name: 'Azure OpenAI Service' },
        { '@type': 'Thing', name: 'AWS Bedrock' },
      ],
    },
    // Service entity
    {
      '@type': 'Service',
      '@id': 'https://karavanhub.com/ai-solutions/#service',
      name: 'AI Solutions',
      description:
        'AI solutions for businesses including vertical AI automation, custom AI software development, and strategic AI consulting services.',
      provider: { '@id': 'https://karavanhub.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'State', name: 'Ontario' },
        { '@type': 'City', name: 'Niagara' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Solutions Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Vertical AI Automation & Integration',
              description:
                'Industry-specific AI solutions that automate complex workflows, integrate with existing systems, and deliver measurable ROI.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Software Solutions',
              description:
                'Custom AI-powered applications including intelligent document processing, predictive analytics, and natural language interfaces.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Strategy Consulting',
              description:
                'Strategic AI roadmapping, use case identification, ROI analysis, and implementation planning for sustainable AI adoption.',
            },
          },
        ],
      },
    },
    // FAQ entity (AEO: expanded with pricing + industry questions)
    {
      '@type': 'FAQPage',
      '@id': 'https://karavanhub.com/ai-solutions/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is vertical AI and how is it different from general AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Vertical AI is purpose-built for specific industries and use cases, unlike general AI tools. It understands your domain's unique terminology, workflows, and compliance requirements, delivering higher accuracy and faster ROI.",
          },
        },
        {
          '@type': 'Question',
          name: 'How can AI automation help my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI automation can reduce processing time by up to 85%, minimize errors by 92%, and save hundreds of hours on repetitive tasks. It handles document processing, data extraction, customer inquiries, and complex decision workflows.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need technical expertise to implement AI solutions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Karavan IT HUB handles the technical complexity while you focus on your business. We provide end-to-end implementation, training, and ongoing support to ensure successful AI adoption.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to see ROI from AI implementation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most clients see measurable improvements within 30-90 days of implementation. Quick wins often include reduced processing times, fewer manual errors, and freed-up staff capacity for higher-value work.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does AI automation cost for a small business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI automation costs vary based on complexity. Simple chatbot implementations start around $5,000-$15,000, while custom AI agent systems range from $25,000-$75,000+. Karavan IT HUB provides free consultations to scope your specific needs and give you a realistic budget before any commitment.',
          },
        },
        {
          '@type': 'Question',
          name: 'What industries benefit most from AI automation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Healthcare, fintech, e-commerce, logistics, real estate, and government see the strongest ROI from AI automation. Each has high-volume repetitive processes that AI handles well: claims processing, fraud detection, order fulfillment, route optimization, lease management, and citizen services.',
          },
        },
      ],
    },
    // Breadcrumb
    {
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
          name: 'AI Solutions',
          item: 'https://karavanhub.com/ai-solutions',
        },
      ],
    },
    // HowTo
    {
      '@type': 'HowTo',
      name: 'How Karavan IT HUB Delivers AI Solutions',
      description:
        'Our process for building custom AI solutions for businesses in Canada.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Discovery',
          text: 'We learn how your business operates and identify where AI can remove friction and create measurable value.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Strategy',
          text: 'We map opportunities, assess AI readiness, and build a prioritized roadmap that balances quick wins with long-term transformation.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Build and Deploy',
          text: 'Senior engineers build your AI solution with regular check-ins, integrating with your existing systems and workflows.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Optimize and Scale',
          text: 'We monitor performance, refine models, and scale successful implementations across your organization.',
        },
      ],
    },
  ],
};

export default function AISolutionsPage() {
  // AI Automation & Integration Accordion Items
  const automationItems = [
    {
      title: 'AI Agents',
      content: (
        <div>
          <p className="text-sm text-[#4a4a68] leading-relaxed mb-3">
            Your best employee works 24/7, never calls in sick, and handles four things at once.
            That&apos;s what an AI agent does. We build them for customer interactions, data processing,
            business workflows, and internal ops.
          </p>
          <ul className="accordion-list space-y-3">
            <li>
              <strong>Customer Service Agents:</strong> Handle inquiries, resolve issues, escalate when
              needed, track satisfaction
            </li>
            <li>
              <strong>Research Agents:</strong> Gather information, analyze data, generate reports, flag anomalies
            </li>
            <li>
              <strong>Workflow Agents:</strong> Coordinate tasks across systems, trigger actions
            </li>
            <li>
              <strong>Data Processing Agents:</strong> Extract, transform, validate, route information
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Custom AI Chatbots',
      content: (
        <div>
          <p className="text-sm text-[#4a4a68] leading-relaxed mb-3">
            Most chatbots are terrible. Yours won&apos;t be. We train them on your actual data and wire
            them into your systems. They give real answers. Not &apos;let me transfer you to an agent.&apos;
          </p>
          <ul className="accordion-list space-y-3">
            <li>
              <strong>Customer Support:</strong> Answer questions, troubleshoot issues, process requests, collect feedback
            </li>
            <li>
              <strong>Internal Helpdesk:</strong> IT support, HR inquiries, policy questions, onboarding
            </li>
            <li>
              <strong>Sales Qualification:</strong> Engage leads, qualify prospects, schedule meetings, track follow-ups
            </li>
            <li>
              <strong>Onboarding:</strong> Guide new customers or employees through processes
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'RAG Systems',
      content: (
        <div>
          <p className="text-sm text-[#4a4a68] leading-relaxed mb-3">
            Your company has years of knowledge buried in PDFs, wikis, and shared drives nobody opens.
            RAG pulls it out and gives your team real answers. With citations, so they can trust it.
          </p>
          <ul className="accordion-list space-y-3">
            <li>
              <strong>Knowledge Bases:</strong> Internal documentation, policies, procedures, SOPs
            </li>
            <li>
              <strong>Compliance Q&A:</strong> Regulatory requirements, audit preparation
            </li>
            <li>
              <strong>Research Tools:</strong> Scientific literature, market research
            </li>
            <li>
              <strong>Customer Assistants:</strong> Product documentation, support articles
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'LLM Fine-Tuning',
      content: (
        <div>
          <p className="text-sm text-[#4a4a68] leading-relaxed mb-3">
            Off-the-shelf AI doesn&apos;t know your industry&apos;s language. We take a base model and teach it
            how your business actually talks. Your terminology and your processes. The edge cases nobody else accounts for.
          </p>
          <ul className="accordion-list space-y-3">
            <li>
              <strong>Domain Adaptation:</strong> Train on your industry vocabulary
            </li>
            <li>
              <strong>Task Specialization:</strong> Optimize for your specific use cases
            </li>
            <li>
              <strong>Output Formatting:</strong> Match your required formats and structures
            </li>
            <li>
              <strong>Performance Optimization:</strong> Balance speed and cost against accuracy
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'AI-Powered Automation',
      content: (
        <div>
          <p className="text-sm text-[#4a4a68] leading-relaxed mb-3">
            Stop paying people to do what machines should handle. Document processing and data
            extraction that actually works.
          </p>
          <ul className="accordion-list space-y-3">
            <li>
              <strong>Document Processing:</strong> Invoices, contracts, forms, applications
            </li>
            <li>
              <strong>Data Extraction:</strong> Pull structured data from unstructured sources
            </li>
            <li>
              <strong>Workflow Routing:</strong> Tickets, approvals, routing, notifications
            </li>
            <li>
              <strong>Web Scraping:</strong> Data collection, monitoring, competitive intelligence, price tracking
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'From Our Work',
      content: (
        <ul className="list-none p-0 pb-5 m-0">
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>
              <strong>Vendor Payment System:</strong> Built automated payment processing for a multi-vendor
              platform. Cut manual reconciliation by 70% and eliminated payment delays
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>
              <strong>Hotel Booking Integration:</strong> Connected booking engine to legacy property management
              system using custom middleware. Real-time availability updates, zero double-bookings
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>
              <strong>E-Commerce Order Flow:</strong> Automated order processing pipeline connecting Shopify to
              fulfillment centers. Order-to-ship time went from 48 hours to same-day
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>
              Own your automation instead of renting someone else&apos;s limitations
            </span>
          </li>
        </ul>
      ),
      isHighlight: true,
    },
  ];

  // AI Software Solutions Accordion Items
  const softwareItems = [
    {
      title: 'Backend Development',
      content: (
        <div>
          <p className="text-sm text-[#4a4a68] leading-relaxed mb-3">
            Nobody sees the backend, but everyone notices when it breaks. We build the systems that
            store your data, process your transactions, and keep running at 3 AM on a Friday. Now with
            AI baked in, so your software gets smarter the longer it runs.
          </p>
          <ul className="tech-list space-y-2">
            <li>.NET Core / ASP.NET Core</li>
            <li>Python (Django, FastAPI)</li>
            <li>Node.js / Express.js</li>
            <li>Microservices with Docker & Kubernetes</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Frontend Development',
      content: (
        <div>
          <p className="text-sm text-[#4a4a68] leading-relaxed mb-3">
            This is the part people actually see. If it&apos;s slow or confusing, nothing else matters.
            We build interfaces that load fast, look sharp on any screen, and turn complicated
            workflows into something your team doesn&apos;t dread using.
          </p>
          <ul className="tech-list space-y-2">
            <li>React / Next.js</li>
            <li>Angular</li>
            <li>Vue.js</li>
            <li>TypeScript / JavaScript</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'API Development',
      content: (
        <div>
          <p className="text-sm text-[#4a4a68] leading-relaxed mb-3">
            Right now, someone on your team is copying data from one system to another. That&apos;s not
            their job. It&apos;s a wiring problem. We connect your CRM, accounting, inventory, and email
            so information flows on its own.
          </p>
          <ul className="tech-list space-y-2">
            <li>RESTful APIs</li>
            <li>GraphQL</li>
            <li>Third-party integrations</li>
            <li>Webhook & event-driven architecture</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Mobile Applications',
      content: (
        <div>
          <p className="text-sm text-[#4a4a68] leading-relaxed mb-3">
            Your team shouldn&apos;t need to be at a desk to get things done. We build mobile apps that
            let them place orders, approve requests, check inventory, and handle the urgent stuff
            from wherever they are.
          </p>
          <ul className="tech-list space-y-2">
            <li>React Native (iOS & Android)</li>
            <li>Flutter</li>
            <li>Swift (iOS native)</li>
            <li>Kotlin (Android native)</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Data Analytics',
      content: (
        <div>
          <p className="text-sm text-[#4a4a68] leading-relaxed mb-3">
            You have more data than you think. The problem is getting answers out of it without a
            CS degree. We build dashboards where you ask questions in plain English and get answers
            that actually make sense. No data scientist required.
          </p>
          <ul className="tech-list space-y-2">
            <li>Power BI / Tableau</li>
            <li>Python (Pandas, PySpark)</li>
            <li>SQL & Database optimization</li>
            <li>Custom dashboard development</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'From Our Work',
      content: (
        <ul className="list-none p-0 pb-5 m-0">
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>
              <strong>RFP Response System:</strong> Built RAG-powered application that searches past proposals
              and generates draft responses. RFP turnaround dropped from 2 weeks to 3 days. Win rates went up
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>
              <strong>Financial Document Analysis:</strong> Developed AI system for extracting and validating data
              from financial statements. 92% accuracy with human-in-the-loop verification
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>
              <strong>Compliance Knowledge Base:</strong> Created searchable AI assistant trained on regulatory
              documentation. Staff now find compliance answers in seconds instead of hours
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>
              Custom AI software that adapts to your processes and improves over time
            </span>
          </li>
        </ul>
      ),
      isHighlight: true,
    },
  ];

  // AI Strategy Consulting Accordion Items
  const strategyItems = [
    {
      title: 'AI Readiness Assessment',
      content: (
        <p>
          Before you spend a dollar on AI, we figure out if you&apos;re actually ready for it. We look
          at your data, your systems, and where the gaps are. Then we give you an honest answer about
          what needs to happen first.
        </p>
      ),
    },
    {
      title: 'Opportunity Mapping',
      content: (
        <p>
          Identify use cases with realistic ROI projections. Not every process needs AI, and we help you
          focus on the ones that will deliver measurable value.
        </p>
      ),
    },
    {
      title: 'Technology Selection',
      content: (
        <p>
          Vendor-neutral recommendations on platforms and tools. We pick what works for your situation,
          not what earns us the biggest referral fee.
        </p>
      ),
    },
    {
      title: 'Implementation Roadmaps',
      content: (
        <p>
          Not everything needs to happen at once. We map out what to build first and what to skip
          entirely. The rest gets sequenced around your budget and your team&apos;s bandwidth.
        </p>
      ),
    },
    {
      title: 'Risk Assessment',
      content: (
        <p>
          We&apos;d rather have the uncomfortable conversation now than a costly one later. We dig into
          technical risks and compliance gaps. Especially the stuff nobody wants to talk about before
          you&apos;re mid-build and out of options.
        </p>
      ),
    },
    {
      title: 'From Our Work',
      content: (
        <ul className="list-none p-0 pb-5 m-0">
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>
              <strong>Legacy Modernization Roadmap:</strong> Assessed monolithic .NET application and designed
              microservices migration strategy. Client modernized incrementally without disrupting operations
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>
              <strong>AI Opportunity Assessment:</strong> Evaluated 12 potential AI use cases for logistics company
              and recommended 4 high-impact initiatives while advising against 8 that would not deliver meaningful ROI
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>
              Know where AI fits before you invest, not after
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>
              Avoid the costly pilots that never reach production
            </span>
          </li>
        </ul>
      ),
      isHighlight: true,
    },
  ];

  return (
    <>
      {/* JSON-LD Structured Data (consolidated @graph) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {/* ============================================
           SECTION 1: HERO
           ============================================ */}
      <section
        className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] relative overflow-hidden min-h-[80vh] lg:min-h-[100vh] flex items-center pt-[90px] md:pt-[100px] pb-[60px] md:pb-[80px]"
        aria-labelledby="hero-heading"
      >
        {/* Background Orbs — smooth 12s drift */}
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full opacity-40" aria-hidden="true" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)', filter: 'blur(80px)', animation: 'orbFloat 12s ease-in-out infinite', willChange: 'transform', transform: 'translateZ(0)' }}></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full opacity-40" aria-hidden="true" style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)', filter: 'blur(80px)', animation: 'orbFloat 12s ease-in-out infinite', animationDelay: '-4s', willChange: 'transform', transform: 'translateZ(0)' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[350px] h-[350px] rounded-full opacity-40" aria-hidden="true" style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', filter: 'blur(80px)', animation: 'orbFloat 12s ease-in-out infinite', animationDelay: '-8s', willChange: 'transform', transform: 'translateZ(0)' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

        {/* Floating particles — visible on all viewports */}
        <div className="absolute w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" aria-hidden="true" style={{ top: '15%', left: '10%', boxShadow: '0 0 15px rgba(147,197,253,0.4)', willChange: 'transform', transform: 'translateZ(0)' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-[rgba(139,92,246,0.7)] rounded-full animate-float" aria-hidden="true" style={{ top: '30%', right: '15%', animationDelay: '-2s', boxShadow: '0 0 15px rgba(139,92,246,0.4)', willChange: 'transform', transform: 'translateZ(0)' }}></div>
        <div className="absolute w-1 h-1 bg-[rgba(34,211,238,0.8)] rounded-full animate-float" aria-hidden="true" style={{ bottom: '25%', left: '20%', animationDelay: '-4s', boxShadow: '0 0 15px rgba(34,211,238,0.4)', willChange: 'transform', transform: 'translateZ(0)' }}></div>
        <div className="absolute w-1 h-1 bg-[rgba(147,197,253,0.5)] rounded-full animate-float" aria-hidden="true" style={{ top: '50%', right: '25%', animationDelay: '-1s', boxShadow: '0 0 15px rgba(147,197,253,0.4)', willChange: 'transform', transform: 'translateZ(0)' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-[rgba(139,92,246,0.6)] rounded-full animate-float" aria-hidden="true" style={{ bottom: '35%', right: '10%', animationDelay: '-3s', boxShadow: '0 0 15px rgba(139,92,246,0.4)', willChange: 'transform', transform: 'translateZ(0)' }}></div>
        <div className="absolute w-1 h-1 bg-[rgba(34,211,238,0.7)] rounded-full animate-float" aria-hidden="true" style={{ bottom: '20%', left: '35%', animationDelay: '-5s', boxShadow: '0 0 15px rgba(34,211,238,0.4)', willChange: 'transform', transform: 'translateZ(0)' }}></div>

        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}></div>

        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
            {/* Hero Text */}
            <div className="max-w-[560px] text-white">
              <h1
                id="hero-heading"
                className="font-headline font-bold text-white leading-[1.05] mb-7 tracking-[-1.5px]"
                style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}
              >
                Make AI work for{' '}
                <span className="block bg-gradient-to-r from-white to-[#22d3ee] bg-clip-text text-transparent">
                  your business.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/75 max-w-[500px] leading-relaxed font-body mb-9">
                Not the other way around. We build AI solutions that understand your industry and plug into the systems you already use. Measurable results, not just promises.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-white text-[#1e3a8a] px-9 py-[18px] rounded-lg text-[15px] font-semibold leading-none uppercase tracking-[0.5px] no-underline transition-all duration-300 hover:bg-white/95 hover:-translate-y-0.5 w-full sm:w-auto"
                  style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)' }}
                >
                  Book Free AI Consultation
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-[15px] leading-none uppercase tracking-[0.5px] transition-all duration-300 hover:bg-white/10 hover:border-white/50 w-full sm:w-auto"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>

            {/* Hero Visual - Neural Network ASCII */}
            <div className="hidden lg:flex items-center justify-center relative" aria-hidden="true">
              <div className="relative w-full max-w-[650px] min-h-[500px] flex items-center justify-center">
                {/* Ambient Glow Layers */}
                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[450px] bg-gradient-radial from-[rgba(139,92,246,0.12)] to-transparent blur-[80px] animate-ambientPulse"></div>
                <div
                  className="absolute top-[30%] left-[45%] -translate-x-1/2 w-[350px] h-[300px] bg-gradient-radial from-[rgba(34,211,238,0.1)] to-transparent blur-[70px] animate-ambientPulse"
                  style={{ animationDelay: '3s' } as React.CSSProperties}
                ></div>

                {/* Floating Particles */}
                <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ boxShadow: '0 0 15px rgba(147, 197, 253, 0.4)' }}></div>
                <div className="absolute top-[30%] right-[15%] w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ boxShadow: '0 0 15px rgba(147, 197, 253, 0.4)' }}></div>
                <div className="absolute bottom-[25%] left-[15%] w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ boxShadow: '0 0 15px rgba(147, 197, 253, 0.4)' }}></div>
                <div className="absolute top-1/2 right-[25%] w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ boxShadow: '0 0 15px rgba(147, 197, 253, 0.4)' }}></div>

                {/* ASCII Art */}
                <div className="relative z-10 flex items-center justify-center" style={{ filter: 'drop-shadow(0 0 40px rgba(34, 211, 238, 0.3)) drop-shadow(0 0 80px rgba(139, 92, 246, 0.2))' }}>
                  <pre className="font-mono text-[13px] leading-[1.35] text-center whitespace-pre text-white select-none">
                    <span className="text-[rgba(148,163,184,0.5)]">                    ╭───────────────────╮</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">              ╭─────┤</span> <span className="text-[#a78bfa] glow-purple">◆ NEURAL LAYER</span> <span className="text-[rgba(148,163,184,0.5)]">├─────╮</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">              │     ╰───────────────────╯     │</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">        ╭─────┴─────╮                   ╭─────┴─────╮</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">        │</span> <span className="text-[#22d3ee]">○ ○ ○ ○ ○</span> <span className="text-[rgba(148,163,184,0.5)]">│                   │</span> <span className="text-[#22d3ee]">○ ○ ○ ○ ○</span> <span className="text-[rgba(148,163,184,0.5)]">│</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">        │</span> <span className="text-[#60a5fa]">│ │ │ │ │</span> <span className="text-[rgba(148,163,184,0.5)]">│</span>   <span className="text-white">┌─────────┐</span>   <span className="text-[rgba(148,163,184,0.5)]">│</span> <span className="text-[#60a5fa]">│ │ │ │ │</span> <span className="text-[rgba(148,163,184,0.5)]">│</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">        │</span> <span className="text-[#22d3ee]">○─┼─┼─┼─○</span> <span className="text-[rgba(148,163,184,0.5)]">├───┤</span>  <span className="text-white">A  I</span>  <span className="text-[rgba(148,163,184,0.5)]">├───┤</span> <span className="text-[#22d3ee]">○─┼─┼─┼─○</span> <span className="text-[rgba(148,163,184,0.5)]">│</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">        │</span> <span className="text-[#60a5fa]">│ │ │ │ │</span> <span className="text-[rgba(148,163,184,0.5)]">│</span>   <span className="text-white">└─────────┘</span>   <span className="text-[rgba(148,163,184,0.5)]">│</span> <span className="text-[#60a5fa]">│ │ │ │ │</span> <span className="text-[rgba(148,163,184,0.5)]">│</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">        │</span> <span className="text-[#22d3ee]">○ ○ ○ ○ ○</span> <span className="text-[rgba(148,163,184,0.5)]">│                   │</span> <span className="text-[#22d3ee]">○ ○ ○ ○ ○</span> <span className="text-[rgba(148,163,184,0.5)]">│</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">        ╰─────┬─────╯                   ╰─────┬─────╯</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">              │     ╭───────────────────╮     │</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">              ╰─────┤</span> <span className="text-[#a78bfa] glow-purple">◇ PROCESS LAYER</span> <span className="text-[rgba(148,163,184,0.5)]">├─────╯</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">                    ╰─────────┬─────────╯</span>
                    {'\n'}
                    <span className="text-[#93c5fd]">          ╭────────────────────┼────────────────────╮</span>
                    {'\n'}
                    <span className="text-[#93c5fd]">          │                    │                    │</span>
                    {'\n'}
                    <span className="text-[#93c5fd]">    ╭─────┴─────╮        ╭─────┴─────╮        ╭─────┴─────╮</span>
                    {'\n'}
                    <span className="text-[#93c5fd]">    │</span> <span className="text-[#22d3ee]">◈ LEARN</span> <span className="text-[#93c5fd]">│        │</span> <span className="text-[#22d3ee]">◈ ADAPT</span> <span className="text-[#93c5fd]">│        │</span> <span className="text-[#22d3ee]">◈ SCALE</span> <span className="text-[#93c5fd]">│</span>
                    {'\n'}
                    <span className="text-[#93c5fd]">    ╰─────┬─────╯        ╰─────┬─────╯        ╰─────┬─────╯</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">          │                    │                    │</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">          ▼                    ▼                    ▼</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">     ┌─────────┐          ┌─────────┐          ┌─────────┐</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">     │</span><span className="text-[#60a5fa]">░░░░░░░░░</span><span className="text-[rgba(148,163,184,0.5)]">│          │</span><span className="text-[#60a5fa]">░░░░░░░░░</span><span className="text-[rgba(148,163,184,0.5)]">│          │</span><span className="text-[#60a5fa]">░░░░░░░░░</span><span className="text-[rgba(148,163,184,0.5)]">│</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">     │</span><span className="text-[#22d3ee]">░ DATA ░░</span><span className="text-[rgba(148,163,184,0.5)]">│          │</span><span className="text-[#22d3ee]">░ MODEL ░</span><span className="text-[rgba(148,163,184,0.5)]">│          │</span><span className="text-[#22d3ee]">░OUTPUT░░</span><span className="text-[rgba(148,163,184,0.5)]">│</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">     │</span><span className="text-[#60a5fa]">░░░░░░░░░</span><span className="text-[rgba(148,163,184,0.5)]">│          │</span><span className="text-[#60a5fa]">░░░░░░░░░</span><span className="text-[rgba(148,163,184,0.5)]">│          │</span><span className="text-[#60a5fa]">░░░░░░░░░</span><span className="text-[rgba(148,163,184,0.5)]">│</span>
                    {'\n'}
                    <span className="text-[rgba(148,163,184,0.5)]">     └─────────┘          └─────────┘          └─────────┘</span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40 text-xs uppercase tracking-[2px]">
          <span>Scroll</span>
          <div className="w-px h-[60px] bg-gradient-to-b from-white/40 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* ============================================
           SECTION 2: WORKFLOWS / INTRO
           ============================================ */}
      <section
        className="py-[60px] md:py-[80px] lg:py-[120px] relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)' }}
        aria-labelledby="workflows-heading"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
            <div className="max-w-[520px]">
              <h2
                id="workflows-heading"
                className="font-headline text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--primary)] mb-7 tracking-[-1px] leading-[1.1]"
              >
                Your workflows are scattered. AI can unify them.
              </h2>
              <p className="text-[18px] text-[var(--text-body)] mb-6 leading-[1.7] font-body">
                Your critical processes live across emails, spreadsheets, tools, and tribal knowledge. Everyone does
                them, but everyone does them differently.
              </p>

              <div className="my-8 space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-[var(--text-body)] text-sm">Pricing, scoping, and approvals that take days instead of minutes</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-[var(--text-body)] text-sm">Compliance steps and handoffs that fall through the cracks</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-[var(--text-body)] text-sm">Renewals and follow-ups that depend on someone remembering</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-[var(--text-body)] text-sm">Reports and data entry that eat hours every week for zero strategic value</span>
                </div>
              </div>

              <p className="text-[16px] text-[var(--text-muted)] leading-[1.7] mb-8">
                We turn those messy, repeated decisions into a single system your team can rely on. That&apos;s when AI becomes infrastructure, not just a nice-to-have.
              </p>

              <div className="flex items-center gap-4 sm:gap-6 flex-wrap py-8 border-t border-b border-[var(--border-light)] mb-8">
                <div className="flex flex-col gap-1">
                  <div className="font-headline text-[26px] md:text-[32px] font-bold text-[var(--primary)] leading-none tracking-[-1px]">85%</div>
                  <div className="text-[11px] md:text-[12px] text-[var(--text-muted)] font-medium uppercase tracking-[0.5px]">Faster Processing</div>
                </div>
                <div className="hidden sm:block w-px h-9 bg-gray-300/60"></div>
                <div className="flex flex-col gap-1">
                  <div className="font-headline text-[26px] md:text-[32px] font-bold text-[var(--primary)] leading-none tracking-[-1px]">92%</div>
                  <div className="text-[11px] md:text-[12px] text-[var(--text-muted)] font-medium uppercase tracking-[0.5px]">Fewer Errors</div>
                </div>
                <div className="hidden sm:block w-px h-9 bg-gray-300/60"></div>
                <div className="flex flex-col gap-1">
                  <div className="font-headline text-[26px] md:text-[32px] font-bold text-[var(--primary)] leading-none tracking-[-1px]">200+</div>
                  <div className="text-[11px] md:text-[12px] text-[var(--text-muted)] font-medium uppercase tracking-[0.5px]">Hours Saved</div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[var(--primary)] text-white px-8 py-4 rounded-lg text-[15px] font-semibold leading-none uppercase tracking-[0.5px] no-underline transition-all duration-300 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)' }}
              >
                Learn How
              </Link>
            </div>

            {/* Intro Visual */}
            <div className="mt-4 lg:mt-0 lg:sticky lg:top-24">
              <Image
                src="/images/ai-workflows.jpg"
                alt="Abstract blue geometric shapes representing AI workflow automation and unified business processes"
                width={800}
                height={700}
                className="w-full h-auto max-h-[300px] lg:max-h-none object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           SECTION 3: AI AUTOMATION & INTEGRATION
           Content LEFT, Image RIGHT (per IT Solutions pattern)
           ============================================ */}
      <section
        className="py-[40px] md:py-[56px] lg:py-[80px] bg-white border-t border-gray-200"
        id="solutions"
        aria-labelledby="automation-heading"
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image — shown first on mobile, right column on desktop */}
          <div className="lg:sticky lg:top-24 lg:order-last">
            <div className="rounded-2xl overflow-hidden aspect-[3/2] lg:aspect-auto">
              <Image
                src="/images/software-dev.jpg"
                alt="AI automation and integration services for business workflows"
                width={752}
                height={500}
                priority
                className="w-full h-auto object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2
              id="automation-heading"
              className="font-headline text-[28px] sm:text-[34px] md:text-[42px] font-medium text-[var(--text-dark)] mb-3 leading-[1.15] tracking-[-0.5px]"
            >
              AI Automation & Integration
            </h2>

            <p className="text-[17px] text-[var(--text-dark)] font-bold mb-0 leading-[1.6]">
              Intelligent systems that work for you
            </p>

            <hr className="border-t border-gray-200 mt-6 mb-0" />

            <AccordionWrapper items={automationItems} type="aiautomation" />

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[var(--primary)] text-white px-8 py-4 rounded-lg text-[15px] font-semibold leading-none uppercase tracking-[0.5px] no-underline transition-all duration-300 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)' }}
              >
                Book a Consultation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           SECTION 4: AI SOFTWARE SOLUTIONS
           Image LEFT (sticky), Content RIGHT
           ============================================ */}
      <section
        className="py-[40px] md:py-[56px] lg:py-[80px] bg-white border-t border-gray-200"
        id="ai-software"
        aria-labelledby="aisoftware-heading"
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image — left column on desktop */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl overflow-hidden aspect-[3/2] lg:aspect-auto">
              <Image
                src="/images/web-design.jpg"
                alt="AI software solutions including custom applications and integrations"
                width={752}
                height={500}
                className="w-full h-auto object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2
              id="aisoftware-heading"
              className="font-headline text-[28px] sm:text-[34px] md:text-[42px] font-medium text-[var(--text-dark)] mb-3 leading-[1.15] tracking-[-0.5px]"
            >
              AI Software Solutions
            </h2>

            <p className="text-[17px] text-[var(--text-dark)] font-bold mb-0 leading-[1.6]">
              Custom AI applications built for your specific problems
            </p>

            <hr className="border-t border-gray-200 mt-6 mb-0" />

            <AccordionWrapper items={softwareItems} type="aisoftware" />

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[var(--primary)] text-white px-8 py-4 rounded-lg text-[15px] font-semibold leading-none uppercase tracking-[0.5px] no-underline transition-all duration-300 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)' }}
              >
                Discuss Your Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           SECTION 5: AI STRATEGY CONSULTING
           Content LEFT, Image RIGHT
           ============================================ */}
      <section
        className="py-[40px] md:py-[56px] lg:py-[80px] bg-white border-t border-gray-200"
        id="ai-strategy"
        aria-labelledby="strategy-heading"
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image — right column on desktop */}
          <div className="lg:sticky lg:top-24 lg:order-last">
            <div className="rounded-2xl overflow-hidden aspect-[3/2] lg:aspect-auto">
              <Image
                src="/images/data-analytics.jpg"
                alt="AI strategy consulting and implementation roadmap services"
                width={752}
                height={500}
                className="w-full h-auto object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2
              id="strategy-heading"
              className="font-headline text-[28px] sm:text-[34px] md:text-[42px] font-medium text-[var(--text-dark)] mb-3 leading-[1.15] tracking-[-0.5px]"
            >
              AI Strategy Consulting
            </h2>

            <p className="text-[17px] text-[var(--text-dark)] font-bold mb-0 leading-[1.6]">
              Know where AI fits, before you invest.
            </p>

            <hr className="border-t border-gray-200 mt-6 mb-0" />

            <AccordionWrapper items={strategyItems} type="aistrategy" />

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[var(--primary)] text-white px-8 py-4 rounded-lg text-[15px] font-semibold leading-none uppercase tracking-[0.5px] no-underline transition-all duration-300 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)' }}
              >
                Discuss Your Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           SECTION 6: INDUSTRIES WE SERVE
           Dark bg + numbered cards + accent left border
           ============================================ */}
      <section
        className="py-[60px] md:py-[80px] lg:py-[100px] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 25%, #1e3a8a 60%, #0f172a 100%)' }}
        aria-labelledby="industries-heading"
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 relative z-10">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-[#22d3ee] uppercase tracking-[2px] mb-5">
              Industries
            </p>
            <h2
              id="industries-heading"
              className="font-headline text-[32px] sm:text-[40px] md:text-[48px] font-bold text-white mb-5 tracking-[-1px]"
            >
              AI that speaks your industry&apos;s language.
            </h2>
            <p className="text-[18px] text-white/75">
              Built around how your industry already works. Your workflows, your compliance, your terminology, your people.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Healthcare */}
            <div className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 pl-10 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1">
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-[#2563eb]"></div>
              <span className="font-mono text-[13px] text-white/40 tracking-wider block mb-3">01</span>
              <h3 className="font-headline text-xl font-semibold text-white mb-2">Healthcare</h3>
              <p className="text-[15px] text-white/85 mb-4">AI that respects compliance and clinical reality.</p>
              <div className="h-px bg-white/[0.10] my-4"></div>
              <p className="text-sm text-[#22d3ee] font-mono tracking-wide">Transcription &bull; EHR &bull; Claims &bull; Patient Support</p>
            </div>

            {/* Fintech */}
            <div className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 pl-10 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1">
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-[#22d3ee]"></div>
              <span className="font-mono text-[13px] text-white/40 tracking-wider block mb-3">02</span>
              <h3 className="font-headline text-xl font-semibold text-white mb-2">Fintech</h3>
              <p className="text-[15px] text-white/85 mb-4">AI that understands financial complexity.</p>
              <div className="h-px bg-white/[0.10] my-4"></div>
              <p className="text-sm text-[#22d3ee] font-mono tracking-wide">Compliance &bull; Risk &bull; KYC &bull; Fraud Detection</p>
            </div>

            {/* E-Commerce */}
            <div className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 pl-10 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1">
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-[#8b5cf6]"></div>
              <span className="font-mono text-[13px] text-white/40 tracking-wider block mb-3">03</span>
              <h3 className="font-headline text-xl font-semibold text-white mb-2">E-Commerce</h3>
              <p className="text-[15px] text-white/85 mb-4">AI that drives sales, not just traffic.</p>
              <div className="h-px bg-white/[0.10] my-4"></div>
              <p className="text-sm text-[#22d3ee] font-mono tracking-wide">Search &bull; Recommendations &bull; Support &bull; Content</p>
            </div>

            {/* Logistics */}
            <div className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 pl-10 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1">
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-[#2563eb]"></div>
              <span className="font-mono text-[13px] text-white/40 tracking-wider block mb-3">04</span>
              <h3 className="font-headline text-xl font-semibold text-white mb-2">Logistics</h3>
              <p className="text-[15px] text-white/85 mb-4">AI that moves goods smarter.</p>
              <div className="h-px bg-white/[0.10] my-4"></div>
              <p className="text-sm text-[#22d3ee] font-mono tracking-wide">Routes &bull; Forecasting &bull; Inventory &bull; Tracking</p>
            </div>

            {/* Real Estate */}
            <div className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 pl-10 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1">
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-[#22d3ee]"></div>
              <span className="font-mono text-[13px] text-white/40 tracking-wider block mb-3">05</span>
              <h3 className="font-headline text-xl font-semibold text-white mb-2">Real Estate</h3>
              <p className="text-[15px] text-white/85 mb-4">AI that automates property management.</p>
              <div className="h-px bg-white/[0.10] my-4"></div>
              <p className="text-sm text-[#22d3ee] font-mono tracking-wide">Leasing &bull; Payments &bull; Maintenance &bull; Comms</p>
            </div>

            {/* Government */}
            <div className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 pl-10 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1">
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-[#8b5cf6]"></div>
              <span className="font-mono text-[13px] text-white/40 tracking-wider block mb-3">06</span>
              <h3 className="font-headline text-xl font-semibold text-white mb-2">Government</h3>
              <p className="text-[15px] text-white/85 mb-4">AI built for public sector requirements.</p>
              <div className="h-px bg-white/[0.10] my-4"></div>
              <p className="text-sm text-[#22d3ee] font-mono tracking-wide">Citizen Services &bull; Policy &bull; Documents &bull; Data</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           SECTION 7: TECHNOLOGY STACK
           ============================================ */}
      <section
        className="py-[60px] md:py-[80px] lg:py-[120px] relative overflow-hidden"
        id="technology-stack"
        aria-labelledby="tech-heading"
        style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 25%, #1e3a8a 60%, #2563eb 100%)' }}
      >
        {/* Animated glow orbs */}
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#3b82f6] to-transparent blur-[100px] opacity-40 animate-ambientPulse" style={{ animationDelay: '0s' } as React.CSSProperties}></div>
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#06b6d4] to-transparent blur-[100px] opacity-40 animate-ambientPulse" style={{ animationDelay: '-4s' } as React.CSSProperties}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-radial from-[#8b5cf6] to-transparent blur-[100px] opacity-40 animate-ambientPulse" style={{ animationDelay: '-8s' } as React.CSSProperties}></div>

        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 relative z-[2]">
          <div className="text-center mb-[50px] lg:mb-[70px]">
            <p className="text-xs font-semibold text-[#22d3ee] uppercase tracking-[2px] mb-5">
              Technical Capabilities
            </p>
            <h2
              id="tech-heading"
              className="font-headline text-[26px] sm:text-[32px] md:text-[clamp(32px,4vw,42px)] font-light text-white leading-[1.15] tracking-[-1.5px] mb-6"
            >
              10+ years. <strong className="font-bold bg-gradient-to-r from-[#60a5fa] via-[#22d3ee] to-[#a78bfa] bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Fortune 500 to startups.</strong>
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/60 max-w-[600px] mx-auto leading-[1.7]">
              Our team has shipped production systems and deployed AI at scale. Here&apos;s the stack we actually use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {/* LLMs Card */}
            <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-[24px] p-7 lg:p-9 transition-all duration-400 relative overflow-hidden hover:-translate-y-1 hover:bg-white/[0.08] hover:border-white/20" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
              <h3 className="text-[18px] font-semibold text-white mb-5 relative z-[1]">Large Language Models</h3>
              <div className="flex flex-wrap gap-2 md:gap-2.5 relative z-[1]">
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#10A37F"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1685a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>OpenAI</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/anthropic/ffffff" alt="Claude" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Claude</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/meta/ffffff" alt="LLaMA" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />LLaMA</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#F97316"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>Falcon</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#FF7000"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>Mistral</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#22C55E"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>Open Source LLMs</span>
              </div>
            </div>

            {/* AI Frameworks & Tools Card */}
            <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-[24px] p-7 lg:p-9 transition-all duration-400 relative overflow-hidden hover:-translate-y-1 hover:bg-white/[0.08] hover:border-white/20" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
              <h3 className="text-[18px] font-semibold text-white mb-5 relative z-[1]">AI Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2 md:gap-2.5 relative z-[1]">
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#00BCF2"><path d="M0 0h11.5v11.5H0V0zm12.5 0H24v11.5H12.5V0zM0 12.5h11.5V24H0V12.5zm12.5 0H24V24H12.5V12.5z"/></svg>Microsoft Semantic Kernel</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#1E8E3E"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>LangChain</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#EA4B71"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>n8n</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#60A5FA"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6z"/></svg>RAG Pipelines</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#8B5CF6"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>Vector Databases</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/huggingface/FFD21E" alt="Hugging Face" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Hugging Face</span>
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-[24px] p-7 lg:p-9 transition-all duration-400 relative overflow-hidden hover:-translate-y-1 hover:bg-white/[0.08] hover:border-white/20" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
              <h3 className="text-[18px] font-semibold text-white mb-5 relative z-[1]">Languages</h3>
              <div className="flex flex-wrap gap-2 md:gap-2.5 relative z-[1]">
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Python</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/dotnet/512BD4" alt="C#" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />C#</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />JavaScript</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />TypeScript</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/openjdk/ED8B00" alt="Java" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Java</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/mysql/4479A1" alt="SQL" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />SQL</span>
              </div>
            </div>

            {/* AI Infrastructure Card */}
            <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-[24px] p-7 lg:p-9 transition-all duration-400 relative overflow-hidden hover:-translate-y-1 hover:bg-white/[0.08] hover:border-white/20" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
              <h3 className="text-[18px] font-semibold text-white mb-5 relative z-[1]">AI Infrastructure</h3>
              <div className="flex flex-wrap gap-2 md:gap-2.5 relative z-[1]">
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure OpenAI" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Azure OpenAI</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS Bedrock" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />AWS Bedrock</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />Docker</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#00C7B7"><path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-.001 2.794l7.766 4.486v8.964l-7.766 4.486-7.766-4.486V7.28l7.766-4.486z"/></svg>Pinecone</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#FFB800"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>ChromaDB</span>
                <span className="inline-flex items-center gap-2 md:gap-2.5 py-2.5 px-3.5 md:py-3.5 md:px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[12px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5"><img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL + pgvector" className="w-5 h-5 md:w-6 md:h-6 object-contain" width={24} height={24} loading="lazy" decoding="async" />PostgreSQL + pgvector</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           SECTION 8: FINAL CTA
           ============================================ */}
      <section
        className="py-[60px] md:py-[80px] lg:py-[100px] text-center relative"
        style={{ background: 'linear-gradient(180deg, #f0f9ff, #e0f2fe)' }}
        id="contact"
        aria-label="Contact Call to Action"
      >
        <div className="max-w-[900px] mx-auto px-5 sm:px-6">
          <div
            className="bg-white rounded-[24px] py-[40px] px-6 md:py-[60px] md:px-12 border border-[rgba(37,99,235,0.08)]"
            style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.02), 0 12px 24px rgba(0,0,0,0.04), 0 24px 48px rgba(37,99,235,0.06)' }}
          >
            <h2 className="font-headline text-[24px] md:text-[clamp(24px,4vw,36px)] font-semibold text-[var(--text-dark)] mb-4 tracking-[-0.5px]">
              Ready to make AI work for your business?
            </h2>
            <p className="text-[16px] md:text-[18px] text-[var(--text-muted)] mb-8 leading-[1.7] max-w-[550px] mx-auto">
              Let&apos;s talk about where AI can have the biggest impact. No sales pitch, just a conversation about what&apos;s possible.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[var(--primary)] text-white px-8 py-4 rounded-lg text-[15px] font-semibold leading-none uppercase tracking-[0.5px] no-underline transition-all duration-300 hover:bg-[var(--primary-deeper)] hover:-translate-y-0.5"
              style={{ boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)' }}
              aria-label="Book a free AI consultation with Karavan IT HUB"
            >
              Book a Free AI Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
