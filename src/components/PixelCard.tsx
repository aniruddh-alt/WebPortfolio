'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PixelCardProps {
  children: React.ReactNode
  className?: string
  interactive?: boolean
  onClick?: () => void
}


export default function PixelCard({
  children,
  className,
  interactive = true,
  onClick,
}: PixelCardProps) {
  return (
    <motion.div
      className={cn(
        'pixel-border bg-dark-surface/50 backdrop-blur-sm p-6 transition-all duration-300 border-gray-400',
        interactive && 'cursor-pointer',
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={interactive ? { 
        scale: 1.02,
        y: -2,
      } : {}}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}