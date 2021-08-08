import router from 'next/router';
import { useAuth } from '@readable/shared/data-access-auth';
import { useMeViewModel } from '@readable/shared/data-access-me';
import { FeedHeader } from '@readable/ui';

export const HomeHeader = () => {
  const { me, loading, error } = useMeViewModel();
  const { logout } = useAuth();

  const isAuthenticated = !error;

  const gotToLoginPage = () => {
    router.push('./login');
  };

  return (
    <FeedHeader
      goToLoginPage={gotToLoginPage}
      logout={logout}
      loading={loading}
      isAuthenticated={isAuthenticated}
    ></FeedHeader>
  );
};
