"use client";

import React from 'react';

const WorgMethodSection = () => {
  return (
    <div className="w-full py-12 md:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mb-10 md:mb-16">
          <div className="text-[#13C476] text-sm md:text-base mb-3">The Process: 3-Point Journey</div>
          <h2 className="text-black font-['General_Sans'] text-2xl md:text-3xl lg:text-4xl font-medium mb-3">
            From Seed to Success:<br />
            The WORG Method
          </h2>
          <p className="text-[#79797A] text-sm md:text-base">
            Our system is designed to scale across regions and deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Research */}
          <div className="bg-[#F7F7F7] rounded-3xl p-6 md:p-8">
            <div className="flex items-center mb-4">
              <div className="bg-[#EFF8FF] rounded-full p-2 mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 8h-3V6.5C17 4.01 14.99 2 12.5 2H8v2h4.5C13.88 4 16 6.12 16 8.5V10h4v7h-1v-1c0-0.55-0.45-1-1-1s-1 0.45-1 1v1h-6v-1c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H5v-7h6V8H5C3.9 8 3 8.9 3 10v10c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2V10c0-1.1-0.9-2-2-2z" fill="#13C476"/>
                </svg>
              </div>
              <h3 className="font-medium text-lg">Research</h3>
            </div>
            <p className="text-sm text-[#79797A]">
              We analyze land, climate, and markets to plan smarter farming systems.
            </p>
          </div>

          {/* Quality */}
          <div className="bg-[#F7F7F7] rounded-3xl p-6 md:p-8">
            <div className="flex items-center mb-4">
              <div className="bg-[#EFF8FF] rounded-full p-2 mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#13C476"/>
                </svg>
              </div>
              <h3 className="font-medium text-lg">Quality</h3>
            </div>
            <p className="text-sm text-[#79797A]">
              Standardized crops, better yields, and route-to-export market systems.
            </p>
          </div>

          {/* Production */}
          <div className="bg-[#F7F7F7] rounded-3xl p-6 md:p-8">
            <div className="flex items-center mb-4">
              <div className="bg-[#EFF8FF] rounded-full p-2 mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z" fill="#13C476"/>
                </svg>
              </div>
              <h3 className="font-medium text-lg">Production</h3>
            </div>
            <p className="text-sm text-[#79797A]">
              We support full-cycle farming, from planting to harvest with tracks, tools, and training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorgMethodSection;
