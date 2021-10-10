import { FormWithUnderline, ShadowCard } from '@readable/ui';
import { useDataAccessSearch } from '@readable/search/data-access-search';
import { useRouter } from 'next/router';

export const SearchFeed = () => {
  const router = useRouter();
  const { query } = router.query;

  const searchQuery = query as string;

  // TODO(zlrlo): 페이지네이션으로 변경 필요
  const { entries } = useDataAccessSearch(searchQuery);

  return (
    <>
      <div className="">
        <FormWithUnderline inputValue={searchQuery} onSubmit={() => {}} />
      </div>
      {entries?.map(({ urlInfo, cardOwner, tags, bookmarkersCount, readersCount }, index) => {
        return (
          <div key={urlInfo.id} className="my-6">
            <ShadowCard
              urlInfo={urlInfo}
              cardOwner={cardOwner}
              tags={tags}
              bookmarkersCount={bookmarkersCount}
              readersCount={readersCount}
            />
          </div>
        );
      })}
    </>
  );
};
