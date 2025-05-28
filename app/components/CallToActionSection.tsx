"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
  hover: {
    y: -10,
    transition: { duration: 0.3 },
  },
};

import type { Variants } from 'framer-motion';

const buttonVariants: Variants = {
  initial: { 
    scale: 1, 
    boxShadow: '0 0 0 0 rgba(19, 196, 118, 0.7)' 
  },
  hover: { 
    scale: 1.05,
    boxShadow: '0 0 16px 4px rgba(19, 196, 118, 0.3)',
    transition: { 
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut'
    }
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.2 } 
  },
};

const CallToActionSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  // Smoothly follow the mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Calculate rotation based on mouse position
  const rotateY = useTransform(x, [-100, 100], [10, -10]);
  const rotateX = useTransform(y, [-100, 100], [-10, 10]);
  
  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate position relative to center (-1 to 1)
    const xOffset = ((xPos - centerX) / centerX) * 50;
    const yOffset = ((yPos - centerY) / centerY) * 50;
    
    setMousePosition({ x: xOffset, y: yOffset });
    
    // Animate to the new position
    animate(x, xOffset, { type: 'spring', damping: 30, stiffness: 200 });
    animate(y, yOffset, { type: 'spring', damping: 30, stiffness: 200 });
  };
  
  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    animate(x, 0, { type: 'spring', damping: 30, stiffness: 200 });
    animate(y, 0, { type: 'spring', damping: 30, stiffness: 200 });
    setIsHovered(false);
  };

  return (
    <div className="w-full py-[4rem] md:py-[7rem] bg-[#032616] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto relative">
          <motion.div 
            className="relative flex justify-center"
            ref={containerRef}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={containerVariants}
          >
            {/* Card */}
            <motion.div 
              className="w-full bg-gradient-to-r from-white to-[#41e296] rounded-3xl border-2 border-blue-400 flex flex-col md:flex-row items-center px-6 py-8 md:py-10 md:px-12 relative overflow-hidden"
              style={{ zIndex: 1 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8,
                  ease: [0.2, 0.8, 0.2, 1]
                } 
              }}
            >
              {/* Animated background elements */}
              <motion.div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#13C476] opacity-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              <div className="flex-1 flex flex-col justify-center md:pr-8 relative z-10">
                <motion.h2 
                  className="text-[#222] font-['General_Sans'] text-2xl md:text-3xl lg:text-4xl font-medium mb-4"
                  variants={itemVariants}
                >
                  Your First Step Toward Real Impact
                </motion.h2>
                <motion.p 
                  className="text-[#222] text-sm md:text-base mb-8"
                  variants={itemVariants}
                >
                  WORG is reshaping agriculture to feed millions and fuel a stronger Nigeria.<br/>
                  Come build with us.
                </motion.p>
                <motion.div variants={itemVariants}>
                  <Link href="/contact" className="inline-block">
                    <motion.button 
                      className="bg-[#13C476] text-white font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors text-sm relative overflow-hidden group"
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <span className="relative z-10 flex items-center">
                        Partner with WORG
                        <motion.span 
                          className="ml-2"
                          animate={{
                            x: [0, 4, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          →
                        </motion.span>
                      </span>
                      <motion.span 
                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
              <div className="flex-1 flex items-end justify-center relative mt-8 md:mt-0">
                {/* Empty div for spacing on mobile */}
              </div>
            </motion.div>
            
            {/* Man Image - Overlapping Card with 3D Tilt Effect */}
            <motion.div 
              className="absolute hidden md:block right-4 md:right-10 bottom-0 z-10 flex justify-end items-end w-[150px] sm:w-[200px] md:w-[280px] lg:w-[300px] h-full" 
              style={{ perspective: '1000px' }}
              variants={imageVariants}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              ref={imageRef}
            >
              <motion.div
                className="relative w-full h-full"
                style={{
                  rotateY,
                  rotateX,
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(0)',
                  willChange: 'transform',
                }}
                transition={{
                  type: 'spring',
                  damping: 30,
                  stiffness: 300,
                  mass: 1,
                }}
              >
                <div 
                  className="relative w-full h-full"
                  style={{
                    transform: 'translateZ(50px)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <motion.div
                    className="w-full h-full"
                    animate={{
                      y: isHovered ? -15 : 0,
                      scale: isHovered ? 1.05 : 1,
                    }}
                    transition={{
                      type: 'spring',
                      damping: 20,
                      stiffness: 200,
                    }}
                  >
                    <Image
                      src="/assets/portrait-man-holding-organic-fruits.png"
                      alt="Man holding organic fruits"
                      width={300}
                      height={400}
                      className="object-contain w-full h-auto -mt-20 md:-mt-28 lg:-mt-32 drop-shadow-2xl"
                      style={{
                        transform: 'translateZ(50px)',
                        transformStyle: 'preserve-3d',
                      }}
                      priority
                    />
                  </motion.div>
                  
                  {/* Subtle reflection effect */}
                  {isHovered && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: mousePosition.y > 0 ? 0.3 : 0 }}
                      style={{
                        transform: 'translateZ(30px)',
                        transformOrigin: 'center',
                        transformStyle: 'preserve-3d',
                        pointerEvents: 'none',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;


