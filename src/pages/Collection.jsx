import React from "react";
import CollectionPack from "../components/CollectionPack";

const Collection = () => {
  return (
    <section id="collection">
      <div className="h-screen bg-collectionBackgound bg-cover">
        <div className="flex 3xl:w-[50%] w-[70%] mx-auto 3xl:py-48 py-36 h-full relative justify-center">
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
