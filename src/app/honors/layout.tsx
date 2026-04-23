import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Honors Portfolio',
  description:
    'A collection of reflections and experiences from the University of Cincinnati Honors Program — year-in-reviews and long-form writeups on research, entrepreneurship, and international-student life.',
  openGraph: {
    title: 'Honors Portfolio · Aniruddhan Ramesh',
    description:
      'Year-in-reviews and long-form reflections from the UC University Honors Program.',
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
