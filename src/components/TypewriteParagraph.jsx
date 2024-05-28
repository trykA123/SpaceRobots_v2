import React from "react";
import Typewriter from "typewriter-effect";

const TypewriteParagraph = ({firstWord, secondWord, thirdWord}) => {
  return (
    <>
      <Typewriter
        options={{
          strings: [firstWord, secondWord, thirdWord],
          autoStart: true,
          loop: true,
          wrapperClassName:
            "font-chakraPetch text-2xl text-accent-color uppercase",
          cursorClassName: "text-2xl",
        }}
      />
    </>
  );
};

export default TypewriteParagraph;
