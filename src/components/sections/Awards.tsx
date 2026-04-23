'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Award,
  BookOpen,
  GraduationCap,
  Trophy,
  Rocket,
  Lightbulb,
  Medal,
  Presentation,
  Flame,
  Sparkles,
} from 'lucide-react'

const awards = [
  { year: '2025', title: 'Best Undergraduate Student', org: 'UC Computer Science', icon: Award, tint: '#f59e0b' },
  { year: '2025', title: 'NeurIPS Mech Interp Workshop', org: 'Paper Accepted', icon: Sparkles, tint: '#06b6d4' },
  { year: '2024', title: 'Excellence in Research Communication', org: 'UC College of Medicine', icon: Presentation, tint: '#06b6d4' },
  { year: '2024', title: 'Mantei / Mae Scholarship', org: 'Academic Achievement', icon: GraduationCap, tint: '#8b5cf6' },
  { year: '2024', title: '2nd Place, RevolutionUC', org: 'Hackathon', icon: Flame, tint: '#f43f5e' },
  { year: '2024', title: 'Winner, Launch It: Cincy', org: 'Main Street Ventures', icon: Rocket, tint: '#10b981' },
  { year: '2023', title: '1st Place, MakeUC Hackathon', org: 'University of Cincinnati', icon: Trophy, tint: '#f59e0b' },
  { year: '2023', title: '1st Place, Elevator Pitch', org: 'University of Cincinnati', icon: Lightbulb, tint: '#f59e0b' },
  { year: '2023', title: '1st Place, IQE Pitch Competition', org: 'First Year', icon: Medal, tint: '#f43f5e' },
  { year: '2023', title: 'Excellence in Research Communication', org: 'UC College of Medicine', icon: BookOpen, tint: '#06b6d4' },
]

export default function Awards() {
  const prefersReducedMotion = useReducedMotion()
  const years = Array.from(new Set(awards.map((a) => a.year)))
  const byYear = years.map((year) => ({
    year,
    items: awards.filter((a) => a.year === year),
  }))

  return (
    <section id="awards" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-index mb-4">
            04 <em>—</em> Honors
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-zinc-50">
            Awards and recognition
          </h2>
        </motion.div>

        <div className="space-y-14">
          {byYear.map((group, gi) => (
            <motion.div
              key={group.year}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
              className="grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] gap-x-8 sm:gap-x-12"
            >
              <div className="font-serif italic text-2xl sm:text-3xl text-zinc-500 leading-none pt-1 tabular-nums">
                {group.year}
              </div>
              <div>
                {group.items.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title + i}
                      className="group flex items-center gap-4 py-3 border-b border-zinc-800/60 last:border-b-0"
                    >
                      <Icon
                        size={15}
                        className="flex-shrink-0 transition-colors"
                        strokeWidth={1.5}
                        style={{ color: item.tint, opacity: 0.75 }}
                      />
                      <span className="text-[14px] text-zinc-200 group-hover:text-white transition-colors flex-1">
                        {item.title}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500 tracking-[0.08em] text-right flex-shrink-0">
                        {item.org}
                      </span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
