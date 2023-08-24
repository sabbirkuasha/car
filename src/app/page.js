"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"hotpink"} />
      </mesh>
    </>
  );
}

export default function Home() {
  return (
    <main className="p-10 pt-5">
      <div className="ring h-[700px]">
        <Suspense fallback={null}>
          <Canvas shadows>
            <CarShow />
          </Canvas>
        </Suspense>
      </div>
      <div className="py-5">Page Content</div>
    </main>
  );
}
