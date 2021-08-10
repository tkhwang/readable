import React from 'react';
import { usePaginationBookmarksViewModel } from '@readable/feed/data-access-pagination-bookmarks';
import { BookmarksViewController } from '@readable/feed/feature-bookmark';

export function FeedPage() {
  const viewModel = usePaginationBookmarksViewModel();

  return (
    <>
      FeedPage
      <BookmarksViewController viewModel={viewModel} />
    </>
  );
}

export default FeedPage;
