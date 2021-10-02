import { CollectionHistory } from './collection-history';
import { CollectionInterest } from './collection-interest';
import { CollectionProfile } from './collection-profile';

export const CollectionSection = () => {
  return (
    <div className="flex flex-col">
      <div>
        <CollectionProfile />
      </div>
      <div className="mt-9">
        <CollectionInterest />
      </div>
      <div className="mt-9">
        <CollectionHistory />
      </div>
    </div>
  );
};
