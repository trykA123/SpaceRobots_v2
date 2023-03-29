import React from "react";
import { images } from "../utils/constants";

const Navbar = () => {
  return (
    <div className="fixed z-30 hidden h-screen w-screen text-white md:block">
      <ul className="flex items-center justify-center space-x-36 w-full h-5 mt-10">
        <li className="cursor-auto">
          <img src={images.titleLogo} alt="" className="w-72" />
        </li>
        <li>Connect</li>
        <li>Market</li>
        <li>Stacking</li>
        <li>Upgrading</li>
        <li className="ml-20">5</li>
        <li className="ml-20">6</li>
        <li className="ml-20">7</li>
      </ul>
      <div className="flex items-center w-60 h-[90%] ml-14">
        <img src={images.sideMenu} alt="" className="h-[476px]" />
        <ul className="flex flex-col pr-20 justify-center space-y-[50px]">
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Collection</a>
          </li>
          <li>
            <a href="#">Markets</a>
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
