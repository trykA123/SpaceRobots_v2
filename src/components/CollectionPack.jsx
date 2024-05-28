import React from "react";
import pack from "../assets/images/pack.webp";

const CollectionPack = ({ title, description, roboPack, onClick }) => {
  return (
    <div className="group relative flex h-full w-full items-center justify-center duration-700 ">
      <div className="absolute top-0 z-10 flex w-full items-center justify-center rounded-lg bg-gradient-to-b from-gray-gradient-full via-gray-gradient to-gray-gradient-full"></div>
      <img
        src={roboPack}
        alt="RoboPack background"
        className="absolute top-0 h-full w-full rounded-lg object-cover duration-700 group-hover:opacity-40"
      />
      <div className="absolute z-30 mx-auto flex scale-90 flex-col items-center pt-12 opacity-0 duration-700 group-hover:opacity-100">
        <h3 className="p-2 text-center uppercase">{title}</h3>
        <p className="py-10 text-center text-base">{description}</p>
        <button
          onClick={onClick}
          href="#"
          className="group/button col-span-1 row-span-1 flex w-64 flex-col items-center justify-center rounded-xl bg-accent-color px-8 py-4 text-xl text-background-color duration-300 hover:bg-transparent hover:text-modal-text"
        >
          Read More
          <span className="h-[1px] w-0 bg-accent-color duration-300 group-hover/button:w-full"></span>
        </button>
      </div>
    </div>
  );
};

export default CollectionPack;
