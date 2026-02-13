import { Metadata } from 'next';
import Link from 'next/link';
import Accordion from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'AI Solutions | Karavan Hub - AI Automation & Consulting in Niagara',
  description:
    'Make AI work for your business. Vertical AI automation, custom AI software solutions, and strategic AI consulting. 85% faster processing, 92% fewer errors.',
  canonical: 'https://karavanhub.com/ai-solutions',
  openGraph: {
    type: 'website',
    url: 'https://karavanhub.com/ai-solutions',
    title: 'AI Solutions for Business | Karavan IT HUB',
    description:
      'Make AI work for your business—not the other way around. Vertical AI automation, custom solutions, and strategic consulting.',
    images: [
      {
        url: 'https://karavanhub.com/images/og-ai-solutions.jpg',
        alt: 'Karavan Hub AI Solutions',
      },
    ],
    siteName: 'Karavan IT HUB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Solutions for Business | Karavan IT HUB',
    description:
      'Make AI work for your business. Vertical AI automation, custom AI software, and strategic consulting.',
    images: ['https://karavanhub.com/images/twitter-ai-solutions.jpg'],
  },
  keywords: [
    'AI solutions',
    'artificial intelligence',
    'business automation',
    'vertical AI',
    'AI integration',
    'machine learning',
    'AI consulting',
    'AI strategy',
    'process automation',
  ],
  robots: 'index, follow',
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Niagara, Ontario',
  },
};

