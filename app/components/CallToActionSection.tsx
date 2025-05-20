"use client";

import Image from 'next/image';
import Link from 'next/link';

const CallToActionSection = () => {
  return (
    <div className="w-full py-16 md:py-24 bg-[#032616] relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto relative">
          <div className="relative flex justify-center">
            {/* Card */}
            <div className="w-full md:w-[95%] bg-gradient-to-r from-white to-[#41e296] rounded-3xl border-2 border-blue-400 flex flex-col md:flex-row items-center px-6 py-8 md:py-10 md:px-12" style={{zIndex:1}}>
              <div className="flex-1 flex flex-col justify-center md:pr-8">
                <h2 className="text-[#222] font-['General_Sans'] text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
                  Your First Step Toward Real Impact
                </h2>
                <p className="text-[#222] text-sm md:text-base mb-8">
                  WORG is reshaping agriculture to feed millions and fuel a stronger Nigeria.<br/>
                  Come build with us.
                </p>
                <Link href="/contact" className="inline-block">
                  <button className="bg-[#13C476] text-white font-medium py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors text-sm">
                    Partner with WORG
                  </button>
                </Link>
              </div>
              <div className="flex-1 flex items-end justify-center relative mt-8 md:mt-0">
                {/* Empty div for spacing on mobile */}
              </div>
            </div>
            {/* Man Image - Overlapping Card */}
            <div className="absolute right-4 md:right-10 bottom-0 z-10 flex justify-end items-end w-[150px] sm:w-[200px] md:w-[260px] lg:w-[300px] h-full" style={{pointerEvents:'none'}}>
              <Image
                src="/assets/portrait-man-holding-organic-fruits.png"
                alt="Man holding organic fruits"
                width={300}
                height={400}
                className="object-contain w-full h-auto -mt-20 md:-mt-28 lg:-mt-32"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
