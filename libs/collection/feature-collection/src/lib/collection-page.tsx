import { CollectionHeader } from '@readable/ui';
import { BookmarksViewController } from '@readable/collection/feature-bookmark';

export function CollectionPage() {
  return (
    <>
      <CollectionHeader></CollectionHeader>
      <BookmarksViewController></BookmarksViewController>
    </>
  );
}

export default CollectionPage;
