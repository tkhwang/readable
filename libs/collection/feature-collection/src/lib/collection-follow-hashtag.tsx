import { ChevronRightIcon } from '@heroicons/react/solid';
import { useDataAccessPopularTags } from '@readable/home/data-access-home';
import { Hashtags } from '@readable/ui';

// TODO(zlrlo): UI 공통으로 분리하는 리팩토링 필요

export const CollectionFollowHashtag = () => {
  // const { popularTags, isPopularTagsDataLoading } = useDataAccessPopularTags();
  const popularTags = [
    { key: '1', name: 'tag1' },
    { key: '2', name: 'tag2' },
    { key: '3', name: 'tag3' },
  ];

  // if (!popularTags || isPopularTagsDataLoading) {
  //   return <div>loading...</div>;
  // }

  return (
    <>
      <button className="flex justify-center py-3 px-6 w-full">
        <div className="md:text-base text-sm">Follow tags</div>
      </button>
      <div className="px-6 pb-6 py-4">
        <Hashtags hashtagNames={popularTags} />
      </div>
    </>
  );
};
