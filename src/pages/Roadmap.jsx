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
          <h2 className="mx-auto text-center mb-12">Building the universe</h2>
          <div className="flex flex-col lg:flex-row">
            <div className="grid gap-8 lg:grid-cols-3">
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
