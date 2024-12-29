"use client";

import Image from "next/image";
import heroImage from "/public/hero-1.svg";
import heroImageAlt from "/public/hero-1-sm.svg";
import heroImage2 from "/public/hero-2.svg";
import heroImage2Alt from "/public/hero-2-sm.svg";
import Header from "./Header";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden rounded-[34px]"
      id="home"
    >
      {/* Hero-1 Background Image */}
      <div className="relative w-full">
        {/* Default Hero Image for Larger Screens */}
        <div className="hidden sm:block sm:h-screen md:h-screen lg:h-auto">
          <Image
            src={heroImage}
            alt="Hero background"
            priority={true}
            className="w-full md:h-full sm:h-full object-cover"
          />
        </div>

        {/* Alternate Hero Image for Small Screens */}
        <div className="block sm:hidden h-screen">
          <Image
            src={heroImageAlt}
            alt="Hero background"
            priority={true}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-dark-overlay"></div>

      <div className="absolute inset-0">
        {/* Hero-2 Image Positioned Above Hero-1 (Large Screens) */}

        <div className="hidden sm:block">
          <Image
            src={heroImage2}
            alt="Hero foreground"
            priority={true}
            layout="fill"
            objectPosition="center bottom"
            className="relative h-full object-contain"
          />
        </div>

        {/* Alternate Hero-2 Image Positioned Above Hero-1 (Small Screens) */}
        <div className="block sm:hidden">
          <Image
            src={heroImage2Alt}
            alt="Hero foreground for small screens"
            priority={true}
            layout="fill"
            objectPosition="center bottom"
            className="relative h-full object-contain"
          />
        </div>
      </div>

      {/* Hero Header and Content */}
      <div className="absolute inset-0 flex flex-col  text-center">
        <Header />
        <motion.p
          className="mt-20 text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
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

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-4 items-center">
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
