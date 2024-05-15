import React from "react";

const TimelineItem = ({ status, title, content }) => {
  return (
    <div className="relative mt-3 flex space-y-14 rounded-lg bg-background-color">
      <div className="py-6 px-4">
        <span className="text-base font-bold tracking-widest opacity-40">
          {status}
        </span>
        <h4 className="mb-2 py-2 text-3xl font-semibold tracking-wide text-teal-400">
          {title}
        </h4>
        <p className="pr-2">{content}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
