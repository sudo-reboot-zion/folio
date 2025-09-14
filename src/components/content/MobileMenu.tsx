// import { navLinks } from '@/lib/data'
// import { motion } from 'framer-motion'
// import React from 'react'

// function MobileMenu() {
//   return (
//      <motion.div 
//                     className='fixed h-[100vh]  bg-[#fff] w-[50%] z-50 top-0 border lg:hidden border-t-0 border-l-0 border-zinc-800'
//                     initial={{ x: -300 }}
//                     animate={{ x: 0 }}
//                     exit={{ x: -300 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 40 }}
//                 >
//                     <div className="flex items-center justify-center py-5">
//                             <img 
//                                 src="/SalonConnect-02-1.png" 
//                                 alt="SalonConnect Logo" 
//                                 className="w-20 h-20 object-contain" 
//                             />
//                         </div>


//                     <div className='flex flex-col items-center text-[18px] capitalize mt-10'>
//                         {navLinks.map((item, index) => (
//                             <motion.button
//                                 onClick={() => scrollToSection(item.href)}
//                                 className={clsx(`py-3 px-6 border-zinc-800 first:border-zinc-800 w-full`, {
//                                     'bg-softBlend uppercase': pathname === item.href
//                                 })}
//                                 key={index}
//                                 whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
//                                 whileTap={{ scale: 0.95 }}
//                             >
//                                 {item.name}
//                             </motion.button>
//                         ))}

//                     </div>
//                 </motion.div>
//   )
// }

// export default MobileMenu