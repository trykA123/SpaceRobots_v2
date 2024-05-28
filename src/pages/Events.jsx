import React, { useState } from "react";
import BoxCollection from "../assets/images/collections/Box.png";
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
            <div className="flex h-[500px] gap-4 text-modal-text">
              <img
                src={BoxCollection}
                alt="Modal Images"
                className="h-full w-96 self-center rounded-xl bg-background-color object-cover p-1"
              />
              <div className="flex flex-col justify-between overflow-y-auto">
                <h2 className="mb-4 font-chakraPetch text-4xl font-bold">
                  test
                </h2>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, magnam dignissimos vitae tempore quas nesciunt
                  deserunt soluta sequi voluptatibus aliquam cum, explicabo
                  accusamus eum dolore culpa provident et pariatur tempora!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, magnam dignissimos vitae tempore quas nesciunt
                  deserunt soluta sequi voluptatibus aliquam cum, explicabo
                  accusamus eum dolore culpa provident et pariatur tempora!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, magnam dignissimos vitae tempore quas nesciunt
                  deserunt soluta sequi voluptatibus aliquam cum, explicabo
                  accusamus eum dolore culpa provident et pariatur tempora!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, magnam dignissimos vitae tempore quas nesciunt
                  deserunt soluta sequi voluptatibus aliquam cum, explicabo
                  accusamus eum dolore culpa provident et pariatur tempora!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, magnam dignissimos vitae tempore quas nesciunt
                  deserunt soluta sequi voluptatibus aliquam cum, explicabo
                  accusamus eum dolore culpa provident et pariatur tempora!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, magnam dignissimos vitae tempore quas nesciunt
                  deserunt soluta sequi voluptatibus aliquam cum, explicabo
                  accusamus eum
                </p>
                <div className="flex justify-between self-center">
                  <button className="group col-span-1 row-span-1 flex flex-col items-center justify-center rounded-xl bg-accent-color px-8 py-4 text-xl text-background-color duration-300 hover:bg-transparent hover:text-modal-text">
                    Read More
                    <span className="h-[1px] w-0 bg-accent-color duration-300 group-hover:w-full"></span>
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Events;
