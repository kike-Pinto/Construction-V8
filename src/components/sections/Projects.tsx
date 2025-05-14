import React from 'react'
import { motion } from 'framer-motion'

export default function LatestProjects() {
  const projects = [
    {
      image: '/images/projects-img-1.png',
      category: 'House construction',
      title: 'Two Story House',
      date: 'January 15, 2024',
      description:
        'Construction of a two-story house with columns, foundations, floor, ceiling and others.',
    },
    {
      image: '/images/projects-img-2.png',
      category: 'Maintenance & Repair',
      title: 'Stairs & Columns',
      date: 'May 21, 2024',
      description:
        'Construction of a two-story house with columns, foundations, floor, ceiling and others.',
    },
    {
      image: '/images/projects-img-3.png',
      category: 'Construction Of Home Areas',
      title: 'Kitchen Room',
      date: 'July 03, 2024',
      description:
        'Construction of a two-story house with columns, foundations, floor, ceiling and others.',
    },
  ]

  return (
    <div className='bg-[#141423] text-white py-20 px-4' id='projects'>
      <div className='container mx-auto px-10 sm:px-16 lg:px-20 xl:px-20'>
        {/* PARTE DE ARRIBA */}
        <motion.div
          className='w-full text-left lg:text-center mb-10 lg:mb-20 font-sans'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className='text-orange-500 font-bold mb-2 block'>
            OUR PROJECTS
          </span>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-200'>
            Latest Completed Projects
          </h2>
        </motion.div>

        {/* PARTE DE ABAJO */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }} // Comienza 100px a la izquierda
              whileInView={{ opacity: 1, x: 0 }} // Termina en posición normal
              viewport={{ once: true }} // Solo se anima una vez
              transition={{
                duration: 0.8,
                delay: index * 0.15, // Efecto escalonado
              }}
              className='bg-slate-200 overflow-hidden border-2 border-[#141423] transition-all duration-300 hover:border-orange-500 hover:shadow-lg'
            >
              <div className='h-80 overflow-hidden '>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-4 font-sans mb-10'>
                <p className='text-gray-700'>{project.category}</p>
                <h3 className='text-2xl font-bold mt-2 text-black'>
                  {project.title}
                </h3>
                <p className='text-gray-700 mt-1 '>{project.date}</p>
                <p className='mt-4 text-black font-light'>
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
