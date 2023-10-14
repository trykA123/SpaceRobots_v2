import { useState } from "react";

const TeamTest = () => {
  const childBackgrounds = [
    "bg-liviuBackground",
    "bg-trykaBackground",
    "bg-simpleprickBackground",
    "bg-jorjeBackground",
    "bg-tarantuloBackground",
    "bg-borisakeBackground",
  ];

  const [hoveredChild, setHoveredChild] = useState(null);

  const handleChildHover = (index) => {
    setHoveredChild(index);
  };

  const handleChildLeave = () => {
    setHoveredChild(null);
  };

  return (
    <div
      className={`group w-full h-[829px] ${
        hoveredChild !== null
          ? childBackgrounds[hoveredChild]
          : "bg-teamBackground"
      } flex items-center justify-center relative mb-[200px] duration-700`}
    >
      <div className="w-3/4 h-[600px] grid grid-cols-6 space-x-0 z-50 absolute">
        {childBackgrounds.slice(0, 2).map((bgColor, index) => (
          <div
            key={index}
            className={`${bgColor} w-48 translate-x-40 duration-500 opacity-0`}
            onMouseEnter={() => handleChildHover(index)}
            onMouseLeave={handleChildLeave}
          ></div>
        ))}
        <div className="bg-transparent w-48 translate-x-44 grid grid-rows-2">
          {childBackgrounds.slice(2, 4).map((bgColor, index) => (
            <div
              key={index}
              className={`${bgColor} w-40 h-[95%] space-y-12 opacity-0 duration-500`}
              onMouseEnter={() => handleChildHover(index + 2)}
              onMouseLeave={handleChildLeave}
            ></div>
          ))}
        </div>

        {childBackgrounds.slice(4).map((bgColor, index) => (
          <div
            key={index}
            className={`${bgColor} w-48 translate-x-48 duration-500 opacity-0`}
            onMouseEnter={() => handleChildHover(index + 4)}
            onMouseLeave={handleChildLeave}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TeamTest;
