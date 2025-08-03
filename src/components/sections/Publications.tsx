'use client'

import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Calendar, Users, Quote } from 'lucide-react'
import PixelText from '../PixelText'
import PixelCard from '../PixelCard'
import PixelButton from '../PixelButton'

const publications = [
  {
    id: 1,
    title: 'Optimizing Microservices Architecture for Scalable Web Applications',
    journal: 'IEEE Transactions on Software Engineering',
    authors: ['Your Name', 'Dr. Jane Smith', 'Dr. John Doe'],
    year: '2023',
    type: 'Journal Article',
    abstract: 'This paper presents a novel approach to microservices architecture optimization, focusing on containerization strategies and service mesh implementations that improve scalability by up to 40% while reducing latency.',
    keywords: ['Microservices', 'Scalability', 'Performance', 'Container Orchestration'],
    url: 'https://doi.org/10.1109/TSE.2023.1234567',
    citations: 45,
    color: 'green',
    status: 'Published'
  },
  {
    id: 2,
    title: 'Machine Learning Approaches for Automated Code Review and Bug Detection',
    journal: 'ACM Computing Surveys',
    authors: ['Your Name', 'Dr. Alice Johnson'],
    year: '2023',
    type: 'Survey Article',
    abstract: 'A comprehensive survey of machine learning techniques applied to automated code review processes, analyzing effectiveness of various ML models in detecting code smells, security vulnerabilities, and performance issues.',
    keywords: ['Machine Learning', 'Code Review', 'Static Analysis', 'Software Quality'],
    url: 'https://doi.org/10.1145/3567890.1234567',
    citations: 32,
    color: 'blue',
    status: 'Published'
  },
  {
    id: 3,
    title: 'Real-time Data Processing with Edge Computing: A Comparative Study',
    journal: 'Journal of Cloud Computing',
    authors: ['Your Name', 'Dr. Bob Wilson', 'Dr. Carol Brown'],
    year: '2022',
    type: 'Research Article',
    abstract: 'This study compares various edge computing frameworks for real-time data processing, evaluating performance metrics across different deployment scenarios and workload characteristics.',
    keywords: ['Edge Computing', 'Real-time Processing', 'IoT', 'Distributed Systems'],
    url: 'https://doi.org/10.1186/s13677-022-1234567',
    citations: 67,
    color: 'purple',
    status: 'Published'
  },
  {
    id: 4,
    title: 'Blockchain-based Identity Management for Decentralized Applications',
    journal: 'Future Internet',
    authors: ['Your Name', 'Dr. David Lee'],
    year: '2024',
    type: 'Research Article',
    abstract: 'Proposing a novel blockchain-based identity management system that enhances security and privacy in decentralized applications while maintaining usability and performance.',
    keywords: ['Blockchain', 'Identity Management', 'Security', 'Decentralization'],
    url: 'https://doi.org/10.3390/fi16020034',
    citations: 12,
    color: 'yellow',
    status: 'Under Review'
  }
]

const conferences = [
  {
    id: 1,
    title: 'Serverless Architecture Patterns for Modern Web Development',
    conference: 'International Conference on Software Engineering (ICSE)',
    location: 'Melbourne, Australia',
    year: '2023',
    type: 'Conference Paper',
    color: 'pink'
  },
  {
    id: 2,
    title: 'AI-Driven Performance Optimization in Cloud Native Applications',
    conference: 'ACM SIGSOFT Symposium on Foundations of Software Engineering',
    location: 'San Francisco, USA',
    year: '2022',
    type: 'Workshop Paper',
    color: 'red'
  }
]

export default function Publications() {
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
    <section id="publications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <PixelText variant="h2" className="mb-4">
            Publications
          </PixelText>
          <PixelText variant="p" className="text-gray-400 max-w-2xl mx-auto">
            Research contributions and academic publications in computer science and software engineering
          </PixelText>
        </motion.div>

        {/* Publications Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <PixelCard className="text-center">
            <PixelText variant="h3" color="green" className="mb-2">
              {publications.length}
            </PixelText>
            <PixelText variant="small" className="text-gray-400">
              Publications
            </PixelText>
          </PixelCard>
          <PixelCard className="text-center">
            <PixelText variant="h3" color="blue" className="mb-2">
              {publications.reduce((sum, pub) => sum + pub.citations, 0)}
            </PixelText>
            <PixelText variant="small" className="text-gray-400">
              Citations
            </PixelText>
          </PixelCard>
          <PixelCard className="text-center">
            <PixelText variant="h3" color="purple" className="mb-2">
              {conferences.length}
            </PixelText>
            <PixelText variant="small" className="text-gray-400">
              Conferences
            </PixelText>
          </PixelCard>
          <PixelCard className="text-center">
            <PixelText variant="h3" color="yellow" className="mb-2">
              {new Date().getFullYear() - 2021}+
            </PixelText>
            <PixelText variant="small" className="text-gray-400">
              Years Active
            </PixelText>
          </PixelCard>
        </motion.div>

        {/* Journal Publications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <PixelText variant="h3" color="blue" className="mb-8">
            Journal Articles
          </PixelText>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div key={pub.id} variants={itemVariants}>
                <PixelCard className="group">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`p-3 bg-pixel-${pub.color}/20 pixel-border flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <BookOpen size={24} className={`text-pixel-${pub.color}`} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <PixelText variant="p" color={pub.color as any} className="font-bold mb-1 leading-tight">
                            {pub.title}
                          </PixelText>
                          <PixelText variant="small" color="blue" className="mb-2">
                            {pub.journal}
                          </PixelText>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className={`text-xs px-2 py-1 bg-pixel-${pub.color}/20 text-pixel-${pub.color} pixel-border`}>
                            {pub.status}
                          </span>
                          <span className="text-xs text-gray-400">
                            {pub.year}
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center gap-4 text-gray-400 mb-3">
                          <div className="flex items-center gap-2">
                            <Users size={14} />
                            <PixelText variant="small">
                              {pub.authors.join(', ')}
                            </PixelText>
                          </div>
                          <div className="flex items-center gap-2">
                            <Quote size={14} />
                            <PixelText variant="small">
                              {pub.citations} citations
                            </PixelText>
                          </div>
                        </div>
                        
                        <PixelText variant="small" className="text-gray-300 leading-relaxed mb-3">
                          {pub.abstract}
                        </PixelText>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {pub.keywords.map((keyword) => (
                            <span
                              key={keyword}
                              className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>

                        <PixelButton
                          variant="secondary"
                          size="sm"
                          onClick={() => window.open(pub.url, '_blank')}
                        >
                          <ExternalLink size={14} className="mr-2" />
                          Read Paper
                        </PixelButton>
                      </div>
                    </div>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conference Presentations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <PixelText variant="h3" color="purple" className="mb-8">
            Conference Presentations
          </PixelText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conferences.map((conf, index) => (
              <motion.div key={conf.id} variants={itemVariants}>
                <PixelCard className="h-full">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`p-3 bg-pixel-${conf.color}/20 pixel-border flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Calendar size={20} className={`text-pixel-${conf.color}`} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <PixelText variant="p" color={conf.color as any} className="font-bold mb-2 leading-tight">
                        {conf.title}
                      </PixelText>
                      <PixelText variant="small" color="blue" className="mb-1">
                        {conf.conference}
                      </PixelText>
                      <PixelText variant="small" className="text-gray-400 mb-2">
                        {conf.location} • {conf.year}
                      </PixelText>
                      <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                        {conf.type}
                      </span>
                    </div>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}