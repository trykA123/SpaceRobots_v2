import { gql, useQuery } from "@apollo/client";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

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
  console.log(props.assetId);
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
    <div className="flex z-30 group">
      <div className="flex flex-col w-96 h-[530px] bg-gray-15 rounded-md group-hover:bg-gradient-to-b from-teal-text-100 via-teal-text-40 to-teal-text-0 px-3">
        <img src={props.url} alt="" className="pt-4 rounded-md object-cover" />
        <h3>
          {props.name}
        </h3>
        <div className="flex h-16 items-center space-x-4">
          <img src={marketIconUrl} className="w-12 h-12" />
          <h4 className="text-teal-text-100 text-2xl leading-[95px] font-chakraPetch font-semibold">
            {props.price}
          </h4>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-center text-white hover:text-black w-2/3 h-12 hover:bg-teal-300 bg-gray-15 rounded-md font-semibold gap-4">
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-teal-text-100"
            />
            <a href={marketUrl} target="_blank">
              BUY from {marketName}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
