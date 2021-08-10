import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FeedDataAccessPaginationBookmarksProps {}

const StyledFeedDataAccessPaginationBookmarks = styled.div`
  color: pink;
`;

export function FeedDataAccessPaginationBookmarks(props: FeedDataAccessPaginationBookmarksProps) {
  return (
    <StyledFeedDataAccessPaginationBookmarks>
      <h1>Welcome to feed-data-access-pagination-bookmarks!</h1>
    </StyledFeedDataAccessPaginationBookmarks>
  );
}

export default FeedDataAccessPaginationBookmarks;
