import 'server-only'
import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

export type HonorsEntry = {
  slug: string
  title: string
  subtitle?: string
  category: 'year-in-review' | 'experience'
  year: string
  date: string
  summary: string
  images?: { src: string; alt: string; caption?: string }[]
  videoUrl?: string
  tags: string[]
  /** raw MDX body (not yet rendered) */
  body: string
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'honors')

let cache: HonorsEntry[] | null = null

async function loadAllEntries(): Promise<HonorsEntry[]> {
  const files = await fs.readdir(CONTENT_DIR)
  const mdxFiles = files.filter((f) => f.endsWith('.mdx'))

  const entries = await Promise.all(
    mdxFiles.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = await fs.readFile(path.join(CONTENT_DIR, filename), 'utf8')
      const { data, content } = matter(raw)

      const entry: HonorsEntry = {
        slug,
        title: String(data.title),
        subtitle: data.subtitle ? String(data.subtitle) : undefined,
        category: data.category as HonorsEntry['category'],
        year: String(data.year),
        date: String(data.date),
        summary: String(data.summary),
        images: Array.isArray(data.images) ? data.images : undefined,
        videoUrl: data.videoUrl ? String(data.videoUrl) : undefined,
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        body: content.trim(),
      }
      return entry
    })
  )

  // Sort: year descending, then year-in-review first within same year, then by date string.
  entries.sort((a, b) => {
    if (a.year !== b.year) return Number(b.year) - Number(a.year)
    if (a.category !== b.category) {
      return a.category === 'year-in-review' ? -1 : 1
    }
    return a.date.localeCompare(b.date)
  })

  return entries
}

export async function getAllHonorsEntries(): Promise<HonorsEntry[]> {
  if (!cache) {
    cache = await loadAllEntries()
  }
  return cache
}

export async function getHonorsEntry(
  slug: string
): Promise<HonorsEntry | null> {
  const entries = await getAllHonorsEntries()
  return entries.find((e) => e.slug === slug) ?? null
}

export async function getYearInReviews(): Promise<HonorsEntry[]> {
  const entries = await getAllHonorsEntries()
  return entries.filter((e) => e.category === 'year-in-review')
}

export async function getExperiences(): Promise<HonorsEntry[]> {
  const entries = await getAllHonorsEntries()
  return entries.filter((e) => e.category === 'experience')
}
