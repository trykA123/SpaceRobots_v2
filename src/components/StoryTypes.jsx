import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { storiesData } from "../utils/storiesConstants";
import StoryCard from "./StoryCard";

const StoryTypes = ({ selectedTab, openModal }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
    setTimeout(() => setShowContent(true), 1000);
  }, [selectedTab]);

  const selectedStories = storiesData[selectedTab].stories;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mx-auto grid h-full w-full grid-cols-1 justify-center gap-4 py-12 transition-all duration-700 lg:flex lg:flex-row"
    >
      {selectedStories.map((story, index) => (
        <StoryCard
          key={index}
          title={story.title}
          image={story.image}
          description={story.description}
          openModal={openModal}
        />
      ))}
    </motion.div>
  );
};

export default StoryTypes;
