import { ChevronRightIcon } from '@heroicons/react/solid';
import { useDataAccessPopularTags } from '@readable/home/data-access-home';
import { Hashtags } from '@readable/ui';

export const HomePopularHashtag = () => {
  const { popularTags, isPopularTagsDataLoading } = useDataAccessPopularTags();

  if (!popularTags || isPopularTagsDataLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <button className="flex justify-between py-3 px-6 shadow-offset-black w-full">
        <div className="md:text-base text-sm">Popular Tag</div>
        <ChevronRightIcon className="w-5 h-5" />
      </button>
      <div className="px-6 pb-6 py-4 shadow-offset-black">
        <Hashtags hashtagNames={popularTags} />
      </div>
    </>
  );
};
