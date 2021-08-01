import { useAuth } from '@readable/shared/data-access-auth';
import { ComingSoon } from '@readable/home/feature-coming-soon';

export const HomeLayout = () => {
  const { authenticated, logout } = useAuth();

  return <div className="h-screen">{authenticated && <ComingSoon />}</div>;
};
