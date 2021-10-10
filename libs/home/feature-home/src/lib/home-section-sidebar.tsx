import { HomePopularCollection } from './home-popular-collector';
import { HomePopularHashtag } from './home-popular-hashtag';

export const HomeSectionSidebar = () => {
  return (
    <>
      <div className="bg-customGray-darkest">
        <HomePopularCollection />
      </div>
      <div className="mt-3 bg-customGray-darkest">
        <HomePopularHashtag />
      </div>
    </>
  );
};
