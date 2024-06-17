import { gql, useQuery } from "@apollo/client";
import { motion } from "framer-motion";

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
      <div className="group z-30 flex" key={key}>
        <div className="flex scale-90 space-y-3 rounded-md bg-gray-15 from-teal-text-100 via-teal-text-40 to-teal-text-0 px-6 group-hover:bg-gradient-to-b 3xl:scale-100">
          <div className="skeleton mt-6 h-80 w-full rounded-md" />
          <div className="skeleton mb-4 h-8 w-3/4 rounded-md" />
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="skeleton mr-2 h-7 w-7 rounded-full" />
              <div className="skeleton h-12 w-20 rounded-md py-4" />
            </div>
            <button
              type="button"
              className="skeleton h-16 w-3/5 gap-4 rounded-md"
            />
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
      className="group z-30 flex"
      key={key}
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-col rounded-md border border-secondary-color-2 bg-background-color p-4 shadow-xl transition-all duration-500 hover:border-primary-teal">
        <img
          src={props.url}
          alt="NFT"
          className="rounded-md object-cover duration-500"
          loading="lazy"
        />
        <div className="flex w-full flex-col justify-between gap-4 p-4">
          <h3>{props.name}</h3>
          <div className="flex flex-col items-center justify-between gap-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                {/* <img src={xlogo} className="w-7 h-7" alt="multiversx logo" /> */}
                <h4 className="font-chakraPetch font-semibold text-primary-teal">
                  {props.price} EGLD
                </h4>
              </div>
              <img
                src={marketIconUrl}
                className="h-8 w-8"
                alt="Market's Icon"
              />
            </div>
            <button
              type="button"
              className="flex h-16 w-full items-center justify-center gap-4 rounded-xl bg-primary-teal font-semibold text-background-color duration-500"
            >
              <a
                href={marketUrl}
                target="_blank"
                className="flex items-center 3xl:text-xl"
                rel="noreferrer"
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
