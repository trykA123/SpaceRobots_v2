import React from "react";
import TimelineItem from "./MilestoneCard";

const RoadmapQuater = () => {
  return (
    <div>
      <div className="container bg-slate-950 mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-[50%]"/>
          <TimelineItem
            position="right"
            number="1"
            title="Lorem Ipsum"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <TimelineItem
            position="left"
            number="3"
            title="Lorem Ipsum"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
        </div>
      </div>
    </div>
  );
};

export default RoadmapQuater;
