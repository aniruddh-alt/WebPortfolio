'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Code, Award } from 'lucide-react'
import PixelText from '../PixelText'
import PixelCard from '../PixelCard'

const experiences = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Led development of scalable microservices architecture serving 1M+ users. Implemented CI/CD pipelines and mentored junior developers.',
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
    achievements: [
      'Improved system performance by 40%',
      'Reduced deployment time from 2 hours to 15 minutes',
      'Led team of 5 developers'
    ],
    color: 'green'
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Startup Inc',
    location: 'Austin, TX',
    period: '2020 - 2022',
    description: 'Built entire product from MVP to production with 50k+ active users. Designed and implemented RESTful APIs and responsive web applications.',
    technologies: ['Vue.js', 'Python', 'Django', 'Redis', 'MySQL'],
    achievements: [
      'Launched product that gained 50k users in 6 months',
      'Implemented real-time chat feature',
      'Optimized database queries by 60%'
    ],
    color: 'blue'
  },
  {
    id: 3,
    title: 'Software Developer Intern',
    company: 'Innovation Labs',
    location: 'Remote',
    period: '2019 - 2020',
    description: 'Contributed to open-source projects and internal tools. Gained experience in agile development and test-driven development.',
    technologies: ['JavaScript', 'React', 'Express.js', 'MongoDB'],
    achievements: [
      'Contributed to 5+ open source projects',
      'Built internal dashboard used by 100+ employees',
      'Achieved 95% test coverage on assigned modules'
    ],
    color: 'purple'
  }
]

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="experience" className="py-20 bg-dark-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <PixelText variant="h2" className="mb-4">
            Experience
          </PixelText>
          <PixelText variant="p" className="text-gray-400 max-w-2xl mx-auto">
            My journey through the tech industry, from intern to senior engineer
          </PixelText>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-pixel-green transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-pixel-green border-2 border-dark-bg rounded-full transform -translate-x-1/2 z-10" />

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                <PixelCard className="h-full">
                  <div className="mb-4">
                    <PixelText variant="h3" color={exp.color as any} className="mb-2">
                      {exp.title}
                    </PixelText>
                    <PixelText variant="p" color="blue" className="mb-2 font-bold">
                      {exp.company}
                    </PixelText>
                    <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <PixelText variant="small">{exp.period}</PixelText>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <PixelText variant="small">{exp.location}</PixelText>
                      </div>
                    </div>
                  </div>

                  <PixelText variant="p" className="mb-6 text-gray-300 leading-relaxed">
                    {exp.description}
                  </PixelText>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Code size={16} className="text-pixel-blue" />
                      <PixelText variant="small" color="blue">Technologies:</PixelText>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-pixel-blue/20 text-pixel-blue pixel-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={16} className="text-pixel-yellow" />
                      <PixelText variant="small" color="yellow">Key Achievements:</PixelText>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-pixel-green mt-1">▶</span>
                          <PixelText variant="small" className="text-gray-300">
                            {achievement}
                          </PixelText>
                        </li>
                      ))}
                    </ul>
                  </div>
                </PixelCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}