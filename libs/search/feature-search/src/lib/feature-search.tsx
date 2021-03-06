import { ResponsiveHeader, TwoColumnsLayout } from '@readable/ui';
import { SearchFeed } from './search-feed';

export function FeatureSearch() {
  return (
    <TwoColumnsLayout
      renderHeader={() => <ResponsiveHeader renderProfileDropdown={() => <div>profile</div>} />}
      renderFirstColumn={() => <SearchFeed />}
      renderSecondColumn={() => <div></div>}
      renderFooter={() => <div></div>}
    />
  );
}

export default FeatureSearch;
