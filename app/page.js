"use client";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CursorFollower from "@/components/CursorFollower";
import Canvas3D from "@/components/Canvas3D";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
        <Canvas3D />
        <CursorFollower />
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ProgramsSection />
        <ContactSection />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
