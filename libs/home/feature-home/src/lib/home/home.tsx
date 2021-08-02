import React from 'react';
import { useMeViewModel } from '@readable/shared/data-access-me';
import { Profile } from '@readable/ui';
import { useRouter } from 'next/router';

export const Home = React.memo(() => {
  const { me, loading, error } = useMeViewModel();
  const router = useRouter();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide">The Great needs more time to move. Loading...</span>
      </div>
    );
  }

  if (error) {
    router.push('/login');
    return <div className="h-screen flex justify-center items-center text-2xl">Unauthorized. Please login.</div>;
  }

  // const { provider, name, avatarUrl } = me;

  const provider = me?.provider ?? '';
  const name = me?.name ?? '';
  const avatarUrl = me?.avatarUrl ?? '';

  return (
    <div className="h-screen text-2xl">
      <Profile provider={provider} name={name} avatarUrl={avatarUrl}></Profile>
    </div>
  );
});
