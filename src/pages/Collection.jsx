import React from "react";
import CollectionPack from "../components/CollectionPack";

const Collection = () => {
  return (
    <section id="collection">
      <div className="h-screen bg-collectionBackgound bg-cover">
        <div className="flex 4xl:w-[50%] w-[60%] mx-auto md:py-28 3xl:py-44 4xl:py-48 md h-full relative justify-center">
          <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"></div>
          <CollectionPack />
          <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"></div>
          <CollectionPack />
          <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"></div>
          <CollectionPack />
          <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
