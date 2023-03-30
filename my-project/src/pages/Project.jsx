import React from "react";

const Project = () => {
  return (
    <section id="project">
      <div className="h-screen bg-slate-800 text-white">
        <div className="flex h-full w-full justify-around">
          <div className="flex-col space-y-11 items-center justify-center pt-[15%] pl-[10%]">
            <h1 className="md:w-[700px] xl:w-[1080px]">
              WELCOME TO GABMA CENTAURIS
            </h1>
            <p className="md:w-[600px] xl:w-[750px]">
              Space Robots NFTs are part of an upgradable collection that allows
              collectors to enhance their digital assets over time. With each
              upgrade, the capabilities and abilities of the robot are expanded,
              providing new opportunities for exploration and discovery. As you
              progress through the collection, your Space Robot NFT becomes more
              advanced and valuable, reflecting the increasing knowledge and
              technological capabilities of our species. By owning a Space
              Robots NFT, you're not just collecting a unique digital asset, but
              also investing in the future of space exploration.
            </p>
            <div className="w-64 bg-teal-400 rounded-sm flex items-center justify-center cursor-pointer h-14">
              <a href="#" className="font-chakraPetch text-base uppercase">
                Collection
              </a>
            </div>
          </div>
          <div className="flex md:w-72 lg:w-[450px] 2xl:w-[500px] pb-[3%] pt-[10%] md:h-96 lg:h-3/4 2xl:h-[90%]">
            <div className="border-r-2 border-l-2 w-full bg-projectImg bg-cover"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
