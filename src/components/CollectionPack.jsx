import React from "react";
import banner from "../assets/images/banner.png";
import pack from "../assets/images/pack.png";
import roboPack from "../assets/images/robopack.png";

const CollectionPack = () => {
  return (
    <div className="flex flex-col w-[484px] 4xl:h-[934px] md:h-full relative items-center justify-center text-white opacity-[15%] group hover:opacity-100 duration-700">
      <div className="flex items-center justify-center absolute z-10 top-0 w-full h-full bg-gradient-to-b from-gray-gradient-full via-gray-gradient to-gray-gradient-full"></div>
      <img
        src={pack}
        alt="Pack background"
        className="object-cover absolute top-0 h-full"
      />
      <div className="relative opacity-0 md:-translate-y-32 md:group-hover:translate-y-0 3xl:group-hover:translate-y-0 group-hover:opacity-100 4xl:group-hover:-translate-y-12 duration-700 z-20">
        {/* <img src={banner} alt="" className="md:h-[90%] 3xl:h-full" /> */}
        <div className="w-40 h-[370px] 3xl:h-[540px] bg-gradient-to-b from-teal-text-100 to-transparent rounded-md">
          <p className="absolute top-2 font-chakraPetch text-xl uppercase left-6">
            Robopacks
          </p>
        </div>
      </div>
      <div className="flex flex-col pt-12  items-center absolute mx-auto opacity-0 group-hover:opacity-100 duration-700 z-30">
        <img
          src={roboPack}
          alt=""
          className="translate-y-96 scale-90 md:group-hover:translate-y-16
          3xl:group-hover:-translate-y-0 3xl:group-hover:scale-110 duration-700"
        />
        <p className="py-10 text-base text-center">
          By owning a Space Robots NFT, you're not just collecting a unique
          digital asset, but also investing in the future of space exploration.
        </p>
        <a
          href="#"
          className="flex items-center justify-center w-36 3xl:w-64 h-14 bg-teal-300 rounded-sm translate-y-0 hover:-translate-y-2 duration-300"
        >
          Open
        </a>
      </div>
    </div>
  );
};

export default CollectionPack;
