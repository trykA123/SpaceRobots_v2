import React from "react";
import MarketCard from "../components/MarketCard";
import { images } from "../utils/constants";

const Markets = () => {
  const smallPacks = [
    { bgImg: "packImg1", number: 1 },
    { bgImg: "packImg2", number: 2 },
    { bgImg: "packImg3", number: 3 },
    { bgImg: "packImg4", number: 4 },
    { bgImg: "packImg5", number: 5 },
  ];

  const cards = [{ bgImg: "bg-packImg", number: 1 }];

  let numCards = 3;
  if (window.innerWidth >= 1920 && window.innerWidth < 3440) {
    numCards = 4;
  } else if (window.innerWidth >= 3440) {
    numCards = 5;
  }

  return (
    <section id="markets">
      <div className="flex flex-col bg-slate-600 pl-[15%] pt-[5%] h-screen w-screen">
        <div className="flex space-x-12 justify-center w-[90%] py-10">
          {smallPacks.map((pack) => (
            <div className="flex items-center justify-center w-36 h-36 border-[1px] rounded-md relative duration-700 z-30 group">
              <div
                className={`bg-${pack.bgImg} bg-cover opacity-40 group-hover:opacity-100`}
              ></div>
              <p className="position abosolute text-white opacity-100 group-hover:opacity-0">
                {pack.number}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col px-20">
          <div className="flex py-10">
            <img src={images.roboPack} alt="" className="w-24 h-24" />
            <div className="flex flex-col px-12">
              <h2 className="text-4xl text-white uppercase font-chakraPetch mb-4">
                Space Robots
              </h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                illo excepturi deleniti sint et eius, ducimus architecto eos
                labore
              </p>
            </div>
          </div>
          <div className="flex">
            {[...Array(numCards)].map((_, i) => (
              <MarketCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;
