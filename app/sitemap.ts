import { Meta, Projects } from '@/app/data'
//import { MetadataRoute } from 'next'

export default function sitemap() /*: MetadataRoute.Sitemap*/ {
  const now = new Date()

  //static routes
  const staticRoutes = [
    {
      url: Meta.url,
      lastModified: now,
    },
    {
      url: `${Meta.url}/About`,
      lastModified: now,
    },
    {
      url: `${Meta.url}/Portfolio`,
      lastModified: now,
    },
  ]

  //dynamic routes
  const portfolioRoutes = Projects.map(({ slug }) => ({
    url: `${Meta.url}/Portfolio/${slug}`,
    lastModified: now,
  }))

  return [...staticRoutes, ...portfolioRoutes]
}
