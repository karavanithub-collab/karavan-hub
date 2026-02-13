import { Metadata } from 'next';
import Link from 'next/link';
const Check = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);
import AccordionWrapper from '@/components/it-solutions/AccordionWrapper';

export const metadata: Metadata = {
  title: 'IT Solutions for Small & Medium Businesses | Karavan IT HUB',
  description:
    'IT solutions built around how your business actually operates. Custom software, web design, data analytics, and digital transformation—no workarounds required. Book a free consultation.',
  keywords:
    'IT solutions, custom software development, web design, data analytics, digital transformation, SMB technology, business software, cloud applications, mobile app development',
  openGraph: {
    type: 'website',
    url: 'https://karavanhub.com/it-solutions',
    title: 'IT Solutions for Small & Medium Businesses | Karavan IT HUB',
    description:
      'IT solutions built around how your business actually operates. Custom software, web design, data analytics, and digital transformation—no workarounds required.',
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
      'IT solutions built around how your business actually operates. Custom software, web design, data analytics, and digital transformation—no workarounds required.',
    images: ['https://karavanhub.com/images/twitter-it-solutions.jpg'],
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
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: 'English',
    },
  },
  description:
    'Custom IT solutions for small and medium businesses including software development, web design, data analytics, and digital transformation services.',
  areaServed: {
    '@type': 'Country',
    name: 'Canada',
  },
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
        text: 'Karavan IT HUB provides custom software development, web design and development, data analytics dashboards, and digital transformation services specifically designed for small and medium businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is custom software different from off-the-shelf solutions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom software is built around your specific workflows and business processes, eliminating workarounds and unnecessary features. It grows with your business and integrates seamlessly with your existing tools.',
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
        text: 'Data analytics transforms scattered information into clear dashboards that show what\'s actually happening in your business. It helps you make decisions based on facts rather than gut feelings.',
      },
    },
  ],
};

