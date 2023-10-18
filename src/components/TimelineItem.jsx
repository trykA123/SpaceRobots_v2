import React from "react";

const TimelineItem = ({ status, title, content }) => {
  return (
    <div className="flex relative mt-3 space-y-14 border-2 border-teal-600 shadow-md shadow-teal-800">
      <div className="px-4 py-6">
        <span className="text-base font-bold opacity-40 tracking-widest">
          {status}
        </span>
        <h3 className="text-3xl text-teal-400 font-semibold tracking-wide mb-2 py-2">
          {title}
        </h3>
        <p className="pr-2">{content}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
