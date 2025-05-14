'use client'

import { useState } from 'react'
import Hero from '../components/sections/Hero'
import Header from '@/components/Header'
import MobileMenu from '@/components/MobileMenu'
// Import other section components as needed
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Projects from '../components/sections/Projects'
import ContactSection from '@/components/sections/Contact'
import ScrollToTopButton from '@/components/ScrollToTopButton'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  return (
    <main>
      <div className=''>
        <Header />
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
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
