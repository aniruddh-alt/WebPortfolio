'use client'

import { useEffect, useState } from 'react'

export default function GameWorld() {
  const [scrollY, setScrollY] = useState(0)
  const [isJumping, setIsJumping] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Character jumps occasionally
  useEffect(() => {
    const jumpInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsJumping(true)
        setTimeout(() => setIsJumping(false), 600)
      }
    }, 3000)
    return () => clearInterval(jumpInterval)
  }, [])

  // Calculate background movement based on scroll
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
  const cloudOffset = -(scrollY * 0.1) % windowWidth
  const pipeOffset = -(scrollY * 0.3) % (windowWidth * 2)
  const blockOffset = -(scrollY * 0.2) % (windowWidth * 2)

  return (
    <div className="game-world">
      {/* Scrolling Clouds */}
      <div 
        className="game-clouds" 
        style={{ transform: `translateX(${cloudOffset}px)` }}
      />
      
      {/* Ground Pipes */}
      <div 
        className="ground-pipes"
        style={{ transform: `translateX(${pipeOffset}px)` }}
      >
        <div className="pipe" style={{ left: '20%' }} />
        <div className="pipe" style={{ left: '60%' }} />
        <div className="pipe" style={{ left: '120%' }} />
        <div className="pipe" style={{ left: '180%' }} />
      </div>

      {/* Ground Blocks */}
      <div 
        className="ground-blocks"
        style={{ transform: `translateX(${blockOffset}px)` }}
      >
        <div className="block" style={{ left: '15%' }} />
        <div className="block" style={{ left: '25%' }} />
        <div className="block" style={{ left: '35%' }} />
        <div className="block" style={{ left: '70%' }} />
        <div className="block" style={{ left: '80%' }} />
        <div className="block" style={{ left: '130%' }} />
        <div className="block" style={{ left: '140%' }} />
        <div className="block" style={{ left: '170%' }} />
      </div>

      {/* Running Mario Character */}
      <div className={`running-character ${isJumping ? 'character-jumping' : 'character-running'}`}>
        <div className="mario-sprite">
          {/* Simple pixel Mario face */}
          <div style={{
            position: 'absolute',
            top: '8px',
            left: '12px',
            width: '8px',
            height: '8px',
            backgroundColor: '#000',
            borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute',
            top: '8px',
            right: '12px',
            width: '8px',
            height: '8px',
            backgroundColor: '#000',
            borderRadius: '50%'
          }} />
        </div>
      </div>
    </div>
  )
}