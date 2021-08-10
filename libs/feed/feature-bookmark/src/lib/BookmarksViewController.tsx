import {
  PaginationBookmarksViewModel,
  usePaginationBookmarksViewModel,
} from '@readable/feed/data-access-pagination-bookmarks';
import { ViewController } from '@readable/shared/types';

export const BookmarksViewController: ViewController<PaginationBookmarksViewModel> = ({ viewModel }) => {
  const { paginationBookmarks, loading, error } = viewModel;

  return (
    <>
      BookmarksViewController
      {/* TODO(Teddy): Error */}
      {/* {paginationBookmarks.map(paginationBookmark => {
        return (
          <div className="bookmark" key={paginationBookmark.id}>
            <div className="bookmark-title">{paginationBookmark.title}</div>
            <div className="bookmark-description">{paginationBookmark.description}</div>
          </div>
        );
      })} */}
    </>
  );
};
