import {
  faDiscord,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import titleLogo from "../assets/images/logo.webp";

const Navbar = () => {
  return (
    <div className="fixed hidden h-screen w-screen text-white md:block">
      <div className="flex items-center h-32 z-10">
        <div className="flex flex-1 justify-center items-center">
          <a href="#hero" className="cursor-pointer">
            <img src={titleLogo} alt="SpaceRobots Logo" className="w-72" />
          </a>
        </div>
        <ul className="flex flex-1 justify-between items-center h-full">
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
      <div className="flex items-center w-60 h-full ml-14 z-30">
        <ul className="flex flex-col w-full justify-center border-l-[2px] rounded-sm border-teal-400">
          <div className="flex w-full">
            <div class="h-[2px] w-1/5 bg-teal-400"></div>
          </div>
          <li className="flex w-full space-x-3 pt-12">
            <div class="h-[2px] w-[10%] bg-teal-400"></div>
            <a href="#project" className="-translate-y-[10px]">
              Project
            </a>
          </li>
          <li className="flex w-full space-x-3 pt-12">
            <div class="h-[2px] w-[10%] bg-teal-400"></div>
            <a href="#collection" className="-translate-y-[10px]">
              Collection
            </a>
          </li>
          <li className="flex w-full space-x-3 pt-12">
            <div class="h-[2px] w-[10%] bg-teal-400"></div>
            <a href="#markets" className="-translate-y-[10px]">
              Markets
            </a>
          </li>
          <li className="flex w-full space-x-3 pt-12">
            <div class="h-[2px] w-[10%] bg-teal-400"></div>
            <a href="#events" className="-translate-y-[10px]">
              Events
            </a>
          </li>
          <li className="flex w-full space-x-3 pt-12">
            <div class="h-[2px] w-[10%] bg-teal-400"></div>
            <a href="#roadmap" className="-translate-y-[10px]">
              RoadMap
            </a>
          </li>
          <li className="flex w-full space-x-3 pt-12">
            <div class="h-[2px] w-[10%] bg-teal-400"></div>
            <a href="#team" className="-translate-y-[10px]">
              Team
            </a>
          </li>
          <div className="flex w-full pt-8">
            <div class="h-[2px] w-1/5 bg-teal-400"></div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
