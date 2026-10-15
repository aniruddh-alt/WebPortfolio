import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Honors portfolio',
  description:
    'Year-in-review essays and longer writeups from the University of Cincinnati Honors Program, covering research, entrepreneurship, and life as an international student.',
  openGraph: {
    title: 'Honors portfolio · Aniruddhan Ramesh',
    description:
      'Year-in-review essays and writeups from the UC Honors Program.',
    type: 'website',
  },
}

export default function HonorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
