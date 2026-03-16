"use client";

import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, Float } from '@react-three/drei';
import { Model } from './Ladyjustice';
import { Suspense } from 'react';

export default function Scene() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
      <Canvas shadows camera={{ position: [0, 0, 14], fov: 45 }} className="pointer-events-auto">
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

        <Suspense fallback={null}>
          <group rotation={[0, -Math.PI / 8, 0]}>
            <Float rotationIntensity={0.1} floatIntensity={0.1} speed={1.5}>
              <Model position={[4.5, -6.5, 2]} scale={1.4} />
            </Float>
          </group>
          <ContactShadows position={[4.5, -6.5, 2]} opacity={0.5} scale={10} blur={2.5} far={4} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
