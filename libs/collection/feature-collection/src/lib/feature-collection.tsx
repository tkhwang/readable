import { MainHeader, MainLayout, MainSidebar } from '@readable/ui';
import { CollectionSection } from './collection-section';

export function FeatureCollection() {
  return (
    <MainLayout
      renderHeader={() => <MainHeader renderProfile={() => <div>profile</div>} />}
      renderSidebar={() => <MainSidebar />}
      renderSection={() => <CollectionSection />}
    />
  );
}

export default FeatureCollection;
