'use client';
import Image from 'next/image';
import heroImageLarge from '/public/hero-1.svg';
import heroImage2Large from '/public/hero-2.svg';
import heroImageSmall from '/public/hero-1-sm.svg';
import heroImage2Small from '/public/hero-2-sm.svg';
import Header from './Header';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {  

  return (
    <div className="relative w-full overflow-hidden rounded-[34px]" id="home">
      {/* Hero-1 Background Image */}
      <div className="relative w-full lg:h-screen md:h-screen xl:h-full sm:h-screen h-screen">
          {/* Large Screen Image */}
          <Image
          src={heroImageLarge}
          alt="Hero background"
          priority={true}
          className="hidden sm:block w-full md:h-full object-cover"
        />
        {/* Small Screen Image */}
        <Image
          src={heroImageSmall}
          alt="Hero background small"
          priority={true}
          className="block sm:hidden w-full h-full object-cover"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-dark-overlay"></div>

      {/* Hero-2 Image Positioned Above Hero-1 */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-end">
               {/* Large Screen Image */}
               <Image
          src={heroImage2Large}
          alt="Hero foreground"
          priority={true}
          layout="fill"
          objectPosition="center bottom"
          className="hidden sm:block w-auto h-auto max-w-full max-h-full object-contain sm:object-scale-up lg:object-scale-up"
        />
        {/* Small Screen Image */}
        <Image
          src={heroImage2Small}
          alt="Hero foreground small"
          priority={true}
          layout="fill"
          objectPosition="center bottom"
          className="block sm:hidden w-auto h-auto max-w-full max-h-full object-contain sm:object-scale-up lg:object-scale-up"
        />

      </div>
      {/* Hero Header and Content */}
      <div className="absolute inset-0 flex flex-col  text-center">
        <Header />
        <motion.p
        className="mt-20 text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <span className="hidden md:block">
          Welcome to <br /> A.C.S AgentLink
        </span>
        <span className="block md:hidden">
          Welcome to A.C.S <br /> AgentLink
        </span>
      </motion.p>
      <motion.p
        className="mt-5 text-sm sm:text-base md:text-lg text-white font-light opacity-80 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span className="hidden sm:block">
          Elevate your firm with expert customer support
        </span>
        <span className="block sm:hidden">
          Elevate your firm with <br /> expert customer support
        </span>
      </motion.p>
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4 items-center">
          <Link
            href="/hire-an-agent"
            className="relative text-grayscale-white bg-primary rounded-full hover:rounded-full hover:text-grayscale-background py-5 px-8 ring-[rgba(250,133,7,0.1)]  ring-8"
          >
            Hire an agent
          </Link>
          <Link
            href="/become-an-agent"
            className="relative text-grayscale-white rounded-full hover:rounded-full hover:text-grayscale-background py-5 px-6 border"
          >
            Become an agent
          </Link>
        </div>
      </div>
    </div>
  );
}