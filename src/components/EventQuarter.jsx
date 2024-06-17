import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { infos, storyName } from "../utils/eventsConstants";

const EventQuarter = ({ selectedTab, openModal }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
    setTimeout(() => setShowContent(true), 1000);
  }, []);

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
      className="mx-auto grid h-full w-full grid-cols-1 justify-center gap-4 py-12 transition-all duration-700 lg:flex lg:flex-row"
    >
      {events[selectedTab].left}
    </motion.div>
  );
};

export default EventQuarter;
