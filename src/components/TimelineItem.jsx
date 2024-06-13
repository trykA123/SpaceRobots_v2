import React from "react";

const TimelineItem = ({ status, title, content }) => {
  return (
    <div className="relative mt-3 flex space-y-14 rounded-lg border border-transparent bg-background-color duration-500 hover:animate-pulse hover:border-primary-teal">
      <div className="px-4 py-6">
        <span className="text-base font-bold tracking-widest opacity-40">
          {status}
        </span>
        <h4 className="mb-2 py-2 text-3xl font-semibold text-teal-400">
          {title}
        </h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
