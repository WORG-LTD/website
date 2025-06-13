"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const contentVariants = {
  open: { 
    opacity: 1,
    height: 'auto',
    marginTop: '0.75rem',
    transition: {
      duration: 0.4,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
  closed: { 
    opacity: 0,
    height: 0,
    marginTop: 0,
    transition: {
      duration: 0.3,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <motion.div 
      className="flex flex-col gap-2"
      variants={itemVariants}
      layout
    >
      <motion.button 
        className="flex items-start gap-4 w-full text-left focus:outline-none group"
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <motion.span
          className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#13C4761A] group-hover:bg-[#13C47633] transition-colors duration-300"
          animate={isOpen ? "open" : "closed"}
          variants={iconVariants}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="minus"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Image 
                  src="/assets/minus.png" 
                  alt="Collapse" 
                  width={18} 
                  height={20} 
                />
              </motion.div>
            ) : (
              <motion.div
                key="plus"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Image 
                  src="/assets/plus.png" 
                  alt="Expand" 
                  width={24} 
                  height={24} 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.span>
        <h3 className="text-white font-semibold text-xl md:text-2xl leading-snug group-hover:text-[#13C476] transition-colors duration-300">
          {question}
        </h3>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="pl-0 sm:pl-12 md:pl-14 overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={contentVariants}
            aria-hidden={!isOpen}
          >
            <motion.p 
              className="text-[#B2D8BF] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "What exactly is WORG?",
      answer: "WORG is reshaping agriculture to feed millions and fuel a stronger Nigeria. Come build with us."
    },
    {
      question: "Who can be part of WORG?",
      answer: "Farmers, agribusinesses, investors, technology partners, and anyone passionate about transforming Nigeria's agricultural sector can be part of WORG. We welcome stakeholders who share our vision for a sustainable food system."
    },
    {
      question: "What does WORG offer farmers?",
      answer: "WORG offers farmers access to modern farming techniques, quality inputs, equipment, financing options, storage facilities, and direct market connections. We provide training, support, and the infrastructure needed to improve yields and income."
    },
    {
      question: "What makes WORG different from other agri-projects?",
      answer: "WORG takes a comprehensive ecosystem approach rather than focusing on isolated parts of the value chain. We combine technology, standardization, infrastructure, and market access into one integrated system designed to scale across regions."
    },
    {
      question: "Can private investors or companies partner with WORG?",
      answer: "Yes, we actively seek partnerships with private investors and companies. We offer various collaboration models, from direct investment opportunities to operational partnerships that leverage each partner's strengths."
    },
    {
      question: "What impact has WORG made so far?",
      answer: "WORG has empowered thousands of smallholder farmers, increased agricultural productivity in our operating regions, created rural jobs, improved food security, and established sustainable market linkages that benefit the entire agricultural value chain."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-[#032616] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div 
          className="max-w-4xl lg:max-w-6xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-white font-['General_Sans'] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2"
            variants={itemVariants}
          >
            WORG | Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-[#B2D8BF] text-xs sm:text-sm md:text-base mb-8 sm:mb-10 lg:mb-12"
            variants={itemVariants}
          >
            Everything you need to know about how WORG works, who it's for, and why it matters
          </motion.p>
          
          <div className="bg-[#13C4761A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 lg:px-16 xl:px-20 mx-auto">
            <motion.div 
              className="flex flex-col gap-4 sm:gap-6 md:gap-8"
              variants={containerVariants}
            >
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FaqSection;
