import 'server-only'
import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

export type BlogPost = {
  slug: string
  title: string
  /** ISO date, YYYY-MM-DD */
  date: string
  summary: string
  /** Section the post is listed under on /blog, e.g. "AI safety" */
  topic: string
  tags: string[]
  draft: boolean
  words: number
  /** raw MDX body (not yet rendered) */
  body: string
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')
const SHOW_DRAFTS = process.env.NODE_ENV !== 'production'

function toIsoDate(value: unknown): string {
  // gray-matter parses an unquoted YAML date into a Date object.
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value)
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export function readingMinutes(words: number): number {
  return Math.max(1, Math.round(words / 230))
}

async function loadAllPosts(): Promise<BlogPost[]> {
  let files: string[]
  try {
    files = await fs.readdir(CONTENT_DIR)
  } catch {
    return []
  }
  // Files that start with an underscore (like _template.mdx) are never published.
  const mdxFiles = files.filter(
    (f) => f.endsWith('.mdx') && !f.startsWith('_')
  )

  const posts = await Promise.all(
    mdxFiles.map(async (filename) => {
      const raw = await fs.readFile(path.join(CONTENT_DIR, filename), 'utf8')
      const { data, content } = matter(raw)
      const body = content.trim()
      const post: BlogPost = {
        slug: filename.replace(/\.mdx$/, ''),
        title: String(data.title),
        date: toIsoDate(data.date),
        summary: data.summary ? String(data.summary) : '',
        topic: data.topic ? String(data.topic) : 'Other',
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        draft: data.draft === true,
        words: body ? body.split(/\s+/).length : 0,
        body,
      }
      return post
    })
  )

  return posts
    .filter((p) => SHOW_DRAFTS || !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return loadAllPosts()
}

/** Topics listed first on /blog, in this order. Any other topic follows. */
const TOPIC_ORDER = ['AI safety', 'Mechanistic interpretability']

/** Posts grouped by topic, newest first within each topic. */
export async function getPostsByTopic(): Promise<
  { topic: string; posts: BlogPost[] }[]
> {
  const posts = await loadAllPosts()
  const groups = new Map<string, BlogPost[]>()
  for (const post of posts) {
    groups.set(post.topic, [...(groups.get(post.topic) ?? []), post])
  }
  const rank = (topic: string) => {
    const i = TOPIC_ORDER.indexOf(topic)
    return i === -1 ? TOPIC_ORDER.length : i
  }
  return Array.from(groups, ([topic, list]) => ({ topic, posts: list })).sort(
    (a, b) => rank(a.topic) - rank(b.topic) || a.topic.localeCompare(b.topic)
  )
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const posts = await loadAllPosts()
  return posts.find((p) => p.slug === slug) ?? null
}
