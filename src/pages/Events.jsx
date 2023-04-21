import React, { useState } from "react";
import EventQuarter from "../components/EventQuarter";

const Events = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabClick(tabIndex) {
    setSelectedTab(tabIndex);
  }

  return (
    <section id="events">
      <div className="h-screen bg-background bg-cover">
        <div className="flex flex-col pt-44 mx-auto w-3/4 h-full pb-24">
          {/* Tabs navbar */}
          <div className="flex items-center justify-center h-32">
            <ul className="flex space-x-6 text-4xl text-white ">
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
