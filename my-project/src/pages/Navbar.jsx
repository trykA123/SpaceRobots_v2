import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { images } from "../utils/constants";
import titleLogo from "../assets/images/titleLogo.png"
import sideMenu from "../assets/images/sideMenu.svg"

const Navbar = () => {
  return (
    <div className="fixed z-30 hidden h-screen w-screen text-white md:block">
      <div className="grid grid-cols-3 h-10 mt-12">
        <div className="flex justify-center items-center">
          <a href="#hero" className="cursor-pointer">
            <img src={titleLogo} alt="" className="w-72" />
          </a>
        </div>
        <ul className="flex justify-between items-center">
          <li>Connect</li>
          <li>Market</li>
          <li class="opacity-50 before:content-['Stacking'] hover:before:content-['Soon'] duration-300"></li>
          <li className="opacity-50 before:content-['Upgrading'] hover:before:content-['Soon']"></li>
        </ul>
        <div className="flex justify-center items-center space-x-8">
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
      <div className="flex items-center w-60 h-[90%] ml-14">
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
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Road Map</a>
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
