"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-mono text-[13px] text-zinc-500 mb-8 tracking-wider"
        >
          Abu Dhabi &rarr; Cincinnati &rarr; Seattle &middot; Currently at Oumi
        </motion.p>

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-tight mb-8 text-zinc-50"
        >
          Aniruddhan
          <br />
          <span className="italic text-zinc-200">Ramesh</span>
        </motion.h1>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-lg mb-12"
        >
          Most days I&apos;m trying to figure out{" "}
          <span className="text-zinc-200">
            what a language model is actually doing on the inside
          </span>
          . The rest of the time I build the open-source tooling that makes
          that kind of work possible.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/aniruddh-alt"
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
            href="https://scholar.google.com/citations?user=yscdiBoAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors tracking-wide"
          >
            Scholar
          </a>
          <a
            href="https://x.com/aniruddhr04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors tracking-wide"
          >
            X
          </a>
          <a
            href="mailto:rameshad@mail.uc.edu"
            className="text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors tracking-wide"
          >
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
