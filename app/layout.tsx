import type { Metadata } from 'next'
import { Cookie, Poppins } from 'next/font/google'
import { Suspense } from 'react'
import { Meta } from './data'
import Footer from './Footer'
import './globals.css'
import Header from './Header'

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

export const metadata: Metadata = {
  title: {
    default: Meta.title,
    template: `%s | ${Meta.title}`,
  },
  description: Meta.description,
  keywords: Meta.keywords,
  authors: [{ name: 'Le-Andris Daniel', url: Meta.url }],
  icons: { icon: '/favicon.ico' },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
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

export const dynamic = 'force-static'
export const dynamicParams = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${cookie.variable} scroll-smooth`}
    >
      <body className="flex flex-col h-screen justify-between min-w-[375px]">
        <Header />
        <Suspense fallback="<Loading />">
          <main className="grow">{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  )
}
