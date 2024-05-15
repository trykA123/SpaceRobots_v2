import React from "react";
import placeholderImg from "../assets/images/project.webp";

const EventCardLeft = ({ info, date, openModal }) => {
  const handleClick = () => {
    // Call the openModal function with the appropriate title and description
    openModal("Event Title", "Event Description");
  };
  return (
    <div className="clip-path group relative flex justify-end">
      <img
        src={placeholderImg}
        alt="Story background"
        className="h-full blur duration-500 group-hover:blur-0"
      />
      <div className="absolute flex h-full flex-col justify-center">
        <div className="flex h-full flex-col items-center justify-center">
          <h3 className="-rotate-90 duration-500 group-hover:opacity-0">
            {date}
          </h3>
          <button
            onClick={handleClick}
            className="upper absolute  flex items-center justify-center gap-4 rounded-sm bg-teal-text-100 text-background-color duration-500 md:h-8 md:w-24 3xl:h-12 3xl:w-36 hover:3xl:w-48"
          >
            Explore
          </button>
          {/* <p className="opacity-70">{info}</p> */}
        </div>
        {/* <div className="flex items-center justify-between">
          
        </div> */}
      </div>
    </div>
  );
};

export default EventCardLeft;
