import React from "react";
import RoadmapPhase from "../components/RoadmapPhase";
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
          <h2 className="mx-auto mb-12 text-center">Building the universe</h2>
          <div className="flex flex-col lg:flex-row">
            <div className="grid gap-8 lg:grid-cols-3">
              {roadmapSections.map((section, index) => (
                <RoadmapPhase
                  key={index}
                  quater={section.title}
                  firstMilestoneCard={section.firstMilestoneCard}
                  secondMilestoneCard={section.secondMilestoneCard}
                  thirdMilestoneCard={section.thirdMilestoneCard}
                  forthMilestoneCard={section.forthMilestoneCard}
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
