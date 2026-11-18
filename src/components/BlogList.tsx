'use client'

import { useState } from 'react'
import Link from 'next/link'

export type BlogListEntry = {
  href: string
  title: string
  /** Text shown in the date column, e.g. "Nov 16, 2026" or "Spring 2023" */
  date: string
  summary?: string
  topic: string
  /** Small line under the summary, e.g. "6 min read" */
  meta?: string
  draft?: boolean
}

export default function BlogList({
  entries,
  topics,
}: {
  entries: BlogListEntry[]
  topics: string[]
}) {
  const [active, setActive] = useState<string | null>(null)
  const shown = active ? entries.filter((e) => e.topic === active) : entries

  const filterClass = (on: boolean) =>
    on
      ? 'text-ink underline underline-offset-[6px] decoration-1'
      : 'text-muted hover:text-ink transition-colors'

  return (
    <>
      {topics.length > 1 && (
        <div
          role="group"
          aria-label="Filter posts by topic"
          className="mt-5 font-sans text-[15px] flex flex-wrap gap-x-5 gap-y-1"
        >
          <button
            type="button"
            aria-pressed={active === null}
            onClick={() => setActive(null)}
            className={filterClass(active === null)}
          >
            All
          </button>
          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              aria-pressed={active === topic}
              onClick={() => setActive(topic)}
              className={filterClass(active === topic)}
            >
              {topic}
            </button>
          ))}
        </div>
      )}

      <ul className="mt-12 space-y-12">
        {shown.map((entry) => (
          <li
            key={entry.href}
            className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-6 gap-y-1"
          >
            <div className="font-sans text-[14px] text-muted sm:pt-[0.55em]">
              <span className="tabular-nums whitespace-nowrap">
                {entry.date}
              </span>
              {active === null && topics.length > 1 && (
                <span className="sm:block">
                  <span className="sm:hidden">, </span>
                  {entry.topic}
                </span>
              )}
            </div>
            <div>
              <h2 className="text-[24px] font-medium tracking-tight leading-snug">
                <Link
                  href={entry.href}
                  className="hover:text-accent transition-colors"
                >
                  {entry.title}
                </Link>
                {entry.draft && (
                  <span className="ml-2 font-sans text-[13px] font-normal tracking-normal text-muted">
                    draft
                  </span>
                )}
              </h2>
              {entry.summary && (
                <p className="mt-2 text-muted">{entry.summary}</p>
              )}
              {entry.meta && (
                <p className="mt-1 font-sans text-[14px] text-muted">
                  {entry.meta}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
