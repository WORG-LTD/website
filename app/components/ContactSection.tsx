"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  surname: string;
  firstname: string;
  email: string;
  subscribe: boolean;
  phone?: string;
  description?: string;
};

type SubmitStatus = {
  success: boolean;
  message: string;
} | null;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      subscribe: true,
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Unable to process your request at this time. Please try again later.');
      }

      setSubmitStatus({ 
        success: true, 
        message: '✅ Your message has been sent! Our team will get back to you within 24 hours.' 
      });
      reset();
    } catch (error) {
      console.error('Submission error:', error);
      
      const errorMessage = error instanceof Error ? 
        (error.message.includes('Failed to fetch') ? 
          '⚠️ Unable to connect to our servers. Please check your internet connection and try again.' : 
          `⚠️ ${error.message}`) : 
        '⚠️ An unexpected error occurred. Please try again later or contact us directly at info@worgltd.com';
      
      setSubmitStatus({ 
        success: false, 
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1 w-full md:w-full flex flex-col gap-5 bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5 shadow-2xl shadow-green-900/20"
          >
            <div className="flex flex-col md:flex-row gap-5 w-full">
              <div className="w-full flex flex-col">
                <label htmlFor="surname" className="text-xs font-medium text-green-100 mb-1.5 ml-1.5 transition-colors">Surname</label>
                <input
                  id="surname"
                  type="text"
                  placeholder="Enter your Surname"
                  className={`w-full rounded-xl px-4 py-3.5 bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:bg-white transition-all duration-200 shadow-sm border ${
                    errors.surname ? 'border-red-500' : 'border-white/20'
                  }`}
                  {...register('surname', { required: 'Surname is required' })}
                />
                {errors.surname && (
                  <p className="text-red-500 text-xs mt-1">{errors.surname.message}</p>
                )}
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="firstname" className="text-xs font-medium text-green-100 mb-1.5 ml-1.5 transition-colors">First Name</label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="Enter First Name"
                  className={`w-full rounded-xl px-4 py-3.5 bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:bg-white transition-all duration-200 shadow-sm border ${
                    errors.firstname ? 'border-red-500' : 'border-white/20'
                  }`}
                  {...register('firstname', { required: 'First name is required' })}
                />
                {errors.firstname && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstname.message}</p>
                )}
              </div>
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="email" className="text-xs font-medium text-green-100 mb-1.5 ml-1.5">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email address"
                className={`w-full rounded-xl px-4 py-3.5 bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:bg-white transition-all duration-200 shadow-sm border ${
                  errors.email ? 'border-red-500' : 'border-white/20'
                }`}
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <div className="flex items-start gap-3 p-2 bg-white/5 rounded-lg">
              <input 
                id="subscribe" 
                type="checkbox" 
                className="mt-1 accent-green-500 w-4 h-4 flex-shrink-0 cursor-pointer" 
                {...register('subscribe')} 
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
                {...register('phone')}
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
                {...register('description')}
              />
            </div>
            
            {/* Toast Notification */}
            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  key={submitStatus.success ? 'success' : 'error'}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      type: 'spring',
                      damping: 25,
                      stiffness: 300
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.95,
                    transition: { duration: 0.2 }
                  }}
                  className={`fixed bottom-6 right-6 z-50 max-w-sm w-full shadow-xl rounded-xl overflow-hidden ${
                    submitStatus.success 
                      ? 'bg-gradient-to-br from-green-50 to-green-100 border border-green-200' 
                      : 'bg-gradient-to-br from-red-50 to-red-100 border border-red-200'
                  }`}
                  role="alert"
                >
                  <div className="p-4">
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 p-2 rounded-full ${
                        submitStatus.success ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {submitStatus.success ? (
                          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <div className="ml-3 flex-1 pt-0.5">
                        <p className={`text-sm font-medium ${
                          submitStatus.success ? 'text-green-800' : 'text-red-800'
                        }`}>
                          {submitStatus.success ? 'Message Sent!' : 'Something went wrong'}
                        </p>
                        <p className={`mt-1 text-sm ${
                          submitStatus.success ? 'text-green-700' : 'text-red-700'
                        }`}>
                          {submitStatus.message}
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0 flex">
                        <button
                          onClick={() => setSubmitStatus(null)}
                          className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          <span className="sr-only">Close</span>
                          <svg className="h-5 w-5 text-gray-400 hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className={`h-1 w-full ${
                    submitStatus.success ? 'bg-green-200' : 'bg-red-200'
                  }`}>
                    <motion.div
                      initial={{ width: '100%' }}
                      animate={{ width: '0%' }}
                      transition={{ duration: 5, ease: 'linear' }}
                      onAnimationComplete={() => setSubmitStatus(null)}
                      className={`h-full ${
                        submitStatus.success ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-2 bg-green-500 text-white font-medium py-3.5 rounded-[8px] hover:shadow-lg hover:shadow-green-500/20 hover:from-green-500 hover:to-green-500/90 transition-all duration-300 text-base w-full flex items-center justify-center gap-2 group ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : 'Send'}
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
