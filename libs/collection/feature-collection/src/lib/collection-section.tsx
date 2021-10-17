import { CollectionHistory } from './collection-history';
import { CollectionInterest } from './collection-interest';
import { CollectionProfile } from './collection-profile';

export const CollectionSection = () => {
  return (
    <div className="space-y-14">
      <CollectionProfile />

      <CollectionInterest />

      <CollectionHistory />
    </div>
  );
};
