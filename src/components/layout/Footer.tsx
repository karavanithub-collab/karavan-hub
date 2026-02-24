'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const footerLinks = {
  it: [
    { label: 'Software Development', href: '/it-solutions/software-development' },
    { label: 'Web Design & Development', href: '/it-solutions/web-design' },
    { label: 'Data Analytics', href: '/it-solutions/data-analytics' },
    { label: 'Digital Transformation', href: '/it-solutions/digital-transformation' },
  ],
  ai: [
    { label: 'AI Automation', href: '/ai-solutions/automation' },
    { label: 'Custom AI Apps', href: '/ai-solutions/custom-apps' },
    { label: 'AI Consulting', href: '/ai-solutions/consulting' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  const pathname = usePathname()
  const isInsights = pathname?.startsWith('/insights')
  const currentYear = new Date().getFullYear()

  // Instagram SVG
  const InstagramIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )

  // TikTok SVG
  const TikTokIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  )

  // LinkedIn SVG
  const LinkedInIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )

  // Canadian Flag SVG
  const CanadianFlag = () => (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      aria-hidden="true"
    >
      <rect width="5" height="14" fill="#FF0000" />
      <rect x="5" width="10" height="14" fill="#FFFFFF" />
      <rect x="15" width="5" height="14" fill="#FF0000" />
      <path
        d="M10 3L10.5 5H12L10.75 6L11.25 8L10 7L8.75 8L9.25 6L8 5H9.5L10 3Z"
        fill="#FF0000"
      />
    </svg>
  )

  return (
    <footer
      className={`text-white pt-[80px] pb-10 ${
        isInsights
          ? 'bg-[#2A2A2A]'
          : 'bg-gradient-to-b from-ocean-darkest via-ocean-dark to-ocean-mid'
      }`}
      role="contentinfo"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-10 lg:gap-[64px] pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-headline text-2xl font-bold tracking-[-0.5px] text-white">
                Karavan
              </span>
              <span className={`font-headline text-2xl font-bold tracking-[-0.5px] ${isInsights ? 'text-[#1A5A5A]' : 'text-accent-cyan'}`}>
                Hub
              </span>
            </Link>
            <p className="text-sm text-white/60 max-w-[280px] mb-4 leading-[1.7]">
              AI and IT solutions built for how your business actually works.
            </p>
            <div className="flex items-center gap-2 text-[13px] text-white/70 mb-5">
              <CanadianFlag />
              <span>Canadian-Owned</span>
            </div>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/karavanhub"
                aria-label="Follow us on Instagram"
                rel="noopener noreferrer"
                className={`text-white/50 transition-colors duration-250 ${isInsights ? 'hover:text-[#1A5A5A]' : 'hover:text-primary'}`}
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.tiktok.com/@karavanhub"
                aria-label="Follow us on TikTok"
                rel="noopener noreferrer"
                className={`text-white/50 transition-colors duration-250 ${isInsights ? 'hover:text-[#1A5A5A]' : 'hover:text-primary'}`}
              >
                <TikTokIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/karavanhub"
                aria-label="Follow us on LinkedIn"
                rel="noopener noreferrer"
                className={`text-white/50 transition-colors duration-250 ${isInsights ? 'hover:text-[#1A5A5A]' : 'hover:text-primary'}`}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* IT Solutions Column */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">IT Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.it.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-250"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Solutions Column */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">AI Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.ai.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-250"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-250"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 pt-8">
          <p className="text-sm text-white/50">
            &copy; {currentYear} Karavan IT HUB. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-white/50 hover:text-white transition-colors duration-250"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-white/50 hover:text-white transition-colors duration-250"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
