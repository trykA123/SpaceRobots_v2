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
              thumbnailUrl
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
      first: 16,
    },
    sorting: [
      {
        direction: "DESC",
        field: "creationDate",
      },
    ],
  };
};

export const useCollectionAuctions = (collectionTicker) => {
  const { loading, error, data } = useQuery(COLLECTION_AUCTIONS_QUERY, {
    variables: COLLECTION_VARIABLES(collectionTicker),
  });

  return { loading, error, data };
};
