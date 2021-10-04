import React from 'react';
import { useMe } from '@readable/shared/data-access-me';
import { Loading } from '@readable/ui';
import { FeatureSearch } from '@readable/search/feature-search';

function Search() {
  const { me, isMeDataLoading } = useMe({ redirectTo: '/login', fetchPolicy: 'network-only' });

  if (!me || isMeDataLoading) {
    return (
      <div className="border-2 h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return <FeatureSearch />;
}

export default Search;
