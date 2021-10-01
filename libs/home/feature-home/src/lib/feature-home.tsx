import { HomeHeader } from './home-header';
import { HomeFeed } from './home-feed';
import { MainLayout, MainSidebar } from '@readable/ui';

export const FeatureHome = () => {
  return (
    <MainLayout
      renderHeader={() => <HomeHeader />}
      renderSidebar={() => <MainSidebar />}
      renderSection={() => <HomeFeed />}
    />
  );
};
