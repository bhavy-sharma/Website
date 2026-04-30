"use client";
import { motion } from "framer-motion";
import { Code, Globe, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Code size={28} />,
    title: "Web & App Development",
    desc: "High-performance, scalable applications built with cutting-edge tech stacks.",
  },
  {
    icon: <Globe size={28} />,
    title: "Immersive 3D Experiences",
    desc: "Interactive WebGL & Three.js experiences that redefine user engagement.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Growth & Marketing Tech",
    desc: "Data-driven strategies, automation, and conversion-optimized funnels.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Precision-engineered solutions tailored to elevate your digital
            presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-indigo-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
