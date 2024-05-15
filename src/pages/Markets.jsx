import React, { useEffect, useState } from "react";
import backgroundRobotLogo from "../assets/images/backgroundLogo.webp";
import proteo from "../assets/images/proteo.webp";
import roboPack from "../assets/images/robopack.webp";
import robopartLogo from "../assets/images/robopartLogo_1.webp";
import spaceRobotLogo from "../assets/images/spacerobotlogo.webp";
import MarketCollection from "../components/MarketCollection";
import MobileTitle from "../components/MobileTitle";

import { motion } from "framer-motion";

const Markets = () => {
  const smallPacks = [
    {
      bgImg: robopartLogo,
      info: "Space Robots - Roboparts",
      collectionTicker: "SRP-ec2514",
    },
    {
      bgImg: roboPack,
      info: "Space Robots - General",
      collectionTicker: "SPACEROBOT-bfbf9d",
    },
    {
      bgImg: spaceRobotLogo,
      info: "Space Robots",
      collectionTicker: "SRC-27d8ff",
    },
    {
      bgImg: backgroundRobotLogo,
      info: "Space Robots - Backgrounds",
      collectionTicker: "SRB-0f1b1d",
    },
    {
      bgImg: proteo,
      info: "Proteo Robots",
      collectionTicker: "PROTEOROBO-6df9cd",
    },
  ];

  const smallPacksMobile = [
    {
      bgImg: robopartLogo,
      info: "Space Robots - Roboparts",
      collectionTicker: "SRP-ec2514",
    },
    {
      bgImg: roboPack,
      info: "Space Robots - General",
      collectionTicker: "SPACEROBOT-bfbf9d",
    },
    {
      bgImg: spaceRobotLogo,
      info: "Space Robots",
      collectionTicker: "SRC-27d8ff",
    },
    {
      bgImg: backgroundRobotLogo,
      info: "Space Robots - Backgrounds",
      collectionTicker: "SRB-0f1b1d",
    },
    {
      bgImg: proteo,
      info: "Proteo Robots",
      collectionTicker: "PROTEOROBO-6df9cd",
    },
    {
      bgImg: robopartLogo,
      info: "Space Robots - Roboparts",
      collectionTicker: "SRP-ec2514",
    },
    {
      bgImg: roboPack,
      info: "Space Robots - General",
      collectionTicker: "SPACEROBOT-bfbf9d",
    },
    {
      bgImg: spaceRobotLogo,
      info: "Space Robots",
      collectionTicker: "SRC-27d8ff",
    },
    {
      bgImg: backgroundRobotLogo,
      info: "Space Robots - Backgrounds",
      collectionTicker: "SRB-0f1b1d",
    },
    {
      bgImg: proteo,
      info: "Proteo Robots",
      collectionTicker: "PROTEOROBO-6df9cd",
    },
  ];

  const [selectedSmallPackIndex, setSelectedSmallPackIndex] = useState(2);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  useEffect(() => {
    // Attach a click event listener to the document or an outer container
    const handleClickOutside = (event) => {
      if (!event.target.closest(".grid")) {
        // User clicked outside the grid, so resume the animation
        setIsAnimationPaused(false);
      }
    };

    document.addEventListener("mouseover", handleClickOutside);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("mouseover", handleClickOutside);
    };
  }, []);

  return (
    <section id="markets">
      <div className="flex flex-col container w-full items-center gap-1 justify-around h-full py-4 my-12 mx-auto">
        <div className="w-full flex items-center justify-center">
          {/* <MobileTitle title="Markets" /> */}
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-accent-color text-2xl">NFT Marketplace</p>
            <h2 className="">Explore the latest Listings</h2>
          </div>
        </div>
        <div className="flex justify-center pb-12 rounded-xl shadow w-full">
          <div className="hidden md:grid md:grid-flow-col md:animate-none md:gap-3 lg:mt-2 xl:mt-8">
            {smallPacks.map((pack, index) => (
              <button
                key={index}
                className="flex items-center justify-center border-[1px] border-gray-15 relative duration-700 z-30 group mx-2 overflow-hidden rounded-md p-4 bg-secondary-color-2 hover:border-secondary-color"
                onClick={() => setSelectedSmallPackIndex(index)}
              >
                <p className="text-center abosolute font-bold">
                  {pack.info}
                </p>
              </button>
            ))}
          </div>
          <div
            className={`grid grid-flow-col animate-slide gap-3 overscroll-contain max-w-fit md:hidden ${
              isAnimationPaused ? "pause-animation" : ""
            }`}
          >
            {smallPacksMobile.map((pack, index) => (
              <button
                key={index}
                className="flex items-center justify-center w-32 h-32 3xl:w-40 3xl:h-40 4xl:w-48 4xl:h-48 border-[1px] border-gray-15 relative duration-700 z-30 group mx-2 xl:px-0 overflow-hidden rounded-md"
                onClick={() => {
                  setSelectedSmallPackIndex(index);
                  setIsAnimationPaused(true); // Pause animation on click
                }}
                onMouseEnter={() => setIsAnimationPaused(true)} // Pause animation on hover
                onMouseLeave={() => setIsAnimationPaused(false)} // Resume animation on leave
              >
                <div
                  className={`bg-cover opacity-40 group-hover:opacity-100 duration-500 w-full h-full absolute overflow-hidden`}
                  style={{ backgroundImage: `url(${pack.bgImg})` }}
                ></div>

                <p className="text-center abosolute font-bold opacity-100 group-hover:opacity-0 duration-500">
                  {pack.info}
                </p>
              </button>
            ))}
          </div>
        </div>
        <div>
          <MarketCollection
            selectedSmallPackIndex={selectedSmallPackIndex}
            collectionTicker={
              smallPacks[selectedSmallPackIndex].collectionTicker
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Markets;
