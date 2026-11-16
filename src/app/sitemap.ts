import type { MetadataRoute } from 'next'
import { getAllHonorsEntries } from '@/lib/honors-data'
import { getAllPosts } from '@/lib/blog-data'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aniruddhan.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const entries = await getAllHonorsEntries()
  const posts = await getAllPosts()
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T00:00:00Z`),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
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
