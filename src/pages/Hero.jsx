import { motion, useTransform, useViewportScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import heroVideo from "../assets/videos/video.mp4";
import MobileTitle from "../components/MobileTitle";
import { text } from "../utils/heroConstants";

import Typewriter from "typewriter-effect";

const Hero = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, windowHeight - 250], [1, 0]); // Using window height for the scroll range

  return (
    <motion.section id="hero" className="relative" style={{ opacity }}>
      {/* Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      {/* Content */}
      <div className="relative z-10 flex h-screen flex-col items-center justify-center">
        <div className="mx-auto flex h-full flex-col-reverse items-center justify-center md:flex-col md:justify-between">
          <div className="flex h-full flex-col items-center justify-center space-y-14 py-16 md:py-0 xl:space-y-6">
            <h1 className="z-30 text-center md:w-[600px] md:text-center 3xl:w-[1080px]">
              Explore the Unknown with Space Robots
            </h1>
            <motion.button
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="group z-30 col-span-1 row-span-1 flex w-64 flex-col items-center justify-center  rounded-xl bg-accent-color  px-8 py-4  font-chakraPetch text-2xl  uppercase  text-background-color duration-300 hover:bg-transparent hover:text-modal-text"
            >
              Launch Dapp
              <span className="h-[1px] w-0 bg-accent-color duration-300 group-hover:w-full"></span>
            </motion.button>
          </div>
        </div>
        <motion.div
          className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-background-color via-95% to-background-color"
          style={{ opacity }} // Apply opacity animation
        />
      </div>
    </motion.section>
  );
};

export default Hero;
