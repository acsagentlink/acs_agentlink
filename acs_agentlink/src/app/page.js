import Extras from "@/components/landing/Extras";
import FAQs from "@/components/landing/FAQs";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HeroSubSection from "@/components/landing/HeroSubSection";
import Services from "@/components/landing/Services";

export default function Home() {
  return (
    <main className="bg-grayscale-white flex flex-col items-center w-full min-h-screen">
      <HeroSection/>
      <HeroSubSection/>
      <Features/>
      <Services/>
      <FAQs/>
      <Extras/>
      <Footer/>
    </main>
  );
}
