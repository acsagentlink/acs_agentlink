"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import heroImage from '/public/hero-1.png';
import heroImage2 from '/public/hero-2.png';

export default function HeroSection() {

    
  return (
    <div className="relative w-full min-h-screen overflow-hidden rounded-[50px]">
      {/* Hero-1 Background Image */}
      <div className="relative w-full lg:h-full md:h-screen xl:h-full sm:h-screen h-screen">
        <Image
          src={heroImage}
          alt="Hero background"
          priority={true}
          className="w-full l:h-screen h-full lg:object-contain" // On large screens, use contain
          style={{ objectFit: 'cover' }} // On smaller screens, use cover for a good fit
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-dark-overlay"></div>

      {/* Hero-2 Image Positioned Above Hero-1 */}
      <Image
        src={heroImage2}
        alt="Hero foreground"
        layout="fill"
        objectFit="contain" 
        objectPosition="center bottom" 
        priority={true}
        className="absolute"
      />
      
     {/* Text Content on Top of Images */}
     <div className="absolute inset-0 flex text-center justify-center h-full">
        <p className="text-6xl font-medium text-white">Elevate your prop firm with<br></br>expert support agents</p>
      </div>
    </div>
  );
}