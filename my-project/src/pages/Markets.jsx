import React from "react";
import MarketCard from "../components/MarketCard";
import { images } from "../utils/constants";
import { useQuery, gql } from "@apollo/client";


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
          marketplaceKey
          marketplace {
            iconUrl
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
    { bgImg: "packImg1", number: 1 },
    { bgImg: "packImg2", number: 2 },
    { bgImg: "packImg3", number: 3 },
    { bgImg: "packImg4", number: 4 },
    { bgImg: "packImg5", number: 5 },
  ];

  let numCards = 3;
  if (window.innerWidth >= 1920 && window.innerWidth < 3440) {
    numCards = 4;
  } else if (window.innerWidth >= 3440) {
    numCards = 5;
  }

  const { loading, error, data } = useQuery(COLLECTION_AUCTIONS_QUERY, {
    variables: COLLECTION_VARIABLES,
  });


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

    return (
    <section id="markets">
      <div className="flex flex-col bg-background bg-cover pl-[15%] pt-[5%] h-screen w-screen">
        <div className="flex space-x-12 justify-center w-[90%] py-10">
          {smallPacks.map((pack) => (
            <div className="flex items-center justify-center w-36 h-36 border-[1px] rounded-md relative duration-700 z-30 group">
              <div
                className={`bg-${pack.bgImg} bg-cover opacity-40 group-hover:opacity-100`}
              ></div>
              <p className="position abosolute text-white opacity-100 group-hover:opacity-0">
                {pack.number}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col px-20">
          <div className="flex py-10">
            <img src={images.roboPack} alt="" className="w-24 h-24" />
            <div className="flex flex-col px-12">
              <h2 className="text-4xl text-white uppercase font-chakraPetch mb-4">
                Space Robots
              </h2>
              <p className="text-white w-[80%]">
                Space Robots NFTs are part of an upgradable collection that
                allows collectors to enhance their digital assets over time.
                With each upgrade, the capabilities and abilities of the robot
                are expanded, providing new opportunities for exploration and
                discovery.
              </p>
            </div>
          </div>
          <div className="flex">
          {data.auctions.edges.map((edge) => {
          const price = edge.node.maxBid.amount / Math.pow(10, edge.node.maxBid.tokenData.decimals);
          const url = edge.node.asset.media[0].url;
          const name = edge.node.asset.name;
          const key = edge.node.id;

          const assetId = edge.node.asset.identifier;

          return (
            <MarketCard price={price} url={url} name={name} key={key} assetId={assetId}/>
          );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;