export default function AISolutionsPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Solutions',
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
              'AI solutions for businesses including vertical AI automation, custom AI software development, and strategic AI consulting services.',
            areaServed: {
              '@type': 'Country',
              name: 'Canada',
            },
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
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
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
            ],
          }),
        }}
      />

      {/* HERO SECTION */}
      <section
        className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] relative overflow-hidden min-h-[90vh] flex items-center py-16 md:py-0"
        aria-labelledby="hero-heading"
      >
        {/* Background Orbs */}
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-gradient-radial from-[#3b82f6] to-transparent rounded-full blur-[80px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-radial from-[#22d3ee] to-transparent rounded-full blur-[80px] opacity-40 animate-pulse" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[350px] h-[350px] bg-gradient-radial from-[#8b5cf6] to-transparent rounded-full blur-[80px] opacity-40 animate-pulse" style={{ animationDelay: '-8s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-grain opacity-[0.02] pointer-events-none"></div>

        <div className="container-main relative z-10 py-20 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
            {/* Hero Text */}
            <div className="max-w-[560px] text-white">
              <div className="flex items-center gap-10 mb-10 text-xs font-medium letter-spacing-2 text-white/50 uppercase">
                <span>AI Solutions</span>
              </div>

              <h1
                id="hero-heading"
                className="font-headline text-4xl md:text-6xl font-bold text-white leading-tight mb-7 letter-spacing-tight"
              >
                Make AI work for{' '}
                <span className="block bg-gradient-to-r from-white to-[#22d3ee] bg-clip-text text-transparent">
                  your business.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/75 max-w-[500px] leading-relaxed font-body mb-9">
                Not the other way around. We build AI solutions that understand your industry, integrate with your
                systems, and deliver results you can measure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1e3a8a] px-8 py-4 rounded-lg font-semibold text-sm transition-all hover:bg-white/95 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  Book Free AI Consultation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-sm transition-all hover:bg-white/10 hover:border-white/50 w-full sm:w-auto"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>

            {/* Hero Visual - Neural Network ASCII */}
            <div className="flex items-center justify-center relative hidden lg:flex" aria-hidden="true">
              <div className="relative w-full max-w-[650px] min-h-[500px] flex items-center justify-center">
                {/* Ambient Glow Layers */}
                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[450px] bg-gradient-radial from-[rgba(139,92,246,0.12)] to-transparent blur-[80px] animate-pulse"></div>
                <div
                  className="absolute top-[30%] left-[45%] -translate-x-1/2 w-[350px] h-[300px] bg-gradient-radial from-[rgba(34,211,238,0.1)] to-transparent blur-[70px] animate-pulse"
                  style={{ animationDelay: '3s' }}
                ></div>
                <div
                  className="absolute bottom-[20%] right-[15%] w-[260px] h-[260px] bg-gradient-radial from-[rgba(34,211,238,0.08)] to-transparent blur-[60px] animate-pulse"
                  style={{ animationDelay: '5s' }}
                ></div>

                {/* Floating Particles */}
                <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ boxShadow: '0 0 15px rgba(147, 197, 253, 0.4)', '--delay': '0s' }}></div>
                <div className="absolute top-[30%] right-[15%] w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ boxShadow: '0 0 15px rgba(147, 197, 253, 0.4)', '--delay': '1.5s' }}></div>
                <div className="absolute bottom-[25%] left-[15%] w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ boxShadow: '0 0 15px rgba(147, 197, 253, 0.4)', '--delay': '3s' }}></div>
                <div className="absolute top-1/2 right-[25%] w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ boxShadow: '0 0 15px rgba(147, 197, 253, 0.4)', '--delay': '4.5s' }}></div>
                <div className="absolute bottom-[35%] right-[20%] w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ boxShadow: '0 0 15px rgba(147, 197, 253, 0.4)', '--delay': '6s' }}></div>

                {/* ASCII Art */}
                <div className="relative z-10 flex items-center justify-center">
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
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs uppercase letter-spacing-2 hidden md:flex">
          <span>Scroll</span>
          <div className="w-px h-[60px] bg-gradient-to-b from-white/40 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* WORKFLOWS SECTION */}
      <section className="py-[120px] md:py-[70px] bg-gradient-to-b from-[#f0f7ff] to-white relative overflow-hidden">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
            <div className="max-w-[520px]">
              <h2 className="font-headline text-3xl md:text-5xl font-semibold text-[#2563eb] mb-7 letter-spacing-tight">
                Your workflows are scattered. AI can unify them.
              </h2>
              <p className="text-lg md:text-lg text-[#4a4a68] mb-6 leading-relaxed">
                Your critical processes live across emails, spreadsheets, tools, and tribal knowledge. Everyone does
                them—but everyone does them differently.
              </p>

              <div className="my-8">
                <div className="flex items-start gap-3 mb-3">
                  <svg
                    className="w-5 h-5 text-[#2563eb] mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-[#4a4a68] text-sm">Manual hand-offs slow everything down</span>
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <svg
                    className="w-5 h-5 text-[#2563eb] mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-[#4a4a68] text-sm">Inconsistent execution creates quality problems</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#2563eb] mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-[#4a4a68] text-sm">Data silos make business decisions slower</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 py-8 border-t border-b border-[#e5e7eb] mb-8">
                <div className="flex flex-col gap-1">
                  <div className="font-headline text-3xl font-bold text-[#2563eb]">85%</div>
                  <div className="text-xs text-[#6b7280] font-medium uppercase">Faster Processing</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-headline text-3xl font-bold text-[#2563eb]">92%</div>
                  <div className="text-xs text-[#6b7280] font-medium uppercase">Fewer Errors</div>
                </div>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded-lg font-semibold text-sm uppercase letter-spacing-0.5 transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get Started Today
              </Link>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-gradient-radial from-[rgba(59,130,246,0.15)] to-transparent blur-[25px] pointer-events-none"></div>
              <pre className="font-mono text-2xl leading-[1.1] whitespace-pre text-center relative z-10 select-none">
                <span className="text-[#bfdbfe] glow-cyan">           ╭────────────────╮</span>
                {'\n'}
                <span className="text-[#bfdbfe] glow-cyan">          ╱                  ╲</span>
                {'\n'}
                <span className="text-[#93c5fd] glow-blue">         ╱  ╭──────────────╮  ╲</span>
                {'\n'}
                <span className="text-[#93c5fd] glow-blue">        ╱  ╱ ╰──────────────╯  ╲  ╲</span>
                {'\n'}
                <span className="text-[#60a5fa] glow-bright">       ╱  ╱                      ╲  ╲</span>
                {'\n'}
                <span className="text-[#3b82f6] glow-bright">      ╱  ╱      ◈ AI ENGINE ◈      ╲  ╲</span>
                {'\n'}
                <span className="text-[#3b82f6] glow-bright">     ╱  ╱                              ╲  ╲</span>
                {'\n'}
                <span className="text-[#2563eb] glow-bright">    ╱  ╱  ╭──────────────────────────╮  ╲  ╲</span>
                {'\n'}
                <span className="text-[#2563eb] glow-bright">   ╱  ╱  ╱ ╰──────────────────────────╯  ╲  ╲</span>
                {'\n'}
                <span className="text-[#3b82f6] glow-bright">   ╲  ╲ ╱   ╲ ╱   ╲ ╱   ╲</span>
                {'\n'}
                <span className="text-[#3b82f6] glow-bright">    ●─────●─────●─────●</span>
                {'\n'}
                <span className="text-[#60a5fa] glow-bright">   ╱ ╲   ╱ ╲   ╱ ╲   ╱ ╲</span>
                {'\n'}
                <span className="text-[#60a5fa] glow-bright">  ╱   ╲ ╱   ╲ ╱   ╲ ╱   ╲</span>
                {'\n'}
                <span className="text-[#2563eb] glow-bright"> ●─────●─────◆─────●─────●</span>
                {'\n'}
                <span className="text-[#93c5fd] glow-blue">  ╲   ╱ ╲   ╱ ╲   ╱ ╲   ╱</span>
                {'\n'}
                <span className="text-[#93c5fd] glow-blue">   ╲ ╱   ╲ ╱   ╲ ╱   ╲ ╱</span>
                {'\n'}
                <span className="text-[#60a5fa] glow-bright">    ●─────●─────●─────●</span>
                {'\n'}
                <span className="text-[#93c5fd] glow-blue">     ╲   ╱ ╲   ╱ ╲   ╱</span>
                {'\n'}
                <span className="text-[#93c5fd] glow-blue">      ╲ ╱   ╲ ╱   ╲ ╱</span>
                {'\n'}
                <span className="text-[#93c5fd] glow-blue">       ●─────●─────●</span>
                {'\n'}
                <span className="text-[#bfdbfe] glow-cyan">        ╲   ╱ ╲   ╱</span>
                {'\n'}
                <span className="text-[#bfdbfe] glow-cyan">         ╲ ╱   ╲ ╱</span>
                {'\n'}
                <span className="text-[#bfdbfe] glow-cyan">          ●─────●</span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* AI AUTOMATION & INTEGRATION SECTION */}
      <section id="solutions" className="py-[120px] md:py-[70px] bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] items-start">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-medium text-[#1a1a2e] mb-5 letter-spacing-tight">
                AI Automation & Integration
              </h2>
              <p className="text-lg font-bold text-[#1a1a2e] mb-8">Intelligent systems that work for you</p>
              <p className="text-base text-[#4a4a68] leading-relaxed mb-4">
                Automation isn't about replacing humans—it's about freeing them to focus on decisions that actually need
                human judgment.
              </p>
              <p className="text-base text-[#4a4a68] leading-relaxed mb-8">
                Your team spends hours on tasks AI handles in seconds: processing documents, entering data, generating
                reports, routing customer requests. We identify automation opportunities that deliver real ROI—then
                build and deploy solutions that work with your existing systems, not against them.
              </p>

              <Accordion
                type="software"
                items={[
                  {
                    title: 'AI Agents',
                    content: (
                      <div>
                        <p className="text-sm text-[#4a4a68] leading-relaxed mb-3">
                          Autonomous systems that handle complex multi-step tasks—from customer interactions to data
                          processing to business workflows. AI that works while you sleep.
                        </p>
                        <ul className="accordion-list space-y-3">
                          <li>
                            <strong>Customer Service Agents:</strong> Handle inquiries, resolve issues, escalate when
                            needed
                          </li>
                          <li>
                            <strong>Research Agents:</strong> Gather information, analyze data, generate reports
                          </li>
                          <li>
                            <strong>Workflow Agents:</strong> Orchestrate tasks across systems, trigger actions
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
                          Conversational AI trained on your data, integrated with your systems, designed for your
                          customers. Chatbots that actually help.
                        </p>
                        <ul className="accordion-list space-y-3">
                          <li>
                            <strong>Customer Support:</strong> Answer questions, troubleshoot issues, process requests
                          </li>
                          <li>
                            <strong>Internal Helpdesk:</strong> IT support, HR inquiries, policy questions
                          </li>
                          <li>
                            <strong>Sales Qualification:</strong> Engage leads, qualify prospects, schedule meetings
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
                          AI that knows your documents. Retrieval-Augmented Generation systems that answer questions
                          from your own data—accurately, with citations.
                        </p>
                        <ul className="accordion-list space-y-3">
                          <li>
                            <strong>Knowledge Bases:</strong> Internal documentation, policies, procedures
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
                          Custom models tailored to your domain. Industry-specific terminology, proprietary processes,
                          specialized outputs.
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
                            <strong>Performance Optimization:</strong> Balance speed, cost, and accuracy
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
                          Stop paying people to do what machines should handle. Document processing, workflow
                          automation, and data extraction that works.
                        </p>
                        <ul className="accordion-list space-y-3">
                          <li>
                            <strong>Document Processing:</strong> Invoices, contracts, forms, applications
                          </li>
                          <li>
                            <strong>Data Extraction:</strong> Pull structured data from unstructured sources
                          </li>
                          <li>
                            <strong>Workflow Routing:</strong> Tickets, approvals, notifications
                          </li>
                          <li>
                            <strong>Web Scraping:</strong> Data collection, monitoring, competitive intelligence
                          </li>
                        </ul>
                      </div>
                    ),
                  },
                  {
                    title: 'From Our Work',
                    content: (
                      <ul className="space-y-3">
                        <li>
                          <span className="text-[#2563eb] font-semibold">Vendor Payment System:</span> Built automated
                          payment processing for a multi-vendor platform—reducing manual reconciliation by{' '}
                          <strong>70%</strong> and eliminating payment delays that were costing client relationships.
                        </li>
                        <li>
                          <span className="text-[#2563eb] font-semibold">Hotel Booking Integration:</span> Connected
                          booking engine to legacy property management system using custom middleware—enabling
                          real-time availability updates that <strong>eliminated double-bookings</strong>.
                        </li>
                        <li>
                          <span className="text-[#2563eb] font-semibold">E-Commerce Order Flow:</span> Automated order
                          processing pipeline connecting Shopify to fulfillment centers—cutting order-to-ship time from{' '}
                          <strong>48 hours to same-day</strong>.
                        </li>
                      </ul>
                    ),
                    isHighlight: true,
                  },
                ]}
                defaultOpen={0}
              />

              <div className="mt-8">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-6 py-3 rounded-md font-semibold text-xs uppercase letter-spacing-2 transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5"
                >
                  Schedule a Consultation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a] rounded-3xl p-12 flex items-center justify-center min-h-[520px] relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <pre className="font-mono text-xs md:text-sm leading-[1.4] whitespace-pre text-left relative z-10 select-none">
                <span className="text-[rgba(148,163,184,0.5)]">            ╭──────────────────────────────╮</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">            │</span>     <span className="text-[#22d3ee] glow-cyan">◉</span><span className="text-[rgba(148,163,184,0.5)]">───────</span><span className="text-[#22d3ee] glow-cyan">◉</span><span className="text-[rgba(148,163,184,0.5)]">───────</span><span className="text-[#22d3ee] glow-cyan">◉</span>      <span className="text-[rgba(148,163,184,0.5)]">│</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">            │</span>     <span className="text-[rgba(148,163,184,0.5)]">│</span>       <span className="text-[rgba(148,163,184,0.5)]">│</span>       <span className="text-[rgba(148,163,184,0.5)]">│</span>      <span className="text-[rgba(148,163,184,0.5)]">│</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">            │</span>     <span className="text-[rgba(148,163,184,0.5)]">│</span>   <span className="text-[#a78bfa]">┌───┴───┐</span>   <span className="text-[rgba(148,163,184,0.5)]">│</span>      <span className="text-[rgba(148,163,184,0.5)]">│</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">            │</span>     <span className="text-[rgba(148,163,184,0.5)]">│</span>   <span className="text-[#a78bfa]">│</span> <span className="text-white">A I</span>   <span className="text-[#a78bfa]">│</span>   <span className="text-[rgba(148,163,184,0.5)]">│</span>      <span className="text-[rgba(148,163,184,0.5)]">│</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">            │</span>     <span className="text-[rgba(148,163,184,0.5)]">└───</span><span className="text-[#a78bfa]">│</span> <span className="text-[#22d3ee]">CORE</span>  <span className="text-[#a78bfa]">│</span><span className="text-[rgba(148,163,184,0.5)]">───┘</span>      <span className="text-[rgba(148,163,184,0.5)]">│</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">            │</span>         <span className="text-[#a78bfa]">└───┬───┘</span>          <span className="text-[rgba(148,163,184,0.5)]">│</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">            ╰───────────────┼──────────────╯</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">                            │</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">           ╭────────────────┼────────────────╮</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">           │                │                │</span>
                {'\n'}
                <span className="text-[#a78bfa]">     ┌─────┴─────┐    ┌─────┴─────┐    ┌─────┴─────┐</span>
                {'\n'}
                <span className="text-[#a78bfa]">     │</span> <span className="text-[#22d3ee]">⚡ AGENT</span> <span className="text-[#a78bfa]">│    │</span> <span className="text-[#22d3ee]">⚡ RAG</span>   <span className="text-[#a78bfa]">│    │</span> <span className="text-[#22d3ee]">⚡ LLM</span>  <span className="text-[#a78bfa]">│</span>
                {'\n'}
                <span className="text-[#a78bfa]">     │</span> <span className="text-[#60a5fa]">Workflow</span> <span className="text-[#a78bfa]">│    │</span> <span className="text-[#60a5fa]">Systems</span> <span className="text-[#a78bfa]">│    │</span> <span className="text-[#60a5fa]">Tuning</span> <span className="text-[#a78bfa]">│</span>
                {'\n'}
                <span className="text-[#a78bfa]">     └─────┬─────┘    └─────┬─────┘    └─────┬─────┘</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">           │                │                │</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">           ▼                ▼                ▼</span>
                {'\n'}
                <span className="text-[#60a5fa]">      ┌─────────┐      ┌─────────┐      ┌─────────┐</span>
                {'\n'}
                <span className="text-[#60a5fa]">      │</span><span className="text-[#22d3ee]">█████████</span><span className="text-[#60a5fa]">│      │</span><span className="text-[#22d3ee]">█████████</span><span className="text-[#60a5fa]">│      │</span><span className="text-[#22d3ee]">█████████</span><span className="text-[#60a5fa]">│</span>
                {'\n'}
                <span className="text-[#60a5fa]">      │</span><span className="text-white"> 85% ↑  </span><span className="text-[#60a5fa]">│      │</span><span className="text-white"> 92% ↓  </span><span className="text-[#60a5fa]">│      │</span><span className="text-white"> 10x ↑  </span><span className="text-[#60a5fa]">│</span>
                {'\n'}
                <span className="text-[#60a5fa]">      │</span><span className="text-[rgba(148,163,184,0.5)]"> faster </span><span className="text-[#60a5fa]">│      │</span><span className="text-[rgba(148,163,184,0.5)]"> errors </span><span className="text-[#60a5fa]">│      │</span><span className="text-[rgba(148,163,184,0.5)]"> scale  </span><span className="text-[#60a5fa]">│</span>
                {'\n'}
                <span className="text-[#60a5fa]">      └─────────┘      └─────────┘      └─────────┘</span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* AI SOFTWARE SOLUTIONS SECTION */}
      <section className="py-[120px] md:py-[70px] bg-[#f9fafb]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] items-start">
            <div className="bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a] rounded-3xl p-12 flex items-center justify-center min-h-[520px] relative overflow-hidden shadow-2xl order-2 lg:order-1">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <pre className="font-mono text-xs md:text-sm leading-[1.4] whitespace-pre text-left relative z-10 select-none">
                <span className="text-[rgba(148,163,184,0.5)]">      ┌────────────────────────────────────┐</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">      │</span> <span className="text-[#22d3ee]">▸</span> <span className="text-white">~/ai-software</span>                    <span className="text-[rgba(148,163,184,0.5)]">│</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">      ├────────────────────────────────────┤</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">      │</span> <span className="text-[#a78bfa]">import</span> <span className="text-[#22d3ee]">{'{'}  AIEngine  {'}'}</span> <span className="text-[#a78bfa]">from</span> <span className="text-[#60a5fa]">'@core'</span> <span className="text-[rgba(148,163,184,0.5)]">│</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">      │</span>                                    <span className="text-[rgba(148,163,184,0.5)]">│</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">      │</span> <span className="text-[#a78bfa]">const</span> <span className="text-white">app</span> <span className="text-[rgba(148,163,184,0.5)]">=</span> <span className="text-[#22d3ee]">new</span> <span className="text-[#60a5fa]">AIEngine</span><span className="text-[rgba(148,163,184,0.5)]">{'{'}(</span>       <span className="text-[rgba(148,163,184,0.5)]">│</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">      │</span>   <span className="text-white">model</span><span className="text-[rgba(148,163,184,0.5)]">:</span> <span className="text-[#60a5fa]">'GPT-4'</span><span className="text-[rgba(148,163,184,0.5)]">,</span>                 <span className="text-[rgba(148,163,184,0.5)]">│</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">      │</span>   <span className="text-white">framework</span><span className="text-[rgba(148,163,184,0.5)]">:</span> <span className="text-[#60a5fa]">'LangChain'</span><span className="text-[rgba(148,163,184,0.5)]">,</span>         <span className="text-[rgba(148,163,184,0.5)]">│</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">      │</span>   <span className="text-white">vector_db</span><span className="text-[rgba(148,163,184,0.5)]">:</span> <span className="text-[#60a5fa]">'Pinecone'</span>           <span className="text-[rgba(148,163,184,0.5)]">│</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">      │</span> <span className="text-[rgba(148,163,184,0.5)]">{'}'})</span>                                 <span className="text-[rgba(148,163,184,0.5)]">│</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">      │</span>                                    <span className="text-[rgba(148,163,184,0.5)]">│</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">      │</span> <span className="text-[#a78bfa]">await</span> <span className="text-white">app</span><span className="text-[rgba(148,163,184,0.5)]">.</span><span className="text-[#22d3ee]">deploy</span><span className="text-[rgba(148,163,184,0.5)]">()</span>  <span className="text-[#60a5fa]">✓ Live</span>       <span className="text-[rgba(148,163,184,0.5)]">│</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">      └────────────────────────────────────┘</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">                        │</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">        ╭───────────────┼───────────────╮</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">        │               │               │</span>
                {'\n'}
                <span className="text-[#22d3ee]">   ┌────┴────┐     ┌────┴────┐     ┌────┴────┐</span>
                {'\n'}
                <span className="text-[#22d3ee]">   │</span> <span className="text-white">BACKEND</span> <span className="text-[#22d3ee]">│     │</span><span className="text-white">FRONTEND</span> <span className="text-[#22d3ee]">│     │</span>  <span className="text-white">API</span>   <span className="text-[#22d3ee]">│</span>
                {'\n'}
                <span className="text-[#22d3ee]">   │</span> <span className="text-[#60a5fa]">.NET/Py</span> <span className="text-[#22d3ee]">│     │</span> <span className="text-[#60a5fa]">React</span>  <span className="text-[#22d3ee]">│     │</span> <span className="text-[#60a5fa]">REST</span>  <span className="text-[#22d3ee]">│</span>
                {'\n'}
                <span className="text-[#22d3ee]">   └────┬────┘     └────┬────┘     └────┬────┘</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">        │               │               │</span>
                {'\n'}
                <span className="text-[#a78bfa]">   ◉────┴───────────────┴───────────────┴────◉</span>
                {'\n'}
                <span className="text-[rgba(148,163,184,0.5)]">              </span><span className="text-[#60a5fa]">[ Production Ready ]</span>
              </pre>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-headline text-3xl md:text-4xl font-medium text-[#1a1a2e] mb-5 letter-spacing-tight">
                AI Software Solutions
              </h2>
              <p className="text-lg font-bold text-[#1a1a2e] mb-8">
                Custom AI applications built for your specific problems
              </p>
              <p className="text-base text-[#4a4a68] leading-relaxed mb-4">
                Off-the-shelf AI tools solve generic problems. Your business has specific ones. We build custom full
                stack AI applications that adapt to your processes—trained on your data, aligned with your workflows,
                built to improve over time.
              </p>
              <p className="text-base text-[#4a4a68] leading-relaxed mb-8">
                The difference is measurable. We work with leading AI frameworks—GPT, Claude, LLaMA, Falcon, Microsoft
                Semantic Kernel—and build on enterprise architecture (Azure, AWS, .NET Core, Python) that ensures
                security, scalability, and maintainability.
              </p>

              <Accordion
                type="software"
                items={[
                  {
                    title: 'Backend Development',
                    content: (
                      <div>
                        <p className="text-sm text-[#4a4a68] leading-relaxed mb-3">
                          We build the engine that powers your business software—the behind-the-scenes systems that
                          store your data, process transactions, and keep everything running. Now with AI built in, so
                          your systems can learn and adapt.
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
                          We create the screens and interfaces your team and customers actually use—clean, fast, and
                          intuitive. Websites and web apps that look professional, work on any device, and make
                          complex tasks feel simple.
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
                          We connect your different software tools so they talk to each other automatically. No more
                          copying data between systems or manual updates. Your CRM, accounting, inventory—all synced
                          and sharing information seamlessly.
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
                          We build apps for phones and tablets that your customers and staff can use anywhere. Whether
                          it's placing orders, checking inventory, or approving requests—your business fits in their
                          pocket.
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
                          We turn your messy business data into dashboards and reports that actually make sense. Ask
                          questions in plain English, get answers instantly. See trends, spot problems, make decisions
                          faster—without needing a data scientist on staff.
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
                      <ul className="space-y-3">
                        <li>
                          <span className="text-[#2563eb] font-semibold">RFP Response System:</span> Built RAG-powered
                          application that searches past proposals and generates draft responses—reducing RFP
                          turnaround from <strong>2 weeks to 3 days</strong> while improving win rates.
                        </li>
                        <li>
                          <span className="text-[#2563eb] font-semibold">Financial Document Analysis:</span> Developed
                          AI system for extracting and validating data from financial statements—achieving{' '}
                          <strong>92% accuracy</strong> with human-in-the-loop verification for edge cases.
                        </li>
                        <li>
                          <span className="text-[#2563eb] font-semibold">Compliance Knowledge Base:</span> Created
                          searchable AI assistant trained on regulatory documentation—enabling staff to find compliance
                          answers in <strong>seconds instead of hours</strong>.
                        </li>
                      </ul>
                    ),
                    isHighlight: true,
                  },
                ]}
                defaultOpen={0}
              />

              <div className="mt-8">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-6 py-3 rounded-md font-semibold text-xs uppercase letter-spacing-2 transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5"
                >
                  Discuss Your Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI STRATEGY CONSULTING SECTION */}
      <section className="py-[120px] md:py-[70px] bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] items-start">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-medium text-[#1a1a2e] mb-5 letter-spacing-tight">
                AI Strategy Consulting
              </h2>
              <p className="text-lg font-bold text-[#1a1a2e] mb-8">Know where AI fits—before you invest.</p>
              <p className="text-base text-[#4a4a68] leading-relaxed mb-8">
                Not every problem needs AI. And not every AI project delivers value. Our strategy consulting helps you
                separate hype from opportunity—identifying where AI creates measurable impact, building realistic
                roadmaps, and avoiding the costly pilots that never reach production.
              </p>

              <Accordion
                type="software"
                items={[
                  {
                    title: 'AI Readiness Assessment',
                    content: (
                      <p className="text-sm text-[#4a4a68]">
                        Evaluate your data, infrastructure, and organizational capacity
                      </p>
                    ),
                  },
                  {
                    title: 'Opportunity Mapping',
                    content: (
                      <p className="text-sm text-[#4a4a68]">
                        Identify use cases with realistic ROI projections
                      </p>
                    ),
                  },
                  {
                    title: 'Technology Selection',
                    content: (
                      <p className="text-sm text-[#4a4a68]">
                        Vendor-neutral recommendations on platforms and tools
                      </p>
                    ),
                  },
                  {
                    title: 'Implementation Roadmaps',
                    content: (
                      <p className="text-sm text-[#4a4a68]">
                        Phased plans balancing quick wins with long-term transformation
                      </p>
                    ),
                  },
                  {
                    title: 'Risk Assessment',
                    content: (
                      <p className="text-sm text-[#4a4a68]">
                        Technical, operational, and compliance risks identified upfront.
                      </p>
                    ),
                  },
                  {
                    title: 'From Our Work',
                    content: (
                      <ul className="space-y-3">
                        <li>
                          <span className="text-[#2563eb] font-semibold">Legacy Modernization Roadmap:</span> Assessed
                          monolithic .NET application and designed microservices migration strategy—enabling client to{' '}
                          <strong>modernize incrementally</strong> without disrupting operations.
                        </li>
                        <li>
                          <span className="text-[#2563eb] font-semibold">AI Opportunity Assessment:</span> Evaluated 12
                          potential AI use cases for logistics company—recommended <strong>3 high-impact initiatives</strong>{' '}
                          and advised against 9 that wouldn't deliver meaningful ROI.
                        </li>
                      </ul>
                    ),
                    isHighlight: true,
                  },
                ]}
                defaultOpen={0}
              />

              <div className="mt-8">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-6 py-3 rounded-md font-semibold text-xs uppercase letter-spacing-2 transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5"
                >
                  Discuss Your Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1e3a8a] rounded-3xl p-12 flex items-center justify-center min-h-[520px] relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="relative z-10 text-white text-center max-w-md">
                <div className="text-6xl font-bold mb-4 text-[#22d3ee] glow-cyan">85%</div>
                <p className="text-xl font-semibold mb-8">Faster Processing</p>
                <div className="border-t border-white/20 my-8"></div>
                <div className="text-6xl font-bold mb-4 text-[#22d3ee] glow-cyan">92%</div>
                <p className="text-xl font-semibold mb-8">Fewer Errors</p>
                <div className="border-t border-white/20 my-8"></div>
                <div className="text-6xl font-bold mb-4 text-[#22d3ee] glow-cyan">10x</div>
                <p className="text-xl font-semibold">Improved Scalability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-[100px] md:py-[70px] bg-gradient-to-b from-[#f8fafc] to-[#eff6ff] relative overflow-hidden">
        <div className="container-main">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-[#2563eb] uppercase letter-spacing-2 mb-5">
              Industries
            </p>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-5 letter-spacing-tight">
              AI that speaks your industry's language.
            </h2>
            <p className="text-lg text-[#4a4a68]">
              Built around how your industry already works—your workflows, your compliance, your terminology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Healthcare */}
            <div className="group bg-gradient-to-br from-white to-[#f8fafc] border border-[#2563eb]/10 rounded-2xl p-7 transition-all hover:border-[#2563eb]/25 hover:shadow-lg hover:-translate-y-1">
              <div className="h-1 w-full bg-gradient-to-r from-[#2563eb] to-[#22d3ee] rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-headline text-xl font-semibold text-[#1a1a2e] mb-2">Healthcare</h3>
              <p className="text-base text-[#4a4a68] mb-4">AI that respects compliance—and clinical reality.</p>
              <div className="h-px bg-gradient-to-r from-[#e5e7eb] via-[#2563eb]/15 to-[#e5e7eb] my-4"></div>
              <p className="text-sm text-[#6b7280]">Transcription • EHR • Claims • Patient Support</p>
            </div>

            {/* Fintech */}
            <div className="group bg-gradient-to-br from-white to-[#f8fafc] border border-[#2563eb]/10 rounded-2xl p-7 transition-all hover:border-[#2563eb]/25 hover:shadow-lg hover:-translate-y-1">
              <div className="h-1 w-full bg-gradient-to-r from-[#2563eb] to-[#22d3ee] rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-headline text-xl font-semibold text-[#1a1a2e] mb-2">Fintech</h3>
              <p className="text-base text-[#4a4a68] mb-4">AI that understands financial complexity.</p>
              <div className="h-px bg-gradient-to-r from-[#e5e7eb] via-[#2563eb]/15 to-[#e5e7eb] my-4"></div>
              <p className="text-sm text-[#6b7280]">Compliance • Risk • KYC • Fraud Detection</p>
            </div>

            {/* E-Commerce */}
            <div className="group bg-gradient-to-br from-white to-[#f8fafc] border border-[#2563eb]/10 rounded-2xl p-7 transition-all hover:border-[#2563eb]/25 hover:shadow-lg hover:-translate-y-1">
              <div className="h-1 w-full bg-gradient-to-r from-[#2563eb] to-[#22d3ee] rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-headline text-xl font-semibold text-[#1a1a2e] mb-2">E-Commerce</h3>
              <p className="text-base text-[#4a4a68] mb-4">AI that drives sales—not just traffic.</p>
              <div className="h-px bg-gradient-to-r from-[#e5e7eb] via-[#2563eb]/15 to-[#e5e7eb] my-4"></div>
              <p className="text-sm text-[#6b7280]">Search • Recommendations • Support • Content</p>
            </div>

            {/* Logistics */}
            <div className="group bg-gradient-to-br from-white to-[#f8fafc] border border-[#2563eb]/10 rounded-2xl p-7 transition-all hover:border-[#2563eb]/25 hover:shadow-lg hover:-translate-y-1">
              <div className="h-1 w-full bg-gradient-to-r from-[#2563eb] to-[#22d3ee] rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-headline text-xl font-semibold text-[#1a1a2e] mb-2">Logistics</h3>
              <p className="text-base text-[#4a4a68] mb-4">AI that moves goods smarter.</p>
              <div className="h-px bg-gradient-to-r from-[#e5e7eb] via-[#2563eb]/15 to-[#e5e7eb] my-4"></div>
              <p className="text-sm text-[#6b7280]">Routes • Forecasting • Inventory • Tracking</p>
            </div>

            {/* Real Estate */}
            <div className="group bg-gradient-to-br from-white to-[#f8fafc] border border-[#2563eb]/10 rounded-2xl p-7 transition-all hover:border-[#2563eb]/25 hover:shadow-lg hover:-translate-y-1">
              <div className="h-1 w-full bg-gradient-to-r from-[#2563eb] to-[#22d3ee] rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-headline text-xl font-semibold text-[#1a1a2e] mb-2">Real Estate</h3>
              <p className="text-base text-[#4a4a68] mb-4">AI that automates property management.</p>
              <div className="h-px bg-gradient-to-r from-[#e5e7eb] via-[#2563eb]/15 to-[#e5e7eb] my-4"></div>
              <p className="text-sm text-[#6b7280]">Leasing • Payments • Maintenance • Comms</p>
            </div>

            {/* Government */}
            <div className="group bg-gradient-to-br from-white to-[#f8fafc] border border-[#2563eb]/10 rounded-2xl p-7 transition-all hover:border-[#2563eb]/25 hover:shadow-lg hover:-translate-y-1">
              <div className="h-1 w-full bg-gradient-to-r from-[#2563eb] to-[#22d3ee] rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-headline text-xl font-semibold text-[#1a1a2e] mb-2">Government</h3>
              <p className="text-base text-[#4a4a68] mb-4">AI built for public sector requirements.</p>
              <div className="h-px bg-gradient-to-r from-[#e5e7eb] via-[#2563eb]/15 to-[#e5e7eb] my-4"></div>
              <p className="text-sm text-[#6b7280]">Citizen Services • Policy • Documents • Data</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL CAPABILITIES SECTION */}
      <section className="py-[100px] md:py-[70px] bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container-main relative z-10">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-white/50 uppercase letter-spacing-2 mb-5">
              Technical Stack
            </p>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-5">
              Built with <span className="text-[#22d3ee]">Enterprise-Grade</span> Technology
            </h2>
            <p className="text-lg text-white/70">
              We use the latest AI frameworks and cloud infrastructure to ensure your solutions are secure, scalable,
              and future-proof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI Frameworks */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 transition-all hover:bg-white/8 hover:border-white/15">
              <h4 className="font-headline text-lg font-semibold text-white mb-5">AI Frameworks</h4>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  OpenAI GPT-4
                </span>
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  Claude API
                </span>
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  LangChain
                </span>
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  LlamaIndex
                </span>
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  Hugging Face
                </span>
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  Microsoft Semantic Kernel
                </span>
              </div>
            </div>

            {/* Cloud & Infrastructure */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 transition-all hover:bg-white/8 hover:border-white/15">
              <h4 className="font-headline text-lg font-semibold text-white mb-5">Cloud & Infrastructure</h4>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  Azure AI Services
                </span>
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  AWS Bedrock
                </span>
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  Docker
                </span>
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  Kubernetes
                </span>
              </div>
            </div>

            {/* Vector Databases */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 transition-all hover:bg-white/8 hover:border-white/15">
              <h4 className="font-headline text-lg font-semibold text-white mb-5">Vector Databases</h4>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  Pinecone
                </span>
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  ChromaDB
                </span>
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  PostgreSQL + pgvector
                </span>
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  Weaviate
                </span>
              </div>
            </div>

            {/* Backend & Frontend */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 transition-all hover:bg-white/8 hover:border-white/15">
              <h4 className="font-headline text-lg font-semibold text-white mb-5">Backend & Frontend</h4>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  .NET Core
                </span>
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  Python
                </span>
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  Node.js
                </span>
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/95 transition-all hover:bg-[#2563eb]/35 hover:border-[#2563eb]/60 hover:-translate-y-0.5 hover:shadow-lg">
                  React / Next.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section id="contact" className="py-[120px] md:py-[70px] bg-[#f9fafb]">
        <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-medium text-[#1a1a2e] mb-5 letter-spacing-tight">
            Ready to make AI work for your business?
          </h2>
          <p className="text-lg text-[#4a4a68] max-w-xl mx-auto mb-9 leading-relaxed">
            Let's talk about where AI can have the biggest impact. No sales pitch—just a conversation about what's
            possible.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-[#2563eb] text-white px-9 py-4 rounded-lg font-semibold text-sm transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg"
            >
              Book Free AI Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
