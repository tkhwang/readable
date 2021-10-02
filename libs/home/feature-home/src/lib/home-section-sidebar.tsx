import { HomePopularCollection } from './home-popular-collector';
import { HomeRecommendCollector } from './home-recommend-collector';

export const HomeSectionSidebar = () => {
  return (
    <>
      <div className="w-full bg-black py-5 px-6">
        <HomePopularCollection />
      </div>
      <div className="w-full mt-3 bg-black py-5 px-6">
        <HomeRecommendCollector />
      </div>
    </>
  );
};
