'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'GitHub', href: 'https://github.com/aniruddhanramesh' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/aniruddhan-ramesh-7854a0221' },
  { label: 'X', href: 'https://twitter.com/' },
]

export default function Footer() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="font-mono text-[13px] text-zinc-500 mb-4 tracking-wider">
            Contact
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-zinc-50 mb-6">
            Let&apos;s talk
          </h2>
          <p className="text-zinc-500 max-w-md leading-relaxed mb-8">
            Interested in mechanistic interpretability, AI safety, startups, or anything in between.
            Always happy to connect.
          </p>
          <a
            href="mailto:aniruddhan@example.com"
            className="inline-flex items-center gap-2 group"
          >
            <span className="text-lg text-zinc-200 group-hover:text-white transition-colors">
              aniruddhan@example.com
            </span>
            <ArrowUpRight
              size={16}
              className="text-zinc-500 group-hover:text-zinc-200 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </a>
        </motion.div>

        {/* Footer bar */}
        <div className="divider" />
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-[12px] text-zinc-600 font-mono tracking-wider">
            Aniruddhan Ramesh &mdash; {new Date().getFullYear()}
          </span>
          <div className="flex items-center gap-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-zinc-600 hover:text-zinc-400 transition-colors font-mono tracking-wider"
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
