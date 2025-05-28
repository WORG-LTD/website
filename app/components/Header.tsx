"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-10 flex justify-between items-center bg-black rounded-t-lg">
      <motion.div 
        className="hidden lg:block logo"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 }
        }}
      >
        <Link href="/">
          <Image
            src="/assets/logo-white.png"
            alt="WORG Logo"
            width={100}
            height={30}
            className="object-contain"
          />
        </Link>
      </motion.div>
      
      <nav className="hidden lg:flex space-x-6 font-['General_Sans']">
        <Link href="/" className="text-white hover:text-gray-300 text-sm">Home</Link>
        <Link href="/about" className="text-white hover:text-gray-300 text-sm">About WORG</Link>
        <Link href="/our-model" className="text-white hover:text-gray-300 text-sm">Our Model</Link>
        <Link href="/method" className="text-white hover:text-gray-300 text-sm">The WORG Method</Link>
        <Link href="/impact" className="text-white hover:text-gray-300 text-sm">Our Impact</Link>
        <Link href="/faqs" className="text-white hover:text-gray-300 text-sm">FAQs</Link>
        <Link href="/contact" className="text-white hover:text-gray-300 text-sm">Contact</Link>
      </nav>
      
      <div className="hidden lg:block">
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md text-sm">
          Talk to Us
        </button>
      </div>
    </header>
  );
};

export default Header;
