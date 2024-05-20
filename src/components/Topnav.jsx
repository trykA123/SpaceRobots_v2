import {
  faDiscord,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import titleLogo from "../assets/images/logo.webp";

const Topnav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const navToggle = () => {
    setIsMenuOpen(!isMenuOpen);

    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    btn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);

    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    btn.classList.remove("open");
    menu.classList.remove("flex");
    menu.classList.add("hidden");
  };

  const handleMouseEnter = () => setIsAboutHovered(true);
  const handleMouseLeave = () => setIsAboutHovered(false);

  return (
    <div>
      <nav className="top-0 z-50 hidden w-full items-center justify-between bg-background-color-2 shadow-md duration-300 lg:fixed lg:flex lg:h-20 ">
        {/* Logo */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
          <a href="#hero" className="cursor-pointer">
            <img src={titleLogo} alt="SpaceRobots Logo" className="w-72" />
          </a>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden text-accent-color md:flex md:flex-1 md:items-center md:justify-between">
          <li
            className="relative duration-300 hover:text-teal-text-100"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            About
            {isAboutHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: -10 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute left-0 top-full mt-2 rounded-md bg-slate-700 shadow-lg"
              >
                <ul
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="flex divide-y divide-gray-100 overflow-hidden"
                >
                  <li className="px-4 py-2 hover:bg-background-color-2">
                    Upgradeable Robots
                  </li>
                  <li className="px-4 py-2 hover:bg-background-color-2">
                    Stories
                  </li>
                  <li className="px-4 py-2 hover:bg-background-color-2">
                    Submenu 3
                  </li>
                </ul>
              </motion.div>
            )}
          </li>
          <li className="duration-300 hover:text-teal-text-100">Collection</li>
          <li className="duration-300 hover:text-teal-text-100">Collections</li>
          <li className="duration-300 hover:text-teal-text-100">Roadmap</li>
          <li>
            <a
              href="https://dapp.spacerobotsclub.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-300 hover:text-teal-text-100"
            >
              DAPP
            </a>
          </li>
        </ul>

        <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:space-x-8">
          <a
            href="#"
            className="duration-300 hover:scale-150 hover:text-teal-text-100"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            className="duration-300 hover:scale-150 hover:text-teal-text-100"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href="#"
            className="duration-300 hover:scale-150 hover:text-teal-text-100"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        {/* Hamburger */}
      </nav>
      <div className="relative xl:hidden">
        <div className="fixed right-5 top-2 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-teal-300">
          <button
            onClick={navToggle}
            id="menu-btn"
            type="button"
            className="hamburger z-40 block focus:outline-none xl:hidden"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      <div
        id="menu"
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } fixed z-40 min-h-screen w-full flex-col items-center justify-center bg-mobile-menu-blue  py-1 font-chakraPetch text-lg uppercase`}
      >
        <div className="flex flex-col items-center space-y-10 text-3xl font-bold leading-7">
          <a href="#collection" onClick={closeMenu}>
            Collection
          </a>
          <a href="#markets" onClick={closeMenu}>
            Markets
          </a>
          <a
            href="#"
            className="pointer-events-none opacity-50"
            target="__blank"
          >
            Stacking
          </a>
          <a
            href="#"
            className="pointer-events-none opacity-50"
            target="__blank"
          >
            Upgrading
          </a>
          <a href="#events" onClick={closeMenu}>
            Events
          </a>
          <a href="#roadmap" onClick={closeMenu}>
            RoadMap
          </a>
          <a href="#team" onClick={closeMenu}>
            Team
          </a>
        </div>
        <div className="flex space-x-12 pt-32 text-3xl">
          <a
            href="#"
            className="duration-300 hover:scale-150"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            className="duration-300 hover:scale-150"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href="#"
            className="duration-300 hover:scale-150"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <p className="absolute bottom-0 py-4 text-sm">
          &copy; 2023 SpaceRobots. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Topnav;
