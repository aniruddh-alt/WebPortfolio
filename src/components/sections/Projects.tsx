'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Play, Filter } from 'lucide-react'
import PixelText from '../PixelText'
import PixelCard from '../PixelCard'
import PixelButton from '../PixelButton'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    longDescription: 'Built a comprehensive e-commerce platform from scratch featuring user authentication, product catalog, shopping cart, order management, and payment integration with Stripe. Includes admin panel for inventory management and sales analytics.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    category: 'Full Stack',
    image: '/api/placeholder/400/250',
    liveUrl: 'https://demo-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce',
    featured: true,
    color: 'green'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    longDescription: 'A Kanban-style task management application with drag-and-drop functionality, real-time collaboration using WebSockets, file attachments, and deadline notifications.',
    technologies: ['Vue.js', 'Express.js', 'Socket.io', 'MongoDB'],
    category: 'Web App',
    image: '/api/placeholder/400/250',
    liveUrl: 'https://taskmaster-app.com',
    githubUrl: 'https://github.com/username/taskmaster',
    featured: true,
    color: 'blue'
  },
  {
    id: 3,
    title: 'Weather Analytics Dashboard',
    description: 'Data visualization dashboard showing weather patterns and climate analytics with interactive charts.',
    longDescription: 'Interactive dashboard displaying weather data with various chart types, historical data comparison, and predictive analytics using machine learning models.',
    technologies: ['Python', 'Django', 'D3.js', 'TensorFlow', 'Redis'],
    category: 'Data Science',
    image: '/api/placeholder/400/250',
    liveUrl: 'https://weather-analytics.com',
    githubUrl: 'https://github.com/username/weather-dashboard',
    featured: false,
    color: 'purple'
  },
  {
    id: 4,
    title: 'Mobile Fitness App',
    description: 'React Native fitness tracking app with workout plans, progress tracking, and social features.',
    longDescription: 'Cross-platform mobile app for fitness enthusiasts featuring personalized workout plans, progress tracking, social sharing, and integration with wearable devices.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'GraphQL'],
    category: 'Mobile',
    image: '/api/placeholder/400/250',
    liveUrl: 'https://apps.apple.com/fitness-tracker',
    githubUrl: 'https://github.com/username/fitness-app',
    featured: false,
    color: 'pink'
  },
  {
    id: 5,
    title: 'DevOps Automation Tool',
    description: 'Infrastructure automation and deployment pipeline management tool for development teams.',
    longDescription: 'Comprehensive DevOps tool for automating deployment pipelines, managing infrastructure as code, monitoring applications, and handling rollbacks.',
    technologies: ['Go', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    category: 'DevOps',
    image: '/api/placeholder/400/250',
    liveUrl: 'https://devops-tool.com',
    githubUrl: 'https://github.com/username/devops-automation',
    featured: false,
    color: 'yellow'
  },
  {
    id: 6,
    title: 'AI Chatbot Platform',
    description: 'Intelligent chatbot platform with natural language processing and machine learning capabilities.',
    longDescription: 'AI-powered chatbot platform featuring NLP, machine learning models for intent recognition, multi-language support, and easy integration APIs.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'NLP', 'Docker'],
    category: 'AI/ML',
    image: '/api/placeholder/400/250',
    liveUrl: 'https://ai-chatbot-platform.com',
    githubUrl: 'https://github.com/username/ai-chatbot',
    featured: true,
    color: 'red'
  }
]

const categories = ['All', 'Full Stack', 'Web App', 'Mobile', 'Data Science', 'DevOps', 'AI/ML']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  )

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <PixelText variant="h2" className="mb-4">
            Projects
          </PixelText>
          <PixelText variant="p" className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical projects and creative solutions
          </PixelText>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <PixelText variant="h3" color="blue" className="mb-8 text-center">
            Featured Projects
          </PixelText>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <PixelCard className="h-full group cursor-pointer">
                  <div className="aspect-video bg-dark-bg mb-4 pixel-border flex items-center justify-center relative overflow-hidden">
                    <Play size={48} className="text-pixel-green group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <PixelText variant="h3" color={project.color as any} className="mb-2">
                        {project.title}
                      </PixelText>
                      <PixelText variant="p" className="text-gray-300 leading-relaxed">
                        {project.description}
                      </PixelText>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 text-xs bg-pixel-${project.color}/20 text-pixel-${project.color} pixel-border`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4">
                      <PixelButton
                        variant="primary"
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </PixelButton>
                      <PixelButton
                        variant="secondary"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </PixelButton>
                    </div>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-8">
            <Filter size={20} className="text-pixel-blue mr-3" />
            <PixelText variant="h3" color="blue">
              All Projects
            </PixelText>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <PixelButton
                key={category}
                variant={selectedCategory === category ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </PixelButton>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <PixelCard 
                  className="h-full group cursor-pointer"
                  interactive={true}
                >
                  <div className="aspect-video bg-dark-bg mb-4 pixel-border flex items-center justify-center relative overflow-hidden">
                    <Play size={32} className="text-pixel-green group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <PixelText variant="p" color={project.color as any} className="font-bold mb-1">
                        {project.title}
                      </PixelText>
                      <PixelText variant="small" className="text-gray-400 mb-2">
                        {project.category}
                      </PixelText>
                      <PixelText variant="small" className="text-gray-300 leading-relaxed">
                        {project.description}
                      </PixelText>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-1 py-0.5 text-xs bg-gray-700 text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-1 py-0.5 text-xs text-gray-500">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <PixelButton
                        variant="primary"
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="flex-1 text-xs"
                      >
                        <ExternalLink size={14} />
                      </PixelButton>
                      <PixelButton
                        variant="secondary"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="flex-1 text-xs"
                      >
                        <Github size={14} />
                      </PixelButton>
                    </div>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}