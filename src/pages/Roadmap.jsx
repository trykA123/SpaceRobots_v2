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
          <div className="flex h-[500px] md:h-[550px] lg:h-[600px] 3xl:h-[750px] 4xl:h-[850px] scrollbar-style">
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
