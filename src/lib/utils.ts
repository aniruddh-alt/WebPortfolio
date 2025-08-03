import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomPixelColor(): string {
  const colors = [
    'text-pixel-green',
    'text-pixel-blue', 
    'text-pixel-purple',
    'text-pixel-pink',
    'text-pixel-yellow',
    'text-pixel-red'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const pixelColors = {
  green: '#00ff41',
  blue: '#0080ff',
  purple: '#8040ff',
  pink: '#ff40ff',
  yellow: '#ffff00',
  red: '#ff4040',
}