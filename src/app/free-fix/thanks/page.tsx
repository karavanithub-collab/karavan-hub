import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Got It — Your Fix Is on the Way',
  description: 'Your free fix request has been received. One specific fix lands in your inbox within 48 hours.',
  robots: {
    index: false,
    follow: false,
  },
}

// TODO: replace with the real 15-minute booking link before launch
const BOOKING_URL = 'BOOKING_URL_PLACEHOLDER'

export default function FreeFixThanksPage() {
  return (
    <section
      className="relative overflow-hidden flex items-center min-h-screen pt-[110px] md:pt-[130px] pb-[60px] md:pb-[80px]"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #2563eb 100%)' }}
      aria-labelledby="thanks-heading"
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

      <div className="relative z-10 max-w-[640px] mx-auto px-5 sm:px-6 md:px-8 w-full">
        {/* RECEIVED stamp */}
        <div
          className="inline-block font-headline text-[13px] font-bold uppercase tracking-[3px] text-[#22D3EE] border-2 border-[#22D3EE] rounded-lg px-4 py-2 mb-8 -rotate-6"
          style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.25), inset 0 0 12px rgba(34, 211, 238, 0.1)' }}
          role="status"
        >
          Received
        </div>

        <h1
          id="thanks-heading"
          className="font-headline text-[30px] sm:text-[36px] md:text-[42px] font-bold text-white leading-[1.15] tracking-[-0.5px] mb-5"
        >
          Got it. Your fix lands within 48 hours.
        </h1>

        <p className="text-[15px] md:text-[17px] text-white/70 leading-[1.7] md:leading-[1.8] mb-10">
          We&apos;ll take a proper look at your business and email you one specific thing
          we&apos;d fix first — keep an eye on your inbox and spam folder.
        </p>

        {/* Skip the wait card */}
        <div className="bg-white rounded-[20px] p-7 lg:p-10 shadow-[0_24px_64px_rgba(0,0,0,0.08)] border border-[var(--border-light)]">
          <h2 className="font-headline text-2xl font-semibold text-[var(--text-dark)] mb-3">
            Want to skip the wait?
          </h2>
          <p className="text-[16px] text-[var(--text-body)] leading-[1.7] mb-6">
            If you&apos;d rather we walk you through it live, grab 15 minutes and we&apos;ll
            show you what we found on a quick screen-share. No pitch, no obligation.
          </p>
          <a
            href={BOOKING_URL}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-[var(--primary)] text-white px-8 py-4 rounded-lg font-headline text-[15px] font-semibold no-underline transition-all duration-300 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5 shadow-lg"
          >
            Book a free 15-minute walkthrough
          </a>
          <p className="text-xs text-[var(--text-muted)] mt-3">
            Totally optional — the emailed fix is coming either way.
          </p>
        </div>
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
  )
}
