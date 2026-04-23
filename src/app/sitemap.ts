import type { MetadataRoute } from 'next'
import { getAllHonorsEntries } from '@/lib/honors-data'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aniruddhan.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const entries = await getAllHonorsEntries()
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    {
      url: `${SITE_URL}/honors`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    ...entries.map((entry) => ({
      url: `${SITE_URL}/honors/${entry.slug}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
  ]
}
