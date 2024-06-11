import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { infos, storyName } from "../utils/eventsConstants";

const EventQuarter = ({ selectedTab, openModal }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
    setTimeout(() => setShowContent(true), 1000);
  }, [selectedTab]);

  const events = [
    {
      left: [
        <EventCard
          key={1}
          info={infos.firstThing}
          date={storyName.story1}
          openModal={openModal}
        />,
        <EventCard
          key={2}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story2}
        />,
        <EventCard
          key={3}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story3}
        />,
        <EventCard
          key={4}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story4}
        />,
      ],
    },
    {
      left: [
        <EventCard
          key={1}
          info={infos.firstThing}
          date={storyName.story1}
          openModal={openModal}
        />,
        <EventCard
          key={2}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story2}
        />,
        <EventCard
          key={3}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story3}
        />,
        <EventCard
          key={4}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story4}
        />,
      ],
    },
    {
      left: [
        <EventCard
          key={1}
          info={infos.firstThing}
          date={storyName.story1}
          openModal={openModal}
        />,
        <EventCard
          key={2}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story2}
        />,
        <EventCard
          key={3}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story3}
        />,
        <EventCard
          key={4}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story4}
        />,
      ],
    },
    {
      left: [
        <EventCard
          key={1}
          info={infos.firstThing}
          date={storyName.story1}
          openModal={openModal}
        />,
        <EventCard
          key={2}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story2}
        />,
        <EventCard
          key={3}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story3}
        />,
        <EventCard
          key={4}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story4}
        />,
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`mx-auto grid grid-cols-1 lg:flex h-full w-full justify-center py-12 transition-all duration-700 lg:flex-row gap-4 ${
        showContent ? "scale-100 opacity-100" : "scale-50 opacity-0"
      }`}
    >
      {events[selectedTab].left}
    </motion.div>
  );
};

export default EventQuarter;
