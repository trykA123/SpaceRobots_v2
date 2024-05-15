import React from "react";
import { text } from "../utils/projectConstants";

import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import walking from "../assets/models/robot.glb?url";

const RobotModel = () => {
  const group = useRef();

  const { scene, animations } = useGLTF(walking, true); // Update the path to your GLTF model
  const { actions, names } = useAnimations(animations, group);
  console.log(names);

  useEffect(() => {
    if (actions && names && names.length > 0 && actions[names[0]]) {
      // Use the full animation name when accessing the action
      actions[names[0]]?.play();
    }
  }, [names]);

  return (
    <primitive ref={group} object={scene} scale={1} position={[0, -1.5, 0]} />
  );
};

const Project = () => {
  return (
    <section id="project" className="container mx-auto my-24">
      <div className="flex h-screen flex-col items-center justify-center">
        <p className="font-chakraPetch text-2xl uppercase text-accent-color">
          About
        </p>
        <h2 className="mb-12">Discover your Robot</h2>
        <div className="flex h-full w-full">
          <div className="flex max-w-[600px] items-center justify-center ">
            <div className="mx-auto flex-col items-center justify-center space-y-6 rounded-xl bg-background-color p-12">
              <h2 className="">{text.title}</h2>
              <p className="">{text.description}</p>
              <button className="rounded-xl bg-accent-color px-8 py-4 text-xl text-background-color">
                Read More
              </button>
            </div>
          </div>
          <div className="max-w-96 mx-auto flex h-full w-full items-center justify-center ">
            <Canvas camera={{ position: [-3, 2.5, 5.5], fov: 45 }}>
              <OrbitControls
                enableZoom={false}
                maxDistance={6}
                minDistance={5}
              />
              <ambientLight intensity={Math.PI / 2} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                decay={0}
                intensity={Math.PI}
              />
              <pointLight
                position={[-10, -10, -10]}
                decay={0}
                intensity={Math.PI}
              />
              <RobotModel />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
