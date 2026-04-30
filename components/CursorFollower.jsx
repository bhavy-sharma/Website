"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-indigo-400 mix-blend-screen pointer-events-none z-50 custom-cursor"
      animate={{ x: position.x - 12, y: position.y - 12 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}
