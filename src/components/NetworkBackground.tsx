'use client'

import { useEffect, useRef, useCallback } from 'react'

const DOT_SPACING = 28
const DOT_BASE_RADIUS = 1
const DOT_BASE_OPACITY = 0.15
const GLOW_RADIUS = 200
const CONNECTION_RADIUS = 100
const CONNECTION_OPACITY = 0.12

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animRef = useRef<number>(0)
  const dotsRef = useRef<{ x: number; y: number }[]>([])
  const timeRef = useRef(0)

  const buildGrid = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dots: { x: number; y: number }[] = []
    const cols = Math.ceil(canvas.width / DOT_SPACING) + 1
    const rows = Math.ceil(canvas.height / DOT_SPACING) + 1
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dots.push({ x: c * DOT_SPACING, y: r * DOT_SPACING })
      }
    }
    dotsRef.current = dots
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function resize() {
      if (!canvas) return
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx!.scale(dpr, dpr)
      buildGrid()
    }

    function handleMouse(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    function draw() {
      if (!canvas || !ctx) return
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      timeRef.current += 0.003
      const t = timeRef.current

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      const dots = dotsRef.current
      const nearDots: { x: number; y: number; prox: number }[] = []

      // Draw dots
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i]
        const dx = d.x - mx
        const dy = d.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Proximity factor: 1 at center, 0 at GLOW_RADIUS
        const prox = Math.max(0, 1 - dist / GLOW_RADIUS)

        // Subtle ambient pulse
        const pulse = 0.5 + 0.5 * Math.sin(t + d.x * 0.01 + d.y * 0.01)
        const ambientExtra = pulse * 0.04

        const radius = DOT_BASE_RADIUS + prox * 1.8
        const opacity = DOT_BASE_OPACITY + ambientExtra + prox * 0.65

        // Color: shift from cyan to violet based on position
        const hue = 180 + (d.x / w) * 60 + prox * 40
        const sat = 70 + prox * 30
        const light = 55 + prox * 25

        ctx.beginPath()
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${hue}, ${sat}%, ${light}%, ${opacity})`
        ctx.fill()

        if (prox > 0.1) {
          nearDots.push({ x: d.x, y: d.y, prox })
        }
      }

      // Draw connections between nearby highlighted dots
      for (let i = 0; i < nearDots.length; i++) {
        for (let j = i + 1; j < nearDots.length; j++) {
          const a = nearDots[i]
          const b = nearDots[j]
          const ddx = a.x - b.x
          const ddy = a.y - b.y
          const dd = Math.sqrt(ddx * ddx + ddy * ddy)
          if (dd < CONNECTION_RADIUS) {
            const strength = (1 - dd / CONNECTION_RADIUS) * Math.min(a.prox, b.prox)
            const hue = 200 + (a.x / w) * 50
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `hsla(${hue}, 80%, 65%, ${strength * CONNECTION_OPACITY})`
            ctx.lineWidth = 0.5 + strength * 0.5
            ctx.stroke()
          }
        }
      }

      animRef.current = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouse)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [buildGrid])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
