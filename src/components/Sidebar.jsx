import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed hidden xl:flex items-center lg:w-44 3xl:w-52 h-screen z-30 3xl:scale-100  group lg:ml-4">
      <ul className="flex flex-col w-full justify-center border-l-[2px] rounded-sm border-teal-400">
        <div className="flex w-full">
          <div className="h-[2px] w-1/5 bg-teal-400"></div>
        </div>
        <li className="flex w-full space-x-3 pt-12">
          <div className="h-[2px] w-[10%] bg-teal-400"></div>
          <a href="#project" className="-translate-y-[10px]">
            Project
          </a>
        </li>
        <li className="flex w-full space-x-3 pt-12">
          <div className="h-[2px] w-[10%] bg-teal-400"></div>
          <a href="#collection" className="-translate-y-[10px]">
            Collection
          </a>
        </li>
        <li className="flex w-full space-x-3 pt-12">
          <div className="h-[2px] w-[10%] bg-teal-400"></div>
          <a href="#markets" className="-translate-y-[10px]">
            Markets
          </a>
        </li>
        <li className="flex w-full space-x-3 pt-12">
          <div className="h-[2px] w-[10%] bg-teal-400"></div>
          <a href="#events" className="-translate-y-[10px]">
            Events
          </a>
        </li>
        <li className="flex w-full space-x-3 pt-12">
          <div className="h-[2px] w-[10%] bg-teal-400"></div>
          <a href="#roadmap" className="-translate-y-[10px]">
            RoadMap
          </a>
        </li>
        <li className="flex w-full space-x-3 pt-12">
          <div className="h-[2px] w-[10%] bg-teal-400"></div>
          <a href="#team" className="-translate-y-[10px]">
            Team
          </a>
        </li>
        <div className="flex w-full pt-8">
          <div className="h-[2px] w-1/5 bg-teal-400"></div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
