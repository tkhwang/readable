import { HomeHeader } from './home-header';
import { HomeFeed } from './home-feed';
import { MainLayout } from '@readable/ui';
import { HomeSectionSidebar } from './home-section-sidebar';
import { HomeFeedFilter } from './home-feed-filter';

export const FeatureHome = () => {
  return (
    <MainLayout
      renderHeader={() => <HomeHeader />}
      renderStickyArea={() => <HomeFeedFilter />}
      renderSidebar={() => <div />}
      renderSection={() => <HomeFeed />}
      renderSectionSidebar={() => <HomeSectionSidebar />}
    />
  );
};
