import React, { useEffect, useState } from "react";
import EventCardLeft from "../components/EventCardLeft";
import EventCardRight from "../components/EventCardRight";

const EventQuarter = ({ selectedTab }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
    setTimeout(() => setShowContent(true), 1000);
  }, [selectedTab]);

  const events = [
    {
      left: [<EventCardLeft key={1} />, <EventCardLeft key={2} />],
      right: [<EventCardRight key={1} />, <EventCardRight key={2} />],
    },
    {
      left: [<EventCardLeft key={1} />, <EventCardLeft key={2} />],
      right: [<EventCardRight key={1} />, <EventCardRight key={2} />],
    },
    {
      left: [<EventCardLeft key={1} />, <EventCardLeft key={2} />],
      right: [<EventCardRight key={1} />, <EventCardRight key={2} />],
    },
    {
      left: [<EventCardLeft key={1} />, <EventCardLeft key={2} />],
      right: [<EventCardRight key={1} />, <EventCardRight key={2} />],
    },
  ];

  return (
    <div
      className={`flex h-full transition-all duration-700 ${
        showContent ? "opacity-100 scale-100" : "opacity-0 scale-50"
      }`}
    >
      {/* Left events */}
      <div className="flex flex-col w-1/2 items-center justify-around pt-24">
        {events[selectedTab].left}
      </div>
      {/* Middle line */}
      <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-white"></div>
      {/* Right events */}
      <div className="flex flex-col w-1/2 items-center justify-around pb-24">
        {events[selectedTab].right}
      </div>
    </div>
  );
};

export default EventQuarter;
