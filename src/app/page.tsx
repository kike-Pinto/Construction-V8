'use client'

import Hero from '../components/sections/Hero'
import Header from '@/components/Header'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Projects from '../components/sections/Projects'
import ContactSection from '@/components/sections/Contact'
import ScrollToTopButton from '@/components/ScrollToTopButton'

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <Hero />
        <About />
        <Services />
        <Projects />
        <ContactSection />
        <ScrollToTopButton />
      </div>
    </main>
  )
}
