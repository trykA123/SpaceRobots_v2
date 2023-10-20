import React from "react";
import MobileTitle from "../components/MobileTitle";
import Timeline from "../components/Timeline";
import { roadmapSections } from "../utils/roadmapConstants";

const Roadmap = () => {
  return (
    <section id="roadmap">
      <div className="roadmap-gradient h-screen md:pt-0">
        <div className="flex flex-col container items-center space-y-16 pt-16 mx-auto md:pt-24 2xl:pt-48 md:pb-8 max-w-7xl lg:pt-16">
          <MobileTitle title="Roadmap" />
          {/* <h1 className="flex w-full items-center justify-center h-32">
            ROADMAP
          </h1> */}
          <div className="flex h-[500px] md:h-[550px] lg:h-[600px] 3xl:h-[750px] 4xl:h-[850px] scrollbar-style">
            {/* <div className="bg-gradient-to-b from-teal-text-100 via-blue-400 to-purple-900 h-full mt-10 mx-4 pt-48 fixed">
            <div className="h-full w-2 left-1 relative">
              <div className="sticky top-40 left-1/2 transform -translate-x-1/2 bg-blue-400 h-8 w-8 rounded-full border-4 border-white z-10"></div>
            </div>
          </div> */}
            <div className="flex flex-col overflow-y-auto max-h-fit">
              {roadmapSections.map((section, index) => (
                <Timeline
                  key={index}
                  quater={section.title}
                  firstInfo={section.firstInfo}
                  secondInfo={section.secondInfo}
                  thirdInfo={section.thirdInfo}
                  fourthInfo={section.forthInfo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
