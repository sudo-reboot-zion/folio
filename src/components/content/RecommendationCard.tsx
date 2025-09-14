import clsx from 'clsx';
import React from 'react';

function RecommendCard({ name, testimony,role}: { name: string; testimony: string, role:string}) {
  return (
    <div className="w-[350px] h-auto relative flex flex-col">
  
      <div className="bg-secondaryColor p-6  flex-grow relative">
        <p className="text-sm text-white relative pl-3 pr-1 lg:text-[18px] font-dmMono">
          {testimony}
        </p>
        
     
        <div className="w-0 h-0 absolute -bottom-1 text-nowrap text-primary-color">
            <h1 className='font-dmMono uppercase text-sm  lg:text-lg'>{role}</h1>
        </div>

      </div>
      

      <div className="h-[50px] text-white flex items-center justify-end px-4 mt-6">
        <p className="text-right font-light italic text-sm">
          — {name}
        </p>
      </div>
    </div>
  );
}

export default RecommendCard;