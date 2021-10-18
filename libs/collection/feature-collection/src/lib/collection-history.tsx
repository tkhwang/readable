import {
  DEFAULT_CARD_COVER_IMAGE_URL,
  DEFAULT_FAVICON_IMAGE_URL,
  DEFAULT_PROFILE_IMAGE_URL,
} from '@readable/shared/util-common';
import { SmallShadowCard } from '@readable/ui';

export const CollectionHistory = () => {
  return (
    <>
      <div className="space-y-2">
        <div className="text-xl">Fresh Article I marked</div>
        <div className="flex flex-wrap -mx-2 -my-2">
          <div className="flex-1 p-2">
            <SmallShadowCard
              bookmarkersCount={0}
              cardOwner={{ name: 'name', profileImageUrl: DEFAULT_PROFILE_IMAGE_URL }}
              readersCount={0}
              tags={[{ id: '1', name: 'tag' }]}
              urlInfo={{
                cardImageUrl: DEFAULT_CARD_COVER_IMAGE_URL,
                description: 'description',
                logoImageUrl: DEFAULT_FAVICON_IMAGE_URL,
                siteName: 'sitename',
                title: 'title',
              }}
            />
          </div>
          <div className="flex-1 p-2">
            <SmallShadowCard
              bookmarkersCount={0}
              cardOwner={{ name: 'name', profileImageUrl: DEFAULT_PROFILE_IMAGE_URL }}
              readersCount={0}
              tags={[{ id: '1', name: 'tag' }]}
              urlInfo={{
                cardImageUrl: DEFAULT_CARD_COVER_IMAGE_URL,
                description: 'description',
                logoImageUrl: DEFAULT_FAVICON_IMAGE_URL,
                siteName: 'sitename',
                title: 'title',
              }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-xl">Recently I read</div>
        <div className="flex flex-wrap -mx-2 -my-2">
          <div className="flex-1 p-2">
            <SmallShadowCard
              bookmarkersCount={0}
              cardOwner={{ name: 'name', profileImageUrl: DEFAULT_PROFILE_IMAGE_URL }}
              readersCount={0}
              tags={[{ id: '1', name: 'tag' }]}
              urlInfo={{
                cardImageUrl: DEFAULT_CARD_COVER_IMAGE_URL,
                description: 'description',
                logoImageUrl: DEFAULT_FAVICON_IMAGE_URL,
                siteName: 'sitename',
                title: 'title',
              }}
            />
          </div>
          <div className="flex-1 p-2">
            <SmallShadowCard
              bookmarkersCount={0}
              cardOwner={{ name: 'name', profileImageUrl: DEFAULT_PROFILE_IMAGE_URL }}
              readersCount={0}
              tags={[{ id: '1', name: 'tag' }]}
              urlInfo={{
                cardImageUrl: DEFAULT_CARD_COVER_IMAGE_URL,
                description: 'description',
                logoImageUrl: DEFAULT_FAVICON_IMAGE_URL,
                siteName: 'sitename',
                title: 'title',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
