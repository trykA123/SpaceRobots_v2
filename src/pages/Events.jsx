import React, { useState } from "react";
import EventQuarter from "../components/EventQuarter";
import MobileTitle from "../components/MobileTitle";
import Modal from "../components/ModalComponent";
import TypewriteParagraph from "../components/TypewriteParagraph";


const Events = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({}); // State to store modal data

  function handleTabClick(tabIndex) {
    setSelectedTab(tabIndex);
  }

  const openModal = (title, description) => {
    setModalData({ title, description });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section id="events" className="my-24">
      <div className="container mx-auto h-screen">
        <div className="flex h-full w-full flex-col items-center">
          <TypewriteParagraph
            firstWord="Stories"
            secondWord="Events"
            thirdWord="Discoveries"
          />
          <h2 className="mb-12">Dive into the Unkown</h2>
          {/* Tabs navbar */}

          <div className="flex items-center justify-center">
            <ul className="flex space-x-12">
              <li
                className={`event-tab-id ${
                  selectedTab === 0
                    ? "border border-accent-color opacity-100"
                    : "opacity-50"
                }`}
                onClick={() => handleTabClick(0)}
              >
                Space Robots Universe
              </li>
              <li
                className={`event-tab-id ${
                  selectedTab === 1
                    ? "border border-accent-color opacity-100"
                    : "opacity-50"
                }`}
                onClick={() => handleTabClick(1)}
              >
                Space Robots Universe
              </li>
              <li
                className={`event-tab-id ${
                  selectedTab === 2
                    ? "border border-accent-color opacity-100"
                    : "opacity-50"
                }`}
                onClick={() => handleTabClick(2)}
              >
                Space Robots Universe
              </li>
              <li
                className={`event-tab-id ${
                  selectedTab === 3
                    ? "border border-accent-color opacity-100"
                    : "opacity-50"
                }`}
                onClick={() => handleTabClick(3)}
              >
                Space Robots Universe
              </li>
            </ul>
          </div>
          {/* Event components */}
          <EventQuarter selectedTab={selectedTab} openModal={openModal} />
        </div>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={closeModal}>
            <div className="flex flex-col text-modal-text">
              {/* <img src={roboPack} alt="" className="w-96 self-center" /> */}
              <h2 className="mb-4 font-chakraPetch text-4xl font-bold">test</h2>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, magnam dignissimos vitae tempore quas nesciunt
                deserunt soluta sequi voluptatibus aliquam cum, explicabo
                accusamus eum dolore culpa provident et pariatur tempora!
              </p>
              <div className="flex justify-between">
                <button className="mt-4 w-32 rounded bg-secondary-color px-4 py-2 font-bold">
                  Read More
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Events;
