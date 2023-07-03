import React from "react";
import robo from "../assets/images/robo2.webp";

const TeamCard = ({name, role}) => {
  return (
    <div className="team-card p-4 w-80 m-4 flex flex-col items-center group h-96">
      <div className="relative max-w-[100%] max-h-[250px] m-0 overflow-hidden rounded-lg p-4 transition-all group-hover:scale-110 ">
        <img src={robo} alt="" />
      </div>
      <div className="flex flex-col space-y-1 z-50 py-4">
        <h3 className="">{name}</h3>
        <h5 className="text-white group-hover:text-red-600">{role}</h5>
        <p className="text-white">Social</p>
      </div>
    </div>
  );
};

export default TeamCard;
