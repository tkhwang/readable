import { gql } from '@apollo/client';
import { ViewModel } from '@readable/types/ViewModel';
import { useGetBookmarksQueryQuery } from './useBookmarks.query.generated';

const GET_BOOKMARKS = gql`
  query GetBookmarksQuery {
    bookmarks: bookmarks {
      url
      type
      siteName
      title
      imageUrl
      description
      tags
    }
  }
`;

export type BookmarksViewModel = ViewModel<typeof useBookmarks>;

export function useBookmarks() {
  const { data, loading, error } = useGetBookmarksQueryQuery();

  const bookmarks = data?.bookmarks ?? [];

  return {
    bookmarks,
    loading,
    error,
  };
}
