import React from "react";
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

const variables = {
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

const AuctionsList = () => {
  const { loading, error, data } = useQuery(COLLECTION_AUCTIONS_QUERY, {
    variables: variables,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
        {data.auctions.edges.map((edge) => {
          const price = edge.node.maxBid.amount / Math.pow(10, edge.node.maxBid.tokenData.decimals);
          const url = edge.node.asset.media[0].url;
          return (
            <li key={edge.node.id}>
              <h3>{edge.node.asset.name}</h3>
              <p>Asset Identifier: {edge.node.asset.identifier}</p>
              <p>Max bid: {edge.node.maxBid.amount}</p>
              <p>Decimals: {edge.node.maxBid.tokenData.decimals}</p>
              <p>Price: {price}</p>
              <p>Status: {edge.node.status}</p>
              <p>URL: {}</p>
              {/* You can display more information as needed */}
            </li>
          );
        })}
    </div>
  );
};

export default AuctionsList;