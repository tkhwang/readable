import { setAuthToken } from '@readable/common/auth/token';
import { useAuth } from '@readable/common/auth/useAuth';
import { GetServerSideProps, NextApiRequest } from 'next';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect } from 'react';
import { loadJwtToken } from '@readable/common/auth/loadJwtToken';

interface Props {
  jwt: string | null;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const jwt = loadJwtToken(req as NextApiRequest);

  return { props: { jwt } };
};

const Auth: FunctionComponent<Props> = ({ jwt }) => {
  const { setAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (jwt) {
      setAuthToken(jwt);
      setAuthenticated(true);
      router.push('/');
    } else {
      router.push('/login');
    }
  }, [jwt, router, setAuthenticated]);

  // const router = useRouter();
  // const { token } = router.query;

  // useEffect(() => {
  //   if (token && typeof token === 'string') {
  //     setAuthToken(token);
  //     setAuthenticated(true);
  //   }

  //   router.push('/');
  // }, [router, token, setAuthenticated]);

  return null;
};

export default Auth;
