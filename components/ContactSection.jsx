"use client";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6 z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Innovate?
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            Drop us a message. Our team responds within 24 hours.
          </p>
        </motion.div>
        <ContactForm />
      </div>
    </section>
  );
}
