import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import TypewriteParagraph from "../components/TypewriteParagraph";
import roboPack from "../assets/images/robopack.webp";
import CollectionPack from "../components/CollectionPack";
import MobileColectionPack from "../components/MobileColectionPack";
import MobileTitle from "../components/MobileTitle";
import Modal from "../components/ModalComponent";
import { cards } from "../utils/collectionConstants";

const Collection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({}); // State to store modal data

  const openModal = (title, description) => {
    setModalData({ title, description });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 20,
      on: {
        slideChange: () => {
          updateNavigationIndicators(swiper);
        },
      },
    });

    updateNavigationIndicators(swiper);
  }, []);

  const updateNavigationIndicators = (swiper) => {
    const navigationIndicators = document.querySelectorAll(
      ".navigation-indicator"
    );

    if (navigationIndicators) {
      navigationIndicators.forEach((indicator, index) => {
        if (index === swiper.activeIndex) {
          indicator.classList.add("active");
        } else {
          indicator.classList.remove("active");
        }
      });
    }
  };

  return (
    <section id="collection" className="py-24">
      <div className="container mx-auto h-[100dvh]">
        <div className="flex h-full w-full flex-col items-center justify-between gap-24">
          <div className="flex flex-col items-center">
            <TypewriteParagraph
              firstWord="Space Robots"
              secondWord="Robopacks"
              thirdWord="Robo"
            />
            <h2 className="mx-auto font-chakraPetch">Check it out</h2>
          </div>
          <div className="relative flex h-full w-full justify-center gap-4 xl:flex">
            <CollectionPack
              title={cards.firstCard.title}
              description={cards.firstCard.description}
              roboPack={roboPack}
              onClick={() =>
                openModal(cards.firstCard.title, cards.firstCard.description)
              }
            />
            <CollectionPack
              title={cards.secondCard.title}
              description={cards.secondCard.description}
              roboPack={roboPack}
              onClick={() =>
                openModal(cards.secondCard.title, cards.secondCard.description)
              }
            />
            <CollectionPack
              title={cards.thirdCard.title}
              description={cards.thirdCard.description}
              roboPack={roboPack}
              onClick={() =>
                openModal(cards.thirdCard.title, cards.thirdCard.description)
              }
            />
          </div>
        </div>
        <div className="z-10 flex h-[100dvh] w-full flex-col items-center justify-center bg-gradient-to-b from-gray-gradient-full via-gray-gradient to-gray-gradient-full pt-12 xl:hidden">
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
        </div>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={closeModal}>
            <div className="flex flex-col text-modal-text">
              <img src={roboPack} alt="" className="w-96 self-center" />
              <h2 className="mb-4 font-chakraPetch text-4xl font-bold">
                {modalData.title}
              </h2>
              <p className="">{modalData.description}</p>
              <div className="flex justify-between">
                <button className="mt-4 w-32 rounded bg-secondary-color px-4 py-2 font-bold">
                  Read More
                </button>
                {/* <button
                  onClick={closeModal}
                  className="mt-4 bg-secondary-color font-bold py-2 px-4 rounded w-32"
                >
                  Close
                </button> */}
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Collection;
