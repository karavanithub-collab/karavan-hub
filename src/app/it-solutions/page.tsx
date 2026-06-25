import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';
import AccordionWrapper from '@/components/it-solutions/AccordionWrapper';
import Breadcrumb from '@/components/Breadcrumb';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'IT Solutions for Small & Medium Businesses | Karavan IT HUB',
  description:
    'Web development, software, and digital transformation services for small businesses in Ontario and North America.',
  keywords:
    'IT solutions, custom software development, web design, data analytics, digital transformation, SMB technology, business software, cloud applications, mobile app development',
  authors: [{ name: 'Karavan Hub' }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://karavanhub.com/it-solutions',
    languages: {
      'en-CA': 'https://karavanhub.com/it-solutions',
      en: 'https://karavanhub.com/it-solutions',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://karavanhub.com/it-solutions',
    title: 'IT Solutions for Small & Medium Businesses | Karavan IT HUB',
    description:
      'IT solutions built around how your business operates. Custom software, web design, data analytics, and digital transformation.',
    siteName: 'Karavan IT HUB',
    locale: 'en_CA',
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
      'IT solutions built around how your business operates. Custom software, web design, data analytics, and digital transformation.',
    images: ['https://karavanhub.com/images/twitter-it-solutions.jpg'],
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Niagara, Ontario',
    'geo.position': '43.0896;-79.0849',
    ICBM: '43.0896, -79.0849',
    'theme-color': '#2563EB',
  },
};

// Consolidated JSON-LD Schema Graph
const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    // Organization entity (reusable @id across pages)
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
        'Canadian-owned AI and IT solutions company specializing in custom software development, web design, data analytics, and digital transformation for small and medium businesses.',
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
        'Web Design',
        'Web Development',
        'Data Analytics',
        'Business Intelligence',
        'Digital Transformation',
        'Cloud Migration',
        'E-Commerce',
        'Mobile App Development',
        'API Integration',
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
    // WebPage entity (speakable + mentions + dates)
    {
      '@type': 'WebPage',
      '@id': 'https://karavanhub.com/it-solutions/#webpage',
      name: 'IT Solutions for Small & Medium Businesses',
      url: 'https://karavanhub.com/it-solutions',
      datePublished: '2026-01-15',
      dateModified: '2026-02-28',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://karavanhub.com/#website',
        name: 'Karavan Hub',
        url: 'https://karavanhub.com',
      },
      about: { '@id': 'https://karavanhub.com/it-solutions/#service' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['#software-heading', '#webdesign-heading', '#analytics-heading', '#transform-heading'],
      },
      mentions: [
        { '@type': 'Thing', name: 'React', url: 'https://react.dev' },
        { '@type': 'Thing', name: 'Next.js', url: 'https://nextjs.org' },
        { '@type': 'Thing', name: 'Node.js', url: 'https://nodejs.org' },
        { '@type': 'Thing', name: 'TypeScript', url: 'https://typescriptlang.org' },
        { '@type': 'Thing', name: 'Amazon Web Services', url: 'https://aws.amazon.com' },
        { '@type': 'Thing', name: 'WordPress', url: 'https://wordpress.org' },
        { '@type': 'Thing', name: 'Shopify', url: 'https://shopify.com' },
        { '@type': 'Thing', name: 'Tableau', url: 'https://tableau.com' },
        { '@type': 'Thing', name: 'Docker', url: 'https://docker.com' },
        { '@type': 'Thing', name: 'PostgreSQL', url: 'https://postgresql.org' },
      ],
    },
    // Service entity
    {
      '@type': 'Service',
      '@id': 'https://karavanhub.com/it-solutions/#service',
      name: 'IT Solutions',
      description:
        'Custom IT solutions for small and medium businesses including software development, web design, data analytics, and digital transformation services.',
      provider: { '@id': 'https://karavanhub.com/#organization' },
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
    },
    // FAQPage entity
    {
      '@type': 'FAQPage',
      '@id': 'https://karavanhub.com/it-solutions/#faq',
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
            text: 'Data analytics turns scattered information into clear dashboards that show what is happening in your business. It helps you make decisions based on facts rather than gut feelings.',
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
    },
    // BreadcrumbList entity
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
          name: 'IT Solutions',
          item: 'https://karavanhub.com/it-solutions',
        },
      ],
    },
    // HowTo entity
    {
      '@type': 'HowTo',
      '@id': 'https://karavanhub.com/it-solutions/#howto',
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
    },
  ],
};

