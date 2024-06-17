import React, { useEffect, useState } from "react";
import MarketCollection from "../components/MarketCollection";
import TypewriteParagraph from "../components/TypewriteParagraph";
import backgroundRobotLogo from "/assets/images/backgroundLogo.webp";
import proteo from "/assets/images/proteo.webp";
import roboPack from "/assets/images/robopack.webp";
import robopartLogo from "/assets/images/robopartLogo_1.webp";
import spaceRobotLogo from "/assets/images/spacerobotlogo.webp";

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
      <div className="container mx-auto my-12 flex h-full w-full flex-col items-center justify-around gap-1 py-4">
        <div className="flex w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center py-12">
            <TypewriteParagraph
              firstWord="SRC"
              secondWord="SRP"
              thirdWord="Robo"
            />
            <h2 className="mx-auto text-center">Explore the latest Listings</h2>
          </div>
        </div>
        <div className="flex w-full overflow-x-auto rounded-xl pb-12 shadow lg:justify-center">
          <div className="flex md:animate-none md:gap-3 lg:mt-2 xl:mt-8">
            {smallPacks.map((pack, index) => (
              <button
                type="button"
                key={index} // Assuming pack has a unique identifier like 'id'
                className="group relative z-30 mx-2 flex w-48 items-center justify-center overflow-hidden rounded-md border-[1px] border-gray-15 bg-secondary-color-2 p-4 duration-700 hover:border-secondary-color lg:w-auto"
                onClick={() => setSelectedSmallPackIndex(index)}
              >
                <p className="abosolute text-center font-bold">{pack.info}</p>
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
