import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="h-screen bg-slate-800 text-white relative">
        <div className="grid grid-cols-2 h-full w-full ml-[15%] pt-[15%] gap-x-20 absolute">
          <div className="flex-col space-y-11 items-center justify-center">
            <h1 className="w-[700px]">Explore the unknown with Space Robots</h1>
            <div className="flex space-x-6">
              <div className="w-64 bg-teal-400 rounded-sm flex items-center justify-center">
                <a href="#" className="font-chakraPetch text-base uppercase">
                  Connect wallet
                </a>
              </div>
              <p className="w-[600px]">
                Space Robots NFTs are unique digital collectibles that represent
                a robotic explorer in the vast universe. These NFTs offer a
                glimpse into the future of space exploration, where robots are
                sent to faraway planets to gather data and unlock the secrets of
                the cosmos.
              </p>
            </div>
          </div>
          <div className="flex items-end w-52">
            <video src="https://www.youtube.com/watch?v=nIcV-KLix3s"></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
