"use client";
import { motion } from "framer-motion";
import Canvas3D from "@/components/Canvas3D";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CursorFollower from "@/components/CursorFollower";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="relative min-h-screen">
        <Canvas3D />
        <CursorFollower />

        {/* Hero Overlay */}
        <section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent"
          >
            Navokta Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12"
          >
            Where bold ideas become digital masterpieces. We engineer immersive
            experiences that captivate, convert, and scale.
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="glass px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition flex items-center gap-2"
          >
            Start a Project ↓
          </motion.a>
        </section>

        {/* Spacer for scroll */}
        <div className="h-screen" />

        {/* Contact Section */}
        <section
          id="contact"
          className="relative z-10 py-24 px-4 flex justify-center items-center"
        >
          <ContactForm />
        </section>

        <footer className="relative z-10 py-12 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Navokta Innovation. Crafted with
          precision.
        </footer>
      </main>
    </SmoothScrollProvider>
  );
}
