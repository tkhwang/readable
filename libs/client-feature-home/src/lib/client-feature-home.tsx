import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ClientFeatureHomeProps {}

const StyledClientFeatureHome = styled.div`
  color: pink;
`;

export function ClientFeatureHome(props: ClientFeatureHomeProps) {
  return (
    <StyledClientFeatureHome>
      <h1>Welcome to client-feature-home!</h1>
    </StyledClientFeatureHome>
  );
}

export default ClientFeatureHome;
