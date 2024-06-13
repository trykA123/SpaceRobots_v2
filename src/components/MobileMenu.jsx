import {
  faDiscord,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import titleLogo from "/assets/images/logo.webp";

const MobileMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="container fixed left-0 right-0 top-8 z-40 mx-auto flex w-full justify-end transition-all duration-300 ease-in-out lg:hidden">
      <div
        ref={menuRef}
        className={`relative ${isDropdownOpen ? "w-full pb-4" : "w-12"} rounded-2xl bg-background-color shadow-lg transition-all duration-300 `}
      >
        <div className="flex h-10 items-center justify-end p-3 px-4">
          <button
            onClick={toggleDropdown}
            className="flex flex-col gap-1"
            type="button"
          >
            <div className="h-[2px] w-4 bg-white"/>
            <div className="h-[2px] w-4 bg-white"/>
            <div className="h-[2px] w-4 bg-white"/>
          </button>
        </div>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="flex flex-col justify-center gap-4 p-4">
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group flex h-16 w-72 flex-col items-center justify-center self-center rounded-xl bg-background-color-2 px-8 py-4 font-chakraPetch text-xl uppercase shadow-md"
                  href="#about"
                  onClick={handleLinkClick}
                >
                  About
                  <span className="h-[1px] w-0 self-start bg-accent-color duration-300 group-hover:w-full"></span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group flex h-16 w-72 flex-col items-center justify-center self-center rounded-xl bg-background-color-2 px-8 py-4 font-chakraPetch text-xl uppercase shadow-md"
                  href="#collections"
                  onClick={handleLinkClick}
                >
                  Collections
                  <span className="h-[1px] w-0 self-start bg-accent-color duration-300 group-hover:w-full"></span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group flex h-16 w-72 flex-col items-center justify-center self-center rounded-xl bg-background-color-2 px-8 py-4 font-chakraPetch text-xl uppercase shadow-md"
                  href="#stories"
                  onClick={handleLinkClick}
                >
                  Stories
                  <span className="h-[1px] w-0 self-start bg-accent-color duration-300 group-hover:w-full"></span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group flex h-16 w-72 flex-col items-center justify-center self-center rounded-xl bg-background-color-2 px-8 py-4 font-chakraPetch text-xl uppercase shadow-md"
                  href="#roadmap"
                  onClick={handleLinkClick}
                >
                  Roadmap
                  <span className="h-[1px] w-0 self-start bg-accent-color duration-300 group-hover:w-full"></span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group flex h-16 w-72 flex-col items-center justify-center self-center rounded-xl bg-background-color-2 px-8 py-4 font-chakraPetch text-xl uppercase shadow-md"
                  href="#team"
                  onClick={handleLinkClick}
                >
                  Team
                  <span className="h-[1px] w-0 self-start bg-accent-color duration-300 group-hover:w-full"></span>
                </motion.a>
                {/* Socials */}
                <div className="flex justify-center gap-6 py-8">
                  <a href="">
                    <FontAwesomeIcon
                      icon={faDiscord}
                      className="text-2xl duration-100 hover:scale-110 hover:text-accent-color"
                    />
                  </a>
                  <a href="">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-2xl duration-100 hover:scale-110 hover:text-accent-color"
                    />
                  </a>
                  <a href="">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="text-2xl duration-100 hover:scale-110 hover:text-accent-color"
                    />
                  </a>
                  <a href="">
                    <FontAwesomeIcon
                      icon={faBlog}
                      className="text-2xl duration-100 hover:scale-110 hover:text-accent-color"
                    />
                  </a>
                </div>
                <a href="#hero" className="flex justify-center">
                  <img
                    src={titleLogo}
                    alt="SpaceRobots Logo"
                    className="w-72"
                  />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default MobileMenu;
