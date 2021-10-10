import { ChevronRightIcon } from '@heroicons/react/solid';
import { Hashtags } from '@readable/ui';

export const HomePopularHashtag = () => {
  return (
    <>
      <button className="flex justify-between py-3 px-6 shadow-offset-black w-full">
        <div className="md:text-base text-sm">Popular Tag</div>
        <ChevronRightIcon className="w-5 h-5" />
      </button>
      <div className="px-6 pb-6 py-4 shadow-offset-black">
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
