'use client'

import ConnectModal from '@/components/content/ConnectModal'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'

function MainBaseContent() {
  const [showChat, setShowChat] = useState(false)

  const handleShowChat =()=>{
      setShowChat((prev)=>(!prev))
  }


  return (
    <div className='mx-5 lg:mx-10 border p-3 lg:p-10 border-t-0 border-b-0 relative'>
        <div>
          <h1 className='font-dmMono text-[20px] lg:text-4xl'>Hi, I&apos;m Kenneth Danso</h1>
        </div>

        <div className='py-10 z-50'>
            <h1 className='text-3xl md:text-4xl lg:text-[8rem] font-bowlby lg:leading-[8rem] z-50'>
              I build magical stuff using code
            </h1>
        </div>

        <div>
          <h1 className='font-dmMono text-center lg:text-lg leading-relaxed'>
            I&apos;m a passionate full-stack developer who transforms ideas into digital experiences. 
            With expertise in modern web technologies like React, Next.js, and Django, I create 
            scalable applications that solve real-world problems. From responsive user interfaces 
            to robust backend systems, I bring creativity and technical precision to every project. 
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
            open-source projects, or mentoring aspiring developers.
          </h1>
        </div>

        {/* Fixed Button Section */}
        <div className='flex justify-start mt-8'>
          <div className='relative inline-block'>
            {/* Background element that scales with button */}
            <div className='absolute top-1 left-1 w-full h-full rounded-[20px] bg-white -z-10 transform scale-10'/>
            <Button onClick={handleShowChat} className='relative bg-primary-color border-2 text-white px-6 py-4 lg:px-8 lg:py-5 font-dmMono rounded-[20px] z-10'>
              Let&apos;s Connect
            </Button>
          </div>
        </div>

        {/* Fixed Image Section */}
        <div className='relative w-full h-[50vh] lg:h-[80vh] mt-10'>
          {/* Background shadow positioned correctly */}
          <div className='absolute top-2 left-2 w-full h-full rounded-[20px] bg-slate-500 -z-10'/>
          <div className='relative w-full h-full'>
            <Image
              src="/images/codess.jpg"
              alt="Kenneth's coding workspace"
              className='w-full h-full object-cover rounded-[10px]'
              fill
            />
          </div>
        </div>
        <ConnectModal isOpen={showChat} onClose={() => setShowChat(false)} />
    </div>
  )
}

export default MainBaseContent