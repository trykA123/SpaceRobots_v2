import React from "react";
import robo from "../assets/images/robo2.webp";

const TeamCard = ({ name, role }) => {
  return (
    <div className="group relative m-4 flex w-52 flex-col items-center overflow-hidden rounded-3xl shadow-sm transition-all duration-700 hover:w-full hover:shadow-accent-color 2xl:h-[700px]">
      <div className="h-full w-full rounded-lg">
        <img
          src={robo}
          alt="team-background"
          className="h-full w-full object-cover opacity-20 duration-700 group-hover:opacity-100"
        />
      </div>
      <h3 className="absolute top-1/2 -rotate-90 text-4xl duration-700 group-hover:rotate-0 group-hover:translate-y-36">
        {name}
      </h3>
      <div className="absolute bottom-0 z-50 hidden w-full items-end justify-between space-x-1 rounded-lg bg-background-color/70 p-2 shadow-md hover:flex">
        <div className=" flex-col items-start space-y-2">
          <h3 className="">{name}</h3>
          <h4 className="">{role}</h4>
        </div>
        <a className="" href="https://www.youtube.com" target="__blank">
          @link
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
