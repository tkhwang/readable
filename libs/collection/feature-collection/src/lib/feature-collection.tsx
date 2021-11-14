import { ResponsiveHeader, TwoColumnsLayout } from '@readable/ui';
import { CollectionHeaderProfile } from './collection-header-profile';
import { CollectionSection } from './collection-section';
import { CollectionSectionSidebar } from './collection-section-sidebar';

interface FeatureCollectionProps {
  userId: string;
}

export function FeatureCollection({ userId }: FeatureCollectionProps) {
  return (
    <TwoColumnsLayout
      renderHeader={() => <ResponsiveHeader renderProfileDropdown={() => <CollectionHeaderProfile />} />}
      renderFirstColumn={() => (
        <section className="md:col-span-9 col-span-12">
          <CollectionSection />
        </section>
      )}
      renderSecondColumn={() => (
        <section className="md:col-span-3 md:block hidden">
          <CollectionSectionSidebar />
        </section>
      )}
      renderFooter={() => <div className="mt-14 h-60"></div>}
    />
  );
}

export default FeatureCollection;
