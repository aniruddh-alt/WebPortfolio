'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Software / AI Infrastructure',
    org: 'Oumi',
    period: 'Present',
    description:
      'Working on open-source AI infrastructure — training pipelines, evaluation frameworks, and tooling for understanding large language models at scale.',
    tags: ['Python', 'PyTorch', 'LLMs', 'Infrastructure'],
  },
  {
    role: 'Managing Partner',
    org: 'Bearcat Ventures',
    period: 'Present',
    description:
      'Leading UC\'s student-run venture fund. Evaluating early-stage startups, managing deal flow, and building the next generation of student investors. 2nd place at VCIC Midwest Regional @ Carnegie Mellon.',
    tags: ['Venture Capital', 'Due Diligence', 'Leadership'],
  },
  {
    role: 'Co-Founder',
    org: 'PhizzIO',
    period: '2023 — Present',
    description:
      'B2B platform using computer vision to improve physical therapy outcomes. Won Launch It: Cincy, Startup Weekend runner-up, and the IQ-E Pitch Competition. Built with Main Street Ventures support.',
    tags: ['Computer Vision', 'React', 'Startup', 'Healthcare'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-[13px] text-zinc-500 mb-4 tracking-wider">
            Experience
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-zinc-50">
            Where I&apos;ve been building
          </h2>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.org}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group"
            >
              <div className="divider" />
              <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-12">
                {/* Left */}
                <div className="flex sm:flex-col gap-2 sm:gap-1">
                  <span className="font-mono text-[12px] text-zinc-600 tracking-wider">
                    {exp.period}
                  </span>
                </div>

                {/* Right */}
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 mb-3">
                    <h3 className="text-[15px] font-medium text-zinc-100 group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-[13px] text-zinc-500">
                      {exp.org}
                    </span>
                  </div>
                  <p className="text-[13px] text-zinc-500 leading-relaxed mb-4 max-w-2xl">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="divider" />
        </div>
      </div>
    </section>
  )
}
