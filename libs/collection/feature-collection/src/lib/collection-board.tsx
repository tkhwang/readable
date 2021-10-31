import { GroupCard, SmallGroupCard } from '@readable/ui';
import { DEFAULT_CARD_COVER_IMAGE_URL } from '@readable/shared/util-common';
import { useState } from 'react';
import { useDataAccessBookmarksGroupedByInterests } from '@readable/collection/data-access-collection';

enum View {
  List,
  Checkerboard,
}

export const CollectionBoard = () => {
  const {
    bookmarksGroupedByInterests,
    isBookmarksGroupedByInterestsDataLoading,
  } = useDataAccessBookmarksGroupedByInterests();

  const [viewType, setViewType] = useState(View.List);

  if (!bookmarksGroupedByInterests || isBookmarksGroupedByInterestsDataLoading) {
    return <div>loading...</div>;
  }

  const onListButtonClick = () => {
    setViewType(View.List);
  };

  const onCheckerboardButtonClick = () => {
    setViewType(View.Checkerboard);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <div className="text-xl">My Readable board</div>
        <div className="flex">
          <button onClick={onListButtonClick} className="mr-2">
            List
          </button>
          <button onClick={onCheckerboardButtonClick}>Checkerboard</button>
        </div>
      </div>
      {viewType === View.List && (
        <div className="space-y-6">
          {new Array(Math.min(4)).fill(0).map((_, index) => {
            const { interest, userBookmarks } = bookmarksGroupedByInterests[index];

            const bookmarkCount = userBookmarks.length;

            const previewImageUrlList =
              bookmarkCount === 0
                ? [DEFAULT_CARD_COVER_IMAGE_URL]
                : userBookmarks.map(({ urlInfo }) => urlInfo.imageUrl ?? DEFAULT_CARD_COVER_IMAGE_URL);

            const bookmarkTitles = userBookmarks.map(({ urlInfo }) => {
              return { key: urlInfo.id, bookmarkTitle: urlInfo.title ?? '' };
            });

            return (
              <div className="bg-customGray-darkest" key={interest.interestId}>
                <GroupCard
                  groupCardTitle={interest.interest}
                  bookmarkCount={bookmarkCount}
                  previewImageUrlList={previewImageUrlList}
                  bookmarkTitles={bookmarkTitles}
                ></GroupCard>
              </div>
            );
          })}
        </div>
      )}
      {viewType === View.Checkerboard && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-customGray-darkest">
            <SmallGroupCard
              previewImageUrlList={[
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
              ]}
            />
          </div>
          <div className="bg-customGray-darkest">
            <SmallGroupCard
              previewImageUrlList={[
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
              ]}
            />
          </div>
          <div className="bg-customGray-darkest">
            <SmallGroupCard
              previewImageUrlList={[
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
              ]}
            />
          </div>
          <div className="bg-customGray-darkest">
            <SmallGroupCard
              previewImageUrlList={[
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
              ]}
            />
          </div>
          <div className="bg-customGray-darkest">
            <SmallGroupCard
              previewImageUrlList={[
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
              ]}
            />
          </div>
          <div className="bg-customGray-darkest">
            <SmallGroupCard
              previewImageUrlList={[
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
              ]}
            />
          </div>
          <div className="bg-customGray-darkest">
            <SmallGroupCard
              previewImageUrlList={[
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
              ]}
            />
          </div>
          <div className="bg-customGray-darkest">
            <SmallGroupCard
              previewImageUrlList={[
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
              ]}
            />
          </div>
          <div className="bg-customGray-darkest">
            <SmallGroupCard
              previewImageUrlList={[
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};
