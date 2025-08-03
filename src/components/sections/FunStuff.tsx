'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, Music, Camera, Coffee, Rocket, Zap, Heart, Star } from 'lucide-react'
import PixelText from '../PixelText'
import PixelCard from '../PixelCard'
import PixelButton from '../PixelButton'

const hobbies = [
  {
    id: 1,
    icon: Gamepad2,
    title: 'Retro Gaming',
    description: 'Collecting and playing classic arcade games, building custom arcade cabinets, and developing indie games.',
    details: [
      'Own 50+ classic arcade games',
      'Built 2 custom arcade cabinets',
      'Published 3 indie games on Steam',
      'Active in retro gaming community'
    ],
    color: 'purple',
    funFact: 'High score holder in Pac-Man at local arcade!'
  },
  {
    id: 2,
    icon: Music,
    title: 'Music Production',
    description: 'Creating electronic music and chiptune soundtracks, inspired by 8-bit and 16-bit era game music.',
    details: [
      '100+ tracks produced',
      'Soundtrack for 5 indie games',
      'Performed at 3 gaming conventions',
      'Equipment: MPC, Analog synthesizers'
    ],
    color: 'blue',
    funFact: 'One of my tracks has 100k+ plays on Spotify!'
  },
  {
    id: 3,
    icon: Camera,
    title: 'Photography',
    description: 'Street photography and tech event coverage, with a focus on capturing the human side of technology.',
    details: [
      'Covered 20+ tech conferences',
      'Portfolio of 1000+ street photos',
      'Featured in tech magazines',
      'Specialized in low-light photography'
    ],
    color: 'green',
    funFact: 'Photographed Elon Musk at a SpaceX event!'
  },
  {
    id: 4,
    icon: Coffee,
    title: 'Coffee Brewing',
    description: 'Exploring different brewing methods and coffee origins, from espresso to pour-over perfection.',
    details: [
      'Tried coffee from 30+ countries',
      'Master 8 different brewing methods',
      'Home espresso setup worth $3k+',
      'Can identify coffee origin by taste'
    ],
    color: 'yellow',
    funFact: 'I can make latte art that looks like code!'
  }
]

const achievements = [
  { icon: Star, text: '500+ GitHub stars across repositories', color: 'yellow' },
  { icon: Rocket, text: 'Launched 3 side projects that went viral', color: 'blue' },
  { icon: Heart, text: 'Mentored 25+ developers through coding bootcamps', color: 'red' },
  { icon: Zap, text: 'Solved 1000+ coding challenges on LeetCode', color: 'green' }
]

const quotes = [
  "Code is poetry written in logic",
  "Debugging is like being a detective in a crime movie where you are also the murderer",
  "There are only 10 types of people in the world: those who understand binary and those who don't",
  "Programming is the art of telling another human being what one wants the computer to do",
  "The best error message is the one that never shows up"
]

const skills = [
  { name: 'Making Coffee', level: 95, icon: Coffee, color: 'yellow' },
  { name: 'Debugging at 3AM', level: 92, icon: Zap, color: 'red' },
  { name: 'Explaining Tech to Parents', level: 78, icon: Heart, color: 'pink' },
  { name: 'Procrastinating Productively', level: 88, icon: Rocket, color: 'purple' }
]

