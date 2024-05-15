import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const Model = ({ modelPath }) => {
  const [scale, setScale] = useState(0.15); // Significantly reduced initial scale

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Responsive scaling based on viewport width
      const newScale = Math.min(width / 600, 0.4); // Capped at 0.4 for larger screens
      setScale(newScale);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scene, nodes } = useGLTF(
    modelPath,
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
        <hemisphereLight intensity={0.05} groundColor="black" /> {/* Reduced light intensity */}
        <spotLight
          position={[-3, 5, 3]} // Adjusted for better phone view
          angle={0.12}
          penumbra={1}
          intensity={0.8} // Reduced light intensity
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={0.5} /> {/* Reduced light intensity */}
        <primitive
          object={scene}
          scale={[scale, scale, scale]} // Use viewport units for scale
          position={[0, -0.5, -1]} // Adjusted position for better phone view
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </group>
  );
};

const ComputersCanvas = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const modelPath = isMobile ? "./phone_model/scene.gltf" : "./desktop_pc/scene.gltf";

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        frameloop="demand" // Improves performance on mobile
        shadows // Enable shadows (optional)
        dpr={[1, 1]} // Lower dpr for mobile (optional)
        camera={{ position: [10, 1.5, 5], fov: 25 }} // Adjusted camera position
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        {/* Check if model path exists before rendering Model component */}
        {modelPath && <Model modelPath={modelPath} />}
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
