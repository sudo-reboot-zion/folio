'use client'

import { X, Mail, Copy, MessageCircle, Calendar, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface ConnectModalProps {
  isOpen: boolean
  onClose: () => void
}

const contactInfo = {
  email: process.env.NEXT_PUBLIC_EMAIL as string, 
  whatsapp: process.env.NEXT_PUBLIC_PHONE as string, 
  calendly: "https://calendly.com/yourname" 
}

function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false)
  
  if (!isOpen) return null

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}?subject=Let's Connect&body=Hi Kenneth, I'd love to connect with you about...`
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Kenneth! I found your portfolio and would love to connect.")
    window.open(`https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank')
  }

  const handleCalendlyClick = () => {
    window.open(contactInfo.calendly, '_blank')
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
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
      className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 font-dmMono"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={handleBackdropClick}
    >
      <motion.div 
        className="bg-gray-900 rounded-xl w-full max-w-md border border-gray-700 shadow-2xl"
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <motion.h2 
            className="text-2xl font-bowlby text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            let&apos;s <span className="text-primary-color">connect</span>
          </motion.h2>
          <motion.button
            onClick={onClose}
            className="text-white hover:text-primary-color transition-colors p-2"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.1 }}
          >
            <X size={24} />
          </motion.button>
        </div>

        {/* Contact Options */}
        <div className="p-6 space-y-4">
          {/* Email Option */}
          <motion.div 
            className="border border-gray-600 rounded-lg p-4 bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Mail className="text-primary-color" size={20} />
                <span className="text-white font-medium">Email Me</span>
              </div>
              <button
                onClick={copyEmail}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Copy size={16} />
              </button>
            </div>
            <p className="text-gray-300 text-sm mb-3">{contactInfo.email}</p>
            <div className="flex gap-2">
              <button
                onClick={handleEmailClick}
                className="flex-1 bg-primary-color text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors text-sm"
              >
                Open Email
              </button>
              <button
                onClick={copyEmail}
                className={`px-4 py-2 rounded-md text-sm transition-all ${
                  copiedEmail 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {copiedEmail ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </motion.div>

          {/* WhatsApp Option */}
          <motion.div 
            className="border border-gray-600 rounded-lg p-4 bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <MessageCircle className="text-green-500" size={20} />
              <span className="text-white font-medium">WhatsApp</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">Quick chat for immediate responses</p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} />
              Message on WhatsApp
            </button>
          </motion.div>

          {/* Calendar Option */}
          <motion.div 
            className="border border-gray-600 rounded-lg p-4 bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="text-blue-500" size={20} />
              <span className="text-white font-medium">Schedule a Call</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">Book a 30-minute discovery call</p>
            <button
              onClick={handleCalendlyClick}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} />
              Book Meeting
            </button>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          className="p-6 border-t border-gray-700 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm">
            Looking forward to hearing from you!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ConnectModal