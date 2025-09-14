import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProjectCardProps {
  href: string
  image: string
  title?: string
  description?: string
}

function ProjectCard({ href, image, title, description }: ProjectCardProps) {
  return (
    <div className='w-full max-w-sm mx-auto shadow-md overflow-hidden hover:shadow-lg transition-shadow border duration-300 rounded-xl'>
      {/* Image Container */}
      <div className='relative w-full h-48 sm:h-56 md:h-64 overflow-hidden'>
        <Image 
          src={image} 
          alt={title || 'Project image'} 
          fill
          className='object-cover hover:scale-105 transition-transform duration-300'
          sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
        />
      </div>

      {/* Content Container */}
      <div className='p-4 sm:p-6'>
        {title && (
          <h3 className='text-lg sm:text-xl font-dmMono uppercase font-semibold text-primary-color mb-2 line-clamp-2'>
            {title}
          </h3>
        )}
        
        {description && (
          <p className=' text-sm sm:text-base mb-4 line-clamp-3 font-dmMono'>
            {description}
          </p>
        )}

        {/* Read More Button */}
        <div className='relative mt-6'>
          <div className='absolute top-1 w-full h-[100%] rounded-[20] bg-[#fff]'/>
          <Link 
            href={href}
            className='relative inline-flex  w-full text-center font-dmMono  justify-center items-center gap-5 bg-primary-color text-white font-medium text-base sm:text-lg px-6 py-2 rounded-full transition-all duration-200 group shadow-lg hover:shadow-xl'
          >
            Read More
            <ArrowUpRight className='w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard