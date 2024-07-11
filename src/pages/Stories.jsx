import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Modal from "../components/ModalComponent";
import StoryTypes from "../components/StoryTypes";
import TypewriteParagraph from "../components/TypewriteParagraph";
import { tabs } from "../utils/storiesConstants";

const Stories = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({}); // State to store modal data
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleTabClick(tabIndex) {
    setSelectedTab(tabIndex);
    setIsDropdownOpen(false); // Close dropdown after selection
  }

  const openModal = (title, description, image) => {
    setModalData({ title, description, image });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section id="stories" className="my-24">
      <div className="container mx-auto h-screen">
        <div className="flex h-full w-full flex-col items-center">
          <TypewriteParagraph
            firstWord="Stories"
            secondWord="Stories"
            thirdWord="Discoveries"
          />
          <h2 className="mx-auto mb-12 text-center">Dive into the Unknown</h2>

          {/* Tabs navbar */}
          <div className="flex items-center justify-center">
            {/* Tabs for larger screens */}
            <ul className="hidden space-x-12 md:flex">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className={`event-tab-id ${
                    selectedTab === index
                      ? "border border-accent-color opacity-100"
                      : "opacity-50"
                  }`}
                  onClick={() => handleTabClick(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      handleTabClick(index);
                    }
                  }}
                  onKeyUp={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      handleTabClick(index);
                    }
                  }}
                >
                  {tab}
                </li>
              ))}
            </ul>

            {/* Dropdown for mobile screens */}
            <div className="relative bg-accent-color p-2 text-background-color lg:hidden">
              <button
                className="flex w-64 items-center justify-center gap-2 p-2 font-chakraPetch uppercase"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                type="button"
              >
                {tabs[selectedTab]}
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="absolute left-0 z-10 mt-2 flex w-64 flex-col gap-2 bg-background-color text-white"
                  >
                    {tabs.map((tab, index) => (
                      <motion.li
                        key={index}
                        className={`event-tab-id bg-background-color p-2 ${
                          selectedTab === index
                            ? "text-accent-color opacity-100"
                            : " opacity-50"
                        }`}
                        onClick={() => handleTabClick(index)}
                      >
                        {tab}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Story components */}
          <StoryTypes selectedTab={selectedTab} openModal={openModal} />
        </div>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={closeModal}>
            <div className="z-50 flex h-[600px] flex-col gap-4 text-modal-text lg:h-[500px] lg:flex-row">
              <img
                src={modalData.image}
                alt="Modal Images"
                className="h-48 w-full self-center rounded-xl border border-accent-color bg-background-color object-cover p-1 lg:h-full lg:w-96"
              />
              <div className="flex flex-col justify-between gap-4">
                <h2 className="lg:mb-4">{modalData.title}</h2>
                <p className="h-[220px] overflow-y-auto lg:h-auto">
                  {modalData.description}
                </p>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="group col-span-1 row-span-1 flex flex-col items-center justify-center rounded-xl bg-accent-color px-8 py-4 text-xl text-background-color duration-300"
                  >
                    Read More
                    <span className="h-[1px] w-0 bg-background-color duration-300 group-hover:w-full" />
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

export default Stories;
