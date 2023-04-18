import React from "react";

const TimelineItem = ({ status, title, content }) => {
  return (
    <div className="flex relative ml-3 mt-3 py-16 space-y-14 border-2 border-teal-600">
      <div className="pl-10">
        <span className="text-base font-bold opacity-40 tracking-widest">
          {status}
        </span>
        <h3 className="text-3xl text-gray-600 font-semibold tracking-wide mb-2">
          {title}
        </h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
