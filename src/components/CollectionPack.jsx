import React from "react";

const CollectionPack = ({ title, description, roboPack, onClick }) => {
  return (
    <div className="group relative flex h-full w-full items-center justify-center duration-700 ">
      <div className="absolute z-10 flex w-full items-center justify-center rounded-lg bg-gradient-to-b from-gray-gradient-full via-gray-gradient to-gray-gradient-full"></div>
      <img
        src={roboPack}
        alt="RoboPack background"
        className="absolute h-full w-full rounded-lg object-cover opacity-50 duration-700 lg:opacity-100 lg:group-hover:opacity-40"
      />
      <div className="absolute z-30 mx-auto flex scale-90 flex-col items-center duration-700 lg:pt-12 ">
        <h3 className="p-2 text-center uppercase group-hover:opacity-100 lg:opacity-0">
          {title}
        </h3>
        <h4 className="hidden py-10 text-center group-hover:opacity-100 lg:flex lg:opacity-0">
          {description}
        </h4>
        <button
          onClick={onClick}
          href="#"
          className="group/button col-span-1 row-span-1 flex w-64 flex-col items-center justify-center rounded-xl bg-accent-color px-8 py-4 text-xl text-background-color duration-300 group-hover:opacity-100 lg:opacity-0"
        >
          Read More
          <span className="h-[1px] w-0 bg-background-color duration-300 group-hover/button:w-full"></span>
        </button>
      </div>
    </div>
  );
};

export default CollectionPack;
