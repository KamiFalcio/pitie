import React, { useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";

import { TextureLoader } from "three/src/loaders/TextureLoader.js";

function Sphere() {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  const texture_1 = useLoader(TextureLoader, "textures/2k_mars.jpeg");

  return (
    <mesh ref={mesh}>
      <sphereGeometry attach="geometry" args={[3, 64, 64]} />
      <meshStandardMaterial map={texture_1} attachArray="material" />
    </mesh>
  );
}

export default Sphere;
