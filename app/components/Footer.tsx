"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black w-full md:py-[4rem] px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:py-[4rem] sm:flex-row gap-8 border-[#222] pb-8 items-start">
        {/* Logo and tagline */}
        <div className="flex flex-col items-start text-left gap-2 flex-1 min-w-[260px]">
          <Image src="/assets/logo-big-green.png" alt="WORG Logo" width={220} height={80} className="mb-2" />
        </div>
        {/* Grid for nav/contact/address */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left flex-[2] w-full">
          {/* Navigation */}
          <div>
            <ul className="text-white text-sm space-y-1">
              <li><Link href="#">About WORG</Link></li>
              <li><Link href="#">Our Model</Link></li>
              <li><Link href="#">Nationwide Impact</Link></li>
              <li><Link href="#">FAQs</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
          {/* Contact us */}
          <div>
            <span className="text-white font-semibold text-sm mb-2 block">Contact us</span>
            <ul className="text-gray-300 text-sm space-y-1">
              <li><Link href="mailto:info@worg.ng">info@worg.ng</Link></li>
              <li><Link href="#" className="text-green-400 underline">Download Pitch deck</Link></li>
            </ul>
          </div>
          {/* Address */}
          <div>
            <span className="text-white font-semibold text-sm mb-2 block">Address</span>
            <span className="text-gray-300 text-sm">No. 1b, Ibrahim Taiwo Road, Jos, Plateau State.</span>
          </div>
        </div>
      </div>
      {/* Bottom row */}
      <div className="max-w-3xl mx-auto pb-6 md:pb-0 flex flex-col md:pt-[4rem] md:pb-[4rem] sm:flex-row justify-between items-center pt-6 gap-4">
        <span className="text-xs text-gray-400 text-center">© Worg 2024. All rights Reserved</span>
        
        {/* Social Media Icons */}
        <div className="flex gap-4 order-first sm:order-none">
          <Link href="https://www.linkedin.com/company/worg-ltd" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Image src="/assets/Linkedin.png" alt="LinkedIn" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link href="https://x.com/worgng_ltd" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Image src="/assets/Twitter X.png" alt="Twitter" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link href="https://www.instagram.com/worg_ng_ltd/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Image src="/assets/Instagram.png" alt="Instagram" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link href="https://www.youtube.com/@WORGNG_Ltd" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Image src="/assets/Youtube.png" alt="YouTube" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-center">
          <Link href="/privacy" className="text-xs text-gray-300 hover:text-green-300">Privacy Policy</Link>
          <Link href="#" className="text-xs text-gray-300 hover:text-green-300">Terms and conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
