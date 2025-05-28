"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import MobileNavigation from "../components/MobileNavigation";

const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'information-collected', title: 'Information We Collect' },
  { id: 'use-information', title: 'How We Use Your Information' },
  { id: 'sharing-disclosure', title: 'Sharing and Disclosure' },
  { id: 'data-protection', title: 'Data Protection' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'third-party-links', title: 'Third-Party Links' },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize the intersection observer
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    // Observe all sections
    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        sectionRefs.current[id] = section;
        observer.current?.observe(section);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      Object.values(sectionRefs.current).forEach(section => {
        if (section) {
          observer.current?.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Desktop Header (hidden on mobile/iPad) */}
      <div className="hidden lg:flex w-full items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <a href="/">
            <Image src="/assets/logo-black.png" alt="WORG Logo" width={80} height={28} />
          </a>
        </div>
        <nav className="flex gap-8 text-sm text-black font-medium">
          <a href="/#about">About WORG</a>
          <a href="/#solutions">Solutions</a>
          <a href="/#model">Our Model</a>
          <a href="/#projects">Projects</a>
          <a href="/#impact">Impact</a>
          <a href="/#contact">Partners</a>
        </nav>
        <motion.a 
          href="/#join" 
          className="border border-green-400 text-green-500 px-6 py-2 rounded-lg font-medium hover:bg-green-50 transition relative overflow-hidden"
          whileHover={{ 
            scale: 1.03,
            boxShadow: '0 4px 6px -1px rgba(74, 222, 128, 0.2)'
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <motion.span
            className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          />
          Join the Mission
        </motion.a>
      </div>

      {/* Mobile/iPad Logo Bar */}
      <div className="flex lg:hidden w-full items-center justify-start px-4 py-4 border-b border-gray-200 bg-white z-20">
        <a href="/">
          <Image src="/assets/logo-black.png" alt="WORG Logo" width={80} height={28} />
        </a>
      </div>


      {/* Privacy Policy Top Section */}
      <section className="w-full flex justify-center items-center px-4 sm:px-6 mt-8 md:mt-12">
        <div className="w-full max-w-6xl bg-[#36C87A] rounded-3xl md:rounded-[32px] overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text - Reordered to top on mobile */}
            <div className="w-full p-6 sm:p-8 md:p-12 flex-1">
              <div className="max-w-xl mx-auto md:mx-0">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Privacy Policy</h1>
                <p className="text-white text-base md:text-lg mb-6 md:mb-8">Last Updated August 08, 2024</p>
                <motion.button 
                  className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-2.5 rounded-lg text-sm flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto transition-colors"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  Read now
                  <motion.span
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'loop'
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </motion.span>
                </motion.button>
              </div>
            </div>

            {/* Image - Positioned below on mobile, to the right on desktop */}
            <motion.div 
              className="w-full md:flex-1 relative md:pr-4 md:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8,
                  ease: "easeOut"
                }
              }}
            >
              <motion.div
                className="relative mx-auto max-w-md md:max-w-none"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/assets/man-smiling.png"
                  alt="Smiling farmer with tablet"
                  width={600}
                  height={450}
                  className="w-full h-auto max-h-[320px] md:max-h-[400px] object-contain md:object-cover rounded-b-2xl md:rounded-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content Section */}
      <section className="w-full flex justify-center px-2 md:px-0 mt-8 mb-16">
        <div className="w-[90%] lg:w-[70%] flex flex-col md:flex-row gap-12">
          {/* Left: Content */}
          <div className="flex-1 text-[#222]">
            <motion.h2 
              id="introduction" 
              className="text-2xl md:text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              1. Introduction
            </motion.h2>
            <p className="mb-2">Welcome to WORG NG. LIMITED ("WORG"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your data when you visit our <a href="https://www.worgltd.com" className="text-green-500 underline" target="_blank" rel="noopener noreferrer">website www.worgltd.com</a>.</p>
            <p className="mb-6">By using this Website, you agree to the terms outlined in this Privacy Policy</p>

            <motion.h2 
              id="information-collected" 
              className="text-xl md:text-2xl font-bold mt-10 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              2. Information We Collect
            </motion.h2>
            <p className="mb-2">We may collect:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Personal Information: Name, email, phone number, etc.</li>
              <li>Usage Data: IP addresses, browser type, page interactions.</li>
              <li>Cookies: For user experience and analytics.</li>
            </ul>

            <motion.h2 
              id="use-information" 
              className="text-xl md:text-2xl font-bold mt-10 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              3. How We Use Your Information
            </motion.h2>
            <p className="mb-2">We use data to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Provide and improve services</li>
              <li>Communicate with users</li>
              <li>Ensure security</li>
              <li>Analyze trends</li>
            </ul>

            <motion.h2 
              id="sharing-disclosure" 
              className="text-xl md:text-2xl font-bold mt-10 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              4. Sharing and Disclosure
            </motion.h2>
            <p className="mb-2">We do not sell personal information. Data may be shared:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>With trusted service providers</li>
              <li>To comply with legal requirements</li>
            </ul>

            <motion.h2 
              id="data-protection" 
              className="text-xl md:text-2xl font-bold mt-10 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              5. Data Protection
            </motion.h2>
            <p className="mb-6">We use security measures to protect data but cannot guarantee absolute security.</p>

            <motion.h2 
              id="intellectual-property" 
              className="text-xl md:text-2xl font-bold mt-10 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              6. Intellectual Property
            </motion.h2>
            <p className="mb-6">All content—including text, graphics, logos, and images—on this Website is owned or licensed by WORG NG. LIMITED. Unauthorized reproduction, distribution, or modification of content is strictly prohibited without prior written consent.</p>

            <motion.h2 
              id="third-party-links" 
              className="text-xl md:text-2xl font-bold mt-10 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              7. Third-Party Links
            </motion.h2>
            <p>We are not responsible for external sites</p>
          </div>
          {/* Right: Navigation */}
          <nav className="hidden md:block w-64 flex-shrink-0">
            <ul className="sticky top-32 text-sm space-y-3 text-gray-400">
              {sections.map((section, index) => (
                <li 
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`cursor-pointer transition-colors hover:text-gray-600 ${
                    activeSection === section.id ? 'text-black font-semibold' : ''
                  }`}
                >
                  {index + 1}. {section.title}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
      <MobileNavigation />
      <ContactSection />
      <Footer />
    </div>
  );
}

