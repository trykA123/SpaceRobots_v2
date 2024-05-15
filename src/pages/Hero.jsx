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
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      {/* Content */}
      <div className="h-screen flex flex-col items-center justify-center relative z-10">
        <div className="flex flex-col-reverse md:flex-col md:justify-between h-full mx-auto items-center justify-center">
          <div className="h-full py-16 md:py-0 flex flex-col space-y-14 xl:space-y-6 items-center justify-center">
            <h1 className="md:w-[600px] 3xl:w-[1080px] text-center md:text-center z-30">
              Explore the Unknown with Space Robots
            </h1>
            <motion.button
              initial={{ opacity: 0,  y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="py-4 px-8 bg-accent-color w-64 z-30 rounded-xl text-background-color font-chakraPetch uppercase text-2xl">Launch Dapp</motion.button>
          </div>
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-background-color via-95% to-background-color z-20"
          style={{ opacity }} // Apply opacity animation
        />
      </div>
    </motion.section>
  );
};

export default Hero;
