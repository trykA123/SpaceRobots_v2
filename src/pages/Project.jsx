import React from "react";
import robot from "../assets/images/upgraderobot.webp";

const Project = () => {
  return (
    <section id="project">
      <div className="h-screen w-screen bg-saturn bg-cover text-white">
        <div className="container-content">
          <div className="w-1/2 content">
            <div className="flex-col m-auto space-y-6 4xl:space-y-12 items-center justify-center">
              <h1 className="md:w-[600px] 4xl:w-[1080px]">UPGRADABLE ROBOTS</h1>
              <p className="md:w-[500px] 3xl:w-[750px]">
                Space Robots NFTs are part of an upgradable collection that
                allows collectors to enhance their digital assets over time.
                With each upgrade, the capabilities and abilities of the robot
                are expanded, providing new opportunities for exploration and
                discovery. As you progress through the collection, your Space
                Robot NFT becomes more advanced and valuable, reflecting the
                increasing knowledge and technological capabilities of our
                species. By owning a Space Robots NFT, you're not just
                collecting a unique digital asset, but also investing in the
                future of space exploration.
              </p>
              <div className="w-64 bg-teal-400 rounded-sm flex items-center justify-center cursor-pointer h-14">
                <a href="#" className="font-chakraPetch text-base uppercase">
                  Collection
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center my-[10%] 3xl:my-[5%] mx-auto">
            <img
              src={robot}
              alt=""
              className="object-contain 4xl:w-auto w-[60%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
