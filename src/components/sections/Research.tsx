'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Shield, Cloud, Cpu, Network } from 'lucide-react'
import PixelText from '../PixelText'
import PixelCard from '../PixelCard'

const researchAreas = [
  {
    id: 1,
    icon: Brain,
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Exploring novel approaches to automated code generation, intelligent debugging systems, and AI-assisted software development workflows.',
    topics: [
      'Neural Code Generation',
      'Automated Testing with ML',
      'Intelligent Code Review',
      'AI-Driven Performance Optimization'
    ],
    publications: 3,
    projects: 5,
    color: 'purple',
    status: 'Active'
  },
  {
    id: 2,
    icon: Database,
    title: 'Distributed Systems & Big Data',
    description: 'Research on scalable data processing architectures, distributed consensus algorithms, and high-performance computing solutions.',
    topics: [
      'Consensus Algorithms',
      'Stream Processing',
      'Data Consistency Models',
      'Fault-Tolerant Systems'
    ],
    publications: 2,
    projects: 4,
    color: 'blue',
    status: 'Active'
  },
  {
    id: 3,
    icon: Shield,
    title: 'Cybersecurity & Privacy',
    description: 'Investigating blockchain-based security solutions, privacy-preserving computation, and secure software development practices.',
    topics: [
      'Blockchain Security',
      'Zero-Knowledge Proofs',
      'Secure Code Analysis',
      'Privacy-Preserving ML'
    ],
    publications: 2,
    projects: 3,
    color: 'red',
    status: 'Active'
  },
  {
    id: 4,
    icon: Cloud,
    title: 'Cloud-Native Architecture',
    description: 'Developing innovative approaches to serverless computing, microservices orchestration, and edge computing optimization.',
    topics: [
      'Serverless Optimization',
      'Container Orchestration',
      'Edge Computing',
      'Auto-scaling Algorithms'
    ],
    publications: 1,
    projects: 6,
    color: 'green',
    status: 'Active'
  },
  {
    id: 5,
    icon: Cpu,
    title: 'Performance Engineering',
    description: 'Research on compiler optimizations, performance profiling techniques, and resource-efficient computing methodologies.',
    topics: [
      'Compiler Optimizations',
      'Performance Profiling',
      'Resource Management',
      'Energy-Efficient Computing'
    ],
    publications: 1,
    projects: 3,
    color: 'yellow',
    status: 'Planned'
  },
  {
    id: 6,
    icon: Network,
    title: 'Quantum Computing Applications',
    description: 'Exploring quantum algorithms for software engineering problems and quantum-classical hybrid computing architectures.',
    topics: [
      'Quantum Algorithms',
      'Hybrid Computing',
      'Quantum Error Correction',
      'Quantum Software Engineering'
    ],
    publications: 0,
    projects: 1,
    color: 'pink',
    status: 'Exploratory'
  }
]

const currentProjects = [
  {
    id: 1,
    title: 'AI-Powered Code Review Assistant',
    description: 'Developing an intelligent system that provides contextual code review suggestions using large language models.',
    status: 'In Progress',
    collaborators: ['Dr. Jane Smith', 'Research Team A'],
    funding: 'NSF Grant',
    color: 'purple'
  },
  {
    id: 2,
    title: 'Distributed Consensus for Edge Networks',
    description: 'Novel consensus algorithms optimized for resource-constrained edge computing environments.',
    status: 'Planning',
    collaborators: ['Dr. Bob Wilson', 'Edge Computing Lab'],
    funding: 'Industry Partnership',
    color: 'blue'
  },
  {
    id: 3,
    title: 'Privacy-Preserving Data Analytics Platform',
    description: 'Building a platform that enables secure data analysis without exposing sensitive information.',
    status: 'Prototype',
    collaborators: ['Privacy Research Group'],
    funding: 'Internal Research Fund',
    color: 'red'
  }
]

