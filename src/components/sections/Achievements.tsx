'use client'

import { motion } from 'framer-motion'
import { Trophy, Award, Medal, Star, Target, Zap } from 'lucide-react'
import PixelText from '../PixelText'
import PixelCard from '../PixelCard'

const achievements = [
  {
    id: 1,
    icon: Trophy,
    title: 'Hackathon Winner',
    subtitle: 'Best Technical Innovation',
    description: 'Won first place at TechCrunch Disrupt 2023 with an AI-powered code review tool that increased development efficiency by 45%.',
    date: '2023',
    color: 'yellow',
    stats: '1st Place',
    category: 'Competition'
  },
  {
    id: 2,
    icon: Award,
    title: 'Outstanding Graduate',
    subtitle: 'Computer Science Honors',
    description: 'Graduated Summa Cum Laude with a 3.95 GPA. Recipient of the Dean\'s Award for Academic Excellence.',
    date: '2020',
    color: 'purple',
    stats: '3.95 GPA',
    category: 'Academic'
  },
  {
    id: 3,
    icon: Medal,
    title: 'Certified Solutions Architect',
    subtitle: 'AWS Professional Level',
    description: 'Achieved AWS Solutions Architect Professional certification, demonstrating expertise in cloud architecture and best practices.',
    date: '2022',
    color: 'blue',
    stats: 'Professional',
    category: 'Certification'
  },
  {
    id: 4,
    icon: Star,
    title: 'Open Source Contributor',
    subtitle: 'React Core Team Recognition',
    description: 'Recognized by React core team for significant contributions to React ecosystem. Over 500+ GitHub stars across repositories.',
    date: '2021-2023',
    color: 'green',
    stats: '500+ Stars',
    category: 'Open Source'
  },
  {
    id: 5,
    icon: Target,
    title: 'Performance Champion',
    subtitle: 'System Optimization Expert',
    description: 'Optimized legacy system performance by 300%, reducing server costs by $50k annually while improving user experience.',
    date: '2022',
    color: 'red',
    stats: '300% Improvement',
    category: 'Performance'
  },
  {
    id: 6,
    icon: Zap,
    title: 'Innovation Award',
    subtitle: 'Company-wide Recognition',
    description: 'Received company innovation award for developing automated testing framework that reduced bug reports by 70%.',
    date: '2023',
    color: 'pink',
    stats: '70% Reduction',
    category: 'Innovation'
  }
]

const stats = [
  { label: 'Years Experience', value: '5+', color: 'green' },
  { label: 'Projects Completed', value: '50+', color: 'blue' },
  { label: 'GitHub Repositories', value: '100+', color: 'purple' },
  { label: 'Technologies Mastered', value: '25+', color: 'yellow' },
]

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="achievements" className="py-20 bg-dark-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <PixelText variant="h2" className="mb-4">
            Achievements
          </PixelText>
          <PixelText variant="p" className="text-gray-400 max-w-2xl mx-auto">
            Milestones and recognitions throughout my career journey
          </PixelText>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <PixelCard className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <PixelText variant="h2" color={stat.color as any} className="mb-2">
                    {stat.value}
                  </PixelText>
                  <PixelText variant="small" className="text-gray-400">
                    {stat.label}
                  </PixelText>
                </motion.div>
              </PixelCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div key={achievement.id} variants={itemVariants}>
                <PixelCard 
                  className="h-full group"
                  interactive={true}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className={`p-3 bg-pixel-${achievement.color}/20 pixel-border`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent 
                        size={24} 
                        className={`text-pixel-${achievement.color}`} 
                      />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <PixelText variant="p" color={achievement.color as any} className="font-bold">
                          {achievement.title}
                        </PixelText>
                        <span className={`text-xs px-2 py-1 bg-pixel-${achievement.color}/20 text-pixel-${achievement.color} pixel-border`}>
                          {achievement.date}
                        </span>
                      </div>
                      <PixelText variant="small" color="blue" className="mb-2">
                        {achievement.subtitle}
                      </PixelText>
                    </div>
                  </div>

                  <PixelText variant="small" className="text-gray-300 leading-relaxed mb-4">
                    {achievement.description}
                  </PixelText>

                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                      {achievement.category}
                    </span>
                    <PixelText variant="small" color={achievement.color as any} className="font-bold">
                      {achievement.stats}
                    </PixelText>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                </PixelCard>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Achievement Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <PixelText variant="h3" className="text-center mb-8">
            Achievement Timeline
          </PixelText>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-pixel-green" />
            <div className="space-y-8">
              {achievements
                .sort((a, b) => parseInt(b.date) - parseInt(a.date))
                .map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className={`p-4 bg-dark-surface pixel-border border-pixel-${achievement.color}`}>
                        <PixelText variant="small" color={achievement.color as any} className="font-bold">
                          {achievement.date} - {achievement.title}
                        </PixelText>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pixel-green border-2 border-dark-bg rounded-full" />
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}