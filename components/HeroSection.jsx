"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center z-10 max-w-4xl"
      >
        <motion.span
          variants={item}
          className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium"
        >
          🚀 Transforming Ideas into Digital Reality
        </motion.span>
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent leading-tight"
        >
          Navokta Innovation
        </motion.h1>
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          We engineer immersive digital experiences that captivate audiences,
          drive conversions, and scale with precision.
        </motion.p>
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-full font-semibold transition flex items-center justify-center gap-2"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full font-semibold transition border border-white/10"
          >
            Let's Collaborate
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-white transition"
      >
        <span className="text-sm">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
