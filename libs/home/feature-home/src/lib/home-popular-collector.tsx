import { ChevronRightIcon } from '@heroicons/react/solid';
import { useDataAccessPopularCollector } from '@readable/home/data-access-home';
import { Avatar } from '@readable/ui';

export const HomePopularCollection = () => {
  const { popularCollectors, isPopularCollectorDataLoading } = useDataAccessPopularCollector();

  if (!popularCollectors || isPopularCollectorDataLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <button className="flex justify-between py-3 px-6 shadow-offset-black w-full">
        <div className="md:text-base text-sm">Popular Collector</div>
        <ChevronRightIcon className="w-5 h-5" />
      </button>
      <div className="space-y-7 px-6 pb-6 py-4 shadow-offset-black">
        {popularCollectors.map(({ id, name, profileImageUrl, isFollowingUser }) => (
          <Avatar
            key={id}
            profileImage={profileImageUrl}
            userInfo={{
              nickname: name,
              description:
                'Defining and informing the complex field of user experience (UX) through frequent publication of high-quality articles for experts and newcomers alike.',
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
