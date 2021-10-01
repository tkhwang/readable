import { ShadowCard } from '@readable/ui';

export const CollectionHistory = () => {
  return (
    <div>
      <div className="text-white mb-2">What I recently marked...</div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <ShadowCard title="title" description="description" siteName="siteName" index={0} />
        </div>
        <div className="flex-1">
          <ShadowCard title="title" description="description" siteName="siteName" index={1} />
        </div>
      </div>
    </div>
  );
};
