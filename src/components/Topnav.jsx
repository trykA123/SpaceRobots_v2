import {
  faDiscord,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import titleLogo from "../assets/images/logo.webp";

const Topnav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navToggle = () => {
    setIsMenuOpen(!isMenuOpen);

    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    btn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
  };

  return (
    <div>
      <nav className="hidden container md:px-24 md:flex items-center md:fixed justify-between text-white md:h-32">
        {/* Logo */}
        <div className="hidden md:flex md:flex-1 md:justify-center md:items-center">
          <a href="#hero" className="cursor-pointer">
            <img src={titleLogo} alt="SpaceRobots Logo" className="w-72" />
          </a>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex md:flex-1 md:justify-between md:items-center">
          <li className="">Connect</li>
          <li>Market</li>
          <li className="relative group opacity-50 cursor-default">
            <div className="flex items-center justify-center opacity-0 duration-500 absolute w-32 top-full left-0 bg-teal-text-100 text-white py-2 px-4 group-hover:opacity-100  group-hover:translate-x-12 rounded-md">
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
            >
              DAPP
            </a>
          </li>
        </ul>

        <div className="hidden md:flex md:flex-1 md:justify-center md:items-center md:space-x-8">
          <a href="#" className="hover:scale-150 duration-300">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="hover:scale-150 duration-300">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="#" className="hover:scale-150 duration-300">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        {/* Hamburger */}
      </nav>
      <div className="md:hidden absolute flex items-center justify-center h-10 rounded-full w-10 right-5 top-5 bg-teal-300">
        <button
          onClick={navToggle}
          id="menu-btn"
          type="button"
          className="z-40 block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div
        id="menu"
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-center justify-center w-full min-h-screen py-1 font-chakraPetch text-lg text-white uppercase bg-mobile-menu-blue`}
      >
        <div className="flex flex-col items-center space-y-10 text-3xl font-bold leading-7">
          <a href="#" target="__blank">
            Collection
          </a>
          <a href="#" target="__blank">
            Markets
          </a>
          {/* <a href="#" className="opacity-50" target="__blank">
            Stacking
          </a>
          <a href="#" className="opacity-50" target="__blank">
            Upgrading
          </a> */}
          <a href="#" target="__blank">
            Events
          </a>
          <a href="#" target="__blank">
            Road Map
          </a>
          <a href="#" target="__blank">
            Team
          </a>
        </div>
        <div className="flex space-x-12 pt-32 text-3xl">
          <a href="#" className="hover:scale-150 duration-300">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="hover:scale-150 duration-300">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="#" className="hover:scale-150 duration-300">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topnav;