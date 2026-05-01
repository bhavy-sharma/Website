"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, useRef, useMemo } from "react";
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

// Starfield Background with Twinkling Stars
function Starfield() {
  const starCount = 1500;
  const positions = useMemo(() => {
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      // Distribute stars in a large sphere
      const radius = 40 + Math.random() * 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6; // Flatten slightly
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  const colors = useMemo(() => {
    const colors = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      // Star color variations: white, slight blue, slight yellow
      const colorType = Math.random();
      if (colorType < 0.7) {
        colors[i * 3] = 0.8 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
        colors[i * 3 + 2] = 0.9 + Math.random() * 0.1;
      } else if (colorType < 0.85) {
        // Blueish stars
        colors[i * 3] = 0.5 + Math.random() * 0.3;
        colors[i * 3 + 1] = 0.6 + Math.random() * 0.3;
        colors[i * 3 + 2] = 1.0;
      } else {
        // Warm stars
        colors[i * 3] = 1.0;
        colors[i * 3 + 1] = 0.7 + Math.random() * 0.3;
        colors[i * 3 + 2] = 0.5 + Math.random() * 0.3;
      }
    }
    return colors;
  }, []);

  const starRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    let frameId;
    let lastTime = performance.now();

    const animate = (now) => {
      const delta = Math.min(0.033, (now - lastTime) / 1000);
      lastTime = now;
      timeRef.current += delta;

      if (starRef.current) {
        // Very slow rotation for the starfield
        starRef.current.rotation.y = timeRef.current * 0.02;
        starRef.current.rotation.x = Math.sin(timeRef.current * 0.01) * 0.05;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <points ref={starRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={starCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Twinkling Stars (larger, with pulsing)
function TwinklingStars() {
  const starCount = 300;
  const positions = useMemo(() => {
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const radius = 35 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  const sizes = useMemo(() => {
    const sizes = new Float32Array(starCount);
    for (let i = 0; i < starCount; i++) {
      sizes[i] = 0.08 + Math.random() * 0.15;
    }
    return sizes;
  }, []);

  const starRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    let frameId;
    let lastTime = performance.now();

    const animate = (now) => {
      const delta = Math.min(0.033, (now - lastTime) / 1000);
      lastTime = now;
      timeRef.current += delta;

      if (starRef.current) {
        // Update sizes based on sine wave for twinkling effect
        const positions = starRef.current.geometry.attributes.position.array;
        const sizes = starRef.current.geometry.attributes.size.array;

        for (let i = 0; i < starCount; i++) {
          const offset = i * 0.5;
          const twinkle =
            0.06 + Math.sin(timeRef.current * 2.5 + offset) * 0.04;
          sizes[i] = Math.max(
            0.05,
            Math.min(
              0.2,
              (starRef.current.userData.baseSizes?.[i] || 0.1) + twinkle,
            ),
          );
        }
        starRef.current.geometry.attributes.size.needsUpdate = true;

        starRef.current.rotation.y = timeRef.current * 0.015;
      }

      frameId = requestAnimationFrame(animate);
    };

    starRef.current.userData = { baseSizes: sizes.slice() };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [starCount, sizes]);

  return (
    <points ref={starRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={starCount}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Meteor Component
function Meteor({ startPos, direction, speed, length, color, delay = 0 }) {
  const trailRef = useRef(null);
  const meteorRef = useRef(null);
  const progress = useRef(-delay);
  const startPosition = useMemo(
    () => new THREE.Vector3(startPos[0], startPos[1], startPos[2]),
    [startPos],
  );
  const dir = useMemo(
    () =>
      new THREE.Vector3(direction[0], direction[1], direction[2]).normalize(),
    [direction],
  );
  const totalDistance = 25;

  useEffect(() => {
    let frameId;
    let lastTime = performance.now();

    const animate = (now) => {
      const delta = Math.min(0.033, (now - lastTime) / 1000);
      lastTime = now;

      if (progress.current < 1) {
        progress.current += delta * speed;

        if (meteorRef.current && progress.current >= 0) {
          const t = Math.min(1, progress.current);
          const pos = startPosition
            .clone()
            .add(dir.clone().multiplyScalar(totalDistance * t));
          meteorRef.current.position.copy(pos);

          if (trailRef.current) {
            trailRef.current.position.copy(pos);
          }
        }

        frameId = requestAnimationFrame(animate);
      } else if (progress.current >= 1 && meteorRef.current) {
        // Reset meteor
        progress.current = -Math.random() * 3;
      } else {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [speed, startPosition, dir, totalDistance]);

  return (
    <group ref={meteorRef}>
      {/* Meteor head */}
      <mesh>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
        />
      </mesh>
      {/* Meteor trail using a series of points */}
      <TrailEffect color={color} length={length} direction={dir} />
    </group>
  );
}

// Trail Effect for Meteor
function TrailEffect({ color, length, direction }) {
  const trailRef = useRef(null);
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < 15; i++) {
      pos.push(0, 0, 0);
    }
    return new Float32Array(pos);
  }, []);

  return (
    <points ref={trailRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={15}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.04}
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Meteor Shower Manager
function MeteorShower() {
  const meteors = useMemo(
    () => [
      // Start position [x, y, z], direction [x, y, z], speed, length, color, delay
      {
        startPos: [-12, 8, -15],
        direction: [0.8, -0.3, 0.5],
        speed: 0.35,
        length: 1.2,
        color: "#ffaa66",
        delay: 0,
      },
      {
        startPos: [10, 6, -18],
        direction: [-0.6, -0.4, 0.7],
        speed: 0.4,
        length: 1.0,
        color: "#ff8844",
        delay: 1.5,
      },
      {
        startPos: [-5, 9, -20],
        direction: [0.5, -0.5, 0.7],
        speed: 0.3,
        length: 1.5,
        color: "#ffcc88",
        delay: 0.8,
      },
      {
        startPos: [15, 5, -16],
        direction: [-0.7, -0.2, 0.6],
        speed: 0.45,
        length: 0.9,
        color: "#ff9966",
        delay: 2.0,
      },
      {
        startPos: [-8, 7, -22],
        direction: [0.6, -0.4, 0.5],
        speed: 0.38,
        length: 1.1,
        color: "#ffaa77",
        delay: 1.2,
      },
      {
        startPos: [0, 10, -19],
        direction: [0.3, -0.6, 0.7],
        speed: 0.32,
        length: 1.3,
        color: "#ffbb99",
        delay: 0.5,
      },
      {
        startPos: [-15, 4, -14],
        direction: [0.9, -0.1, 0.4],
        speed: 0.5,
        length: 0.8,
        color: "#ff8855",
        delay: 2.5,
      },
      {
        startPos: [8, 8, -21],
        direction: [-0.5, -0.5, 0.6],
        speed: 0.42,
        length: 1.0,
        color: "#ffaa66",
        delay: 1.8,
      },
      {
        startPos: [-3, 11, -17],
        direction: [0.4, -0.7, 0.5],
        speed: 0.36,
        length: 1.4,
        color: "#ffccaa",
        delay: 0.3,
      },
      {
        startPos: [12, 3, -13],
        direction: [-0.8, -0.2, 0.5],
        speed: 0.48,
        length: 0.7,
        color: "#ff8855",
        delay: 3.0,
      },
    ],
    [],
  );

  return (
    <>
      {meteors.map((meteor, i) => (
        <Meteor
          key={i}
          startPos={meteor.startPos}
          direction={meteor.direction}
          speed={meteor.speed}
          length={meteor.length}
          color={meteor.color}
          delay={meteor.delay}
        />
      ))}
    </>
  );
}

// Shooting Star Effect (single bright streaks)
function ShootingStars() {
  const starRef = useRef(null);
  const timeRef = useRef(0);
  const activeStars = useRef([]);

  useEffect(() => {
    let frameId;
    let lastTime = performance.now();

    const animate = (now) => {
      const delta = Math.min(0.033, (now - lastTime) / 1000);
      lastTime = now;
      timeRef.current += delta;

      // Randomly spawn shooting stars
      if (Math.random() < 0.005) {
        // Create a new shooting star
        const startX = (Math.random() - 0.5) * 30;
        const startY = 5 + Math.random() * 8;
        const startZ = -15 - Math.random() * 10;
        const dirX = (Math.random() - 0.5) * 1.2;
        const dirY = -0.3 - Math.random() * 0.5;
        const dirZ = 0.5 + Math.random() * 0.8;

        activeStars.current.push({
          position: new THREE.Vector3(startX, startY, startZ),
          direction: new THREE.Vector3(dirX, dirY, dirZ).normalize(),
          speed: 0.8 + Math.random() * 0.6,
          life: 1.0,
          color: `hsl(${30 + Math.random() * 30}, 100%, 60%)`,
        });
      }

      // Update shooting stars
      for (let i = activeStars.current.length - 1; i >= 0; i--) {
        const star = activeStars.current[i];
        star.life -= delta * 1.5;

        if (star.life <= 0) {
          activeStars.current.splice(i, 1);
        } else {
          star.position.x += star.direction.x * star.speed * delta;
          star.position.y += star.direction.y * star.speed * delta;
          star.position.z += star.direction.z * star.speed * delta;
        }
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <>
      {activeStars.current.map((star, i) => (
        <ShootingStar key={i} star={star} />
      ))}
    </>
  );
}

function ShootingStar({ star }) {
  const trailRef = useRef(null);
  const [position, setPosition] = useState(star.position);

  useEffect(() => {
    let frameId;
    const update = () => {
      setPosition(star.position.clone());
      frameId = requestAnimationFrame(update);
    };
    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [star.position]);

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.06, 6, 6]} />
        <meshStandardMaterial
          color={star.color}
          emissive={star.color}
          emissiveIntensity={1.2 * star.life}
          transparent
          opacity={star.life * 0.8}
        />
      </mesh>
      <mesh position={[-0.15, 0, 0]}>
        <sphereGeometry args={[0.03, 4, 4]} />
        <meshStandardMaterial
          color={star.color}
          emissive={star.color}
          emissiveIntensity={0.8 * star.life}
          transparent
          opacity={star.life * 0.5}
        />
      </mesh>
    </group>
  );
}

// Geometric Core Component - The central tech element (unchanged)
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

// Ring Component for orbital tech rings (unchanged)
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

// Floating Tech Particles (unchanged)
function TechParticles() {
  const particleCount = 800;
  const positions = useRef(new Float32Array(particleCount * 3));
  const colors = useRef(new Float32Array(particleCount * 3));

  useEffect(() => {
    for (let i = 0; i < particleCount; i++) {
      const radius = 3 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions.current[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions.current[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions.current[i * 3 + 2] = radius * Math.cos(phi);

      colors.current[i * 3] = 0.2 + Math.random() * 0.5;
      colors.current[i * 3 + 1] = 0.5 + Math.random() * 0.5;
      colors.current[i * 3 + 2] = 0.8 + Math.random() * 0.2;
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

// Orbiting Data Nodes (unchanged)
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

// Glowing Grid Floor (unchanged)
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

// Pulsing Background Elements (unchanged)
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

// Main Scene Composition (updated with star effects)
function HeroScene() {
  return (
    <group>
      {/* Starfield Background - far away */}
      <Starfield />
      <TwinklingStars />

      {/* Meteor effects */}
      <MeteorShower />
      <ShootingStars />

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
      <fog attach="fog" args={["#050a1a", 8, 18]} />
    </group>
  );
}

export default function Canvas3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.6}
            rotateSpeed={0.5}
          />
          <Environment preset="night" background={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
