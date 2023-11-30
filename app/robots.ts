import { MetadataRoute } from 'next'
import { Meta } from './data'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${Meta.url}/sitemap.xml`,
  }
}
