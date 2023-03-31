import React from "react";
import { images } from "../utils/constants";

const Markets = () => {
  return (
    <section id="markets">
      <div className="h-screen flex flex-col bg-slate-600 pl-[15%] pt-[5%]">
        <div className="flex space-x-12 justify-center w-[90%]">
          <div className="flex itesm-center justify-center w-36 h-36 border-2 rounded-md relative">
            <div className="bg-packImg bg-cover"></div>
            <p className="position abosolute">1</p>
          </div>
          <div className="w-36 h-36 border-2 rounded-md relative">
            <img src="" alt="" />
            <p>1</p>
          </div>
          <div className="w-36 h-36 border-2 rounded-md relative">
            <img src="" alt="" />
            <p>1</p>
          </div>
          <div className="w-36 h-36 border-2 rounded-md relative">
            <img src="" alt="" />
            <p>1</p>
          </div>
          <div className="w-36 h-36 border-2 rounded-md relative">
            <img src="" alt="" />
            <p>1</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex p-20">
            <img src={images.roboPack} alt="" className="w-20 h-20" />
            <div className="flex flex-col px-12">
              <h2 className="text-4xl text-white uppercase font-chakraPetch mb-4">
                Space Robots
              </h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                illo excepturi deleniti sint et eius, ducimus architecto eos
                labore
              </p>
            </div>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </section>
  );
};

export default Markets;
