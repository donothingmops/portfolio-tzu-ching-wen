import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader';
import * as THREE from 'three';
import CanvasLoader from '../Loader'; // Make sure this path points to your CanvasLoader component

const RhinoModel = ({ modelUrl }) => {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new Rhino3dmLoader();
    loader.setLibraryPath('https://cdn.jsdelivr.net/npm/rhino3dm@8.0.1/');

    loader.load(modelUrl, function (object) {
      scene.add(object);

      object.traverse((child) => {
        if (child.isMesh) {
          const edgesGeometry = new THREE.EdgesGeometry(child.geometry);
          const edgesMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
          const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
          child.add(edges);
        }
      });
    });
  }, [modelUrl, scene]);

  return null;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.2,
        far: 200,
        position: [-70, -10, 10],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <hemisphereLight intensity={2} groundColor='blue' skyColor="#ffffff" />
        <ambientLight intensity={0.7} />
        <directionalLight 
          position={[0, 10, 10]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={2048} 
          shadow-mapSize-height={2048} />
        <spotLight 
          position={[20, 30, 20]} 
          angle={0.2} 
          penumbra={0.5} 
          intensity={1.2} 
          castShadow />
        <pointLight 
          position={[-20, -20, -20]} 
          intensity={0.5} />
        <OrbitControls 
          autoRotate 
          enableZoom={true} 
          maxPolarAngle={Math.PI} 
          minPolarAngle={0} />
        <RhinoModel modelUrl="./evo/EndEffector.3dm" />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
