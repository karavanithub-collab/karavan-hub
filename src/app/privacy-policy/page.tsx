import type { Metadata } from 'next'

// Privacy policy, approved by Nyah 24 Oct 2026 (task w04). Source text: website-copy/privacy-policy.md in the project folder.
// When hello@karavanhub.com exists, replace the Gmail address here (two places).

export const metadata: Metadata = {
  title: 'Privacy policy | Karavan IT Hub',
  description: 'What karavanhub.com collects when you use a form or sign up for the newsletter, why, and how to ask us to delete it.',
  alternates: { canonical: 'https://www.karavanhub.com/privacy-policy' },
  robots: { index: true, follow: true },
}

const EMAIL = 'karavan.it.hub@gmail.com'

export default function PrivacyPolicy() {
  return (
    <article className="mx-auto max-w-[720px] px-5 pb-24 pt-32 md:px-8 text-[17px] leading-[1.7] text-[var(--text-body)]">
      <h1 className="font-headline text-4xl font-bold tracking-tight text-[var(--text-dark)] md:text-5xl">Privacy policy</h1>
      <p className="mt-3 text-sm text-[var(--text-muted)]">Last updated: 24 October 2026</p>

      <p className="mt-8">
        Karavan IT Hub is a small business in Pelham, Ontario. This page says what we collect when you use karavanhub.com, why, and what you can ask us to do about it.
      </p>

      <h2 className="mt-10 font-headline text-2xl font-bold text-[var(--text-dark)]">What we collect, and why</h2>
      <p className="mt-3">
        When you fill in a form on this site, we receive what you typed: your name, your email address, your business name if you gave it, what you are interested in, and your message. The form sends it to us as an email. We use it to reply to you and for nothing else.
      </p>
      <p className="mt-3">
        If you sign up for our newsletter, we keep your email address so we can send it. Every email we send has an unsubscribe link, and we stop the moment you use it.
      </p>
      <p className="mt-3">
        We use Vercel Analytics to count visits to pages. It does not use cookies and does not identify you. We see how many people visited a page, which country they were in and what kind of device they used. We do not see who you are.
      </p>
      <p className="mt-3">We do not run advertising trackers, and we do not place cookies on your device for marketing.</p>

      <h2 className="mt-10 font-headline text-2xl font-bold text-[var(--text-dark)]">Where it goes</h2>
      <p className="mt-3">
        Form messages and newsletter emails are sent through Resend, an email service, and arrive in our business mailbox at Google. Our website runs on Vercel. These companies process the data on our behalf and store it on servers that may be outside Canada, including in the United States. We do not sell your information, and we do not share it with anyone else unless the law requires it.
      </p>

      <h2 className="mt-10 font-headline text-2xl font-bold text-[var(--text-dark)]">How long we keep it</h2>
      <p className="mt-3">
        We keep your message as long as we are talking with you about work, and for up to one year after that in case you come back. Newsletter addresses are kept until you unsubscribe. You can ask us to delete anything sooner.
      </p>

      <h2 className="mt-10 font-headline text-2xl font-bold text-[var(--text-dark)]">Your choices</h2>
      <p className="mt-3">
        You can ask us, at any time, to show you what we hold about you, correct it, or delete it. Email{' '}
        <a href={`mailto:${EMAIL}`} className="text-[#2563EB] underline">{EMAIL}</a> and we will do it within 30 days.
      </p>

      <h2 className="mt-10 font-headline text-2xl font-bold text-[var(--text-dark)]">Questions or complaints</h2>
      <p className="mt-3">
        Write to <a href={`mailto:${EMAIL}`} className="text-[#2563EB] underline">{EMAIL}</a>. If you are not happy with our answer, you can contact the Office of the Privacy Commissioner of Canada at{' '}
        <a href="https://www.priv.gc.ca" className="text-[#2563EB] underline" rel="noopener">priv.gc.ca</a>.
      </p>

      <h2 className="mt-10 font-headline text-2xl font-bold text-[var(--text-dark)]">Changes</h2>
      <p className="mt-3">If we change how we handle your information, we will update this page and the date at the top.</p>
    </article>
  )
}
