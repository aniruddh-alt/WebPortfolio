'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PixelButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

const variants = {
  primary: 'text-pixel-white bg-grass-green border-pixel-black hover:bg-sky-medium',
  secondary: 'text-pixel-white bg-sky-medium border-pixel-black hover:bg-grass-green',
  danger: 'text-pixel-white bg-pixel-red border-pixel-black hover:bg-dirt-brown',
  success: 'text-pixel-white bg-grass-green border-pixel-black hover:bg-pixel-blue',
}

const sizes = {
  sm: 'px-3 py-1 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

export default function PixelButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
}: PixelButtonProps) {
  return (
    <motion.button
      className={cn(
        'btn-pixel font-pixel relative overflow-hidden transition-all duration-200',
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-current opacity-0"
        whileHover={!disabled ? { opacity: 0.1 } : {}}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  )
}