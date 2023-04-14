import React from "react";

const TimelineItem = ({ number, title, content, position }) => {
  return (
    <div className="relative ml-3 mt-3 py-16 space-y-14">
      <div className="pl-10">
        <span className="timeline-date">13 Noiembrie</span>
        <h3 className="timeline-title">Event 1</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          ex nihil sit tenetur dicta quasi laudantium quo eos rem? Et accusamus
          architecto voluptate ad modi debitis nemo veritatis? Corporis, ut.
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
