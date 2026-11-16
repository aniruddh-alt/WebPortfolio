import Link from 'next/link'
import {
  getPostsByTopic,
  formatDate,
  readingMinutes,
} from '@/lib/blog-data'
import { getAllHonorsEntries } from '@/lib/honors-data'
import Header from '@/components/Header'
import Section from '@/components/Section'
import Footer from '@/components/Footer'

function Row({
  href,
  title,
  date,
  summary,
  meta,
  draft = false,
}: {
  href: string
  title: string
  date: string
  summary?: string
  meta?: string
  draft?: boolean
}) {
  return (
    <li>
      <Link
        href={href}
        className="group block py-4 -mx-3 px-3 rounded hover:bg-ink/[0.03] transition-colors"
      >
        <div className="flex items-baseline justify-between gap-x-6">
          <h3 className="font-medium group-hover:text-accent transition-colors">
            {title}
            {draft && (
              <span className="ml-2 font-sans text-[13px] font-normal text-muted">
                draft
              </span>
            )}
          </h3>
          <span className="shrink-0 font-sans text-[14px] text-muted tabular-nums whitespace-nowrap">
            {date}
          </span>
        </div>
        {summary && <p className="mt-1 text-muted">{summary}</p>}
        {meta && (
          <p className="mt-1 font-sans text-[14px] text-muted">{meta}</p>
        )}
      </Link>
    </li>
  )
}

function sectionId(topic: string): string {
  return topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

export default async function Blog() {
  const [topics, honorsEntries] = await Promise.all([
    getPostsByTopic(),
    getAllHonorsEntries(),
  ])

  return (
    <main className="max-w-[42rem] mx-auto px-5">
      <Header />
      <div className="pt-12 sm:pt-16">
        <h1 className="text-[34px] font-medium tracking-tight leading-tight">
          Blog
        </h1>
      </div>
      {topics.map(({ topic, posts }) => (
        <Section key={topic} id={sectionId(topic)} title={topic}>
          <ul className="-my-4 divide-y divide-rule">
            {posts.map((post) => (
              <Row
                key={post.slug}
                href={`/blog/${post.slug}`}
                title={post.title}
                date={formatDate(post.date)}
                summary={post.summary}
                meta={`${readingMinutes(post.words)} min read`}
                draft={post.draft}
              />
            ))}
          </ul>
        </Section>
      ))}
      <Section id="honors-essays" title="Honors essays">
        <ul className="-my-4 divide-y divide-rule">
          {honorsEntries.map((entry) => (
            <Row
              key={entry.slug}
              href={`/honors/${entry.slug}`}
              title={entry.title}
              date={entry.date}
              summary={entry.summary}
              meta={entry.subtitle}
            />
          ))}
        </ul>
      </Section>
      <Footer />
    </main>
  )
}
