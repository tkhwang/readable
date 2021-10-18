import { CollectionFollowHashtag } from './collection-follow-hashtag';
import { CollectionRecommendCollector } from './collection-recommend-collector';

export const CollectionSectionSidebar = () => {
  return (
    <>
      <div className="bg-customGray-dark">
        <CollectionFollowHashtag />
      </div>
      <div className="mt-3 bg-customGray-dark">
        <CollectionRecommendCollector />
      </div>
    </>
  );
};
