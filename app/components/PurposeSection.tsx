"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      ease: "easeOut"
    }
  }
};

const imageItem = {
  hidden: { opacity: 0, scale: 0.9 },
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

const PurposeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="w-full py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.h2 
          className="text-[#13C476] font-['General_Sans'] text-2xl md:text-3xl lg:text-4xl font-medium mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Purpose &<br />
          Path Forward
        </motion.h2>
        
        <motion.div 
          className="space-y-12 md:space-y-20"
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* First Vision Statement */}
          <motion.div 
            className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12"
            variants={container}
          >
            <motion.div 
              className="md:w-1/2 order-2 md:order-1"
              variants={item}
            >
              <motion.h3 
                className="font-medium text-lg md:text-xl mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Vision Statement
              </motion.h3>
              <motion.p 
                className="text-[#79797A] text-sm md:text-base"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                To be a leading catalyst and foster sustainable 
                development, driving innovation and prosperity for a
                resilient future.
              </motion.p>
            </motion.div>
            <motion.div 
              className="md:w-1/2 order-1 md:order-2"
              variants={imageItem}
              whileHover="hover"
            >
              <motion.div 
                className="rounded-3xl overflow-hidden bg-[#EFF8FF] p-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/assets/lady-smiling.png"
                  alt="Smiling woman with tablet"
                  width={500}
                  height={350}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Second Vision Statement */}
          <motion.div 
            className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12"
            variants={container}
          >
            <motion.div 
              className="md:w-1/2 order-2 md:order-2"
              variants={item}
            >
              <motion.h3 
                className="font-medium text-lg md:text-xl mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Vision Statement
              </motion.h3>
              <motion.p 
                className="text-[#79797A] text-sm md:text-base"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                At WORG, we are committed to transforming lives
                through inclusive solutions that address community
                challenges, promote economic growth, and inspire
                sustainable practices across multiple sectors.
              </motion.p>
            </motion.div>
            <motion.div 
              className="md:w-1/2 order-1 md:order-1"
              variants={imageItem}
              whileHover="hover"
            >
              <motion.div 
                className="rounded-3xl overflow-hidden bg-[#EFF8FF] p-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/assets/man-with-veggies.png"
                  alt="Man with vegetables"
                  width={500}
                  height={350}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PurposeSection;
