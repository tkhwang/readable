import { ChevronRightIcon } from '@heroicons/react/solid';
import { Hashtags } from '@readable/ui';

export const HomePopularHashtag = () => {
  return (
    <>
      <div className="text-gray-300 flex justify-between">
        <div className="text-sm">Popular Tag</div>
        <ChevronRightIcon className="w-5 h-5" />
      </div>
      <div className="py-3">
        <Hashtags
          hashtagNames={[
            { key: '1', name: 'ux' },
            { key: '2', name: 'react' },
            { key: '3', name: 'food' },
            { key: '4', name: 'design' },
            { key: '5', name: 'design' },
            { key: '6', name: 'movie' },
            { key: '7', name: 'dev' },
          ]}
        />
      </div>
    </>
  );
};
