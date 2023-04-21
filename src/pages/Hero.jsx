import React from "react";
// import { heroVideo } from "../utils/constants";
import heroVideo from "../assets/videos/video.mp4";

const Hero = () => {
  return (
    // 3xl:pl-[15%] pt-[15%] 2xl:pt-[10%]
    <section id="hero">
      <div className="h-screen bg-heroBackground bg-cover text-white w-screen">
        <div className="flex flex-col justify-between h-full w-[80%] mx-auto md:pt-64 md:pb-14 md:pl-24 4xl:pt-72 4xl:pb-24">
          <div className="flex flex-col space-y-11">
            <h1 className="md:w-[600px] 3xl:w-[1080px] 4xl:w-[1200px]">
              Explore the unknown with Space Robots
            </h1>
            <div className="flex h-full">
              <p className="md:w-[600px] 3xl:w-[1080px]">
                Space Robots NFTs are unique digital collectibles that represent
                a robotic explorer in the vast universe. These NFTs offer a
                glimpse into the future of space exploration, where robots are
                sent to faraway planets to gather data and unlock the secrets of
                the cosmos.
              </p>
            </div>
          </div>
          <div className="flex justify-end w-full px-10">
            <video
              className="md:w-64 3xl:w-72 4xl:w-96"
              autoPlay
              controls
              muted
              loop
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
