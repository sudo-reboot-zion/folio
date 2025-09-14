'use client'

import { X, Download } from 'lucide-react'
import { motion } from 'framer-motion'

interface PortfolioModalProps {
  isOpen: boolean
  onClose: () => void
  portfolioPdfUrl?: string
  downloadFileName?: string
}

function PortfolioModal({ 
  isOpen, 
  onClose, 
  portfolioPdfUrl = "/danso.pdf",
  downloadFileName = "DevKenny-Portfolio.pdf"
}: PortfolioModalProps) {
  
  if (!isOpen) return null

  function downloadPortfolio() {
    const link = document.createElement('a')
    link.href = portfolioPdfUrl
    link.download = downloadFileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Handle backdrop click to close modal
  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }


  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  // const modalVariants = {
  //   hidden: { 
  //     opacity: 0,
  //     scale: 0.8,
  //     y: 50
  //   },
  //   visible: { 
  //     opacity: 1,
  //     scale: 1,
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       stiffness: 300,
  //       damping: 25,
  //       duration: 0.3
  //     }
  //   },
  //   exit: { 
  //     opacity: 0,
  //     scale: 0.8,
  //     y: 50,
  //     transition: {
  //       duration: 0.2
  //     }
  //   }
  // }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  }

  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyPress}
      tabIndex={-1}
    >
      <motion.div 
        className="flex flex-col h-full"
      
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 bg-gray-900 border-b border-gray-700">
          <div className="flex items-center space-x-4">
            <motion.h1 
              className="text-2xl md:text-3xl font-bowlby text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              my <span className="text-primary-color">portfolio</span>
            </motion.h1>
            <motion.span 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              PDF Document
            </motion.span>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Download Button */}
            <motion.button
              onClick={downloadPortfolio}
              className="flex items-center gap-2 bg-primary-color text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Download size={20} />
              <span className="hidden sm:inline">Download</span>
            </motion.button>
            
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="text-white hover:text-primary-color transition-colors p-2"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.1 }}
            >
              <X size={28} />
            </motion.button>
          </div>
        </div>

        {/* PDF Viewer */}
        <motion.div 
          className="flex-1 p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* PDF Embed */}
            <iframe
              src={`${portfolioPdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
              className="w-full h-full border-0"
              title="Portfolio PDF"
              loading="lazy"
            >
              {/* Fallback for browsers that don't support iframe PDF viewing */}
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <motion.div 
                  className="bg-gray-100 rounded-lg p-8 max-w-md"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Portfolio PDF
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your browser doesn&apos;t support PDF viewing. Please download the file to view it.
                  </p>
                  <motion.button
                    onClick={downloadPortfolio}
                    className="flex items-center gap-2 bg-primary-color text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-colors mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download size={20} />
                    Download Portfolio
                  </motion.button>
                </motion.div>
              </div>
            </iframe>
          </div>
        </motion.div>

        {/* Mobile Download Bar */}
        <motion.div 
          className="lg:hidden bg-gray-900 border-t border-gray-700 p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            onClick={downloadPortfolio}
            className="w-full flex items-center justify-center gap-2 bg-primary-color text-white py-3 rounded-lg hover:bg-opacity-80 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={20} />
            Download Portfolio PDF
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default PortfolioModal