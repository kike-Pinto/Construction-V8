'use client' // Necesario para componentes con interactividad en App Router

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname()

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest('.nav__menu')) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Helper function to determine if a link is active
  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  return (
    <div
      className={`fixed top-0 right-0 w-full h-full bg-black/50 z-[110] transition-opacity duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div
        className={`nav__menu fixed top-0 right-0 w-64 h-full bg-[#141423] p-8 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className='flex flex-col gap-16 mt-16'>
          <li>
            <Link
              href='/'
              className={`font-semibold ${
                isActive('/')
                  ? 'text-orange-500'
                  : 'text-gray-400 hover:text-orange-500'
              }`}
              onClick={onClose}
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
              onClick={onClose}
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
              onClick={onClose}
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
              onClick={onClose}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='inline-flex bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-8 py-4'
              onClick={onClose}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Close button */}
        <div
          className='absolute top-4 right-6 cursor-pointer text-white'
          onClick={onClose}
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
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
