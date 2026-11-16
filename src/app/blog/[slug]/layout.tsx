import type { Metadata } from 'next'
import { getAllPosts, getPost } from '@/lib/blog-data'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) {
    return { title: 'Blog post' }
  }
  return {
    title: post.title,
    description: post.summary || undefined,
    openGraph: {
      title: post.title,
      description: post.summary || undefined,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
