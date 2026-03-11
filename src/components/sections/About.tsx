'use client'

import { motion } from 'framer-motion'

const interests = [
  {
    title: 'Mechanistic Interpretability',
    description:
      'I want to know what\'s actually going on inside these models — which circuits fire, what features form, and why a model does what it does.',
    gradient: 'from-cyan-400/10 to-transparent',
  },
  {
    title: 'Open-Source AI Tooling',
    description:
      'Most of my work at Oumi has been making it easier to train, evaluate, and ship foundation models. I think good infra is what makes good research possible.',
    gradient: 'from-violet-400/10 to-transparent',
  },
  {
    title: 'Applied ML',
    description:
      'I like taking ML into messy real-world domains — physical therapy, clinical notes, music transcription. The interesting problems live at the edges.',
    gradient: 'from-amber-400/10 to-transparent',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="font-mono text-[13px] text-zinc-500 mb-4 tracking-wider">
            About
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-zinc-50 mb-6">
                Figuring out{' '}
                <span className="gradient-text">what&apos;s inside the black box</span>
              </h2>
            </div>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I&apos;m a CS student at the{' '}
                <span className="text-zinc-200">University of Cincinnati</span>{' '}
                <span className="text-zinc-600">(3.99 GPA)</span>, originally from Abu Dhabi.
                Right now I&apos;m at <span className="text-zinc-200">Oumi</span> in Seattle,
                working on data synthesis and interpretability tools for foundation models.
              </p>
              <p>
                My research on polysemanticity in language models was accepted at the{' '}
                <span className="text-zinc-200">NeurIPS 2025 Mech Interp Workshop</span>.
                I also run <span className="text-zinc-200">Bearcat Ventures</span>,
                UC&apos;s $1M student-led venture fund, and co-founded{' '}
                <span className="text-zinc-200">PhizzIO</span>, a CV platform for physical
                therapy that won a few pitch competitions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Interest cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                <p className="text-[13px] text-zinc-500 leading-relaxed">
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
