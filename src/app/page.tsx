'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Achievements from '@/components/sections/Achievements'
import Publications from '@/components/sections/Publications'
import Research from '@/components/sections/Research'
import UHP from '@/components/sections/UHP'
import YearReviews from '@/components/sections/YearReviews'
import FunStuff from '@/components/sections/FunStuff'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Achievements />
      <Publications />
      <Research />
      <UHP />
      <YearReviews />
      <FunStuff />
      <Footer />
    </main>
  )
}