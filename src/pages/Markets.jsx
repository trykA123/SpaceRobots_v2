import React, { useState } from "react";
import roboPack from "../assets/images/robopack.png";
import MarketCollection from "../components/MarketCollection";

const Markets = () => {
  const smallPacks = [
    { bgImg: "roboPack", info: "Space Robots - Roboparts" },
    { bgImg: "packImg2", info: "Space Robots - General" },
    { bgImg: "packImg3", info: "Space Robots - Roboparts" },
    { bgImg: "packImg4", info: "Space Robots - Backgrounds" },
    { bgImg: "packImg5", info: "Proteo Robots" },
  ];
  const [selectedSmallPackIndex, setSelectedSmallPackIndex] = useState(0);

  return (
    <section id="markets">
      <div className="flex flex-col bg-background bg-cover pl-[10%] 4xl:pl-[15%] pt-[5%] h-screen w-screen">
        <div className="flex space-x-12 justify-center w-[90%] py-10">
          {smallPacks.map((pack, index) => (
            <button
              className="flex items-center justify-center md:w-32 md:h-32 3xl:w-40 3xl:h-40 4xl:w-48 4xl:h-48 border-[1px] border-gray-15 rounded-md relative duration-700 z-30 group"
              onClick={() => setSelectedSmallPackIndex(index)}
            >
              <div
                className={`bg-${pack.bgImg} bg-cover opacity-40 group-hover:opacity-100 duration-500`}
              ></div>
              <p className="text-center abosolute font-bold text-white opacity-100 group-hover:opacity-0 duration-500">
                {pack.info}
              </p>
            </button>
          ))}
        </div>
        <div className="flex px-20">
          <MarketCollection selectedSmallPackIndex={selectedSmallPackIndex} />
        </div>
      </div>
    </section>
  );
};

export default Markets;
