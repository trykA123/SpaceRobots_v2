import React, { useState } from "react";
import backgroundRobotLogo from "../assets/images/backgroundLogo.webp";
import proteo from "../assets/images/proteo.webp";
import roboPack from "../assets/images/robopack.webp";
import robopartLogo from "../assets/images/robopartLogo_1.webp";
import spaceRobotLogo from "../assets/images/spacerobotlogo.webp";
import MarketCollection from "../components/MarketCollection";

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

  return (
    <section id="markets">
      <div className="flex flex-col bg-background bg-cover pt-[5%] h-screen w-full md:items-center">
        <div className="flex px-4 md:px-0 space-x-12 md:justify-center py-10 rounded-xl shadow overflow-x-auto md:overflow-x-hidden md:w-full">
          {smallPacks.map((pack, index) => (
            <button
              key={index}
              className="flex items-center justify-center w-32 h-32 3xl:w-40 3xl:h-40 4xl:w-48 4xl:h-48 border-[1px] border-gray-15 relative duration-700 z-30 group px-12 md:px-0"
              onClick={() => setSelectedSmallPackIndex(index)}
            >
              <div
                className={`bg-cover opacity-40 group-hover:opacity-100 duration-500 w-full h-full absolute`}
                style={{ backgroundImage: `url(${pack.bgImg})` }}
              ></div>

              <p className="text-center abosolute font-bold text-white opacity-100 group-hover:opacity-0 duration-500">
                {pack.info}
              </p>
            </button>
          ))}
        </div>
        <div className="flex md:px-20">
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
