"use client";

import { useEffect } from 'react';
import Image from 'next/image';

const scrollToSection = (sectionId: string, attempt = 1) => {
  // Maximum number of attempts to find the element
  const maxAttempts = 5;
  
  const element = document.getElementById(sectionId);
  
  if (element) {
    // If element is found, scroll to it
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  } else if (attempt < maxAttempts) {
    // If element not found and we haven't exceeded max attempts, try again after a short delay
    console.log(`Element ${sectionId} not found, retrying... (${attempt}/${maxAttempts})`);
    setTimeout(() => scrollToSection(sectionId, attempt + 1), 100 * attempt);
  } else {
    console.error(`Could not find element with id: ${sectionId} after ${maxAttempts} attempts`);
  }
};

const MobileNavigation = () => {
  // Preload section elements when component mounts
  useEffect(() => {
    // This helps ensure sections are in the DOM when needed
    const sectionIds = ['about', 'model', 'impact', 'method', 'faq', 'contact'];
    sectionIds.forEach(id => {
      document.getElementById(id);
    });
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#032616] lg:hidden z-50 border-t border-gray-800">
      <div className="grid grid-cols-6 h-20">
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center justify-center pt-2 w-full active:bg-[#021b0e] transition-colors"
        >
          <div className="h-8 w-8 flex items-center justify-center mb-1">
            <Image 
              src="/assets/about-worg.png" 
              alt="About WORG" 
              width={24} 
              height={24} 
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-[8px] text-gray-300">About WORG</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('model')}
          className="flex flex-col items-center justify-center pt-2 w-full active:bg-[#021b0e] transition-colors"
        >
          <div className="h-8 w-8 flex items-center justify-center mb-1">
            <Image 
              src="/assets/our-model.png" 
              alt="Our Model" 
              width={24} 
              height={24} 
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-[8px] text-gray-300">Our Model</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('method')}
          className="flex flex-col items-center justify-center pt-2 w-full active:bg-[#021b0e] transition-colors"
        >
          <div className="h-8 w-8 flex items-center justify-center mb-1">
            <Image 
              src="/assets/wrong-method.png" 
              alt="The WORG Method" 
              width={24} 
              height={24} 
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-[8px] text-gray-300">Method</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('impact')}
          className="flex flex-col items-center justify-center pt-2 w-full active:bg-[#021b0e] transition-colors"
        >
          <div className="h-8 w-8 flex items-center justify-center mb-1">
            <Image 
              src="/assets/our-impact.png" 
              alt="Our Impact" 
              width={24} 
              height={24} 
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-[8px] text-gray-300">Our Impact</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('faq')}
          className="flex flex-col items-center justify-center pt-2 w-full active:bg-[#021b0e] transition-colors"
        >
          <div className="h-8 w-8 flex items-center justify-center mb-1">
            <Image 
              src="/assets/FAQs.png" 
              alt="FAQs" 
              width={24} 
              height={24} 
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-[8px] text-gray-300">FAQs</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('contact')}
          className="flex flex-col items-center justify-center pt-2 w-full active:bg-[#021b0e] transition-colors"
        >
          <div className="h-8 w-8 flex items-center justify-center mb-1">
            <Image 
              src="/assets/contact.png" 
              alt="Contact" 
              width={24} 
              height={24} 
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-[8px] text-gray-300">Contact</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNavigation;
