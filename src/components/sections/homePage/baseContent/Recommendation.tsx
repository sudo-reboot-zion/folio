import React from 'react'
import { recommendationsData } from '@/lib/data'

import RecommendCard from '@/components/content/RecommendationCard'

function Recommendation() {
  return (
    <div className='mx-5 border-l border-r lg:mx-10'>
    <div className='py-16 relative overflow-hidden'>
      {/* Header Section */}
      <div className='flex items-center justify-center mb-16'>
        <div className='flex items-center space-x-4'>
          <div className='h-6 bg-primary-color w-6 rounded-full animate-pulse'/>
          <h1 className='font-bowlby text-2xl sm:text-5xl lg:text-6xl'>
            recommendations
          </h1>
          <div className='h-6 bg-primary-color w-6 rounded-full animate-pulse'/>
        </div>
      </div>

      {/* Grid Container with Lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Vertical Grid Lines */}
        <div className="hidden absolute inset-0 pointer-events-none md:block lg:block">
          {/* First vertical line - 1/3 */}
          <div className="absolute left-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-60"></div>
          {/* Second vertical line - 2/3 */}
          <div className="absolute left-2/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-60"></div>
        </div>

        {/* Horizontal Grid Lines */}
        <div className="hidden absolute inset-0 pointer-events-none md:block lg:block ">
          {/* First horizontal line - 1/2 */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-60"></div>
        </div>

        {/* Intersection Points */}
        <div className="   absolute inset-0 pointer-events-none">
          {/* Top intersections */}
          <div className="absolute left-1/3 top-1/2 w-3 h-3 bg-primary-color rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute left-2/3 top-1/2 w-3 h-3 bg-primary-color rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 relative z-10 ">
          {recommendationsData.map((recommendation, index) => (
            <div key={index} className="flex justify-center ">
              <div className="transform hover:scale-105 transition-transform duration-300 hover:z-20 relative">
                <RecommendCard 
                  name={recommendation.name}
                  testimony={recommendation.testimony}
                  role={recommendation.role}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Corner decorations */}
          <div className="absolute top-8 left-8 w-2 h-2 bg-primary-color rounded-full opacity-40"></div>
          <div className="absolute top-8 right-8 w-2 h-2 bg-primary-color rounded-full opacity-40"></div>
          <div className="absolute bottom-8 left-8 w-2 h-2 bg-primary-color rounded-full opacity-40"></div>
          <div className="absolute bottom-8 right-8 w-2 h-2 bg-primary-color rounded-full opacity-40"></div>
          
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 opacity-30"></div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-color to-transparent opacity-40"></div>
    </div>
            
    </div>
  )
}

export default Recommendation