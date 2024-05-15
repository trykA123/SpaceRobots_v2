import {
  faDiscord,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBlog, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Footer = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const toggleTranslation = () => {
    setIsButtonPressed(!isButtonPressed);
  };

  return (
    <footer className="hidden w-screen fixed bottom-0 bg-transparent z-50 h-8  xl:px-24 lg:flex">
      <button className="w-6 h-8 animate-wiggle" onClick={toggleTranslation}>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`${
            isButtonPressed
              ? "rotate-0 duration-300"
              : "rotate-180 duration-300"
          }`}
        />
      </button>
      <div
        className={`w-full flex h-8 justify-between items-center duration-300   ${
          isButtonPressed
            ? "translate-y-16 opacity-0"
            : "-translate-y-0 opacity-100"
        }`}
      >
        <div className="h-8 flex justify-center flex-1">
          <p>&copy; 2023 SpaceRobots. All rights reserved.</p>
        </div>
        <div className="h-8 flex-1"></div>
        <div className="hidden md:flex md:justify-center items-center space-x-8 h-8 flex-1">
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
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
