import React from "react";
import { heroVideo } from "../utils/constants";
import heroVideo from "../assets/videos/heroVideo.mp4"

const Hero = () => {
  return (
    <section id="hero">
      <div className="h-screen bg-heroBackground bg-cover text-white w-screen">
        <div className="flex h-full w-full pl-[20%] pt-[15%] 2xl:pt-[10%]">
          <div className="flex-col space-y-11 items-center justify-center">
            <h1 className="md:w-[700px] xl:w-[1080px] 2xl:w-[1200px]">
              Explore the unknown with Space Robots
            </h1>
            <div className="flex space-x-10">
              <div className="w-64 bg-teal-400 rounded-sm flex items-center justify-center cursor-pointer">
                <a href="#" className="font-chakraPetch text-base uppercase">
                  Connect wallet
                </a>
              </div>
              <p className="md:w-[600px] xl:w-[750px] h-14">
                Space Robots NFTs are unique digital collectibles that represent
                a robotic explorer in the vast universe. These NFTs offer a
                glimpse into the future of space exploration, where robots are
                sent to faraway planets to gather data and unlock the secrets of
                the cosmos.
              </p>
            </div>
          </div>
          <div className="flex items-end 2xl:w-[600px] 2xl:pb-48 w-96 px-10 pb-36 mx-auto">
            <video className="w-full" autoPlay controls muted loop>
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
