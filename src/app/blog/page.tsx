import Link from 'next/link'
import {
  getPostsByTopic,
  formatDate,
  readingMinutes,
} from '@/lib/blog-data'
import { getYearInReviews, getExperiences } from '@/lib/honors-data'
import Header from '@/components/Header'
import Section from '@/components/Section'
import Footer from '@/components/Footer'

type Item = {
  href: string
  title: string
  date: string
  summary?: string
  draft?: boolean
}

/** A folder of the blog: its own items, plus any folders inside it. */
type Folder = {
  id: string
  title: string
  items: Item[]
  folders: Folder[]
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

function countItems(folder: Folder): number {
  return (
    folder.items.length +
    folder.folders.reduce((n, child) => n + countItems(child), 0)
  )
}

function Row({ item }: { item: Item }) {
  return (
    <li>
      <Link
        href={item.href}
        className="group block py-3.5 -mx-3 px-3 rounded hover:bg-ink/[0.035] transition-colors"
      >
        <div className="flex items-baseline justify-between gap-x-6">
          <span className="font-medium group-hover:text-accent transition-colors">
            {item.title}
            {item.draft && (
              <span className="ml-2 font-sans text-[13px] font-normal text-muted">
                draft
              </span>
            )}
          </span>
          <span className="shrink-0 font-sans text-[14px] text-muted tabular-nums whitespace-nowrap">
            {item.date}
          </span>
        </div>
        {item.summary && (
          <p className="mt-0.5 text-[17px] leading-snug text-muted line-clamp-2">
            {item.summary}
          </p>
        )}
      </Link>
    </li>
  )
}

function ItemList({ items }: { items: Item[] }) {
  return (
    <ul className="divide-y divide-rule">
      {items.map((item) => (
        <Row key={item.href} item={item} />
      ))}
    </ul>
  )
}

/** One line of the directory at the top of the page. */
function DirectoryLine({ folder }: { folder: Folder }) {
  return (
    <Link
      href={`#${folder.id}`}
      className="group flex items-baseline gap-x-3 py-1"
    >
      <span className="group-hover:text-accent transition-colors">
        {folder.title}
      </span>
      <span
        aria-hidden
        className="flex-1 border-b border-dotted border-rule translate-y-[-0.25em]"
      />
      <span className="text-muted tabular-nums">{countItems(folder)}</span>
    </Link>
  )
}

function Directory({ folders }: { folders: Folder[] }) {
  return (
    <nav aria-label="Sections of the blog" className="mt-8 font-sans text-[15px]">
      <ul>
        {folders.map((folder) => (
          <li key={folder.id}>
            <DirectoryLine folder={folder} />
            {folder.folders.length > 0 && (
              <ul className="ml-1.5 pl-4 border-l border-rule">
                {folder.folders.map((child) => (
                  <li key={child.id}>
                    <DirectoryLine folder={child} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default async function Blog() {
  const [topics, yearInReviews, experiences] = await Promise.all([
    getPostsByTopic(),
    getYearInReviews(),
    getExperiences(),
  ])

  const postFolders: Folder[] = topics.map(({ topic, posts }) => {
    const toItem = (post: (typeof posts)[number]): Item => ({
      href: `/blog/${post.slug}`,
      title: post.title,
      date: `${formatDate(post.date)}, ${readingMinutes(post.words)} min`,
      summary: post.summary,
      draft: post.draft,
    })
    const subtopics = Array.from(
      new Set(posts.flatMap((p) => (p.subtopic ? [p.subtopic] : [])))
    )
    return {
      id: slugify(topic),
      title: topic,
      items: posts.filter((p) => !p.subtopic).map(toItem),
      folders: subtopics.map((subtopic) => ({
        id: `${slugify(topic)}-${slugify(subtopic)}`,
        title: subtopic,
        items: posts.filter((p) => p.subtopic === subtopic).map(toItem),
        folders: [],
      })),
    }
  })

  const honorsItem = (entry: (typeof yearInReviews)[number]): Item => ({
    href: `/honors/${entry.slug}`,
    title: entry.title,
    date: entry.date,
    summary: entry.summary,
  })
  const honors: Folder = {
    id: 'honors-essays',
    title: 'Honors essays',
    items: [],
    folders: [
      {
        id: 'year-in-review',
        title: 'Year in review',
        items: yearInReviews.map(honorsItem),
        folders: [],
      },
      {
        id: 'experiences',
        title: 'Experiences',
        items: experiences.map(honorsItem),
        folders: [],
      },
    ],
  }

  const folders = [...postFolders, honors]

  return (
    <main className="max-w-[42rem] mx-auto px-5">
      <Header />
      <div className="pt-12 sm:pt-16">
        <h1 className="text-[34px] font-medium tracking-tight leading-tight">
          Blog
        </h1>
        <Directory folders={folders} />
      </div>
      {folders.map((folder) => (
        <Section key={folder.id} id={folder.id} title={folder.title}>
          {folder.items.length > 0 && <ItemList items={folder.items} />}
          {folder.folders.map((child) => (
            <div
              key={child.id}
              id={child.id}
              className="scroll-mt-8 mt-10 first:mt-0"
            >
              <h3 className="flex items-baseline justify-between gap-x-6 text-[20px] font-medium mb-1">
                {child.title}
                <span className="font-sans text-[14px] font-normal text-muted tabular-nums">
                  {child.items.length}
                </span>
              </h3>
              <ItemList items={child.items} />
            </div>
          ))}
        </Section>
      ))}
      <Footer />
    </main>
  )
}
