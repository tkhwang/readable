import router from 'next/router';
import { useAuth } from '@readable/shared/data-access-auth';
import { useMeViewModel } from '@readable/shared/data-access-me';
import { HeaderFeed } from '@readable/ui';

export const HomeHeader = () => {
  const { me, loading, error } = useMeViewModel();
  const { logout } = useAuth();

  const isAuthenticated = !error;

  const gotToLoginPage = () => {
    router.push('./login');
  };

  return (
    <HeaderFeed
      goToLoginPage={gotToLoginPage}
      logout={logout}
      loading={loading}
      isAuthenticated={isAuthenticated}
    ></HeaderFeed>
  );
};
