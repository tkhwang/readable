import React from 'react';
import { BookmarksViewController } from './BookmarksViewController';
import { useBookmarks } from './useBookmarks.query';

export function Bookmarks() {
  const viewModel = useBookmarks();

  return <BookmarksViewController viewModel={viewModel} />;
}
