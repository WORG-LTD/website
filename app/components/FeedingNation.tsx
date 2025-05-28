"use client";

import Image from 'next/image';
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const FeedingNation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2, // Normalize to -1 to 1
        y: (e.clientY / window.innerHeight - 0.5) * 2 // Normalize to -1 to 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants for the tilt effect
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  // Animation variants for the left container
  const leftContainerVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: (mousePosition: { x: number, y: number }) => ({
      rotateY: mousePosition.x * 5, // Adjust the multiplier for more/less tilt
      rotateX: -mousePosition.y * 2,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    })
  };

  // Animation variants for the right container
  const rightContainerVariants = {
    hidden: { opacity: 0, x: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: (mousePosition: { x: number, y: number }) => ({
      rotateY: mousePosition.x * 5, // Adjust the multiplier for more/less tilt
      rotateX: -mousePosition.y * 2,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    })
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full py-6 sm:py-8 md:py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mx-auto grid grid-cols-1 md:grid-cols-6 gap-8"
        >
          <motion.div
            variants={leftContainerVariants}
            initial="hidden"
            animate={["visible", isHovered ? "hover" : ""]}
            custom={mousePosition}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="md:col-span-4 col-span-5 bg-[#F1F9F2] px-4 sm:px-6 md:px-8 lg:px-[46px] py-6 sm:py-8 md:py-[38px] rounded-[20px] md:rounded-[32px]"
          >
            {/* Left container content remains the same */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[64px] font-medium font-['General_Sans'] text-[#13C476] mb-4"
            >
              Feeding the Nation,<br />
              Fueling the Future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base text-[#79797A] mb-6"
            >
              WORG is building Nigeria's largest agri-ecosystem. From seed to market,
              we empower farmers, secure food, and grow the economy.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#13C476] hover:bg-[#13C476] text-white font-medium py-2 px-6 rounded-md"
            >
              Partner with us
            </motion.button>
          </motion.div>

          <motion.div
            variants={rightContainerVariants}
            initial="hidden"
            animate={["visible", isHovered ? "hover" : ""]}
            custom={mousePosition}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="md:col-span-2 col-span-5 bg-[#EDEDED] px-4 sm:px-6 md:px-8 lg:px-[46px] py-6 sm:py-8 md:py-[38px] rounded-[20px] md:rounded-[32px] shadow-sm"
          >
            {/* Right container content remains the same */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              // className="flex flex-row sm:flex-col md:flex-col items-start justify-between"
              className="flex flex-col items-center justify-between w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col justify-between h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="font-medium text-[12px] sm:text-2xl md:text-[18px] font-[600] font-['General_Sans'] text-[#000000] mb-2">
                    WORG Executive <br className='block lg:hidden' /> Pitch Deck
                  </h3>
                  <p className="text-[10px] sm:text-[10px] md:text-[12px] text-[#000000]">
                    Get the full breakdown of our strategy, model, and impact roadmap.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex justify-center w-full mt-4"
                animate={{
                  x: [0, 5, -5, 0],
                }}
                transition={{
                  default: { duration: 0.5, delay: 0.4 },
                  x: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }
                }}
              >
                <Image
                  src="/assets/worg-pich-deck.png"
                  alt="Pitch deck preview"
                  width={150}
                  height={120}
                  className="mb-4"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[200px] text-[8px] py-1 px-4 mt-4 sm:mt-8 md:mt-0 border border-[#13C476] text-[#13C476] font-[600] font-['General_Sans'] md:self-auto sm:w-full md:w-auto rounded-md hover:bg-[#13C476] hover:text-white mx-auto md:mx-0 lg:self-center"
              >
                Download now
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeedingNation;
