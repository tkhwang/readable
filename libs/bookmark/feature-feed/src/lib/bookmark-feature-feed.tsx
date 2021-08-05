import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BookmarkFeatureFeedProps {}

const StyledBookmarkFeatureFeed = styled.div`
  color: pink;
`;

export function BookmarkFeatureFeed(props: BookmarkFeatureFeedProps) {
  return (
    <StyledBookmarkFeatureFeed>
      <h1>Welcome to bookmark-feature-feed!</h1>
    </StyledBookmarkFeatureFeed>
  );
}

export default BookmarkFeatureFeed;
