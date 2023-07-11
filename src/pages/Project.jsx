import React from "react";
import robot from "../assets/images/upgraderobot.webp";
import MobileTitle from "../components/MobileTitle";

const Project = () => {
  return (
    <section id="project">
      <div className="h-screen w-screen roadmap-gradient bg-cover text-white">
        {/* roadmap-gradient / bg-saturn */}
        <div className="w-full h-full xl:hidden py-12 flex justify-center px-12">
          <div className="flex flex-col items-center py-24 space-y-8 w-full mx-auto">
            <MobileTitle title="Project" />
            <h1 className="text-center mt-24">Welcome to Gamba Centauri</h1>
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              necessitatibus sint repellat perspiciatis ducimus, odit rem
              voluptatum quo nostrum dignissimos delectus quod earum itaque
              adipisci. Sit odit rerum similique asperiores?
            </p>
            <div className="hidden md:flex w-full items-center justify-center pt-14 mx-auto">
              <img
                src={robot}
                alt="Robot NFT background"
                className="object-contain 4xl:w-auto w-[60%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="hidden xl:flex container-content">
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
              alt="Robot NFT background"
              className="object-contain 4xl:w-auto w-[60%]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
