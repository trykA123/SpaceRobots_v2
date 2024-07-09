import { motion } from "framer-motion";
import React from "react";
import placeholderImg from "/assets/images/project.webp";

const EventCard = ({ title, description, openModal }) => {
  const handleClick = () => {
    // Call the openModal function with the appropriate title and description
    openModal(title, description);
  };

  const item = {
    hidden: { opacity: 0, x: -250 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      variants={item}
      className="lg:clip-path group relative flex h-32 justify-end border border-accent-color duration-700 lg:h-auto lg:border-none"
    >
      <img
        src={placeholderImg}
        alt="Story background"
        className="hidden h-full w-full bg-cover blur duration-700 group-hover:blur-0 lg:block"
      />
      <div className="absolute flex h-full w-full flex-col justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h3 className="animate-pulse text-center delay-300 duration-700 group-hover:rotate-0 group-hover:scale-0 group-hover:text-base group-hover:opacity-0 lg:-rotate-90 lg:animate-none">
            {title}
          </h3>
          <button
            type="button"
            onClick={handleClick}
            className="group/button absolute flex w-full scale-0 flex-col items-center justify-center gap-4 bg-background-color-2 px-20 font-chakraPetch uppercase delay-300 duration-700 group-hover:flex group-hover:scale-100 lg:h-64 2xl:text-3xl"
          >
            <h3 className="hidden text-center lg:block">{title}</h3>
            <span className="hidden lg:block lg:h-[1px] lg:w-0 lg:self-start lg:bg-accent-color lg:delay-500 lg:duration-700 lg:group-hover/button:w-full" />
            Explore
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
