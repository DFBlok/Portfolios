import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Projects />
      <Footer />
    </div>
  );
}
