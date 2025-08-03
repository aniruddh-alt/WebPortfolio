'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PixelTextProps {
  children: React.ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'small'
  className?: string
  typewriter?: boolean
  color?: 'green' | 'blue' | 'purple' | 'pink' | 'yellow' | 'red'
}

const variants = {
  h1: 'text-4xl md:text-6xl font-bold',
  h2: 'text-2xl md:text-4xl font-bold',
  h3: 'text-xl md:text-2xl font-semibold',
  p: 'text-sm md:text-base',
  small: 'text-xs md:text-sm',
}

const colors = {
  green: 'text-grass-green',
  blue: 'text-pixel-blue',
  purple: 'text-sky-medium',
  pink: 'text-pixel-red',
  yellow: 'text-pixel-yellow',
  red: 'text-pixel-red',
}

export default function PixelText({
  children,
  variant = 'p',
  className,
  typewriter = false,
  color = 'green',
}: PixelTextProps) {
  const Component = variant === 'p' ? 'p' : variant === 'small' ? 'span' : variant

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Component
        className={cn(
          'font-pixel leading-relaxed pixel-text',
          variants[variant],
          colors[color],
          className
        )}
      >
        {children}
      </Component>
    </motion.div>
  )
}