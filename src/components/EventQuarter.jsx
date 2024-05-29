import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import EventCardLeft from "../components/EventCardLeft";
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
        <EventCardLeft
          key={1}
          info={infos.firstThing}
          date={storyName.story1}
          openModal={openModal}
        />,
        <EventCardLeft
          key={2}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story2}
        />,
        <EventCardLeft
          key={3}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story3}
        />,
        <EventCardLeft
          key={4}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story4}
        />,
      ],
    },
    {
      left: [
        <EventCardLeft
          key={1}
          info={infos.firstThing}
          date={storyName.story1}
          openModal={openModal}
        />,
        <EventCardLeft
          key={2}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story2}
        />,
        <EventCardLeft
          key={3}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story3}
        />,
        <EventCardLeft
          key={4}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story4}
        />,
      ],
    },
    {
      left: [
        <EventCardLeft
          key={1}
          info={infos.firstThing}
          date={storyName.story1}
          openModal={openModal}
        />,
        <EventCardLeft
          key={2}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story2}
        />,
        <EventCardLeft
          key={3}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story3}
        />,
        <EventCardLeft
          key={4}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story4}
        />,
      ],
    },
    {
      left: [
        <EventCardLeft
          key={1}
          info={infos.firstThing}
          date={storyName.story1}
          openModal={openModal}
        />,
        <EventCardLeft
          key={2}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story2}
        />,
        <EventCardLeft
          key={3}
          openModal={openModal}
          info={infos.firstThing}
          date={storyName.story3}
        />,
        <EventCardLeft
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
      className={`mx-auto flex h-full w-full justify-center py-12 transition-all duration-700 ${
        showContent
          ? "scale-100 opacity-100"
          : "scale-50 opacity-0"
      }`}
    >
      {events[selectedTab].left}
    </motion.div>
  );
};

export default EventQuarter;
