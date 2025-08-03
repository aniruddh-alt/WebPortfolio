'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, TrendingUp, Target, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import PixelText from '../PixelText'
import PixelCard from '../PixelCard'
import PixelButton from '../PixelButton'

const yearlyReviews = [
  {
    year: 2023,
    theme: "Innovation & Leadership",
    summary: "A year focused on leading innovative projects, mentoring teams, and pushing the boundaries of what's possible in software engineering.",
    highlights: [
      "Led development of AI-powered code review tool",
      "Promoted to Senior Software Engineer",
      "Won company-wide innovation award",
      "Mentored 5 junior developers",
      "Published 2 research papers"
    ],
    metrics: {
      projectsCompleted: 12,
      linesOfCode: 50000,
      bugsFixed: 245,
      teamSize: 8,
      performanceRating: "Exceeds Expectations"
    },
    technologies: ["React", "TypeScript", "AWS", "Python", "TensorFlow"],
    personalGrowth: [
      "Improved leadership and communication skills",
      "Mastered machine learning fundamentals",
      "Enhanced system design capabilities",
      "Developed public speaking confidence"
    ],
    challenges: [
      "Managing larger, distributed teams",
      "Balancing research with product development",
      "Learning to delegate effectively"
    ],
    goals2024: [
      "Complete PhD application process",
      "Launch open-source AI development toolkit",
      "Expand team to 12 members",
      "Speak at 3 major tech conferences"
    ],
    color: "purple",
    rating: 9.2
  },
  {
    year: 2022,
    theme: "Scale & Performance",
    summary: "Focused on building scalable systems, optimizing performance, and establishing myself as a reliable technical contributor.",
    highlights: [
      "Architected microservices handling 1M+ requests/day",
      "Reduced system latency by 60%",
      "Completed AWS Solutions Architect certification",
      "Led migration to cloud-native architecture",
      "Organized internal tech talks series"
    ],
    metrics: {
      projectsCompleted: 8,
      linesOfCode: 35000,
      bugsFixed: 180,
      teamSize: 5,
      performanceRating: "Meets Expectations"
    },
    technologies: ["Node.js", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
    personalGrowth: [
      "Deep-dived into system architecture",
      "Improved debugging and troubleshooting skills",
      "Enhanced collaboration with DevOps teams",
      "Learned to balance technical debt with new features"
    ],
    challenges: [
      "Handling massive scale requirements",
      "Coordinating with multiple teams",
      "Managing technical debt while delivering features"
    ],
    goals2023: [
      "Take on team lead responsibilities",
      "Contribute to open source projects",
      "Obtain machine learning certification",
      "Improve mentoring skills"
    ],
    color: "blue",
    rating: 8.7
  },
  {
    year: 2021,
    theme: "Foundation & Growth",
    summary: "First full year as a professional developer, focused on building strong fundamentals and contributing to meaningful projects.",
    highlights: [
      "Successfully onboarded and became productive team member",
      "Delivered first major feature end-to-end",
      "Contributed to 3 different product areas",
      "Completed internal software engineering bootcamp",
      "Established code review and testing practices"
    ],
    metrics: {
      projectsCompleted: 6,
      linesOfCode: 25000,
      bugsFixed: 95,
      teamSize: 4,
      performanceRating: "Meets Expectations"
    },
    technologies: ["JavaScript", "React", "Express.js", "MongoDB", "Git"],
    personalGrowth: [
      "Learned to work in agile environment",
      "Developed code review skills",
      "Improved time management and estimation",
      "Built professional network within company"
    ],
    challenges: [
      "Adapting to professional development environment",
      "Learning complex existing codebase",
      "Balancing perfectionism with delivery timelines"
    ],
    goals2022: [
      "Master containerization and orchestration",
      "Contribute to architecture decisions",
      "Mentor intern developers",
      "Obtain cloud certification"
    ],
    color: "green",
    rating: 8.1
  },
  {
    year: 2020,
    theme: "Transition & Adaptation",
    summary: "Final year of university and transition to professional work, marked by remote learning challenges and career preparation.",
    highlights: [
      "Graduated Summa Cum Laude with CS degree",
      "Completed honors thesis on AI-driven testing",
      "Secured full-time software engineer position",
      "Adapted to remote learning and work",
      "Won university-wide coding competition"
    ],
    metrics: {
      projectsCompleted: 4,
      linesOfCode: 15000,
      coursesCompleted: 8,
      gpa: 3.95,
      performanceRating: "Academic Excellence"
    },
    technologies: ["Python", "Java", "C++", "React", "Flask"],
    personalGrowth: [
      "Developed resilience and adaptability",
      "Improved self-directed learning abilities",
      "Enhanced written and verbal communication",
      "Built confidence in technical interviews"
    ],
    challenges: [
      "Adapting to remote learning environment",
      "Job searching during pandemic",
      "Completing thesis research remotely"
    ],
    goals2021: [
      "Excel in first professional role",
      "Build strong foundation in web development",
      "Establish professional network",
      "Contribute to open source projects"
    ],
    color: "yellow",
    rating: 8.8
  }
]

export default function YearReviews() {
  const [currentYear, setCurrentYear] = useState(0)
  const currentReview = yearlyReviews[currentYear]

  const nextYear = () => {
    setCurrentYear((prev) => (prev + 1) % yearlyReviews.length)
  }

  const prevYear = () => {
    setCurrentYear((prev) => (prev - 1 + yearlyReviews.length) % yearlyReviews.length)
  }

  return (
    <section id="reviews" className="py-20 bg-dark-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <PixelText variant="h2" className="mb-4">
            Year in Reviews
          </PixelText>
          <PixelText variant="p" className="text-gray-400 max-w-2xl mx-auto">
            Reflecting on growth, achievements, and lessons learned through my professional journey
          </PixelText>
        </motion.div>

        {/* Year Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <PixelButton variant="secondary" size="sm" onClick={prevYear}>
            <ChevronLeft size={16} />
          </PixelButton>
          
          <div className="flex items-center gap-4">
            {yearlyReviews.map((review, index) => (
              <motion.button
                key={review.year}
                onClick={() => setCurrentYear(index)}
                className={`px-4 py-2 pixel-border transition-all duration-300 ${
                  index === currentYear
                    ? `text-pixel-${review.color} border-pixel-${review.color} bg-pixel-${review.color}/20`
                    : 'text-gray-400 border-gray-600 hover:text-pixel-green hover:border-pixel-green'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PixelText variant="small">{review.year}</PixelText>
              </motion.button>
            ))}
          </div>

          <PixelButton variant="secondary" size="sm" onClick={nextYear}>
            <ChevronRight size={16} />
          </PixelButton>
        </motion.div>

        {/* Year Review Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview.year}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <PixelCard className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <PixelText variant="h2" color={currentReview.color as any} className="mb-2">
                    {currentReview.year}
                  </PixelText>
                  <PixelText variant="h3" color="blue" className="mb-2">
                    {currentReview.theme}
                  </PixelText>
                  <PixelText variant="p" className="text-gray-300 leading-relaxed">
                    {currentReview.summary}
                  </PixelText>
                </div>
                <div className="text-center">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-pixel-${currentReview.color}/20 pixel-border`}>
                    <Star size={20} className={`text-pixel-${currentReview.color}`} />
                    <PixelText variant="h3" color={currentReview.color as any}>
                      {currentReview.rating}
                    </PixelText>
                  </div>
                  <PixelText variant="small" className="text-gray-400 mt-2">
                    Overall Rating
                  </PixelText>
                </div>
              </div>
            </PixelCard>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {Object.entries(currentReview.metrics).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <PixelCard className="text-center">
                    <PixelText variant="h3" color={currentReview.color as any} className="mb-1">
                      {typeof value === 'string' ? value.split(' ')[0] : value}
                    </PixelText>
                    <PixelText variant="small" className="text-gray-400">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </PixelText>
                  </PixelCard>
                </motion.div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <PixelCard className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp size={24} className="text-pixel-green" />
                    <PixelText variant="h3" color="green">
                      Key Highlights
                    </PixelText>
                  </div>
                  <ul className="space-y-3">
                    {currentReview.highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-pixel-green mt-1">▶</span>
                        <PixelText variant="small" className="text-gray-300">
                          {highlight}
                        </PixelText>
                      </motion.li>
                    ))}
                  </ul>
                </PixelCard>
              </motion.div>

              {/* Personal Growth */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <PixelCard className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <Target size={24} className="text-pixel-purple" />
                    <PixelText variant="h3" color="purple">
                      Personal Growth
                    </PixelText>
                  </div>
                  <ul className="space-y-3">
                    {currentReview.personalGrowth.map((growth, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-pixel-purple mt-1">▶</span>
                        <PixelText variant="small" className="text-gray-300">
                          {growth}
                        </PixelText>
                      </motion.li>
                    ))}
                  </ul>
                </PixelCard>
              </motion.div>
            </div>

            {/* Technologies & Challenges/Goals */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <PixelCard className="h-full">
                  <PixelText variant="h3" color="blue" className="mb-4">
                    Technologies
                  </PixelText>
                  <div className="flex flex-wrap gap-2">
                    {currentReview.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        className="px-2 py-1 text-xs bg-pixel-blue/20 text-pixel-blue pixel-border"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </PixelCard>
              </motion.div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <PixelCard className="h-full">
                  <PixelText variant="h3" color="red" className="mb-4">
                    Challenges
                  </PixelText>
                  <ul className="space-y-2">
                    {currentReview.challenges.map((challenge, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-pixel-red mt-1">▶</span>
                        <PixelText variant="small" className="text-gray-300">
                          {challenge}
                        </PixelText>
                      </motion.li>
                    ))}
                  </ul>
                </PixelCard>
              </motion.div>

              {/* Goals for Next Year */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <PixelCard className="h-full">
                  <PixelText variant="h3" color="yellow" className="mb-4">
                    Goals for {currentReview.year + 1}
                  </PixelText>
                  <ul className="space-y-2">
                    {(currentReview.goals2024 || currentReview.goals2023 || currentReview.goals2022 || currentReview.goals2021 || []).map((goal, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-pixel-yellow mt-1">▶</span>
                        <PixelText variant="small" className="text-gray-300">
                          {goal}
                        </PixelText>
                      </motion.li>
                    ))}
                  </ul>
                </PixelCard>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}