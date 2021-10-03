import { ChevronRightIcon } from '@heroicons/react/solid';
import { ActionAvatars } from '@readable/ui';
import { DEFAULT_PROFILE_IMAGE_URL } from '../const';

export const HomePopularCollection = () => {
  const profileImage = DEFAULT_PROFILE_IMAGE_URL;

  return (
    <>
      <div className="text-gray-300 flex justify-between">
        <div className="text-sm">Popular Collector</div>
        <ChevronRightIcon className="w-5 h-5" />
      </div>
      <div className="py-5 overflow-auto">
        <ActionAvatars
          avatars={[
            {
              id: '1',
              profileImage,
              userInfo: {
                nickname: '20min',
                job: 'Designer',
              },
              direction: 'column',
            },
            {
              id: '2',
              profileImage,
              userInfo: {
                nickname: '20min',
                job: 'Designer',
              },
              direction: 'column',
            },
            {
              id: '3',
              profileImage,
              userInfo: {
                nickname: '20min',
                job: 'Designer',
              },
              direction: 'column',
            },
          ]}
          listDirection="row"
          avatarSize="lg"
        />
      </div>
    </>
  );
};
