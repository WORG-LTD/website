"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./components/Header";
import MobileNavigation from "./components/MobileNavigation";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FeedingNation from "./components/FeedingNation";
import PurposeSection from "./components/PurposeSection";
import AgroEcosystemSection from "./components/AgroEcosystemSection";
import WorgMethodSection from "./components/WorgMethodSection";
import FaqSection from "./components/FaqSection";
import CallToActionSection from "./components/CallToActionSection";
import ContactSection from "./components/ContactSection";
import Link from "next/link";

// Smooth scroll helper function
const smoothScrollTo = (hash: string) => {
  if (!hash) return;
  
  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Handle initial scroll position on page load
    const hash = window.location.hash;
    if (hash) {
      // Small timeout to ensure the DOM is fully loaded
      const timer = setTimeout(() => {
        smoothScrollTo(hash);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);
  
  // Handle scroll restoration on back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash) {
        smoothScrollTo(hash);
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative pb-16 md:pb-0 overflow-hidden rounded-lg shadow-lg">
      <div className="flex flex-col w-[100%] sm:w-[95%] mx-auto lg:pt-24 md:pt-4 md:px-4">
        <div className="lg:hidden px-6 flex justify-between items-center pt-[50px] pb-[50px]">
          <motion.div 
            className="logo"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          >
            <Link href="#" scroll={false} onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState({}, '', window.location.pathname);
            }}>
              <Image
                src="/assets/logo-black.png"
                alt="WORG Logo"
                width={100}
                height={30}
                className="object-contain"
              />
            </Link>
          </motion.div>

          <div className="lg:hidden">
            <button 
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md text-sm"
              onClick={() => {
                smoothScrollTo('#contact');
                window.history.pushState({}, '', '#contact');
              }}
            >
              Talk to Us
            </button>
          </div>
        </div>
        <div className="bg-black md:rounded-[32px] overflow-hidden">
          <Header />
          <main>
            <section id="about">
              <HeroSection />
            </section>
          </main>
        </div>
        <div className="bg-white px-0 sm:px-0" id="model">
          <FeedingNation />
        </div>
      </div>
      <div className="bg-gray-100" id="impact">
        <StatsSection />
      </div>
      <div className="bg-white" id="method">
        <AgroEcosystemSection />
      </div>
      <div className="bg-white">
        <WorgMethodSection />
      </div>
      <div id="faq">
        <FaqSection />
      </div>
      <div id="join">
        <CallToActionSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <MobileNavigation />
      <Footer />
    </div>
  );
}
