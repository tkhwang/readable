import { User } from '@readable/graphql-types';
import { useRouter } from 'next/router';
import { createContext, FunctionComponent, useContext, useEffect, useState } from 'react';
import { clearAuthToken, loadAuthToken } from './token';
import { useMeViewModel } from './useAuth.query';

interface IAuthContext {
  user: User | null;
  logout: () => void;
  authenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  logout: () => null,
  authenticated: false,
  setAuthenticated: () => null,
});

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const router = useRouter();

  // const viewModel = useMeViewModel();
  // console.log('TCL: AuthProvider:FunctionComponent -> viewModel', viewModel);

  const logoutFn = () => {
    clearAuthToken();
    setAuthenticated(false);
    router.push('/');
  };

  // const setAuthenticated = (value: boolean) => {

  // }

  // TODO(Teddy): Auth
  useEffect(() => {
    const token = loadAuthToken();
    if (token) {
      setAuthenticated(true);
    }

    // if (token) setIsLoggedIn(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: null, logout: logoutFn, authenticated: authenticated, setAuthenticated: setAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
