"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  // Floating animation
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[#032616] flex justify-center">
      <div className="bg-[#08371e] rounded-3xl w-full max-w-4xl mx-4 md:mx-8 px-6 md:px-12 py-10 md:py-14 flex flex-col md:flex-row gap-10 items-center shadow-2xl border border-[#0a4a27]">
        {/* Left Side - Text */}
        <div className="flex-1 w-full md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
          <h2 className="text-white font-['General_Sans'] text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
            Get in Touch<br /><span className="">with WORG</span>
          </h2>
          <p className="text-green-300 text-base md:text-lg mb-6">
            Want to collaborate, invest, or join our growing network? Let's talk.
          </p>
          <div className="hidden md:block space-y-2 mt-4">
            <p className="text-green-200 text-sm flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span>
              Quick response within 24 hours
            </p>
            <p className="text-green-200 text-sm flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span>
              Secure and private communication
            </p>
          </div>
        </div>
        
        {/* Right Side - Form with Floating Animation */}
        <motion.div 
          className="relative"
          initial="initial"
          animate="animate"
          variants={floatingAnimation}
        >
          <form className="flex-1 w-full md:w-full flex flex-col gap-5 bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5 shadow-2xl shadow-green-900/20">
            <div className="flex flex-col md:flex-row gap-5 w-full">
              <div className="w-full flex flex-col">
                <label htmlFor="surname" className="text-xs font-medium text-green-100 mb-1.5 ml-1.5 transition-colors">Surname</label>
                <input
                  id="surname"
                  type="text"
                  placeholder="Enter your Surname"
                  className="w-full rounded-xl px-4 py-3.5 bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:bg-white transition-all duration-200 shadow-sm border border-white/20"
                  required
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="firstname" className="text-xs font-medium text-green-100 mb-1.5 ml-1.5 transition-colors">First Name</label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full rounded-xl px-4 py-3.5 bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:bg-white transition-all duration-200 shadow-sm border border-white/20"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="email" className="text-xs font-medium text-green-100 mb-1.5 ml-1.5">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email address"
                className="w-full rounded-xl px-4 py-3.5 bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:bg-white transition-all duration-200 shadow-sm border border-white/20"
                required
              />
            </div>
            
            <div className="flex items-start gap-3 p-2 bg-white/5 rounded-lg">
              <input 
                id="subscribe" 
                type="checkbox" 
                className="mt-1 accent-green-500 w-4 h-4 flex-shrink-0 cursor-pointer" 
                defaultChecked 
              />
              <label htmlFor="subscribe" className="text-sm text-green-100 leading-tight">
                Subscribe me to WORG updates & opportunities
              </label>
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-xs font-medium text-green-100 mb-1.5 ml-1.5">
                Phone Number <span className="text-green-200/70">(Optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter phone number (Optional)"
                className="w-full rounded-xl px-4 py-3.5 bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:bg-white transition-all duration-200 shadow-sm border border-white/20"
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="description" className="text-xs font-medium text-green-100 mb-1.5 ml-1.5">
                Description <span className="text-green-200/70">(Optional)</span>
              </label>
              <textarea
                id="description"
                placeholder="Enter description here"
                rows={3}
                className="w-full rounded-xl px-4 py-3.5 bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:bg-white transition-all duration-200 shadow-sm border border-white/20 resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="mt-2 bg-green-500 text-white font-medium py-3.5 rounded-[8px] hover:shadow-lg hover:shadow-green-500/20 hover:from-green-500 hover:to-green-500/90 transition-all duration-300 text-base w-full flex items-center justify-center gap-2 group"
            >
              Send
            </button>
          </form>
          {/* Floating shadow */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-green-900/30 blur-2xl rounded-full -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
