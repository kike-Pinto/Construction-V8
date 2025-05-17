'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutUs() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Función para actualizar el estado según el ancho de la pantalla
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    // Establecer el estado inicial
    handleResize()

    // Agregar listener para el cambio de tamaño de ventana
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Datos de los items
  const aboutItems = [
    { id: 1, text: 'Professional workers' },
    { id: 2, text: 'Guaranteed quality' },
    { id: 3, text: 'Extensive experience' },
    { id: 4, text: 'We quote your project' },
  ]

  return (
    <section
      className='w-full bg-white mt-20'
      id='about'
      itemScope
      itemType='https://schema.org/LocalBusiness'
      itemProp='foundingDate'
      content='2022'
    >
      {/* Layout para pantallas grandes (>=1024px) */}
      <motion.div
        className={`hidden lg:flex max-w-7xl container mx-auto px-10 sm:px-16 lg:px-20 xl:px-20 py-16 relative`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        {/* Columna izquierda para imágenes */}
        <motion.div
          className='w-1/2 relative'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Imagen de fondo */}
          <motion.div
            className='absolute left-0 -bottom-10 w-full h-4/5 lg:h-full lg:w-2/3'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className='relative w-full h-full'>
              <Image
                src='/images/about/safety-gear-construction.png'
                alt='Professional construction safety gear'
                fill
                sizes='(max-width: 1024px) 100vw, 50vw'
                className='object-cover'
                priority
                quality={85}
              />
            </div>
          </motion.div>

          {/* Imagen superpuesta */}
          <motion.div
            className='absolute right-12 -top-20 w-1/2 h-full z-10'
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className='relative w-full h-full'>
              <Image
                src='/images/about/professional-construction-team-worker.png'
                alt='Professional construction worker in safety gear'
                fill
                sizes='(max-width: 1024px) 100vw, 50vw'
                className='object-cover'
                priority
                quality={85}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Columna derecha para texto */}
        <motion.div
          className='w-1/2 pl-8 flex flex-col justify-center font-sans'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className='text-orange-500 font-bold mb-2'>ABOUT US</div>
            <h2 className='text-4xl font-bold mb-6 text-gray-800'>
              We Provide The Best Service To Build
            </h2>
            <p className='text-gray-600 mb-8'>
              {/* We strive to provide the best professionals to make your projects
              a construction masterpiece something unique and unmatched. */}
              Construction-V8 offers {new Date().getFullYear() - 2010}+ years of
              construction expertise, combining innovative techniques with
              strict safety standards for residential and commercial projects in
              [Tu Ciudad/Región].
            </p>
          </motion.div>

          {/* Ítems con checkmarks - Versión optimizada con animaciones + SEO */}
          <motion.div
            className='grid grid-cols-2 gap-y-4 mb-10'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            itemScope // 👈 Schema markup aquí
            itemType='https://schema.org/Service'
          >
            {aboutItems.map((item) => (
              <motion.div
                key={item.id}
                className='flex items-center'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                itemProp='hasOfferCatalog' // 👈 Schema en cada ítem
                itemType='https://schema.org/OfferCatalog'
              >
                <div className='text-orange-500 mr-2'>
                  <svg
                    className='w-8 h-8'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <span
                  className='text-gray-700 lg:text-sm xl:text-base'
                  itemProp='name'
                >
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Botón CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              className='bg-gradient-to-r from-orange-500 to-orange-400 hover:shadow-orange-500/30 hover:shadow-lg transition-all duration-300  text-white px-8 py-4 font-medium'
              aria-label='View our construction projects portfolio'
            >
              View Projects
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Layout para pantallas pequeñas (<1024px) */}
      <motion.div
        className={`lg:hidden px-10 sm:px-16 `}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <div className='mx-auto font-sans'>
          {/* Encabezado y texto */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className='text-orange-500 font-bold mb-2'>ABOUT US</div>
            <motion.h2
              className='text-3xl font-bold mb-4 text-gray-800'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              We Provide The Best Service To Build
            </motion.h2>
            <motion.p
              className='text-gray-600 mb-6'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Construction-V8 offers {new Date().getFullYear() - 2010}+ years of
              construction expertise, combining innovative techniques with
              strict safety standards for residential and commercial projects in
              [Tu Ciudad/Región].
            </motion.p>
          </motion.div>

          {/* Ítems con checkmarks en 2 columnas */}
          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 mb-8'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            itemScope
            itemType='https://schema.org/Service'
          >
            {aboutItems.map((item, index) => (
              <motion.div
                key={item.id}
                className='flex items-center'
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                itemProp='hasOfferCatalog'
                itemType='https://schema.org/OfferCatalog'
              >
                <div className='text-orange-500 mr-2'>
                  <svg
                    className='w-8 h-8'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <span className='text-gray-700 text-lg' itemProp='name'>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Botón CTA */}
          <motion.div
            className='mb-10'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <button className='bg-gradient-to-r from-orange-500 to-orange-400 hover:shadow-orange-500/30 hover:shadow-lg transition-all duration-300 text-white w-full py-3 text-lg font-medium '>
              View Projects
            </button>
          </motion.div>

          {/* Imágenes montadas */}
          <motion.div
            className='relative h-[30rem] mt-8 mb-10'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Imagen de fondo */}
            <motion.div
              className='absolute left-0 bottom-0 w-1/2 h-full pt-20'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <div className='relative w-full h-full'>
                <Image
                  src='/images/about/safety-gear-construction.png'
                  alt='Professional construction safety gear'
                  fill
                  className='object-cover'
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  quality={85}
                />
              </div>
            </motion.div>

            {/* Imagen superpuesta */}
            <motion.div
              className='absolute right-0 top-0 w-2/3 h-5/6'
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <div className='relative w-full h-full'>
                <Image
                  src='/images/about/professional-construction-team-worker.png'
                  alt='Professional construction worker in safety gear'
                  fill
                  className='object-cover'
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  quality={85}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
