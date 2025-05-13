// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { CheckCircle } from 'lucide-react'

// const About = () => {
//   const aboutItems = [
//     {
//       id: 1,
//       text: 'Professional workers',
//     },
//     { id: 2, text: 'Guaranteed quality' },
//     { id: 3, text: 'Extensive experience' },
//     { id: 4, text: 'We quote your project' },
//   ]

//   return (
//     <section id='about' className='relative'>
//       <div className='container mx-auto  px-10 sm:px-16 md:px-16 lg:px-20 py-16 sm:py-20 lg:py-24 lg:mt-16'>
//         <div className='flex flex-col lg:flex-row w-full gap-8 lg:gap-12 xl:gap-16'>
//           {/* Images Section - Comportamiento original en >1024px */}
//           <div
//             className='relative w-full lg:max-w-[700px] mx-auto aspect-[4/3] mt-20 sm:mt-32 lg:mt-10 lg:w-1/2 order-2 lg:order-1'
//             style={{
//               marginLeft: 'clamp(0px, calc((100vw - 768px) * 0.2), 0px)',
//             }}
//           >
//             <div className='absolute inset-0  w-[60%] h-[60%] lg:h-[89%] top-0 sm:-top-10 md:top-0 lg:top-10'>
//               <Image
//                 src='/images/about-img-2.png'
//                 alt='Fondo'
//                 fill
//                 className='object-cover'
//               />
//             </div>
//             <div className='absolute -top-20 sm:-top-32 right-0 w-[45%] h-[70%] lg:w-[50%] lg:h-[100%] border-4 border-white'>
//               <Image
//                 src='/images/about-img-1.png'
//                 alt='Detalle'
//                 fill
//                 className='object-cover'
//               />
//             </div>
//           </div>

//           {/* Content Section - Ajuste fluido solo en 768-1024px */}
//           <div className='flex flex-col lg:w-1/2 order-1 lg:order-2'>
//             <div
//               className='flex flex-col md:flex-row lg:flex-col gap-8 lg:gap-12 font-sans lg:-mt-14'
//               style={{
//                 marginRight: 'clamp(0px, calc((100vw - 768px) * 0.15), 0px)',
//                 paddingLeft: 'clamp(0px, calc((100vw - 768px) * 0.1), 0px)',
//               }}
//             >
//               {/* Parte izquierda - Texto superior */}
//               <div className='md:w-[65%] lg:w-full'>
//                 <span className='text-amber-500 font-medium mb-4'>
//                   ABOUT US
//                 </span>
//                 <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-6'>
//                   We Provide The Best <br className='hidden md:block' />
//                   Service To Build
//                 </h2>
//                 <p className='text-gray-600 max-w-2xl text-sm sm:text-base'>
//                   We strive to provide the best professionals to make your
//                   projects a construction masterpiece something unique and
//                   unmatched.
//                 </p>
//               </div>

//               {/* Parte derecha - AboutItems y botón */}
//               <div className='md:w-[35%] lg:w-full md:justify-items-end lg:justify-items-start'>
//                 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 lg:gap-4 mb-8'>
//                   {aboutItems.map((item) => (
//                     <div key={item.id} className='flex items-center gap-2'>
//                       <CheckCircle
//                         className='text-orange-500 flex-shrink-0'
//                         size={20}
//                       />
//                       <span className='text-gray-800 text-xs sm:text-sm'>
//                         {item.text}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//                 <Link
//                   href='/projects'
//                   className='w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-10 transition-colors inline-block'
//                 >
//                   View Projects
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

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
    <div className='w-full bg-white mt-20'>
      {/* Layout para pantallas grandes (>=1024px) */}
      <div
        className={`hidden lg:flex max-w-7xl container mx-auto px-10 sm:px-16 lg:px-20 xl:px-20 py-16 relative`}
      >
        {/* Columna izquierda para imágenes */}
        <div className='w-1/2 relative'>
          {/* Imagen de fondo */}
          <div className='absolute left-0 -bottom-10 w-full h-4/5 lg:h-full lg:w-2/3'>
            <div className='relative w-full h-full'>
              <Image
                src='/images/about-img-2.png'
                alt='Construction worker with hearing protection'
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>

          {/* Imagen superpuesta */}
          <div className='absolute right-12 -top-20 w-1/2 h-full z-10'>
            <div className='relative w-full h-full'>
              <Image
                src='/images/about-img-1.png'
                alt='Construction worker in safety gear'
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </div>

        {/* Columna derecha para texto */}
        <div className='w-1/2 pl-8 flex flex-col justify-center font-sans'>
          <div className='text-orange-500 font-bold mb-2'>ABOUT US</div>
          <h2 className='text-4xl font-bold mb-6 text-gray-800'>
            We Provide The Best Service To Build
          </h2>
          <p className='text-gray-600 mb-8'>
            We strive to provide the best professionals to make your projects a
            construction masterpiece something unique and unmatched.
          </p>

          {/* Ítems con checkmarks */}
          <div className='grid grid-cols-2 gap-y-4 mb-10'>
            {aboutItems.map((item) => (
              <div key={item.id} className='flex items-center'>
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
                <span className='text-gray-700 lg:text-sm xl:text-base'>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Botón CTA */}
          <div>
            <button className='bg-orange-500 text-white px-8 py-3 font-medium hover:bg-orange-600 transition duration-300'>
              View Projects
            </button>
          </div>
        </div>
      </div>

      {/* Layout para pantallas pequeñas (<1024px) */}
      <div className={`lg:hidden px-10 sm:px-16 `}>
        <div className='mx-auto font-sans'>
          {/* Encabezado y texto */}
          <div className='text-orange-500 font-bold mb-2'>ABOUT US</div>
          <h2 className='text-3xl font-bold mb-4 text-gray-800'>
            We Provide The Best Service To Build
          </h2>
          <p className='text-gray-600 mb-6'>
            We strive to provide the best professionals to make your projects a
            construction masterpiece something unique and unmatched.
          </p>

          {/* Ítems con checkmarks en 2 columnas */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 mb-8'>
            {aboutItems.map((item) => (
              <div key={item.id} className='flex items-center'>
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
                <span className='text-gray-700 text-lg'>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Botón CTA */}
          <div className='mb-10'>
            <button className='bg-orange-500 text-white w-full py-3 text-lg font-medium hover:bg-orange-600 transition duration-300'>
              View Projects
            </button>
          </div>

          {/* Imágenes montadas */}
          <div className='relative h-[30rem] mt-8 mb-10'>
            {/* Imagen izquierda */}
            {/* <div className='absolute left-0 -bottom-10 w-full h-4/5 lg:h-full lg:w-2/3'> */}
            <div className='absolute left-0 bottom-0 w-1/2 h-full pt-20'>
              <div className='relative w-full h-full'>
                <Image
                  src='/images/about-img-2.png'
                  alt='Construction equipment'
                  fill
                  className='object-cover'
                />
              </div>
            </div>

            {/* Imagen derecha */}
            <div className='absolute right-0 top-0 w-2/3 h-5/6'>
              <div className='relative w-full h-full'>
                <Image
                  src='/images/about-img-1.png'
                  alt='Construction worker with safety gear'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
