'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Calendar, GraduationCap } from 'lucide-react'
import { honorsEntries, yearInReviews, experiences } from '@/lib/honors-data'
import Navigation from '@/components/Navigation'
import NetworkBackground from '@/components/NetworkBackground'

function CategoryBadge({ category }: { category: string }) {
  const isReview = category === 'year-in-review'
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full border ${
        isReview
          ? 'border-accent-cyan/30 text-accent-cyan/80 bg-accent-cyan/5'
          : 'border-accent-violet/30 text-accent-violet/80 bg-accent-violet/5'
      }`}
    >
      {isReview ? <Calendar size={10} /> : <BookOpen size={10} />}
      {isReview ? 'Year-in-Review' : 'Experience'}
    </span>
  )
}

export default function HonorsPortfolio() {
  return (
    <main className="relative">
      <NetworkBackground />
      <div className="relative z-10">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="orb w-[500px] h-[500px] bg-accent-violet -top-40 -right-40 absolute" />
          <div className="orb w-[400px] h-[400px] bg-accent-cyan -bottom-32 -left-32 absolute" />

          <div className="max-w-4xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors text-sm mb-10 group"
              >
                <ArrowLeft
                  size={14}
                  className="group-hover:-translate-x-0.5 transition-transform"
                />
                Back to portfolio
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <GraduationCap size={20} className="text-accent-cyan" />
                <p className="font-mono text-[13px] text-zinc-500 tracking-wider">
                  University Honors Program
                </p>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-zinc-50 mb-6">
                Honors{' '}
                <span className="gradient-text">Portfolio</span>
              </h1>

              <p className="text-zinc-400 leading-relaxed max-w-2xl text-lg">
                A collection of reflections and experiences from my journey through the
                University of Cincinnati Honors Program — from finding my footing as
                an international student to building startups and presenting research.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="divider max-w-4xl mx-auto" />

        {/* Year-in-Reviews */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <p className="font-mono text-[13px] text-zinc-500 mb-3 tracking-wider">
                Reflections
              </p>
              <h2 className="font-serif text-3xl text-zinc-50">
                Year-in-Reviews
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {yearInReviews.map((entry, i) => (
                <motion.div
                  key={entry.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link href={`/honors/${entry.slug}`} className="block group">
                    <div className="card p-7 h-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-5">
                          <CategoryBadge category={entry.category} />
                          <span className="text-[12px] font-mono text-zinc-600">
                            {entry.date}
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl text-zinc-100 mb-3 group-hover:text-zinc-50 transition-colors">
                          {entry.title}
                        </h3>
                        <p className="text-[13px] text-zinc-500 leading-relaxed mb-5 line-clamp-3">
                          {entry.summary}
                        </p>
                        <div className="flex items-center gap-2 text-zinc-600 group-hover:text-zinc-400 transition-colors text-[13px]">
                          Read reflection
                          <ArrowRight
                            size={13}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider max-w-4xl mx-auto" />

        {/* Honors Experiences */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <p className="font-mono text-[13px] text-zinc-500 mb-3 tracking-wider">
                Writeups
              </p>
              <h2 className="font-serif text-3xl text-zinc-50">
                Honors Experiences
              </h2>
            </motion.div>

            <div className="space-y-4">
              {experiences.map((entry, i) => (
                <motion.div
                  key={entry.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link href={`/honors/${entry.slug}`} className="block group">
                    <div className="card p-7 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-4">
                          <CategoryBadge category={entry.category} />
                          <span className="text-[12px] font-mono text-zinc-600">
                            {entry.date}
                          </span>
                        </div>
                        <div className="flex items-start justify-between gap-6">
                          <div className="min-w-0 flex-1">
                            <h3 className="font-serif text-xl text-zinc-100 mb-1.5 group-hover:text-zinc-50 transition-colors">
                              {entry.title}
                            </h3>
                            {entry.subtitle && (
                              <p className="text-[13px] text-zinc-600 mb-3 font-mono">
                                {entry.subtitle}
                              </p>
                            )}
                            <p className="text-[13px] text-zinc-500 leading-relaxed line-clamp-2">
                              {entry.summary}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {entry.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="tag font-mono">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="hidden sm:flex items-center text-zinc-700 group-hover:text-zinc-400 transition-colors mt-2">
                            <ArrowRight
                              size={18}
                              className="group-hover:translate-x-1 transition-transform"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="divider max-w-4xl mx-auto" />
        <footer className="py-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[13px] text-zinc-600">
              Aniruddhan Ramesh &middot; University of Cincinnati Honors Program
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
