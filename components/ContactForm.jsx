"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail } from "lucide-react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    // Yaha baad me apna API call laga dena (Resend, Supabase, EmailJS etc.)
    console.log("✅ Form Submitted:", data);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-8 max-w-md w-full mx-auto"
    >
      <h3 className="text-2xl font-bold mb-2">Let's Build Something Iconic</h3>
      <p className="text-gray-400 mb-6">
        Reach out directly or drop a message.
      </p>

      <div className="flex flex-wrap gap-4 mb-6 text-sm">
        <a
          href="tel:+919876543210"
          className="flex items-center gap-2 hover:text-indigo-400 transition"
        >
          <Phone size={16} /> +91 98765 43210
        </a>
        <a
          href="mailto:hello@navokta.com"
          className="flex items-center gap-2 hover:text-indigo-400 transition"
        >
          <Mail size={16} /> hello@navokta.com
        </a>
      </div>

      {submitted ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-400 font-medium text-center"
        >
          ✅ Message received! We'll contact you within 24h.
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-white placeholder-gray-500"
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-500 transition px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50 text-white"
          >
            <Send size={16} /> {isSubmitting ? "Sending..." : "Get in Touch"}
          </button>
        </form>
      )}
    </motion.div>
  );
}
