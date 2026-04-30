"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, useRef } from "react";
import {
  Environment,
  OrbitControls,
  Sparkles,
  Text3D,
  Float,
  MeshDistortMaterial,
  Html,
} from "@react-three/drei";
import * as THREE from "three";

// Geometric Core Component - The central tech element
function TechCore() {
  const meshRef = useRef(null);

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
      <group>
        {/* Main glowing core */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.8, 0]} />
          <MeshDistortMaterial
            color="#00d4ff"
            emissive="#0044aa"
            emissiveIntensity={1.2}
            metalness={0.9}
            roughness={0.2}
            distort={0.3}
            speed={2}
          />
        </mesh>

        {/* Rotating wireframe outer shell */}
        <mesh rotation={[0.2, 0.4, 0.1]}>
          <icosahedronGeometry args={[1.1, 1]} />
          <meshStandardMaterial
            color="#00aaff"
            wireframe
            transparent
            opacity={0.25}
            emissive="#0088ff"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Inner energy rings */}
        <Ring radius={1.3} color="#00d4ff" rotationSpeed={0.8} />
        <Ring
          radius={1.6}
          color="#0066ff"
          rotationSpeed={-0.5}
          rotationOffset={Math.PI / 3}
        />
        <Ring
          radius={0.9}
          color="#00ffcc"
          rotationSpeed={1.2}
          rotationOffset={Math.PI / 1.5}
        />
      </group>
    </Float>
  );
}

// Ring Component for orbital tech rings
function Ring({ radius, color, rotationSpeed, rotationOffset = 0 }) {
  const ringRef = useRef(null);

  useEffect(() => {
    let frameId;
    let lastTime = performance.now();

    const animate = (now) => {
      const delta = Math.min(0.033, (now - lastTime) / 1000);
      lastTime = now;

      if (ringRef.current) {
        ringRef.current.rotation.y += rotationSpeed * delta;
        ringRef.current.rotation.x += rotationSpeed * 0.3 * delta;
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [rotationSpeed]);

  return (
    <mesh
      ref={ringRef}
      rotation={[Math.PI / 2 + rotationOffset, 0, rotationOffset]}
    >
      <torusGeometry args={[radius, 0.03, 64, 200]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

// Floating Tech Particles
function TechParticles() {
  const particleCount = 800;
  const positions = useRef(new Float32Array(particleCount * 3));
  const colors = useRef(new Float32Array(particleCount * 3));

  useEffect(() => {
    for (let i = 0; i < particleCount; i++) {
      // Distributed in a sphere
      const radius = 3 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions.current[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions.current[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions.current[i * 3 + 2] = radius * Math.cos(phi);

      // Blue-cyan color palette
      colors.current[i * 3] = 0.2 + Math.random() * 0.5; // R
      colors.current[i * 3 + 1] = 0.5 + Math.random() * 0.5; // G
      colors.current[i * 3 + 2] = 0.8 + Math.random() * 0.2; // B
    }
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions.current}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Orbiting Data Nodes
function DataNodes() {
  const nodes = [
    { position: [2.2, 1.5, 0.5], color: "#00d4ff", label: "AI & ML" },
    { position: [-1.8, 2.0, -1.2], color: "#0088ff", label: "Cloud" },
    { position: [0.5, -1.9, 1.8], color: "#00ffcc", label: "Blockchain" },
    { position: [-2.0, -1.0, 1.5], color: "#00aaff", label: "IoT" },
    { position: [1.5, 1.2, -2.0], color: "#00d4ff", label: "Cybersecurity" },
  ];

  return (
    <>
      {nodes.map((node, i) => (
        <Float
          key={i}
          speed={1.2}
          rotationIntensity={0}
          floatIntensity={0.8}
          position={node.position}
        >
          <group>
            <mesh>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={1}
              />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.18, 0.22, 16]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={0.5}
                transparent
                opacity={0.7}
              />
            </mesh>
            <Html
              distanceFactor={8}
              center
              position={[0, 0.25, 0]}
              transform
              style={{ pointerEvents: "none" }}
            >
              <div className="text-[10px] font-mono font-bold whitespace-nowrap text-cyan-300 bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm border border-cyan-400/30">
                {node.label}
              </div>
            </Html>
          </group>
        </Float>
      ))}
    </>
  );
}

// Glowing Grid Floor
function TechGrid() {
  return (
    <group position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper args={[12, 32, "#00d4ff", "#0066aa"]} position={[0, 0, 0]} />
      <gridHelper
        args={[12, 8, "#00ffcc", "#0044aa"]}
        position={[0, 0.02, 0]}
        opacity={0.3}
        transparent
      />
      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial
          color="#001133"
          metalness={0.8}
          roughness={0.4}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}

// Pulsing Background Elements
function PulseWaves() {
  const waveRef = useRef(null);

  useEffect(() => {
    let time = 0;
    let frameId;

    const animate = () => {
      time += 0.016;
      if (waveRef.current) {
        const scale = 1 + Math.sin(time * 2) * 0.05;
        waveRef.current.scale.set(scale, scale, scale);
        waveRef.current.material.emissiveIntensity =
          0.5 + Math.sin(time * 3) * 0.3;
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <mesh ref={waveRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.8, 32, 32]} />
      <meshStandardMaterial
        color="#0044aa"
        emissive="#0088ff"
        emissiveIntensity={0.5}
        transparent
        opacity={0.08}
        wireframe
      />
    </mesh>
  );
}

// Main Scene Composition
function HeroScene() {
  return (
    <group>
      {/* Ambient tech glow */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[2, 2, 2]} intensity={0.8} color="#0088ff" />
      <pointLight position={[-2, -1, 3]} intensity={0.5} color="#00ffcc" />

      {/* Back rim light */}
      <pointLight position={[0, 0, -3]} intensity={0.6} color="#00aaff" />

      {/* Core elements */}
      <TechCore />
      <PulseWaves />
      <TechParticles />
      <DataNodes />
      <TechGrid />

      {/* Floating binary/tech particles */}
      <Sparkles
        count={200}
        scale={6}
        size={0.08}
        speed={0.4}
        color="#00d4ff"
        opacity={0.4}
      />
      <Sparkles
        count={100}
        scale={7}
        size={0.05}
        speed={0.2}
        color="#0088ff"
        opacity={0.3}
      />

      {/* Subtle fog for depth */}
      <fog attach="fog" args={["#050a1a", 5, 12]} />
    </group>
  );
}

export default function Canvas3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Disable body scroll when canvas is active (optional)
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Dark overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2a]/40 via-transparent to-[#050a1a]/60 pointer-events-none z-10" />

      <Canvas
        camera={{ position: [0, 0.5, 6], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
        style={{ background: "#050a1a" }}
      >
        <Suspense fallback={null}>
          <HeroScene />
          {/* Slow orbit controls for subtle interactivity */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.6}
            rotateSpeed={0.5}
          />
          <Environment preset="city" background={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
