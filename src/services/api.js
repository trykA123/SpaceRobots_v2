import { gql, useQuery } from "@apollo/client";

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

// SRP-ec2514 / "SRC-27d8ff" / SRB-0f1b1d / PROTEOROBO-6df9cd

const COLLECTION_VARIABLES = (collectionTicker) => {
  return {
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
          values: [collectionTicker],
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
  } 
};
  
  

export const useCollectionAuctions = () => {
  const { loading, error, data } = useQuery(COLLECTION_AUCTIONS_QUERY, {
    variables: COLLECTION_VARIABLES("SRC-27d8ff"),
  });

  return { loading, error, data };
};
