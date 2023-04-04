import React from "react";
import { images } from "../utils/constants";
import { useQuery, gql } from "@apollo/client";

const SELECTED_AUCTION_QUERY = gql`
  query selectedAuction(
    $sorting: [Sorting!]
    $filters: FiltersExpression
    $grouping: Grouping
    $pagination: ConnectionArgs
  ) {
    auctions(
      sorting: $sorting
      filters: $filters
      grouping: $grouping
      pagination: $pagination
    ) {
      edges {
        node {
          marketplace {
            name
            url
            iconUrl
          }
        }
      }
    }
  }
`;

const MarketCard = (props) => {
  console.log(props.assetId)
  const SELECTED_VARIABLES = {
    filters: {
      filters: [
        {
          field: "identifier",
          op: "EQ",
          values: [props.assetId],
        },
        {
          field: "status",
          op: "IN",
          values: ["Running", "Claimable"],
        },
      ],
      operator: "AND",
    },
  };

  const { loading, error, data } = useQuery(SELECTED_AUCTION_QUERY, {
    variables: SELECTED_VARIABLES,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data.auctions);

  const marketName = data.auctions.edges[0].node.marketplace.name;
  const marketUrl = data.auctions.edges[0].node.marketplace.url;
  const marketIconUrl = data.auctions.edges[0].node.marketplace.iconUrl;

  return (
    <div className="flex pr-12 z-40 group">
      <div className="flex flex-col w-96 h-[530px] bg-gray-15 rounded-md group-hover:bg-gradient-to-b from-teal-text-100 via-teal-text-40 to-teal-text-0">
        <div className="flex flex-col mx-auto">
          <img
            src={props.url}
            alt=""
            className="w-80 h-80 mt-6 rounded-md"
          />
          <h3 className="font-chakraPetch text-2xl text-white pt-3 font-semibold">
            {props.name}
          </h3>
          <p className="text-white-40 pt-3">
            RANK:&nbsp;&nbsp;<span className="text-white">8</span>
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
            <img src={marketIconUrl} 
              className="w-12 h-12"
              />
              <h4 className="text-teal-text-100 text-2xl leading-[95px] font-chakraPetch font-semibold">
                {props.price} 
              </h4>
            </div>
            <div className="flex items-center justify-center text-white hover:text-black w-48 h-12 hover:bg-teal-300 bg-gray-15 rounded-sm font-semibold gap-4">
              <a href={marketUrl} target="_blank">BUY from {marketName}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
