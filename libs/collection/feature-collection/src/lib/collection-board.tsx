import { GroupCard, SmallGroupCard, SmallShadowCard } from '@readable/ui';
import { DEFAULT_CARD_COVER_IMAGE_URL } from '@readable/shared/util-common';
import { useState } from 'react';

enum View {
  List,
  Checkerboard,
}

export const CollectionBoard = () => {
  const [viewType, setViewType] = useState(View.List);

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
          <div className="bg-customGray-darkest">
            <GroupCard
              previewImageUrlList={[
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
              ]}
            ></GroupCard>
          </div>
          <div className="bg-customGray-darkest">
            <GroupCard
              previewImageUrlList={[
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
              ]}
            ></GroupCard>
          </div>
          <div className="bg-customGray-darkest">
            <GroupCard
              previewImageUrlList={[
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
              ]}
            ></GroupCard>
          </div>
          <div className="bg-customGray-darkest">
            <GroupCard
              previewImageUrlList={[
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
              ]}
            ></GroupCard>
          </div>
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
