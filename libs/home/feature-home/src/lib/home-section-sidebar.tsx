import { HomePopularCollection } from './home-popular-collector';
import { HomePopularHashtag } from './home-popular-hashtag';

export const HomeSectionSidebar = () => {
  return (
    <section className="sm:col-span-4 sm:block hidden">
      <div className="bg-customGray-dark">
        <HomePopularCollection />
      </div>
      <div className="mt-3 bg-customGray-dark">
        <HomePopularHashtag />
      </div>
    </section>
  );
};
