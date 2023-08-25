"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import {
  CubeCamera,
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Ground } from "@/Components/Ground";
import { Car } from "@/Components/Car";
import { Rings } from "@/Components/Rings";

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[0, 0, 0]} attach="background" />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Car />
            <Environment map={texture} />
          </>
        )}
      </CubeCamera>

      <Rings />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={50}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={50}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />

      {/* <mesh castShadow receiveShadow>
        <planeGeometry args={[30, 30]} />
        <MeshReflectorMaterial />
      </mesh> */}
      {/* <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"gray"} />
      </mesh> */}
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
