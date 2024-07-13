import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <Projects />
      <Footer />
    </div>
  );
}
