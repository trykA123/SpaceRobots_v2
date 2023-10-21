import React from "react";
import robo from "../assets/images/robo2.webp";

const TeamCard = ({ name, role }) => {
  return (
    <div className="relative rounded-md overflow-hidden p-4 w-64 lg:w-80 m-4 flex flex-col items-center group h-[350px] lg:h-[400px] shadow-lg shadow-teal-500">
      <div className="relative max-w-[100%] overflow-hidden rounded-lg transition-all group-hover:scale-200 duration-700">
        <img src={robo} alt="team-background" className="object-cover" />
      </div>
      <div className="flex space-x-1 z-50 items-end justify-between w-full">
        <div className="flex flex-col space-y-2 items-start">
          <h3 className="">{name}</h3>
          <h5 className="text-white">{role}</h5>
        </div>
        <a
          className="text-white"
          href="https://www.youtube.com"
          target="__blank"
        >
          @link
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
