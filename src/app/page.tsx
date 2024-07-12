import Designs from "@/components/Designs";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <Projects />
      <Designs />
    </div>
  );
}
