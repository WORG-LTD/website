"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.8, 0.2, 1]
    }
  },
  hover: {
    x: 5,
    transition: { duration: 0.2 }
  }
};

const imageItem = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.8, 0.2, 1]
    }
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3 }
  }
};

const AgroEcosystemSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="w-full py-12 md:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#13C476] font-['General_Sans'] text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
            A Nationwide<br />
            Agro-Ecosystem
          </h2>
          <motion.p 
            className="text-[#79797A] text-sm md:text-base mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're not running farms. We're running a system that enables farming to thrive.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div className="space-y-8">
            {/* Farmer Clusters */}
            <motion.div 
              className="flex items-start space-x-4 group"
              variants={item}
              whileHover="hover"
            >
              <motion.div 
                className="bg-gray-50 rounded-full p-2 mt-1 group-hover:bg-green-50 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <span className="flex items-center justify-center h-6 w-6 text-[#13C476] font-bold"></span>
              </motion.div>
              <div className="group">
                <h3 className="font-bold text-lg mb-1 text-[#BCBCBC] group-hover:text-black">Farmer Clusters</h3>
                <p className="text-sm text-[#79797A] group-hover:text-[#79797A]">
                  We organize and empower smallholder farmers with training, inputs, and access to markets.
                </p>
              </div>
            </motion.div>

            {/* Infrastructure */}
            <motion.div 
              className="flex items-start space-x-4 group"
              variants={item}
              whileHover="hover"
            >
              <motion.div 
                className="bg-gray-50 rounded-full p-2 mt-1 group-hover:bg-green-50 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <span className="flex items-center justify-center h-6 w-6 text-[#13C476] font-bold"></span>
              </motion.div>
              <div className="group">
                <h3 className="font-bold text-lg mb-1 text-[#BCBCBC] group-hover:text-black">Infrastructure</h3>
                <p className="text-sm text-[#79797A] group-hover:text-[#79797A]">
                  We build and maintain the physical and digital infrastructure needed for efficient farming operations.
                </p>
              </div>
            </motion.div>

            {/* Standardization */}
            <motion.div 
              className="flex items-start space-x-4 group"
              variants={item}
              whileHover="hover"
            >
              <motion.div 
                className="bg-gray-50 rounded-full p-2 mt-1 group-hover:bg-green-50 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <span className="flex items-center justify-center h-6 w-6 text-[#13C476] font-bold"></span>
              </motion.div>
              <div className="group">
                <h3 className="font-bold text-lg mb-1 text-[#BCBCBC] group-hover:text-black">Standardization</h3>
                <p className="text-sm text-[#79797A] group-hover:text-[#79797A]">
                  We implement standardized practices and processes to ensure consistency and quality.
                </p>
              </div>
            </motion.div>

            {/* Technology */}
            <motion.div 
              className="flex items-start space-x-4 group"
              variants={item}
              whileHover="hover"
            >
              <motion.div 
                className="bg-gray-50 rounded-full p-2 mt-1 group-hover:bg-green-50 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <span className="flex items-center justify-center h-6 w-6 text-[#13C476] font-bold"></span>
              </motion.div>
              <div className="group">
                <h3 className="font-bold text-lg mb-1 text-[#BCBCBC] group-hover:text-black">Technology</h3>
                <p className="text-sm text-[#79797A] group-hover:text-[#79797A]">
                  We leverage cutting-edge technology to optimize farming efficiency and sustainability.
                </p>
              </div>
            </motion.div>

            {/* Finance */}
            <motion.div 
              className="flex items-start space-x-4 group"
              variants={item}
              whileHover="hover"
            >
              <motion.div 
                className="bg-gray-50 rounded-full p-2 mt-1 group-hover:bg-green-50 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <span className="flex items-center justify-center h-6 w-6 text-[#13C476] font-bold"></span>
              </motion.div>
              <div className="group">
                <h3 className="font-bold text-lg mb-1 text-[#BCBCBC] group-hover:text-black">Finance</h3>
                <p className="text-sm text-[#79797A] group-hover:text-[#79797A]">
                  We provide access to financial services and support to ensure sustainable growth.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 grid-rows-2 gap-4 h-full"
            variants={container}
          >
            {/* Top left: Tractor */}
            <motion.div 
              className="row-span-1 col-span-1"
              variants={imageItem}
            >
              <motion.div 
                className="rounded-2xl overflow-hidden bg-[#F1F9F2] p-2 h-full"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/assets/tractor.png"
                  alt="Tractor in field"
                  width={260}
                  height={180}
                  className="w-full h-full rounded-xl object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
            
            {/* Top right: Lady standing */}
            <motion.div 
              className="row-span-2 col-span-1"
              variants={imageItem}
            >
              <motion.div 
                className="rounded-2xl overflow-hidden bg-[#F1F9F2] p-2 h-full flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/assets/lady-standing.png"
                  alt="Lady standing in field"
                  width={260}
                  height={340}
                  className="w-full h-full rounded-xl object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
            
            {/* Bottom left: Hands */}
            <motion.div 
              className="row-span-1 col-span-1"
              variants={imageItem}
            >
              <motion.div 
                className="rounded-2xl overflow-hidden bg-[#F1F9F2] p-2 h-full"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/assets/hands.png"
                  alt="Hands with crop"
                  width={260}
                  height={120}
                  className="w-full h-full rounded-xl object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
            
            {/* Bottom right: intentionally empty for layout balance */}
            <div className="row-span-1 col-span-1"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AgroEcosystemSection;
