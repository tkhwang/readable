import { MainHeader, TwoColumnsLayout } from '@readable/ui';
import { CollectionSection } from './collection-section';

export function FeatureCollection() {
  return (
    <TwoColumnsLayout
      renderHeader={() => <MainHeader renderProfileDropdown={() => <div>profile</div>} />}
      renderFirstColumn={() => <CollectionSection />}
      renderSecondColumn={() => <div></div>}
      renderFooter={() => <div></div>}
    />
  );
}

export default FeatureCollection;
