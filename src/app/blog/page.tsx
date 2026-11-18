import {
  getPostsByTopic,
  formatDate,
  readingMinutes,
} from '@/lib/blog-data'
import { getAllHonorsEntries } from '@/lib/honors-data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogList from '@/components/BlogList'
import type { BlogListEntry } from '@/components/BlogList'

const HONORS_TOPIC = 'Honors essays'

export default async function Blog() {
  const [topicGroups, honorsEntries] = await Promise.all([
    getPostsByTopic(),
    getAllHonorsEntries(),
  ])

  // Each entry carries a sort key so posts and honors essays share one
  // newest-first list. Honors essays only have a year, so they sort to the
  // start of that year.
  const posts = topicGroups.flatMap(({ posts }) =>
    posts.map((post) => ({
      sortKey: post.date,
      entry: {
        href: `/blog/${post.slug}`,
        title: post.title,
        date: formatDate(post.date),
        summary: post.summary,
        topic: post.topic,
        meta: `${readingMinutes(post.words)} min read`,
        draft: post.draft,
      } satisfies BlogListEntry,
    }))
  )
  const honors = honorsEntries.map((entry) => ({
    sortKey: `${entry.year}-00-00`,
    entry: {
      href: `/honors/${entry.slug}`,
      title: entry.title,
      date: entry.date,
      summary: entry.summary,
      topic: HONORS_TOPIC,
    } satisfies BlogListEntry,
  }))

  const entries = [...posts, ...honors]
    .sort((a, b) => b.sortKey.localeCompare(a.sortKey))
    .map((item) => item.entry)
  const topics = [...topicGroups.map((group) => group.topic), HONORS_TOPIC]

  return (
    <main className="max-w-[42rem] mx-auto px-5">
      <Header />
      <div className="pt-12 sm:pt-16">
        <h1 className="text-[34px] font-medium tracking-tight leading-tight">
          Blog
        </h1>
        <BlogList entries={entries} topics={topics} />
      </div>
      <Footer />
    </main>
  )
}
