import { useState } from 'react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-[#141423] text-gray-300 py-20 px-4'>
      <div className='container mx-auto px-10 sm:px-16 lg:px-20 xl:px-20 font-sans'>
        {/* Grid container that changes based on screen size */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Construct Section */}
          <div className='flex flex-col'>
            <div className='flex items-center mb-8'>
              <div className='text-orange-500 mr-2'>
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
              </div>
              <h2 className='text-lg font-bold text-white'>Construct</h2>
            </div>
            <p className='mb-2 text-sm text-gray-400'>We build security</p>
            <p className='mb-4 text-sm text-gray-400'>and trust in homes.</p>
            <p className='text-sm text-gray-400'>
              Email: construccion@gmail.com
            </p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className='text-lg font-bold text-white mb-8'>Company</h3>
            <ul className='space-y-3 text-sm text-gray-400'>
              <li>
                <a
                  href='#'
                  className='hover:text-orange-500 transition-colors '
                >
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-500 transition-colors'>
                  Services
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-500 transition-colors'>
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div className='text-sm text-gray-400'>
            <h3 className='text-lg font-bold mb-8 text-white mt-1'>
              Information
            </h3>
            <p>Iquique - Chile</p>
            <p>Cerro Dragon #113</p>
            <p className='mt-6'>9AM - 11AM</p>
          </div>

          {/* Social Networks Section */}
          <div>
            <h3 className='text-lg font-bold mb-4 text-white'>
              Redes Sociales
            </h3>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-orange-500 hover:text-orange-400 transform transition-all hover:-translate-y-1'
              >
                <FacebookIcon size={24} />
              </a>
              <a
                href='#'
                className='text-orange-500 hover:text-orange-400 transform transition-all hover:-translate-y-1'
              >
                <InstagramIcon size={24} />
              </a>
              <a
                href='#'
                className='text-orange-500 hover:text-orange-400 transform transition-all hover:-translate-y-1'
              >
                <TwitterIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className='border-t border-gray-700 mt-8 pt-6 text-left sm:text-center'>
          <p className='text-sm'>
            © 2025 Construction. Todos los derechos reservados.{' '}
            <span className='text-white font-bold text-lg'>
              WebSoftwareDesarrollo
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
