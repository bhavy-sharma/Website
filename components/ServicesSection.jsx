"use client";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  Code,
  Globe,
  BarChart3,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Cpu,
  Layers,
  TrendingUp,
  Grid3x3,
  Star,
  Award,
  Users,
  Clock,
  Quote,
  ChevronRight,
  Briefcase,
  Rocket,
  Target,
  Heart,
  Eye,
  Coffee,
} from "lucide-react";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: <Code size={28} />,
    title: "Web & App Development",
    desc: "High-performance, scalable applications built with cutting-edge tech stacks including React, Next.js, and Node.js.",
    features: ["React/Next.js", "Node.js/Python", "Mobile First"],
    color: "from-blue-500 to-cyan-400",
    gradient: "blue",
    stats: { projects: 150, satisfaction: "99%" },
    bgImage:
      "radial-gradient(circle at 20% 80%, rgba(59,130,246,0.15), transparent 70%)",
    delay: 0,
  },
  {
    icon: <Globe size={28} />,
    title: "Immersive 3D Experiences",
    desc: "Interactive WebGL & Three.js experiences that redefine user engagement with stunning visuals and smooth animations.",
    features: ["Three.js/WebGL", "3D Modeling", "AR/VR Ready"],
    color: "from-purple-500 to-pink-400",
    gradient: "purple",
    stats: { projects: 85, satisfaction: "98%" },
    bgImage:
      "radial-gradient(circle at 80% 20%, rgba(139,92,246,0.15), transparent 70%)",
    delay: 0.1,
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Growth & Marketing Tech",
    desc: "Data-driven strategies, automation, and conversion-optimized funnels that maximize ROI and user acquisition.",
    features: ["Analytics", "SEO Optimization", "Automation"],
    color: "from-orange-500 to-red-400",
    gradient: "orange",
    stats: { projects: 120, satisfaction: "97%" },
    bgImage:
      "radial-gradient(circle at 50% 50%, rgba(249,115,22,0.15), transparent 70%)",
    delay: 0.2,
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechCorp",
    content:
      "Navokta transformed our digital presence completely. The 3D experiences they created are mind-blowing!",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Priya Patel",
    role: "Marketing Head",
    content:
      "Their growth strategies increased our conversion rate by 200%. Absolutely phenomenal team!",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Amit Kumar",
    role: "Founder",
    content:
      "Best development team I've worked with. Professional, creative, and results-driven.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const achievements = [
  {
    icon: <Rocket />,
    value: "150+",
    label: "Projects",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: <Users />,
    value: "50+",
    label: "Clients",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: <Coffee />,
    value: "10k+",
    label: "Coffee Cups",
    color: "from-amber-500 to-orange-400",
  },
  {
    icon: <Heart />,
    value: "100%",
    label: "Satisfaction",
    color: "from-rose-500 to-red-400",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [countValues, setCountValues] = useState([0, 0, 0, 0]);

  const [direction, setDirection] = useState(0);

  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 8 + 4,
      delay: Math.random() * 6,
      size: Math.random() * 3 + 1,
      color: ["#4f46e5", "#8b5cf6", "#06b6d4", "#ec4899"][
        Math.floor(Math.random() * 4)
      ],
    }));
  }, []);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useSpring(useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]), {
    stiffness: 100,
    damping: 20,
  });

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
      };
    },
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    if (inView) {
      const targets = [150, 50, 10000, 100];
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        setCountValues([
          Math.min(Math.floor(targets[0] * progress), targets[0]),
          Math.min(Math.floor(targets[1] * progress), targets[1]),
          Math.min(Math.floor((targets[2] / 20) * progress) * 20, targets[2]),
          Math.min(Math.floor(targets[3] * progress), targets[3]),
        ]);
        if (step >= steps) clearInterval(interval);
      }, stepTime);
    }
  }, [inView]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToServices = useCallback(() => {
    const element = document.getElementById("all-services");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-32 px-6 z-10 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.2), rgba(0,0,0,0) 70%)",
          y,
        }}
      />

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isMounted &&
          particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                y: [0, Math.random() * -80 - 20, Math.random() * -100 - 50],
                x: [0, Math.random() * 60 - 30, Math.random() * 80 - 40],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      {/* Animated Gradient Orbs */}
      {[
        { className: "top-20 left-[5%] w-80 h-80 bg-purple-500/20", delay: 0 },
        {
          className: "bottom-20 right-[5%] w-96 h-96 bg-indigo-500/20",
          delay: 2,
        },
        { className: "top-1/2 left-1/2 w-64 h-64 bg-pink-500/20", delay: 4 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl pointer-events-none ${orb.className}`}
          animate={{
            y: [0, 80, 0],
            x: [0, 60, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative" style={{ opacity }}>
        {/* Enhanced Section Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </motion.div>
            <span className="text-sm text-indigo-300 font-medium tracking-wider">
              PREMIUM SERVICES
            </span>
          </motion.div>

          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent">
              What We Deliver
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "120px" } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"
          />

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Cutting-edge solutions that transform your digital vision into
            reality
          </motion.p>
        </div>

        {/* Main Services Cards with 3D Flip Effect */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: i === 0 ? -100 : i === 2 ? 100 : 0,
                rotateY: i === 1 ? 30 : 0,
              }}
              animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{
                delay: service.delay,
                duration: 0.8,
                type: "spring",
              }}
              whileHover={{ y: -20, scale: 1.02 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative cursor-pointer"
            >
              <div
                className="relative bg-gradient-to-br from-gray-900/95 to-gray-900/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full overflow-hidden"
                style={{ backgroundImage: service.bgImage }}
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  animate={{
                    borderImage:
                      hoveredIndex === i
                        ? "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899) 1"
                        : "none",
                  }}
                />

                {/* Icon with Rotating Background */}
                <motion.div
                  className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${service.color} p-[3px] mb-6 shadow-xl`}
                  animate={{
                    rotate: hoveredIndex === i ? [0, 10, -10, 0] : 0,
                    scale: hoveredIndex === i ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: hoveredIndex === i ? 1.2 : 1,
                        rotate: hoveredIndex === i ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                      className="text-white"
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Feature Tags with Stagger Animation */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05, x: 2 }}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-gray-300 hover:border-indigo-500/50 transition-all"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                {/* Learn More Link */}
                <motion.div
                  className="flex items-center justify-between mt-5 pt-3"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="text-indigo-400 text-sm font-medium tracking-wide">
                    Discover More
                  </span>
                  <motion.div
                    className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center"
                    animate={{ x: hoveredIndex === i ? 5 : 0 }}
                  >
                    <ChevronRight size={16} className="text-indigo-400" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore All Services Button with Ripple */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, type: "spring", bounce: 0.6 }}
          className="flex justify-center mb-20"
        >
          <motion.button
            className="group relative px-12 py-5 rounded-full font-bold text-lg overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToServices}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient bg-[length:200%_200%]" />
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 2, opacity: 0.3 }}
              transition={{ duration: 0.5 }}
            />
            <div className="relative z-10 flex items-center gap-3">
              <Grid3x3 className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 blur-xl animate-pulse" />
            </div>
          </motion.button>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
              <Quote className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300">
                Client Testimonials
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              What Our Clients Say
            </h3>
          </div>

          <div className="relative max-w-4xl mx-auto h-[400px]">
            {" "}
            {/* Fixed height prevents layout jump */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeTestimonial}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1); // Swipe Left -> Next
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1); // Swipe Right -> Prev
                  }
                }}
                className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
              >
                <div className="h-full bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl flex flex-col justify-center">
                  <Quote className="w-12 h-12 text-indigo-500/20 mb-6" />
                  <p className="text-gray-200 text-lg leading-relaxed mb-6">
                    "{testimonials[activeTestimonial].content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-16 h-16 rounded-full border-2 border-indigo-500 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-xl">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-sm text-indigo-400">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Dots Indicator */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mt-6 translate-y-full">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > activeTestimonial ? 1 : -1);
                    setActiveTestimonial(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === i
                      ? "w-8 bg-indigo-500"
                      : "w-2 bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(20px);
          }
          50% {
            transform: translateY(-40px) translateX(0px);
          }
          75% {
            transform: translateY(-20px) translateX(-20px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
