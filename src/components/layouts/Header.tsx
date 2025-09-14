'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/data'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import PortfolioModal from '../content/portfolioModal'
import ConnectModal from '../content/ConnectModal'

type ConnectItem = {
  name?: string;
  isConnect?: boolean;
};


function Header() {
  const [currentPath, setCurrentPath] = useState('/')
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [showConnect, setShowConnect] = useState(false)

  function handleNavClick(href: string) {
    if (href !== '#') {
      setCurrentPath(href)
    }
    setShowMobileMenu(false) // Close mobile menu after clicking
  }

  function handleToggleShow() {
    setShowMobileMenu(prev => !prev)
  }

  function handlePortfolioClick() {
    setShowPortfolio(true)
    setShowMobileMenu(false)
  }

  function handleConnectClick() {
    setShowConnect(true)
    setShowMobileMenu(false)
  }

  function closePortfolio() {
    setShowPortfolio(false)
  }

  function closeConnect() {
    setShowConnect(false)
  }


  function isConnectItem(item: ConnectItem): boolean {
    return item.name === 'lets talk' || 
           item.name === "lets'talk" || 
           item.name === 'connect' || 
           item.name === 'contact' ||
           item.isConnect === true
  }

  return (
    <div>
      {/* Desktop Header */}
      <div className='hidden lg:block bg-wineTexture border border-white border-b-0 border-l-0 border-r-0'>
        <div className='flex items-center justify-between mt-1 border border-white-color border-l-0 text-white-color'>
          {/* Logo Section */}
          <div className='border p-3 border-t-0 border-b-0'>
            <Link href="#" className='flex items-center justify-center w-full'>
              <h1 className='font-bowlby text-primary-color text-4xl capitalize'>
                dev<span className='font-playWright text-white-color'>kenny</span>
              </h1>
            </Link>
          </div>

          {/* Navigation Section */}
          <div>
            <div className="flex items-center text-[18px] font-dmMono uppercase">
              {navLinks.map((item, index) => {
                const isActive = currentPath === item.href
                const isLast = index === navLinks.length - 1
                const baseClasses = `py-5 px-10 border-l border-white-color hover:bg-primary-color first:border-white-color ${isLast ? 'border-r' : ''}`
                const activeClasses = isActive ? 'bg-softBlend uppercase' : ''
                const fullClasses = `${baseClasses} ${activeClasses} uppercase`

                // Portfolio Modal button
                if (item.isModal) {
                  return (
                    <button
                      key={index}
                      onClick={handlePortfolioClick}
                      className={fullClasses}
                    >
                      {item.name}
                    </button>
                  )
                }

                // Connect Modal button (lets talk)
                if (isConnectItem(item)) {
                  return (
                    <button
                      key={index}
                      onClick={handleConnectClick}
                      className={fullClasses}
                    >
                      {item.name}
                    </button>
                  )
                }

                // External link (GitHub, LinkedIn, X, etc.)
                if (item.href.startsWith("http") || item.href.startsWith("https")) {
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className={fullClasses}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  )
                }

                // Internal link (/, /contact, etc.)
                return (
                  <Link 
                    key={index} 
                    href={item.href} 
                    className={fullClasses}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className='relative lg:hidden border'>
        <div className='text-zinc-800 flex items-center overflow-x-hidden justify-between'>
          <div className='p-3'>
            <Link href="/" onClick={() => handleNavClick('/')}>
              <h1 className='font-bowlby text-[20px] text-primary-color lg:text-4xl capitalize hover:scale-90 hover:font-playWright'>
                dev<span className='font-playWright text-white-color hover:font-bowlby hover:text-primary-color'>kenny</span>
              </h1>
            </Link>
          </div>
          
          <button onClick={handleToggleShow} className='mr-5'>
            {showMobileMenu ? (
              <X className='text-3xl text-white cursor-pointer w-8 h-8' />
            ) : (
              <Menu className='text-3xl text-white cursor-pointer w-8 h-8' />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div 
              className='fixed h-[100vh] bg-gray-900 w-[70%] z-50 top-0 right-0 border lg:hidden border-t-0 border-r-0 border-gray-700 shadow-2xl'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-700">
                <h2 className='font-bowlby text-primary-color text-xl'>
                  dev<span className='font-playWright text-white'>kenny</span>
                </h2>
                <button onClick={() => setShowMobileMenu(false)}>
                  <X className='text-white w-6 h-6' />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className='flex flex-col text-[16px] mt-5 font-dmMono'>
                {navLinks.map((item, index) => {
                  const isActive = currentPath === item.href

                  // Portfolio Modal button
                  if (item.isModal) {
                    return (
                      <motion.button
                        key={index}
                        onClick={handlePortfolioClick}
                        className={`py-4 px-6 text-left border-b border-gray-700 text-white hover:bg-primary-color transition-colors uppercase text-lg ${
                          isActive ? 'bg-primary-color' : ''
                        }`}
                        whileHover={{ backgroundColor: "rgba(var(--primary-color-rgb), 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.name}
                      </motion.button>
                    )
                  }

                  // Connect Modal button (lets talk)
                  if (isConnectItem(item)) {
                    return (
                      <motion.button
                        key={index}
                        onClick={handleConnectClick}
                        className={`py-4 px-6 text-left border-b border-gray-700 text-white hover:bg-primary-color transition-colors uppercase text-lg ${
                          isActive ? 'bg-primary-color' : ''
                        }`}
                        whileHover={{ backgroundColor: "rgba(var(--primary-color-rgb), 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.name}
                      </motion.button>
                    )
                  }

                  // External link
                  if (item.href.startsWith("http") || item.href.startsWith("https")) {
                    return (
                      <motion.a
                        key={index}
                        href={item.href}
                        className={`py-4 px-6 border-b border-gray-700 text-white hover:bg-primary-color transition-colors uppercase text-lg ${
                          isActive ? 'bg-primary-color' : ''
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ backgroundColor: "rgba(var(--primary-color-rgb), 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setShowMobileMenu(false)}
                      >
                        {item.name}
                      </motion.a>
                    )
                  }

                  // Internal link
                  return (
                    <motion.div key={index}>
                      <Link 
                        href={item.href} 
                        className={`block py-4 px-6 border-b border-gray-700 text-white hover:bg-primary-color transition-colors uppercase text-lg ${
                          isActive ? 'bg-primary-color' : ''
                        }`}
                        onClick={() => handleNavClick(item.href)}
                      >
                        <motion.div
                          whileHover={{ backgroundColor: "rgba(var(--primary-color-rgb), 0.1)" }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="w-full h-full"
                        >
                          {item.name}
                        </motion.div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* Mobile Menu Footer */}
              <motion.div 
                className="absolute bottom-5 left-0 right-0 px-6 font-dmMono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-gray-400 text-sm text-center">
                  Ready to build something amazing?
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Backdrop */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileMenu(false)}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Modals */}
      <PortfolioModal 
        isOpen={showPortfolio}
        onClose={closePortfolio}
        portfolioPdfUrl="/danso.pdf"
        downloadFileName="DevKenny-Portfolio.pdf"
      />
      
      <ConnectModal 
        isOpen={showConnect} 
        onClose={closeConnect} 
      />
    </div>
  )
}

export default Header