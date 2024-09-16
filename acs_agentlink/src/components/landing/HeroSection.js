import Image from 'next/image';
import heroImage from '/public/hero-1.svg';
import heroImage2 from '/public/hero-2.svg';
import Header from './Header';
import Link from 'next/link';

export default function HeroSection() {

    
  return (
    <div className="relative w-full min-h-screen overflow-hidden rounded-[34px]" id="home">
      {/* Hero-1 Background Image */}
      <div className="relative w-full lg:h-full md:h-screen xl:h-full sm:h-screen h-screen">
        <Image
          src={heroImage}
          alt="Hero background"
          priority={true}
          className="w-full l:h-screen h-full lg:object-contain"
          style={{ objectFit: 'cover' }} 
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
      
     {/* Hero Header and Content */}
     <div className="mt-5 absolute inset-0 text-center justify-center h-full">
      <Header/>
        <p className="mt-20 text-5xl font-medium text-white">Elevate your prop firm with<br></br>expert support agents</p>
        <p className='mt-5 text-white font-light opacity-80'>Enhance customer support by hiring our pool of support agents</p>
        <div className='mt-16 justify-center flex gap-4 items-center'>
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