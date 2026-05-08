"use client";
import CursorFollower from "@/components/CursorFollower";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
        <CursorFollower />
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ProgramsSection />
        <ContactSection />
        <Footer />
      </main>
  );
}
