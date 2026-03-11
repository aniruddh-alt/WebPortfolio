'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen, GraduationCap, Trophy, Rocket, Lightbulb, Medal, Presentation, Flame, Sparkles } from 'lucide-react'

const awards = [
  { year: '2025', title: 'Best Undergraduate Student', org: 'UC Computer Science', icon: Award },
  { year: '2025', title: 'NeurIPS Mech Interp Workshop', org: 'Paper Accepted', icon: Sparkles },
  { year: '2024', title: 'Excellence in Research Communication', org: 'UC College of Medicine', icon: Presentation },
  { year: '2024', title: 'Mantei / Mae Scholarship', org: 'Academic Achievement', icon: GraduationCap },
  { year: '2024', title: '2nd Place, RevolutionUC', org: 'Hackathon', icon: Flame },
  { year: '2024', title: 'Winner, Launch It: Cincy', org: 'Main Street Ventures', icon: Rocket },
  { year: '2023', title: '1st Place, MakeUC Hackathon', org: 'University of Cincinnati', icon: Trophy },
  { year: '2023', title: '1st Place, Elevator Pitch', org: 'University of Cincinnati', icon: Lightbulb },
  { year: '2023', title: '1st Place, IQE Pitch Competition', org: 'First Year', icon: Medal },
  { year: '2023', title: 'Excellence in Research Communication', org: 'UC College of Medicine', icon: BookOpen },
]

export default function Awards() {
  return (
    <section className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-[13px] text-zinc-500 mb-4 tracking-wider">
            Recognition
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-zinc-50">
            A few highlights
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
          {awards.map((award, i) => {
            const Icon = award.icon
            return (
              <motion.div
                key={award.title + award.year}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group"
              >
                <div className="divider" />
                <div className="py-5 flex items-center gap-4">
                  <Icon
                    size={14}
                    className="text-zinc-700 group-hover:text-zinc-400 transition-colors flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="font-mono text-[12px] text-zinc-700 tracking-wider tabular-nums flex-shrink-0">
                    {award.year}
                  </span>
                  <div className="min-w-0">
                    <span className="text-[14px] text-zinc-300 group-hover:text-white transition-colors block truncate">
                      {award.title}
                    </span>
                    <span className="text-[11px] text-zinc-600 block">
                      {award.org}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        <div className="divider" />
      </div>
    </section>
  )
}
