'use client'

import Navigation from '@/components/Navigation'
import NetworkBackground from '@/components/NetworkBackground'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Publications from '@/components/sections/Publications'
import Awards from '@/components/sections/Awards'
import Projects from '@/components/sections/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <NetworkBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Publications />
        <Awards />
        <Projects />
        <Footer />
      </div>
    </main>
  )
}
