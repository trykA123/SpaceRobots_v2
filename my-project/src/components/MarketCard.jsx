import React from "react";
import { images } from "../utils/constants";

const MarketCard = () => {
  return (
    <div className="flex pr-12 z-40 group">
      <div className="flex flex-col w-96 h-[530px] bg-gray-15 rounded-md group-hover:bg-gradient-to-b from-teal-text-100 via-teal-text-40 to-teal-text-0">
        <div className="flex flex-col mx-auto">
          <img
            src="https://media.elrond.com/nfts/asset/QmZgZj5TajS1fSJrX3x1QGPTP3skj6QLoFsaDJpFYt3AA8/2571.png"
            alt=""
            className="w-80 h-80 mt-6 rounded-md"
          />
          <h3 className="font-chakraPetch text-2xl text-white pt-3 font-semibold">
            SPACE ROBOTS #1598
          </h3>
          <p className="text-white-40 pt-3">
            RANK:&nbsp;&nbsp;<span className="text-white">8</span>
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src={images.xlogo} alt="" className="w-7 h-7" />
              <h4 className="text-teal-text-100 text-2xl leading-[95px] font-chakraPetch font-semibold">
                0.35
              </h4>
            </div>
            <div className="flex items-center justify-center w-36 h-12 bg-teal-300 rounded-sm font-semibold">
              <a href="">BUY</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
