"use client";

import Image from 'next/image';

const FeedingNation = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full py-6 sm:py-8 md:py-12">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-3 col-span-5 bg-[#F1F9F2] px-4 sm:px-6 md:px-8 lg:px-[46px] py-6 sm:py-8 md:py-[38px] rounded-[20px] md:rounded-[32px]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-medium font-['General_Sans'] text-[#13C476] mb-4">
              Feeding the Nation,<br />
              Fueling the Future
            </h2>
            <p className="text-sm sm:text-base text-[#79797A] mb-6">
              WORG is building Nigeria's largest agri-ecosystem. From seed to market, 
              we empower farmers, secure food, and grow the economy.
            </p>
            <button className="bg-[#13C476] hover:bg-[#13C476] text-white font-medium py-2 px-6 rounded-md">
              Partner with us
            </button>
          </div>
          
          <div className="md:col-span-2 col-span-5 bg-[#EDEDED] px-4 sm:px-6 md:px-8 lg:px-[46px] py-6 sm:py-8 md:py-[38px] rounded-[20px] md:rounded-[32px] shadow-sm">
            <div className="flex flex-row sm:flex-col md:flex-col items-start justify-between">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-medium text-[12px] sm:text-2xl md:text-[24px] font-[600] font-['General_Sans'] text-[#000000] mb-2">WORG Executive Pitch Deck</h3>
                  <p className="text-[10px] sm:text-lg md:text-[20px] text-[#000000]">
                    Get the full breakdown of our strategy, model, and impact roadmap.
                  </p>
                </div>
              </div>
              
              <div className="hidden md:flex justify-center mt-4">
                <Image 
                  src="/assets/worg-pich-deck.png" 
                  alt="Pitch deck preview" 
                  width={150} 
                  height={120}
                  className="mb-4"
                />
              </div>
              
              <button className="w-[200px] text-[8px] py-1 px-4 mt-4 sm:mt-8 md:mt-0 border border-[#13C476] text-[#13C476] font-[600] font-['General_Sans'] sm:w-full md:w-auto rounded-md hover:bg-[#13C476] hover:text-white lg:self-center  md:self-end">
                Download now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedingNation;