export default function ITSolutionsPage() {
  // Software Solutions Accordion Items
  const softwareItems = [
    {
      title: 'Cloud-Native Applications',
      content: (
        <p>
          Apps that grow with you—scale up when you need more, scale down when you don't. No more paying for servers collecting dust or panicking during busy seasons.
        </p>
      ),
    },
    {
      title: 'Full-Stack Development',
      content: (
        <p>
          Everything from the user interface to the database, handled by one team. No finger-pointing, no handoffs between vendors—just people who understand the whole picture.
        </p>
      ),
    },
    {
      title: 'System Modernization',
      content: (
        <p>
          That legacy system everyone's afraid to touch? We help you move forward—carefully, methodically, without disrupting what's working.
        </p>
      ),
    },
    {
      title: 'Mobile App Development',
      content: (
        <p>
          Your customers are on their phones. Meet them there. iOS, Android, or both—apps that feel polished and work flawlessly.
        </p>
      ),
    },
    {
      title: 'API Development & Integration',
      content: (
        <p>
          Tired of copying data between systems? We connect your tools so information flows automatically—no more double-entry, no more version confusion.
        </p>
      ),
    },
    {
      title: 'The Business Impact',
      content: (
        <ul className="impact-list">
          <li>
            <Check className="check-icon" size={18} />
            <span>Stop paying for features you don't use—and missing ones you need</span>
          </li>
          <li>
            <Check className="check-icon" size={18} />
            <span>Reduce training time when software matches how your team already thinks</span>
          </li>
          <li>
            <Check className="check-icon" size={18} />
            <span>Scale without switching platforms every time you outgrow a tool</span>
          </li>
          <li>
            <Check className="check-icon" size={18} />
            <span>Own your technology instead of renting someone else's limitations</span>
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
          Your site should look and feel right whether someone's on a laptop, tablet, or phone. We make sure it does—no pinching, no awkward scrolling.
        </p>
      ),
    },
    {
      title: 'E-Commerce Development',
      content: (
        <p>
          An online store that's easy for customers to buy from—and easy for you to manage. Secure checkout, sensible product organization, and the tools you need behind the scenes.
        </p>
      ),
    },
    {
      title: 'Web Applications',
      content: (
        <p>
          Sometimes you need more than a website—you need something that does work. Customer portals, booking systems, interactive tools that solve real problems.
        </p>
      ),
    },
    {
      title: 'CMS Implementation',
      content: (
        <p>
          You should be able to update your own content—without waiting on us or worrying you'll break something. We set you up with a system that makes sense for your team.
        </p>
      ),
    },
    {
      title: 'Performance Optimization',
      content: (
        <p>
          Slow sites frustrate visitors and hurt your search rankings. We make sure yours loads fast—because first impressions matter.
        </p>
      ),
    },
    {
      title: 'The Business Impact',
      content: (
        <ul className="impact-list">
          <li>
            <Check className="check-icon" size={18} />
            <span>Convert more of the traffic you're already paying for</span>
          </li>
          <li>
            <Check className="check-icon" size={18} />
            <span>Rank higher when Google rewards your site speed and mobile experience</span>
          </li>
          <li>
            <Check className="check-icon" size={18} />
            <span>Update content yourself without waiting (or paying) for developer time</span>
          </li>
          <li>
            <Check className="check-icon" size={18} />
            <span>Build credibility before the first sales conversation even happens</span>
          </li>
        </ul>
      ),
      isHighlight: true,
    },
  ];

  // Analytics Accordion Items
  const analyticsItems = [
    {
      title: 'Business Intelligence Dashboards',
      content: (
        <p>
          The numbers that actually matter to your business, updated in real-time and visible to the people who need them. No more frantic Monday morning data pulls.
        </p>
      ),
    },
    {
      title: 'Data Integration & ETL',
      content: (
        <p>
          Your CRM says one thing, your accounting software says another. We connect everything so you have one version of the truth—not twelve conflicting spreadsheets.
        </p>
      ),
    },
    {
      title: 'Data Warehousing',
      content: (
        <p>
          A proper home for all that data—organized, searchable, and ready to answer whatever questions come up next quarter.
        </p>
      ),
    },
    {
      title: 'Automated Reporting',
      content: (
        <p>
          Weekly reports that write themselves. Monthly board decks that don't consume three days of someone's week. Your team has better things to do.
        </p>
      ),
    },
    {
      title: 'Predictive Analytics',
      content: (
        <p>
          What if you could see problems before they happen? Churn prediction, demand forecasting, opportunity scoring—data that helps you get ahead instead of catch up.
        </p>
      ),
    },
    {
      title: 'The Business Impact',
      content: (
        <ul className="impact-list">
          <li>
            <Check className="check-icon" size={18} />
            <span>Make decisions in hours that used to take weeks of analysis</span>
          </li>
          <li>
            <Check className="check-icon" size={18} />
            <span>Spot problems and opportunities before your competitors do</span>
          </li>
          <li>
            <Check className="check-icon" size={18} />
            <span>Free up the people currently stuck compiling reports to do actual work</span>
          </li>
          <li>
            <Check className="check-icon" size={18} />
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
      title: 'Digital Strategy Development',
      content: (
        <p>
          A clear plan that makes sense for your business—what to tackle first, what to phase in, and honestly, what to skip. No trying to change everything at once.
        </p>
      ),
    },
    {
      title: 'Process Automation',
      content: (
        <p>
          Your team didn't sign up to copy data between systems or chase down approvals. We automate the tedious stuff so they can focus on work that actually matters.
        </p>
      ),
    },
    {
      title: 'Legacy System Modernization',
      content: (
        <p>
          That system everyone's afraid to touch? We'll help you move forward—carefully, step by step—without disrupting what's still working.
        </p>
      ),
    },
    {
      title: 'Cloud Migration',
      content: (
        <p>
          Infrastructure that grows with you, costs less to maintain, and lets your team work from anywhere. We handle the migration so you can focus on running your business.
        </p>
      ),
    },
    {
      title: 'Customer Experience Transformation',
      content: (
        <p>
          Make it easier for customers to work with you. Self-service options, simpler processes, faster responses—the kind of experience that builds loyalty.
        </p>
      ),
    },
    {
      title: 'The Business Impact',
      content: (
        <ul className="impact-list">
          <li>
            <Check className="check-icon" size={18} />
            <span>Recover the hours your team loses to manual workarounds every week</span>
          </li>
          <li>
            <Check className="check-icon" size={18} />
            <span>Reduce the errors that come from humans doing repetitive tasks</span>
          </li>
          <li>
            <Check className="check-icon" size={18} />
            <span>Scale operations without hiring proportionally more people</span>
          </li>
          <li>
            <Check className="check-icon" size={18} />
            <span>Compete with larger players who've already made these investments</span>
          </li>
        </ul>
      ),
      isHighlight: true,
    },
  ];

  return (
    <main>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ============================================
           HERO SECTION
           ============================================ */}
      <section className="hero" aria-label="IT Solutions Overview">
        {/* Animated gradient orbs */}
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>

        {/* Grid pattern */}
        <div className="hero-grid-pattern"></div>

        {/* Grain texture */}
        <div className="grain-overlay"></div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Technology built around you,<br />
              <span className="accent">not the other way around.</span>
            </h1>
            <p className="hero-subtitle">
              Most IT forces you to adapt. We take a different approach—understanding how your business actually operates, then building solutions that fit. No workarounds required.
            </p>
            <Link href="#" className="hero-cta">
              Book a Consultation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          {/* ASCII Tech Visual - Abstract Tech Flow */}
          <div className="hero-visual">
            <div className="ascii-visual">
              {/* Ethereal glow layers */}
              <div className="hero-glow-1"></div>
              <div className="hero-glow-2"></div>
              <div className="hero-glow-3"></div>

              {/* Floating particles */}
              <div className="hero-particle hero-particle-1"></div>
              <div className="hero-particle hero-particle-2"></div>
              <div className="hero-particle hero-particle-3"></div>
              <div className="hero-particle hero-particle-4"></div>
              <div className="hero-particle hero-particle-5"></div>
              <div className="hero-particle hero-particle-6"></div>
              <div className="hero-particle hero-particle-7"></div>

              {/* Flow lines */}
              <div className="flow-line flow-line-1"></div>
              <div className="flow-line flow-line-2"></div>
              <div className="flow-line flow-line-3"></div>
              <div className="flow-line flow-line-4"></div>

              {/* ASCII Tech Flow Pattern */}
              <div className="circuit-container">
                <pre className="circuit-ascii">
{`          ·    ·    ·    ·    ·    ·    ·    ·
       ·                                         ·
    ╭─────────○───────────○───────────○─────────╮
    │         │           │           │         │
 ───┼─────────┼───────────┼───────────┼─────────┼───
    │         │           │           │         │
    │   ╔═════════════════════════════════════╗   │
    │   ║                                     ║   │
    │   ║    ██╗████████╗                   ║   │
    │   ║    ██║╚══██╔══╝                   ║   │
 ○──┤   ║    ██║   ██║     SOLUTIONS       ║   ├──○
    │   ║    ██║   ██║     THAT WORK       ║   │
    │   ║    ██║   ██║                      ║   │
    │   ║    ╚═╝   ╚═╝                      ║   │
    │   ║                                     ║   │
    │   ║          ◈      ◈      ◈          ║   │
    │   ╚═════════════════════════════════════╝   │
    │         │           │           │         │
 ───┼─────────┼───────────┼───────────┼─────────┼───
    │         │           │           │         │
    ╰─────────○───────────○───────────○─────────╯
       ·                                         ·
          ·    ·    ·    ·    ·    ·    ·    ·`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ============================================
           SOFTWARE SOLUTIONS SECTION
           ============================================ */}
      <section className="software-section" id="software-solutions" aria-labelledby="software-heading">
        <div className="software-container">
          {/* Left Column: Content */}
          <div className="software-content">
            <h2 id="software-heading">Software Solutions</h2>

            <p className="software-lead">Your business is unique. Your software should be too.</p>

            <p className="software-intro">
              We've watched too many SMBs struggle with off-the-shelf tools that almost work—but not quite. The workarounds pile up, the team gets frustrated, and eventually someone asks: <em>isn't there something built for how we actually operate?</em>
            </p>
            <p className="software-intro">
              That's what we build. Customer portals, internal tools, mobile apps—shaped around your workflows, not the other way around. No forcing your team to adapt to rigid software. No paying for features you'll never use.
            </p>

            {/* Accordion Items */}
            <AccordionWrapper items={softwareItems} type="software" />

            {/* CTA Button */}
            <div className="software-cta">
              <Link href="#" className="software-cta-btn">
                Schedule a Consultation
              </Link>
            </div>
          </div>

          {/* Right Column: Stunning ASCII App Interface */}
          <div className="software-visual">
            {/* Cyberpunk visual layers */}
            <div className="circuit-overlay"></div>
            <div className="scanline-overlay"></div>
            <div className="edge-glow"></div>

            {/* Depth glow layers */}
            <div className="depth-glow cyan-1"></div>
            <div className="depth-glow purple-1"></div>
            <div className="depth-glow cyan-2"></div>

            {/* Corner accents */}
            <div className="corner-accent top-left"></div>
            <div className="corner-accent top-right"></div>
            <div className="corner-accent bottom-left"></div>
            <div className="corner-accent bottom-right"></div>

            {/* Holographic floating labels */}
            <div className="holo-label left" style={{ top: '25%', left: '8%' }}>API Ready</div>
            <div className="holo-label purple right" style={{ top: '45%', right: '5%' }}>Cloud Native</div>
            <div className="holo-label left" style={{ bottom: '30%', left: '5%' }}>Real-time</div>

            {/* Hotspot glow points */}
            <div className="hotspot" style={{ top: '15%', left: '25%' }}></div>
            <div className="hotspot purple small" style={{ top: '35%', right: '20%' }}></div>
            <div className="hotspot small" style={{ bottom: '25%', left: '30%' }}></div>
            <div className="hotspot purple" style={{ bottom: '15%', right: '35%' }}></div>

            <div className="software-ascii-wrap">
              <pre className="software-ascii">
{`    ╔════════════════════════════════════════════════════════════╗
    ║  ●  ●  ●   │  Custom Application                        ║
    ╠════════════════════════════════════════════════════════════╣
    ║                                                            ║
    ║   ┌──────────────────────────────────────────────────┐   ║
    ║   │                                                  │   ║
    ║   │   ┌────────────┐   ┌────────────┐   ┌────────────┐   ║
    ║   │   │  $47,250   │   │   1,284    │   │  +23.5%    │   ║
    ║   │   │  Revenue   │   │   Users    │   │  Growth    │   ║
    ║   │   └────────────┘   └────────────┘   └────────────┘   ║
    ║   │                                                  │   ║
    ║   │   ● Dashboard          │   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 92%   │   ║
    ║   │   ○ Analytics           │   ▓▓▓▓▓▓▓▓▓▓▓▓    78%   │   ║
    ║   │   ○ Reports             │   ▓▓▓▓▓▓▓▓▓       64%   │   ║
    ║   │   ○ Integrations        │   ▓▓▓▓▓▓▓▓▓▓▓▓▓   85%   │   ║
    ║   │   ○ Settings            │   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  91%   │   ║
    ║   │                                                  │   ║
    ║   └──────────────────────────────────────────────────┘   ║
    ║                                                            ║
    ║          ◈  CUSTOM  •  SCALABLE  •  YOURS  ◈           ║
    ║                                                            ║
    ╚════════════════════════════════════════════════════════════╝`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           WEB DESIGN & DEVELOPMENT SECTION
           ============================================ */}
      <section className="webdesign-section" id="web-design" aria-labelledby="webdesign-heading">
        <div className="webdesign-container">
          {/* Left Column: Stunning ASCII Browser Window */}
          <div className="webdesign-visual">
            {/* Cyberpunk visual layers */}
            <div className="circuit-overlay" style={{ opacity: 0.3 }}></div>
            <div className="scanline-overlay"></div>
            <div className="edge-glow"></div>

            {/* Depth glow layers - purple accent */}
            <div className="depth-glow purple-1" style={{ top: '15%', left: '15%' }}></div>
            <div className="depth-glow cyan-1" style={{ bottom: '20%', right: '10%' }}></div>
            <div className="depth-glow purple-1" style={{ top: '55%', right: '25%', width: '180px' }}></div>

            {/* Corner accents - purple variant */}
            <div className="corner-accent top-left" style={{ borderColor: 'rgba(157, 78, 221, 0.4)' }}></div>
            <div className="corner-accent top-right" style={{ borderColor: 'rgba(157, 78, 221, 0.4)' }}></div>
            <div className="corner-accent bottom-left" style={{ borderColor: 'rgba(157, 78, 221, 0.4)' }}></div>
            <div className="corner-accent bottom-right" style={{ borderColor: 'rgba(157, 78, 221, 0.4)' }}></div>

            {/* Holographic floating labels */}
            <div className="holo-label purple left" style={{ top: '20%', left: '5%' }}>Responsive</div>
            <div className="holo-label right" style={{ top: '50%', right: '3%' }}>SEO Ready</div>
            <div className="holo-label purple left" style={{ bottom: '25%', left: '8%' }}>Fast Load</div>

            {/* Hotspot glow points */}
            <div className="hotspot purple" style={{ top: '12%', left: '20%' }}></div>
            <div className="hotspot small" style={{ top: '40%', right: '15%' }}></div>
            <div className="hotspot purple small" style={{ bottom: '35%', left: '25%' }}></div>
            <div className="hotspot" style={{ bottom: '18%', right: '30%' }}></div>

            <div className="webdesign-ascii-wrap">
              <pre className="webdesign-ascii">
{`    ╔════════════════════════════════════════════════════════════╗
    ║  ●  ●  ●   │  🔒 yoursite.com                          ║
    ╠════════════════════════════════════════════════════════════╣
    ║                                                            ║
    ║   ┌──────────────────────────────────────────────────┐   ║
    ║   │                                                  │   ║
    ║   │   ██████████████████████████████████████████   │   ║
    ║   │   ██                                      ██   │   ║
    ║   │   ██      Your Brand Here                ██   │   ║
    ║   │   ██      Tagline that converts          ██   │   ║
    ║   │   ██                                      ██   │   ║
    ║   │   ██      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓      ██   │   ║
    ║   │   ██████████████████████████████████████████   │   ║
    ║   │                                                  │   ║
    ║   └──────────────────────────────────────────────────┘   ║
    ║                                                            ║
    ║   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   ║
    ║   │ ████████ │ │ ████████ │ │ ████████ │ │ ████████ │   ║
    ║   │ Services │ │ About    │ │ Work     │ │ Contact  │   ║
    ║   └──────────┘ └──────────┘ └──────────┘ └──────────┘   ║
    ║                                                            ║
    ║        ◈  FAST  •  RESPONSIVE  •  CONVERTS  ◈         ║
    ║                                                            ║
    ╚════════════════════════════════════════════════════════════╝`}
              </pre>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="webdesign-content">
            <h2 id="webdesign-heading">Web Design & Development</h2>

            <p className="webdesign-lead">A website that works as hard as you do.</p>

            <p className="webdesign-intro">
              Your website is often the first conversation you have with potential customers. It should feel like you—professional, clear, and genuinely helpful. Not just pretty, but purposeful.
            </p>
            <p className="webdesign-intro">
              We design sites that guide visitors toward action. Fast because people don't wait. Mobile-first because that's where they're browsing. And easy for you to update, because you shouldn't need a developer every time something changes.
            </p>

            {/* Accordion Items */}
            <AccordionWrapper items={webdesignItems} type="webdesign" />

            {/* CTA Button */}
            <div className="webdesign-cta">
              <Link href="#" className="webdesign-cta-btn">
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           DATA ANALYTICS & DASHBOARDS SECTION
           ============================================ */}
      <section className="analytics-section" id="data-analytics" aria-labelledby="analytics-heading">
        <div className="analytics-container">
          {/* Left Column: Content */}
          <div className="analytics-content">
            <h2 id="analytics-heading">Data Analytics & Dashboards</h2>

            <p className="analytics-lead">See what's really happening in your business.</p>

            <p className="analytics-intro">
              You've got data scattered across a dozen systems. The answers are in there somewhere—but pulling them together takes hours, and by the time you do, the numbers are already stale.
            </p>
            <p className="analytics-intro">
              We bring it all together. Live dashboards that show you what matters: which customers are most engaged, where the bottlenecks are, what's actually driving revenue. Real answers, updated automatically—so you can make decisions instead of compiling spreadsheets.
            </p>

            {/* Accordion Items */}
            <AccordionWrapper items={analyticsItems} type="analytics" />

            {/* CTA Button */}
            <div className="analytics-cta">
              <Link href="#" className="analytics-cta-btn">
                Discover Your Data
              </Link>
            </div>
          </div>

          {/* Right Column: Stunning ASCII Dashboard */}
          <div className="analytics-visual">
            {/* Cyberpunk visual layers */}
            <div className="circuit-overlay"></div>
            <div className="scanline-overlay"></div>
            <div className="edge-glow"></div>

            {/* Depth glow layers - cyan accent */}
            <div className="depth-glow cyan-1" style={{ top: '20%', right: '10%' }}></div>
            <div className="depth-glow cyan-2" style={{ bottom: '25%', left: '15%' }}></div>
            <div className="depth-glow purple-1" style={{ top: '50%', left: '60%' }}></div>

            {/* Corner accents */}
            <div className="corner-accent top-left"></div>
            <div className="corner-accent top-right"></div>
            <div className="corner-accent bottom-left"></div>
            <div className="corner-accent bottom-right"></div>

            {/* Holographic floating labels */}
            <div className="holo-label left" style={{ top: '18%', left: '6%' }}>Live Data</div>
            <div className="holo-label purple right" style={{ top: '42%', right: '4%' }}>AI Insights</div>
            <div className="holo-label left" style={{ bottom: '22%', left: '4%' }}>KPI Metrics</div>

            {/* Hotspot glow points */}
            <div className="hotspot" style={{ top: '10%', right: '25%' }}></div>
            <div className="hotspot purple small" style={{ top: '38%', left: '18%' }}></div>
            <div className="hotspot small" style={{ bottom: '30%', right: '20%' }}></div>
            <div className="hotspot purple" style={{ bottom: '12%', left: '35%' }}></div>

            <div className="analytics-ascii-wrap">
              <pre className="analytics-ascii">
{`    ╔════════════════════════════════════════════════════════════╗
    ║  ●  ●  ●   │  📊 Analytics Dashboard                    ║
    ╠════════════════════════════════════════════════════════════╣
    ║                                                            ║
    ║   ┌────────────────┐  ┌────────────────┐  ┌────────────────┐  ║
    ║   │   $124,500     │  │    1,847       │  │   +23.5%       │  ║
    ║   │   Revenue      │  │   Customers    │  │   ↑ Growth     │  ║
    ║   └────────────────┘  └────────────────┘  └────────────────┘  ║
    ║                                                            ║
    ║   ┌──────────────────────────────────────────────────┐   ║
    ║   │                         ▄▄                       │   ║
    ║   │                    ▄▄  ██                       │   ║
    ║   │               ▄▄  ██  ██  ▄▄                  │   ║
    ║   │          ▄▄  ██  ██  ██  ██  ▄▄             │   ║
    ║   │     ▄▄  ██  ██  ██  ██  ██  ██  ▄▄        │   ║
    ║   │    ─────────────────────────────────────────   │   ║
    ║   │     Jan  Feb  Mar  Apr  May  Jun  Jul  Aug      │   ║
    ║   └──────────────────────────────────────────────────┘   ║
    ║                                                            ║
    ║          ◈  DATA  →  INSIGHTS  →  ACTION  ◈           ║
    ║                                                            ║
    ╚════════════════════════════════════════════════════════════╝`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           DIGITAL TRANSFORMATION SECTION
           ============================================ */}
      <section className="transform-section" id="digital-transformation" aria-labelledby="transform-heading">
        <div className="transform-container">
          {/* Left Column: Stunning ASCII Transformation */}
          <div className="transform-visual">
            {/* Cyberpunk visual layers - purple variant */}
            <div className="circuit-overlay"></div>
            <div className="scanline-overlay"></div>
            <div className="edge-glow" style={{ boxShadow: 'inset 0 1px 0 rgba(157, 78, 221, 0.3), inset 0 -1px 0 rgba(191, 0, 255, 0.2), inset 1px 0 0 rgba(157, 78, 221, 0.2), inset -1px 0 0 rgba(191, 0, 255, 0.2)' }}></div>

            {/* Depth glow layers - strong purple */}
            <div className="depth-glow purple-1" style={{ top: '15%', left: '20%', width: '280px', background: 'rgba(157, 78, 221, 0.18)' }}></div>
            <div className="depth-glow purple-1" style={{ bottom: '20%', right: '15%', width: '250px', background: 'rgba(191, 0, 255, 0.15)' }}></div>
            <div className="depth-glow cyan-1" style={{ top: '45%', right: '50%', width: '200px', background: 'rgba(0, 212, 255, 0.08)' }}></div>

            {/* Corner accents - purple */}
            <div className="corner-accent top-left" style={{ borderColor: 'rgba(191, 0, 255, 0.5)' }}></div>
            <div className="corner-accent top-right" style={{ borderColor: 'rgba(191, 0, 255, 0.5)' }}></div>
            <div className="corner-accent bottom-left" style={{ borderColor: 'rgba(191, 0, 255, 0.5)' }}></div>
            <div className="corner-accent bottom-right" style={{ borderColor: 'rgba(191, 0, 255, 0.5)' }}></div>

            {/* Holographic floating labels */}
            <div className="holo-label purple left" style={{ top: '22%', left: '5%' }}>Automation</div>
            <div className="holo-label left" style={{ top: '48%', right: '3%' }}>AI Powered</div>
            <div className="holo-label purple left" style={{ bottom: '20%', left: '6%' }}>Future Ready</div>

            {/* Hotspot glow points - more purple */}
            <div className="hotspot purple" style={{ top: '15%', left: '30%' }}></div>
            <div className="hotspot purple" style={{ top: '35%', right: '18%' }}></div>
            <div className="hotspot small" style={{ bottom: '40%', left: '22%' }}></div>
            <div className="hotspot purple" style={{ bottom: '15%', right: '28%' }}></div>
            <div className="hotspot purple small" style={{ top: '55%', left: '50%' }}></div>

            <div className="transform-ascii-wrap">
              <pre className="transform-ascii">
{`    ╔════════════════════════════════════════════════════════════╗
    ║                                                            ║
    ║            ⚡ DIGITAL TRANSFORMATION ⚡                   ║
    ║                                                            ║
    ║   ┌─────────────────┐              ┌─────────────────┐   ║
    ║   │     LEGACY      │              │     MODERN      │   ║
    ║   │                 │              │                 │   ║
    ║   │   ░░░░░░░░░   │              │   █████████   │   ║
    ║   │   ░░░░░░░░░   │  ═══════▶   │   █████████   │   ║
    ║   │   ░░░░░░░░░   │              │   █████████   │   ║
    ║   │                 │              │                 │   ║
    ║   └─────────────────┘              └─────────────────┘   ║
    ║                                                            ║
    ║   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ║
    ║   │    CLOUD     │──│   AUTOMATE   │──│    SCALE     │  ║
    ║   │     ☁️       │  │     ⚙️       │  │     📈       │  ║
    ║   └──────────────┘  └──────────────┘  └──────────────┘  ║
    ║          │               │                │             ║
    ║          ◇───────────────◇────────────────◇             ║
    ║                                                            ║
    ║          ◈  EVOLVE  •  ADAPT  •  GROW  ◈            ║
    ║                                                            ║
    ╚════════════════════════════════════════════════════════════╝`}
              </pre>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="transform-content">
            <h2 id="transform-heading">Digital Transformation</h2>

            <p className="transform-lead">Technology that actually makes your life easier.</p>

            <p className="transform-intro">
              "Digital transformation" gets thrown around a lot. Here's what it means to us: finding the parts of your operation that waste time, create errors, or frustrate your team—and fixing them with technology that genuinely helps.
            </p>
            <p className="transform-intro">
              We're not interested in change for change's sake. We look for practical improvements that pay for themselves: automating the repetitive work nobody wants to do, connecting systems that should talk to each other, building tools that grow with you instead of holding you back.
            </p>

            {/* Accordion Items */}
            <AccordionWrapper items={transformItems} type="transform" />

            {/* CTA Button */}
            <div className="transform-cta">
              <Link href="#" className="transform-cta-btn">
                Start Your Transformation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           TECHNOLOGY STACK SECTION
           ============================================ */}
      <section className="tech-section" id="technology-stack" aria-labelledby="tech-heading">
        {/* Animated glow orbs */}
        <div className="tech-glow tech-glow-1"></div>
        <div className="tech-glow tech-glow-2"></div>
        <div className="tech-glow tech-glow-3"></div>

        <div className="tech-container">
          <div className="tech-header">
            <h2 id="tech-heading" className="tech-headline">
              We pick tools that <strong>solve your problem</strong>—<br />
              not chase trends.
            </h2>
            <p className="tech-subheadline">
              The right technology depends on what you're building. We match proven solutions to your specific needs—no buzzwords, no overkill.
            </p>
          </div>

          <div className="tech-grid">
            {/* Software Solutions Card */}
            <div className="tech-card">
              <h3 className="tech-card-title">Software Solutions</h3>
              <div className="tech-tags">
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/dotnet/512BD4" alt=".NET Core logo" />.NET Core</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/openjdk/ED8B00" alt="Java logo" />Java</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/python/3776AB" alt="Python logo" />Python</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js logo" />Node.js</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/springboot/6DB33F" alt="Spring Boot logo" />Spring Boot</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="React logo" />React</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/angular/DD0031" alt="Angular logo" />Angular</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript logo" />TypeScript</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/graphql/E10098" alt="GraphQL logo" />GraphQL</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker logo" />Docker</span>
              </div>
            </div>

            {/* Website Design & Development Card */}
            <div className="tech-card">
              <h3 className="tech-card-title">Website Design & Development</h3>
              <div className="tech-tags">
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="React logo" />React</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/nextdotjs/ffffff" alt="Next.js logo" />Next.js</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript logo" />JavaScript</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5 logo" />HTML5</span>
                <span className="tech-tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 logo" />CSS3</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/wordpress/21759B" alt="WordPress logo" />WordPress</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/shopify/7AB55C" alt="Shopify logo" />Shopify</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/woocommerce/96588A" alt="WooCommerce logo" />WooCommerce</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma logo" />Figma</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/stripe/626CD9" alt="Stripe logo" />Stripe</span>
              </div>
            </div>

            {/* Data Analytics & Dashboards Card */}
            <div className="tech-card">
              <h3 className="tech-card-title">Data Analytics & Dashboards</h3>
              <div className="tech-tags">
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/python/3776AB" alt="Python logo" />Python</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/pandas/150458" alt="Pandas logo" />Pandas</span>
                <span className="tech-tag"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI logo" />Power BI</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/tableau/E97627" alt="Tableau logo" />Tableau</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/apachespark/E25A1C" alt="Apache Spark logo" />Apache Spark</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/apacheairflow/017CEE" alt="Airflow logo" />Airflow</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/chartdotjs/FF6384" alt="Chart.js logo" />Chart.js</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/postman/FF6C37" alt="Postman logo" />Postman</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/mysql/4479A1" alt="MySQL logo" />MySQL</span>
              </div>
            </div>

            {/* Digital Transformation Card */}
            <div className="tech-card">
              <h3 className="tech-card-title">Digital Transformation</h3>
              <div className="tech-tags">
                <span className="tech-tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS logo" />AWS</span>
                <span className="tech-tag"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure logo" />Azure</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/googlecloud/4285F4" alt="Google Cloud logo" />Google Cloud</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker logo" />Docker</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/kubernetes/326CE5" alt="Kubernetes logo" />Kubernetes</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/githubactions/2088FF" alt="CI/CD logo" />CI/CD</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL logo" />PostgreSQL</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB logo" />MongoDB</span>
                <span className="tech-tag"><img src="https://cdn.simpleicons.org/redis/DC382D" alt="Redis logo" />Redis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           TRUST/STATS SECTION
           ============================================ */}
      <section className="trust-section" id="why-karavan" aria-labelledby="trust-headline">
        <div className="trust-container">
          <div className="trust-header">
            <p className="trust-label">We don't disappear after the contract is signed.</p>
            <h2 className="trust-headline" id="trust-headline">
              <strong>Senior engineers.</strong> Direct access. No runaround.
            </h2>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">30+</div>
              <div className="stat-label">Years Combined Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">Senior</div>
              <div className="stat-label">Engineers—No Handoffs</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">Fortune</div>
              <div className="stat-label">500 Background</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">100%</div>
              <div className="stat-label">Canadian-Owned</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-banner" aria-label="Contact Call to Action">
        <div className="cta-banner-container">
          <div className="cta-card">
            <h2>Tired of working around your technology?</h2>
            <p>Let's figure out what's getting in your way and build something that fits how you actually work.</p>
            <Link href="#" className="hero-cta" aria-label="Book a free consultation with Karavan IT HUB">
              Book a Free Consultation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