export default function Research() {
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
    <section id="research" className="py-20 bg-dark-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <PixelText variant="h2" className="mb-4">
            Research Interests
          </PixelText>
          <PixelText variant="p" className="text-gray-400 max-w-2xl mx-auto">
            Exploring the frontiers of computer science through innovative research and collaboration
          </PixelText>
        </motion.div>

        {/* Research Areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <PixelText variant="h3" color="blue" className="mb-8 text-center">
            Research Areas
          </PixelText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <motion.div key={area.id} variants={itemVariants}>
                  <PixelCard 
                    className="h-full group"
                    interactive={true}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        className={`p-3 bg-pixel-${area.color}/20 pixel-border flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent size={24} className={`text-pixel-${area.color}`} />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <PixelText variant="p" color={area.color as any} className="font-bold leading-tight">
                            {area.title}
                          </PixelText>
                          <span className={`text-xs px-2 py-1 bg-pixel-${area.color}/20 text-pixel-${area.color} pixel-border`}>
                            {area.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <PixelText variant="small" className="text-gray-300 leading-relaxed mb-6">
                      {area.description}
                    </PixelText>

                    <div className="mb-6">
                      <PixelText variant="small" color="blue" className="mb-3 font-bold">
                        Key Topics:
                      </PixelText>
                      <div className="grid grid-cols-1 gap-1">
                        {area.topics.map((topic, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-pixel-green" />
                            <PixelText variant="small" className="text-gray-400">
                              {topic}
                            </PixelText>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        <div className="text-center">
                          <PixelText variant="small" color={area.color as any} className="font-bold">
                            {area.publications}
                          </PixelText>
                          <PixelText variant="small" className="text-gray-500">
                            Papers
                          </PixelText>
                        </div>
                        <div className="text-center">
                          <PixelText variant="small" color={area.color as any} className="font-bold">
                            {area.projects}
                          </PixelText>
                          <PixelText variant="small" className="text-gray-500">
                            Projects
                          </PixelText>
                        </div>
                      </div>
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
          </div>
        </motion.div>

        {/* Current Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <PixelText variant="h3" color="purple" className="mb-8 text-center">
            Current Research Projects
          </PixelText>
          <div className="space-y-6">
            {currentProjects.map((project, index) => (
              <motion.div key={project.id} variants={itemVariants}>
                <PixelCard className="group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <PixelText variant="p" color={project.color as any} className="font-bold mb-2">
                        {project.title}
                      </PixelText>
                      <PixelText variant="small" className="text-gray-300 leading-relaxed mb-4">
                        {project.description}
                      </PixelText>
                    </div>
                    <span className={`text-xs px-2 py-1 bg-pixel-${project.color}/20 text-pixel-${project.color} pixel-border ml-4`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-6 text-gray-400">
                    <div>
                      <PixelText variant="small" className="text-gray-500 mb-1">
                        Collaborators:
                      </PixelText>
                      <PixelText variant="small">
                        {project.collaborators.join(', ')}
                      </PixelText>
                    </div>
                    <div>
                      <PixelText variant="small" className="text-gray-500 mb-1">
                        Funding:
                      </PixelText>
                      <PixelText variant="small">
                        {project.funding}
                      </PixelText>
                    </div>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <PixelCard className="max-w-4xl mx-auto">
            <PixelText variant="h3" color="green" className="mb-6">
              Research Philosophy
            </PixelText>
            <PixelText variant="p" className="text-gray-300 leading-relaxed text-left">
              My research is driven by the belief that technology should solve real-world problems while 
              advancing theoretical understanding. I focus on bridging the gap between academic research 
              and practical applications, with emphasis on open-source contributions and collaborative 
              innovation. Each project aims to not only publish novel findings but also create tools 
              and frameworks that benefit the broader software engineering community.
            </PixelText>
          </PixelCard>
        </motion.div>
      </div>
    </section>
  )
}