export default function ITSolutionsPage() {
  // Software Solutions Accordion Items
  const softwareItems = [
    {
      title: 'Cloud-Native Applications',
      content: (
        <>
          <p>
            Traditional software runs on a server — a fixed cost whether you&apos;re busy or slow. Cloud-native applications are built differently. They live in the cloud and scale automatically: more capacity when demand spikes, less when things settle. You pay for what you use, not what you might someday need.
          </p>
          <p className="mt-3">
            For an Ontario small business, this matters in concrete ways. A platform that gets slammed during the holidays shouldn&apos;t cost the same to run in February. A booking system that sits quiet overnight shouldn&apos;t consume resources around the clock. We build your application to scale intelligently, which keeps infrastructure costs predictable and eliminates the single point of failure that comes with physical hardware.
          </p>
          <p className="mt-3">
            Cloud-native also means your team can access what they need from anywhere — office, home, a job site. No VPN to configure. No on-premise server to maintain. When something needs updating, it happens without interrupting your workday.
          </p>
        </>
      ),
    },
    {
      title: 'Full-Stack Development',
      content: (
        <>
          <p>
            When you hire separate agencies for your front end and your back end, you create a gap. Each team knows their half. When something breaks, everyone points at the other side. We&apos;ve seen projects stall for weeks while vendors argued over whose bug it was.
          </p>
          <p className="mt-3">
            We handle the full stack. That means the interface your customers see, the application logic that processes everything, and the database underneath. One team. One set of people who understand how all three layers connect. When you ask us to add a feature, we&apos;re thinking about the database query, the API call, and how it renders in the browser simultaneously — not in three separate meetings.
          </p>
          <p className="mt-3">
            This is especially important for integrations. When your order system needs to pull inventory from one place, push confirmations somewhere else, and send a customer notification, the person building that needs to understand every step in the chain. We do — which is how you end up with a system that works the way it was described, not one that works in demo and breaks in production.
          </p>
        </>
      ),
    },
    {
      title: 'System Modernization',
      content: (
        <>
          <p>
            Legacy systems are a specific kind of problem. They work — which is exactly why nobody wants to touch them. The person who built it left years ago. Documentation is thin. The business depends on it running. So it keeps running, and everyone works around it.
          </p>
          <p className="mt-3">
            The cost of leaving it alone compounds quietly. New integrations aren&apos;t possible. Staff spend time on manual workarounds. Security patches fall behind. Every year it runs, the gap between what the system can do and what the business needs grows wider. Eventually, a modernization that could have been gradual becomes an emergency.
          </p>
          <p className="mt-3">
            We don&apos;t rip and replace. That approach has caused too many disasters. Instead, we identify the riskiest pieces and replace them one at a time, keeping everything running throughout. We build the new component, run it alongside the old one, verify it works, then cut over. You never face a day where operations stop because a migration didn&apos;t go cleanly.
          </p>
        </>
      ),
    },
    {
      title: 'Mobile Apps',
      content: (
        <>
          <p>
            A mobile app can be the difference between a business that feels current and one that asks customers to use a browser on their phone and pinch to zoom. But a bad app is worse than no app — a slow, crashing experience tells your customers something about how you operate.
          </p>
          <p className="mt-3">
            We build native-feeling apps for iOS and Android designed around real behavior. How do people hold their phone when using your app? What are they trying to accomplish in 30 seconds? What happens when they lose connection mid-task? These questions get answered in design before we write a line of code. We test on actual devices, not just simulators.
          </p>
          <p className="mt-3">
            For Canadian service businesses — trades, delivery, field service, healthcare — mobile apps solve specific operational problems. Technicians updating job status on-site. Drivers capturing signatures and logging deliveries. Clients booking, paying, and rescheduling from their phone without calling anyone. We build tools around those workflows, not generic app templates.
          </p>
        </>
      ),
    },
    {
      title: 'Connecting Your Tools',
      content: (
        <>
          <p>
            Every time someone copies data from one system to another by hand, three things happen: they spend time on work a machine could do, they introduce errors, and you become dependent on a manual process that breaks the moment that person is unavailable.
          </p>
          <p className="mt-3">
            We map how your systems currently share information, find the gaps, and build the connections that eliminate the manual steps. Your CRM updates when a sale closes. Your accounting software records the invoice. Your inventory adjusts when an order ships. These things happen automatically, in real time, without anyone triggering them.
          </p>
          <p className="mt-3">
            We work with the APIs of the tools you already use — Salesforce, HubSpot, QuickBooks, Shopify, or a custom internal system. If an API doesn&apos;t exist, we build the middleware that bridges the gap. The goal is a business that runs on reliable, consistent data — not on hope that nobody forgot to update the spreadsheet.
          </p>
        </>
      ),
    },
    {
      title: 'The Business Impact',
      content: (
        <ul className="list-none p-0 pb-5 m-0">
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Stop paying for features you don&apos;t use, and missing the ones you need</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Less training time because the software matches how your team already works</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Own your technology instead of renting someone else&apos;s limitations</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Scale when you need to, not when your vendor says you can</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Eliminate hours of weekly manual data entry and the errors that come with it</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Build a platform your business can grow into rather than outgrow</span>
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
        <>
          <p>
            More than 60% of web traffic in Canada now comes from a mobile device. That means most people finding your business are seeing it on a phone first. If your site wasn&apos;t built with that in mind — if text is too small, buttons are too close, or sections require sideways scrolling — you&apos;re losing more than half your visitors before they read a word about you.
          </p>
          <p className="mt-3">
            Responsive design isn&apos;t just making things &quot;fit&quot; on smaller screens. It&apos;s rethinking how content is prioritized on each device. On a phone, someone needs your number or address fast. On a laptop, they want to browse services or read case studies. We design for both experiences distinctly, not as a desktop-first afterthought.
          </p>
          <p className="mt-3">
            We test on actual devices — iPhones and Android phones of different screen sizes and generations — not just by dragging a browser window. iOS Safari handles certain CSS differently than Chrome on Android. Real testing means your site looks intentional on every device your customers actually use.
          </p>
        </>
      ),
    },
    {
      title: 'E-Commerce Development',
      content: (
        <>
          <p>
            Customers buying online in Canada expect a fast, frictionless experience — product pages that load quickly, a checkout that doesn&apos;t demand account creation, and a process that feels trustworthy. Fall short on any of these and they&apos;ll find somewhere else. The bar is high because the big retailers set it.
          </p>
          <p className="mt-3">
            We build e-commerce platforms on Shopify for businesses that need a proven, scalable infrastructure, and on custom stacks for businesses with more complex requirements — custom pricing rules, subscription models, B2B ordering portals, or tight integration with existing inventory or accounting systems. The platform fits the way you sell, not the other way around.
          </p>
          <p className="mt-3">
            On the back end, you manage your own catalog, inventory, shipping rules, discount campaigns, and revenue reports — without calling a developer for every change. We train you on your own store before handoff and document the common tasks so you&apos;re not dependent on us for day-to-day operations.
          </p>
        </>
      ),
    },
    {
      title: 'Web Applications',
      content: (
        <>
          <p>
            There&apos;s a category of software that lives between a marketing website and a full enterprise system. Customer portals where clients track orders or download invoices. Booking systems where patients, clients, or tenants schedule themselves. Estimator tools that walk a prospect through options and produce a quote. Internal dashboards that show the team what&apos;s happening across the business.
          </p>
          <p className="mt-3">
            These are web applications — they look like websites but they do real work. For many Ontario SMBs, a well-built web application replaces a process that used to require phone calls, emails, and manual tracking.
          </p>
          <p className="mt-3">
            A trades business with a customer portal cuts &ldquo;where&apos;s my job?&rdquo; calls significantly. A clinic with online booking fills schedule gaps faster. A property manager with a maintenance request system stops chasing tenants by phone. We scope and build these tools around the specific problem you need to solve — not a template we already have on a shelf.
          </p>
        </>
      ),
    },
    {
      title: 'CMS Implementation',
      content: (
        <>
          <p>
            One of the most common complaints we hear from business owners who&apos;ve had websites built is that they can&apos;t change anything without calling their developer. They want to update a service description, add a team member, post a news update. Every change requires a work order and a wait. So nothing gets updated, and the site quietly goes stale.
          </p>
          <p className="mt-3">
            We build every website with a content management system that puts you in control. Whether that&apos;s WordPress, a headless CMS like Sanity, or a Shopify admin panel, the goal is the same: your team makes the changes they need without writing code. Service descriptions, pricing updates, new staff photos, blog posts — all on your own schedule.
          </p>
          <p className="mt-3">
            We also build sensible guardrails. Editing the text in a section doesn&apos;t break the layout. The parts that should be protected are protected. We train your team before handoff and document the common tasks, so there&apos;s always a reference when someone needs it six months later.
          </p>
        </>
      ),
    },
    {
      title: 'Speed and Performance',
      content: (
        <>
          <p>
            Page speed has a direct line to business outcomes. A site loading in one second converts three times better than one that takes five. In Canada, where mobile connectivity varies between urban and rural areas, a bloated website effectively shuts out a portion of your potential customers before they see anything.
          </p>
          <p className="mt-3">
            Speed comes from decisions made throughout the build — how images are compressed and served, whether fonts load efficiently, whether JavaScript is deferred properly, how caching is configured, and whether the hosting infrastructure suits the traffic. We don&apos;t bolt performance on at the end. It&apos;s built into how we work from the start.
          </p>
          <p className="mt-3">
            We measure using Core Web Vitals — the same metrics Google uses when evaluating pages for search ranking. Largest Contentful Paint, Cumulative Layout Shift, Interaction to Next Paint. A fast site doesn&apos;t just serve visitors better; it ranks higher, which means more of the right people finding you without spending more on ads.
          </p>
        </>
      ),
    },
    {
      title: 'The Business Impact',
      content: (
        <ul className="list-none p-0 pb-5 m-0">
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Convert more of the traffic you&apos;re already paying to attract</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Rank higher on Google because your site is fast and works on every device</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Update your own content without waiting (or paying) for developer time</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Look credible before the first sales conversation even happens</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Reduce inbound calls with self-service booking and account tools built into the site</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Give customers a way to book, pay, or get answers without picking up the phone</span>
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
        <>
          <p>
            The problem with most dashboards is they show everything — 40 metrics across 6 tabs — which means they effectively show nothing useful. Decision-makers end up hunting for the two numbers that actually matter. We build dashboards around decisions, not data for its own sake.
          </p>
          <p className="mt-3">
            For a service business owner in Ontario, that might mean: which jobs are open, which are overdue, what revenue has been collected this month versus last, and which clients haven&apos;t been invoiced. Four numbers on one screen, updated automatically. That&apos;s more useful than a 20-tab spreadsheet someone has to compile by hand every Monday morning.
          </p>
          <p className="mt-3">
            We build dashboards in Power BI, Tableau, or custom web-based tools depending on your setup. We connect directly to your data sources — CRM, accounting software, operations system — so the numbers refresh automatically. No manual exports. No stale data. The right information in front of the right people when they need it.
          </p>
        </>
      ),
    },
    {
      title: 'Connecting Your Data',
      content: (
        <>
          <p>
            Data fragmentation is one of the most expensive silent problems in small business. The sales team uses one CRM. Finance runs on QuickBooks. Operations tracks jobs in a spreadsheet. Customer support uses a separate ticketing tool. None of these talk to each other. So when someone asks a simple question — how much did we generate from this client last quarter? — the answer requires touching four systems and hoping the numbers reconcile.
          </p>
          <p className="mt-3">
            We build data pipelines that pull from all your sources and feed into one central place — a data warehouse, a BI tool, or a database that serves your dashboards. Everyone works from the same numbers. Those numbers are current. The guesswork stops.
          </p>
          <p className="mt-3">
            This also eliminates manual data entry between systems. When a sale closes in your CRM, it shouldn&apos;t require someone to also log it in accounting and update the spreadsheet. The data flows automatically, and we validate it before you depend on it. One version of the truth, not six versions that disagree.
          </p>
        </>
      ),
    },
    {
      title: 'Organizing It All',
      content: (
        <>
          <p>
            Raw data from business systems is almost always messy. Customers entered under different names in different systems. Products with inconsistent SKUs. Dates formatted three ways. Duplicates from form submissions. Before any of that data is useful for decisions, it needs to be cleaned, standardized, and organized.
          </p>
          <p className="mt-3">
            We build data models that reflect how your business actually works — not a generic template, but a structure designed around your specific entities, relationships, and the questions you need to answer. When you want to ask something you haven&apos;t thought of yet, the data is organized to support it.
          </p>
          <p className="mt-3">
            We also help with governance: who can access what, how long data is retained, how historical records are preserved. For Ontario businesses subject to PIPEDA or sector-specific privacy regulations, proper data organization isn&apos;t just operationally useful — it&apos;s a compliance requirement. We build for that from the start.
          </p>
        </>
      ),
    },
    {
      title: 'Reports That Write Themselves',
      content: (
        <>
          <p>
            Reporting is one of the most expensive manual processes in a small business — not because reports are inherently valuable, but because producing them takes time that could go toward acting on them. Pulling from multiple systems, formatting, checking, packaging — that can eat a day or more every week or month.
          </p>
          <p className="mt-3">
            We automate the data collection and formatting layer completely. Your weekly sales summary, monthly P&amp;L snapshot, operational KPI deck — generated automatically and delivered on schedule. Accurate data, consistent format, no one touching it.
          </p>
          <p className="mt-3">
            The businesses we work with typically save six to fifteen hours per reporting cycle per month. That time goes back to the people who were spending it — usually your operations lead, finance manager, or yourself. Those hours are better spent acting on what the data says than producing it.
          </p>
        </>
      ),
    },
    {
      title: "Seeing What's Coming",
      content: (
        <>
          <p>
            Historical reporting tells you what happened. Predictive analytics tells you what&apos;s likely to happen next — which is where the real business value sits.
          </p>
          <p className="mt-3">
            For an Ontario SMB, this might mean identifying customers who haven&apos;t purchased in 90 days and automatically flagging them for a check-in, before they quietly leave. Or forecasting next month&apos;s service demand based on seasonal patterns and current pipeline, so you can staff appropriately instead of scrambling. Or spotting which product lines are trending up so you can position ahead of the curve.
          </p>
          <p className="mt-3">
            We keep predictive tools practical. We&apos;re not building models that require a data science team to interpret. The output is a specific, actionable insight — here are the 12 clients most likely to churn in the next 60 days — so your team can act on it. The analysis runs automatically. The decision is still yours.
          </p>
        </>
      ),
    },
    {
      title: 'The Business Impact',
      content: (
        <ul className="list-none p-0 pb-5 m-0">
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Make decisions in hours that used to take a week of pulling and reconciling data</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Free up the people currently stuck compiling reports every week</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Walk into meetings with answers, not excuses about data availability</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Spot revenue leaks and churn risks before they cost you money</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Replace gut-feel decisions with facts your whole team can see and trust</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Build a data foundation that gets more valuable as your business grows</span>
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
        <>
          <p>
            The most common mistake businesses make when approaching digital transformation is trying to change too much at once. A new CRM, a new ERP, a customer portal, and a reporting overhaul — all running in parallel. Eighteen months later, everything is half-done, the team is exhausted, and nobody remembers what the original problem was.
          </p>
          <p className="mt-3">
            We start with a discovery process: mapping how your business currently operates, identifying where the friction is worst, and putting a rough number on what each bottleneck costs in time and money per month. That gives us a prioritization framework based on actual impact, not on what&apos;s most interesting to build.
          </p>
          <p className="mt-3">
            From there we build a phased roadmap. Phase one is the highest-value, lowest-risk change — something that demonstrates what&apos;s possible and wins your team over quickly. No transformation succeeds without internal buy-in, and nothing builds buy-in faster than a specific tool that makes someone&apos;s day meaningfully better. We find that thing first.
          </p>
        </>
      ),
    },
    {
      title: 'Automating the Tedious Stuff',
      content: (
        <>
          <p>
            Every business has tasks that are entirely mechanical — copying an order into a fulfillment system, sending a follow-up email after a meeting, routing a new client request to the right person, generating a weekly status update. These don&apos;t require judgment. They require consistency. And consistency is what software is best at.
          </p>
          <p className="mt-3">
            Process automation gets those tasks off human plates permanently. We map the specific workflow — every step, every condition, every system touched — and build the automation that replicates it exactly. An invoice arrives and gets categorized, matched to a purchase order, and queued for approval, all without anyone touching it. A new client submits a form and their record appears in three systems, a welcome email goes out, and a task is assigned to their account manager.
          </p>
          <p className="mt-3">
            For Ontario SMBs, the impact is usually immediate. A bookkeeper who spent two days a month reconciling data gets those days back. An operations coordinator who was manually routing requests now only handles exceptions. Work that requires real judgment gets more attention, and the mechanical work just happens.
          </p>
        </>
      ),
    },
    {
      title: 'Moving to the Cloud',
      content: (
        <>
          <p>
            For businesses still running core operations on local servers or systems that only work from the office, cloud migration removes the biggest single operational vulnerability they have. A server failure, a power outage, or a fire shouldn&apos;t stop your business. In the cloud, it doesn&apos;t.
          </p>
          <p className="mt-3">
            Cloud migration also changes the economics of IT. Instead of a capital expense for hardware that depreciates and eventually fails, you have a predictable monthly cost. Instead of a single point of failure, you have redundancy built in. Instead of capacity sized for your peak load and paid for year-round, you have capacity that scales with what you actually need.
          </p>
          <p className="mt-3">
            We approach migrations carefully. We document what&apos;s running on your current systems, map the dependencies, and build the cloud environment in parallel before switching anything over. We don&apos;t touch your existing setup until the new environment is tested and stable. We work with AWS, Azure, and Google Cloud depending on what fits your stack. Our goal is a transition that nobody notices — because everything just keeps working, only better.
          </p>
        </>
      ),
    },
    {
      title: 'Making It Easier for Your Customers',
      content: (
        <>
          <p>
            Customers will choose the business that makes their life easier over one that makes them wait, call, or explain themselves repeatedly. Self-service isn&apos;t just a nice-to-have — it directly affects whether people come back and whether they refer others.
          </p>
          <p className="mt-3">
            A property management company that lets tenants submit maintenance requests online, track progress, and receive text updates replaces a process that required phone calls, voicemail, and manual follow-up. The tenant is happier. The property manager handles fewer calls. The documentation is automatic.
          </p>
          <p className="mt-3">
            A professional services firm that gives clients a portal to review documents, approve quotes, and pay invoices reduces the back-and-forth email chains that slow down every engagement. A retailer with self-service order tracking and returns eliminates the category of tickets that fills most support inboxes. We scope and build these customer-facing tools around the interactions that currently take the most time from your team — and we measure the improvement in the first 90 days so you can see exactly what changed.
          </p>
        </>
      ),
    },
    {
      title: 'The Business Impact',
      content: (
        <ul className="list-none p-0 pb-5 m-0">
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Get back the hours your team loses to manual workarounds every single week</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Fewer errors from people doing the same repetitive task over and over</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Handle more volume without needing to hire at the same pace</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Reduce customer service volume by making answers available self-serve</span>
          </li>
          <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-0">
            <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
            <span>Build systems that protect your operations from single points of failure</span>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'IT Solutions' },
      ]} />

      {/* ============================================
           HERO SECTION
           ============================================ */}
      <section
        className="relative min-h-[80vh] lg:min-h-[100vh] bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] flex items-center overflow-hidden pt-6 md:pt-8 pb-[60px] md:pb-[80px]"
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
                alt="Custom software development for Ontario small businesses — bespoke apps, APIs, and backend integrations by Karavan IT HUB"
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

            <p className="text-[17px] text-[var(--text-dark)] font-bold mb-4 leading-[1.6]">
              Your business is unique. Your software should be too.
            </p>
            <p className="text-[15px] text-[var(--text-body)] leading-[1.75]">
              Most small businesses reach a point where the tools they started with stop working for them. Spreadsheets that once held everything now take an hour to update. Accounting software that doesn&apos;t talk to the inventory system. A CRM built for a different kind of business. Custom software is how you stop bending your workflow to fit someone else&apos;s product — and start using technology built around how you actually operate. This is for the business that has outgrown its tools, or never found the right ones to begin with.
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
                Book a Consultation
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
                alt="Responsive website design and development for Ontario SMBs — Next.js and React web solutions by Karavan IT HUB"
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

            <p className="text-[17px] text-[var(--text-dark)] font-bold mb-4 leading-[1.6]">
              A website that works as hard as you do.
            </p>
            <p className="text-[15px] text-[var(--text-body)] leading-[1.75]">
              Your website is often the first serious impression a potential customer gets. They found you somewhere — a Google search, a referral, a social post — and now they&apos;re looking. In the next few seconds they decide whether you look like a business worth contacting. A slow, dated, or confusing site doesn&apos;t just fail to convert — it costs you the customers you already paid to attract. Good web design for a Canadian small business isn&apos;t about winning awards. It&apos;s about making the right things easy: finding what you offer, understanding why you&apos;re different, and getting in touch.
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
                alt="Business intelligence dashboard and data analytics reporting for Canadian small businesses — Power BI and custom visualizations"
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

            <p className="text-[17px] text-[var(--text-dark)] font-bold mb-4 leading-[1.6]">
              Your data is telling you something. Let&apos;s help you hear it.
            </p>
            <p className="text-[15px] text-[var(--text-body)] leading-[1.75]">
              Most small businesses are sitting on more data than they realize — sales records, customer history, service logs, invoices. The problem isn&apos;t the data; it&apos;s that it lives in four different systems, nobody has time to pull it all together, and when they do the numbers don&apos;t match. Decisions end up made on gut feel or whichever figure someone pulled before the meeting. We connect your data, clean it up, and give you dashboards that show what&apos;s actually happening in your business — updated automatically, without anyone compiling a report.
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
                alt="Digital transformation and cloud migration for Ontario businesses — Karavan IT HUB modernizes legacy systems for SMBs"
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

            <p className="text-[17px] text-[var(--text-dark)] font-bold mb-4 leading-[1.6]">
              Technology that gets out of your way.
            </p>
            <p className="text-[15px] text-[var(--text-body)] leading-[1.75]">
              Digital transformation is a phrase that&apos;s been emptied of meaning by overuse. For an Ontario SMB, it means something specific: replacing the manual, paper-based, or disconnected processes that slow you down with technology that handles them automatically. Not rebuilding everything at once. Identifying where your team loses the most time, where errors are most costly, and where the right system removes friction for your customers — then fixing those things, one at a time. This is for the business that knows it could run more efficiently, but hasn&apos;t had the right guide to get there.
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
            <strong className="font-bold text-[var(--primary)]">Senior engineers.</strong> Direct access. No runaround. No offshore handoffs.
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
