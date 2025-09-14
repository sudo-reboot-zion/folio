import React from 'react'
import SkillsHolder from './skills/skillsHolder'
import MainBaseContent from './baseContent/mainBaseContent'
import FewText from './baseContent/fewText'
import ProjectsHolder from './baseContent/projectsHolder'
import Recommendation from './baseContent/Recommendation'
import Footer from '@/components/layouts/Footer'
import LetCollaborate from './baseContent/LetCollaborate'

function HomePage() {
  return (
    <div>

      <section id="description">
       <MainBaseContent/>
      </section>

       <section id="insight">
       <FewText/>
       </section>

      <section id='skills'>
       <SkillsHolder/>
      </section>

      <section id="projects">
       <ProjectsHolder/>
      </section>

      <section id="recommendation">
       <Recommendation/>
      </section>

        <SkillsHolder className='border-l-0 b border-r-0'/>

        <section id="work">
        <LetCollaborate/>
        </section>
        
        <Footer/>
    </div>
  )
}

export default HomePage