import { ChevronRightIcon } from '@heroicons/react/solid';
import { Avatar } from '@readable/ui';
export const HomePopularCollection = () => {
  return (
    <div>
      <button className="flex justify-between py-3 px-6 shadow-offset-black w-full">
        <div className="md:text-base text-sm">Popular Collector</div>
        <ChevronRightIcon className="w-5 h-5" />
      </button>
      <div className="space-y-7 px-6 pb-6 py-4 shadow-offset-black">
        <Avatar
          userInfo={{
            nickname: '20min',
            job:
              'Defining and informing the complex field of user experience (UX) through frequent publication of high-quality articles for experts and newcomers alike.',
          }}
          size="lg"
          direction="row"
        />
        <Avatar
          userInfo={{
            nickname: '20min',
            job:
              'Defining and informing the complex field of user experience (UX) through frequent publication of high-quality articles for experts and newcomers alike.',
          }}
          size="lg"
          direction="row"
        />
        <Avatar
          userInfo={{
            nickname: '20min',
            job:
              'Defining and informing the complex field of user experience (UX) through frequent publication of high-quality articles for experts and newcomers alike.',
          }}
          size="lg"
          direction="row"
        />
      </div>
    </div>
  );
};
