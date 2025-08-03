'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Terminal, Gamepad2, Zap } from 'lucide-react'
import PixelText from '../PixelText'
import PixelButton from '../PixelButton'
import PixelCard from '../PixelCard'

const roles = [
  'Software Engineer',
  'Full Stack Developer', 
  'System Architect',
  'Problem Solver',
  'Code Wizard'
]

const skills = [
  { name: 'JavaScript', level: 95, color: 'yellow' },
  { name: 'Python', level: 90, color: 'blue' },
  { name: 'React', level: 92, color: 'blue' },
  { name: 'Node.js', level: 88, color: 'green' },
  { name: 'TypeScript', level: 85, color: 'blue' },
  { name: 'AWS', level: 80, color: 'yellow' }
]

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-pixel-green"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 2,
                repeat: Infinity
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-10 text-pixel-blue"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Code size={32} />
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-pixel-purple"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <Terminal size={28} />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-pixel-pink"
        animate={{ y: [-5, 15, -5] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <Gamepad2 size={24} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-pixel-yellow"
        animate={{ y: [15, -5, 15] }}
        transition={{ duration: 2.8, repeat: Infinity }}
      >
        <Zap size={30} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <PixelText variant="h1" className="mb-4">
              Hello, I'm
            </PixelText>
            <PixelText variant="h1" glitch color="blue" className="mb-6">
              Your Name
            </PixelText>
          </motion.div>

          {/* Rotating Role */}
          <motion.div variants={itemVariants} className="mb-8 h-16">
            <motion.div
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <PixelText 
                variant="h2" 
                color="purple" 
                className={isTyping ? 'typewriter' : ''}
              >
                {roles[currentRoleIndex]}
              </PixelText>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-12 max-w-3xl mx-auto">
            <PixelText variant="p" className="mb-6 text-gray-300 leading-loose">
              Passionate about crafting digital experiences through clean code and innovative solutions. 
              Specializing in full-stack development with a love for retro aesthetics and modern technology.
            </PixelText>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mb-16 flex flex-wrap justify-center gap-4">
            <PixelButton 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </PixelButton>
            <PixelButton 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Experience
            </PixelButton>
            <PixelButton 
              variant="success" 
              size="lg"
              onClick={() => document.getElementById('fun')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Fun Stuff
            </PixelButton>
          </motion.div>

          {/* Skills Preview */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <PixelText variant="h3" className="mb-8 text-center">
              Core Technologies
            </PixelText>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <PixelCard key={skill.name} className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <PixelText variant="small" color={skill.color as any}>
                      {skill.name}
                    </PixelText>
                    <PixelText variant="small" color={skill.color as any}>
                      {skill.level}%
                    </PixelText>
                  </div>
                  <div className="w-full bg-dark-bg h-2 pixel-border">
                    <motion.div
                      className={`h-full bg-pixel-${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </div>
                </PixelCard>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 pixel-border border-pixel-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pixel-green rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}