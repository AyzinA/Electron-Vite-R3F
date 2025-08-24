import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function SpinningBox() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    ref.current.rotation.x += dt * 0.6;
    ref.current.rotation.y += dt * 0.8;
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#22cc88" />
    </mesh>
  );
}

export default function App() {
  return (
    <div className="canvas-wrap">
      <Canvas camera={{ position: [0, 1.5, 4], fov: 60 }}>
        <color attach="background" args={['#111']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <gridHelper args={[20, 20, '#333', '#222']} />
        <SpinningBox />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
