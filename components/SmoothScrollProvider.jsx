"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrollProvider({ children }) {
  return (
    <ReactLenis
  root
  options={{
    lerp: 0.07,
    smoothWheel: true,
    wheelMultiplier: 0.9,
  }}
>
      {children}
    </ReactLenis>
  );
}
