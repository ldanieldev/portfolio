import { Meta, Projects } from '@/app/data'
import type { Metadata } from 'next'
import { CollectionPage, WithContext } from 'schema-dts'
import PortfolioClient from './_components/client'

export const metadata: Metadata = {
  description:
    'View my Portfolio and see the quality of work that I can provide.',
}

export default function Portfolio() {
  const jsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    image: Meta.logo,
    url: Meta.url + '/portfolio',
    sameAs: [
      'https://www.linkedin.com/in/ldaniel38/',
      'https://github.com/ldanieldev',
    ],
    author: {
      '@type': 'Person',
      name: 'Le-Andris Daniel',
      email: Meta.email,
      url: Meta.url,
    },
    hasPart: Projects.map(({ title, featureImg, slug, description }) => ({
      '@type': 'WebPage',
      url: `${Meta.url}/portfolio/${slug}`,
      name: title,
      image: featureImg,
      description: description,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Latest Work
        </h1>

        <PortfolioClient />
      </div>
    </>
  )
}
