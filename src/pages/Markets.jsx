import React, { useEffect, useState } from "react";
import backgroundRobotLogo from "../assets/images/backgroundLogo.webp";
import proteo from "../assets/images/proteo.webp";
import roboPack from "../assets/images/robopack.webp";
import robopartLogo from "../assets/images/robopartLogo_1.webp";
import spaceRobotLogo from "../assets/images/spacerobotlogo.webp";
import MarketCollection from "../components/MarketCollection";
import MobileTitle from "../components/MobileTitle";

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

    document.addEventListener("click", handleClickOutside);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section id="markets">
      <div className="flex flex-col roadmap-gradient bg-cover h-screen w-full xl:items-center justify-center xl:justify-normal overflow-x-hidden">
        <div className="xl:hidden w-full flex items-center justify-center pb-4">
          <MobileTitle title="Markets" />
        </div>
        <div className="flex md:px-0 space-x-8 md:justify-center py-2 md:py-10 lg:py-24 xl:py-28 rounded-xl shadow w-full">
          <div className="hidden md:grid md:grid-flow-col md:animate-none md:gap-3 lg:mt-2 xl:mt-8">
            {smallPacks.map((pack, index) => (
              <button
                key={index}
                className="flex items-center justify-center w-32 h-32 3xl:w-40 3xl:h-40 4xl:w-48 4xl:h-48 border-[1px] border-gray-15 relative duration-700 z-30 group mx-2 xl:px-0 overflow-hidden rounded-md"
                onClick={() => setSelectedSmallPackIndex(index)}
              >
                <div
                  className={`bg-cover opacity-40 group-hover:opacity-100 duration-500 w-full h-full absolute overflow-hidden`}
                  style={{ backgroundImage: `url(${pack.bgImg})` }}
                ></div>

                <p className="text-center abosolute font-bold text-white opacity-100 group-hover:opacity-0 duration-500">
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

                <p className="text-center abosolute font-bold text-white opacity-100 group-hover:opacity-0 duration-500">
                  {pack.info}
                </p>
              </button>
            ))}
          </div>
        </div>
        <div className="flex xl:px-20">
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
