import { useDataAccessRecommendUsers } from '@readable/collection/data-access-collection';
import { DEFAULT_PROFILE_IMAGE_URL } from '@readable/shared/util-common';
import { Avatar } from '@readable/ui';

export const CollectionRecommendUsers = () => {
  const { recommendUsers, isRecommendUsersDataLoading } = useDataAccessRecommendUsers();

  if (!recommendUsers || isRecommendUsersDataLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <button className="flex py-3 px-6 w-full">
        <div className="md:text-base text-sm">You might like</div>
      </button>
      <div className="space-y-7 px-6 pb-6 py-4">
        {recommendUsers.map(({ id, name }) => (
          <Avatar
            key={id}
            profileImage={DEFAULT_PROFILE_IMAGE_URL}
            userInfo={{
              nickname: name,
              description: 'Product designer',
            }}
            isActive={false}
            size="lg"
            direction="row"
          />
        ))}
      </div>
    </div>
  );
};
