import React from "react";
import pack from "../assets/images/pack.webp";

const CollectionPack = ({ title, description, roboPack, onClick }) => {
  return (
    <div className="flex w-full h-full relative items-center justify-center group duration-700 ">
      <div className="flex items-center justify-center absolute z-10 top-0 w-full bg-gradient-to-b from-gray-gradient-full via-gray-gradient to-gray-gradient-full rounded-lg"></div>
      <img
        src={pack}
        alt="RoboPack background"
        className="object-cover absolute top-0 h-full w-full group-hover:opacity-40 duration-700 rounded-lg"
      />
      <div className="flex flex-col pt-12 items-center absolute mx-auto opacity-0 group-hover:opacity-100 duration-700 z-30 scale-90">
        <h3 className="uppercase p-2 text-center">{title}</h3>
        <p className="py-10 text-base text-center">{description}</p>
        <button
          onClick={onClick}
          href="#"
          className="flex items-center justify-center w-36 3xl:w-64 h-14 bg-accent-color translate-y-0 hover:-translate-y-2 duration-300 text-background-color rounded-lg "
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default CollectionPack;
