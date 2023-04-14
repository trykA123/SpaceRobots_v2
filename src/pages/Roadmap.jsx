import React from "react";
import RoadmapQuater from "../components/RoadmapQuater";
import Timeline from "../components/round3";
const Roadmap = () => {
  return (
    <section className="h-screen ">
      <div className="flex flex-col h-full w-1/3 mx-auto pt-36 pb-8">
        <h1 className="flex w-full items-center justify-center h-32">
          ROADMAP
        </h1>
        <div className="flex items-center justify-center overflow-y-auto">
          <div className="bg-slate-950 h-full mt-10 mx-4 pt-48 w-2 relative ">
            <div className="sticky top-40 left-1/2 transform -translate-x-1/2 bg-blue-400 h-8 w-8 rounded-full border-4 border-white z-10"></div>
          </div>
          <div className="flex flex-col">
            <Timeline />
            <Timeline />
            <Timeline />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
