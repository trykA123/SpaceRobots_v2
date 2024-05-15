import {
  faDiscord,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import titleLogo from "../assets/images/logo.webp";

const Topnav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

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

  useEffect(() => {
    // Initially, show the nav with opacity-100
    const timer = setTimeout(() => {
      setShowNav(false); // After 5 seconds, hide the nav
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setShowNav(true);
  };

  const handleMouseLeave = () => {
    setShowNav(false);
  };

  return (
    <div>
      <nav
        className={`hidden lg:flex w-full lg:px-24 items-center lg:fixed justify-between  lg:h-20 z-50 duration-300 shadow-md bg-black  ${
          showNav ? "opacity-100" : "opacity-100"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Logo */}
        <div className="hidden md:flex md:flex-1 md:justify-center md:items-center">
          <a href="#hero" className="cursor-pointer">
            <img src={titleLogo} alt="SpaceRobots Logo" className="w-72" />
          </a>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex md:flex-1 md:justify-between md:items-center ">
          <li className="hover:text-teal-text-100 duration-300">Connect</li>
          <li className="hover:text-teal-text-100 duration-300">Market</li>
          <li className="relative group opacity-50 cursor-default ">
            <div className="flex items-center justify-center opacity-0 duration-500 absolute w-32 top-full left-0 bg-teal-text-100  py-2 px-4 group-hover:opacity-100  group-hover:translate-x-12 rounded-md">
              Soon
            </div>
            Stacking
          </li>
          <li className="relative group opacity-50 cursor-default">
            <div className="flex items-center justify-center opacity-0 duration-500 absolute w-32 top-full left-0 bg-teal-text-100 py-2 px-4 group-hover:opacity-100 group-hover:translate-x-12 rounded-md">
              Soon
            </div>
            Upgrading
          </li>
          <li>
            <a
              href="https://dapp.spacerobotsclub.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-text-100 duration-300"
            >
              DAPP
            </a>
          </li>
        </ul>

        <div className="hidden md:flex md:flex-1 md:justify-center md:items-center md:space-x-8">
          <a
            href="#"
            className="hover:scale-150 duration-300 hover:text-teal-text-100"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            className="hover:scale-150 hover:text-teal-text-100 duration-300"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href="#"
            className="hover:scale-150 hover:text-teal-text-100 duration-300"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        {/* Hamburger */}
      </nav>
      <div className="xl:hidden relative">
        <div className="fixed flex items-center justify-center h-10 rounded-full w-10 right-5 top-2 bg-teal-300 z-50">
          <button
            onClick={navToggle}
            id="menu-btn"
            type="button"
            className="z-40 block hamburger xl:hidden focus:outline-none"
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
        } flex-col items-center justify-center w-full min-h-screen py-1 font-chakraPetch text-lg  uppercase bg-mobile-menu-blue fixed z-40`}
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
            className="opacity-50 pointer-events-none"
            target="__blank"
          >
            Stacking
          </a>
          <a
            href="#"
            className="opacity-50 pointer-events-none"
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
            className="hover:scale-150 duration-300"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            className="hover:scale-150 duration-300"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href="#"
            className="hover:scale-150 duration-300"
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
