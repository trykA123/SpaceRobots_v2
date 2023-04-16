import React from "react";
import { titles } from "../utils/constants";
import TimelineItem from "./TimelineItem";

const Timeline = ({
  title,
  quater,
  firstInfo,
  secondInfo,
  thirdInfo,
  fourthInfo,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="flex flex-col w-full mx-auto">
        <div className="sticky top-0 bg-white py-3 z-10 shadow-lg shadow-teal-300">
          <h4>{quater}</h4>
        </div>
        <TimelineItem title={firstInfo.title} content={firstInfo.info} />
        <TimelineItem title={secondInfo.title} content={secondInfo.info} />
        <TimelineItem title={thirdInfo.title} content={thirdInfo.info} />
        {fourthInfo && (
          <TimelineItem title={fourthInfo.title} content={fourthInfo.info} />
        )}
      </div>
    </div>
  );
};

export default Timeline;
