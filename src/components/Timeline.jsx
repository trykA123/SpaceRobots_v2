import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TimelineItem from "./TimelineItem";

const Timeline = ({ quater, firstInfo, secondInfo, thirdInfo, fourthInfo }) => {
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
      className="flex flex-col items-center justify-start"
      variants={timelineVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="my-4 py-4 self-start">
        <h3>{quater}</h3>
      </div>
      <div className="mx-auto flex flex-col">
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            variants={{
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 0.5 },
              },
              hidden: {},
            }}
          >
            <motion.div variants={itemVariants}>
              <TimelineItem
                title={firstInfo.title}
                content={firstInfo.info}
                status={firstInfo.status}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <TimelineItem
                title={secondInfo.title}
                content={secondInfo.info}
                status={secondInfo.status}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <TimelineItem
                title={thirdInfo.title}
                content={thirdInfo.info}
                status={thirdInfo.status}
              />
            </motion.div>
            {fourthInfo && (
              <motion.div variants={itemVariants}>
                <TimelineItem
                  title={fourthInfo.title}
                  content={fourthInfo.info}
                  status={fourthInfo.status}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Timeline;
