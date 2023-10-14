import React from "react";

const EventCardRight = () => {
  return (
    <div className="flex w-full justify-start">
      <div className="h-[1px] w-1/12 bg-gradient-to-l from-transparent to-white"></div>
      <div className="flex w-[450px] 3xl:w-[600px] 3xl:h-[200px] items-center space-x-6 justify-between ml-2 p-4 roadmap-gradient rounded-md shadow-md shadow-teal-600">
        <div className="bg-packImg bg-cover rounded-md h-40 w-40"></div>
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
            <button className="flex items-center justify-center text-white md:w-24 md:h-8 3xl:w-36 3xl:h-12 bg-teal-text-100 rounded-sm upper hover:3xl:w-48 duration-500">
              Explore
            </button>
          </div>
        </div>
        {/* <img src={roboPack} alt="" className="flex object-contain"/> */}
      </div>
    </div>
  );
};

export default EventCardRight;
