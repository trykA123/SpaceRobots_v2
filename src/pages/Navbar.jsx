import {
  faDiscord,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import titleLogo from "../assets/images/logo.webp";
import Topnav from "../components/Topnav";
import Sidebar from "../components/Sidebar";

const Navbar = () => {
  return (
    // TODO: modify navbar to navigation
    // TODO: create 2 seprate components navbar (that will handle the top navigation and mobile navigation) and sidebar only for desktop
    <nav>
      <Topnav />
      <Sidebar />
    </nav>
  );
};

export default Navbar;
