import React, { useState } from "react";
import EventQuarter from "../components/EventQuarter";
import MobileTitle from "../components/MobileTitle";

const Events = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabClick(tabIndex) {
    setSelectedTab(tabIndex);
  }

  return (
    <section id="events">
      <div className="h-screen roadmap-gradient bg-cover">
        <div className="flex flex-col items-center pt-24 4xl:pt-44 md:mx-auto md:w-3/4 h-full md:pb-24">
          {/* Tabs navbar */}
          <MobileTitle title="Events"/>
          <div className="flex items-center justify-center h-32">
            <ul className="flex space-x-12 text-white ">
              <li
                className={`event-tab-id ${
                  selectedTab === 0 ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleTabClick(0)}
              >
                Q1
              </li>
              <li
                className={`event-tab-id ${
                  selectedTab === 1 ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleTabClick(1)}
              >
                Q2
              </li>
              <li
                className={`event-tab-id ${
                  selectedTab === 2 ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleTabClick(2)}
              >
                Q3
              </li>
              <li
                className={`event-tab-id ${
                  selectedTab === 3 ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleTabClick(3)}
              >
                Q4
              </li>
            </ul>
          </div>
          {/* Event components */}
          <EventQuarter selectedTab={selectedTab} />
        </div>
      </div>
    </section>
  );
};

export default Events;
