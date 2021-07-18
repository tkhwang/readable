import { useAuth } from '@readable/common/auth/useAuth';
import { MeViewModel } from '@readable/common/auth/useAuth.query';
import { ViewController } from '@readable/types/ViewController';
import React from 'react';

export const MeViewController: ViewController<MeViewModel> = React.memo(({ viewModel }) => {
  const { me, loading, error } = viewModel;
  const { authenticated } = useAuth();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <div className="h-screen flex justify-center items-center text-2xl">Please login.</div>;
  }

  const { provider, name, avatarUrl } = me;

  return (
    <div className="h-screen flex justify-center items-center text-2xl">
      {authenticated ? (
        <ul>
          <li>
            Welcome {name} from {provider}, back !!!
          </li>
          <img src={avatarUrl} alt="avatar" />
        </ul>
      ) : (
        'Please login.'
      )}
    </div>
  );
});
