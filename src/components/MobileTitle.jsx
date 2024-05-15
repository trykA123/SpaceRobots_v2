import React from "react";

const MobileTitle = ({ title }) => {
  return (
    <div className="flex w-48 items-center justify-between xl:hidden">
      <div className="flex h-8 w-5 items-center justify-start rounded-s border-b-2 border-l-2 border-t-2 border-teal-300">
        <div className="h-[1px] w-3 bg-teal-300"></div>
      </div>
      <p className="flex items-center justify-center  uppercase font-chakraPetch text-lg font-bold">
        {title}
      </p>
      <div className="flex h-8 w-5 rotate-180 items-center justify-start rounded-s border-b-2 border-l-2 border-t-2 border-teal-300">
        <div className="h-[1px] w-3 bg-teal-300"></div>
      </div>
    </div>
  );
};

export default MobileTitle;
