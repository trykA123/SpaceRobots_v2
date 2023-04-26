import React from "react";
import MarketCard from "../components/MarketCard";
import { useCollectionAuctions } from "../services/api";

const MarketCollection = ({ collectionTicker }) => {
  let numMarketCards = 3;
  if (window.innerWidth > 1920 && window.innerWidth < 3440) {
    numMarketCards = 4;
  } else if (window.innerWidth >= 3440) {
    numMarketCards = 5;
  }

  const { loading, error, data } = useCollectionAuctions(collectionTicker);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const convertToWebp = (url) => {
    const imageUrl = new URL(url);
    const cloudinaryUrl = `https://res.cloudinary.com/dts1mcl43/image/fetch/f_auto,q_auto,w_auto,dpr_auto/${imageUrl.href}`;
    return cloudinaryUrl;
  };

  return (
    <div className="flex 3xl:justify-center md:space-x-8 3xl:space-x-16 pt-4 3xl:pt-9">
      {[...Array(numMarketCards)].map((_, index) => {
        const edge = data.auctions.edges[index];
        if (!edge) {
          return null;
        }
        const price =
          edge.node.maxBid.amount /
          Math.pow(10, edge.node.maxBid.tokenData.decimals);
        const token = edge.node.maxBid.token;
        const url = edge.node.asset.media[0].url;
        const webpUrl = convertToWebp(url);
        const name = edge.node.asset.name;
        const key = edge.node.id;
        const assetId = edge.node.asset.identifier;

        const urlExtenstion = webpUrl.split(".").pop();

        return (
          <MarketCard
            price={price}
            url={urlExtenstion}
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
