import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPost, formatDate, readingMinutes } from '@/lib/blog-data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { honorsMdxComponents } from '@/components/honors-mdx-components'

type Props = { params: { slug: string } }

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug)
  if (!post) {
    notFound()
  }

  return (
    <main className="max-w-[42rem] mx-auto px-5">
      <Header />
      <article className="pt-12 sm:pt-16">
        <Link
          href="/blog"
          className="font-sans text-[15px] text-muted hover:text-ink transition-colors"
        >
          Blog
        </Link>
        <h1 className="mt-6 text-[34px] sm:text-[40px] font-medium tracking-tight leading-tight">
          {post.title}
        </h1>
        <p className="mt-2 font-sans text-[15px] text-muted">
          {formatDate(post.date)}, {readingMinutes(post.words)} min read
          {post.draft && ', draft (not visible on the live site)'}
        </p>
        {post.summary && (
          <p className="mt-6 text-[20px] leading-[1.5] text-muted">
            {post.summary}
          </p>
        )}
        <div className="mt-10 pt-10 border-t border-rule">
          <MDXRemote source={post.body} components={honorsMdxComponents} />
        </div>
      </article>
      <Footer />
    </main>
  )
}
