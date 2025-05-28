"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const restartAnimation = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setVideoEnded(false);
    }
  };

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-black relative overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] lg:h-[500px]">
        {/* Animated Headline Overlay */}
        {/* <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 z-20 text-white text-3xl md:text-5xl font-bold text-center w-full max-w-2xl transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg"
        >
          Empowering Nigeria's Agriculture
        </motion.h1> */}

        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            ref={videoRef}
            className="w-full h-full object-contain sm:object-cover object-center scale-100 sm:scale-[1.1] md:scale-[1.05] lg:scale-100"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            onPlay={() => setHeroVisible(true)}
          >
            <source src="/background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Restart animation button at the bottom */}
        {videoEnded && (
          <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
            <button 
              onClick={restartAnimation}
              className="bg-[#1E1E1E] text-white text-sm px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#333333] transition-colors"
            >
              <span>Restart animation</span>
              <Image 
                src="/assets/play.png" 
                alt="Play icon" 
                width={16} 
                height={16} 
                className="ml-2"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
