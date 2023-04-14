import React from "react";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-auto">
        <div className="sticky top-0 bg-white py-3 z-10 shadow-xl shadow-slate-300">
          <h4 className="group-date">Q1 2023</h4>
        </div>
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
      </div>
    </div>
  );
};

export default Timeline;
