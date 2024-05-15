import React from "react";
import MobileTitle from "../components/MobileTitle";
import Timeline from "../components/Timeline";
import { roadmapSections } from "../utils/roadmapConstants";

const Roadmap = () => {
  return (
    <section id="roadmap">
      <div className="">
        <div className="container mx-auto flex flex-col items-center space-y-16 pt-16">
          <p className="font-chakraPetch text-2xl uppercase text-accent-color">
            Roadmap
          </p>
          <h2 className="mb-12">Building the universe</h2>
          <div className="flex ">
            <div className="grid grid-cols-3 gap-8">
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
