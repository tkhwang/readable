import { ShadowCard } from '@readable/ui';
import { DEFAULT_PROFILE_IMAGE_URL } from '../const';

export const CollectionHistory = () => {
  return (
    <div>
      <div className="text-white mb-2">What I recently marked...</div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <ShadowCard
            title="title"
            description="description"
            siteName="siteName"
            index={0}
            profileImageUrl={DEFAULT_PROFILE_IMAGE_URL}
          />
        </div>
        <div className="flex-1">
          <ShadowCard
            title="title"
            description="description"
            siteName="siteName"
            index={1}
            profileImageUrl={DEFAULT_PROFILE_IMAGE_URL}
          />
        </div>
      </div>
    </div>
  );
};
