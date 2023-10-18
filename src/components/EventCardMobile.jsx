import React from "react";

const EventCardMobile = () => {
  return (
    <div className="flex flex-col space-y-8 text-white px-10 pb-5 border-b">
      <div className="flex flex-col items-start">
        <div className="bg-packImg bg-cover rounded-md h-32 w-full"></div>
        <h3 className="">2023.06.01</h3>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id eum minus
        nam cupiditate recusandae voluptatum debitis
      </p>
      <button className="h-12 bg-teal-text-100 rounded-md text-teal-950">
        Learn more
      </button>
    </div>
  );
};

export default EventCardMobile;
