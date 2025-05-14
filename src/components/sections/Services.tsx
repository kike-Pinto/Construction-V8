import { useState, useRef, useEffect } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Home,
  Wrench,
  Package2,
  Droplets,
} from 'lucide-react'
import { motion } from 'framer-motion'

const ServicesComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  // Calculate which slides to show based on viewport size
  const [visibleSlides, setVisibleSlides] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1)
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2)
      } else {
        setVisibleSlides(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Services data
  const services = [
    {
      icon: <Building2 size={40} />,
      title: 'Housing\nConstruction',
      description:
        'We build with the best professionals and high-quality work for a sale and effective home.',
    },
    {
      icon: <Home size={40} />,
      title: 'Construction Of\nhome Areas',
      description:
        'We build with the best professionals and high-quality work for a sale and effective home.',
    },
    {
      icon: <Wrench size={40} />,
      title: 'Maintenance &\nRepair',
      description:
        'We build with the best professionals and high-quality work for a sale and effective home.',
    },
    {
      icon: <Package2 size={40} />,
      title: 'Installation Of\nceramics & Others',
      description:
        'We build with the best professionals and high-quality work for a sale and effective home.',
    },
    {
      icon: <Droplets size={40} />,
      title: 'Water & Drainage\nInstallation',
      description:
        'We build with the best professionals and high-quality work for a sale and effective home.',
    },
  ]

  // Calculate which slides to display
  const displayedSlides = []
  for (let i = 0; i < visibleSlides; i++) {
    const slideIndex = (currentSlide + i) % totalSlides
    displayedSlides.push(services[slideIndex])
  }

  return (
    <section className='relative py-16' id='services'>
      {/* Background with two colors */}
      <div className='absolute inset-0 w-full h-full bg-white'>
        <div className='absolute bottom-0 left-0 right-0 h-1/3 bg-[#141423]'></div>
      </div>

      <div className='relative container mx-auto px-10 sm:px-16 lg:px-20 xl:px-20'>
        {/* Header section with responsive layout */}
        <motion.div
          className='w-full flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 font-sans'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left section - Titles */}
          <div className='w-full text-left'>
            <span className='text-orange-500 font-bold mb-2 block'>
              OUR SERVICES
            </span>
            <h2 className='text-3xl lg:text-2xl font-bold text-gray-900'>
              High Quality Construction Services
            </h2>
          </div>

          {/* Center section - Paragraph (only on large screens) */}
          <div className='w-full hidden lg:block lg:items-end'>
            <p className='text-gray-700 text-sm'>
              We provide multiple services for you, offering confidence and
              security in construction.
            </p>
          </div>

          {/* Right section - Button on large screens / Paragraph+Button on medium screens */}
          <div className='w-full lg:w-1/3 text-left flex flex-col items-start'>
            {/* Paragraph visible only on medium screens */}
            <div className='block lg:hidden mb-6 w-full'>
              <p className='text-gray-700'>
                We provide multiple services for you, offering confidence and
                security in construction.
              </p>
            </div>

            <a
              href='#contact'
              className='bg-gradient-to-r from-orange-500 to-orange-400 hover:shadow-orange-500/30 hover:shadow-lg transition-all duration-300 text-white px-14 py-3 inline-block font-medium '
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Services Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {displayedSlides.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.5 }}
              className='bg-white py-12 px-8 shadow-xl flex flex-col items-center sm:items-start mx-auto sm:mx-0 max-w-lg sm:max-w-none border-2 border-transparent transition-all duration-300 hover:border-orange-500 hover:shadow-lg'
            >
              <div className='bg-gray-900 rounded-full p-4 mb-8'>
                <span className='text-white'>{service.icon}</span>
              </div>

              <h3 className='text-xl md:text-2xl font-bold font-sans mb-8 whitespace-pre-line text-center sm:text-left'>
                {service.title}
              </h3>

              <p className='text-gray-700 text-center sm:text-left font-sans text-sm md:text-base'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className='flex justify-center mt-12 gap-4'>
          <button
            onClick={prevSlide}
            className='flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-gray-300 hover:bg-gray-100'
            aria-label='Previous slide'
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className='flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-gray-300 hover:bg-gray-100'
            aria-label='Next slide'
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesComponent
