import { ResponsiveHeader, TwoColumnsLayout } from '@readable/ui';
import { CollectionSection } from './collection-section';

export function FeatureCollection() {
  return (
    <TwoColumnsLayout
      renderHeader={() => <ResponsiveHeader renderProfileDropdown={() => <div>profile</div>} />}
      renderFirstColumn={() => <CollectionSection />}
      renderSecondColumn={() => <div></div>}
      renderFooter={() => <div></div>}
    />
  );
}

export default FeatureCollection;
