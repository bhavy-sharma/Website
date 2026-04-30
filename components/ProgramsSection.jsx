"use client";
import { motion } from "framer-motion";
import { Play, Clock, Users } from "lucide-react";

const programs = [
  {
    title: "Full-Stack Mastery 2026",
    duration: "12 Weeks",
    seats: "50",
    tag: "Advanced",
  },
  {
    title: "3D Web & Creative Coding",
    duration: "8 Weeks",
    seats: "30",
    tag: "Intermediate",
  },
  {
    title: "AI Integration Bootcamp",
    duration: "6 Weeks",
    seats: "40",
    tag: "Beginner Friendly",
  },
];

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className="relative py-32 px-6 z-10 bg-gradient-to-b from-transparent to-black/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Online Programs
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn directly from industry experts. Live projects, real-time
            mentorship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-indigo-500/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/20">
                  {prog.tag}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 transition">
                  <Play
                    size={18}
                    className="ml-1 text-gray-400 group-hover:text-indigo-400"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{prog.title}</h3>
              <div className="flex gap-4 text-sm text-gray-400 mb-6">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {prog.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={14} /> {prog.seats} Seats
                </span>
              </div>
              <button className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition font-medium text-sm">
                View Curriculum
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
