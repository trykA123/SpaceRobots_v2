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
      } flex items-center justify-center relative mb-24 duration-700`}
    >
      <div className="w-3/4 h-[600px] grid grid-cols-6 space-x-0 z-50 absolute opacity-10">
        {childBackgrounds.map((bgColor, index) => (
          <div
            key={index}
            className={`${bgColor} w-40 translate-x-44 duration-500`}
            onMouseEnter={() => handleChildHover(index)}
            onMouseLeave={handleChildLeave}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TeamTest;
