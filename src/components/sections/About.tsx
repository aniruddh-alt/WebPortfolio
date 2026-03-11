'use client'

import { motion } from 'framer-motion'

const interests = [
  {
    title: 'Mechanistic Interpretability',
    description:
      'Reverse-engineering neural network computations — circuit discovery, feature visualization, and understanding how transformers represent information.',
    gradient: 'from-cyan-400/10 to-transparent',
  },
  {
    title: 'Sparse Autoencoders',
    description:
      'Dictionary learning for extracting interpretable features from model activations. Building scalable tools for feature analysis across model families.',
    gradient: 'from-violet-400/10 to-transparent',
  },
  {
    title: 'AI Infrastructure',
    description:
      'Open-source tooling for training, evaluating, and understanding AI systems at scale. Making research more accessible and reproducible.',
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
                Building tools to understand{' '}
                <span className="gradient-text">how models think</span>
              </h2>
            </div>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I&apos;m a computer science student at the University of Cincinnati, originally from
                Abu Dhabi. Currently at <span className="text-zinc-200">Oumi</span>, where I work on
                open-source AI infrastructure and research tooling.
              </p>
              <p>
                Beyond research, I&apos;m the Managing Partner at{' '}
                <span className="text-zinc-200">Bearcat Ventures</span> — UC&apos;s student-led
                venture fund — and co-founded{' '}
                <span className="text-zinc-200">PhizzIO</span>, a B2B platform reimagining physical
                therapy through computer vision.
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
              {/* Gradient wash */}
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
