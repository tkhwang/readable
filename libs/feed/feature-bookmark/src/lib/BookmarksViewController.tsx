import { usePaginationBookmarksViewModel } from '@readable/feed/data-access-pagination-bookmarks';
import { BookmarkCard } from './BookmarkCard';

export const BookmarksViewController = () => {
  const { paginationBookmarks, loading, error } = usePaginationBookmarksViewModel();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {paginationBookmarks &&
        paginationBookmarks.edges.map(edge => {
          return <BookmarkCard bookmark={edge.node} />;
        })}
    </div>
  );
};
