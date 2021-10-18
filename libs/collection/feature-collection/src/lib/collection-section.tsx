import { CollectionHistory } from './collection-history';
import { CollectionBoard } from './collection-board';
import { CollectionProfile } from './collection-profile';

export const CollectionSection = () => {
  return (
    <div className="space-y-14">
      <CollectionProfile />

      <CollectionBoard />

      <CollectionHistory />
    </div>
  );
};
