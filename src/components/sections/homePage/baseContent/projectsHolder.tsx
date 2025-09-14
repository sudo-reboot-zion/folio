import ProjectCard from '@/components/content/ProjectCard'
import { projectData } from '@/lib/data'
import React from 'react'

function ProjectsHolder() {
  return (
    <div className='py-16 border-t border-b border-gray-200'>
      {/* Header Section */}
      <div className='flex items-center justify-center mb-16'>
        <div className='flex items-center space-x-4'>
          <div className='h-6 bg-primary-color w-6 rounded-full animate-pulse'/>
          <h1 className='font-bowlby text-4xl sm:text-5xl lg:text-6xl'>
            projects
          </h1>
          <div className='h-6 bg-primary-color w-6 rounded-full animate-pulse'/>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 place-items-center">
          {projectData.map((project: { href: string; image: string; title: string | undefined; description: string | undefined }, index: React.Key | null | undefined) => (
            <ProjectCard 
              key={index}
              href={project.href}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsHolder