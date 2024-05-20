import { motion } from "framer-motion";
import React from "react";
import placeholderImg from "../assets/images/project.webp";

const EventCardLeft = ({ info, date, openModal }) => {
  const handleClick = () => {
    // Call the openModal function with the appropriate title and description
    openModal("Event Title", "Event Description");
  };

  const item = {
    hidden: { opacity: 0, x: -250 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      variants={item}
      className="clip-path group relative flex justify-end duration-700 hover:-translate-y-4"
    >
      <img
        src={placeholderImg}
        alt="Story background"
        className="h-full blur duration-700 group-hover:blur-0"
      />
      <div className="absolute flex h-full w-full flex-col justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h3 className="-rotate-90 delay-300 duration-700 group-hover:rotate-0 group-hover:scale-0 group-hover:text-base group-hover:opacity-0">
            {date}
          </h3>
          <button
            onClick={handleClick}
            className="upper absolute h-40 w-full scale-0 items-center justify-center gap-4 bg-background-color-2 font-chakraPetch delay-300 duration-700 group-hover:flex group-hover:scale-100 2xl:text-3xl"
          >
            Explore
          </button>
          {/* <p className="opacity-70">{info}</p> */}
        </div>
        {/* <div className="flex items-center justify-between">
          
        </div> */}
      </div>
    </motion.div>
  );
};

export default EventCardLeft;
