import React, { useEffect, useState } from "react";
import EventCardLeft from "../components/EventCardLeft";
import EventCardRight from "../components/EventCardRight";
import { dates, infos } from "../utils/eventsConstants";
import EventCardMobile from "./EventCardMobile";

const EventQuarter = ({ selectedTab, openModal }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
    setTimeout(() => setShowContent(true), 1000);
  }, [selectedTab]);

  const events = [
    {
      left: [
        <EventCardLeft
          key={1}
          info={infos.firstThing}
          date={dates.autoPilot}
          openModal={openModal}
        />,
        <EventCardLeft key={2} openModal={openModal} />,
        <EventCardLeft key={3} openModal={openModal} />,
        <EventCardLeft key={4} openModal={openModal} />,
      ],
    },
    {
      left: [
        <EventCardLeft key={1} openModal={openModal} />,
        <EventCardLeft key={2} openModal={openModal} />,
      ],
      right: [
        <EventCardRight key={1} openModal={openModal} />,
        <EventCardRight key={2} openModal={openModal} />,
      ],
    },
    {
      left: [
        <EventCardLeft key={1} openModal={openModal} />,
        <EventCardLeft key={2} openModal={openModal} />,
      ],
      right: [
        <EventCardRight key={1} openModal={openModal} />,
        <EventCardRight key={2} openModal={openModal} />,
      ],
    },
    {
      left: [
        <EventCardLeft key={1} openModal={openModal} />,
        <EventCardLeft key={2} openModal={openModal} />,
      ],
      right: [
        <EventCardRight key={1} openModal={openModal} />,
        <EventCardRight key={2} openModal={openModal} />,
      ],
    },
  ];

  return (
    <div
      className={`mx-auto h-full w-full justify-center flex py-12 transition-all duration-700 ${
        showContent ? "scale-100 opacity-100" : "scale-50 opacity-0"
      }`}
    >
      {/* Left events */}
      {events[selectedTab].left}
      {events[selectedTab].right}

      {/* <div className="hidden xl:flex flex-col items-center justify-around pb-24">
        {events[selectedTab].right}
      </div> */}
      {/* Mobile events */}
      <div className="flex flex-col space-y-12 px-4 xl:hidden">
        <EventCardMobile />
        <EventCardMobile />
        <EventCardMobile />
        <EventCardMobile />
      </div>
    </div>
  );
};

export default EventQuarter;
