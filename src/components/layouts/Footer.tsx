'use client'

import Link from 'next/link';
import { Smile, ArrowUpRight } from 'lucide-react';
import { sociaLinks, various_section } from '@/lib/data';
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react';
import PortfolioModal from '../content/portfolioModal';

function Footer() {
    const [scrolled, setScrolled] = useState(false);
    const [_, setShowToggle] = useState(false);
    const [activeSection, setActiveSection] = useState('description');
    const [showPortfolio, setShowPortfolio] = useState(false) 

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            

            const sectionsToCheck = [
                'description',
                'insight', 
                'skills',
                'projects',
                'recommendation',
                'work'
            ];
            
            const scrollPosition = window.scrollY + 150; // Increased offset for better detection
            let currentSection = 'description'; // Default to description
            
            // Check each section from top to bottom
            for (let i = 0; i < sectionsToCheck.length; i++) {
                const element = document.getElementById(sectionsToCheck[i]);
                if (element) {
                    const elementTop = element.offsetTop;
                    const elementBottom = elementTop + element.offsetHeight;
                    
                    // If we're within this section's boundaries
                    if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                        currentSection = sectionsToCheck[i];
                        break;
                    }
                    // If we're past this section but before the next, we're still in this section
                    else if (scrollPosition >= elementTop) {
                        currentSection = sectionsToCheck[i];
                    }
                }
            }
            
            setActiveSection(currentSection);
        };
        
        // Initial call to set correct active section on mount
        handleScroll();
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string, event?: React.MouseEvent) => {
        if (event) {
            event.preventDefault();
        }
        
        setShowToggle(false);

        // Handle special cases
        if (sectionId === 'projects') {
            const element = document.getElementById('projects');
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.offsetTop - headerOffset;
                
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
                
                setActiveSection('projects');
            }
            return;
        }

        // Handle contact page navigation
        if (sectionId === '/contact') {
            // This should be handled by your routing system
            return;
        }

        // Handle portfolio (if it's an external link or special case)
        if (sectionId === '#') {
            setShowPortfolio(true)
            return;
        }
        
        // Clean the section ID
        const cleanSectionId = sectionId.replace('/', '');
        
        // Handle home/description section - scroll to top
        if (cleanSectionId === 'description') {
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
            setActiveSection('description');
            return;
        }
        
        // Find and scroll to the target element
        const element = document.getElementById(cleanSectionId);
        if (element) {
            const headerOffset = 80; // Adjust based on your header height
            const elementPosition = element.offsetTop - headerOffset;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
            
            setActiveSection(cleanSectionId);
        }
    };

    // Function to determine if a navigation item should be active
    const isActiveSection = (navHref: string) => {
        // Handle special cases
        if (navHref === '/contact' || navHref === '#') {
            return false; // These don't correspond to sections on the current page
        }
        
        return activeSection === navHref;
    };

    const buttonVariants = {
        rest: { 
            scale: 1,
            color: "rgb(255, 255, 255)" 
        },
        hover: { 
            scale: 1.05,
            color: "rgb(var(--primary-color))",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: { 
            scale: 0.95,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const linkVariants = {
        rest: { 
            x: 0,
            y: 0
        },
        hover: { 
            x: 2,
            y: -2,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        }
    };

    return (
        <div className='h-auto border-t font-dmMono' id="footer">
            <div className='flex flex-col md:flex-row border-b dark:border-white'>
                
                {/* Logo Section */}
                <div className='md:p-3 md:py-2 border-r-0 border-b-0 flex-[10%] dark:border-white flex items-center'>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Link 
                            href="#" 
                            className='flex items-center justify-center w-full'
                            onClick={(e) => scrollToSection('description', e)}
                        >
                            <h1 className='font-bowlby text-primary-color text-4xl capitalize'>
                                dev<span className='font-playWright text-white-color'>kenny</span>
                            </h1>
                        </Link>
                    </motion.div>
                </div>

                {/* Smile Icon Section */}
                <div className='py-2 md:border-l md:border-r flex justify-center items-center flex-[20%]'>
                    <motion.div
                        animate={{ 
                            rotate: scrolled ? 360 : 0,
                            scale: scrolled ? 1.1 : 1
                        }}
                        transition={{ 
                            duration: 0.5,
                            type: "spring",
                            stiffness: 200
                        }}
                    >
                        <Smile className='border-b border-white w-full text-2xl md:text-3xl md:border-b-0 h-28 py-3'/>
                    </motion.div>
                </div>

                {/* Navigation Section */}
                <div className='py-2 flex-[50%] border-b-0 border-r-0 md:border-r'>
                    <div className='grid grid-cols-2 text-[12px] md:text-[15px] border-b-0 dark:border-white md:grid-cols-2 lg:grid-cols-4 gap-10 ml-10 md:ml-1 pt-10 md:p-5 uppercase font-nunito mb-5'>
                        {various_section.map((nav, index) => (
                            <motion.div
                                key={nav.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    delay: index * 0.1,
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 100
                                }}
                            >
                                <motion.button
                                    className={`uppercase w-full text-left relative transition-colors duration-300 ${
                                        isActiveSection(nav.href)
                                            ? 'text-primary-color' 
                                            : 'text-white-color hover:text-primary-color'
                                    }`}
                                    initial="rest"
                                    whileHover="hover"
                                    whileTap="tap"
                                    onClick={() => scrollToSection(nav.href)}
                                >
                                    {/* Active indicator */}
                                    <motion.div
                                        className="absolute -left-2 top-1 w-1 h-4 bg-primary-color rounded-full"
                                        initial={{ opacity: 0, scaleY: 0 }}
                                        animate={{ 
                                            opacity: isActiveSection(nav.href) ? 1 : 0,
                                            scaleY: isActiveSection(nav.href) ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    
                                    {/* Link text */}
                                    <span className="relative z-10">
                                        {nav.name}
                                    </span>
                                    
                                    {/* Hover background effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-primary-color/10 rounded-md -z-10"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileHover={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                    
                    <motion.p 
                        className='text-center text-[7px] font-nunito md:text-[10px] lg:text-[12px] uppercase mb-3'
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        we love to code
                    </motion.p>
                </div>

                {/* Social Links Section */}
                <div className='border-t justify-center flex-[20%] font-nunito uppercase md:border-0 border-white'>
                    {sociaLinks.map((social, index) => (
                        <motion.div
                            key={social.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                                delay: index * 0.1,
                                duration: 0.5,
                                type: "spring"
                            }}
                        >
                            <Link 
                                href={social.href} 
                                className='flex justify-center items-center border-b py-3 text-[10px] md:text-[18px] hover:text-primary-color last:border-b-0 dark:border-white transition-colors group'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.div 
                                    className="flex items-center"
                                    initial="rest"
                                    whileHover="hover"
                                >
                                    <h1 className='mr-2 ml-5'>{social.name}</h1> 
                                    <motion.div
                                        whileHover={{ 
                                            x: 2, 
                                            y: -2,
                                            rotate: 45 
                                        }}
                                        transition={{ 
                                            type: "spring", 
                                            stiffness: 400, 
                                            damping: 10 
                                        }}
                                    >
                                        <ArrowUpRight className='h-6' />
                                    </motion.div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div> 
            </div>

            {/* Copyright Section */}
            <motion.div 
                className='uppercase text-[13px] py-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <p className='text-center'>&copy; 2025 akatadeveloper</p>
            </motion.div>
            
            {/* Portfolio Modal */}
            <PortfolioModal 
                isOpen={showPortfolio}
                onClose={() => setShowPortfolio(false)}
            />
        </div>
    );
}

export default Footer;