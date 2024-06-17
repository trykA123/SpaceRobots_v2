import React from "react";

const Button = ({ name }) => {
  return (
    <button
      type="button"
      className="group z-30 flex w-64 flex-col items-center justify-center  rounded-xl bg-accent-color px-8 py-4 font-chakraPetch text-2xl uppercase text-background-color duration-300"
    >
      {name}
      <span className="h-[1px] w-0 bg-background-color duration-300 group-hover:w-full" />
    </button>
  );
};

export default Button;
