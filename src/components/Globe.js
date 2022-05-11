import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import mobileCheck from "../utility/mobileCheck";

function Model(props) {
  const { nodes, materials } = useGLTF("/earth.gltf");
  return (
    <group rotation={[-Math.PI / 2, 0, Math.PI]} {...props} dispose={null}>
      <mesh
        geometry={nodes["URF-Height_Lampd_Ice_0"].geometry}
        material={materials.Lampd_Ice}
      />
      <mesh
        geometry={nodes["URF-Height_watr_0"].geometry}
        material={materials.watr}
        material-roughness={0}
      />
      <mesh
        geometry={nodes["URF-Height_Lampd_0"].geometry}
        material={materials.Lampd}
        material-color="#3e7d58"
      >
        <group position={[0, 0, 1.3]} rotation={[0, 0, Math.PI]}></group>
      </mesh>
    </group>
  );
}

export default function Globe() {
  const ref = useRef();
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [4, 0, 0], fov: 50 }}
      style={{ position: "absolute", top: "0.1vh", zIndex: 0 }}
    >
      <Suspense fallback={null}>
        <Model position={[0, 0.25, 0]} />
        <Environment preset="city" />
        <ContactShadows
          scale={5}
          position={[0, -1, 0]}
          far={1}
          blur={5}
          opacity={0.8}
          frames={1}
        />
      </Suspense>
      <OrbitControls
        ref={ref}
        autoRotate="true"
        enableZoom={false}
        enablePan={false}
        enableRotate={mobileCheck() ? false : true}
      />
    </Canvas>
  );
}
