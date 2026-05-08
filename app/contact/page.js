"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 // In your ContactPage component:

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");

  // --- New Code Starts Here ---
  try {
    // Replace this URL with the Web App URL you copied from Google Apps Script
    // ✅ Using environment variable
      const GOOGLE_SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

    const response = await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors", // This mode helps avoid CORS issues with the Google script
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // With 'no-cors' mode, we can't reliably check response.ok.
    // We'll assume success if no error is thrown by the fetch itself.
    console.log("Form submitted successfully (assumed)");
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);

  } catch (error) {
    console.error("Error submitting form:", error);
    setStatus("error");
    setTimeout(() => setStatus("idle"), 3000);
  }
  // --- New Code Ends Here ---

  // ... (delete the old setTimeout simulation code)
};

  return (
    
      <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
        
        <CursorFollower />
        <Navbar />

        {/* Header Section */}
        <section className="relative z-10 pt-40 pb-10 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
                Get in Touch
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent">
                Let's Talk Business
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Have a project in mind? Fill out the form below or reach out
                directly. We respond within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="relative z-10 py-10 px-6 pb-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
            {/* Left Column: Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl border border-white/5"
              >
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email Us</p>
                      <a
                        href="mailto:hello@navokta.com"
                        className="text-white hover:text-indigo-400 transition"
                      >
                        hello@navokta.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Call Us</p>
                      <a
                        href="tel:+919876543210"
                        className="text-white hover:text-indigo-400 transition"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Visit Us</p>
                      <p className="text-white">
                        Navokta Innovation HQ,
                        <br />
                        Tech Park, Bangalore, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-4">
                    Follow our socials
                  </p>
                  <div className="flex gap-4">
                    {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-gray-400 hover:text-white transition text-sm"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Form */}
            <div className="md:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-8 md:p-10 rounded-2xl border border-white/5 relative overflow-hidden"
              >
                {status === "success" ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050505]/90 backdrop-blur-sm z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-4"
                    >
                      <CheckCircle2 size={40} />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-400">
                      We'll get back to you shortly.
                    </p>
                  </div>
                ) : null}

                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 ml-1">
                        Your Name
                      </label>
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-white placeholder-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 ml-1">
                        Email Address
                      </label>
                      <input
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-white placeholder-gray-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">
                      Subject
                    </label>
                    <input
                      required
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      type="text"
                      placeholder="Project Inquiry / Collaboration / Job Application"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-white placeholder-gray-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project details..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-white placeholder-gray-600 resize-none"
                    />
                  </div>

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:cursor-not-allowed transition px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 text-white shadow-lg shadow-indigo-500/20"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />{" "}
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    
  );
}
