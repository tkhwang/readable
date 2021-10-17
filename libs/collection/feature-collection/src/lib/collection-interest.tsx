import { GroupCard, SmallGroupCard } from '@readable/ui';
import { DEFAULT_CARD_COVER_IMAGE_URL } from '@readable/shared/util-common';

export const CollectionInterest = () => {
  return (
    <div className="space-y-2">
      <div className="text-xl">My Readable board</div>
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

        <div className="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-6">
          <div className="bg-customGray-darkest flex-1">
            <SmallGroupCard
              previewImageUrlList={[
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
              ]}
            />
          </div>
          <div className="bg-customGray-darkest flex-1">
            <SmallGroupCard
              previewImageUrlList={[
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
              ]}
            />
          </div>
          <div className="bg-customGray-darkest flex-1">
            <SmallGroupCard
              previewImageUrlList={[
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
                DEFAULT_CARD_COVER_IMAGE_URL,
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
