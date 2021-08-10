import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FeedFeatureBookmarkProps {}

const StyledFeedFeatureBookmark = styled.div`
  color: pink;
`;

export function FeedFeatureBookmark(props: FeedFeatureBookmarkProps) {
  return (
    <StyledFeedFeatureBookmark>
      <h1>Welcome to feed-feature-bookmark!</h1>
    </StyledFeedFeatureBookmark>
  );
}

export default FeedFeatureBookmark;
