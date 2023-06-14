import { gql, useQuery } from "@apollo/client";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import xlogo from "../assets/images/xlogo.webp";

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

const MarketCard = ({ key, ...props }) => {
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

  const marketUrl = data.auctions.edges[0].node.marketplace.url;
  const marketIconUrl = data.auctions.edges[0].node.marketplace.iconUrl;

  return (
    <div className="flex z-30 group" key={key}>
      <div className="flex flex-col w-80 h-[450px] 3xl:w-[400px] 3xl:h-[550px] bg-gray-15 rounded-md group-hover:bg-gradient-to-b from-teal-text-100 via-teal-text-40 to-teal-text-0 px-6 space-y-3 3xl:scale-100 scale-90">
        {/* {props.extension === "png" ? (
          <img
            src={props.url}
            alt="MarketCard image"
            className="pt-6 rounded-md object-cover group-hover:scale-110 duration-500"
          />
        ) : (
          <video
            src={props.url}
            alt="MarketCard video"
            className="pt-6 rounded-md object-cover group-hover:scale-110 duration-500"
            autoPlay
            muted
            loop
          />
        )} */}

        <img
          src={props.url}
          alt="MarketCard image"
          className="pt-6 rounded-md object-cover group-hover:scale-110 duration-500"
          loading="lazy"
        />

        <h3>{props.name}</h3>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img src={xlogo} className="w-7 h-7" alt="multiversx logo" />
            <h4 className="text-teal-text-100 text-xl 3xl:text-2xl leading-[95px] font-chakraPetch font-semibold">
              {props.price}
            </h4>
          </div>
          <button className="flex items-center justify-center text-white hover:text-black w-[50%] h-16 hover:bg-teal-300 bg-gray-15 rounded-md font-semibold gap-4 group-hover:w-3/5 duration-500 group-hover:-translate-x-2">
            <a
              href={marketUrl}
              target="_blank"
              className="flex items-center 3xl:text-xl"
            >
              BUY on{" "}
              <img
                src={marketIconUrl}
                className="w-8 h-8 3xl:w-12 3xl:h-12 pl-2 animate-pulse"
                alt="Market's Icon"
              />
            </a>
            {/* <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-teal-text-100 hidden opacity-0 group-hover:block group-hover:opacity-100 duration-500"
            /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
