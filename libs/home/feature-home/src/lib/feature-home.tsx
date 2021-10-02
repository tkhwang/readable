import { HomeHeader } from './home-header';
import { HomeFeed } from './home-feed';
import { MainLayout, MainSidebar } from '@readable/ui';
import { HomeSectionSidebar } from './home-section-sidebar';

export const FeatureHome = () => {
  return (
    <MainLayout
      renderHeader={() => <HomeHeader />}
      renderSidebar={() => <MainSidebar />}
      renderSection={() => <HomeFeed />}
      renderSectionSidebar={() => <HomeSectionSidebar />}
    />
  );
};
