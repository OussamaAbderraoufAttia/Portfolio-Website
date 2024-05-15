import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { isMobile } from "react-device-detect"; // Install react-device-detect

const DesktopComputerModel = () => {
  const { scene } = useGLTF(
    "./desktop_pc/scene.gltf",
    undefined,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      loader.setDRACOLoader(dracoLoader);
    }
  );

  // Check if scene is loaded before rendering (prevents potential crash)
  if (!scene) return null;

  return (
    <group>
      <mesh>
        <hemisphereLight intensity={0.1} groundColor="black" /> {/* Reduced light intensity */}
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={0.8} /> {/* Reduced light intensity */}
        <primitive
          object={scene}
          scale={0.75} // Adjust scale as needed
          position={[0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </group>
  );
};

const MobileComputerModel = () => {
  // You can replace this with a 2D image of the computer for mobile
  return <div>2D Image of Computer</div>; // Placeholder for mobile view
};

const ComputersCanvas = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        frameloop="demand" // Improves performance on mobile
        shadows // Enable shadows (optional)
        dpr={[1, 1]} // Lower dpr for mobile (optional)
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Conditionally render models based on device type */}
        {isMobile ? <MobileComputerModel /> : <DesktopComputerModel />}
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
