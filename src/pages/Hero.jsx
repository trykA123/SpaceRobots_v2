import React from "react";
import heroVideo from "../assets/videos/video.mp4";
import MobileTitle from "../components/MobileTitle";

const Hero = () => {
  return (
    <section id="hero">
      <div className="h-screen bg-heroBackground bg-cover text-white w-screen ">
        <div className="flex flex-col-reverse md:flex-col justify-around md:justify-between h-full w-[90%] md:w-[80%] mx-auto md:pt-64 md:pb-14 xl:pl-24 4xl:pt-72 4xl:pb-24">
          <div className="h-full py-16 md:py-0 flex flex-col space-y-14 xl:space-y-6 items-center xl:items-start">
            <MobileTitle title="Space Robots" />
            <h1 className="md:w-[600px] 3xl:w-[1080px] text-center md:text-center">
              Explore the unknown with Space Robots
            </h1>
            <div className="flex flex-col xl:flex-row h-full space-y-28 items-center">
              <p className="md:w-[600px] 3xl:w-[1080px] text-center xl:text-left">
                Space Robots NFTs are unique digital collectibles that represent
                a robotic explorer in the vast universe. These NFTs offer a
                glimpse into the future of space exploration, where robots are
                sent to faraway planets to gather data and unlock the secrets of
                the cosmos.
              </p>
              <button className="w-64 bg-teal-400 rounded-sm flex items-center justify-center cursor-pointer h-12 xl:hidden font-bold">
                <a
                  href="https://dapp.spacerobotsclub.com/"
                  className="font-chakraPetch text-base uppercase"
                  target="__blank"
                >
                  Launch Dapp
                </a>
              </button>
            </div>
          </div>
          <div className="hidden 2xl:flex justify-end w-full 2xl:px-10 3xl:px-24">
            <video
              className="w-full 2xl:w-72 4xl:w-96 rounded-xl shadow-2xl"
              autoPlay
              controls
              muted
              loop
              alt=""
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
