"use client";

import Image from 'next/image';
import React from 'react';

const WorgMethodSection = () => {
  return (
    <div className="w-full py-12 md:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 w-full">
          {/* Left: Heading/Description */}
          <div className="flex-1 min-w-[290px] max-w-2xl mb-8 md:mb-0">
            <div className="text-[#13C476] text-sm md:text-base mb-3">The Process: 3-Point Journey</div>
            <h2 className="text-black font-['General_Sans'] text-2xl md:text-3xl lg:text-4xl font-medium mb-3">
              From Seed to Success:<br />
              The WORG Method
            </h2>
            <p className="text-[#79797A] text-sm md:text-base">
              Our system is designed to scale across regions and deliver measurable results.
            </p>
          </div>

          {/* Right: Cards stacked */}
          <div className="flex flex-col md:flex-row gap-2 flex-1 w-full">
            {/* Quality on the left, vertically centered */}
            <div className="flex-1 flex items-center justify-center md:justify-center mb-6 md:mb-0">
              <div className="bg-[#13C4761A] rounded-3xl p-6 md:p-8 shadow-sm max-w-xs w-[200px]">
                <div className="flex items-center mb-4">
                  <div className="bg-[#EFF8FF] rounded-full p-2 mr-3 flex items-center justify-center" style={{ width: 40, height: 40 }}>
                    <Image src="/assets/quality.png" alt="Quality" width={24} height={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-[black]">Quality</h3>
                </div>
                <p className="text-sm text-[#032616]">
                  Standardized crops, better yields, and route-to-export market systems.
                </p>
              </div>
            </div>
            {/* Research and Production stacked on the right */}
            <div className="flex flex-col gap-8 flex-1 items-start md:items-start md:-ml-12">
              <div className="bg-[#13C4761A] rounded-3xl p-6 md:p-8 max-w-xs w-[200px] shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-[#EFF8FF] rounded-full p-2 mr-3 flex items-center justify-center" style={{ width: 40, height: 40 }}>
                    <Image src="/assets/research.png" alt="Research" width={24} height={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-[black]">Research</h3>
                </div>
                <p className="text-sm text-[#032616]">
                  We analyze land, climate, and markets to plan smarter farming systems.
                </p>
              </div>
              <div className="bg-[#13C4761A] rounded-3xl p-6 md:p-8 max-w-xs w-[200px] shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-[#EFF8FF] rounded-full p-2 mr-3 flex items-center justify-center" style={{ width: 40, height: 40 }}>
                    <Image src="/assets/production.png" alt="Production" width={24} height={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-[black]">Production</h3>
                </div>
                <p className="text-sm text-[#032616]">
                  We support full-cycle farming, from planting to harvest with tracks, tools, and training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorgMethodSection;
