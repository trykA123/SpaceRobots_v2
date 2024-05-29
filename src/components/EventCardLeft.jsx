import { motion } from "framer-motion";
import React from "react";
import placeholderImg from "/assets/images/project.webp";

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
      className="clip-path group relative flex justify-end duration-700"
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
            className="group/button absolute flex h-52 w-full scale-0 flex-col items-center justify-center gap-4 bg-background-color-2 px-20 font-chakraPetch uppercase delay-300 duration-700 group-hover:flex group-hover:scale-100 2xl:text-3xl"
          >
            <h3 className="text-center">{date}</h3>
            <span className="h-[1px] w-0 self-start bg-accent-color delay-500 duration-700 group-hover/button:w-full"></span>
            Explore
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCardLeft;