export default function FunStuff() {
  const [selectedHobby, setSelectedHobby] = useState<number | null>(null)
  const [currentQuote, setCurrentQuote] = useState(0)
  const [gameScore, setGameScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const playSimpleGame = () => {
    if (isPlaying) return
    setIsPlaying(true)
    setGameScore(0)
    
    const gameInterval = setInterval(() => {
      setGameScore(prev => prev + Math.floor(Math.random() * 100))
    }, 100)

    setTimeout(() => {
      clearInterval(gameInterval)
      setIsPlaying(false)
    }, 3000)
  }

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
    <section id="fun" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <PixelText variant="h2" className="mb-4">
            Fun Stuff
          </PixelText>
          <PixelText variant="p" className="text-gray-400 max-w-2xl mx-auto">
            The lighter side of my life - hobbies, interests, and things that keep me inspired
          </PixelText>
        </motion.div>

        {/* Interactive Quote Display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <PixelCard className="text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <PixelText variant="p" className="text-gray-300 italic mb-4">
                  "{quotes[currentQuote]}"
                </PixelText>
                <div className="flex justify-center gap-2">
                  {quotes.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentQuote ? 'bg-pixel-green' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </PixelCard>
        </motion.div>

        {/* Hobbies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <PixelText variant="h3" color="blue" className="mb-8 text-center">
            Hobbies & Interests
          </PixelText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon
              return (
                <motion.div key={hobby.id} variants={itemVariants}>
                  <PixelCard 
                    className="h-full group cursor-pointer"
                    interactive={true}
                    onClick={() => setSelectedHobby(selectedHobby === hobby.id ? null : hobby.id)}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className={`p-3 bg-pixel-${hobby.color}/20 pixel-border flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent size={24} className={`text-pixel-${hobby.color}`} />
                      </motion.div>
                      <div className="flex-1">
                        <PixelText variant="p" color={hobby.color as any} className="font-bold mb-2">
                          {hobby.title}
                        </PixelText>
                        <PixelText variant="small" className="text-gray-300 leading-relaxed">
                          {hobby.description}
                        </PixelText>
                      </div>
                    </div>

                    <AnimatePresence>
                      {selectedHobby === hobby.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-600 pt-4 mt-4"
                        >
                          <ul className="space-y-2 mb-4">
                            {hobby.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className={`text-pixel-${hobby.color} mt-1`}>▶</span>
                                <PixelText variant="small" className="text-gray-300">
                                  {detail}
                                </PixelText>
                              </li>
                            ))}
                          </ul>
                          <div className={`p-3 bg-pixel-${hobby.color}/10 pixel-border`}>
                            <PixelText variant="small" color={hobby.color as any} className="font-bold">
                              Fun Fact: {hobby.funFact}
                            </PixelText>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </PixelCard>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Fun Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <PixelText variant="h3" color="purple" className="mb-8 text-center">
            "Professional" Skills
          </PixelText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <motion.div key={skill.name} variants={itemVariants}>
                  <PixelCard className="flex items-center gap-4">
                    <IconComponent size={32} className={`text-pixel-${skill.color}`} />
                    <div className="flex-1">
                      <PixelText variant="p" color={skill.color as any} className="mb-2">
                        {skill.name}
                      </PixelText>
                      <div className="w-full bg-dark-bg h-2 pixel-border">
                        <motion.div
                          className={`h-full bg-pixel-${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <PixelText variant="small" color={skill.color as any} className="mt-1">
                        {skill.level}%
                      </PixelText>
                    </div>
                  </PixelCard>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Interactive Game */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <PixelText variant="h3" color="red" className="mb-8 text-center">
            Mini Game: Code Points Collector
          </PixelText>
          <PixelCard className="text-center">
            <PixelText variant="p" className="mb-6 text-gray-300">
              Click the button to collect code points! How many can you get in 3 seconds?
            </PixelText>
            <div className="flex items-center justify-center gap-8 mb-6">
              <div>
                <PixelText variant="h2" color="green" className="mb-2">
                  {gameScore.toLocaleString()}
                </PixelText>
                <PixelText variant="small" className="text-gray-400">
                  Code Points
                </PixelText>
              </div>
              <PixelButton
                variant={isPlaying ? "danger" : "primary"}
                size="lg"
                onClick={playSimpleGame}
                disabled={isPlaying}
              >
                {isPlaying ? "Collecting..." : "Start Game"}
              </PixelButton>
            </div>
            {isPlaying && (
              <motion.div
                className="text-pixel-green"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                <PixelText variant="small">Collecting points...</PixelText>
              </motion.div>
            )}
          </PixelCard>
        </motion.div>

        {/* Fun Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <PixelText variant="h3" color="yellow" className="mb-8 text-center">
            Random Achievements
          </PixelText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <PixelCard className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <IconComponent size={32} className={`text-pixel-${achievement.color}`} />
                    </motion.div>
                    <PixelText variant="p" className="text-gray-300">
                      {achievement.text}
                    </PixelText>
                  </PixelCard>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}