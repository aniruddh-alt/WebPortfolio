'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'GitHub', href: 'https://github.com/aniruddh-alt' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/aniruddhan-ramesh-7854a0221' },
  { label: 'Scholar', href: 'https://scholar.google.com/citations?user=yscdiBoAAAAJ' },
  { label: 'X', href: 'https://x.com/aniruddhr04' },
]

export default function Footer() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="section-index mb-4">
            06 <em>—</em> Contact
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-zinc-50 mb-6">
            Get in touch
          </h2>
          <p className="text-zinc-400 max-w-md leading-relaxed mb-8">
            I&apos;m always happy to talk about interpretability, open-source ML
            infrastructure, startups, mridangam, or whatever you&apos;re working
            on. My inbox is open.
          </p>
          <a
            href="mailto:rameshad@mail.uc.edu"
            className="inline-flex items-center gap-2 group"
          >
            <span className="text-lg text-zinc-200 group-hover:text-white transition-colors">
              rameshad@mail.uc.edu
            </span>
            <ArrowUpRight
              size={16}
              className="text-zinc-400 group-hover:text-zinc-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </a>
        </motion.div>

        {/* Footer bar */}
        <div className="divider" />
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-[12px] text-zinc-500 font-mono tracking-wider">
            Aniruddhan Ramesh · {new Date().getFullYear()}
          </span>
          <div className="flex items-center gap-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-zinc-500 hover:text-zinc-200 transition-colors font-mono tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
