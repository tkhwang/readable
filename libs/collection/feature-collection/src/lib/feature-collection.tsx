import { ResponsiveHeader, TwoColumnsLayout } from '@readable/ui';
import { CollectionSection } from './collection-section';

export function FeatureCollection() {
  return (
    <TwoColumnsLayout
      renderHeader={() => <ResponsiveHeader renderProfileDropdown={() => <div>profile</div>} />}
      renderFirstColumn={() => (
        <section className="sm:col-span-9">
          <CollectionSection />
        </section>
      )}
      renderSecondColumn={() => (
        <section className="sm:col-span-3 sm:block hidden">
          <div></div>
        </section>
      )}
      renderFooter={() => <div></div>}
    />
  );
}

export default FeatureCollection;
