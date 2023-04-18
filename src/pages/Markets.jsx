import { gql, useQuery } from "@apollo/client";
import React from "react";
import roboPack from "../assets/images/robopack.png";
import MarketCard from "../components/MarketCard";

const COLLECTION_AUCTIONS_QUERY = gql`
  query collectionAuctions(
    $customFilters: [AuctionCustomFilter]
    $sorting: [Sorting!]
    $filters: FiltersExpression
    $grouping: Grouping
    $pagination: ConnectionArgs
  ) {
    auctions(
      customFilters: $customFilters
      sorting: $sorting
      filters: $filters
      grouping: $grouping
      pagination: $pagination
    ) {
      edges {
        node {
          asset {
            identifier
            name
            media {
              url
            }
          }
          maxBid {
            amount
            token
            usdAmount
            tokenData {
              decimals
              symbol
              __typename
            }
            __typename
          }
          minBid {
            amount
            token
            usdAmount
            tokenData {
              decimals
              symbol
              __typename
            }
            __typename
          }
          status
        }
      }
    }
  }
`;

const COLLECTION_VARIABLES = {
  customFilters: [],
  filters: {
    filters: [
      {
        field: "status",
        op: "EQ",
        values: ["Running"],
      },
      {
        field: "collection",
        op: "EQ",
        values: ["SRC-27d8ff"],
      },
    ],
    operator: "AND",
  },
  pagination: {
    after: "",
    first: 5,
  },
  sorting: [
    {
      direction: "DESC",
      field: "creationDate",
    },
  ],
};

const Markets = () => {
  const smallPacks = [
    { bgImg: "packImg1", info: "Space Robots - Roboparts" },
    { bgImg: "packImg2", info: "Space Robots - General" },
    { bgImg: "packImg3", info: "Space Robots - Roboparts" },
    { bgImg: "packImg4", info: "Space Robots - Backgrounds" },
    { bgImg: "packImg5", info: "Proteo Robots" },
  ];

  let numMarketCards = 3;
  if (window.innerWidth > 1920 && window.innerWidth < 3440) {
    numMarketCards = 4;
  } else if (window.innerWidth >= 3440) {
    numMarketCards = 5;
  }

  const { loading, error, data } = useQuery(COLLECTION_AUCTIONS_QUERY, {
    variables: COLLECTION_VARIABLES,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section id="markets">
      <div className="flex flex-col bg-background bg-cover pl-[10%] 4xl:pl-[15%] pt-[5%] h-screen w-screen">
        <div className="flex space-x-12 justify-center w-[90%] py-10">
          {smallPacks.map((pack) => (
            <div className="flex items-center justify-center w-48 h-48 border-[1px] border-gray-15 rounded-md relative duration-700 z-30 group">
              <div
                className={`bg-${pack.bgImg} bg-cover opacity-40 group-hover:opacity-100 duration-500`}
              ></div>
              <p className="text-center abosolute font-bold text-white opacity-100 group-hover:opacity-0">
                {pack.info}
              </p>
            </div>
          ))}
        </div>
        <div className="flex px-20">
          <div className="flex 3xl:justify-center gap-16 pt-9">
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
              const name = edge.node.asset.name;
              const key = edge.node.id;
              const assetId = edge.node.asset.identifier;
              console.log(token);

              return (
                <MarketCard
                  price={price}
                  url={url}
                  token={token}
                  name={name}
                  key={key}
                  assetId={assetId}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;
