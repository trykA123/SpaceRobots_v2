import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MilestoneCard from "./MilestoneCard";

const RoadmapPhase = ({
  quater,
  firstMilestoneCard,
  secondMilestoneCard,
  thirdMilestoneCard,
  forthMilestoneCard,
}) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  const timelineVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, staggerChildren: 0.5 },
    },
    hidden: { opacity: 0, x: -200 },
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5 },
    },
    hidden: { opacity: 0, y: 150 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="justify-betwen flex flex-col items-center"
      variants={timelineVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="self-start lg:py-4">
        <h3>{quater}</h3>
      </div>
      <span className="h-[1px] w-full bg-primary-teal" />
      <div className="mx-auto flex h-full flex-col justify-between">
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            variants={{
              visible: {
                transition: { staggerChildren: 0.5, delayChildren: 0.5 },
              },
              hidden: {},
            }}
          >
            <motion.div variants={itemVariants}>
              <MilestoneCard
                title={firstMilestoneCard.title}
                content={firstMilestoneCard.info}
                status={firstMilestoneCard.status}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <MilestoneCard
                title={secondMilestoneCard.title}
                content={secondMilestoneCard.info}
                status={secondMilestoneCard.status}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <MilestoneCard
                title={thirdMilestoneCard.title}
                content={thirdMilestoneCard.info}
                status={thirdMilestoneCard.status}
              />
            </motion.div>
            {forthMilestoneCard && (
              <motion.div variants={itemVariants}>
                <MilestoneCard
                  title={forthMilestoneCard.title}
                  content={forthMilestoneCard.info}
                  status={forthMilestoneCard.status}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RoadmapPhase;
