import { usePaginationBookmarks } from '@readable/shared/data-access-pagination-bookmarks';

export const FeedViewController = () => {
  const { data, loading, error } = usePaginationBookmarks();
};
