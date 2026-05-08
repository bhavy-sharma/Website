"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  Sparkles,
  Rocket,
  Zap,
  Circle,
} from "lucide-react";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

export default function HeroSection() {
  const { scrollY } = useScroll();

  const [mounted, setMounted] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Mouse move effect
  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [mounted]);

  // Stable particles (NO hydration issue)
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: `${Math.random() * 3 + 1}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const opacity = useTransform(
    scrollY,
    [0, 300],
    [1, 0]
  );

  const orbX = useTransform(
    scrollY,
    [0, 500],
    [0, -100]
  );

  const orbY = useTransform(
    scrollY,
    [0, 500],
    [0, -50]
  );

  // Prevent SSR hydration mismatch
  if (!mounted) return null;

  const container = {
    hidden: { opacity: 0 },

    show: {
      opacity: 1,

      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden"
      style={{
        perspective: "1000px",
      }}
    >
      {/* Mouse Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(79, 70, 229, 0.15) 0%,
            rgba(0, 0, 0, 0) 50%
          )`,
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-indigo-500/20 pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Glowing Orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(79,70,229,0.3), rgba(139,92,246,0.1), transparent)",

          x: orbX,
          y: orbY,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center z-10 max-w-4xl"
        style={{ y, opacity }}
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(79,70,229,0.2)",
              "0 0 0 10px rgba(79,70,229,0)",
              "0 0 0 0 rgba(79,70,229,0.2)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Sparkles className="w-4 h-4" />

          <span>
            🚀 Transforming Ideas into Digital
            Reality
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight"
        >
          {["Navokta", "Innovation"].map(
            (word, i) => (
              <motion.span
                key={i}
                className="inline-block overflow-hidden mr-4"
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5 + i * 0.2,
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <span
                  className={`inline-block bg-gradient-to-r ${
                    i === 0
                      ? "from-white via-indigo-200 to-indigo-400"
                      : "from-indigo-400 via-purple-400 to-purple-300"
                  } bg-clip-text text-transparent`}
                >
                  {word}
                </span>
              </motion.span>
            )
          )}
        </motion.h1>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"
        />

        {/* Description */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          We engineer immersive digital
          experiences that captivate audiences,
          drive conversions, and scale with
          precision.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Explore */}
          <motion.a
            href="/services"
            className="group relative px-8 py-4 rounded-full font-semibold transition flex items-center justify-center gap-2 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500 group-hover:from-indigo-500 group-hover:to-indigo-400 transition-all duration-300" />

            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <span className="relative z-10">
              Explore Services
            </span>

            <Rocket className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>

          {/* Contact */}
          <motion.a
            href="/contact"
            className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full font-semibold transition border border-white/10 flex items-center justify-center gap-2 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">
              Let's Collaborate
            </span>

            <Zap className="relative z-10 w-5 h-5 group-hover:rotate-12 transition-transform" />

            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(139,92,246,0)",
                  "0 0 0 3px rgba(139,92,246,0.5)",
                  "0 0 0 0 rgba(139,92,246,0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1,
              }}
            />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {[
            {
              value: "50+",
              label: "Projects Delivered",
              icon: Rocket,
            },

            {
              value: "24/7",
              label: "Support",
              icon: Circle,
            },

            {
              value: "100%",
              label: "Client Satisfaction",
              icon: Sparkles,
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-indigo-400">
                <stat.icon className="w-6 h-6" />

                {stat.value}
              </div>

              <div className="text-sm text-gray-400 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="/services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-white transition group cursor-pointer z-20"
      >
        <span className="text-sm tracking-wider">
          SCROLL
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="group-hover:text-indigo-400 transition"
        >
          <ArrowDown size={20} />
        </motion.div>

        <motion.div
          className="absolute -bottom-6 left-1/2 w-px h-8 bg-gradient-to-b from-indigo-500 to-transparent"
          animate={{
            scaleY: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: 0.5,
          }}
        />
      </motion.a>

      {/* Decorative Corners */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-indigo-500/20 rounded-tl-3xl"
        initial={{
          opacity: 0,
          x: -50,
          y: -50,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          delay: 0.8,
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 border-r-2 border-b-2 border-purple-500/20 rounded-br-3xl"
        initial={{
          opacity: 0,
          x: 50,
          y: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          delay: 0.8,
        }}
      />
    </section>
  );
}