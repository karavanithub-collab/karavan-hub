import type { Metadata } from 'next'

// Terms of use, approved by Nyah 24 Oct 2026 (task w04). Source text: website-copy/terms-of-service.md in the project folder.
// The URL stays /terms-of-service because the footer already links to it. When hello@karavanhub.com exists, replace the Gmail address.

export const metadata: Metadata = {
  title: 'Terms of use | Karavan IT Hub',
  description: 'The plain rules for using karavanhub.com.',
  alternates: { canonical: 'https://www.karavanhub.com/terms-of-service' },
  robots: { index: true, follow: true },
}

const EMAIL = 'karavan.it.hub@gmail.com'

export default function TermsOfUse() {
  return (
    <article className="mx-auto max-w-[720px] px-5 pb-24 pt-32 md:px-8 text-[17px] leading-[1.7] text-[var(--text-body)]">
      <h1 className="font-headline text-4xl font-bold tracking-tight text-[var(--text-dark)] md:text-5xl">Terms of use</h1>
      <p className="mt-3 text-sm text-[var(--text-muted)]">Last updated: 24 October 2026</p>

      <p className="mt-8">
        Thanks for visiting karavanhub.com. The site is run by Karavan IT Hub, Pelham, Ontario. By using it you agree to the few plain rules below.
      </p>

      <h2 className="mt-10 font-headline text-2xl font-bold text-[var(--text-dark)]">What this site is for</h2>
      <p className="mt-3">
        The site describes what we do and lets you get in touch. Nothing on it is a quote or a contract. Prices shown are starting points; the price for your project is the one we put in writing for you, and that written document is what we both work from.
      </p>

      <h2 className="mt-10 font-headline text-2xl font-bold text-[var(--text-dark)]">Using what is here</h2>
      <p className="mt-3">
        The words, pictures and design on this site belong to Karavan IT Hub or to the people who let us use them. You can read, link to and share pages. Please do not copy the content to use as your own.
      </p>

      <h2 className="mt-10 font-headline text-2xl font-bold text-[var(--text-dark)]">Information and advice</h2>
      <p className="mt-3">
        We write about websites, software and automation in plain words and we try to keep it accurate. It is general information, not advice for your specific situation, and it can go out of date. Before you make a decision for your business, talk to us or to someone who knows your circumstances.
      </p>

      <h2 className="mt-10 font-headline text-2xl font-bold text-[var(--text-dark)]">Links to other sites</h2>
      <p className="mt-3">
        Some pages link to tools and companies we do not control. We are not responsible for what is on those sites or for how they handle your information.
      </p>

      <h2 className="mt-10 font-headline text-2xl font-bold text-[var(--text-dark)]">Forms and email</h2>
      <p className="mt-3">
        When you send us a message through the site, you agree that we may reply to you by email. You will not be added to any list unless you sign up for one. Our{' '}
        <a href="/privacy-policy" className="text-[#2563EB] underline">privacy policy</a> says what we collect and how we handle it.
      </p>

      <h2 className="mt-10 font-headline text-2xl font-bold text-[var(--text-dark)]">Keeping the site running</h2>
      <p className="mt-3">
        We do our best to keep the site available and free of problems, but we cannot promise it will always be up or error-free. We are not liable for loss that comes from relying on the site or from it being unavailable. If you have paid us for work, the contract for that work sets out our responsibilities; this page does not change it.
      </p>

      <h2 className="mt-10 font-headline text-2xl font-bold text-[var(--text-dark)]">Where disputes go</h2>
      <p className="mt-3">
        These terms are governed by the laws of Ontario and Canada. If we ever disagree, we would rather talk first. Failing that, Ontario courts have jurisdiction.
      </p>

      <h2 className="mt-10 font-headline text-2xl font-bold text-[var(--text-dark)]">Changes</h2>
      <p className="mt-3">We may update these terms. The date at the top tells you when we last did.</p>

      <h2 className="mt-10 font-headline text-2xl font-bold text-[var(--text-dark)]">Contact</h2>
      <p className="mt-3">
        <a href={`mailto:${EMAIL}`} className="text-[#2563EB] underline">{EMAIL}</a>
      </p>
    </article>
  )
}
