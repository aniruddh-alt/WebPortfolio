import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Publications from '@/components/sections/Publications'
import Projects from '@/components/sections/Projects'
import Service from '@/components/sections/Service'
import Awards from '@/components/sections/Awards'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="max-w-[42rem] mx-auto px-5">
      <Header home />
      <Hero />
      <Experience />
      <Publications />
      <Projects />
      <Service />
      <Awards />
      <Footer />
    </main>
  )
}
