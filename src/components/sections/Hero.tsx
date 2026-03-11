'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center">
      {/* Decorative orbs */}
      <div className="orb w-[500px] h-[500px] bg-accent-cyan top-[10%] -left-[15%]" />
      <div className="orb w-[400px] h-[400px] bg-accent-violet bottom-[15%] -right-[10%]" />

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-mono text-[13px] text-zinc-500 mb-8 tracking-wider"
        >
          CS @ University of Cincinnati &middot; Building at Oumi
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-tight mb-8"
        >
          <span className="text-zinc-50">Aniruddhan</span>
          <br />
          <span className="gradient-text">Ramesh</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-lg mb-12"
        >
          Interested in{' '}
          <span className="text-zinc-200">mechanistic interpretability</span>{' '}
          — understanding how neural networks represent and process information from the inside out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/aniruddhanramesh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors tracking-wide"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aniruddhan-ramesh-7854a0221"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors tracking-wide"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors tracking-wide"
          >
            X
          </a>
          <a
            href="mailto:aniruddhan@example.com"
            className="text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors tracking-wide"
          >
            Email
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-zinc-600" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  )
}
