'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Users, BookOpen, Award, Target, Heart } from 'lucide-react'
import PixelText from '../PixelText'
import PixelCard from '../PixelCard'

const uhpExperiences = [
  {
    id: 1,
    category: 'Honors Thesis',
    title: 'AI-Driven Software Testing: A Machine Learning Approach to Automated Bug Detection',
    description: 'Conducted independent research on applying machine learning techniques to improve software testing efficiency, working closely with faculty advisor Dr. Jane Smith.',
    year: '2019-2020',
    grade: 'A+ (Highest Honors)',
    outcomes: [
      'Published findings in undergraduate research journal',
      'Presented at National Undergraduate Research Conference',
      'Developed open-source testing framework adopted by 3 companies'
    ],
    skills: ['Research Methodology', 'Machine Learning', 'Software Testing', 'Academic Writing'],
    color: 'purple',
    icon: BookOpen
  },
  {
    id: 2,
    category: 'Honors Seminar',
    title: 'Ethics in Artificial Intelligence',
    description: 'Participated in interdisciplinary seminar exploring ethical implications of AI systems, collaborative projects with philosophy and psychology students.',
    year: '2019',
    grade: 'A',
    outcomes: [
      'Co-authored policy paper on AI ethics guidelines',
      'Organized campus-wide AI ethics symposium',
      'Mentored underclassmen in ethical reasoning'
    ],
    skills: ['Critical Thinking', 'Ethics', 'Interdisciplinary Collaboration', 'Public Speaking'],
    color: 'blue',
    icon: Users
  },
  {
    id: 3,
    category: 'Community Service',
    title: 'Code for Good Initiative',
    description: 'Led technology education program for underserved youth, teaching programming fundamentals and creating educational software solutions.',
    year: '2018-2020',
    impact: '200+ students taught',
    outcomes: [
      'Taught 200+ students basic programming concepts',
      'Developed curriculum adopted by 5 local schools',
      'Organized annual coding competition with $10k in prizes'
    ],
    skills: ['Leadership', 'Teaching', 'Curriculum Development', 'Community Outreach'],
    color: 'green',
    icon: Heart
  },
  {
    id: 4,
    category: 'Leadership Role',
    title: 'UHP Student Council President',
    description: 'Elected to represent 500+ honors students, organized academic and social events, liaison between students and administration.',
    year: '2019-2020',
    scope: '500+ students represented',
    outcomes: [
      'Increased program participation by 40%',
      'Established peer mentoring program',
      'Secured $50k in additional funding for student activities'
    ],
    skills: ['Leadership', 'Event Planning', 'Public Relations', 'Budget Management'],
    color: 'yellow',
    icon: Target
  }
]

const achievements = [
  {
    title: 'Summa Cum Laude Graduate',
    description: 'Graduated with highest honors, maintaining 3.95 GPA throughout honors program',
    icon: GraduationCap,
    color: 'purple'
  },
  {
    title: 'Outstanding Honors Student Award',
    description: 'Recipient of annual award recognizing exceptional academic and leadership contributions',
    icon: Award,
    color: 'gold'
  },
  {
    title: 'Peer Mentor Recognition',
    description: 'Recognized for mentoring 15+ incoming honors students over 2 years',
    icon: Users,
    color: 'blue'
  }
]

const skills = [
  { name: 'Research & Analysis', level: 95, color: 'purple' },
  { name: 'Academic Writing', level: 92, color: 'blue' },
  { name: 'Leadership', level: 90, color: 'yellow' },
  { name: 'Critical Thinking', level: 94, color: 'green' },
  { name: 'Public Speaking', level: 88, color: 'red' },
  { name: 'Mentoring', level: 91, color: 'pink' }
]

