import { ChevronRightIcon } from '@heroicons/react/solid';
import { useDataAccessPopularCollector } from '@readable/home/data-access-home';
import { DEFAULT_PROFILE_IMAGE_URL } from '@readable/shared/util-common';
import { Avatar } from '@readable/ui';

// TODO(zlrlo): UI 공통으로 분리하는 리팩토링 필요

export const CollectionRecommendCollector = () => {
  const popularCollectors = [
    { id: '1', name: '20min', profileImageUrl: DEFAULT_PROFILE_IMAGE_URL, isFollowingUser: false },
    { id: '2', name: '20min', profileImageUrl: DEFAULT_PROFILE_IMAGE_URL, isFollowingUser: false },
    { id: '3', name: '20min', profileImageUrl: DEFAULT_PROFILE_IMAGE_URL, isFollowingUser: false },
  ];

  return (
    <div>
      <button className="flex py-3 px-6 w-full">
        <div className="md:text-base text-sm">You might like</div>
      </button>
      <div className="space-y-7 px-6 pb-6 py-4">
        {popularCollectors.map(({ id, name, profileImageUrl, isFollowingUser }) => (
          <Avatar
            key={id}
            profileImage={profileImageUrl}
            userInfo={{
              nickname: name,
              description: 'Product designer',
            }}
            isActive={isFollowingUser}
            size="lg"
            direction="row"
          />
        ))}
      </div>
    </div>
  );
};
