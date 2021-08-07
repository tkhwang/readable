import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { useAuth } from './useAuth';

type AuthRouteProps = {
  children: ReactElement;
  redirectPath: string;
};

export const AuthRoute = ({ children, redirectPath }: AuthRouteProps) => {
  const router = useRouter();

  const { authenticated, loading } = useAuth();

  // TODO(zlrlo): 로딩 UI 수정 필요
  if (loading) {
    return <div>loading...</div>;
  }

  const render = () => {
    if (authenticated) {
      return children;
    }

    router.push(redirectPath);

    return null;
  };

  return <>{render()}</>;
};
