import { HomePopularCollection } from './home-popular-collector';

export const HomeSectionSidebar = () => {
  return (
    <>
      <div className="w-full bg-black py-5 px-6">
        <HomePopularCollection />
      </div>
      <div className="w-full h-96 mt-3 bg-black"></div>
    </>
  );
};
