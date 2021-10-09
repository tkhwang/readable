import { HomeHeader } from './home-header';
import { HomeFeed } from './home-feed';
import { MainLayout, TwoColumnsLayout } from '@readable/ui';
import { HomeSectionSidebar } from './home-section-sidebar';
import { HomeFeedFilter } from './home-feed-filter';

export const FeatureHome = () => {
  return (
    <TwoColumnsLayout
      renderHeader={() => <div></div>}
      renderFirstColumn={() => <HomeFeed />}
      renderSecondColumn={() => <div></div>}
      renderFooter={() => <div></div>}
    />
  );
};
