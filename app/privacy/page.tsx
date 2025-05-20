"use client";

import Image from "next/image";

import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import MobileNavigation from "../components/MobileNavigation";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Desktop Header (hidden on mobile/iPad) */}
      <div className="hidden lg:flex w-full items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Image src="/assets/logo-black.png" alt="WORG Logo" width={80} height={28} />
          {/* <span className="text-xs text-black font-light ml-1">Cultivating excellence</span> */}
        </div>
        <nav className="flex gap-8 text-sm text-black font-medium">
          <a href="#">About WORG</a>
          <a href="#">Solutions</a>
          <a href="#">Our Model</a>
          <a href="#">Projects</a>
          <a href="#">Impact</a>
          <a href="#">Partners</a>
        </nav>
        <button className="border border-green-400 text-green-500 px-6 py-2 rounded-lg font-medium hover:bg-green-50 transition">Join the Mission</button>
      </div>

      {/* Mobile/iPad Logo Bar */}
      <div className="flex lg:hidden w-full items-center justify-start px-4 py-4 border-b border-gray-200 bg-white z-20">
        <Image src="/assets/logo-black.png" alt="WORG Logo" width={80} height={28} />
      </div>


      {/* Privacy Policy Top Section */}
      <section className="w-full flex justify-center items-center px-2 md:px-0 mt-8 md:mt-12">
        <div className="w-full max-w-6xl bg-[#36C87A] rounded-[32px] flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-12 gap-8">
          {/* Text */}
          <div className="flex-1 flex flex-col justify-center md:pl-8">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-white text-base md:text-lg mb-8">Last Updated August 08,2024.</p>
            <button className="bg-white text-[#36C87A] font-medium px-6 py-2 rounded-md w-[140px] text-sm flex items-center gap-2 shadow-sm">
              Read now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
          {/* Image */}
          <div className="flex-1 flex items-center justify-end w-full max-w-[430px]">
            <Image
              src="/assets/man-smiling.png"
              alt="Smiling farmer with tablet"
              width={430}
              height={320}
              className="rounded-2xl object-cover w-full max-w-[430px] max-h-[320px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Privacy Policy Content Section */}
      <section className="w-full flex justify-center px-2 md:px-0 mt-8 mb-16">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12">
          {/* Left: Content */}
          <div className="flex-1 text-[#222]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">1. Introduction</h2>
            <p className="mb-2">Welcome to WORG NG. LIMITED ("WORG"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your data when you visit our <a href="https://www.worgltd.com" className="text-green-500 underline" target="_blank" rel="noopener noreferrer">website www.worgltd.com</a>.</p>
            <p className="mb-6">By using this Website, you agree to the terms outlined in this Privacy Policy</p>

            <h2 className="text-xl md:text-2xl font-bold mt-10 mb-2">2. Information We Collect</h2>
            <p className="mb-2">We may collect:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Personal Information: Name, email, phone number, etc.</li>
              <li>Usage Data: IP addresses, browser type, page interactions.</li>
              <li>Cookies: For user experience and analytics.</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold mt-10 mb-2">3. How We Use Your Information</h2>
            <p className="mb-2">We use data to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Provide and improve services</li>
              <li>Communicate with users</li>
              <li>Ensure security</li>
              <li>Analyze trends</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold mt-10 mb-2">4. Sharing and Disclosure</h2>
            <p className="mb-2">We do not sell personal information. Data may be shared:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>With trusted service providers</li>
              <li>To comply with legal requirements</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold mt-10 mb-2">5. Data Protection</h2>
            <p className="mb-6">We use security measures to protect data but cannot guarantee absolute security.</p>

            <h2 className="text-xl md:text-2xl font-bold mt-10 mb-2">6. Intellectual Property</h2>
            <p className="mb-6">All content—including text, graphics, logos, and images—on this Website is owned or licensed by WORG NG. LIMITED. Unauthorized reproduction, distribution, or modification of content is strictly prohibited without prior written consent.</p>

            <h2 className="text-xl md:text-2xl font-bold mt-10 mb-2">7. Third-Party Links</h2>
            <p>We are not responsible for external sites</p>
          </div>
          {/* Right: Navigation */}
          <nav className="hidden md:block w-64 flex-shrink-0">
            <ul className="sticky top-32 text-sm space-y-3 text-gray-400">
              <li className="text-black font-semibold">1. Introduction</li>
              <li>2. Information We Collect</li>
              <li>3. How We Use Your Information</li>
              <li>4. Sharing and Disclosure</li>
              <li>5. Data Protection</li>
              <li>6. Intellectual Property</li>
              <li>7. Third-Party Links</li>
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

