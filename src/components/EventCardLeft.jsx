import React from "react";

const EventCardLeft = () => {
  return (
    <div className="flex w-full justify-end">
      <div className="flex w-[450px] 3xl:w-[600px] 3xl:h-[160px] items-center space-x-6 justify-between">
        <div className="flex flex-col space-y-6 3xl:w-[400px] w-64">
          <p className="h-20 text-base text-white leading-4">
            Space Robots NFTs are part of an upgradable collection that allows
            collectors to enhance their digital assets over time. With each
            upgrade, the capabilities and abilities of the robot are expanded
          </p>
          <div className="flex items-center justify-between">
            <h2 className="text-white text:lg md:text-xl 3xl:text-3xl font-chakraPetch">
              2023.05.24
            </h2>
            <button className="flex items-center justify-center text-white md:w-24 md:h-8 3xl:w-36 3xl:h-12 bg-teal-text-100 rounded-sm upper">
              Explore
            </button>
          </div>
        </div>
        <div className="bg-packImg1 bg-cover rounded-md h-40 w-40"></div>
        {/* <img src={roboPack} alt="" className="flex object-contain"/> */}
      </div>
      <div className="h-[1px] w-1/12 bg-gradient-to-r from-transparent to-white"></div>
    </div>
  );
};

export default EventCardLeft;
