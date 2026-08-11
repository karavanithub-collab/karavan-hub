import { Metadata } from 'next'
import FreeFixForm from '@/components/sections/FreeFixForm'

export const metadata: Metadata = {
  title: 'Get One Free Fix for Your Business',
  description:
    'Tell us your business and get back the one thing we would fix first to get you more calls, bookings, or walk-ins. Free, no call required, reply within 48 hours.',
  robots: {
    index: false,
    follow: false,
  },
}

const steps = [
  {
    title: 'You fill this out',
    text: 'Sixty seconds, four questions, done.',
  },
  {
    title: 'We look at your business',
    text: 'Your website, your Google listing, how a customer actually finds and books you.',
  },
  {
    title: 'You get one specific fix by email within 48 hours',
    text: 'Use it yourself, hand it to whoever runs your site, or ask us to do it.',
  },
]

export default function FreeFixPage() {
  return (
    <>
      {/* ── Hero + Form (same background treatment as /contact) ── */}
      <section
        className="relative overflow-hidden pt-[110px] md:pt-[130px] pb-[60px] md:pb-[80px]"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #2563eb 100%)' }}
        aria-labelledby="free-fix-heading"
      >
        {/* Animated gradient orbs */}
        <div
          className="absolute rounded-full opacity-40 hidden md:block"
          style={{
            width: 500, height: 500, top: -150, right: -100,
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'orbFloat 12s ease-in-out infinite',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute rounded-full opacity-40"
          style={{
            width: 350, height: 350, bottom: -100, left: -80,
            background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'orbFloat 12s ease-in-out infinite',
            animationDelay: '-4s',
          }}
          aria-hidden="true"
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />

        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          }}
          aria-hidden="true"
        />

        {/* Floating particle dots */}
        <div className="absolute w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ top: '15%', left: '12%', boxShadow: '0 0 15px rgba(147,197,253,0.4)', willChange: 'transform', transform: 'translateZ(0)' }} aria-hidden="true" />
        <div className="absolute w-1 h-1 bg-[rgba(147,197,253,0.6)] rounded-full animate-float" style={{ top: '30%', right: '10%', animationDelay: '1.5s', boxShadow: '0 0 15px rgba(147,197,253,0.4)', willChange: 'transform', transform: 'translateZ(0)' }} aria-hidden="true" />
        <div className="absolute w-1.5 h-1.5 bg-[rgba(34,211,238,0.8)] rounded-full animate-float" style={{ bottom: '20%', left: '8%', animationDelay: '3s', boxShadow: '0 0 15px rgba(34,211,238,0.4)', willChange: 'transform', transform: 'translateZ(0)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-[640px] mx-auto px-5 sm:px-6 md:px-8">
          <p className="text-[11px] font-semibold text-white/50 uppercase tracking-[2px] mb-4">
            Takes about 60 seconds.
          </p>

          <h1
            id="free-fix-heading"
            className="font-headline text-[30px] sm:text-[36px] md:text-[42px] font-bold text-white leading-[1.15] tracking-[-0.5px] mb-5"
          >
            Tell me your business. I&apos;ll send back the one thing I&apos;d fix first.
          </h1>

          <p className="text-[15px] md:text-[17px] text-white/70 leading-[1.7] md:leading-[1.8] mb-8">
            One specific, practical fix to get you more calls, bookings, or walk-ins — written
            for your business, not a template. Free. No call required. It lands in your inbox
            within 48 hours.
          </p>

          <FreeFixForm />
        </div>

        {/* CSS keyframe animations (same as /contact) */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes orbFloat {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -30px) scale(1.05); }
            66% { transform: translate(-20px, 20px) scale(0.95); }
          }
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}} />
      </section>

      {/* ── How it works ── */}
      <section className="py-[60px] md:py-[80px] bg-white" aria-labelledby="how-it-works-heading">
        <div className="max-w-[640px] mx-auto px-5 sm:px-6 md:px-8">
          <h2
            id="how-it-works-heading"
            className="font-headline text-[26px] sm:text-[32px] font-medium text-[var(--text-dark)] tracking-[-0.5px] leading-[1.2] mb-8"
          >
            How it works
          </h2>

          <ol className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex items-start gap-4">
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--primary-light)] text-[var(--primary)] font-headline text-[15px] font-semibold flex items-center justify-center"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-headline text-[17px] font-semibold text-[var(--text-dark)] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-[var(--text-body)] leading-[1.7]">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── About ── */}
      <section className="pb-[60px] md:pb-[80px] bg-white" aria-label="About Karavan IT Hub">
        <div className="max-w-[640px] mx-auto px-5 sm:px-6 md:px-8">
          <div className="bg-[var(--bg-light)] border border-[var(--border-light)] rounded-[16px] p-7">
            <p className="text-[15px] text-[var(--text-body)] leading-[1.7]">
              Karavan IT Hub is a Niagara-based studio building websites and booking systems for
              local businesses — recent work includes Quick Fit Auto Repair, American Mailbox, and
              the booking setup for Aegean Escape Villas. The free fix is how we introduce
              ourselves: some turn into projects, the rest is good word of mouth. That&apos;s the
              whole deal.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
