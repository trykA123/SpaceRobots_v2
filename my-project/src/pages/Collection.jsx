import React from "react";
import CollectionPack from "../components/CollectionPack";

const Collection = () => {
  return (
    <section id="collection">
      <div className="h-screen bg-slate-600 w-full">
        <div className="grid grid-cols-3 pl-[10%] pr-[10%] h-[90%] pt-[10%] w-[80%] mx-auto">
          <CollectionPack />
          <CollectionPack />
          <CollectionPack borderRight={true} />
        </div>
      </div>
    </section>
  );
};

export default Collection;
