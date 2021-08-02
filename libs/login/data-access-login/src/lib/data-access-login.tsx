import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DataAccessLoginProps {}

const StyledDataAccessLogin = styled.div`
  color: pink;
`;

export function DataAccessLogin(props: DataAccessLoginProps) {
  return (
    <StyledDataAccessLogin>
      <h1>Welcome to data-access-login!</h1>
    </StyledDataAccessLogin>
  );
}

export default DataAccessLogin;
