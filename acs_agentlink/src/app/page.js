import HeroSection from "@/components/landing/HeroSection";
import HeroSubSection from "@/components/landing/HeroSubSection";

export default function Home() {
  return (
    <main className="bg-grayscale-white flex flex-col items-center justify-start w-full min-h-screen">
      <HeroSection/>
      <HeroSubSection/>
    </main>
  );
}
