import React from "react";

const MarketCard = () => {
  return (
    <div className="flex pr-12">
      <div className="flex flex-col w-96 h-[530px] bg-gray-15 rounded-md">
        <div className="flex flex-col mx-auto space-y-3">
          <img src="" alt="" className="w-80 h-80 mt-6 rounded-md" />
          <h3>SPACE ROBOTS #1598</h3>
          <p>
            RANK <span>8</span>
          </p>
          <div className="flex justify-between items-center">
            <div className="flex">
              <span>ICON</span>
              <h4 className="text-teal-700 text-lg">0.35</h4>
            </div>
            <div className="flex items-center justify-center w-36 h-12 bg-teal-300 rounded-sm">
              <a href="">BUY</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
