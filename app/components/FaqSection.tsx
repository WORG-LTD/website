"use client";

import React, { useState } from 'react';

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="border-b border-[#0E452D] py-5">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-white font-medium text-lg">{question}</h3>
        <span className="text-white text-2xl">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="mt-3">
          <p className="text-[#B2D8BF] text-sm md:text-base">{answer}</p>
        </div>
      )}
    </div>
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
    <div className="w-full py-12 md:py-20 bg-[#004720]">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white font-['General_Sans'] text-2xl md:text-3xl lg:text-4xl font-medium mb-2">
            WORG | Frequently Asked Questions
          </h2>
          <p className="text-[#B2D8BF] text-sm md:text-base mb-12">
            Everything you need to know about how WORG works, who it's for, and why it matters
          </p>
          
          <div className="bg-[#0C5022] p-6 md:p-10 rounded-3xl">
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
