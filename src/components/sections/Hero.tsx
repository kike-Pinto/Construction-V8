import Link from 'next/link'
import Image from 'next/image'

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

      {/* <div className='container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 lg:py-10'> */}
      <div className='container mx-auto px-4 sm:px-10 md:px-20 lg:px-20 lg:py-10'>
        {/* PANTALLAS GRANDES (>1024px) - Layout original de dos columnas */}
        <div className='hidden lg:flex lg:flex-row items-stretch gap-10'>
          {/* Left Content - Text Section */}
          <div className='w-1/2 flex flex-col justify-between z-10 pt-[15vh] pb-[5vh] min-h-[70vh]'>
            <div className='text-left'>
              <h1 className='text-slate-300 text-4xl md:text-5xl xl:text-6xl font-bold mb-6 font-sans leading-tight'>
                <span className='block mb-2'>Create The</span>
                <span className='block mb-2'>Constructions</span>
                <span className='block'>You Want Here</span>
              </h1>

              <p className='text-gray-400 mb-8 md:mb-10 max-w-sm font-sans'>
                We provide the best home design, construction and maintenance
                services for you and your family.
              </p>

              <div className='flex flex-wrap justify-start gap-8 md:gap-12 font-sans'>
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
              </div>
            </div>

            <div className='flex justify-start gap-12 md:gap-20 font-sans mt-7'>
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
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className='w-1/2 relative z-0 flex items-center'>
            <div className='relative w-full h-full min-h-[70vh]'>
              {/* Main image */}
              <div className='absolute inset-0 w-full h-full'>
                <div className='relative w-full h-full'>
                  <Image
                    src='/images/home-img-1.png'
                    alt='Construction worker'
                    fill
                    className='object-contain object-right'
                    priority
                  />
                </div>
              </div>

              {/* Secondary image */}
              <div className='absolute bottom-8 -left-10 w-1/2 h-auto aspect-[10/11] border-8 border-[#141423] z-10'>
                <div className='relative w-full h-full'>
                  <Image
                    src='/images/home-img-2.png'
                    alt='Construction workers'
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
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
              <div className='w-1/2 pr-4'>
                <h1 className='text-white text-3xl md:text-4xl font-bold mb-6 font-sans leading-tight'>
                  <span className='block mb-2'>Create The</span>
                  <span className='block mb-2'>Constructions</span>
                  <span className='block mb-7'>You Want Here</span>
                </h1>

                <p className='text-gray-400 mb-6 font-sans text-xs md:text-sm'>
                  We provide the best home design, construction and maintenance
                  services for you and your family.
                </p>
              </div>

              {/* Columna derecha - Botones y estadísticas */}
              <div className='w-1/2 pl-16 md:pl-8 justify-between'>
                {/* Estadísticas */}
                <div className='flex justify-center gap-8 font-sans mb-4'>
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
                </div>
                {/* Botones con View Projects posicionado a la derecha */}
                <div className='flex flex-col w-full mb-12'>
                  {/* Botón principal a ancho completo */}
                  <Link
                    href='/services'
                    className='inline-flex bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-6 py-3 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 w-full text-center items-center justify-center mb-6'
                  >
                    Our Services
                  </Link>

                  {/* Contenedor para alinear "View Projects" a la derecha */}
                  <div className='flex w-full justify-end'>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen para pantallas medianas - A ANCHO COMPLETO (fuera del contenedor) */}
        <div className='w-full h-64 sm:h-80 relative mt-8'>
          <Image
            src='/images/home-img-1.png'
            alt='Construction worker'
            fill
            className='object-cover object-center'
          />
        </div>
      </div>

      {/* PANTALLAS PEQUEÑAS (<640px) */}
      <div className='sm:hidden'>
        {/* Contenido con padding */}
        <div className='container mx-auto px-4'>
          {/* Título y texto centrados */}
          <div className='text-center mb-8 pt-24'>
            <h1 className='text-white text-3xl font-bold mb-6 font-sans leading-tight'>
              <span className='block mb-2'>Create The</span>
              <span className='block mb-2'>Constructions</span>
              <span className='block'>You Want Here</span>
            </h1>

            <p className='text-gray-400 max-w-sm mx-auto font-sans'>
              We provide the best home design, construction and maintenance
              services for you and your family.
            </p>
          </div>

          {/* Botones centrados */}
          <div className='flex flex-col items-center gap-6 mb-10 w-full'>
            <Link
              href='/services'
              className='inline-flex bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-6 py-3 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300'
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
          </div>

          {/* Estadísticas centradas */}
          <div className='flex justify-center gap-12 font-sans mb-10'>
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
          </div>
        </div>

        {/* Imagen única para pantallas pequeñas - A ANCHO COMPLETO (fuera del contenedor) */}
        <div className='w-full h-56 relative mt-4'>
          <Image
            src='/images/home-img-1.png'
            alt='Construction worker'
            fill
            className='object-cover object-center'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
