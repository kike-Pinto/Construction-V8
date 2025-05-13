'use client' // Esto es importante en el App Router para componentes con interactividad

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Helper function to determine if a link is active
  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  return (
    <>
      <header
        className={`fixed w-full top-0 left-0  z-50 transition-colors duration-400 py-5 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        {/* <div className=''> */}
        <nav className='container mx-auto px-10 sm:px-16 lg:px-20 xl:px-20 relative mt-2 flex justify-between items-center'>
          <Link href='/' className='flex items-center gap-2'>
            <i className='text-orange-500 text-2xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                />
              </svg>
            </i>
            <span
              className={`font-semibold font-sans text-lg ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Constructor
            </span>
          </Link>

          {/* Desktop menu */}
          <div className='hidden lg:flex'>
            <ul className='flex gap-8 items-center text-normal space-x-2 font-sans'>
              <li>
                <Link
                  href='/'
                  className={`font-semibold ${
                    isActive('/')
                      ? 'text-orange-500'
                      : 'text-gray-400 hover:text-orange-500'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className={`font-semibold ${
                    isActive('/about')
                      ? 'text-orange-500'
                      : 'text-gray-400 hover:text-orange-500'
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className={`font-semibold ${
                    isActive('/services')
                      ? 'text-orange-500'
                      : 'text-gray-400 hover:text-orange-500'
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/projects'
                  className={`font-semibold ${
                    isActive('/projects')
                      ? 'text-orange-500'
                      : 'text-gray-400 hover:text-orange-500'
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='inline-flex bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-8 py-4 hover:shadow-lg hover:shadow-orange-500/30 transition-shadow'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile toggle button */}
          <div className='lg:hidden cursor-pointer' onClick={toggleMenu}>
            <i
              className={`text-2xl ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </i>
          </div>
        </nav>
        {/* </div> */}
      </header>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  )
}

export default Header
