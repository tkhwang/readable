import { gql } from '@apollo/client';
import { ViewModel } from '@readable/types/ViewModel';
import { useGetMyBookmarksQuery } from './useBookmarks.query.generated';

const GET_MY_BOOKMARKS = gql`
  query GetMyBookmarks {
    myBookmarks: myBookmarks {
      url
      type
      siteName
      title
      imageUrl
      description
      tags
      countFactful
      countEmotional
      countInspirational
    }
  }
`;

export type BookmarksViewModel = ViewModel<typeof useBookmarks>;

export function useBookmarks() {
  const { data: dataMyBookmarks, loading, error } = useGetMyBookmarksQuery();
  const myBookmarks = dataMyBookmarks?.myBookmarks ?? [];

  return {
    myBookmarks,
    loading,
    error,
  };
}
