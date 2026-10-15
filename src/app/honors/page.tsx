import Link from 'next/link'
import { getYearInReviews, getExperiences } from '@/lib/honors-data'
import type { HonorsEntry } from '@/lib/honors-data'
import Header from '@/components/Header'
import Section, { DatedRow } from '@/components/Section'
import Footer from '@/components/Footer'

function EntryList({ entries }: { entries: HonorsEntry[] }) {
  return (
    <ul className="space-y-8">
      {entries.map((entry) => (
        <DatedRow key={entry.slug} date={entry.date}>
          <h3 className="font-medium">
            <Link href={`/honors/${entry.slug}`} className="link">
              {entry.title}
            </Link>
          </h3>
          {entry.subtitle && (
            <p className="font-sans text-[15px] text-muted">{entry.subtitle}</p>
          )}
          <p className="mt-1 text-muted">{entry.summary}</p>
        </DatedRow>
      ))}
    </ul>
  )
}

export default async function HonorsPortfolio() {
  const [yearInReviews, experiences] = await Promise.all([
    getYearInReviews(),
    getExperiences(),
  ])

  return (
    <main className="max-w-[42rem] mx-auto px-5">
      <Header />
      <div className="pt-12 sm:pt-16">
        <h1 className="text-[34px] font-medium tracking-tight leading-tight">
          Honors portfolio
        </h1>
        <p className="mt-4 text-[20px] leading-[1.5] text-muted">
          Essays I wrote for the University of Cincinnati Honors Program. They
          cover my first years as an international student, my early research,
          and the startups I worked on.
        </p>
      </div>
      <Section id="year-in-review" title="Year-in-review essays">
        <EntryList entries={yearInReviews} />
      </Section>
      <Section id="experiences" title="Honors experiences">
        <EntryList entries={experiences} />
      </Section>
      <Footer />
    </main>
  )
}
