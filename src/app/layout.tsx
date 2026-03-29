import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://karavanhub.com'),
  title: {
    default: 'Karavan Hub - AI & IT Solutions in Niagara, Ontario',
    template: '%s | Karavan Hub',
  },
  description:
    'Canadian-owned AI and IT solutions company in Niagara, Ontario. Custom software development, AI automation, web design, and digital transformation for SMBs.',
  keywords: [
    'AI solutions',
    'IT solutions',
    'custom software development',
    'web design',
    'AI automation',
    'digital transformation',
    'Niagara Ontario',
    'Canadian IT company',
  ],
  authors: [{ name: 'Karavan Hub' }],
  creator: 'Karavan Hub',
  publisher: 'Karavan Hub',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://karavanhub.com',
    siteName: 'Karavan Hub',
    title: 'Karavan Hub - AI & IT Solutions in Niagara, Ontario',
    description:
      'Canadian-owned AI and IT solutions company. Custom software, AI automation, web design for SMBs.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Karavan Hub - AI & IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karavan Hub - AI & IT Solutions',
    description:
      'Canadian-owned AI and IT solutions company in Niagara, Ontario.',
    images: ['/images/twitter-card.jpg'],
  },
  alternates: {
    canonical: 'https://karavanhub.com',
    languages: {
      'en-CA': 'https://karavanhub.com',
      en: 'https://karavanhub.com',
    },
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Niagara, Ontario',
    'geo.position': '43.0896;-79.0849',
    ICBM: '43.0896, -79.0849',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable}`}
    >
      <head>
        <meta name="theme-color" content="#2563EB" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
