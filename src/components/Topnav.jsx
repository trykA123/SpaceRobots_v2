import {
  faDiscord,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBlog, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import titleLogo from "../assets/images/logo.webp";

const Topnav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="container top-8 z-50 mx-auto hidden w-full transition-all duration-300 ease-in-out lg:fixed lg:left-0 lg:right-0 lg:flex">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-between rounded-2xl bg-background-color px-8 shadow-lg">
        <div className="flex w-full items-center justify-between lg:h-20">
          <a href="#hero" className="cursor-pointer">
            <img src={titleLogo} alt="SpaceRobots Logo" className="w-72" />
          </a>
          <div className="flex h-full items-center gap-6 px-4 text-lg">
            <div
              className="group relative flex h-full items-center gap-2 font-chakraPetch uppercase"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Project
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`duration-200 ${isDropdownOpen ? "-rotate-90" : "rotate-0"}`}
              />
            </div>
          </div>
          {/* Socials */}
          <div className="flex gap-4">
            <a href="">
              <FontAwesomeIcon
                icon={faDiscord}
                className="duration-100 hover:scale-110 hover:text-accent-color"
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faTwitter}
                className="duration-100 hover:scale-110 hover:text-accent-color"
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faYoutube}
                className="duration-100 hover:scale-110 hover:text-accent-color"
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faBlog}
                className="duration-100 hover:scale-110 hover:text-accent-color"
              />
            </a>
          </div>
          <button className="group flex w-64 flex-col items-center rounded-xl bg-accent-color px-8 py-4 uppercase text-background-color duration-500 hover:bg-transparent hover:text-modal-text">
            Launch Dapp
            <span className="h-[1px] w-0 bg-accent-color duration-300 group-hover:w-full"></span>
          </button>
        </div>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden rounded-b-2xl bg-background-color shadow-lg"
            >
              <div className="grid grid-cols-5 gap-4 py-4">
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group col-span-1 row-span-1 flex h-16 w-full flex-col items-center  justify-center  rounded-xl bg-background-color-2 px-8 py-4 font-chakraPetch text-xl uppercase shadow-md"
                  href="#about"
                >
                  About
                  <span className="h-[1px] w-0 bg-accent-color duration-300 group-hover:w-full"></span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group col-span-1 row-span-1 flex h-16 w-full flex-col items-center  justify-center  rounded-xl bg-background-color-2 px-8 py-4 font-chakraPetch text-xl uppercase shadow-md"
                  href="#collections"
                >
                  Collections
                  <span className="h-[1px] w-0 bg-accent-color duration-300 group-hover:w-full"></span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group col-span-1 row-span-1 flex h-16 w-full flex-col items-center  justify-center  rounded-xl bg-background-color-2 px-8 py-4 font-chakraPetch text-xl uppercase shadow-md"
                  href="#stories"
                >
                  Stories
                  <span className="h-[1px] w-0 bg-accent-color duration-300 group-hover:w-full"></span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group col-span-1 row-span-1 flex h-16 w-full flex-col items-center  justify-center  rounded-xl bg-background-color-2 px-8 py-4 font-chakraPetch text-xl uppercase shadow-md"
                  href="#roadmap"
                >
                  Roadmap
                  <span className="h-[1px] w-0 bg-accent-color duration-300 group-hover:w-full"></span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group col-span-1 row-span-1 flex h-16 w-full flex-col items-center  justify-center  rounded-xl bg-background-color-2 px-8 py-4 font-chakraPetch text-xl uppercase shadow-md"
                  href="#team"
                >
                  Team
                  <span className="h-[1px] w-0 bg-accent-color duration-300 group-hover:w-full"></span>
                </motion.a>
                {/* <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-24 w-full rounded-2xl bg-background-color-2"
                ></motion.button> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Topnav;
