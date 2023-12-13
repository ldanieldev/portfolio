import type { Metadata, Viewport } from 'next'
import { Cookie, Poppins } from 'next/font/google'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SpeedInsightsClient from '../components/SpeedInsightsClient'
import { Meta } from './data'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const cookie = Cookie({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-cookie',
})

interface Meta {
  title: string
  description: string
  url: string
  keywords: string[]
  email: string
  logo: string
}

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 5,
  width: 'device-width',
}

export const metadata: Metadata = {
  metadataBase: new URL(Meta.url),
  title: {
    default: Meta.title,
    template: `%s | ${Meta.title}`,
  },
  description: Meta.description,
  keywords: Meta.keywords,
  authors: [{ name: 'Le-Andris Daniel', url: Meta.url }],
  icons: { icon: '/favicon.ico' },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    title: Meta.title,
    description: Meta.description,
    url: Meta.url,
    siteName: Meta.url,
    locale: 'en-US',
    countryName: 'USA',
    emails: [Meta.email],
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
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${cookie.variable} scroll-smooth`}
    >
      <body className="flex flex-col h-screen justify-between min-w-93.75">
        <Header />
        <main className="grow">{children}</main>
        <SpeedInsightsClient />
        <Footer />
      </body>
    </html>
  )
}
