import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { eventsData } from "../utils/eventsConstants";

const EventQuarter = ({ selectedTab, openModal }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
    setTimeout(() => setShowContent(true), 1000);
  }, [selectedTab]);

  const selectedEvents = eventsData[selectedTab].stories;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mx-auto grid h-full w-full grid-cols-1 justify-center gap-4 py-12 transition-all duration-700 lg:flex lg:flex-row"
    >
      {selectedEvents.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          description={event.description}
          date={event.date}
          openModal={openModal}
        />
      ))}
    </motion.div>
  );
};

export default EventQuarter;
