import React from "react";
import banner from "../assets/images/banner.png";
import pack from "../assets/images/pack.png";
import roboPack from "../assets/images/robopack.png";

const CollectionPack = () => {
  return (
    <div className="flex flex-col w-[486px] 3xl:h-[934px] h-[80%] relative items-center justify-center text-white opacity-[15%] group hover:opacity-100 duration-700">
      <div className="flex items-center justify-center absolute z-10 top-0 w-full h-full bg-gradient-to-b from-gray-gradient-full via-gray-gradient to-gray-gradient-full"></div>
      <img
        src={pack}
        alt="Pack background"
        className="object-cover absolute top-0"
      />
      {/* TODO: move the image from bg to an img, and on bg add a gradient overit
       */}
      <div className="relative opacity-0 md:-translate-y-32 md:group-hover:translate-y-6 3xl:-translate-y-32 group-hover:opacity-100 3xl:group-hover:-translate-y-12 duration-700 ">
        <img src={banner} alt="" />
        <p className="absolute z-20 top-2 font-chakraPetch text-xl uppercase left-6">
          Robopacks
        </p>
      </div>
      <div className="flex flex-col pt-12 items-center absolute mx-auto px-20 opacity-0 group-hover:opacity-100 duration-700 z-30">
        <img
          src={roboPack}
          alt=""
          className="translate-y-96 scale-90 
          group-hover:-translate-y-0 3xl:group-hover:scale-110 duration-700"
        />
        <p className="py-10 text-base text-center">
          By owning a Space Robots NFT, you're not just collecting a unique
          digital asset, but also investing in the future of space exploration.
          you're not just collecting a unique digital asset, but also investing
          in the future of space exploration.
        </p>
        <div className="flex items-center justify-center w-64 h-14 bg-teal-300 rounded-sm translate-y-0 hover:-translate-y-2 duration-300">
          <a href="">Open</a>
        </div>
      </div>
    </div>
  );
};

export default CollectionPack;
