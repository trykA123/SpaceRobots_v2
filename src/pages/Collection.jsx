import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import CollectionPack from "../components/CollectionPack";
import MobileColectionPack from "../components/MobileColectionPack";
import Modal from "../components/ModalComponent";
import TypewriteParagraph from "../components/TypewriteParagraph";
import { cards } from "../utils/collectionConstants";
import BoxCollection from "/assets/images/collections/Box.png";
import PartCollection from "/assets/images/collections/Part.png";
import RobotCollection from "/assets/images/collections/Robot.png";

const Collection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({}); // State to store modal data

  const openModal = (title, description, modalImage) => {
    setModalData({ title, description, modalImage });
    setIsOpen(true);
    console.log(modalImage);
  };

  console.log(openModal);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section id="collections" className="py-24">
      <div className="container mx-auto h-[100dvh]">
        <div className="flex h-full w-full flex-col items-center justify-between gap-24">
          <div className="flex flex-col items-center">
            <TypewriteParagraph
              firstWord="Space Robots"
              secondWord="Robopacks"
              thirdWord="Robo"
            />
            <h2 className="mx-auto text-center">Check it out</h2>
          </div>
          <div className="relative flex h-full w-full flex-col justify-center gap-4 lg:flex-row">
            <CollectionPack
              title={cards.firstCard.title}
              description={cards.firstCard.description}
              roboPack={RobotCollection}
              onClick={() =>
                openModal(
                  cards.firstCard.title,
                  cards.firstCard.modalDescription,
                  cards.firstCard.modalImage,
                )
              }
            />
            <CollectionPack
              title={cards.secondCard.title}
              description={cards.secondCard.description}
              roboPack={BoxCollection}
              onClick={() =>
                openModal(
                  cards.secondCard.title,
                  cards.secondCard.modalDescription,
                  cards.secondCard.modalImage,
                )
              }
            />
            <CollectionPack
              title={cards.thirdCard.title}
              description={cards.thirdCard.description}
              roboPack={PartCollection}
              onClick={() =>
                openModal(
                  cards.thirdCard.title,
                  cards.thirdCard.modalDescription,
                  cards.thirdCard.modalImage,
                )
              }
            />
          </div>
        </div>
        {/* <div className="z-10 flex h-[100dvh] w-full flex-col items-center justify-center bg-gradient-to-b from-gray-gradient-full via-gray-gradient to-gray-gradient-full pt-12 xl:hidden">
          <MobileTitle title={"Collections"} className="mt-12" />
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <MobileColectionPack />
              </div>
              <div className="swiper-slide">
                <MobileColectionPack />
              </div>
              <div className="swiper-slide">
                <MobileColectionPack />
              </div>
            </div>
            <div className="navigation-indicator-container -translate-y-16">
              <div className="navigation-indicator"></div>
              <div className="navigation-indicator"></div>
              <div className="navigation-indicator"></div>
            </div>
          </div>
        </div> */}
        {isOpen && (
          <Modal isOpen={isOpen} onClose={closeModal}>
            <div className="z-50 flex h-[600px] flex-col gap-4 text-modal-text lg:h-[500px] lg:flex-row">
              <img
                src={modalData.modalImage}
                alt="Modal Images"
                className="h-48 w-full self-center rounded-xl border border-accent-color bg-background-color object-cover p-1 lg:h-full lg:w-96"
              />
              <div className="flex flex-col justify-center gap-4 ">
                <h2 className="font-chakraPetch lg:mb-4">{modalData.title}</h2>
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

export default Collection;
