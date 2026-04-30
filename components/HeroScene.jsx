"use client";
import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, MeshReflectorMaterial, Environment } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { IcosahedronGeometry, TorusKnotGeometry } from "three";

export default function HeroScene() {
  const groupRef = useRef();
  const { mouse } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
    groupRef.current.rotation.y += 0.002;
    // Parallax follow
    groupRef.current.rotation.x +=
      (mouse.y * 0.2 - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y +=
      (mouse.x * 0.2 - groupRef.current.rotation.y) * 0.05;
  });

  return (
    <>
      <group ref={groupRef} position={[0, 0, 0]}>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <mesh
            geometry={new IcosahedronGeometry(1.2, 1)}
            material-color="#6366f1"
            wireframe
          />
        </Float>
        <Float
          speed={1}
          rotationIntensity={0.3}
          floatIntensity={0.8}
          position={[-2, -0.5, -1]}
        >
          <mesh
            geometry={new TorusKnotGeometry(0.4, 0.12, 100, 16)}
            material-color="#a78bfa"
          />
        </Float>
        <Float
          speed={2}
          rotationIntensity={0.4}
          floatIntensity={1.2}
          position={[2, 0.5, -2]}
        >
          <mesh
            geometry={new IcosahedronGeometry(0.6, 0)}
            material-color="#34d399"
            wireframe
          />
        </Float>
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          mirror={0.5}
          resolution={1024}
          mixBlur={1}
          mixStrength={2}
          depthScale={1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh>

      <EffectComposer disableNormalPass>
        <Bloom
          luminanceThreshold={0.2}
          mipmapBlur
          intensity={1.2}
          radius={0.6}
        />
        <Noise opacity={0.03} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  );
}
