"use client";

import Image from 'next/image';

const AgroEcosystemSection = () => {
  return (
    <div className="w-full py-12 md:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="text-[#13C476] font-['General_Sans'] text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
            A Nationwide<br />
            Agro-Ecosystem
          </h2>
          <p className="text-[#79797A] text-sm md:text-base mb-12">
            We're not running farms. We're running a system that enables farming to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-8">
            {/* Farmer Clusters */}
            <div className="flex items-start space-x-4">
              <div className="bg-gray-50 rounded-full p-2 mt-1">
                <span className="flex items-center justify-center h-6 w-6 text-[#13C476] font-bold">01</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Farmer Clusters</h3>
                <p className="text-sm text-[#79797A]">
                  We organize and empower smallholder farmers with training, inputs, and access to markets.
                </p>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="flex items-start space-x-4">
              <div className="bg-gray-50 rounded-full p-2 mt-1">
                <span className="flex items-center justify-center h-6 w-6 text-[#13C476] font-bold">02</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Infrastructure</h3>
                <p className="text-sm text-[#79797A]">
                  We provide land mapping, equipment, aggregation centers, and storage hubs.
                </p>
              </div>
            </div>

            {/* Standardization */}
            <div className="flex items-start space-x-4">
              <div className="bg-gray-50 rounded-full p-2 mt-1">
                <span className="flex items-center justify-center h-6 w-6 text-[#13C476] font-bold">03</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Standardization</h3>
                <p className="text-sm text-[#79797A]">
                  We ensure all produce meets quality benchmarks — locally and for export.
                </p>
              </div>
            </div>

            {/* Technology */}
            <div className="flex items-start space-x-4">
              <div className="bg-gray-50 rounded-full p-2 mt-1">
                <span className="flex items-center justify-center h-6 w-6 text-[#13C476] font-bold">04</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Technology</h3>
                <p className="text-sm text-[#79797A]">
                  We build platforms to monitor yields, optimize processes, and drive policy through data.
                </p>
              </div>
            </div>

            {/* Finance */}
            <div className="flex items-start space-x-4">
              <div className="bg-gray-50 rounded-full p-2 mt-1">
                <span className="flex items-center justify-center h-6 w-6 text-[#13C476] font-bold">05</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Finance</h3>
                <p className="text-sm text-[#79797A]">
                  We create pathways for investments and partnerships across the value chain.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <div className="rounded-2xl overflow-hidden bg-[#F1F9F2] p-2">
                <Image
                  src="/assets/tractor.png"
                  alt="Tractor in field"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="rounded-2xl overflow-hidden bg-[#F1F9F2] p-2 h-full">
                <Image
                  src="/assets/hands.png"
                  alt="Hands with crop"
                  width={240}
                  height={220}
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="rounded-2xl overflow-hidden bg-[#F1F9F2] p-2 h-full">
                <Image
                  src="/assets/lady-standing.png"
                  alt="Lady standing in field"
                  width={240}
                  height={220}
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgroEcosystemSection;
