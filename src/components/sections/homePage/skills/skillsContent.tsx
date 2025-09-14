import React from 'react'

function SkillsContent({name}:{name:string}) {
  return (
    <div className='flex items-center gap-2 mx-2 '>
        <div className='h-5 bg-primary-color w-5 rounded-full'/>
        <h1 className='font-bowlby text-2xl  lg:text-4xl text-nowrap'>{name}</h1>
        <div className='h-5 bg-primary-color w-5 rounded-full'/>
    </div>
  )
}

export default SkillsContent