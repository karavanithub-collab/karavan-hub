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
      {/* ── Hero + Form ── */}
      <section
        className="pt-[110px] md:pt-[130px] pb-[60px] md:pb-[80px] bg-gradient-to-b from-[var(--bg-light)] to-white"
        aria-labelledby="free-fix-heading"
      >
        <div className="max-w-[640px] mx-auto px-5 sm:px-6 md:px-8">
          <p className="text-[13px] font-semibold text-[var(--primary)] uppercase tracking-[1.5px] mb-4">
            Takes about 60 seconds.
          </p>

          <h1
            id="free-fix-heading"
            className="font-headline text-[30px] sm:text-[36px] md:text-[42px] font-bold text-[var(--text-dark)] leading-[1.15] tracking-[-0.5px] mb-5"
          >
            Tell me your business. I&apos;ll send back the one thing I&apos;d fix first.
          </h1>

          <p className="text-[16px] md:text-[17px] text-[var(--text-body)] leading-[1.7] mb-8">
            One specific, practical fix to get you more calls, bookings, or walk-ins — written
            for your business, not a template. Free. No call required. It lands in your inbox
            within 48 hours.
          </p>

          <FreeFixForm />
        </div>
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
