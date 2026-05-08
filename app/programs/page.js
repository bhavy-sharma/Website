"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import Link from "next/link";
import {
  Code2,
  Database,
  Smartphone,
  Terminal,
  ShieldCheck,
  Cpu,
  Globe,
  Server,
  BrainCircuit,
  FileText,
  ArrowRight,
  Clock,
  Users,
  Star,
} from "lucide-react";

// Categories for filtering
const categories = [
  { id: "all", name: "All Programs" },
  { id: "programming", name: "Programming" },
  { id: "web", name: "Web Development" },
  { id: "career", name: "Career & Tools" },
  { id: "dsa", name: "DSA & Logic" },
];

// Course Data
const courses = [
  {
    id: 1,
    title: "Python Basic",
    category: "programming",
    icon: <Code2 size={24} />,
    duration: "4 Weeks",
    level: "Beginner",
    students: "1.2k+",
    desc: "Master the fundamentals of Python syntax, loops, and functions.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 2,
    title: "Python Advance",
    category: "programming",
    icon: <Code2 size={24} />,
    duration: "6 Weeks",
    level: "Advanced",
    students: "800+",
    desc: "Dive into OOP, decorators, generators, and data handling libraries.",
    color: "from-yellow-500 to-orange-600",
  },
  {
    id: 3,
    title: "Java Basic",
    category: "programming",
    icon: <CoffeeIcon />,
    duration: "5 Weeks",
    level: "Beginner",
    students: "950+",
    desc: "Learn core Java concepts, JVM architecture, and basic OOPs.",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 4,
    title: "Java Advance",
    category: "programming",
    icon: <CoffeeIcon />,
    duration: "8 Weeks",
    level: "Advanced",
    students: "600+",
    desc: "Multithreading, Collections, Spring Boot basics, and Microservices intro.",
    color: "from-red-600 to-orange-600",
  },
  {
    id: 5,
    title: "QA Tools (Manual/Auto)",
    category: "career",
    icon: <ShieldCheck size={24} />,
    duration: "6 Weeks",
    level: "Intermediate",
    students: "500+",
    desc: "Selenium, Cypress, JIRA, and manual testing methodologies.",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 6,
    title: "MERN Stack Course",
    category: "web",
    icon: <Database size={24} />,
    duration: "12 Weeks",
    level: "Full Stack",
    students: "2.5k+",
    desc: "MongoDB, Express, React, Node.js. Build real-world projects.",
    color: "from-teal-400 to-cyan-500",
  },
  {
    id: 7,
    title: "Full Stack Course",
    category: "web",
    icon: <Globe size={24} />,
    duration: "16 Weeks",
    level: "Expert",
    students: "1.8k+",
    desc: "Comprehensive coverage of Frontend, Backend, DevOps, and Cloud.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 8,
    title: "DSA Course",
    category: "dsa",
    icon: <BrainCircuit size={24} />,
    duration: "10 Weeks",
    level: "Intermediate",
    students: "3k+",
    desc: "Data Structures & Algorithms in C++/Java. Crack coding interviews.",
    color: "from-purple-500 to-violet-600",
  },
  {
    id: 9,
    title: "Basic Computer Course",
    category: "career",
    icon: <FileText size={24} />,
    duration: "4 Weeks",
    level: "Beginner",
    students: "5k+",
    desc: "MS Office, Internet basics, Email etiquette, and file management.",
    color: "from-gray-500 to-slate-600",
  },
  {
    id: 10,
    title: "Microsoft Tools Course",
    category: "career",
    icon: <FileText size={24} />,
    duration: "6 Weeks",
    level: "Intermediate",
    students: "1.5k+",
    desc: "Advanced Excel, PowerPoint animations, Word formatting, Teams.",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 11,
    title: "Frontend Web Dev",
    category: "web",
    icon: <Globe size={24} />,
    duration: "8 Weeks",
    level: "Intermediate",
    students: "2k+",
    desc: "HTML5, CSS3, Tailwind, JavaScript, React.js deep dive.",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 12,
    title: "Backend Web Dev",
    category: "web",
    icon: <Server size={24} />,
    duration: "8 Weeks",
    level: "Intermediate",
    students: "1.2k+",
    desc: "Node.js, Express, APIs, Database design, Authentication.",
    color: "from-green-600 to-emerald-700",
  },
  {
    id: 13,
    title: "App Development",
    category: "web",
    icon: <Smartphone size={24} />,
    duration: "10 Weeks",
    level: "Advanced",
    students: "900+",
    desc: "React Native or Flutter. Build iOS and Android apps from scratch.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: 14,
    title: "Server Side Rendering",
    category: "web",
    icon: <Server size={24} />,
    duration: "4 Weeks",
    level: "Advanced",
    students: "400+",
    desc: "Next.js 14+, App Router, SEO optimization, Server Actions.",
    color: "from-white to-gray-400",
  },
  {
    id: 15,
    title: "Logical Reasoning",
    category: "dsa",
    icon: <BrainCircuit size={24} />,
    duration: "4 Weeks",
    level: "Beginner",
    students: "2.2k+",
    desc: "Puzzles, pattern recognition, and aptitude for placement prep.",
    color: "from-orange-400 to-red-400",
  },
];

// Helper Icon for Java
function CoffeeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
      <path d="M6 2v2" />
    </svg>
  );
}

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

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
              Learn from Industry Experts
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent">
              Our Programs
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Structured learning paths designed to take you from beginner to
              professional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="relative z-10 py-10 px-6 sticky top-20 bg-[#050505]/80 backdrop-blur-md border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredCourses.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No courses found in this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center border border-indigo-500/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-400 mb-8">
            We also offer custom corporate training and private mentorship.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-full font-semibold transition"
          >
            Contact Us <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Individual Course Card Component
function CourseCard({ course, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col h-full"
    >
      {/* Background Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div
            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center text-white shadow-lg`}
          >
            {course.icon}
          </div>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300">
            {course.level}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2">{course.desc}</p>

        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-500 border-t border-white/5 pt-4">
            <span className="flex items-center gap-1">
              <Clock size={14} /> {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users size={14} /> {course.students}
            </span>
          </div>


          <Link
            href={`/programs/${course.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition font-medium text-sm flex items-center justify-center gap-2 group-hover:border-indigo-500/30"
          >
            View Details
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
