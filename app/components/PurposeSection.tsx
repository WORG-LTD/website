"use client";

import Image from 'next/image';

const PurposeSection = () => {
  return (
    <div className="w-full py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-[#13C476] font-['General_Sans'] text-2xl md:text-3xl lg:text-4xl font-medium mb-12 md:mb-16">
          Our Purpose &<br />
          Path Forward
        </h2>
        
        <div className="space-y-12 md:space-y-20">
          {/* First Vision Statement */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <h3 className="font-medium text-lg md:text-xl mb-4">Vision Statement</h3>
              <p className="text-[#79797A] text-sm md:text-base">
                To be a leading catalyst and foster sustainable 
                development, driving innovation and prosperity for a
                resilient future.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="rounded-3xl overflow-hidden bg-[#EFF8FF] p-3">
                <Image
                  src="/assets/lady-smiling.png"
                  alt="Smiling woman with tablet"
                  width={500}
                  height={350}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
          
          {/* Second Vision Statement */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="md:w-1/2 order-2">
              <h3 className="font-medium text-lg md:text-xl mb-4">Vision Statement</h3>
              <p className="text-[#79797A] text-sm md:text-base">
                At WORG, we are committed to transforming lives
                through inclusive solutions that address community
                challenges, promote economic growth, and inspire
                sustainable practices across multiple sectors.
              </p>
            </div>
            <div className="md:w-1/2 order-1">
              <div className="rounded-3xl overflow-hidden bg-[#EFF8FF] p-3">
                <Image
                  src="/assets/man-with-veggies.png"
                  alt="Man with vegetables"
                  width={500}
                  height={350}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurposeSection;
