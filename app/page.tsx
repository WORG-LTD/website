"use client";

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

export default function Home() {
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
            <Link href="/">
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
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
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
      <div id="contact">
        <CallToActionSection />
        <ContactSection />
      </div>
      <MobileNavigation />
      <Footer />
    </div>
  );
}
