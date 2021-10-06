import { MainHeader, MainLayout } from '@readable/ui';
import { CollectionSection } from './collection-section';

export function FeatureCollection() {
  return (
    <MainLayout
      renderHeader={() => <MainHeader renderProfileDropdown={() => <div>profile</div>} />}
      renderSidebar={() => <div />}
      renderSection={() => <CollectionSection />}
    />
  );
}

export default FeatureCollection;
