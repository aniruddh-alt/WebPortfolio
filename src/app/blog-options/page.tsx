import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllHonorsEntries } from '@/lib/honors-data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Temporary page for comparing blog index layouts. Not linked from the site.
export const metadata: Metadata = {
  title: 'Blog layout options',
  robots: { index: false, follow: false },
}

type Entry = {
  href: string
  title: string
  date: string
  year: string
  summary: string
  topic: string
}

const EXAMPLES: Entry[] = [
  {
    href: '#',
    title: 'Example post title on agent safety',
    date: 'Nov 2026',
    year: '2026',
    summary:
      'Example summary. One or two sentences that say what the post found or argues.',
    topic: 'AI safety',
  },
  {
    href: '#',
    title: 'Example post title on interpretability',
    date: 'Oct 2026',
    year: '2026',
    summary:
      'Example summary. One or two sentences that say what the post found or argues.',
    topic: 'Mechanistic interpretability',
  },
]

function OptionHeading({ letter, like }: { letter: string; like: string }) {
  return (
    <div className="mt-24 mb-10 py-3 px-4 rounded bg-ink/[0.05] font-sans text-[15px]">
      <span className="font-medium">Option {letter}</span>
      <span className="text-muted">, in the style of {like}</span>
    </div>
  )
}

export default async function BlogOptions() {
  const honors = await getAllHonorsEntries()
  const entries: Entry[] = [
    ...EXAMPLES,
    ...honors.map((e) => ({
      href: `/honors/${e.slug}`,
      title: e.title,
      date: e.date,
      year: e.year,
      summary: e.summary,
      topic: 'Honors essays',
    })),
  ]
  const topics = Array.from(new Set(entries.map((e) => e.topic)))

  return (
    <main className="max-w-[42rem] mx-auto px-5">
      <Header />
      <p className="pt-12 font-sans text-[15px] text-muted">
        Three layouts for the blog page, using the nine honors essays and two
        made-up example posts. This page is only for choosing and is not
        linked from the site.
      </p>

      {/* ---------- A: one list, date in a left column ---------- */}
      <OptionHeading letter="A" like="Dan Luu and Transformer Circuits" />
      <h1 className="text-[34px] font-medium tracking-tight leading-tight">
        Blog
      </h1>
      <p className="mt-5 font-sans text-[15px] text-muted flex flex-wrap gap-x-5 gap-y-1">
        <span className="text-ink underline underline-offset-4">All</span>
        {topics.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </p>
      <ul className="mt-10 space-y-7">
        {entries.map((e) => (
          <li
            key={e.title}
            className="grid grid-cols-1 sm:grid-cols-[7.5rem_1fr] gap-x-6 gap-y-0.5"
          >
            <span className="font-sans text-[14px] text-muted tabular-nums whitespace-nowrap pt-[0.3em]">
              {e.date}
            </span>
            <div>
              <Link href={e.href} className="font-medium link">
                {e.title}
              </Link>
              <p className="mt-0.5 text-muted line-clamp-2">{e.summary}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* ---------- B: grouped by topic, one line per post ---------- */}
      <OptionHeading letter="B" like="colah and Gwern" />
      <h1 className="text-[34px] font-medium tracking-tight leading-tight">
        Blog
      </h1>
      {topics.map((t) => (
        <section key={t} className="mt-12">
          <h2 className="text-[22px] font-medium tracking-tight">{t}</h2>
          <ul className="mt-3">
            {entries
              .filter((e) => e.topic === t)
              .map((e) => (
                <li
                  key={e.title}
                  className="flex items-baseline justify-between gap-x-6 py-1.5"
                >
                  <Link href={e.href} className="link">
                    {e.title}
                  </Link>
                  <span className="shrink-0 font-sans text-[14px] text-muted tabular-nums">
                    {e.year}
                  </span>
                </li>
              ))}
          </ul>
        </section>
      ))}

      {/* ---------- C: feed with large titles and excerpts ---------- */}
      <OptionHeading letter="C" like="Lil'Log and Neel Nanda" />
      <h1 className="text-[34px] font-medium tracking-tight leading-tight">
        Blog
      </h1>
      <ul className="mt-10 space-y-14">
        {entries.map((e) => (
          <li key={e.title}>
            <p className="font-sans text-[14px] text-muted">
              {e.date}, {e.topic}
            </p>
            <h2 className="mt-1 text-[26px] font-medium tracking-tight leading-snug">
              <Link
                href={e.href}
                className="hover:text-accent transition-colors"
              >
                {e.title}
              </Link>
            </h2>
            <p className="mt-2 text-muted">{e.summary}</p>
          </li>
        ))}
      </ul>

      <Footer />
    </main>
  )
}
