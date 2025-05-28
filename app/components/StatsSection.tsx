"use client";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

// CountUp component for the animation
interface CountUpProps {
  value: string;
  duration?: number;
  delay?: number;
}

const CountUp = ({ value, duration = 2, delay = 0 }: CountUpProps) => {
  const [count, setCount] = useState<number | string>(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      // Extract the numeric part from the value
      const numValue = parseInt(value.replace(/\D/g, ''));
      const isNumeric = !isNaN(numValue);
      
      if (isNumeric) {
        let start = 0;
        const end = numValue;
        const increment = end / (duration * 60); // 60fps
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 1000/60);
        
        return () => clearInterval(timer);
      } else {
        setCount(value);
      }
    }
  }, [inView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="relative inline-block"
    >
      {typeof count === 'number' && !isNaN(count) 
        ? count.toLocaleString() + (value.includes('+') ? '+' : '')
        : value}
      <motion.span 
        className="absolute inset-0 rounded-full opacity-0"
        animate={{
          opacity: [0, 0.3, 0],
          scale: [1, 1.5, 2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(74,222,128,0.5) 0%, rgba(74,222,128,0) 70%)",
        }}
      />
    </motion.span>
  );
};

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { value: "1000000", label: "Hectares targeted for cultivation" },
    { value: "100000", label: "Farmers empowered" },
    { value: "10", label: "Ecosystem Tools\n(equipment, tech, finance, logistics)" },
    { value: "National", label: "Global Scale vertical uniformity" }
  ];

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

  return (
    <div className="bg-[#032616] text-white py-16 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-green-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Discover the Power of a<br />
          Nation-First Agricultural<br />
          Movement.
        </motion.h2>
        
        <motion.p 
          className="mb-12 max-w-2xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We are transforming agriculture into a structured engine for national security, prosperity, and global relevance.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          ref={ref}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item"
              variants={item}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-white relative z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { 
                  scale: 1, 
                  opacity: 1,
                  textShadow: [
                    '0 0 0px rgba(74, 222, 128, 0)',
                    '0 0 8px rgba(74, 222, 128, 0.5)',
                    '0 0 0px rgba(74, 222, 128, 0)'
                  ]
                } : {}}
                transition={{ 
                  duration: 0.6,
                  delay: 0.3 + (index * 0.1),
                  textShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <CountUp 
                  value={stat.value} 
                  duration={2} 
                  delay={0.3 + (index * 0.1)}
                />
                {stat.value === 'National' ? ' +' : stat.value.includes('1000000') ? '' : '+'}
              </motion.h3>
              <p className="text-sm text-white mt-2 whitespace-pre-line">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;
