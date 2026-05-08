// app/programs/[slug]/ProgramDetailClient.js
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import RazorpayButton from "@/components/RazorpayButton";
import RazorpayScript from "@/components/RazorpayScript";
import {
  Code2,
  Coffee,
  Database,
  ShieldCheck,
  Globe,
  Server,
  BrainCircuit,
  FileText,
  ArrowRight,
  ChevronRight,
  Clock,
  Users,
  Star,
  BookOpen,
  CheckCircle2,
  Zap,
  Award,
} from "lucide-react";

// Icon mapping
const iconMap = {
  Code2: Code2,
  Coffee: Coffee,
  Database: Database,
  ShieldCheck: ShieldCheck,
  Globe: Globe,
  Server: Server,
  BrainCircuit: BrainCircuit,
  FileText: FileText,
  BookOpen: BookOpen,
};

export default function ProgramDetailClient({ program, slug }) {
  const [enrolled, setEnrolled] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const IconComponent = iconMap[program.icon] || BookOpen;

  // Check if already enrolled on component mount
  useEffect(() => {
    const enrollments = JSON.parse(localStorage.getItem("enrollments") || "[]");
    const isEnrolled = enrollments.some(e => e.programId === program.id);
    setEnrolled(isEnrolled);
  }, [program.id]);

  const handlePaymentSuccess = (paymentData) => {
    console.log("Payment Success:", paymentData);
    setEnrolled(true);
    setShowSuccess(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handlePaymentError = (error) => {
    console.error("Payment Error:", error);
  };

  return (
    <RazorpayScript>
      <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
        <CursorFollower />
        <Navbar />

        {/* Success Toast */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
          >
            <CheckCircle2 size={20} />
            Successfully Enrolled!
          </motion.div>
        )}

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
                href="/programs"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition group"
              >
                <ChevronRight className="rotate-180" size={16} />
                <span>Back to Programs</span>
              </Link>

              <div className="grid lg:grid-cols-3 gap-12">
                {/* Left Column */}
                <div className="lg:col-span-2">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                    <IconComponent size={32} />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {program.title}
                  </h1>
                  <p className="text-xl text-gray-400 mb-6">
                    {program.shortDesc}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                    <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-sm">
                      <Clock size={16} className="text-indigo-400" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-sm">
                      <Users size={16} className="text-indigo-400" />
                      {program.students} students
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-sm">
                      <Star size={16} className="text-yellow-400" />
                      {program.level}
                    </span>
                  </div>
                </div>

                {/* Right Column - Pricing Card */}
                <div className="lg:col-span-1">
                  <div className="glass rounded-2xl p-6 border border-white/10 sticky top-24">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold">₹{program.price}</div>
                      {program.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">
                          ₹{program.originalPrice}
                        </div>
                      )}
                      {program.discount && (
                        <div className="text-sm text-green-400 mt-1">
                          {program.discount}% OFF
                        </div>
                      )}
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {program.features && program.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 size={16} className="text-indigo-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {!enrolled ? (
                      <RazorpayButton
                        program={program}
                        onSuccess={handlePaymentSuccess}
                        onError={handlePaymentError}
                      />
                    ) : (
                      <button
                        disabled
                        className="w-full bg-green-600 px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 cursor-default"
                      >
                        <CheckCircle2 size={20} />
                        Already Enrolled
                      </button>
                    )}

                    <p className="text-xs text-gray-500 text-center mt-4">
                      🔒 Secure payment via Razorpay • 7-day refund policy
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Description Section */}
        <section className="relative z-10 py-10 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">About This Course</h2>
              <div className="prose prose-invert prose-lg max-w-none">
                {program.fullDescription && program.fullDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-300 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* What You'll Learn */}
        {program.whatYouLearn && (
          <section className="relative z-10 py-20 px-6 bg-white/5">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  By the end of this course, you'll be able to
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4">
                {program.whatYouLearn.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 p-4 glass rounded-xl border border-white/5"
                  >
                    <Zap size={20} className="text-indigo-400" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        {program.features && (
          <section className="relative z-10 py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Course Features</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Everything you need to succeed
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {program.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass rounded-xl p-6 text-center border border-white/5"
                  >
                    <Award size={32} className="text-indigo-400 mx-auto mb-3" />
                    <p className="text-gray-300">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </RazorpayScript>
  );
}