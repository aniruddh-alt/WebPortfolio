import type { Metadata } from 'next'
import './globals.css'
import GameWorld from '@/components/GameWorld'

export const metadata: Metadata = {
  title: 'Pixel Portfolio | Software Engineer',
  description: 'Interactive pixelated portfolio of a software engineer showcasing projects, experiences, and achievements in a retro gaming style.',
  keywords: 'software engineer, portfolio, web developer, pixel art, retro gaming',
  authors: [{ name: 'Your Name' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased text-pixel-black min-h-screen">
        <GameWorld />
        <div className="min-h-screen relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}