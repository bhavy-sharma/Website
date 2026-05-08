"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation
  const springX = useSpring(mouseX, {
    stiffness: 500,
    damping: 28,
  });

  const springY = useSpring(mouseY, {
    stiffness: 500,
    damping: 28,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-indigo-400 mix-blend-screen pointer-events-none z-50"
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
}