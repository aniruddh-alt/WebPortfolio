'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'PhizzIO',
    description:
      'Computer vision platform for physical therapy — tracks patient movements in real-time and provides guided exercise feedback for therapists and patients.',
    tags: ['Python', 'Computer Vision', 'React', 'B2B'],
    href: '#',
    color: 'cyan',
  },
  {
    title: 'Oumi Platform',
    description:
      'Contributions to Oumi\'s open-source AI stack — fine-tuning, evaluation, and deployment tooling for open-source LLMs and VLMs.',
    tags: ['Python', 'PyTorch', 'Open Source', 'MLOps'],
    href: 'https://github.com/oumi-ai/oumi',
    color: 'violet',
  },
  {
    title: 'RevolutionUC Hack',
    description:
      'Healthcare solutions project at RevolutionUC hackathon — 2nd place finish. Built during a 24-hour sprint focused on practical health tech.',
    tags: ['Hackathon', 'Healthcare', 'Full Stack'],
    href: '#',
    color: 'amber',
  },
  {
    title: 'VCIC Portfolio',
    description:
      'Venture capital research and deal analysis for the VCIC competition. Led due diligence and presented at the Midwest Regional at Carnegie Mellon.',
    tags: ['Venture Capital', 'Analysis', 'Presentation'],
    href: '#',
    color: 'rose',
  },
]

const colorMap: Record<string, string> = {
  cyan: '#06b6d4',
  violet: '#8b5cf6',
  amber: '#f59e0b',
  rose: '#f43f5e',
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-[13px] text-zinc-500 mb-4 tracking-wider">
            Projects
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-zinc-50">
            Things I&apos;ve shipped
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group card p-7 flex flex-col relative overflow-hidden cursor-pointer"
            >
              {/* Subtle top-edge color bar */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${colorMap[project.color]}, transparent)`,
                }}
              />

              <div className="flex items-start justify-between mb-3">
                <h3 className="text-[15px] font-medium text-zinc-100 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={15}
                  className="text-zinc-600 group-hover:text-zinc-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 ml-3 mt-0.5"
                  strokeWidth={1.5}
                />
              </div>

              <p className="text-[13px] text-zinc-500 leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
