import React from "react";

const TeamCard = ({ name, role, image }) => {
  return (
    <div className="group relative m-4 flex h-32 flex-col items-center overflow-hidden shadow-sm transition-all duration-700 hover:h-[600px] hover:shadow-accent-color lg:w-52 lg:hover:w-96 xl:h-[700px] xl:hover:h-[700px]">
      <div className="h-full w-full rounded-lg">
        <img
          src={image}
          alt="team-background"
          className="h-full w-full object-cover opacity-30 duration-700 group-hover:opacity-100"
        />
      </div>
      <h3 className="absolute top-1/2 z-30 animate-pulse text-4xl duration-700 group-hover:rotate-0 group-hover:animate-none md:group-hover:translate-y-32 md:group-hover:text-2xl lg:-rotate-90 xl:group-hover:translate-y-48 xl:group-hover:text-4xl">
        {name}
      </h3>
      <div className="absolute bottom-0 z-20 flex w-full flex-col items-center justify-center space-x-1 bg-background-color/70 p-2 opacity-0 shadow-md duration-700 group-hover:opacity-100 md:h-32 xl:h-44">
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
