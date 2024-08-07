import { motion, stagger, useAnimate } from "framer-motion";
import React from "react";
import MarketCard from "../components/MarketCard";
import { useCollectionAuctions } from "../services/api";

const MarketCollection = ({ collectionTicker }) => {
  let numMarketCards = 8;

  const mobileBreakpoint = window.innerWidth < 1024;

  if (mobileBreakpoint) {
    numMarketCards = 4;
  }

  const { loading, error, data } = useCollectionAuctions(collectionTicker);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[...Array(numMarketCards)].map((_, index) => {
        const edge = data.auctions.edges[index];
        if (!edge) {
          return null;
        }
        const price = (
          edge.node.maxBid.amount /
          10 ** edge.node.maxBid.tokenData.decimals
        ).toFixed(2);
        const token = edge.node.maxBid.token;
        const url = edge.node.asset.media[0].url;
        const thumbnailUrl = edge.node.asset.media[0].thumbnailUrl;
        const name = edge.node.asset.name;
        const key = edge.node.id;
        const assetId = edge.node.asset.identifier;

        const urlExtenstion = url.split(".").pop();

        return (
          <MarketCard
            price={price}
            extension={urlExtenstion}
            url={thumbnailUrl}
            token={token}
            name={name}
            key={key}
            assetId={assetId}
          />
        );
      })}
    </div>
  );
};

export default MarketCollection;
