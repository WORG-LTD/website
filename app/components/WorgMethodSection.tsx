"use client";

import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
  hover: {
    y: -5,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3 },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

const WorgMethodSection = () => {
  return (
    <div className="w-full py-12 md:py-20 bg-white border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 w-full">
          {/* Left: Heading/Description */}
          <motion.div 
            className="flex-1 min-w-[290px] max-w-2xl mb-8 md:mb-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div 
              className="text-[#13C476] text-sm md:text-base mb-3"
              variants={textVariants}
            >
              The Process: 3-Point Journey
            </motion.div>
            <motion.h2 
              className="text-black font-['General_Sans'] text-2xl md:text-3xl lg:text-4xl font-medium mb-3"
              variants={textVariants}
            >
              From Seed to Success:<br />
              The WORG Method
            </motion.h2>
            <motion.p 
              className="text-[#79797A] text-sm md:text-base"
              variants={textVariants}
            >
              Our system is designed to scale across regions and deliver measurable results.
            </motion.p>
          </motion.div>

          {/* Right: Cards stacked */}
          <motion.div 
            className="flex flex-col md:flex-row gap-2 flex-1 w-full"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {/* Quality on the left, vertically centered */}
            <div className="flex-1 flex items-center justify-center md:justify-center mb-6 md:mb-0">
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="bg-[#13C4761A] rounded-3xl p-6 md:p-8 shadow-sm max-w-xs w-[200px] cursor-pointer"
              >
                <motion.div 
                  className="flex items-center mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="bg-[#EFF8FF] rounded-full p-2 mr-3 flex items-center justify-center" 
                    style={{ width: 40, height: 40 }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Image src="/assets/quality.png" alt="Quality" width={24} height={24} />
                  </motion.div>
                  <h3 className="font-semibold text-lg text-[black]">Quality</h3>
                </motion.div>
                <p className="text-sm text-[#032616]">
                  Standardized crops, better yields, and route-to-export market systems.
                </p>
              </motion.div>
            </div>
            
            {/* Research and Production stacked on the right */}
            <motion.div 
              className="flex flex-col gap-8 flex-1 items-start md:items-start md:-ml-12"
              variants={containerVariants}
            >
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="bg-[#13C4761A] rounded-3xl p-6 md:p-8 max-w-xs w-[200px] shadow-sm cursor-pointer"
              >
                <motion.div 
                  className="flex items-center mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="bg-[#EFF8FF] rounded-full p-2 mr-3 flex items-center justify-center" 
                    style={{ width: 40, height: 40 }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Image src="/assets/research.png" alt="Research" width={24} height={24} />
                  </motion.div>
                  <h3 className="font-semibold text-lg text-[black]">Research</h3>
                </motion.div>
                <p className="text-sm text-[#032616]">
                  We analyze land, climate, and markets to plan smarter farming systems.
                </p>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="bg-[#13C4761A] self-end md:self-auto rounded-3xl p-6 md:p-8 max-w-xs w-[200px] shadow-sm cursor-pointer"
              >
                <motion.div 
                  className="flex items-center mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="bg-[#EFF8FF] rounded-full p-2 mr-3 flex items-center justify-center" 
                    style={{ width: 40, height: 40 }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Image src="/assets/production.png" alt="Production" width={24} height={24} />
                  </motion.div>
                  <h3 className="font-semibold text-lg text-[black]">Production</h3>
                </motion.div>
                <p className="text-sm text-[#032616]">
                  We support full-cycle farming, from planting to harvest with tracks, tools, and training.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorgMethodSection;
