import React from "react";
import { projectContent } from "../utils/projectConstants";

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
  }, [names, actions]);

  return (
    <primitive ref={group} object={scene} scale={1} position={[0, -1.5, 0]} />
  );
};

const Project = () => {
  return (
    <section id="about" className="container mx-auto my-24">
      <div className="flex flex-col items-center justify-center lg:h-screen">
        <TypewriteParagraph
          firstWord="About"
          secondWord="The Story"
          thirdWord="Explore new frontier"
        />
        <h2 className="mx-auto mb-12 text-center">Discover your Robot</h2>
        <div className="grid h-full w-full gap-4 lg:grid-cols-3 lg:grid-rows-6 lg:gap-8">
          <div className="lg:max-w-96 mx-auto flex h-96 w-full items-center justify-center rounded-xl bg-background-color lg:row-span-6 lg:h-full">
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
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-1 row-span-2 grid w-full place-content-center rounded-xl bg-background-color p-12 text-center duration-300 hover:bg-primary-teal hover:text-background-color"
          >
            {projectContent.title}
          </motion.h2>
          <h2 className="col-span-1 row-span-2 grid w-full place-content-center rounded-xl bg-background-color p-12 text-center duration-300 hover:bg-primary-teal hover:text-background-color">
            {projectContent.cards.secondCard}
          </h2>
          <h2 className="col-span-1 row-span-1 grid w-full place-content-center rounded-xl bg-background-color p-12 text-center duration-300 hover:bg-primary-teal hover:text-background-color">
            {projectContent.cards.thirdCard}
          </h2>
          <h2 className="col-span-1 row-span-2 grid w-full place-content-center rounded-xl bg-background-color p-12 text-center duration-300 hover:bg-primary-teal hover:text-background-color">
            {projectContent.cards.fourthCard}
          </h2>
          <h2 className="col-span-1 row-span-3 grid w-full place-content-center rounded-xl bg-background-color p-12 text-center duration-300 hover:bg-primary-teal hover:text-background-color">
            {projectContent.cards.fifthCard}
          </h2>
          <h2 className="col-span-1 row-span-1 grid w-full place-content-center rounded-xl bg-background-color p-12 text-center duration-300 hover:bg-primary-teal hover:text-background-color">
            {projectContent.cards.sixthCard}
          </h2>
          <button
            type="button"
            className="group col-span-1 row-span-1 flex flex-col items-center justify-center rounded-xl bg-accent-color px-8 py-4 text-center text-xl text-background-color duration-300"
          >
            <h2>{projectContent.button.text}</h2>
            <span className="h-1 w-0 bg-background-color duration-500 group-hover:w-full" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
