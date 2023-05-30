import React from "react";

const EventCardMobile = () => {
  return (
    <div className="flex flex-col space-y-8 text-white px-10 pb-5">
      <div className="flex space-x-16">
        <div className="bg-packImg bg-cover rounded-md h-28 w-28"></div>
        <div className="flex flex-col items-center justify-center space-y-3">
          <h3>2023.06.01</h3>
          <button className="w-24 h-8 bg-teal-400 roudned-md">Learn more</button>
        </div>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id eum minus
        nam cupiditate recusandae voluptatum debitis ipsum culpa cum itaque
        laboriosam non accusamus quam praesentium atque tempore, saepe nesciunt
        quis?
      </p>
    </div>
  );
};

export default EventCardMobile;
