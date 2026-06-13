import '@/styles/globals.css'
import { Providers } from './providers'
import Navbar from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Phymas',
  description:
    "Meet Lau Sheng Cher, a passionate computer science student seeking an internship. With impressive projects showcasing his potential as a full-stack web developer, connect with this rising talent in tech today. Browse Lau Sheng Cher's portfolio and discover how he can add value to your organization.",
  keywords:
    'Portfolio, Resume, Lau Sheng Cher, Phymas, Phymas.me, web developer, computer science, student',
  openGraph: {
    title: 'Phymas',
    description:
      "Meet Lau Sheng Cher, a passionate computer science student seeking an internship. With impressive projects showcasing his potential as a full-stack web developer, connect with this rising talent in tech today. Browse Lau Sheng Cher's portfolio and discover how he can add value to your organization.",
    type: 'website',
    url: 'https://www.phymas.me/',
    images: [
      {
        url: 'https://www.phymas.me/api/og',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phymas',
    description:
      "Meet Lau Sheng Cher, a passionate computer science student seeking an internship. With impressive projects showcasing his potential as a full-stack web developer, connect with this rising talent in tech today. Browse Lau Sheng Cher's portfolio and discover how he can add value to your organization.",
    images: ['https://www.phymas.me/api/og'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <main className="container mx-auto px-4 max-w-7xl relative">
            <Navbar />
            <div className="h-8" />
            {children}
            <Footer />
          </main>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
