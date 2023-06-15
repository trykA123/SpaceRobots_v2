import React from "react";
import pack from "../assets/images/pack.webp";
import roboPack from "../assets/images/robopack.webp";
const MobileColectionPack = () => {
  return (
    <div className="flex w-full h-[80%] justify-center items-center overflow-hidden">
      <div className="relative opacity-100 duration-700 z-10 flex items-center">
        <div className="w-40 h-[480px] bg-gradient-to-b from-teal-text-100 to-transparent rounded-md">
          <p className="absolute top-3 font-chakraPetch text-xl uppercase left-6 text-white rounded-sm">
            Robopacks
          </p>
          <div className="flex flex-col space-y-24 pt-32 items-center absolute mx-auto z-10 -translate-x-4">
            <img
              src={roboPack}
              alt="Collection pack robopack image"
              className="scale-150"
            />
            <a
              href="#"
              className="flex items-center justify-center w-48 h-14 bg-teal-300 rounded-sm duration-300 -translate-y-2"
            >
              Open
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileColectionPack;
