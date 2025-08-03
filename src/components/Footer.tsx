'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Heart, Code, ArrowUp } from 'lucide-react'
import PixelText from './PixelText'
import PixelButton from './PixelButton'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: Github,
    color: 'purple'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',
    icon: Linkedin,
    color: 'blue'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: Twitter,
    color: 'green'
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: Mail,
    color: 'red'
  }
]

const quickLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Publications', href: '#publications' },
  { name: 'Research', href: '#research' },
  { name: 'UHP', href: '#uhp' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Fun Stuff', href: '#fun' }
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <footer className="bg-dark-surface border-t-2 border-pixel-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <PixelText variant="h3" className="mb-4">
              {'<DEV/>'}
            </PixelText>
            <PixelText variant="p" className="text-gray-400 mb-6 leading-relaxed">
              Thanks for scrolling through my pixelated journey! This portfolio was built with Next.js, 
              TypeScript, Tailwind CSS, and a lot of caffeine. Always excited to connect with fellow 
              developers and tech enthusiasts.
            </PixelText>
            <div className="flex items-center gap-2 text-gray-400">
              <PixelText variant="small">Made with</PixelText>
              <Heart size={16} className="text-pixel-red animate-pulse" />
              <PixelText variant="small">and</PixelText>
              <Code size={16} className="text-pixel-green" />
              <PixelText variant="small">by Your Name</PixelText>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <PixelText variant="h3" color="blue" className="mb-6">
              Quick Links
            </PixelText>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-pixel-green transition-colors duration-200 text-left"
                    whileHover={{ x: 5 }}
                  >
                    <PixelText variant="small">{link.name}</PixelText>
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <PixelText variant="h3" color="purple" className="mb-6">
              Connect
            </PixelText>
            <div className="space-y-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-gray-400 hover:text-pixel-${social.color} transition-colors duration-200`}
                    whileHover={{ x: 5, scale: 1.05 }}
                  >
                    <IconComponent size={20} />
                    <PixelText variant="small">{social.name}</PixelText>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-600 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-gray-400">
              <PixelText variant="small">
                © {new Date().getFullYear()} Your Name. All rights reserved.
              </PixelText>
              <span className="hidden md:block">|</span>
              <PixelText variant="small">
                Built with Next.js & TypeScript
              </PixelText>
            </div>
            
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <PixelText variant="small" className="text-gray-400">
                Back to top
              </PixelText>
              <PixelButton
                variant="secondary"
                size="sm"
                onClick={scrollToTop}
              >
                <ArrowUp size={16} />
              </PixelButton>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10 overflow-hidden">
        <div className="grid grid-cols-20 grid-rows-8 h-full w-full">
          {Array.from({ length: 160 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-pixel-green"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                delay: Math.random() * 3,
                repeat: Infinity
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}