import React from "react";

const EventCardLeft = ({ info, date }) => {
  return (
    <div className="flex w-full justify-end">
      <div className="flex w-[450px] 3xl:w-[600px] 3xl:h-[200px] items-center space-x-6 justify-between mr-2 p-4 roadmap-gradient rounded-md shadow-md shadow-teal-600">
        <div className="flex flex-col space-y-6 3xl:w-[400px] w-64">
          <p className="h-20 text-base text-white leading-4">{info}</p>
          <div className="flex items-center justify-between">
            <h2 className="text-white text:lg md:text-xl 3xl:text-3xl font-chakraPetch">
              {date}
            </h2>
            <button className="flex items-center justify-center text-white md:w-24 md:h-8 3xl:w-36 3xl:h-12 bg-teal-text-100 rounded-sm upper hover:3xl:w-48 duration-500">
              Explore
            </button>
          </div>
        </div>
        <div className="bg-packImg1 bg-cover rounded-md h-40 w-40"></div>
        {/* <img src={roboPack} alt="" className="flex object-contain"/> */}
      </div>
      <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-white"></div>
    </div>
  );
};

export default EventCardLeft;
