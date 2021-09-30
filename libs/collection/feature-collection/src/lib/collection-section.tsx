import { CollectionProfile } from './collection-profile';

export const CollectionSection = () => {
  return (
    <div className="flex flex-col">
      <div>
        <CollectionProfile />
      </div>
      <div>pinned</div>
      <div>recent activity</div>
    </div>
  );
};
