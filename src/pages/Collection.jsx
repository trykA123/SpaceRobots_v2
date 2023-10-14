import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import CollectionPack from "../components/CollectionPack";
import MobileColectionPack from "../components/MobileColectionPack";
import MobileTitle from "../components/MobileTitle";

const Collection = () => {
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
    <section id="collection" className="">
      <div className="h-[100dvh] xl:bg-collectionBackgound bg-cover bg-packImg overflow-hidden">
        <div className="hidden xl:flex 4xl:w-[50%] w-[60%] mx-auto xl:py-28 3xl:py-44 4xl:py-48 h-[100dvh] relative justify-center overflow-x-auto xl:overflow-x-hidden">
          <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"></div>
          <CollectionPack />
          <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"></div>
          <CollectionPack />
          <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"></div>
          <CollectionPack />
          <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
        <div className="flex flex-col xl:hidden items-center justify-center z-10 pt-12 w-full h-[100dvh] bg-gradient-to-b from-gray-gradient-full via-gray-gradient to-gray-gradient-full">
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
      </div>
    </section>
  );
};

export default Collection;
