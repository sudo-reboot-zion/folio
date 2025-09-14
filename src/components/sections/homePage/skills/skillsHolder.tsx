import React from 'react'
import SkillsContent from './skillsContent'
import { skills } from '@/lib/data'
import clsx from 'clsx'

function SkillsHolder({className}:{className?:string}) {
  return (
    <div className={clsx('border mx-5 py-5 border-t-0 border-b-0 lg:mx-10',className)}>
    <div className='flex overflow-hidden group '>
        <div className='animate-loop-scroll group-hover:paused'>
            <div className='flex'>
                {skills.map(({name},index)=>(
                <SkillsContent name={name} key={index}/>
                 ))}
            </div>
        </div>

        <div className='animate-loop-scroll group-hover:paused'>
            <div className='flex'>
                {skills.map(({name},index)=>(
                <SkillsContent name={name} key={index}/>
                 ))}
            </div>
        </div>
    </div>
    </div>
  )
}

export default SkillsHolder