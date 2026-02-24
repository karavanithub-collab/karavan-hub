'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type DropdownMenus = {
  [key: string]: boolean
}

const navDropdowns = {
  ai: [
    { label: 'AI Automation', href: '/ai-solutions/automation' },
    { label: 'Custom AI Apps', href: '/ai-solutions/custom-apps' },
    { label: 'AI Consulting', href: '/ai-solutions/consulting' },
  ],
  it: [
    { label: 'Software Development', href: '/it-solutions#software-solutions' },
    { label: 'Web Design', href: '/it-solutions#web-design' },
    { label: 'Data Analytics', href: '/it-solutions#data-analytics' },
    { label: 'Digital Transformation', href: '/it-solutions#digital-transformation' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
    { aggregate: true, label: 'View All Company', href: '/company' },
  ],
}

type MobileSubmenus = {
  [key: string]: boolean
}

export default function Navbar() {
  const pathname = usePathname()
  const isInsights = pathname?.startsWith('/insights')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenus, setMobileSubmenus] = useState<MobileSubmenus>({
    ai: false,
    it: false,
    company: false,
  })

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const toggleMobileSubmenu = (menu: string) => {
    setMobileSubmenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMobileMenu()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [mobileMenuOpen])

  const DropdownArrow = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-3 h-3 transition-transform duration-250"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-[12px] shadow-nav'
            : isInsights
              ? 'bg-[#F5F5F0]'
              : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 no-underline">
            <span
              className={`font-headline text-2xl font-bold tracking-[-0.5px] transition-colors duration-300 ${
                isScrolled || isInsights ? 'text-text-dark' : 'text-white'
              }`}
            >
              Karavan
            </span>
            <span
              className={`font-headline text-2xl font-bold tracking-[-0.5px] transition-colors duration-300 ${
                isScrolled || isInsights
                  ? isInsights ? 'text-[#1A5A5A]' : 'text-primary'
                  : 'text-accent-cyan'
              }`}
            >
              Hub
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex gap-9 list-none">
            {/* AI Solutions */}
            <li className="relative group">
              <Link
                href="/ai-solutions"
                className={`flex items-center gap-1.5 text-[15px] font-semibold transition-colors duration-300 no-underline ${
                  isScrolled || isInsights
                    ? isInsights ? 'text-text-body group-hover:text-[#1A5A5A]' : 'text-text-body group-hover:text-primary'
                    : 'text-white/90 group-hover:text-accent-cyan'
                }`}
              >
                AI Solutions
                <DropdownArrow />
              </Link>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible transform -translate-y-2 transition-all duration-250 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <div className="bg-white rounded-xl shadow-dropdown border border-border-light py-3 min-w-[220px]">
                  {navDropdowns.ai.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-2.5 text-sm font-medium text-text-body hover:bg-primary-light hover:text-primary transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="h-px bg-border-light my-2"></div>
                  <Link
                    href="/ai-solutions"
                    className="block px-5 py-2.5 text-sm font-medium text-text-body hover:bg-primary-light hover:text-primary transition-all duration-200"
                  >
                    View All AI Solutions →
                  </Link>
                </div>
              </div>
            </li>

            {/* IT Solutions */}
            <li className="relative group">
              <Link
                href="/it-solutions"
                className={`flex items-center gap-1.5 text-[15px] font-semibold transition-colors duration-300 no-underline ${
                  isScrolled || isInsights
                    ? isInsights ? 'text-text-body group-hover:text-[#1A5A5A]' : 'text-text-body group-hover:text-primary'
                    : 'text-white/90 group-hover:text-accent-cyan'
                }`}
              >
                IT Solutions
                <DropdownArrow />
              </Link>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible transform -translate-y-2 transition-all duration-250 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <div className="bg-white rounded-xl shadow-dropdown border border-border-light py-3 min-w-[220px]">
                  {navDropdowns.it.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-2.5 text-sm font-medium text-text-body hover:bg-primary-light hover:text-primary transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="h-px bg-border-light my-2"></div>
                  <Link
                    href="/it-solutions"
                    className="block px-5 py-2.5 text-sm font-medium text-text-body hover:bg-primary-light hover:text-primary transition-all duration-200"
                  >
                    View All IT Solutions →
                  </Link>
                </div>
              </div>
            </li>

            {/* Company */}
            <li className="relative group">
              <Link
                href="/about"
                className={`flex items-center gap-1.5 text-[15px] font-semibold transition-colors duration-300 no-underline ${
                  isScrolled || isInsights
                    ? isInsights ? 'text-text-body group-hover:text-[#1A5A5A]' : 'text-text-body group-hover:text-primary'
                    : 'text-white/90 group-hover:text-accent-cyan'
                }`}
              >
                Company
                <DropdownArrow />
              </Link>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible transform -translate-y-2 transition-all duration-250 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <div className="bg-white rounded-xl shadow-dropdown border border-border-light py-3 min-w-[220px]">
                  {navDropdowns.company.map((item) => {
                    const isAggregate = 'aggregate' in item && item.aggregate
                    return (
                      <div key={item.href}>
                        {isAggregate && <div className="h-px bg-border-light my-2"></div>}
                        <Link
                          href={item.href}
                          className="block px-5 py-2.5 text-sm font-medium text-text-body hover:bg-primary-light hover:text-primary transition-all duration-200"
                        >
                          {item.label}
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            </li>
          </ul>

          {/* Desktop CTA Button */}
          {isInsights ? (
            <Link
              href="/contact"
              className="hidden lg:inline-block px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-300 border-[1.5px] border-[#1A5A5A] text-[#1A5A5A] hover:bg-[#1A5A5A] hover:text-white"
            >
              CONNECT
            </Link>
          ) : (
            <Link
              href="/contact"
              className="hidden lg:inline-block bg-accent-cyan text-slate-900 px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-cyan-500 hover:-translate-y-0.5"
              style={{
                boxShadow: '0 4px 20px rgba(34, 211, 238, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 6px 24px rgba(34, 211, 238, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 4px 20px rgba(34, 211, 238, 0.3)'
              }}
            >
              CONNECT
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 bg-none border-none cursor-pointer p-1 z-[1001]"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled || isInsights ? 'bg-text-dark' : 'bg-white'
              } ${
                mobileMenuOpen
                  ? 'rotate-45 translate-y-[5px] translate-x-[5px]'
                  : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled || isInsights ? 'bg-text-dark' : 'bg-white'
              } ${mobileMenuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled || isInsights ? 'bg-text-dark' : 'bg-white'
              } ${
                mobileMenuOpen
                  ? '-rotate-45 -translate-y-[5px] translate-x-[5px]'
                  : ''
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-white/98 backdrop-blur-[20px] z-[999] transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
        aria-hidden={!mobileMenuOpen}
        style={{
          paddingTop: '100px',
          paddingLeft: '40px',
          paddingRight: '40px',
          paddingBottom: '40px',
          overflowY: 'auto',
        }}
      >
        <ul className="flex flex-col gap-6 list-none">
          {/* Mobile AI Solutions */}
          <li
            className={`${mobileSubmenus.ai ? 'active' : ''}`}
          >
            <button
              className="flex items-center justify-between w-full text-[28px] font-semibold text-text-dark hover:text-primary transition-colors duration-200"
              onClick={() => toggleMobileSubmenu('ai')}
              aria-expanded={mobileSubmenus.ai}
            >
              AI Solutions
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`w-5 h-5 transition-transform duration-300 ${
                  mobileSubmenus.ai ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <ul
              className="list-none overflow-hidden transition-all duration-300"
              style={{
                maxHeight: mobileSubmenus.ai ? '300px' : '0',
                marginTop: mobileSubmenus.ai ? '16px' : '0',
                paddingLeft: '16px',
              }}
            >
              {navDropdowns.ai.map((item) => (
                <li key={item.href} className="mb-3">
                  <Link
                    href={item.href}
                    className="text-lg font-medium text-text-dark hover:text-primary transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Mobile IT Solutions */}
          <li
            className={`${mobileSubmenus.it ? 'active' : ''}`}
          >
            <button
              className="flex items-center justify-between w-full text-[28px] font-semibold text-text-dark hover:text-primary transition-colors duration-200"
              onClick={() => toggleMobileSubmenu('it')}
              aria-expanded={mobileSubmenus.it}
            >
              IT Solutions
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`w-5 h-5 transition-transform duration-300 ${
                  mobileSubmenus.it ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <ul
              className="list-none overflow-hidden transition-all duration-300"
              style={{
                maxHeight: mobileSubmenus.it ? '300px' : '0',
                marginTop: mobileSubmenus.it ? '16px' : '0',
                paddingLeft: '16px',
              }}
            >
              {navDropdowns.it.map((item) => (
                <li key={item.href} className="mb-3">
                  <Link
                    href={item.href}
                    className="text-lg font-medium text-text-dark hover:text-primary transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Mobile Company */}
          <li
            className={`${mobileSubmenus.company ? 'active' : ''}`}
          >
            <button
              className="flex items-center justify-between w-full text-[28px] font-semibold text-text-dark hover:text-primary transition-colors duration-200"
              onClick={() => toggleMobileSubmenu('company')}
              aria-expanded={mobileSubmenus.company}
            >
              Company
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`w-5 h-5 transition-transform duration-300 ${
                  mobileSubmenus.company ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <ul
              className="list-none overflow-hidden transition-all duration-300"
              style={{
                maxHeight: mobileSubmenus.company ? '400px' : '0',
                marginTop: mobileSubmenus.company ? '16px' : '0',
                paddingLeft: '16px',
              }}
            >
              {navDropdowns.company.map((item) => {
                const isAggregate = 'aggregate' in item && item.aggregate
                return (
                  <li key={item.href} className={`mb-3 ${isAggregate ? 'pt-2 border-t border-text-body/20' : ''}`}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-text-dark hover:text-primary transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
        </ul>

        {/* Mobile CTA Button */}
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:bg-primary-dark"
            onClick={closeMobileMenu}
          >
            CONNECT
          </Link>
        </div>
      </div>
    </>
  )
}
