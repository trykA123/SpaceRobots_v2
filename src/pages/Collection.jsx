import React from "react";
import CollectionPack from "../components/CollectionPack";

const Collection = () => {
  return (
    <section id="collection">
      <div className="h-screen bg-collectionBackgound bg-cover">
        <div className="grid grid-cols-3 3xl:w-[50%] w-[70%] mx-auto 3xl:py-48 py-36 h-full">
          <CollectionPack />
          <CollectionPack />
          <CollectionPack borderRight={true} />
        </div>
      </div>
    </section>
  );
};

export default Collection;
