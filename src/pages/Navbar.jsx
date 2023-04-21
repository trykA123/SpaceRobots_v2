import {
  faDiscord,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import titleLogo from "../assets/images/logo.png";
import sideMenu from "../assets/images/sidemenu.svg";

const Navbar = () => {
  return (
    <div className="fixed hidden h-screen w-screen text-white md:block">
      <div className="flex items-center h-32 z-30">
        <div className="flex flex-1 justify-center items-center">
          <a href="#hero" className="cursor-pointer">
            <img src={titleLogo} alt="" className="w-72" />
          </a>
        </div>
        <ul className="flex flex-1 justify-between items-center h-full">
          <li className="">Connect</li>
          <li>Market</li>
          <li className="relative group opacity-50">
            <div className="flex items-center justify-center opacity-0 duration-500 absolute w-32 top-full left-0 bg-teal-text-100 text-white py-2 px-4 group-hover:opacity-100  group-hover:translate-x-12 rounded-md">
              Soon
            </div>
            Stacking
          </li>
          <li className="relative group opacity-50">
            <div className="flex items-center justify-center opacity-0 duration-500 absolute w-32 top-full left-0 bg-teal-text-100 py-2 px-4 group-hover:opacity-100 group-hover:translate-x-12 rounded-md">
              Soon
            </div>
            Upgrading
          </li>
          <li>
            <a href="https://dapp.spacerobotsclub.com/" target="_blank">
              DAPP
            </a>
          </li>
        </ul>

        <div className="flex flex-1 justify-center items-center space-x-8">
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
      <div className="flex items-center w-60 h-[90%] ml-14 z-30">
        <img src={sideMenu} alt="" className="h-[476px]" />
        <ul className="flex flex-col pr-20 justify-center space-y-[50px]">
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#collection">Collection</a>
          </li>
          <li>
            <a href="#markets">Markets</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#roadmap">Road Map</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
