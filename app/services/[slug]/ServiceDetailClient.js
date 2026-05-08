"use client";
import { motion } from "framer-motion";
import Link from "next/link";
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
  ChevronRight,
  Mail,
} from "lucide-react";

// Icon mapping
const iconMap = {
  Code: Code,
  Video: Video,
  PenTool: PenTool,
  Map: Map,
  Share2: Share2,
  Music: Music,
  Trophy: Trophy,
};

export default function ServiceDetailClient({ service, slug }) {
  const IconComponent = iconMap[service.icon] || Code;
  
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      <CursorFollower />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition group"
            >
              <ChevronRight className="rotate-180" size={16} />
              <span>Back to Services</span>
            </Link>
            
            {/* Icon & Title */}
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.heroGradient} flex items-center justify-center text-white mb-6 shadow-lg`}>
              <IconComponent size={40} />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent">
              {service.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              {service.shortDesc}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Full Description */}
      <section className="relative z-10 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {service.fullDescription.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-300 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Our Process Section */}
      {service.process && service.process.length > 0 && (
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                How we work to deliver exceptional results for your project
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {service.process.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass rounded-xl p-6 text-center border border-white/5"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Features Grid */}
      {service.features && service.features.length > 0 && (
        <section className="relative z-10 py-20 px-6 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive solutions tailored to your needs
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 p-6 glass rounded-xl border border-white/5"
                >
                  <CheckCircle2 className="text-indigo-400 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Technologies & Tools */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Industry-leading tools and platforms
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {service.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-4 py-2 glass rounded-full text-sm border border-white/10"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Past Projects */}
      {service.projects && service.projects.length > 0 && (
        <section className="relative z-10 py-20 px-6 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Real projects that delivered real results
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {service.projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass rounded-xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400">Got questions? We've got answers</p>
            </motion.div>
            
            <div className="space-y-4">
              {service.faq.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass rounded-xl p-6 border border-white/5"
                >
                  <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                  <p className="text-gray-400">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center border border-indigo-500/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-gray-400 mb-8">
            Let's discuss your project and how we can help bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-full font-semibold transition"
            >
              {service.ctaText || "Get Started"} <ArrowRight size={18} />
            </Link>
            
            <Link
              href="/contact?inquiry=question"
              className="inline-flex items-center gap-2 px-8 py-4 glass border border-white/10 hover:bg-white/10 rounded-full font-semibold transition"
            >
              Ask a Question <Mail size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}