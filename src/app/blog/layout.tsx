import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Posts by Aniruddhan Ramesh on AI safety, interpretability and LLM agents.',
  openGraph: {
    title: 'Blog · Aniruddhan Ramesh',
    description:
      'Posts on AI safety, interpretability and LLM agents.',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
