import { CollectionHeader } from './collection-header';
import { CollectionNav } from './collection-nav';

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
          <main>
            <article></article>
          </main>
        </div>
      </div>
      <footer></footer>
    </>
  );
}

export default FeatureCollection;
