"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import {
  Code,
  Video,
  PenTool,
  Map,
  Share2,
  Music,
  Trophy,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    icon: <Code size={32} />,
    desc: "Custom websites & web apps built with Next.js, React, and Node. Fast, secure, and scalable.",
    features: ["E-commerce Solutions", "Custom Dashboards", "API Integration"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Video Editing",
    icon: <Video size={32} />,
    desc: "Cinematic editing for YouTube, Reels, and Ads. Color grading, VFX, and sound design included.",
    features: ["Short-form Content", "Documentary Style", "Motion Graphics"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Content Writing",
    icon: <PenTool size={32} />,
    desc: "SEO-optimized blogs, copywriting, and technical documentation that converts readers into customers.",
    features: ["Blog Posts", "Website Copy", "Whitepapers"],
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: 4,
    title: "Your Trip Planner",
    icon: <Map size={32} />,
    desc: "Personalized itineraries, budget planning, and hidden gem discoveries for your next adventure.",
    features: ["Itinerary Design", "Budget Optimization", "Local Guides"],
    color: "from-orange-500 to-yellow-400",
  },
  {
    id: 5,
    title: "Social Media Marketing",
    icon: <Share2 size={32} />,
    desc: "Data-driven strategies to grow your audience. Content calendars, ad management, and analytics.",
    features: ["Instagram Growth", "Ad Campaigns", "Brand Strategy"],
    color: "from-red-500 to-rose-400",
  },
  {
    id: 6,
    title: "Live Music Concert",
    icon: <Music size={32} />,
    desc: "End-to-end event management for concerts. Artist booking, stage setup, and ticketing solutions.",
    features: ["Artist Management", "Stage Production", "Ticketing System"],
    color: "from-indigo-500 to-violet-400",
  },
  {
    id: 7,
    title: "Hackathon Organiser",
    icon: <Trophy size={32} />,
    desc: "We organize large-scale hackathons. Platform setup, judge coordination, and participant engagement.",
    features: ["Platform Dev", "Sponsorship Mgmt", "Judge Coordination"],
    color: "from-slate-500 to-gray-400",
  },
];

export default function ServicesPage() {
  return (
    
      <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
        
        <CursorFollower />
        <Navbar />

        {/* Header Section */}
        <section className="relative z-10 pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
                What We Do Best
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent">
                Our Expertise
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                From code to content, events to entertainment. We provide
                end-to-end digital solutions tailored to your vision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-32 px-6">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center border border-indigo-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to start your project?
            </h2>
            <p className="text-gray-400 mb-8">
              Let's discuss how we can help you achieve your goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-full font-semibold transition"
            >
              Get a Quote <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <Footer />
      </main>
    
  );
}

// Individual Card Component
function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group relative glass rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      <div className="relative z-10">
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          {service.icon}
        </div>

        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{service.desc}</p>

        <ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <CheckCircle2 size={14} className="text-indigo-400" />
              {feature}
            </li>
          ))}
        </ul>

        <button className="flex items-center gap-2 text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors">
          Learn More{" "}
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </motion.div>
  );
}
