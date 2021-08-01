import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FeatureCommingSoonProps {}

const StyledFeatureCommingSoon = styled.div`
  color: pink;
`;

export function FeatureCommingSoon(props: FeatureCommingSoonProps) {
  return (
    <StyledFeatureCommingSoon>
      <h1>Welcome to feature-comming-soon!</h1>
    </StyledFeatureCommingSoon>
  );
}

export default FeatureCommingSoon;
