import { FormWithUnderline, ShadowCard } from '@readable/ui';
import { DEFAULT_CARD_COVER_IMAGE_URL, DEFAULT_PROFILE_IMAGE_URL } from '../const';
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
        <FormWithUnderline inputValue={searchQuery} onSubmit={() => {}}/>
      </div>
      {entries?.map(({ id, description, siteName, title }, index) => {
        return (
          <div key={id} className="my-6">
            <ShadowCard
              cardImageUrl={DEFAULT_CARD_COVER_IMAGE_URL}
              description={description ?? ''}
              siteName={siteName ?? ''}
              profileImageUrl={DEFAULT_PROFILE_IMAGE_URL}
              index={index}
              title={title ?? ''}
            />
          </div>
        );
      })}
    </>
  );
};
