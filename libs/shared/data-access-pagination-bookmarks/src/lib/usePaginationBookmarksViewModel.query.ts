import { gql } from '@apollo/client';

const PAGINATION_BOOKMARKS = gql`
  query PaginationBookmarks {
    paginationBookmarks: paginationBookmarks {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          siteName
          collector {
            id
            name
            provider
          }
        }
      }
    }
  }
`;
