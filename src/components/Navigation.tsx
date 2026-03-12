'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  // Raw transforms from scroll position
  const rawOpacity = useTransform(scrollY, [20, 160], [1, 0])
  const rawFirstWidth = useTransform(scrollY, [20, 160], [150, 0])
  const rawLastWidth = useTransform(scrollY, [20, 160], [100, 0])

  // Spring physics for that heavy, satisfying inertia
  const springConfig = { stiffness: 80, damping: 20, mass: 1.2 }
  const tailOpacity = useSpring(rawOpacity, springConfig)
  const firstTailWidth = useSpring(rawFirstWidth, springConfig)
  const lastTailWidth = useSpring(rawLastWidth, springConfig)

  // Space between first and last name collapses too
  const rawSpaceWidth = useTransform(scrollY, [20, 120], [6, 0])
  const spaceWidth = useSpring(rawSpaceWidth, springConfig)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface-0/70 backdrop-blur-2xl border-b border-zinc-800/60' : ''
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-xl text-zinc-50 hover:text-zinc-300 transition-colors flex items-baseline"
        >
          <span>A</span>
          <motion.span
            style={{
              opacity: tailOpacity,
              maxWidth: firstTailWidth,
            }}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            niruddhan
          </motion.span>
          <motion.span
            style={{ width: spaceWidth }}
            className="inline-block flex-shrink-0"
          />
          <span>R</span>
          <motion.span
            style={{
              opacity: tailOpacity,
              maxWidth: lastTailWidth,
            }}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            amesh
          </motion.span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors tracking-wide border border-zinc-800 rounded-full px-3 py-1 hover:border-zinc-600"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-0/95 backdrop-blur-2xl border-b border-zinc-800/60 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
