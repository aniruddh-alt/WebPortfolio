'use client'

import { motion, useReducedMotion } from 'framer-motion'

const interests = [
  {
    title: 'Mechanistic Interpretability',
    description:
      'Circuits, features, superposition. When a language model answers a question, something specific is happening inside it. I want to understand what.',
    gradient: 'from-cyan-400/10 to-transparent',
  },
  {
    title: 'Open-Source AI Tooling',
    description:
      'Most of my work at Oumi lives here: training loops, eval harnesses, synthetic data pipelines. Unglamorous to describe, important to get right.',
    gradient: 'from-violet-400/10 to-transparent',
  },
  {
    title: 'Applied ML',
    description:
      'Physical therapy video, clinical notes, mridangam recordings, real estate PDFs. Unfamiliar domains tend to teach you things clean benchmarks cannot.',
    gradient: 'from-amber-400/10 to-transparent',
  },
]

export default function About() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="section-index mb-4">
            01 <em>—</em> About
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-zinc-50 mb-6">
                The <span className="italic text-zinc-300">short</span> version
              </h2>
            </div>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I grew up in Abu Dhabi, moved to Cincinnati for a CS degree at
                the{' '}
                <span className="text-zinc-200">University of Cincinnati</span>{' '}
                <span className="text-zinc-600">(3.99 GPA)</span>, and now work
                out of Seattle as a machine learning engineer at{' '}
                <span className="text-zinc-200">Oumi</span>.
              </p>
              <p>
                Along the way: a paper on polysemanticity in language models at
                the{' '}
                <span className="text-zinc-200">NeurIPS 2025 Mech Interp Workshop</span>,
                a role running{' '}
                <span className="text-zinc-200">Bearcat Ventures</span> (UC&apos;s
                $1M student-led fund), and a co-founded company,{' '}
                <span className="text-zinc-200">PhizzIO</span>, that uses
                computer vision to guide physical therapy from a laptop camera.
              </p>
              <p className="text-zinc-500">
                The through-line, as best I can tell: I&apos;m interested in
                what&apos;s inside things. Language models, clinical notes, drum
                recordings, real estate documents. Different surfaces, same
                question.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Interest cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card p-7 relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <h3 className="font-sans text-[15px] font-medium text-zinc-100 mb-3">
                  {item.title}
                </h3>
                <p className="text-[13px] text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
