import React from "react";


const TeamCard = ({ name, role, image }) => {
  return (
    <div className="group relative m-4 flex w-52 flex-col items-center overflow-hidden  shadow-sm transition-all duration-700 hover:w-96 hover:shadow-accent-color 2xl:h-[700px]">
      <div className="h-full w-full rounded-lg">
        <img
          src={image}
          alt="team-background"
          className="h-full w-full object-cover opacity-30 duration-700 group-hover:opacity-100"
        />
      </div>
      <h3 className="absolute top-1/2 z-30 -rotate-90 animate-pulse text-4xl duration-700 group-hover:translate-y-48 group-hover:rotate-0 group-hover:animate-none">
        {name}
      </h3>
      <div className="absolute bottom-0 z-20 flex h-44 w-full flex-col items-center justify-center space-x-1 bg-background-color p-2 opacity-0 shadow-md duration-700 group-hover:opacity-100">
        <div className="flex-col items-start space-y-2">
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
