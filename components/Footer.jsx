"use client";
import { motion } from "framer-motion";
// 👇 GitHub ko capital H ke sath likha hai
import { Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Navokta
          </h3>
          <p className="text-gray-400 max-w-sm mb-6">
            Engineering the next generation of digital experiences. Built with
            precision, designed for impact.
          </p>
          <div className="flex gap-4">
            {[Mail].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {["Home", "Services", "Programs", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-white transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
        © {year} Navokta Innovation. All rights reserved.
      </div>
    </footer>
  );
}
