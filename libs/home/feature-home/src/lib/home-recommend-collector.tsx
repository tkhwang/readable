import { ChevronRightIcon } from '@heroicons/react/solid';
import { ActionAvatarList } from '@readable/ui';
import { DEFAULT_PROFILE_IMAGE_URL } from '../const';

export const HomeRecommendCollector = () => {
  const profileImage = DEFAULT_PROFILE_IMAGE_URL;

  return (
    <div>
      <div className="text-gray-300 flex justify-between">
        <div className="text-sm">You might like</div>
        <ChevronRightIcon className="w-5 h-5" />
      </div>
      <div className="py-4">
        <ActionAvatarList
          avatarList={[
            {
              profileImage,
              userInfo: {
                nickname: '20min',
                job: 'Designer',
              },
              direction: 'row',
            },
            {
              profileImage,
              userInfo: {
                nickname: '20min',
                job: 'Designer',
              },
              direction: 'row',
            },
            {
              profileImage,
              userInfo: {
                nickname: '20min',
                job: 'Designer',
              },
              direction: 'row',
            },
          ]}
          listDirection="column"
        />
      </div>
    </div>
  );
};
