'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import ConnectModal from './ConnectModal'

function CollaborateCard() {

    const [showChat, setShowChat] = useState(false)

    const handleShowChat=()=>{
        setShowChat((prevState)=>!prevState)
    }
  return (
    <div className='relative mx-4 lg:mx-8 my-16'>
      {/* Background white card - positioned behind */}
      <div className='bg-white absolute top-3 left-2 rounded-3xl w-full h-full -z-10'/>
      
      {/* Main content card - positioned in front */}
      <div className='bg-primary-color lg:h-[50vh] border rounded-3xl border-white py-10 flex flex-col items-center justify-center p-8 lg:p-20 relative z-10 space-y-6'>
        <div className='text-center'>
          <h1 className='font-bowlby text-white text-2xl sm:text-3xl lg:text-4xl leading-tight'>
            Ready to bring your vision to life?
          </h1>
        </div>

        <div className='text-center max-w-3xl'>
          <p className='text-sm  lg:text-lg font-dmMono text-white/90 leading-relaxed'>
            I&apos;m currently accepting new projects and would love to discuss how we can work together. 
            Whether you need a complete web application, mobile-responsive design, or technical consultation, 
            let&apos;s turn your ideas into impactful digital solutions.
          </p>
        </div>

        <div className='pt-4'>
          <div className='relative'>
            <div className='absolute top-2 w-full -right-2 -z-10 lg:w-full h-[100%] rounded-[20px] bg-base-color' />
            <Button onClick={handleShowChat} className='relative border-2 border-base-color text-base-color bg-white font-dmMono font-medium lg:px-8 lg:py-4 rounded-[20px] transition-all duration-200 shadow-lg hover:shadow-xl'>
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
      
       <ConnectModal isOpen={showChat} onClose={() => setShowChat(false)} />
    </div>
  )
}

export default CollaborateCard