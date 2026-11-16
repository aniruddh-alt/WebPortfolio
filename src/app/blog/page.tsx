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
  const [topics, yearInReviews, experiences] = await Promise.all([
    getPostsByTopic(),
    getYearInReviews(),
    getExperiences(),
  ])
  const honorsGroups = [
    { id: 'year-in-review', title: 'Year in review', entries: yearInReviews },
    { id: 'experiences', title: 'Experiences', entries: experiences },
  ]

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
        <div className="space-y-12">
          {honorsGroups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-8">
              <h3 className="font-sans text-[14px] uppercase tracking-wide text-muted mb-2">
                {group.title}
              </h3>
              <ul className="divide-y divide-rule">
                {group.entries.map((entry) => (
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
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  )
}
