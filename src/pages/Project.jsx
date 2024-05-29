import React from "react";
import { text } from "../utils/projectConstants";

import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import TypewriteParagraph from "../components/TypewriteParagraph";

import walking from "../assets/models/robot.glb?url";

const RobotModel = () => {
  const group = useRef();

  const { scene, animations } = useGLTF(walking, true); // Update the path to your GLTF model
  const { actions, names } = useAnimations(animations, group);

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
    <section id="about" className="container mx-auto my-24">
      <div className="flex h-screen flex-col items-center justify-center">
        <TypewriteParagraph
          firstWord="About"
          secondWord="The Story"
          thirdWord="Explore new frontier"
        />
        <h2 className="mb-12">Discover your Robot</h2>
        <div className="grid h-full w-full grid-cols-3 grid-rows-6 gap-8">
          <div className="max-w-96 row-span-6 mx-auto flex h-full w-full items-center justify-center rounded-xl bg-background-color">
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
          <h2 className="col-span-1 row-span-2 grid w-full place-content-center rounded-xl bg-background-color p-12">
            {text.title}
          </h2>
          <p className="col-span-1 row-span-2 grid place-content-center rounded-xl bg-background-color p-12">
            {text.description}
          </p>
          <button className="group col-span-1 row-span-1 flex flex-col items-center justify-center rounded-xl bg-accent-color px-8 py-4 text-xl text-background-color duration-300">
            <h2>Read More</h2>
            <span className="h-1 w-0 bg-background-color duration-500 group-hover:w-full"></span>
          </button>
          <h2 className="col-span-1 row-span-2 grid w-full place-content-center rounded-xl bg-background-color p-12">
            7777 Robots
          </h2>
          <h2 className="col-span-1 row-span-3 grid w-full place-content-center rounded-xl bg-background-color p-12">
            Multiple Collections
          </h2>
          <h2 className="col-span-1 row-span-2 grid w-full place-content-center rounded-xl bg-background-color p-12">
            7777 Robots
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Project;
