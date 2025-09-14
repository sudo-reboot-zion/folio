'use client'


import React from 'react'
import { Button } from '@/components/ui/button'

function FewText() {
  // Function to scroll to projects section
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = element.offsetTop - headerOffset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='flex flex-col lg:flex-row border-t border-white border-b'>
        <div className='flex-1 p-10'>
            <h1 className='text-[20px] font-bowlby lg:text-3xl leading-tight'>
              Crafting digital solutions that bridge the gap between innovative design 
              and seamless functionality, one line of code at a time.
            </h1>
        </div>
        
        <div className='h-auto w-[0.5px] bg-white'/>
        
        <div className='flex-1 p-10'>
            <p className='font-dmMono text-sm lg:text-[18px] font-light leading-relaxed'>
              With over 3 years of experience in web development, I specialize in creating 
              responsive, user-centric applications using cutting-edge technologies. My approach 
              combines clean code architecture with intuitive design principles, ensuring every 
              project delivers exceptional performance and user experience. I&apos;m committed to 
              continuous learning and staying ahead of industry trends to provide clients with 
              future-proof solutions.
            </p>

            <div className='flex justify-start mt-8'>
           <div className='relative inline-block'>
              <div className='absolute top-1 w-full left-1 -z-10 h-full transform scale-10 rounded-[20px] bg-[#fff]'/>
              <Button 
                onClick={scrollToProjects}
                className='bg-primary-color border-2 text-white px-6 py-4 lg:px-8 lg:py-5 font-dmMono rounded-[20px] cursor-pointer hover:bg-primary-color/90 transition-colors'
              >
                View My Work
              </Button>
            </div>
            </div>
 
        </div>
    </div>
  )
}

export default FewText