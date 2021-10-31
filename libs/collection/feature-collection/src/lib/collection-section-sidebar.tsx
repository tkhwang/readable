import { CollectionFollowHashtag } from './collection-follow-hashtag';
import { CollectionRecommendUsers } from './collection-recommend-users';

export const CollectionSectionSidebar = () => {
  return (
    <>
      <div className="bg-customGray-dark">
        <CollectionFollowHashtag />
      </div>
      <div className="mt-3 bg-customGray-dark">
        <CollectionRecommendUsers />
      </div>
    </>
  );
};
