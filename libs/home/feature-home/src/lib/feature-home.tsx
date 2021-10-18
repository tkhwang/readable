import { HomeHeader } from './home-header';
import { HomeFeed } from './home-feed';
import { TwoColumnsLayout } from '@readable/ui';
import { HomeSectionSidebar } from './home-section-sidebar';
import { HomeFeedFilter } from './home-feed-filter';

export const FeatureHome = () => {
  return (
    <TwoColumnsLayout
      renderHeader={() => <HomeHeader />}
      renderFirstColumn={() => (
        <section className="sm:col-span-8">
          <HomeFeed />
        </section>
      )}
      renderSecondColumn={() => (
        <section className="sm:col-span-4 sm:block hidden">
          <HomeSectionSidebar />
        </section>
      )}
      renderFooter={() => <div></div>}
    />
  );
};
