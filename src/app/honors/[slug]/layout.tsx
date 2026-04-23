import type { Metadata } from 'next'
import { getAllHonorsEntries, getHonorsEntry } from '@/lib/honors-data'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  const entries = await getAllHonorsEntries()
  return entries.map((entry) => ({ slug: entry.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const entry = await getHonorsEntry(params.slug)
  if (!entry) {
    return { title: 'Honors Entry' }
  }
  const title = entry.subtitle
    ? `${entry.title} — ${entry.subtitle}`
    : entry.title
  return {
    title,
    description: entry.summary,
    openGraph: {
      title: `${title} · Honors Portfolio`,
      description: entry.summary,
      type: 'article',
    },
  }
}

export default function HonorsEntryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
