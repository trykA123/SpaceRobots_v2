import React from "react";
import Timeline from "../components/Timeline";
import TypewriteParagraph from "../components/TypewriteParagraph";
import { roadmapSections } from "../utils/roadmapConstants";

const Roadmap = () => {
  return (
    <section id="roadmap">
      <div className="">
        <div className="container mx-auto flex flex-col items-center pt-16">
          <TypewriteParagraph
            firstWord="The Past"
            secondWord="The Present"
            thirdWord="The Future"
          />
          <h2 className="mx-auto text-center">Building the universe</h2>
          <div className="hidden lg:flex">
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
