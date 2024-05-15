import { gql, useQuery } from "@apollo/client";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
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

  if (loading) {
    // Show skeleton loading while data is loading
    return (
      <div className="flex z-30 group" key={key}>
        <div className="flex bg-gray-15 rounded-md group-hover:bg-gradient-to-b from-teal-text-100 via-teal-text-40 to-teal-text-0 px-6 space-y-3 3xl:scale-100 scale-90">
          <div className="skeleton h-80 w-full rounded-md mt-6" />
          <div className="skeleton h-8 w-3/4 mb-4 rounded-md" />
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="skeleton h-7 w-7 rounded-full mr-2" />
              <div className="skeleton h-12 w-20 rounded-md py-4" />
            </div>
            <button className="skeleton h-16 w-3/5 rounded-md gap-4" />
          </div>
        </div>
      </div>
    );
  }
  if (error) return <p>Error: {error.message}</p>;

  const marketUrl = data.auctions.edges[0].node.marketplace.url;
  const marketIconUrl = data.auctions.edges[0].node.marketplace.iconUrl;

  return (
    <motion.div
      className="flex z-30 group"
      key={key}
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-col bg-background-color border border-secondary-color-2 hover:border-accent-color rounded-md p-4 shadow-xl duration-500 transition-all">
        <img
          src={props.url}
          alt="MarketCard image"
          className="rounded-md object-cover duration-500"
          loading="lazy"
        />
        <div className="flex flex-col justify-between p-4 w-full gap-4">
          <h3>{props.name}</h3>
          <div className="flex flex-col items-center justify-between gap-4">
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center">
                {/* <img src={xlogo} className="w-7 h-7" alt="multiversx logo" /> */}
                <h4 className="text-primary-teal font-chakraPetch font-semibold">
                  {props.price} EGLD
                </h4>
              </div>
              <img
                src={marketIconUrl}
                className="w-8 h-8"
                alt="Market's Icon"
              />
            </div>
            <button className="flex items-center justify-center w-full h-16 rounded-xl font-semibold gap-4 duration-500 bg-primary-teal text-background-color">
              <a
                href={marketUrl}
                target="_blank"
                className="flex items-center 3xl:text-xl"
              >
                Upgrade collection{" "}
              </a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MarketCard;