export default function UHP() {
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
    <section id="uhp" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <PixelText variant="h2" className="mb-4">
            University Honors Program
          </PixelText>
          <PixelText variant="p" className="text-gray-400 max-w-2xl mx-auto">
            My journey through the University Honors Program, showcasing academic excellence, leadership, and community engagement
          </PixelText>
        </motion.div>

        {/* Program Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <PixelCard className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <PixelText variant="h3" color="purple" className="mb-2">
                  4
                </PixelText>
                <PixelText variant="small" className="text-gray-400">
                  Years Active
                </PixelText>
              </div>
              <div>
                <PixelText variant="h3" color="blue" className="mb-2">
                  3.95
                </PixelText>
                <PixelText variant="small" className="text-gray-400">
                  Final GPA
                </PixelText>
              </div>
              <div>
                <PixelText variant="h3" color="green" className="mb-2">
                  200+
                </PixelText>
                <PixelText variant="small" className="text-gray-400">
                  Students Mentored
                </PixelText>
              </div>
              <div>
                <PixelText variant="h3" color="yellow" className="mb-2">
                  15+
                </PixelText>
                <PixelText variant="small" className="text-gray-400">
                  Leadership Roles
                </PixelText>
              </div>
            </div>
          </PixelCard>
        </motion.div>

        {/* Major Experiences */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <PixelText variant="h3" color="blue" className="mb-8 text-center">
            Key Experiences
          </PixelText>
          <div className="space-y-8">
            {uhpExperiences.map((exp, index) => {
              const IconComponent = exp.icon
              return (
                <motion.div key={exp.id} variants={itemVariants}>
                  <PixelCard className="group">
                    <div className="flex items-start gap-6">
                      <motion.div
                        className={`p-4 bg-pixel-${exp.color}/20 pixel-border flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent size={32} className={`text-pixel-${exp.color}`} />
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span className={`text-xs px-2 py-1 bg-pixel-${exp.color}/20 text-pixel-${exp.color} pixel-border mb-2 inline-block`}>
                              {exp.category}
                            </span>
                            <PixelText variant="h3" color={exp.color as any} className="mb-2">
                              {exp.title}
                            </PixelText>
                            <PixelText variant="small" className="text-gray-400 mb-2">
                              {exp.year} {exp.grade && `• ${exp.grade}`} {exp.impact && `• ${exp.impact}`} {exp.scope && `• ${exp.scope}`}
                            </PixelText>
                          </div>
                        </div>

                        <PixelText variant="p" className="text-gray-300 leading-relaxed mb-6">
                          {exp.description}
                        </PixelText>

                        <div className="mb-6">
                          <PixelText variant="small" color="blue" className="mb-3 font-bold">
                            Key Outcomes:
                          </PixelText>
                          <ul className="space-y-2">
                            {exp.outcomes.map((outcome, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-pixel-green mt-1">▶</span>
                                <PixelText variant="small" className="text-gray-300">
                                  {outcome}
                                </PixelText>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <PixelText variant="small" color="purple" className="mb-3 font-bold">
                            Skills Developed:
                          </PixelText>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </PixelCard>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Skills Developed */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <PixelText variant="h3" color="purple" className="mb-8 text-center">
            Skills Developed Through UHP
          </PixelText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <PixelCard className="text-center">
                  <PixelText variant="p" color={skill.color as any} className="mb-4 font-bold">
                    {skill.name}
                  </PixelText>
                  <div className="w-full bg-dark-bg h-3 pixel-border mb-2">
                    <motion.div
                      className={`h-full bg-pixel-${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <PixelText variant="small" color={skill.color as any}>
                    {skill.level}%
                  </PixelText>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Major Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <PixelText variant="h3" color="yellow" className="mb-8 text-center">
            Major Achievements
          </PixelText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div key={achievement.title} variants={itemVariants}>
                  <PixelCard className="text-center h-full">
                    <motion.div
                      className={`inline-flex p-4 bg-pixel-${achievement.color}/20 pixel-border mb-4`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent size={32} className={`text-pixel-${achievement.color}`} />
                    </motion.div>
                    <PixelText variant="p" color={achievement.color as any} className="font-bold mb-3">
                      {achievement.title}
                    </PixelText>
                    <PixelText variant="small" className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </PixelText>
                  </PixelCard>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Reflection */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <PixelCard className="max-w-4xl mx-auto text-center">
            <PixelText variant="h3" color="green" className="mb-6">
              Program Impact
            </PixelText>
            <PixelText variant="p" className="text-gray-300 leading-relaxed text-left">
              The University Honors Program fundamentally shaped my approach to learning, leadership, and service. 
              Through rigorous academic challenges, meaningful research opportunities, and extensive community engagement, 
              I developed not just technical expertise but also the critical thinking, communication, and leadership 
              skills essential for making a positive impact in technology and society. The program's emphasis on 
              interdisciplinary collaboration and ethical reasoning continues to influence my work in software 
              engineering and research today.
            </PixelText>
          </PixelCard>
        </motion.div>
      </div>
    </section>
  )
}