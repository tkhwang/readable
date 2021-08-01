import React from 'react';
import { useAuth } from '@readable/shared/data-access-auth';
// import { useMeViewModel } from '@readable/shared/data-access-me';

export const Home = React.memo(() => {
  // const { me, loading, error } = useMeViewModel();
  // const { authenticated } = useAuth();

  // if (loading) {
  //   return (
  //     <div className="h-screen flex justify-center items-center">
  //       <span className="font-medium text-xl tracking-wide">The Great needs more time to move. Loading...</span>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return <div className="h-screen flex justify-center items-center text-2xl">Unauthorized. Please login.</div>;
  // }

  // const { provider, name, avatarUrl } = me;

  return (
    <div className="h-screen text-2xl">
      {/* {authenticated ? (
        <>
          Welcome {name} from {provider}, back !!!
          <img className="w-16" src={avatarUrl} alt="avatar" />
          <Bookmarks />
        </>
      ) : (
        'Please login.'
      )} */}
    </div>
  );
});
