import { CollectionHeader } from './collection-header';
import { CollectionNav } from './collection-nav';
import { Gallery, Step } from '@readable/ui';

export function FeatureCollection() {
  return (
    <>
      <header>
        <CollectionHeader />
      </header>
      <nav className="border-b border-dashed">
        <div className="max-w-7xl mr-auto ml-auto flex">
          <div className="w-1/4" />
          <CollectionNav />
        </div>
      </nav>
      <div className="bg-indigo-50">
        <div className="max-w-7xl mr-auto ml-auto flex">
          {/* TODO(zlrlo): heigth 제거 필요 */}
          <aside className="w-1/4 h-screen border-indigo-100 border-l border-r border-b "></aside>
          <main className="p-4 space-y-4">
            <article>
              <div className="border-2 h-52"></div>
            </article>
            <article>
              <h2 className="mb-2">Pinned</h2>
              <Gallery />
            </article>
            <article>
              <h2 className="mb-2">Activity</h2>
              <Step></Step>
            </article>
          </main>
        </div>
      </div>
      <footer></footer>
    </>
  );
}

export default FeatureCollection;
