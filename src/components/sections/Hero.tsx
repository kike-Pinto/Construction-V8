import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='bg-[#141423] relative overflow-hidden' id='home'>
      {/* Background lines - ahora con mejor manejo de altura */}
      <div className='absolute inset-0 w-full h-full pointer-events-none'>
        <Image
          src='/images/home-lines-bg.svg'
          alt='background lines'
          fill
          className='object-cover object-right'
          priority
        />
      </div>

      {/* PANTALLAS GRANDES (>1024px) */}
      <div className='container mx-auto px-4 sm:px-10 md:px-20 lg:px-20 lg:py-10'>
        {/* PANTALLAS GRANDES (>1024px) - Layout original de dos columnas */}
        <div className='hidden lg:flex lg:flex-row items-stretch gap-10'>
          {/* Left Content - Text Section (Aparece de ABAJO hacia ARRIBA) */}
          <motion.div
            className='w-1/2 flex flex-col justify-between z-10 pt-[15vh] pb-[5vh] min-h-[70vh]'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className='text-left'>
              <motion.h1
                className='text-slate-300 text-4xl md:text-5xl xl:text-6xl font-bold mb-6 font-sans leading-tight'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className='block mb-2'>Create The</span>
                <span className='block mb-2'>Constructions</span>
                <span className='block'>You Want Here</span>
              </motion.h1>

              <motion.p
                className='text-gray-400 mb-8 md:mb-10 max-w-sm font-sans'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                We provide the best home design, construction and maintenance
                services for you and your family.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className='flex flex-wrap justify-start gap-8 md:gap-12 font-sans'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href='/services'
                  className='inline-flex bg-gradient-to-r from-orange-500 to-orange-400 hover:shadow-orange-500/30 text-white font-semibold px-6 py-3 md:px-8 md:py-4 hover:shadow-lg transition-all duration-300'
                >
                  Our Services
                </Link>

                <Link
                  href='/projects'
                  className='inline-flex items-center text-orange-500 font-semibold group transition-all duration-300'
                >
                  <span>View Projects</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Statistics */}
            <motion.div
              className='flex justify-start gap-12 md:gap-20 font-sans mt-7'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className='text-center'>
                <h3 className='text-yellow-400 text-3xl sm:text-4xl md:text-5xl font-bold mb-2'>
                  10+
                </h3>
                <p className='text-white text-sm md:text-base'>
                  Years of <br />
                  Experience
                </p>
              </div>

              <div className='text-center'>
                <h3 className='text-yellow-400 text-3xl sm:text-4xl md:text-5xl font-bold mb-2'>
                  200
                </h3>
                <p className='text-white text-sm md:text-base'>
                  Complete <br />
                  Projects
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Section (Aparece de ARRIBA hacia ABAJO) */}
          <motion.div
            className='w-1/2 relative z-0 flex items-center'
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            <div className='relative w-full h-full min-h-[70vh]'>
              {/* Main image */}
              <motion.div
                className='absolute inset-0 w-full h-full'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className='relative w-full h-full'>
                  <Image
                    src='/images/home-img-1.png'
                    alt='Construction worker'
                    fill
                    className='object-contain object-right'
                    priority
                  />
                </div>
              </motion.div>

              {/* Secondary image */}
              <motion.div
                className='absolute bottom-8 -left-10 w-1/2 h-auto aspect-[10/11] border-8 border-[#141423] z-10'
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className='relative w-full h-full'>
                  <Image
                    src='/images/home-img-2.png'
                    alt='Construction workers'
                    fill
                    className='object-cover'
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* PANTALLAS MEDIANAS (640px-1024px) */}
      <div className='hidden sm:block lg:hidden'>
        {/* Contenido con padding */}
        <div className='container mx-auto px-8 py-7'>
          <div className='flex flex-wrap pt-20 px-8'>
            {/* Fila superior con contenido dividido en dos columnas */}
            <div className='flex flex-row w-full -mb-5'>
              {/* Columna izquierda - Título y texto */}
              <motion.div
                className='w-1/2 pr-4'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <motion.h1
                  className='text-white text-3xl md:text-4xl font-bold mb-6 font-sans leading-tight'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className='block mb-2'>Create The</span>
                  <span className='block mb-2'>Constructions</span>
                  <span className='block mb-7'>You Want Here</span>
                </motion.h1>

                <motion.p
                  className='text-gray-400 mb-6 font-sans text-xs md:text-sm'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  We provide the best home design, construction and maintenance
                  services for you and your family.
                </motion.p>
              </motion.div>

              {/* Columna derecha - Botones y estadísticas */}
              <motion.div
                className='w-1/2 pl-16 md:pl-8 justify-between'
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                {/* Estadísticas */}
                <motion.div
                  className='flex justify-center gap-8 font-sans mb-4'
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className='text-center'>
                    <h3 className='text-yellow-400 text-4xl sm:text-5xl font-bold mb-2'>
                      10+
                    </h3>
                    <p className='text-white text-sm md:text-base'>
                      Years of <br />
                      Experience
                    </p>
                  </div>

                  <div className='text-center'>
                    <h3 className='text-yellow-400 text-4xl sm:text-5xl font-bold mb-2'>
                      200
                    </h3>
                    <p className='text-white text-sm md:text-base'>
                      Complete <br />
                      Projects
                    </p>
                  </div>
                </motion.div>
                {/* Botones con View Projects posicionado a la derecha */}
                <motion.div
                  className='flex flex-col w-full mb-12'
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Botón principal a ancho completo */}
                  <Link
                    href='/services'
                    className='inline-flex bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-6 py-3 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 w-full text-center items-center justify-center mb-6'
                  >
                    Our Services
                  </Link>

                  {/* Contenedor para alinear "View Projects" a la derecha */}
                  <motion.div
                    className='flex w-full justify-end'
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      href='/projects'
                      className='inline-flex items-center text-orange-500 font-semibold group transition-all duration-300'
                    >
                      <span>View Projects</span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M14 5l7 7m0 0l-7 7m7-7H3'
                        />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Imagen para pantallas medianas - A ANCHO COMPLETO (fuera del contenedor) */}
        <motion.div
          className='w-full h-64 sm:h-80 relative mt-8'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src='/images/home-img-1.png'
            alt='Construction worker'
            fill
            className='object-cover object-center'
          />
        </motion.div>
      </div>

      {/* PANTALLAS PEQUEÑAS (<640px) */}
      <motion.div
        className='sm:hidden'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        {/* Contenido con padding */}
        <div className='container mx-auto px-4'>
          {/* Título y texto centrados */}
          <motion.div
            className='text-center mb-8 pt-24'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.h1
              className='text-white text-3xl font-bold mb-6 font-sans leading-tight'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className='block mb-2'>Create The</span>
              <span className='block mb-2'>Constructions</span>
              <span className='block'>You Want Here</span>
            </motion.h1>

            <motion.p
              className='text-gray-400 max-w-sm mx-auto font-sans'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              We provide the best home design, construction and maintenance
              services for you and your family.
            </motion.p>
          </motion.div>

          {/* Botones centrados */}
          <motion.div
            className='flex flex-col items-center gap-6 mb-10 w-full'
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <Link
              href='/services'
              className='inline-flex bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-6 py-3 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300'
            >
              Our Services
            </Link>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href='/projects'
                className='inline-flex items-center text-orange-500 font-semibold group transition-all duration-300'
              >
                <span>View Projects</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Estadísticas centradas */}
          <motion.div
            className='flex justify-center gap-12 font-sans mb-10'
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          >
            <div className='text-center'>
              <h3 className='text-yellow-400 text-5xl font-bold mb-2'>10+</h3>
              <p className='text-white text-sm'>
                Years of <br />
                Experience
              </p>
            </div>

            <div className='text-center'>
              <h3 className='text-yellow-400 text-5xl font-bold mb-2'>200</h3>
              <p className='text-white text-sm'>
                Complete <br />
                Projects
              </p>
            </div>
          </motion.div>
        </div>

        {/* Imagen única para pantallas pequeñas - A ANCHO COMPLETO (fuera del contenedor) */}
        <motion.div
          className='w-full h-56 relative mt-4'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
            src='/images/home-img-1.png'
            alt='Construction worker'
            fill
            className='object-cover object-center'
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
