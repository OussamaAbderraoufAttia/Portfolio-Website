import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const Model = ({ modelPath }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Responsive scaling based on viewport width
      const newScale = width > 600 ? 1 : Math.min(width / 600, 0.8); // Adjust limits as needed
      setScale(newScale);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scene } = useGLTF(
    modelPath,
    undefined,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      loader.setDRACOLoader(dracoLoader);
    }
  );

  return (
    <group>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          position={[-5, 10, 5]} // Adjusted for better phone view
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <primitive
          object={scene}
          scale={[scale, scale, scale]} // Use viewport units for scale
          position={[0, -1.2, -1]} // Adjusted position for better phone view
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
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Model modelPath={modelPath} />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
